import React, { useState } from 'react';
import { HiX, HiCheckCircle, HiCreditCard, HiQrcode, HiLockClosed } from 'react-icons/hi';

export default function CoursePurchaseModal({ isOpen, onClose, course }) {
  const [step, setStep] = useState(1); // 1: Select Plan & Details, 2: Payment Method, 3: Success Receipt
  const [paymentOption, setPaymentOption] = useState('full'); // 'full' | 'emi'
  const [paymentMethod, setPaymentMethod] = useState('upi'); // 'upi' | 'card'
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [receiptNumber, setReceiptNumber] = useState('');

  if (!isOpen || !course) return null;

  const basePriceNum = parseInt((course.price || '29999').replace(/[^0-9]/g, ''), 10) || 29999;
  const discountAmount = couponApplied ? 2000 : 0;
  const finalPrice = Math.max(0, basePriceNum - discountAmount);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'EZER2000' || couponCode.trim().toUpperCase() === 'CAREER2026') {
      setCouponApplied(true);
    } else {
      alert('Invalid coupon code. Try using: EZER2000');
    }
  };

  const handleProceedToPayment = (e) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      alert('Please fill out your name, email, and phone number.');
      return;
    }
    setStep(2);
  };

  const handleCompletePurchase = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      const generatedReceipt = 'EZER-PAY-' + Math.floor(100000 + Math.random() * 900000);
      setReceiptNumber(generatedReceipt);
      setStep(3);
    }, 1500);
  };

  const handleResetAndClose = () => {
    setStep(1);
    setCouponApplied(false);
    setCouponCode('');
    onClose();
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 10000,
      background: 'rgba(0, 6, 72, 0.85)', backdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px'
    }}>
      <div style={{
        background: '#ffffff', color: '#000648', width: '100%', maxWidth: '580px',
        borderRadius: '24px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.4)',
        position: 'relative', border: '2px solid #f2b733'
      }}>
        {/* Modal Header */}
        <div style={{
          background: '#000648', color: '#ffffff', padding: '20px 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          borderBottom: '2px solid #f2b733'
        }}>
          <div>
            <span style={{ fontSize: '0.7rem', fontWeight: 900, color: '#f2b733', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              OFFICIAL ENROLLMENT CHECKOUT
            </span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#ffffff', margin: '2px 0 0 0' }}>
              {course.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={handleResetAndClose}
            aria-label="Close purchase modal"
            style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#ffffff', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
          >
            <HiX size={20} />
          </button>
        </div>

        {/* STEP 1: ENROLLMENT FORM & PRICING PLAN */}
        {step === 1 && (
          <form onSubmit={handleProceedToPayment} style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {/* Pricing Card Header */}
            <div style={{ background: '#050b1c', color: '#ffffff', borderRadius: '16px', padding: '18px', border: '1.5px solid #f2b733', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '0.72rem', color: '#94a3b8', fontWeight: 700 }}>Total Course Tuition Fee</span>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '2px' }}>
                  <span style={{ fontSize: '2.2rem', fontWeight: 900, color: '#f2b733', lineHeight: 1 }}>
                    ₹{finalPrice.toLocaleString('en-IN')}
                  </span>
                  {course.originalPrice && (
                    <span style={{ fontSize: '0.9rem', color: '#64748b', textDecoration: 'line-through', fontWeight: 600 }}>
                      {course.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              <span style={{ background: '#f2b733', color: '#000648', fontSize: '0.72rem', fontWeight: 900, padding: '4px 12px', borderRadius: '50px' }}>
                {course.duration || '3 Months'} Live Access
              </span>
            </div>

            {/* Payment Options */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div
                role="button"
                tabIndex={0}
                aria-label="Select 1-Time Full Payment option"
                onClick={() => setPaymentOption('full')}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setPaymentOption('full'); }}
                style={{
                  padding: '14px', borderRadius: '12px', cursor: 'pointer',
                  border: paymentOption === 'full' ? '2px solid #000648' : '1.5px solid #e2e8f0',
                  background: paymentOption === 'full' ? '#f0f4ff' : '#ffffff'
                }}
              >
                <div style={{ fontWeight: 800, fontSize: '0.88rem', color: '#000648' }}>1-Time Full Payment</div>
                <div style={{ fontSize: '0.75rem', color: '#166534', fontWeight: 700, marginTop: '2px' }}>★ Save ₹2,000 Instant Discount</div>
              </div>

              <div
                role="button"
                tabIndex={0}
                aria-label="Select No-Cost EMI option"
                onClick={() => setPaymentOption('emi')}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setPaymentOption('emi'); }}
                style={{
                  padding: '14px', borderRadius: '12px', cursor: 'pointer',
                  border: paymentOption === 'emi' ? '2px solid #000648' : '1.5px solid #e2e8f0',
                  background: paymentOption === 'emi' ? '#f0f4ff' : '#ffffff'
                }}
              >
                <div style={{ fontWeight: 800, fontSize: '0.88rem', color: '#000648' }}>No-Cost EMI</div>
                <div style={{ fontSize: '0.75rem', color: '#475569', fontWeight: 700, marginTop: '2px' }}>From ₹2,499/month</div>
              </div>
            </div>

            {/* Candidate Details Inputs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div>
                <label htmlFor="checkout_name" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                  Full Candidate Name*
                </label>
                <input
                  id="checkout_name"
                  type="text"
                  placeholder="e.g. Ramesh Krishnan"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.88rem' }}
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <label htmlFor="checkout_email" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                    Email Address*
                  </label>
                  <input
                    id="checkout_email"
                    type="email"
                    placeholder="you@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.88rem' }}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="checkout_phone" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                    Mobile Number*
                  </label>
                  <input
                    id="checkout_phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.88rem' }}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Coupon Code Section */}
            <div>
              <label htmlFor="coupon_code_input" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                Promo / Coupon Code
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  id="coupon_code_input"
                  type="text"
                  placeholder="Enter Coupon (e.g. EZER2000)"
                  aria-label="Promo or coupon discount code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  disabled={couponApplied}
                  style={{ flex: 1, padding: '8px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.82rem', textTransform: 'uppercase' }}
                />
                <button
                  type="button"
                  onClick={handleApplyCoupon}
                  disabled={couponApplied}
                  style={{ padding: '8px 16px', background: couponApplied ? '#166534' : '#000648', color: '#ffffff', border: 'none', borderRadius: '8px', fontWeight: 800, fontSize: '0.82rem', cursor: 'pointer' }}
                >
                  {couponApplied ? '★ Applied (-₹2,000)' : 'Apply'}
                </button>
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

        {/* STEP 2: PAYMENT METHOD SELECTOR */}
        {step === 2 && (
          <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 700 }}>Order Amount Payable</span>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#000648' }}>₹{finalPrice.toLocaleString('en-IN')}</div>
              </div>
              <button
                type="button"
                onClick={() => setStep(1)}
                style={{ background: 'none', border: 'none', color: '#115DFC', fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer' }}
              >
                Edit Plan Details
              </button>
            </div>

            <div>
              <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '10px' }}>
                Select Preferred Payment Gateway Method
              </span>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div
                  role="button"
                  tabIndex={0}
                  aria-label="Select UPI Payment method"
                  onClick={() => setPaymentMethod('upi')}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setPaymentMethod('upi'); }}
                  style={{
                    padding: '14px', borderRadius: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px',
                    border: paymentMethod === 'upi' ? '2px solid #000648' : '1.5px solid #e2e8f0',
                    background: paymentMethod === 'upi' ? '#f0f4ff' : '#ffffff'
                  }}
                >
                  <HiQrcode size={24} color="#000648" />
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#000648' }}>UPI / GooglePay / PhonePe / Paytm</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Instant QR Code Scan & Pay</div>
                  </div>
                </div>

                <div
                  role="button"
                  tabIndex={0}
                  aria-label="Select Credit or Debit Card method"
                  onClick={() => setPaymentMethod('card')}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setPaymentMethod('card'); }}
                  style={{
                    padding: '14px', borderRadius: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px',
                    border: paymentMethod === 'card' ? '2px solid #000648' : '1.5px solid #e2e8f0',
                    background: paymentMethod === 'card' ? '#f0f4ff' : '#ffffff'
                  }}
                >
                  <HiCreditCard size={24} color="#000648" />
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#000648' }}>Credit Card / Debit Card</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Visa, MasterCard, RuPay, Amex</div>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCompletePurchase}
              disabled={isProcessing}
              style={{
                width: '100%', padding: '14px', borderRadius: '50px',
                background: '#f2b733', color: '#000648', fontWeight: 900, fontSize: '1.05rem',
                border: 'none', cursor: 'pointer', boxShadow: '0 4px 18px rgba(242,183,51,0.4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'
              }}
            >
              {isProcessing ? 'Processing Secure Payment...' : `Pay ₹${finalPrice.toLocaleString('en-IN')} & Unlock Course`}
            </button>
          </div>
        )}

        {/* STEP 3: ENROLLMENT CONFIRMATION RECEIPT */}
        {step === 3 && (
          <div style={{ padding: '32px 24px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#dcfce7', color: '#166534', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <HiCheckCircle size={44} />
            </div>

            <div>
              <span style={{ background: '#000648', color: '#f2b733', fontWeight: 900, fontSize: '0.72rem', padding: '4px 14px', borderRadius: '50px' }}>
                ENROLLMENT CONFIRMED
              </span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#000648', margin: '8px 0 4px 0' }}>
                Welcome to EZER Learning Solutions!
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#475569', margin: 0 }}>
                Your seat in <strong>{course.title}</strong> has been locked successfully.
              </p>
            </div>

            <div style={{ width: '100%', background: '#f8fafc', padding: '16px', borderRadius: '14px', border: '1.5px dashed #cbd5e1', textAlign: 'left', fontSize: '0.84rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ color: '#64748b', fontWeight: 700 }}>Transaction Receipt ID:</span>
                <span style={{ fontWeight: 900, color: '#000648' }}>{receiptNumber}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ color: '#64748b', fontWeight: 700 }}>Candidate Name:</span>
                <span style={{ fontWeight: 800, color: '#000648' }}>{fullName}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#64748b', fontWeight: 700 }}>Amount Paid:</span>
                <span style={{ fontWeight: 900, color: '#166534' }}>₹{finalPrice.toLocaleString('en-IN')} (Paid)</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleResetAndClose}
              style={{ padding: '12px 32px', borderRadius: '50px', background: '#000648', color: '#f2b733', fontWeight: 900, border: 'none', cursor: 'pointer' }}
            >
              Close & Start Learning
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
