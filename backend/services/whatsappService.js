/***
 * Baileys uses node's crypto module for encryption
 * And when using ES module crypto is not automiatically available
 * As it it is while using commonjs so we manually import it and
 * And assign it to global.crypto so baileys can use it.
 * (makeWASocket): creates a WhatsApp WebSocket client.
 * (useMultiFileAuthState): manages session/authentication files.
 * (pino): a logger library used by baileys for logging events.
*/

import { timeStamp } from 'console';
import * as crypto from 'crypto';
global.crypto = crypto;
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { default: makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');
const pino = require('pino');

class WhatsAppService {
    constructor() {
        this.socket = null;
        this.connectionState = {
            isConnected: false,
            lastActive: null,
            qrGenerations: 0,
            connectionHistory: []
        };
        this.initQRPromise();
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
        try {
            // Load or create auth state - stores login credentials.
            const { state, saveCreds } = await useMultiFileAuthState('auth_info');

            // Create socket with silent logging
            this.socket = makeWASocket({
                auth: state,
                logger: pino({ level: 'silent' }), // we will not display the logs for now.
                printQRInTerminal: false,
                getMessage: async (key) => ({ conversation: 'Hello from Trendy Collections.' })
            });

            // Setup listeners for QR, messages, etc.
            this.setupEventHandlers(saveCreds, onQrCode, onNewMessage);
        } catch (error) {
            console.error('Initialization error:', error);
            await delay(5000);
            console.log("Re-initializing Again...");
            this.initialize({ onQrCode, onNewMessage });
        }
    }

    setupEventHandlers(saveCreds, onQrCode, onNewMessage) {
        this.socket.ev.on('connection.update', (update) => {
            const event = {
                timeStamp: new Date(),
                type: 'connection',
                data: update
            }
            this.connectionState.connectionHistory.push(event);

            if (update.qr) {
                this.connectionState.qrGenerations++;
                this.connectionState.isConnected = false;
                this.activeQR = update.qr;

                if (onQrCode) onQrCode(update.qr);
                // Resolve QR promise if one is pending
                if (this.qrResolver) {
                    this.qrResolver(update.qr);
                    this.qrResolver = null;
                }
            }

            // Connected successfully
            if (update.connection === 'open') {
                this.connectionState.isConnected = true;
                this.connectionState.lastActive = new Date();
                // Clear QR after connection is Established successfully
                this.activeQR = null;
                console.log('Successfully connected to WhatsApp');
            }

            if (update.connection === 'close') {
                this.connectionState.isConnected = false;
                setTimeout(() => this.restart(), 5000);
            }
        });

        // Handle incoming messages
        this.socket.ev.on('messages.upsert', async (m) => {
            if (onNewMessage) await onNewMessage(m.messages[0]);
            this.connectionState.lastActive = new Date();
        });

        // Save updated credentials
        this.socket.ev.on('creds.update', saveCreds);
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

    async disconnect() {
        if (this.socket) {
            await this.socket.end();
            this.connectionState.isConnected = false;
            this.connectionState.connectionHistory.push({
                timestamp: new Date(),
                type: 'disconnected'
            });
        }
    }

    async restart() {
        await this.disconnect();
        return this.initialize({
            onQrCode: this.onQrCode,
            onNewMessage: this.onNewMessage
        });
    }


    getStatus() {
        return {
            ...this.connectionState,
            history: [...this.connectionState.connectionHistory].reverse()
        };
    }
}

// Export a single instance of the service (singleton pattern)
const whatsappService = new WhatsAppService();
export default whatsappService;