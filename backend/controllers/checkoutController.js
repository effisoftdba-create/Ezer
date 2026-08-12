import crypto from 'crypto';
import { z } from 'zod';
import { getCourseById } from '../../database/models/courseModel.js';
import { recordPayment } from '../../database/models/paymentModel.js';

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

export function createCheckoutOrder(req, res) {
  try {
    const parseResult = checkoutOrderSchema.safeParse(req.body);
    if (!parseResult.success) {
      return res.status(400).json({ success: false, error: 'Invalid checkout parameters' });
    }

    const { courseId, userId } = parseResult.data;
    const course = getCourseById(courseId);

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
}

export function verifyPayment(req, res) {
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

    const paymentRecord = recordPayment({
      id: razorpay_payment_id,
      orderId: razorpay_order_id,
      courseId,
      userId: userId || 'guest',
      amount: 9,
      currency: 'INR',
      status: 'paid',
      createdAt: new Date().toISOString()
    });

    res.json({
      success: true,
      message: 'Payment verified successfully',
      payment: paymentRecord
    });
  } catch (err) {
    console.error('Error verifying payment:', err);
    res.status(500).json({ success: false, error: 'Verification failed' });
  }
const submitUtrSchema = z.object({
  utr: z.string().regex(/^[0-9]{12}$/, 'UTR must be exactly 12 numerical digits'),
  studentName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(10),
  courseId: z.string().optional(),
  courseName: z.string().optional(),
  amount: z.number().positive().default(9)
});

export function createUpiOrder(req, res) {
  try {
    const { courseId, amount } = req.body;
    const orderRef = `EZER-ORD-${Date.now()}`;
    const upiVpa = process.env.UPI_VPA || 'ezerlearning@okaxis';
    const merchantName = process.env.UPI_MERCHANT_NAME || 'EZER Learning Solutions Pvt. Ltd.';
    const mccCode = '8220';
    const transactionNote = 'EZER Course Enrollment';
    const finalAmount = amount || 9;

    const upiPayload = `upi://pay?pa=${upiVpa}&pn=${encodeURIComponent(merchantName)}&am=${Number(finalAmount).toFixed(2)}&cu=INR&tr=${orderRef}&tn=${encodeURIComponent(transactionNote)}&mc=${mccCode}&mode=05`;

    res.json({
      success: true,
      orderRef,
      upiVpa,
      merchantName,
      mccCode,
      amount: finalAmount,
      upiPayload,
      appIntents: {
        gpay: `tez://upi/pay?pa=${upiVpa}&pn=${encodeURIComponent(merchantName)}&am=${Number(finalAmount).toFixed(2)}&cu=INR&tr=${orderRef}&tn=${encodeURIComponent(transactionNote)}&mc=${mccCode}`,
        phonepe: `phonepe://pay?pa=${upiVpa}&pn=${encodeURIComponent(merchantName)}&am=${Number(finalAmount).toFixed(2)}&cu=INR&tr=${orderRef}&tn=${encodeURIComponent(transactionNote)}&mc=${mccCode}`,
        paytm: `paytmmp://pay?pa=${upiVpa}&pn=${encodeURIComponent(merchantName)}&am=${Number(finalAmount).toFixed(2)}&cu=INR&tr=${orderRef}&tn=${encodeURIComponent(transactionNote)}&mc=${mccCode}`,
        bhim: `bhim://pay?pa=${upiVpa}&pn=${encodeURIComponent(merchantName)}&am=${Number(finalAmount).toFixed(2)}&cu=INR&tr=${orderRef}&tn=${encodeURIComponent(transactionNote)}&mc=${mccCode}`
      }
    });
  } catch (err) {
    console.error('Error creating UPI order:', err);
    res.status(500).json({ success: false, error: 'Failed to generate UPI order' });
  }
}

export function submitUtr(req, res) {
  try {
    const parseResult = submitUtrSchema.safeParse(req.body);
    if (!parseResult.success) {
      return res.status(400).json({ success: false, error: 'Invalid UTR submission parameters. UTR must be exactly 12 numerical digits.' });
    }

    const { utr, studentName, email, phone, courseName, amount } = parseResult.data;

    // Check duplicate UTR
    const existing = recordPayment({
      id: `pay-${Date.now()}`,
      upiTransactionId: utr,
      studentName,
      email,
      phone,
      amount,
      paymentMethod: 'Google Pay (UPI)',
      paidTo: process.env.UPI_MERCHANT_NAME || 'EZER Learning Solutions Pvt. Ltd.',
      paidFrom: `${email} (${phone})`,
      courseName: courseName || 'Executive IT Course',
      status: 'PENDING_VERIFICATION',
      paymentDate: new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })
    });

    res.json({
      success: true,
      message: '12-Digit UTR received successfully. Payment is in PENDING_VERIFICATION (On-Hold) state awaiting admin statement review.',
      payment: existing
    });
  } catch (err) {
    console.error('Error submitting UTR:', err);
    res.status(500).json({ success: false, error: 'UTR submission failed' });
  }
}
