import React, { useState, useEffect } from 'react';
import {
  HiX,
  HiCheckCircle,
  HiCreditCard,
  HiQrcode,
  HiLockClosed,
  HiShieldCheck,
  HiPhotograph,
  HiCheck,
  HiOutlineClipboardCopy,
  HiOutlineShieldCheck,
  HiOutlineClock
} from 'react-icons/hi';
import { useSiteData } from '../../Admin_Control/context/SiteContext';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';

function downloadStudentReceiptImage(payment) {
  const canvas = document.createElement('canvas');
  canvas.width = 500;
  canvas.height = 720;
  const ctx = canvas.getContext('2d');

  // Pure White Background
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, 500, 720);

  // Top Avatar Circle (Pink #e91e63)
  ctx.fillStyle = '#e91e63';
  ctx.beginPath();
  ctx.arc(250, 60, 28, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 24px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('E', 250, 68);

  // Recipient Header
  ctx.fillStyle = '#202124';
  ctx.font = '600 15px sans-serif';
  ctx.fillText(`To ${payment.paidTo || 'EZER Learning Solutions Pvt. Ltd.'}`, 250, 115);

  // Amount
  ctx.fillStyle = '#202124';
  ctx.font = '700 40px sans-serif';
  ctx.fillText(`₹${Number(payment.amount).toLocaleString('en-IN')}`, 250, 165);

  // Completed Pill Button
  ctx.fillStyle = '#ffffff';
  ctx.strokeStyle = '#dadce0';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  if (ctx.roundRect) {
    ctx.roundRect(175, 185, 150, 32, 16);
  } else {
    ctx.rect(175, 185, 150, 32);
  }
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#1e8e3e';
  ctx.font = 'bold 13px sans-serif';
  ctx.fillText('✔  Completed', 250, 206);

  // Date Timestamp
  ctx.fillStyle = '#5f6368';
  ctx.font = '12px sans-serif';
  ctx.fillText(payment.paymentDate || new Date().toLocaleString(), 250, 240);

  // Details Box Container
  ctx.fillStyle = '#ffffff';
  ctx.strokeStyle = '#dadce0';
  ctx.lineWidth = 1;
  ctx.beginPath();
  if (ctx.roundRect) {
    ctx.roundRect(25, 260, 450, 370, 14);
  } else {
    ctx.rect(25, 260, 450, 370);
  }
  ctx.fill();
  ctx.stroke();

  // Bank Header inside Box
  ctx.fillStyle = '#202124';
  ctx.font = 'bold 14px sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText(payment.paymentMethod || 'Google Pay (UPI)', 45, 295);

  ctx.strokeStyle = '#f1f3f4';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(45, 310);
  ctx.lineTo(455, 310);
  ctx.stroke();

  // Fields inside details box
  const fields = [
    ['UPI transaction ID', payment.upiTransactionId || '109529161148'],
    ['To', payment.upiVpa || 'ezerlearning@okaxis'],
    [`From: ${payment.studentName}`, payment.paidFrom || payment.email || 'Student Account'],
    ['Enrolled Program', payment.courseName || 'Cohort Enrolled'],
    ['EZER Transaction ID', `EZER-TXN-${payment.upiTransactionId || 'SEC10092'}`]
  ];

  let y = 338;
  fields.forEach(([lbl, val]) => {
    ctx.fillStyle = '#5f6368';
    ctx.font = '11px sans-serif';
    ctx.fillText(lbl, 45, y);

    ctx.fillStyle = '#202124';
    ctx.font = 'bold 13px sans-serif';
    ctx.fillText(String(val), 45, y + 18);

    y += 56;
  });

  // Footer UPI Logo
  ctx.textAlign = 'center';
  ctx.fillStyle = '#70757a';
  ctx.font = '10px sans-serif';
  ctx.fillText('POWERED BY', 250, 668);

  ctx.fillStyle = '#202124';
  ctx.font = '900 15px sans-serif';
  ctx.fillText('UPI ▶', 250, 686);

  // Trigger Download
  const a = document.createElement('a');
  a.download = `gpay-receipt-${payment.upiTransactionId || 'transaction'}.png`;
  a.href = canvas.toDataURL('image/png');
  a.click();
}

