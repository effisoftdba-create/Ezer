import React, { useState } from 'react';
import { HiX, HiOutlineShieldCheck, HiCheckCircle } from 'react-icons/hi';
import { useSiteData } from '../../context/SiteContext';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';

export default function CoursePurchaseModal({ isOpen, onClose, course }) {
  useBodyScrollLock(isOpen && Boolean(course));
  const { addLead } = useSiteData();
  const [step, setStep] = useState(1); // 1: Form, 2: Success
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen || !course) return null;

  const handleClose = () => {
    setStep(1);
    setFullName('');
    setEmail('');
    setPhone('');
    setIsProcessing(false);
    onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !phone.trim() || phone.trim().length < 10) {
      alert('Please fill out your full name, email, and 10-digit mobile number.');
      return;
    }
    setIsProcessing(true);
    try {
      if (addLead) {
        addLead({
          name: fullName.trim(),
          email: email.trim(),
          phone: phone.trim(),
          course: course.title || 'Executive IT Course',
          paymentStatus: 'VIP_WAITLIST',
          amountPaid: 'VIP Priority Waitlist',
          status: 'VIP Waitlist',
          city: 'Online Priority Registration',
          timestamp: new Date().toISOString()
        }, true);
      }
      setStep(2);
    } catch (err) {
      console.error('[Enrollment Error]:', err);
      alert('Submission failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 10000,
      background: 'rgba(0, 6, 72, 0.88)', backdropFilter: 'blur(10px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px',
      overscrollBehavior: 'contain'
    }}>
      <div style={{
        background: '#ffffff', color: '#000648', width: '100%', maxWidth: '520px',
        maxHeight: '92vh', overflowY: 'auto',
        borderRadius: '24px', boxShadow: '0 30px 70px rgba(0,0,0,0.5)',
        position: 'relative', border: '1.5px solid rgba(242, 183, 51, 0.4)'
      }}>

        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #000648 0%, #07157b 100%)',
          color: '#ffffff', padding: '22px 26px 20px',
          borderBottom: '2px solid #f2b733', borderRadius: '22px 22px 0 0'
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <div>
              <span style={{
                fontSize: '0.68rem', fontWeight: 900, color: '#f2b733',
                textTransform: 'uppercase', letterSpacing: '0.08em',
                display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px'
              }}>
                <HiOutlineShieldCheck size={14} color="#f2b733" /> OFFICIAL SECURE ENROLLMENT PORTAL
              </span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#ffffff', margin: 0, textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                {course.title}
              </h3>
            </div>
            <button
              type="button"
              aria-label="Close enrollment modal"
              onClick={handleClose}
              style={{
                background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)',
                color: '#ffffff', width: '34px', height: '34px', borderRadius: '50%', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
              }}
            >
              <HiX size={18} />
            </button>
          </div>
        </div>

        {/* STEP 1: Waitlist Form */}
        {step === 1 && (
          <form onSubmit={handleSubmit} style={{ padding: '28px 26px', display: 'flex', flexDirection: 'column', gap: '18px' }}>

            {/* Banner */}
            <div style={{
              background: 'linear-gradient(135deg, #000648 0%, #0c2080 100%)',
              color: '#ffffff', borderRadius: '16px', padding: '18px 20px',
              border: '1.5px solid #f2b733', display: 'flex', flexDirection: 'column', gap: '8px',
              boxShadow: '0 8px 24px rgba(0,6,72,0.12)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 900, color: '#f2b733', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  🚀 ADMISSIONS OPENING SOON
                </span>
                <span style={{ background: '#f2b733', color: '#000648', fontSize: '0.72rem', fontWeight: 900, padding: '4px 10px', borderRadius: '50px' }}>
                  VIP WAITLIST ACTIVE
                </span>
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 900, color: '#ffffff', lineHeight: 1.3 }}>
                Join the VIP Priority Early-Access Cohort Waitlist
              </div>
              <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: 1.5 }}>
                Register your details below to get early-access notifications and 1-on-1 counselor guidance when cohort seats open!
              </p>
            </div>

            {/* Full Name */}
            <div>
              <label htmlFor="enroll_full_name" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#000648', display: 'block', marginBottom: '5px' }}>
                Full Name *
              </label>
              <input
                id="enroll_full_name"
                type="text"
                required
                autoComplete="name"
                placeholder="e.g. Rahul Sharma"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                style={{ width: '100%', padding: '11px 14px', borderRadius: '10px', border: '1.5px solid #cbd5e1', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="enroll_email" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#000648', display: 'block', marginBottom: '5px' }}>
                Email Address *
              </label>
              <input
                id="enroll_email"
                type="email"
                required
                autoComplete="email"
                placeholder="e.g. rahul@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: '100%', padding: '11px 14px', borderRadius: '10px', border: '1.5px solid #cbd5e1', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }}
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="enroll_phone" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#000648', display: 'block', marginBottom: '5px' }}>
                WhatsApp Mobile Number *
              </label>
              <input
                id="enroll_phone"
                type="tel"
                required
                autoComplete="tel"
                maxLength={10}
                placeholder="e.g. 9876543210"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                style={{ width: '100%', padding: '11px 14px', borderRadius: '10px', border: '1.5px solid #cbd5e1', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isProcessing}
              style={{
                width: '100%', padding: '14px', borderRadius: '50px',
                background: isProcessing ? '#94a3b8' : '#000648',
                color: '#f2b733', fontWeight: 900, fontSize: '1rem',
                border: 'none', cursor: isProcessing ? 'not-allowed' : 'pointer',
                boxShadow: '0 6px 20px rgba(0,6,72,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                transition: 'background 0.2s ease'
              }}
            >
              {isProcessing ? 'Submitting...' : 'Submit & Reserve My VIP Spot ➔'}
            </button>

            <p style={{ fontSize: '0.72rem', color: '#94a3b8', textAlign: 'center', margin: 0, lineHeight: 1.5 }}>
              🔒 Your information is 100% secure and never shared.
            </p>
          </form>
        )}

        {/* STEP 2: Clean Success Popup */}
        {step === 2 && (
          <div style={{ padding: '40px 28px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '18px' }}>
            <div style={{
              width: '72px', height: '72px',
              background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
              border: '2px solid #86efac', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(22, 101, 52, 0.15)'
            }}>
              <HiCheckCircle size={38} color="#16a34a" />
            </div>

            <div>
              <span style={{
                background: '#f2b733', color: '#000648',
                fontSize: '0.72rem', fontWeight: 900, padding: '4px 14px',
                borderRadius: '50px', textTransform: 'uppercase', letterSpacing: '0.05em'
              }}>
                VIP SPOT RESERVED
              </span>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 900, color: '#000648', margin: '12px 0 6px 0' }}>
                Registration Successful!
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0, lineHeight: 1.6, maxWidth: '360px' }}>
                Thank you, <strong style={{ color: '#000648' }}>{fullName}</strong>! Your VIP priority waitlist spot for <strong style={{ color: '#000648' }}>{course.title}</strong> has been confirmed. Our counselor will contact you soon.
              </p>
            </div>

            <div style={{
              width: '100%', background: '#f8fafc',
              border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '16px 18px', textAlign: 'left'
            }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 900, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
                Registered Details
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.84rem', color: '#334155' }}>
                <div><strong>Name:</strong> {fullName}</div>
                <div><strong>Email:</strong> {email}</div>
                <div><strong>Mobile:</strong> {phone}</div>
                <div><strong>Course:</strong> {course.title}</div>
                <div>
                  <strong>Status:</strong>{' '}
                  <span style={{ color: '#16a34a', fontWeight: 800 }}>✔ VIP Priority Waitlist</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleClose}
              style={{
                width: '100%', padding: '13px',
                background: '#000648', color: '#f2b733',
                border: 'none', borderRadius: '50px',
                fontWeight: 900, fontSize: '0.95rem', cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(0,6,72,0.2)',
                transition: 'opacity 0.2s ease'
              }}
            >
              Done ✓
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
