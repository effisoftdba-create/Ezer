import express from 'express';
import cors from 'cors';
import crypto from 'crypto';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import rateLimit from 'express-rate-limit';
import { z } from 'zod';
import bcrypt from 'bcryptjs';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Security Middlewares
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// Strict Auth Route Rate Limiter (Max 10 requests per 15 minutes)
const authRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { success: false, error: 'Too many login attempts. Please try again later.' },
  standardHeaders: true,
  legacyHeaders: false
});

// General Endpoint Rate Limiter (Max 100 requests per 15 minutes)
const generalRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { success: false, error: 'Too many requests. Please try again later.' },
  standardHeaders: true,
  legacyHeaders: false
});

// Data storage files
const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const COURSES_FILE = path.join(DATA_DIR, 'courses.json');
const PAYMENTS_FILE = path.join(DATA_DIR, 'payments.json');
const USERS_FILE = path.join(DATA_DIR, 'users.json');

function readJson(filePath, defaultValue) {
  try {
    if (fs.existsSync(filePath)) {
      return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
  } catch (err) {
    console.error(`Error reading ${filePath}:`, err);
  }
  return defaultValue;
}

function writeJson(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
    console.error(`Error writing ${filePath}:`, err);
  }
}

// Zod Input Validation Schemas
const loginSchema = z.object({
  username: z.string().min(3).max(50),
  password: z.string().min(6).max(100)
});

const checkoutOrderSchema = z.object({
  courseId: z.string().min(1),
  userId: z.string().optional(),
  userEmail: z.string().optional(),
  userPhone: z.string().optional()
});

const verifyPaymentSchema = z.object({
  razorpay_order_id: z.string().min(1),
  razorpay_payment_id: z.string().min(1),
  razorpay_signature: z.string().min(1),
  courseId: z.string().min(1),
  userId: z.string().optional()
});

// Admin Password setup without fixed string fallback
const adminPass = process.env.ADMIN_PASSWORD || crypto.randomBytes(16).toString('hex');
const defaultAdminPasswordHash = bcrypt.hashSync(adminPass, 12);
let users = readJson(USERS_FILE, []);
if (!users.some(u => u.username === 'admin')) {
  users.push({
    username: 'admin',
    passwordHash: defaultAdminPasswordHash,
    role: 'admin',
    createdAt: new Date().toISOString()
  });
  writeJson(USERS_FILE, users);
}

// Admin Authentication Route
app.post('/api/admin/login', authRateLimiter, async (req, res) => {
  try {
    const parseResult = loginSchema.safeParse(req.body);
    if (!parseResult.success) {
      return res.status(400).json({ success: false, error: 'Incorrect email or password' });
    }

    const { username, password } = parseResult.data;
    const currentUsers = readJson(USERS_FILE, users);
    const user = currentUsers.find(u => u.username === username);

    if (!user) {
      return res.status(401).json({ success: false, error: 'Incorrect email or password' });
    }

    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) {
      return res.status(401).json({ success: false, error: 'Incorrect email or password' });
    }

    const token = crypto.randomBytes(32).toString('hex');
    res.json({ success: true, token, username: user.username });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ success: false, error: 'Incorrect email or password' });
  }
});

// Checkout Order Endpoint
app.post('/api/checkout/create-order', generalRateLimiter, (req, res) => {
  try {
    const parseResult = checkoutOrderSchema.safeParse(req.body);
    if (!parseResult.success) {
      return res.status(400).json({ success: false, error: 'Invalid checkout parameters' });
    }

    const { courseId, userId } = parseResult.data;
    const courses = readJson(COURSES_FILE, []);
    const course = courses.find((c) => c.id === courseId || c.slug === courseId);

    const canonicalPriceINR = 9;
    const amountInPaise = canonicalPriceINR * 100;
    const orderId = `order_${Date.now()}_${crypto.randomBytes(4).toString('hex')}`;

    res.json({
      success: true,
      orderId,
      keyId: process.env.RAZORPAY_KEY_ID || '',
      amount: amountInPaise,
      currency: 'INR',
      courseTitle: course ? course.title : 'EZER Course',
      userId: userId || 'guest_user'
    });
  } catch (err) {
    console.error('Error creating checkout order:', err);
    res.status(500).json({ success: false, error: 'Failed to create order' });
  }
});

// Verify Payment Endpoint (Constant-time HMAC comparison)
app.post('/api/checkout/verify', generalRateLimiter, (req, res) => {
  try {
    const parseResult = verifyPaymentSchema.safeParse(req.body);
    if (!parseResult.success) {
      return res.status(400).json({ success: false, error: 'Invalid verification parameters' });
    }

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, courseId, userId } = parseResult.data;
    const secret = process.env.RAZORPAY_KEY_SECRET;

    if (!secret && process.env.NODE_ENV === 'production') {
      return res.status(500).json({ success: false, error: 'Payment gateway unconfigured' });
    }

    const secretKey = secret || 'dev_secret_key_sample';
    const expectedSignature = crypto
      .createHmac('sha256', secretKey)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    const expectedBuffer = Buffer.from(expectedSignature, 'utf8');
    const actualBuffer = Buffer.from(razorpay_signature, 'utf8');

    const isValid = expectedBuffer.length === actualBuffer.length &&
      crypto.timingSafeEqual(expectedBuffer, actualBuffer);

    if (!isValid && process.env.NODE_ENV === 'production') {
      return res.status(400).json({ success: false, error: 'Payment verification failed' });
    }

    const payments = readJson(PAYMENTS_FILE, []);
    const paymentRecord = {
      id: razorpay_payment_id,
      orderId: razorpay_order_id,
      courseId,
      userId: userId || 'guest',
      amount: 9,
      currency: 'INR',
      status: 'paid',
      createdAt: new Date().toISOString()
    };
    payments.push(paymentRecord);
    writeJson(PAYMENTS_FILE, payments);

    res.json({
      success: true,
      message: 'Payment verified successfully',
      payment: paymentRecord
    });
  } catch (err) {
    console.error('Error verifying payment:', err);
    res.status(500).json({ success: false, error: 'Verification failed' });
  }
});

// Error handling middleware to prevent internal leakage
app.use((err, req, res, next) => {
  console.error('[Server Internal Error]:', err);
  res.status(500).json({ success: false, error: 'An unexpected internal error occurred' });
});

app.listen(PORT, () => {
  console.log(`[EZER API Server] Hardened backend running on http://localhost:${PORT}`);
});
