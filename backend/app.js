import express from 'express';
import cors from 'cors';

import AuthenticationRoutes from './routes/AuthenticationRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware section before routes are defined
// we need these middleware to parse the request body and enable CORS.
app.use(cors());
app.use(express.json());

// Now we define the routes
app.use('/api/auth', AuthenticationRoutes);
app.use('/api/profile', UserProfileRoutes)
// app.use('/api/products', ProductRoutes);
// app.use('/api/admin', AdminRoutes);

// Next is the error handling middleware 
// Why is it here and not above routes is because
// we want to catch errors from all routes and handle them in one place.
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});