import express from 'express';
import { adminLogin } from '../controllers/adminController.js';
import { authRateLimiter } from '../middleware/authMiddleware.js';

const router = express.Router();

// Admin Authentication Route
router.post('/login', authRateLimiter, adminLogin);

export default router;
