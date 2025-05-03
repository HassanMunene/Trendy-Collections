// controllers/whatsappController.js

import qrcode from 'qrcode';
import whatsappService from '../services/whatsappService.js';

/**
 * Controller: generateQR
 * -----------------------
 * Generates a WhatsApp login QR code using the Baileys library via whatsappService,
 * and streams it to the client as a PNG image.
 *
 * Typical use case:
 * - Client makes a GET request to this endpoint
 * - This function fetches a WhatsApp QR code string
 * - The QR code is rendered as an image and streamed in the response
 *
 * If the QR code is not immediately available, the request may wait briefly
 * or return a service unavailable response.
 */
export const generateQR = async (req, res) => {
    try {
        // Request QR code string from the WhatsApp service
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
            width: 200, // Output image size in pixels
            errorCorrectionLevel: 'H' // High level of error correction
        });

        // Optional (for debugging or CLI use): render QR as ASCII art
        // qrcode.toString(qrData, { small: true }, (err, url) => {
        //   res.send(`<pre>${url}</pre>`);
        // });

    } catch (err) {
        // Log and respond with a generic error message
        console.error("Error generating QR:", err);
        res.status(500).json({ error: 'QR generation failed' });
    }
};