import express from 'express';
import cors from 'cors';

import AuthenticationRoutes from './routes/AuthenticationRoutes.js';
import UserProfileRoutes from './routes/UserProfileRoutes.js';
import WhatsappRoutes from './routes/whatsappRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Apply middlewares
app.use(cors());
app.use(express.json());

// Register routes
app.use('/api/auth', AuthenticationRoutes);
app.use('/api/profile', UserProfileRoutes);
app.use('/api/whatsapp', WhatsappRoutes);

// Centralized error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start server and initialize WhatsApp
app.listen(PORT, () => {
    // Log server status and access URL to the console
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);

    /**
     * Dynamically import the WhatsApp service after the server has started.
     * This ensures that all Express middlewares and routes are registered
     * before the WhatsApp connection is attempted. Ensure that if Whataspp
     * connection fails then other routes are safe though.
     */
    import('./services/whatsappService.js')
        .then(({ default: whatsapp }) => {
            /**
             * Initialize the WhatsApp connection.
             * - `onQrCode`: A callback that will be triggered when a new QR code is generated.
             *   In this case, we log a message instructing users where to fetch the QR visually.
             * - `onNewMessage`: A callback to handle incoming WhatsApp messages.
             *   For now, we just log that the handler is active.
             */
            whatsapp.initialize({
                onQrCode: (qr) => console.log('QR received, visit /api/whatsapp/qr to see it'),
                onNewMessage: () => console.log('Incoming WhatsApp message handler ready')
            });
        })
        .catch((err) => {
            // Catch and log any errors that occur during dynamic import or WhatsApp initialization
            console.error('Failed to initialize WhatsApp service:', err);
        });
});
