import express from 'express';
import { createCheckoutOrder, verifyPayment } from '../controllers/checkoutController.js';
import { generalRateLimiter } from '../middleware/authMiddleware.js';

const router = express.Router();

// Order Creation Endpoint
router.post('/create-order', generalRateLimiter, createCheckoutOrder);

// Payment Verification Endpoint
router.post('/verify', generalRateLimiter, verifyPayment);

export default router;
