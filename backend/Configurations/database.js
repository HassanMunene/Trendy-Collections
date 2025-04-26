//import mysql2 library with promise support so we can use async await

import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

//load environment variables into process.env
dotenv.config();


//create a connection pool to the database, these pools will be resused for each request.
const databasePool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default databasePool;