/***
 * Baileys uses node's crypto module for encryption
 * And when using ES module crypto is not automiatically available
 * As it it is while using commonjs so we manually import it and
 * And assign it to global.crypto so baileys can use it.
 * (makeWASocket): creates a WhatsApp WebSocket client.
 * (useMultiFileAuthState): manages session/authentication files.
 * (pino): a logger library used by baileys for logging events.
*/

import * as crypto from 'crypto';
global.crypto = crypto;
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { default: makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');
const pino = require('pino');

class WhatsAppService {
    constructor() {
        this.socket = null;              // WebSocket connection instance
        this.qrCodeCallback = null;      // Callback for new QR code
        this.messageCallback = null;     // Callback for new messages
        this.activeQR = null;            // Holds current QR code
        this.qrPromise = null;           // Promise that gets resolved once QR Code is available
        this.qrResolver = null;          // Function to resolve qrPromise

        this.initQRPromise();            // Initialize QR Promise on creation
    }

    /**
     * Initializes a new promise for QR code delivery.
     * This allows external callers to await the QR asynchronously.
     */
    initQRPromise() {
        this.qrPromise = new Promise((resolve) => {
            this.qrResolver = resolve;
        });
    }

    /**
     * Initializes the WhatsApp connection.
     * Sets up authentication, socket instance, and event handlers.
     * Accepts callback functions:
     * onQrCode: what to do when a QR is received.
     * onNewMessage: what to do when a new WhatsApp message comes in.
     * Uses useMultiFileAuthState to: Load or create auth files from the auth_info directory.
     * These files keep your login saved so you don’t scan the QR every time.
     * Calls makeWASocket() to: Create a connection to WhatsApp Web.
     * Sets up event listeners via this.setupEventHandlers().
    */
    async initialize({ onQrCode, onNewMessage }) {
        this.qrCodeCallback = onQrCode;
        this.messageCallback = onNewMessage;

        // Load or create auth state - stores login credentials.
        const { state, saveCreds } = await useMultiFileAuthState('auth_info');

        // Create socket with silent logging
        this.socket = makeWASocket({
            auth: state,
            logger: pino(),
            printQRInTerminal: false,
            getMessage: async (key) => ({
                conversation: 'Hello from your business'
            })
        });

        // Setup listeners for QR, messages, etc.
        this.setupEventHandlers(saveCreds);
    }

    /**
     * Returns the QR code if it's already available.
     * If not, waits for up to 30 seconds for a QR code to be generated.
     * If still no QR, throws a timeout error.
    */
    async getQR() {
        console.log('Fetching QR code...');
        if (this.activeQR) return this.activeQR;

        // If QR promise is not initialized, recreate it
        if (!this.qrResolver) this.initQRPromise();

        return Promise.race([
            this.qrPromise,
            new Promise((_, reject) =>
                setTimeout(() => reject(new Error('QR generation timeout')), 30000)
            )
        ]);
    }

    /**
     * This listens for: Connection updates ('connection.update')
     * If a QR code is sent by WhatsApp, it saves and shares it via your callback.
     * If the connection is successful (open), it logs that.
     * Incoming messages ('messages.upsert')
     * Passes the message to your callback.
     * Credential changes ('creds.update') Saves new credentials if needed.
    */
    setupEventHandlers(saveCreds) {
        this.socket.ev.on('connection.update', (update) => {
            console.log('Connection update:', update.connection);

            // New QR code received
            if (update.qr) {
                console.log('New QR code received');
                this.activeQR = update.qr;

                // Notify via callback
                if (this.qrCodeCallback) {
                    this.qrCodeCallback(update.qr);
                }

                // Resolve QR promise if one is pending
                if (this.qrResolver) {
                    this.qrResolver(update.qr);
                    this.qrResolver = null;
                }
            }

            // Connected successfully
            if (update.connection === 'open') {
                this.activeQR = null; // Clear QR after connection is established
                console.log('Successfully connected to WhatsApp');
            }
        });

        // Handle incoming messages
        this.socket.ev.on('messages.upsert', async (m) => {
            if (this.messageCallback) {
                await this.messageCallback(m.messages[0]);
            }
        });

        // Save updated credentials
        this.socket.ev.on('creds.update', saveCreds);
    }

    /**
     * Sends a message to a specific JID (phone number or group).
     *
     * @param {string} jid - WhatsApp ID (e.g., '123456789@s.whatsapp.net')
     * @param {Object} content - Message content (text, media, etc.)
     */
    async sendMessage(jid, content) {
        if (!this.socket) throw new Error('WhatsApp not initialized');
        return this.socket.sendMessage(jid, content);
    }

    /**
     * Restarts the socket connection, re-initializing handlers and session.
     * Closes the existing connection (if any).
     * Re-initializes the service using the same callbacks.
     * 
     */
    async restart() {
        if (this.socket) {
            await this.socket.end();  // Gracefully close existing socket
            this.socket = null;
        }

        // Re-initialize with the same callbacks
        return this.initialize({
            onQrCode: this.qrCodeCallback,
            onNewMessage: this.messageCallback
        });
    }
}

// Export a single instance of the service (singleton pattern)
const whatsappService = new WhatsAppService();
export default whatsappService;