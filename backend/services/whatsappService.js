import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { default: makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');
import crypto from 'crypto';
const pino = require('pino');
import QRCode from 'qrcode';


class WhatsAppService {
    sock = null;
    status = 'disconnected';

    onQrCode = null;
    onNewMessage = null;
    onConnected = null;
    onDisconnected = null;
    onError = null;

    async initialize({ onQrCode, onNewMessage, onConnected, onDisconnected, onError }) {
        this.onQrCode = onQrCode;
        this.onNewMessage = onNewMessage;
        this.onConnected = onConnected;
        this.onDisconnected = onDisconnected;
        this.onError = onError;
        this.status = 'loading';

        const { state, saveCreds } = await useMultiFileAuthState('auth_info');

        this.sock = makeWASocket({
            auth: state,
            logger: pino({ level: 'info' }),
            printQRInTerminal: false,
            getMessage: async () => ({ conversation: 'Hello from InboxFlow' })
        });

        this.sock.ev.on('creds.update', saveCreds);

        this.sock.ev.on('connection.update', async ({ connection, lastDisconnect, qr }) => {
            try {
                if (qr) {
                    this.status = 'loading';
                    // Generate image from QR string
                    const qrImage = await QRCode.toDataURL(qr);

                    // Send the base64 image to frontend
                    if (this.onQrCode) this.onQrCode(qrImage);
                }

                if (connection === 'open') {
                    this.status = 'connected';
                    if (this.onConnected) this.onConnected();
                }

                if (connection === 'close') {
                    this.status = 'disconnected';
                    if (this.onDisconnected) this.onDisconnected();
                }
            } catch (error) {
                this.status = 'error';
                if (this.onError) this.onError(error);
            }
        });

        this.sock.ev.on('messages.upsert', async ({ messages }) => {
            const msg = messages[0];
            if (!msg.message || msg.key.fromMe || msg.key.remoteJid === 'status@broadcast') return;

            const messageText = msg.message.conversation || msg.message.extendedTextMessage?.text || '';
            const timestamp = msg.messageTimestamp * 1000;

            const messageData = {
                sender: msg.key.remoteJid,
                text: messageText,
                timestamp: timestamp
            };

            console.log(`📥 Received message: ${messageText} from ${remoteJid}`);

            if (this.onNewMessage) {
                this.onNewMessage(messageData);
            }
        });
    }

    async restart() {
        if (this.sock?.end) {
            this.sock.end();
        }
        await this.initialize({
            onQrCode: this.onQrCode,
            onNewMessage: this.onNewMessage,
            onConnected: this.onConnected,
            onDisconnected: this.onDisconnected,
            onError: this.onError
        });
    }

    async generateQR() {
        await this.restart();
    }

    async sendMessage(jid, text) {
        if (!this.sock) return;
        await this.sock.sendMessage(jid, { text });
    }

    async disconnect() {
        if (this.sock?.logout) {
            await this.sock.logout();
        }
        this.status = 'disconnected';
        if (this.onDisconnected) this.onDisconnected();
    }

    getStatus() {
        return this.status;
    }
}

const whatsappService = new WhatsAppService();
export default whatsappService;