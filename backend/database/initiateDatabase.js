import fs from 'fs';
import path from 'path';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

// Fix __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env variables from backend/.env
dotenv.config({ path: path.resolve(__dirname, '../.env') });


async function initializeDatabase() {
    //connect to mysql server without even specifying the database.
    const db = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        multipleStatements: true,
    });

    try {
        // 1. Create the database if it doesn't exist
        await db.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DATABASE_NAME}\`;`);
        console.log(`Database '${process.env.DATABASE_NAME}' is ready.`);

        // 2. Now switch to that database
        await db.changeUser({ database: process.env.DATABASE_NAME });

        // 3. Read the schema file
        const schemaPathLocation = path.join(__dirname, 'schema.sql');
        const schema = fs.readFileSync(schemaPathLocation, 'utf8');

        // 4. Apply the schema
        await db.query(schema);
        console.log("Database schema applied successfully!");
    } catch (error) {
        console.error("Error initializing the database:", error);
    } finally {
        await db.end();
    }
}

initializeDatabase();