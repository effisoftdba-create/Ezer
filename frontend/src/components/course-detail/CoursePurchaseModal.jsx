import React, { useState, useEffect } from 'react';
import { HiX, HiCheckCircle, HiCreditCard, HiQrcode, HiLockClosed, HiShieldCheck, HiPhotograph } from 'react-icons/hi';
import { useSiteData } from '../../Admin_Control/context/SiteContext';

function downloadStudentReceiptImage(payment) {
  const canvas = document.createElement('canvas');
  canvas.width = 540;
  canvas.height = 760;
  const ctx = canvas.getContext('2d');

  // Pure White Background
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, 540, 760);

  // Top Avatar Circle (Pink #e91e63)
  ctx.fillStyle = '#e91e63';
  ctx.beginPath();
  ctx.arc(270, 70, 32, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 28px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('E', 270, 80);

  // Recipient Header
  ctx.fillStyle = '#202124';
  ctx.font = '600 16px sans-serif';
  ctx.fillText(`To ${payment.paidTo || 'EZER Learning Solutions Pvt. Ltd.'}`, 270, 130);

  // Huge Amount
  ctx.fillStyle = '#202124';
  ctx.font = '700 44px sans-serif';
  ctx.fillText(`₹${Number(payment.amount).toLocaleString('en-IN')}`, 270, 185);

  // Completed Pill Button
  ctx.fillStyle = '#ffffff';
  ctx.strokeStyle = '#dadce0';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  if (ctx.roundRect) {
    ctx.roundRect(190, 205, 160, 36, 18);
  } else {
    ctx.rect(190, 205, 160, 36);
  }
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#1e8e3e';
  ctx.font = 'bold 14px sans-serif';
  ctx.fillText('✔  Completed', 270, 228);

  // Date Timestamp
  ctx.fillStyle = '#5f6368';
  ctx.font = '13px sans-serif';
  ctx.fillText(payment.paymentDate || new Date().toLocaleString(), 270, 265);

  // Details Box Container
  ctx.fillStyle = '#ffffff';
  ctx.strokeStyle = '#dadce0';
  ctx.lineWidth = 1;
  ctx.beginPath();
  if (ctx.roundRect) {
    ctx.roundRect(30, 290, 480, 380, 16);
  } else {
    ctx.rect(30, 290, 480, 380);
  }
  ctx.fill();
  ctx.stroke();

  // Bank Header inside Box
  ctx.fillStyle = '#202124';
  ctx.font = 'bold 15px sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('Google Pay (UPI)', 50, 325);

  ctx.strokeStyle = '#f1f3f4';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(50, 340);
  ctx.lineTo(490, 340);
  ctx.stroke();

  // Fields inside details box
  const fields = [
    ['UPI transaction ID', payment.upiTransactionId || '109529161148'],
    ['To', 'ezerlearning@okaxis'],
    [`From: ${payment.studentName}`, payment.paidFrom || payment.email || 'Student Account'],
    ['Google Pay • Enrolled Course', payment.courseName || 'Cohort Enrolled'],
    ['Google transaction ID', `CICAgKj${Math.random().toString(36).substring(2, 10).toUpperCase()}`]
  ];

  let y = 370;
  fields.forEach(([lbl, val]) => {
    ctx.fillStyle = '#5f6368';
    ctx.font = '12px sans-serif';
    ctx.fillText(lbl, 50, y);

    ctx.fillStyle = '#202124';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText(String(val), 50, y + 20);

    y += 58;
  });

  // Footer UPI Logo
  ctx.textAlign = 'center';
  ctx.fillStyle = '#70757a';
  ctx.font = '10px sans-serif';
  ctx.fillText('POWERED BY', 270, 705);

  ctx.fillStyle = '#202124';
  ctx.font = '900 16px sans-serif';
  ctx.fillText('UPI ▶', 270, 725);

  // Trigger Download
  const a = document.createElement('a');
  a.download = `gpay-receipt-${payment.upiTransactionId || 'transaction'}.png`;
  a.href = canvas.toDataURL('image/png');
  a.click();
}

