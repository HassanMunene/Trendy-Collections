import databasePool from "../configurations/database.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";

dotenv.config();

// Function to register a new user
export const registerController = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if the user already exists
        const [existingUser] = await databasePool.query(
            "SELECT * FROM users WHERE email = ?",
            [email]
        );

        if (existingUser.length > 0) {
            return res.status(409).json({ status: "fail", message: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = {
            id: uuidv4(),
            username: username,
            email: email,
            password: hashedPassword,
        };

        await databasePool.query("INSERT INTO users SET ?", newUser);

        return res.status(201).json({ status: "success", message: "User registered successfully" });
    } catch (error) {
        console.error("Error registering user:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

// Function to login a user
export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const [user] = await databasePool.query(
            "SELECT * FROM users WHERE email = ?",
            [email]
        );

        if (user.length === 0) {
            return res.status(401).json({ status: "fail", message: "Invalid credentials" });
        }

        // Compare the password with the hashed password
        const isPasswordValid = await bcrypt.compare(password, user[0].password);

        if (!isPasswordValid) {
            return res.status(401).json({ status: "fail", message: "Invalid credentials" });
        }

        // Generate a JWT token
        const token = jwt.sign(
            { id: user[0].id, email: user[0].email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        const { username, email: userEmail, role, avatar, created_at } = user[0];
        const userData = {
            "username": username,
            "email": userEmail,
            "role": role,
            "avatar": avatar,
            "createdAt": created_at
        }

        // on the return statement I would like to return the user details and the token too.
        return res.status(200).json({ status: "success", "user": userData, "token": token })
    } catch (error) {
        console.error("Error logging in user:", error);
        return res.status(500).json({ status: "server fail", message: "Internal server error" });
    }
};

// Function to change the password
export const changePassword = async (req, res) => {
    const { currentPassword, newPassword } = req.body;
    const userId = req.user.id;

    // Validate input
    if (!currentPassword || !newPassword) {
        return res.status(400).json({
            success: false,
            message: 'Current and new password are required'
        });
    }

    if (currentPassword === newPassword) {
        return res.status(400).json({
            success: false,
            message: 'New password must be different from current password'
        });
    }

    try {
        // Get user from database
        const [users] = await databasePool.execute(
            'SELECT id, password FROM users WHERE id = ?',
            [userId]
        );

        if (users.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        const user = users[0];

        // Verify current password to ensure it is the correct password.
        const isMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: 'Current password is incorrect'
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update password in database
        await databasePool.execute(
            'UPDATE users SET password = ?, password_changed_at = NOW() WHERE id = ?',
            [hashedPassword, userId]
        );

        res.json({
            success: true,
            message: 'Password updated successfully'
        });

    } catch (error) {
        console.error('Password change error:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred while changing password',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
}