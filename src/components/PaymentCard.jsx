import React, { useState } from 'react';
import { HiCheckCircle, HiLockClosed, HiSparkles } from 'react-icons/hi';

export default function PaymentCard({ course, onEnrollClick }) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      if (onEnrollClick) {
        await onEnrollClick(course);
      }
    } catch (err) {
      console.error('Checkout error:', err);
    } finally {
      setLoading(false);
    }
  };

  const courseFeatures = [
    'Live Online Instructor-Led Cohort Classes',
    '12-Month Dedicated Placement Support & Resume Prep',
    'Hands-on Practical Labs & Capstone Projects',
    '1:1 Code Reviews with Senior Tech Mentors',
    'Verifiable ISO 9001:2015 Course Certificate',
    'Up to 3 Years Access to Alumni & Peer Community'
  ];

  return (
    <div
      className="ezer-payment-card-wrapper"
      style={{
        position: 'relative',
        maxWidth: '440px',
        width: '100%',
        margin: '0 auto',
        borderRadius: '24px',
        padding: '2px',
        background: 'linear-gradient(135deg, #f2b733 0%, #000648 50%, #f2b733 100%)',
        boxShadow: '0 20px 50px rgba(0, 6, 72, 0.35)',
      }}
    >
      <div
        style={{
          background: 'linear-gradient(180deg, #000648 0%, #0a1478 100%)',
          borderRadius: '22px',
          padding: '32px 28px',
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Glow backdrop effect */}
        <div
          style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(242,183,51,0.25) 0%, rgba(0,6,72,0) 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Header Tag */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(242, 183, 51, 0.15)',
            border: '1px solid rgba(242, 183, 51, 0.4)',
            color: '#f2b733',
            fontSize: '0.75rem',
            fontWeight: 800,
            padding: '5px 14px',
            borderRadius: '50px',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            marginBottom: '18px',
          }}
        >
          <HiSparkles size={14} />
          <span>Limited Time Offer</span>
        </div>

        {/* Course Title */}
        <h3
          style={{
            fontSize: '1.4rem',
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: '12px',
            lineHeight: 1.3,
          }}
        >
          {course?.title || 'EZER IT Certification Course'}
        </h3>

        {/* Pricing Block - Strictly ₹9 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '10px',
            margin: '20px 0 24px',
            paddingBottom: '20px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
          }}
        >
          <span style={{ fontSize: '3rem', fontWeight: 900, color: '#f2b733', lineHeight: 1 }}>
            ₹9
          </span>
          <span style={{ fontSize: '0.9rem', color: '#cbd5e1', fontWeight: 600 }}>
            one-time total
          </span>
        </div>

        {/* Feature List */}
        <div style={{ marginBottom: '28px' }}>
          <h4
            style={{
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: '#94a3b8',
              marginBottom: '14px',
              fontWeight: 700,
            }}
          >
            What this course includes:
          </h4>

          <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: 0, margin: 0 }}>
            {courseFeatures.map((feat, idx) => (
              <li
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  fontSize: '0.9rem',
                  color: '#e2e8f0',
                  lineHeight: 1.45,
                }}
              >
                <HiCheckCircle
                  size={18}
                  style={{ color: '#f2b733', flexShrink: 0, marginTop: '2px' }}
                />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <button
          type="button"
          onClick={handleCheckout}
          disabled={loading}
          style={{
            width: '100%',
            padding: '16px 24px',
            borderRadius: '50px',
            background: 'linear-gradient(135deg, #f2b733 0%, #d9a02a 100%)',
            color: '#000648',
            fontWeight: 900,
            fontSize: '1.05rem',
            letterSpacing: '0.02em',
            boxShadow: '0 6px 20px rgba(242, 183, 51, 0.4)',
            cursor: loading ? 'not-allowed' : 'pointer',
            transition: 'transform 0.2s ease, boxShadow 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}
        >
          <HiLockClosed size={18} />
          <span>{loading ? 'Processing...' : 'Enroll Now'}</span>
        </button>

        {/* Secure Transaction Notice (No Money-Back Guarantee Pill) */}
        <div
          style={{
            marginTop: '16px',
            textAlign: 'center',
            fontSize: '0.78rem',
            color: '#94a3b8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
          }}
        >
          <HiLockClosed size={12} style={{ color: '#10b981' }} />
          <span>256-Bit SSL Encrypted & Secured Checkout</span>
        </div>
      </div>
    </div>
  );
}
