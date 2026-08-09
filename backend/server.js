import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import adminRoutes from './routes/adminRoutes.js';
import checkoutRoutes from './routes/checkoutRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';
import { initializeAdminUser } from '../database/models/adminModel.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security Middlewares
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// Initialize Database Admin Credentials
initializeAdminUser();

// Mount Modular API Routes
app.use('/api/admin', adminRoutes);
app.use('/api/checkout', checkoutRoutes);

// Global Error Handler Middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`[EZER Backend API Server] Hardened backend running on http://localhost:${PORT}`);
});

export default app;
