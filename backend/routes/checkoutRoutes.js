import express from 'express';
import { createCheckoutOrder, verifyPayment, createUpiOrder, submitUtr } from '../controllers/checkoutController.js';
import { generalRateLimiter } from '../middleware/authMiddleware.js';

const router = express.Router();

// Order Creation Endpoint (Standard Gateway)
router.post('/create-order', generalRateLimiter, createCheckoutOrder);

// UPI Specific Order Payload & App Intents Endpoint
router.post('/create-upi-order', generalRateLimiter, createUpiOrder);

// 12-Digit UTR Direct P2M Submission Endpoint
router.post('/submit-utr', generalRateLimiter, submitUtr);

// Payment Verification Endpoint
router.post('/verify', generalRateLimiter, verifyPayment);

export default router;