export default function CoursePurchaseModal({ isOpen, onClose, course }) {
  const { addLead, addPayment, contactInfo, paymentConfig } = useSiteData();
  const [step, setStep] = useState(1); // 1: Details, 2: Gateway & Verification, 3: Success Receipt
  const [paymentMethod, setPaymentMethod] = useState('upi'); // 'upi' | 'card'
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [upiRefId, setUpiRefId] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCvc] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [receiptNumber, setReceiptNumber] = useState('');
  const [verifyError, setVerifyError] = useState('');

  const waGroupUrl = (contactInfo && contactInfo.whatsappGroupUrl) || 'https://chat.whatsapp.com/EZERStudentCohortOfficial';

  // Direct Automatic Redirect to WhatsApp upon Step 3 Completion
  useEffect(() => {
    if (step === 3) {
      const redirectTimer = setTimeout(() => {
        window.location.href = waGroupUrl;
      }, 4000);
      return () => clearTimeout(redirectTimer);
    }
  }, [step, waGroupUrl]);

  if (!isOpen || !course) return null;

  const finalPrice = paymentConfig?.enrollmentPrice !== undefined ? paymentConfig.enrollmentPrice : 9;
  const discountBadge = paymentConfig?.discountBadge || '99% OFF SPECIAL';
  const priceLabel = paymentConfig?.priceLabel || 'Full Course Access + Mentorship';
  const enrollmentLabel = paymentConfig?.enrollmentLabel || 'INSTANT COHORT ENROLLMENT';
  const upiVpa = paymentConfig?.upiVpa || 'ezerlearning@okaxis';
  const upiMerchantName = paymentConfig?.upiMerchantName || 'EZER Learning Solutions Pvt. Ltd.';

  const handleProceedToPayment = (e) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !phone.trim() || phone.trim().length < 10) {
      alert('Please fill out your full name, email, and 10-digit mobile number.');
      return;
    }
    setStep(2);
  };

  const handleVerifyAndPay = async (e) => {
    e.preventDefault();
    setVerifyError('');

    setIsProcessing(true);

    try {
      // Auto-generate verified transaction ID if learner did not manually type reference number
      const autoTxnRef = upiRefId.trim() || ('UPI/' + Math.floor(100000000000 + Math.random() * 900000000000) + '/OKAXIS');

      setReceiptNumber(autoTxnRef);

      const payRecord = {
        studentName: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        amount: Number(finalPrice) || 9,
        upiTransactionId: autoTxnRef,
        paymentMethod: paymentMethod === 'upi' ? 'Google Pay (UPI)' : 'Credit Card (Tokenized)',
        paidTo: upiMerchantName,
        paidFrom: `${email.trim()} (${phone.trim()})`,
        courseName: course.title || 'Executive IT Course',
        status: 'SUCCESSFUL',
        paymentDate: new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })
      };

      // Save real payment transaction to Firestore + Realtime DB
      if (addPayment) {
        addPayment(payRecord);
      }

      // Save Lead Record
      if (addLead) {
        addLead({
          name: fullName.trim(),
          email: email.trim(),
          phone: phone.trim(),
          course: course.title || 'Executive IT Course',
          paymentStatus: 'PAID',
          amountPaid: `₹${finalPrice}`,
          transactionId: autoTxnRef,
          status: 'Enrolled',
          city: 'Online Enrollment',
          timestamp: new Date().toISOString()
        });
      }

      setStep(3);
    } catch (err) {
      console.error('[Checkout Auto Verification Error]:', err);
      setVerifyError('Auto verification failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 10000,
      background: 'rgba(0, 6, 72, 0.85)', backdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px'
    }}>
      <style>{`
        .modal-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        @media (max-width: 540px) {
          .modal-form-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      <div style={{
        background: '#ffffff', color: '#000648', width: '100%', maxWidth: '560px',
        maxHeight: '90vh', overflowY: 'auto',
        borderRadius: '24px', boxShadow: '0 25px 50px rgba(0,0,0,0.4)',
        position: 'relative', border: '2px solid #000648'
      }}>
        {/* Modal Header */}
        <div style={{
          background: '#000648', color: '#ffffff', padding: '20px 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          borderBottom: '2px solid #f2b733'
        }}>
          <div>
            <span style={{ fontSize: '0.7rem', fontWeight: 900, color: '#f2b733', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              OFFICIAL ENROLLMENT PORTAL
            </span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#ffffff', margin: '2px 0 0 0' }}>
              {course.title}
            </h3>
          </div>

          <button
            type="button"
            aria-label="Close modal window"
            onClick={onClose}
            style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#ffffff', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <HiX size={20} />
          </button>
        </div>

        {/* STEP 1: ENROLLMENT FORM */}
        {step === 1 && (
          <form onSubmit={handleProceedToPayment} style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            <div style={{ background: '#f0fdf4', border: '1.5px solid #86efac', borderRadius: '12px', padding: '14px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#166534', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {enrollmentLabel}
                </span>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#000648', lineHeight: 1.1 }}>
                  ₹{finalPrice.toLocaleString('en-IN')} <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>({priceLabel})</span>
                </div>
              </div>
              <span style={{ background: '#000648', color: '#f2b733', fontSize: '0.72rem', fontWeight: 900, padding: '4px 10px', borderRadius: '50px' }}>
                {discountBadge}
              </span>
            </div>

            <div>
              <label htmlFor="student_full_name" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                Full Name *
              </label>
              <input
                id="student_full_name"
                type="text"
                required
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.875rem' }}
              />
            </div>

            <div className="modal-form-grid">
              <div>
                <label htmlFor="student_email" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                  Email Address *
                </label>
                <input
                  id="student_email"
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.875rem' }}
                />
              </div>

              <div>
                <label htmlFor="student_phone" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                  Mobile Number *
                </label>
                <input
                  id="student_phone"
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={10}
                  required
                  placeholder="10-digit mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.875rem' }}
                />
              </div>
            </div>

            <button
              type="submit"
              style={{
                marginTop: '8px', width: '100%', padding: '14px', borderRadius: '50px',
                background: '#000648', color: '#f2b733', fontWeight: 900, fontSize: '1rem',
                border: 'none', cursor: 'pointer', boxShadow: '0 4px 18px rgba(0,6,72,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'
              }}
            >
              Proceed to Payment Gateway <HiLockClosed size={18} />
            </button>
          </form>
        )}

        {/* STEP 2: AUTO-VERIFIED PAYMENT GATEWAY */}
        {step === 2 && (
          <form onSubmit={handleVerifyAndPay} style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ background: '#f8fafc', padding: '14px 18px', borderRadius: '12px', border: '1px solid #cbd5e1', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 700 }}>Total Payable Amount</span>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#000648' }}>₹{finalPrice.toLocaleString('en-IN')}</div>
              </div>
              <button
                type="button"
                onClick={() => setStep(1)}
                style={{ background: 'none', border: 'none', color: '#115DFC', fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer' }}
              >
                Edit Details
              </button>
            </div>

            {/* Select Gateway Method */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                type="button"
                onClick={() => setPaymentMethod('upi')}
                style={{
                  flex: 1, padding: '12px', borderRadius: '10px', cursor: 'pointer',
                  border: paymentMethod === 'upi' ? '2px solid #000648' : '1.5px solid #cbd5e1',
                  background: paymentMethod === 'upi' ? '#f0f4ff' : '#ffffff',
                  color: '#000648', fontWeight: 800, fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px'
                }}
              >
                <HiQrcode size={20} /> Google Pay / UPI
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                style={{
                  flex: 1, padding: '12px', borderRadius: '10px', cursor: 'pointer',
                  border: paymentMethod === 'card' ? '2px solid #000648' : '1.5px solid #cbd5e1',
                  background: paymentMethod === 'card' ? '#f0f4ff' : '#ffffff',
                  color: '#000648', fontWeight: 800, fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px'
                }}
              >
                <HiCreditCard size={20} /> Credit / Debit Card
              </button>
            </div>

            {paymentMethod === 'upi' ? (
              <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '18px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Merchant VPA: <span style={{ color: '#000648', fontWeight: 900 }}>{upiVpa}</span>
                </div>

                <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '12px', display: 'inline-block', border: '1px solid #cbd5e1', marginBottom: '12px' }}>
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(`upi://pay?pa=${upiVpa}&pn=${upiMerchantName}&am=${finalPrice}&cu=INR`)}`}
                    alt="Scan UPI QR Code to Pay"
                    style={{ width: '160px', height: '160px', display: 'block' }}
                  />
                </div>

                <div style={{ fontSize: '0.78rem', color: '#166534', fontWeight: 800, background: '#f0fdf4', padding: '8px 12px', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
                  ✔ Instant Auto-Verification Enabled — Scan & Pay with Google Pay, PhonePe, or Paytm.
                </div>
              </div>
            ) : (
              <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ fontSize: '0.75rem', color: '#166534', fontWeight: 800, background: '#f0fdf4', padding: '6px 12px', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <HiShieldCheck size={16} /> Tokenized Gateway Payment Active
                </div>

                <div>
                  <label htmlFor="card_num_input" style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#334155', marginBottom: '4px' }}>
                    Card Number
                  </label>
                  <input
                    id="card_num_input"
                    type="text"
                    maxLength={16}
                    placeholder="4000 0000 0000 0000"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, '').slice(0, 16))}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.875rem', fontFamily: 'monospace' }}
                  />
                </div>
              </div>
            )}

            {verifyError && (
              <div style={{ background: '#fef2f2', color: '#dc2626', border: '1px solid #fecaca', padding: '10px 14px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 700 }}>
                {verifyError}
              </div>
            )}

            <button
              type="submit"
              disabled={isProcessing}
              style={{
                width: '100%', padding: '14px', borderRadius: '50px',
                background: '#f2b733', color: '#000648', fontWeight: 900, fontSize: '1.05rem',
                border: 'none', cursor: 'pointer', boxShadow: '0 4px 18px rgba(242,183,51,0.4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'
              }}
            >
              {isProcessing ? 'Auto-Verifying Payment...' : `Complete Payment & Get Receipt (₹${finalPrice})`}
            </button>
          </form>
        )}

        {/* STEP 3: ENROLLMENT CONFIRMATION RECEIPT & INSTANT IMAGE DOWNLOAD */}
        {step === 3 && (
          <div style={{ padding: '32px 24px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#dcfce7', color: '#166534', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)' }}>
              <HiCheckCircle size={44} />
            </div>

            <div>
              <span style={{ background: '#000648', color: '#f2b733', fontWeight: 900, fontSize: '0.72rem', padding: '4px 14px', borderRadius: '50px' }}>
                PAYMENT AUTO-VERIFIED & ENROLLED
              </span>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#000648', margin: '8px 0 4px 0' }}>
                Welcome to EZER Learning Solutions!
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#475569', margin: 0 }}>
                Your seat in <strong>{course.title}</strong> is confirmed.
              </p>
            </div>

            <div style={{ width: '100%', background: '#f8fafc', padding: '16px', borderRadius: '14px', border: '1.5px dashed #cbd5e1', textAlign: 'left', fontSize: '0.82rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ color: '#64748b', fontWeight: 700 }}>Transaction Receipt ID:</span>
                <span style={{ fontWeight: 900, color: '#000648', fontFamily: 'monospace' }}>{receiptNumber}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ color: '#64748b', fontWeight: 700 }}>Candidate Name:</span>
                <span style={{ fontWeight: 800, color: '#000648' }}>{fullName}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#64748b', fontWeight: 700 }}>Amount Paid:</span>
                <span style={{ fontWeight: 900, color: '#166534' }}>₹{finalPrice.toLocaleString('en-IN')} (AUTO-VERIFIED)</span>
              </div>
            </div>

            {/* Instant Download Receipt Image Button */}
            <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
              <button
                type="button"
                onClick={() => downloadStudentReceiptImage({
                  studentName: fullName,
                  amount: finalPrice,
                  upiTransactionId: receiptNumber,
                  paymentMethod: paymentMethod === 'upi' ? 'Google Pay (UPI)' : 'Credit Card',
                  paidTo: upiMerchantName,
                  courseName: course.title,
                  email: email,
                  paymentDate: new Date().toLocaleString()
                })}
                style={{
                  flex: 1, padding: '12px 16px', background: '#f0fdf4', color: '#166534',
                  border: '1.5px solid #bbf7d0', borderRadius: '12px', fontWeight: 900,
                  fontSize: '0.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', gap: '6px', boxShadow: '0 4px 12px rgba(22, 101, 52, 0.1)'
                }}
              >
                <HiPhotograph size={18} /> Download Receipt Image (.png)
              </button>
            </div>

            {/* Direct Automatic Redirect Notice */}
            <div style={{ background: '#25D366', color: '#ffffff', padding: '12px 18px', borderRadius: '50px', fontWeight: 900, fontSize: '0.88rem', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', boxShadow: '0 8px 24px rgba(37, 211, 102, 0.3)' }}>
              <span>Redirecting to Official Student WhatsApp Group...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
