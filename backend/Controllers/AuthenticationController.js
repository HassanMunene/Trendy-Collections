import databasePool from "../Configurations/database";
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
            return res.status(409).json({ message: "User already exists" });
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

        return res.status(201).json({ message: "User registered successfully" });
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
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Compare the password with the hashed password
        const isPasswordValid = await bcrypt.compare(password, user[0].password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Generate a JWT token
        const token = jwt.sign(
            { id: user[0].id, email: user[0].email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        // on the return statement I would like to return the user details and the token too.
        return res.status(200).json({ "user": user[0], "token": token})
    } catch (error) {
        console.error("Error logging in user:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};