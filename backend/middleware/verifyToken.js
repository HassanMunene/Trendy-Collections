import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const verifyToken = (req, res, next) => {
    // get the token from the header
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Access denied. No token provided.'
        });
    }

    try {
        // Verify the token using our secret key
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach the decoded payload data to the request object.
        req.user = {
            id: decoded.id,
            email: decoded.email
        };

        // proceed to the next middleware or controller
        next();
    } catch (error) {
        // Handle different JWT error cases
        let message = 'Invalid token';

        if (error instanceof jwt.TokenExpiredError) {
            message = 'Token Expired';
        } else if (error instanceof jwt.JsonWebTokenError) {
            message = 'Token Verification failed.';
        }

        return res.status(401).json({
            success: false,
            message: message,
            // Only include error details in development
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
}