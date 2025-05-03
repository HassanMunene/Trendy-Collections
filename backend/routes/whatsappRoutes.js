import express from 'express';
import qrcode from 'qrcode';

import whatsappService from '../services/whatsappService.js';

const router = express.Router();

// This handles /api/whatsapp/qr
router.get('/qr', async (req, res) => {
    try {
        const qrData = await whatsappService.getQR();
        // If no QR is available, respond with 503 (Service Unavailable)
        if (!qrData) {
            return res.status(503).json({ error: 'QR code not available yet' });
        }

        // Set response content type to PNG
        res.setHeader('Content-Type', 'image/png');

        // Convert QR string into a PNG image and stream it to the response
        qrcode.toFileStream(res, qrData, {
            type: 'png',
            width: 300, // Output image size in pixels
            errorCorrectionLevel: 'H', // High level of error correction
            margin: 2
        });

    } catch (error) {
        // Log and respond with a generic error message
        console.error("Error generating QR:", error);
        res.status(503).json({ error: error.message });
    }
});

router.get('/status', (req, res) => {
    res.json(whatsappService.getStatus());
});

router.post('/disconnect', async (req, res) => {
    await whatsappService.disconnect();
    res.json({ success: true, message: "whatsapp disconnected" });
});

router.post('/restart', async (req, res) => {
    await whatsappService.restart();
    res.json({ success: true });
});

export default router;