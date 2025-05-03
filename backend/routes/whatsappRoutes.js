import express from 'express';

import { generateQR } from '../controllers/whatsappController.js';

const router = express.Router();

// This handles /api/whatsapp/qr
router.get('/qr', generateQR);

export default router;