export default function CoursePurchaseModal({ isOpen, onClose, course }) {
  useBodyScrollLock(isOpen && Boolean(course));
  const { addLead, addPayment, contactInfo, paymentConfig, payments } = useSiteData();
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
  const [copiedVpa, setCopiedVpa] = useState(false);

  const waGroupUrl = (contactInfo && contactInfo.whatsappGroupUrl) || 'https://chat.whatsapp.com/EZERStudentCohortOfficial';

  if (!isOpen || !course) return null;

  const finalPrice = paymentConfig?.enrollmentPrice !== undefined ? paymentConfig.enrollmentPrice : 9;
  const discountBadge = paymentConfig?.discountBadge || '99% OFF SPECIAL';
  const priceLabel = paymentConfig?.priceLabel || 'Full Course Access + Mentorship';
  const enrollmentLabel = paymentConfig?.enrollmentLabel || 'INSTANT COHORT ENROLLMENT';
  const upiVpa = paymentConfig?.upiVpa || 'ezerlearning@okaxis';
  const upiMerchantName = paymentConfig?.upiMerchantName || 'EZER Learning Solutions Pvt. Ltd.';
  const mccCode = paymentConfig?.mccCode || '8220';
  const transactionNote = paymentConfig?.transactionNote || 'EZER Course Enrollment';
  const integrationMode = paymentConfig?.integrationMode || 'direct_p2m';

  // Construct NPCI Standardized URI Payload
  const activeOrderRef = receiptNumber || `EZER-ORD-${Date.now()}`;
  const upiPayload = `upi://pay?pa=${upiVpa}&pn=${encodeURIComponent(upiMerchantName)}&am=${Number(finalPrice).toFixed(2)}&cu=INR&tr=${activeOrderRef}&tn=${encodeURIComponent(transactionNote)}&mc=${mccCode}&mode=05`;
  
  // Mobile Native App Intents
  const gpayIntent = `tez://upi/pay?pa=${upiVpa}&pn=${encodeURIComponent(upiMerchantName)}&am=${Number(finalPrice).toFixed(2)}&cu=INR&tr=${activeOrderRef}&tn=${encodeURIComponent(transactionNote)}&mc=${mccCode}`;
  const phonepeIntent = `phonepe://pay?pa=${upiVpa}&pn=${encodeURIComponent(upiMerchantName)}&am=${Number(finalPrice).toFixed(2)}&cu=INR&tr=${activeOrderRef}&tn=${encodeURIComponent(transactionNote)}&mc=${mccCode}`;
  const paytmIntent = `paytmmp://pay?pa=${upiVpa}&pn=${encodeURIComponent(upiMerchantName)}&am=${Number(finalPrice).toFixed(2)}&cu=INR&tr=${activeOrderRef}&tn=${encodeURIComponent(transactionNote)}&mc=${mccCode}`;

  const handleCopyVpa = () => {
    navigator.clipboard.writeText(upiVpa);
    setCopiedVpa(true);
    setTimeout(() => setCopiedVpa(false), 2000);
  };

  const handleProceedToPayment = (e) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !phone.trim() || phone.trim().length < 10) {
      alert('Please fill out your full name, email, and 10-digit mobile number.');
      return;
    }
    if (addLead) {
      addLead({
        name: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        course: course.title || 'Executive IT Course',
        paymentStatus: 'PENDING_PAYMENT',
        amountPaid: `₹${finalPrice}`,
        status: 'Interested Lead',
        city: 'Online Registration',
        timestamp: new Date().toISOString()
      }, true);
    }
    setStep(2);
  };

  const handleVerifyAndPay = async (e) => {
    e.preventDefault();
    setVerifyError('');

    const cleanRef = upiRefId.trim();
    if (paymentMethod === 'upi') {
      const utrRegex = /^[0-9]{12}$/;
      if (!cleanRef || !utrRegex.test(cleanRef)) {
        setVerifyError('SECURITY VALIDATION FAILED: Please enter a valid 12-digit numerical UTR transaction reference number (e.g., 428910482910) copied from Google Pay, PhonePe, or Paytm.');
        return;
      }

      const currentPayList = Array.isArray(payments) ? payments : [];
      const isDuplicateUtr = currentPayList.some(
        (p) => (p.upiTransactionId || '').trim().toLowerCase() === cleanRef.toLowerCase()
      );

      if (isDuplicateUtr) {
        setVerifyError(`SECURITY ERROR: UTR #${cleanRef} has already been recorded for another transaction. Duplicate UTR submissions are strictly blocked.`);
        return;
      }
    } else if (paymentMethod === 'card') {
      if (!cardNumber || cardNumber.length < 14) {
        setVerifyError('Please enter a valid 16-digit credit/debit card number.');
        return;
      }
    }

    setIsProcessing(true);

    try {
      const finalTxnRef = paymentMethod === 'upi' ? cleanRef : `CARD/${cardNumber.slice(-4)}/${Date.now()}`;
      setReceiptNumber(finalTxnRef);

      const isDirectP2M = integrationMode === 'direct_p2m';
      const initialStatus = isDirectP2M ? 'PENDING_VERIFICATION' : 'SUCCESSFUL';

      const payRecord = {
        id: `pay-${Date.now()}`,
        studentName: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        amount: Number(finalPrice) || 9,
        upiTransactionId: finalTxnRef,
        upiVpa: upiVpa,
        paymentMethod: paymentMethod === 'upi' ? 'Google Pay (UPI)' : 'Credit Card (Tokenized)',
        paidTo: upiMerchantName,
        paidFrom: `${email.trim()} (${phone.trim()})`,
        courseName: course.title || 'Executive IT Course',
        status: initialStatus,
        paymentDate: new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' }),
        orderRefId: activeOrderRef
      };

      if (addPayment) {
        addPayment(payRecord, true);
      }

      if (addLead) {
        addLead({
          name: fullName.trim(),
          email: email.trim(),
          phone: phone.trim(),
          course: course.title || 'Executive IT Course',
          paymentStatus: initialStatus === 'PENDING_VERIFICATION' ? 'PENDING_VERIFICATION' : 'PAID',
          amountPaid: `₹${finalPrice}`,
          transactionId: finalTxnRef,
          status: initialStatus === 'PENDING_VERIFICATION' ? 'Pending Review' : 'Enrolled',
          city: 'Online Enrollment',
          timestamp: new Date().toISOString()
        }, true);
      }

      setStep(3);
    } catch (err) {
      console.error('[Checkout Verification Error]:', err);
      setVerifyError('Verification failed. Please check your transaction details and try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 10000,
      background: 'rgba(0, 6, 72, 0.88)', backdropFilter: 'blur(10px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px',
      overscrollBehavior: 'contain', WebkitOverflowScrolling: 'touch'
    }}>
      <style>{`
        .modal-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .upi-app-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
          margin-top: 10px;
          margin-bottom: 10px;
        }
        .app-intent-btn {
          transition: transform 0.18s ease, boxShadow 0.18s ease;
        }
        .app-intent-btn:hover {
          transform: translateY(-2px);
          boxShadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        @media (max-width: 540px) {
          .modal-form-grid {
            grid-template-columns: 1fr !important;
          }
          .upi-app-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>

      <div style={{
        background: '#ffffff', color: '#000648', width: '100%', maxWidth: '580px',
        maxHeight: '92vh', overflowY: 'auto', overscrollBehavior: 'contain',
        borderRadius: '24px', boxShadow: '0 30px 70px rgba(0,0,0,0.5)',
        position: 'relative', border: '1.5px solid rgba(242, 183, 51, 0.4)'
      }}>

        {/* Top Header with Deep Gradient & Step Indicators */}
        <div style={{
          background: 'linear-gradient(135deg, #000648 0%, #07157b 100%)',
          color: '#ffffff', padding: '22px 26px 18px',
          borderBottom: '2px solid #f2b733', position: 'sticky', top: 0, zIndex: 20
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div>
              <span style={{ fontSize: '0.68rem', fontWeight: 900, color: '#f2b733', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <HiOutlineShieldCheck size={14} color="#f2b733" /> OFFICIAL SECURE ENROLLMENT PORTAL
              </span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#ffffff', margin: '2px 0 0 0', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                {course.title}
              </h3>
            </div>

            <button
              type="button"
              aria-label="Close modal window"
              onClick={onClose}
              style={{
                background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)',
                color: '#ffffff', width: '34px', height: '34px', borderRadius: '50%', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s ease'
              }}
            >
              <HiX size={18} />
            </button>
          </div>

          {/* Sleek Step Progress Tracker */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(255,255,255,0.08)', padding: '6px 12px', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.73rem', fontWeight: step >= 1 ? 900 : 500, color: step >= 1 ? '#f2b733' : '#94a3b8' }}>
              <span style={{ background: step >= 1 ? '#f2b733' : 'rgba(255,255,255,0.2)', color: step >= 1 ? '#000648' : '#fff', width: '18px', height: '18px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 900 }}>1</span>
              Student Info
            </div>

            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem' }}>➔</span>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.73rem', fontWeight: step >= 2 ? 900 : 500, color: step >= 2 ? '#f2b733' : '#94a3b8' }}>
              <span style={{ background: step >= 2 ? '#f2b733' : 'rgba(255,255,255,0.2)', color: step >= 2 ? '#000648' : '#fff', width: '18px', height: '18px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 900 }}>2</span>
              UPI / QR Pay
            </div>

            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem' }}>➔</span>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.73rem', fontWeight: step >= 3 ? 900 : 500, color: step >= 3 ? '#f2b733' : '#94a3b8' }}>
              <span style={{ background: step >= 3 ? '#f2b733' : 'rgba(255,255,255,0.2)', color: step >= 3 ? '#000648' : '#fff', width: '18px', height: '18px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 900 }}>3</span>
              Verification
            </div>
          </div>
        </div>

        {/* STEP 1: STUDENT ENROLLMENT FORM */}
        {step === 1 && (
          <form onSubmit={handleProceedToPayment} style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            {/* Price Box */}
            <div style={{
              background: 'linear-gradient(135deg, #000648 0%, #0c2080 100%)',
              color: '#ffffff', borderRadius: '16px', padding: '18px 20px',
              border: '1.5px solid #f2b733', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              boxShadow: '0 8px 24px rgba(0,6,72,0.12)'
            }}>
              <div>
                <span style={{ fontSize: '0.72rem', fontWeight: 900, color: '#f2b733', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {enrollmentLabel}
                </span>
                <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#ffffff', lineHeight: 1.1, marginTop: '2px' }}>
                  ₹{finalPrice.toLocaleString('en-IN')} <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>({priceLabel})</span>
                </div>
              </div>
              <span style={{ background: '#f2b733', color: '#000648', fontSize: '0.75rem', fontWeight: 900, padding: '6px 12px', borderRadius: '50px', boxShadow: '0 2px 8px rgba(242,183,51,0.4)' }}>
                {discountBadge}
              </span>
            </div>

            <div>
              <label htmlFor="student_full_name" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#000648', display: 'block', marginBottom: '4px' }}>
                Full Name *
              </label>
              <input
                id="student_full_name"
                type="text"
                required
                placeholder="e.g. Rahul Sharma"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                style={{ width: '100%', padding: '11px 14px', borderRadius: '10px', border: '1.5px solid #cbd5e1', fontSize: '0.9rem', outline: 'none' }}
              />
            </div>

            <div className="modal-form-grid">
              <div>
                <label htmlFor="student_email" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#000648', display: 'block', marginBottom: '4px' }}>
                  Email Address *
                </label>
                <input
                  id="student_email"
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ width: '100%', padding: '11px 14px', borderRadius: '10px', border: '1.5px solid #cbd5e1', fontSize: '0.9rem', outline: 'none' }}
                />
              </div>

              <div>
                <label htmlFor="student_phone" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#000648', display: 'block', marginBottom: '4px' }}>
                  WhatsApp / Mobile Number *
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
                  style={{ width: '100%', padding: '11px 14px', borderRadius: '10px', border: '1.5px solid #cbd5e1', fontSize: '0.9rem', outline: 'none' }}
                />
              </div>
            </div>

            <button
              type="submit"
              style={{
                marginTop: '10px', width: '100%', padding: '14px', borderRadius: '50px',
                background: '#f2b733', color: '#000648', fontWeight: 900, fontSize: '1.05rem',
                border: 'none', cursor: 'pointer', boxShadow: '0 6px 20px rgba(242,183,51,0.45)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                transition: 'transform 0.2s ease'
              }}
            >
              Proceed to Payment & Unlock Course (₹{finalPrice}) <HiLockClosed size={18} />
            </button>
          </form>
        )}

        {/* STEP 2: UPI PAYMENT GATEWAY & APP INTENTS */}
        {step === 2 && (
          <form onSubmit={handleVerifyAndPay} style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Amount & Change Details Header */}
            <div style={{ background: '#f8fafc', padding: '14px 18px', borderRadius: '14px', border: '1px solid #cbd5e1', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 800, textTransform: 'uppercase' }}>Total Amount Due</span>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#000648', lineHeight: 1 }}>₹{finalPrice.toLocaleString('en-IN')}</div>
              </div>
              <button
                type="button"
                onClick={() => setStep(1)}
                style={{ background: '#e0e7ff', border: 'none', color: '#000648', fontWeight: 800, fontSize: '0.78rem', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer' }}
              >
                Edit Info
              </button>
            </div>

            {/* Select Gateway Method Switcher */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                type="button"
                onClick={() => setPaymentMethod('upi')}
                style={{
                  flex: 1, padding: '12px', borderRadius: '12px', cursor: 'pointer',
                  border: paymentMethod === 'upi' ? '2px solid #000648' : '1.5px solid #cbd5e1',
                  background: paymentMethod === 'upi' ? '#f0f4ff' : '#ffffff',
                  color: '#000648', fontWeight: 800, fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px'
                }}
              >
                <HiQrcode size={20} color="#000648" /> Dynamic UPI QR / App
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                style={{
                  flex: 1, padding: '12px', borderRadius: '12px', cursor: 'pointer',
                  border: paymentMethod === 'card' ? '2px solid #000648' : '1.5px solid #cbd5e1',
                  background: paymentMethod === 'card' ? '#f0f4ff' : '#ffffff',
                  color: '#000648', fontWeight: 800, fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px'
                }}
              >
                <HiCreditCard size={20} color="#000648" /> Credit / Debit Card
              </button>
            </div>

            {paymentMethod === 'upi' ? (
              <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '16px', padding: '18px', textAlign: 'center' }}>
                {/* VPA Copy Bar */}
                <div style={{ background: '#f8fafc', padding: '10px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <div style={{ textAlign: 'left' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Official Merchant UPI VPA ID</span>
                    <div style={{ fontSize: '0.88rem', fontWeight: 900, color: '#000648', fontFamily: 'monospace' }}>{upiVpa}</div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyVpa}
                    style={{
                      padding: '5px 10px', background: copiedVpa ? '#dcfce7' : '#000648',
                      color: copiedVpa ? '#15803d' : '#f2b733', border: 'none', borderRadius: '6px',
                      fontSize: '0.72rem', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px'
                    }}
                  >
                    {copiedVpa ? <HiCheck size={14} /> : <HiOutlineClipboardCopy size={14} />}
                    {copiedVpa ? 'Copied VPA!' : 'Copy VPA'}
                  </button>
                </div>

                {/* Mobile Direct App Intent Launch Buttons */}
                <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '12px', border: '1px solid #e2e8f0', marginBottom: '14px' }}>
                  <div style={{ fontSize: '0.73rem', fontWeight: 900, color: '#000648', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '6px' }}>
                    📱 Tap To Launch App (Mobile Devices)
                  </div>
                  <div className="upi-app-grid">
                    <a
                      href={gpayIntent}
                      target="_self"
                      className="app-intent-btn"
                      style={{ background: '#4285F4', color: '#fff', padding: '9px 4px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 900, textDecoration: 'none', display: 'block', textAlign: 'center' }}
                    >
                      Google Pay
                    </a>
                    <a
                      href={phonepeIntent}
                      target="_self"
                      className="app-intent-btn"
                      style={{ background: '#5f259f', color: '#fff', padding: '9px 4px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 900, textDecoration: 'none', display: 'block', textAlign: 'center' }}
                    >
                      PhonePe
                    </a>
                    <a
                      href={paytmIntent}
                      target="_self"
                      className="app-intent-btn"
                      style={{ background: '#00baf2', color: '#fff', padding: '9px 4px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 900, textDecoration: 'none', display: 'block', textAlign: 'center' }}
                    >
                      Paytm
                    </a>
                    <a
                      href={upiPayload}
                      target="_self"
                      className="app-intent-btn"
                      style={{ background: '#000648', color: '#f2b733', padding: '9px 4px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 900, textDecoration: 'none', display: 'block', textAlign: 'center' }}
                    >
                      Any UPI App
                    </a>
                  </div>
                </div>

                {/* Desktop Auto-Scaling Scannable QR Matrix */}
                <div style={{ background: '#f8fafc', padding: '14px', borderRadius: '14px', display: 'inline-block', border: '1.5px solid #cbd5e1', marginBottom: '14px', boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiPayload)}`}
                    alt="Scan UPI QR Code to Pay"
                    style={{ width: '160px', height: '160px', display: 'block' }}
                  />
                  <div style={{ fontSize: '0.68rem', color: '#64748b', fontWeight: 700, marginTop: '6px' }}>
                    Desktop: Scan QR with GPay / PhonePe / Paytm / BHIM
                  </div>
                </div>

                <div style={{ fontSize: '0.78rem', color: '#166534', fontWeight: 800, background: '#f0fdf4', padding: '10px 14px', borderRadius: '10px', border: '1px solid #bbf7d0', marginBottom: '14px', textAlign: 'left' }}>
                  ✔ Step 1: Pay ₹{finalPrice} using QR code or App button above.<br/>
                  ✔ Step 2: Copy the 12-digit UTR / Bank Reference No. from your UPI receipt and paste below.
                </div>

                <div style={{ textAlign: 'left' }}>
                  <label htmlFor="upi_ref_input" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#000648', marginBottom: '4px' }}>
                    12-Digit UPI Ref / UTR Transaction ID *
                  </label>
                  <input
                    id="upi_ref_input"
                    type="text"
                    required
                    maxLength={12}
                    placeholder="e.g. 428910482910 (Strict 12 digits)"
                    value={upiRefId}
                    onChange={(e) => setUpiRefId(e.target.value.replace(/\D/g, '').slice(0, 12))}
                    style={{
                      width: '100%', padding: '11px 14px', borderRadius: '10px',
                      border: '1.5px solid #cbd5e1', fontSize: '1rem', fontFamily: 'monospace', outline: 'none', fontWeight: 800, letterSpacing: '1px'
                    }}
                  />
                  <div style={{ fontSize: '0.73rem', color: '#64748b', marginTop: '4px' }}>
                    {upiRefId.length > 0 && upiRefId.length < 12 && (
                      <span style={{ color: '#dc2626', fontWeight: 700 }}>
                        Entered {upiRefId.length}/12 digits. Exactly 12 numerical digits required.
                      </span>
                    )}
                    {upiRefId.length === 12 && (
                      <span style={{ color: '#166534', fontWeight: 800 }}>
                        ✓ Valid 12-digit UTR format. Ready for submission.
                      </span>
                    )}
                  </div>
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
              <div style={{ background: '#fef2f2', color: '#dc2626', border: '1px solid #fecaca', padding: '10px 14px', borderRadius: '10px', fontSize: '0.8rem', fontWeight: 700 }}>
                {verifyError}
              </div>
            )}

            <button
              type="submit"
              disabled={isProcessing}
              style={{
                width: '100%', padding: '14px', borderRadius: '50px',
                background: '#f2b733', color: '#000648', fontWeight: 900, fontSize: '1.05rem',
                border: 'none', cursor: 'pointer', boxShadow: '0 6px 20px rgba(242,183,51,0.45)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'
              }}
            >
              {isProcessing ? 'Submitting to Queue...' : `Submit 12-Digit UTR & Complete (₹${finalPrice})`}
            </button>
          </form>
        )}

        {/* STEP 3: ENROLLMENT CONFIRMATION & ACCESS LOCKING */}
        {step === 3 && (
          <div style={{ padding: '24px 20px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', maxHeight: '85vh', overflowY: 'auto' }}>
            {/* Top Avatar Circle */}
            <div style={{ width: '52px', height: '52px', background: '#e91e63', color: '#ffffff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: 'bold', margin: '0 auto 2px', boxShadow: '0 4px 10px rgba(233, 30, 99, 0.2)' }}>
              E
            </div>

            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#202124', marginBottom: '2px' }}>
              To {upiMerchantName || 'EZER Learning Solutions Pvt. Ltd.'}
            </div>

            <div style={{ fontSize: '2.4rem', fontWeight: 700, color: '#202124', margin: '0 0 4px', letterSpacing: '-0.5px' }}>
              ₹{finalPrice.toLocaleString('en-IN')}
            </div>

            {/* Status Pill Badge */}
            {integrationMode === 'direct_p2m' && paymentMethod === 'upi' ? (
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#fffbe6', border: '1px solid #ffe58f', borderRadius: '50px', padding: '6px 18px', fontSize: '0.82rem', fontWeight: 800, color: '#d48806' }}>
                <HiOutlineClock size={16} /> Pending Admin Verification (On-Hold)
              </div>
            ) : (
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '50px', padding: '6px 18px', fontSize: '0.82rem', fontWeight: 800, color: '#166534' }}>
                <HiCheckCircle size={16} /> Payment Approved & Completed
              </div>
            )}

            <div style={{ fontSize: '0.78rem', color: '#5f6368', marginBottom: '4px' }}>
              {new Date().toLocaleString()}
            </div>

            {/* Inner Receipt Details Box */}
            <div style={{ width: '100%', background: '#ffffff', border: '1px solid #dadce0', borderRadius: '14px', padding: '16px', textAlign: 'left', boxShadow: '0 1px 3px rgba(60,64,67,0.08)' }}>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#202124', paddingBottom: '10px', borderBottom: '1px solid #f1f3f4', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>{paymentMethod === 'upi' ? 'Google Pay (UPI)' : 'Credit Card'}</span>
                <span style={{ color: integrationMode === 'direct_p2m' && paymentMethod === 'upi' ? '#d48806' : '#1e8e3e', fontSize: '12px', fontWeight: 800 }}>
                  {integrationMode === 'direct_p2m' && paymentMethod === 'upi' ? '⏳ PENDING REVIEW' : '✔ VERIFIED'}
                </span>
              </div>

              <div style={{ marginBottom: '10px' }}>
                <div style={{ fontSize: '0.72rem', color: '#5f6368', fontWeight: 500, marginBottom: '2px' }}>UPI transaction / UTR ID</div>
                <div style={{ fontSize: '0.84rem', color: '#202124', fontWeight: 700, fontFamily: 'monospace' }}>{receiptNumber}</div>
              </div>

              <div style={{ marginBottom: '10px' }}>
                <div style={{ fontSize: '0.72rem', color: '#5f6368', fontWeight: 500, marginBottom: '2px' }}>To Merchant VPA</div>
                <div style={{ fontSize: '0.84rem', color: '#202124', fontWeight: 600 }}>{upiVpa}</div>
              </div>

              <div style={{ marginBottom: '10px' }}>
                <div style={{ fontSize: '0.72rem', color: '#5f6368', fontWeight: 500, marginBottom: '2px' }}>From Student</div>
                <div style={{ fontSize: '0.84rem', color: '#202124', fontWeight: 600 }}>{fullName} ({email})</div>
              </div>

              <div style={{ marginBottom: '10px' }}>
                <div style={{ fontSize: '0.72rem', color: '#5f6368', fontWeight: 500, marginBottom: '2px' }}>Enrolled Program</div>
                <div style={{ fontSize: '0.84rem', color: '#202124', fontWeight: 600 }}>{course.title}</div>
              </div>

              <div>
                <div style={{ fontSize: '0.72rem', color: '#5f6368', fontWeight: 500, marginBottom: '2px' }}>EZER Reference Order</div>
                <div style={{ fontSize: '0.84rem', color: '#202124', fontWeight: 600, fontFamily: 'monospace' }}>{activeOrderRef}</div>
              </div>
            </div>

            {/* CONDITIONAL RENDER: PNG RECEIPT DOWNLOAD & WHATSAPP BUTTON LOCKED UNTIL ADMIN APPROVAL */}
            {(() => {
              const currentRecord = (payments || []).find(
                (p) => String(p.upiTransactionId || p.id || '').trim().toLowerCase() === String(receiptNumber || upiRefId || '').trim().toLowerCase()
              );
              const isApprovedByAdmin =
                currentRecord?.status === 'VERIFIED' ||
                currentRecord?.status === 'SUCCESSFUL' ||
                integrationMode === 'gateway' ||
                paymentMethod === 'card';

              if (isApprovedByAdmin) {
                return (
                  <>
                    <button
                      type="button"
                      onClick={() => downloadStudentReceiptImage({
                        studentName: fullName,
                        amount: finalPrice,
                        upiTransactionId: receiptNumber,
                        paymentMethod: paymentMethod === 'upi' ? 'Google Pay (UPI)' : 'Credit Card',
                        paidTo: upiMerchantName,
                        upiVpa: upiVpa,
                        courseName: course.title,
                        email: email,
                        paidFrom: `${email} (${phone})`,
                        paymentDate: new Date().toLocaleString()
                      })}
                      style={{
                        width: '100%', padding: '11px 16px', background: '#e8f0fe', color: '#1a73e8',
                        border: '1px solid #aecbfa', borderRadius: '10px', fontWeight: 900,
                        fontSize: '0.82rem', cursor: 'pointer', display: 'flex', alignItems: 'center',
                        justifyContent: 'center', gap: '6px'
                      }}
                    >
                      <HiPhotograph size={18} /> Download Digital Receipt Image (.png)
                    </button>

                    <a
                      href={waGroupUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                        width: '100%', padding: '12px 18px', background: '#25D366', color: '#ffffff',
                        borderRadius: '50px', fontWeight: 900, fontSize: '0.9rem', textDecoration: 'none',
                        boxShadow: '0 6px 20px rgba(37, 211, 102, 0.35)'
                      }}
                    >
                      ✔ Admin Approved — Join Official Student WhatsApp Group ↗
                    </a>
                  </>
                );
              }

              return (
                <div style={{ background: '#fffbe6', border: '1.5px solid #ffe58f', borderRadius: '14px', padding: '16px', textAlign: 'center', width: '100%' }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 900, color: '#d48806', marginBottom: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                    <HiLockClosed size={18} /> PNG Receipt & WhatsApp Group Locked (Awaiting Admin Approval)
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#8c6b00', fontWeight: 600, lineHeight: 1.5 }}>
                    Your 12-digit UTR <span style={{ fontFamily: 'monospace', fontWeight: 800 }}>#{receiptNumber}</span> is submitted to the Admin Verification Queue.
                    <br />
                    <strong>Once the admin verifies your bank credit and approves your record in the admin panel, your Official PNG Digital Receipt and WhatsApp Group link will automatically unlock!</strong>
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </div>
    </div>
  );
}
