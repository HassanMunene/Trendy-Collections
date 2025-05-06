// Import required modules
import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server as SocketIoServer } from 'socket.io';

// Import route handlers and services
import AuthenticationRoutes from './routes/AuthenticationRoutes.js';
import UserProfileRoutes from './routes/UserProfileRoutes.js';
import whatsappService from './services/whatsappService.js';

// Initialize Express application
const app = express();

// Create HTTP server using Express app
const server = http.createServer(app);

// Initialize Socket.IO server with CORS configuration
const io = new SocketIoServer(server, {
    cors: {
        origin: "*", // Allow connections from any origin (in production restrict this!)
        methods: ["GET", "POST"] // Allow only GET and POST methods
    }
});

const PORT = process.env.PORT || 5000;

// Apply middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies in incoming requests

// Set up route handlers
app.use('/api/auth', AuthenticationRoutes);
app.use('/api/profile', UserProfileRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Socket.IO connection handler
io.on('connection', async (socket) => {
    console.log(`🟢 Client connected: ${socket.id}`);

    // Emit current status
    socket.emit("status", whatsappService.getStatus());

    // Setup WhatsApp event handlers
    await whatsappService.initialize({
        onQrCode: (qr) => socket.emit('qr', qr),
        onNewMessage: (msg) => socket.emit('message', msg),
        onConnected: () => socket.emit('connected'),
        onDisconnected: () => socket.emit('disconnected'),
        onError: (err) => socket.emit('error', err?.message || 'Unknown error')
    });

    // Socket commands from client
    socket.on('generate-qr', async () => {
        await whatsappService.generateQR();
    });

    socket.on('disconnect-whatsapp', async () => {
        await whatsappService.disconnect();
        socket.emit('disconnected');
    });

    socket.on('send-message', async ({ jid, text }) => {
        await whatsappService.sendMessage(jid, text);
    });

    socket.on('disconnect', () => {
        console.log(`🔴 Client disconnected: ${socket.id}`);
    });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});