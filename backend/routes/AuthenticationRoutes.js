import express from 'express';
import {
    loginController,
    registerController
} from '../controllers/AuthenticationController.js';
import rateLimit from 'express-rate-limit';
// import { verifyToken } from '../middleware/verifyToken.js';
// import { verifyAdmin } from '../middleware/verifyAdmin.js';
// import { verifyUser } from '../middleware/verifyUser.js';

const router = express.Router();

// First of all we need to rate limit the authentication endpoints
// This is to prevent brute force attacks on the login endpoint
// one Ip address can only make 20 requests in 15 minutes

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 20,
    message: 'Too many requests from this IP, please try again later'
});


// POST /api/auth/register
router.post('/register', registerController);

// POST /api/auth/login
router.post('/login', authLimiter, loginController);

export default router;