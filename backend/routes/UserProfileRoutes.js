import express from 'express';
import { updateProfileController } from '../controllers/UserProfileController.js';

import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();



// PUT /api/profile/update
router.put('/update-profile', verifyToken, updateProfileController);