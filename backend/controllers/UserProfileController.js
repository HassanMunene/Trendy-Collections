import jwt from 'jsonwebtoken';

import databasePool from '../configurations/database.js';

export const updateProfileController = async (req, res) => {
    const userId = req.user.id;
    const { username, email, avatar } = req.body;

    // Validate required fields
    if (!username || !email) {
        return res.status(400).json({
            success: false,
            message: 'Name and email are required fields'
        });
    }

    try {
        // Check if email is being changed to one that already exists in our database.
        const [existingEmail] = await databasePool.execute(
            'SELECT id FROM users WHERE email = ? AND id != ?',
            [email, userId]
        );

        if (existingEmail.length > 0) {
            return res.status(400).json({
                success: false,
                message: 'Email already in use by another account'
            });
        }

        // Update user in database
        const [result] = await pool.execute(
            `UPDATE users SET username = ?, email = ?, avatar = ?, updated_at = CURRENT_TIMESTAMP 
         WHERE id = ?`,
            [username, email, avatar || null, userId]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        // Fetch updated user data
        const [updatedUser] = await pool.execute(
            'SELECT id, username, email, avatar, role FROM users WHERE id = ?',
            [userId]
        );

        // Generate new token with updated user data (optional)
        const token = jwt.sign(
            { id: updatedUser[0].id, email: updatedUser[0].email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        // Return success response with updated user data
        res.status(200).json({
            success: true,
            message: 'Profile updated successfully',
            user: {
                id: updatedUser[0].id,
                username: updatedUser[0].username,
                email: updatedUser[0].email,
                avatar: updatedUser[0].avatar,
                role: updatedUser[0].role
            },
            token
        });

    } catch (error) {
        console.error('Profile update error:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred while updating profile',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
};