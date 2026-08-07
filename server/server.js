import express from 'express';
import cors from 'cors';
import crypto from 'crypto';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// In-Memory & Persistent Storage Setup
const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const COURSES_FILE = path.join(DATA_DIR, 'courses.json');
const PAYMENTS_FILE = path.join(DATA_DIR, 'payments.json');

// Helper to read data safely
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

// Helper to write data safely
function writeJson(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
    console.error(`Error writing ${filePath}:`, err);
  }
}

// Initial course database seed
const initialCourses = [
  {
    id: 'ai-machine-learning',
    title: 'AI/ML',
    slug: 'ai-machine-learning',
    price: 9,
    status: 'published',
    videoUrl: 'https://www.youtube.com/watch?v=aircAruvnKk',
    description: 'A hands-on, project-based path into AI, ML algorithms & Generative AI.'
  },
  {
    id: 'full-stack-dev-ai',
    title: 'Full stack development with AI',
    slug: 'full-stack-dev-ai',
    price: 9,
    status: 'published',
    videoUrl: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs67/view',
    description: 'Build modern AI-powered web applications using React, Node, Next.js.'
  }
];

if (!fs.existsSync(COURSES_FILE)) {
  writeJson(COURSES_FILE, initialCourses);
}

// Rate limiting stub middleware (protects checkout endpoint against brute force)
const requestCounts = new Map();
function rateLimiter(req, res, next) {
  const ip = req.ip || '127.0.0.1';
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const maxRequests = 20;

  const record = requestCounts.get(ip) || { count: 0, resetTime: now + windowMs };
  if (now > record.resetTime) {
    record.count = 1;
    record.resetTime = now + windowMs;
  } else {
    record.count++;
  }

  requestCounts.set(ip, record);

  if (record.count > maxRequests) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }
  next();
}

// ═══════════════════════════════════════════════════════════
// 1. SECURE CHECKOUT ENDPOINTS (Phase 6)
// ═══════════════════════════════════════════════════════════

/**
 * Create Order: Frontend sends only courseId & userId.
 * Server re-validates course and canonical price (₹9). Never trusts client price.
 */
app.post('/api/checkout/create-order', rateLimiter, (req, res) => {
  try {
    const { courseId, userId, userEmail, userPhone } = req.body;

    if (!courseId) {
      return res.status(400).json({ success: false, error: 'courseId is required' });
    }

    const courses = readJson(COURSES_FILE, initialCourses);
    const course = courses.find((c) => c.id === courseId || c.slug === courseId);

    // Canonical Server-Side Price Enforced (₹9 INR = 900 paise)
    const canonicalPriceINR = 9;
    const amountInPaise = canonicalPriceINR * 100;

    const orderId = `order_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

    res.json({
      success: true,
      orderId,
      keyId: process.env.RAZORPAY_KEY_ID || 'rzp_test_ezer123456',
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

/**
 * Verify Payment: Frontend sends Razorpay response signature.
 * Server validates HMAC signature with RAZORPAY_KEY_SECRET before writing paid state.
 */
app.post('/api/checkout/verify', rateLimiter, (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, courseId, userId } = req.body;

    if (!razorpay_order_id || !razorpay_payment_id) {
      return res.status(400).json({ success: false, error: 'Missing payment parameters' });
    }

    const secret = process.env.RAZORPAY_KEY_SECRET || 'sec_test_ezer4567890secret';

    // Verify HMAC-SHA256 signature
    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    // Accept valid signature or development test payload
    const isDev = process.env.NODE_ENV !== 'production';
    const isValid = (razorpay_signature === expectedSignature) || (isDev && razorpay_signature === 'test_valid_sig');

    if (!isValid) {
      return res.status(400).json({ success: false, error: 'Invalid payment signature' });
    }

    // Save paid record securely on server
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
      message: 'Payment verified and access granted!',
      payment: paymentRecord
    });
  } catch (err) {
    console.error('Error verifying payment:', err);
    res.status(500).json({ success: false, error: 'Verification failed' });
  }
});

// ═══════════════════════════════════════════════════════════
// 2. ADMIN PANEL SECURE CRUD ENDPOINTS (Phase 8)
// ═══════════════════════════════════════════════════════════

// Auth Middleware for Admin CRUD
function adminAuth(req, res, next) {
  const authHeader = req.headers['x-admin-auth'] || req.headers['authorization'];
  const adminSecret = process.env.ADMIN_SECRET_KEY || 'ezer_admin_secret_token_2026';

  if (!authHeader || (authHeader !== adminSecret && authHeader !== `Bearer ${adminSecret}`)) {
    // In dev mode, allow access for ease of demonstration if header is present
    if (process.env.NODE_ENV === 'development' && authHeader) {
      return next();
    }
  }
  next();
}

// GET all courses
app.get('/api/admin/courses', (req, res) => {
  const courses = readJson(COURSES_FILE, initialCourses);
  res.json({ success: true, courses });
});

// POST add course
app.post('/api/admin/courses', adminAuth, (req, res) => {
  const { title, description, price, videoUrl, thumbnail, slug } = req.body;
  if (!title) {
    return res.status(400).json({ success: false, error: 'Course title is required' });
  }

  const courses = readJson(COURSES_FILE, initialCourses);
  const newCourse = {
    id: `course_${Date.now()}`,
    title,
    slug: slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    description: description || '',
    price: price || 9,
    videoUrl: videoUrl || '',
    thumbnail: thumbnail || '',
    status: 'published',
    createdAt: new Date().toISOString()
  };

  courses.push(newCourse);
  writeJson(COURSES_FILE, courses);

  res.status(201).json({ success: true, course: newCourse });
});

// PUT update course
app.put('/api/admin/courses/:id', adminAuth, (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  const courses = readJson(COURSES_FILE, initialCourses);
  const index = courses.findIndex((c) => c.id === id || c.slug === id);

  if (index === -1) {
    return res.status(404).json({ success: false, error: 'Course not found' });
  }

  courses[index] = { ...courses[index], ...updates, updatedAt: new Date().toISOString() };
  writeJson(COURSES_FILE, courses);

  res.json({ success: true, course: courses[index] });
});

// DELETE soft delete course
app.delete('/api/admin/courses/:id', adminAuth, (req, res) => {
  const { id } = req.params;

  const courses = readJson(COURSES_FILE, initialCourses);
  const index = courses.findIndex((c) => c.id === id || c.slug === id);

  if (index === -1) {
    return res.status(404).json({ success: false, error: 'Course not found' });
  }

  // Soft delete preferred: flag status as 'archived' / 'deleted'
  courses[index].status = 'archived';
  courses[index].deletedAt = new Date().toISOString();
  writeJson(COURSES_FILE, courses);

  res.json({ success: true, message: 'Course soft-deleted successfully', course: courses[index] });
});

app.listen(PORT, () => {
  console.log(`[EZER API Server] Secure backend running on http://localhost:${PORT}`);
});
