import React, { useState } from 'react';
import { HiCheck, HiLockClosed, HiSparkles } from 'react-icons/hi';

const COURSE_FEATURES = [
  'Live Online Instructor-Led Cohort Sessions',
  '12-Month Dedicated Placement Assistance & Resume Reviews',
  'Hands-on Practical Labs & Production Capstone Projects',
  '1:1 Code Reviews & Mentorship by Senior Engineers',
  'Verifiable ISO 9001:2015 Professional IT Certification',
  'Up to 3 Years Access to Alumni Network & Community'
];

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


  return (
    <div style={{ width: '100%', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
      <div
        className="ezer-brand-payment-card"
        style={{
          width: '100%',
          maxWidth: '100%',
          position: 'relative',
          borderRadius: '24px',
          padding: '2px',
          background: 'linear-gradient(135deg, #f2b733 0%, #000648 50%, #f2b733 100%)',
          boxShadow: '0 20px 50px rgba(0, 6, 72, 0.3)',
        }}
      >
        <div
          style={{
            width: '100%',
            background: 'linear-gradient(180deg, #000648 0%, #0a1478 100%)',
            borderRadius: '22px',
            padding: '40px 32px',
            color: '#ffffff',
            position: 'relative',
            overflow: 'hidden',
            border: '2px solid #f2b733',
          }}
        >
          {/* Top Glow Accent */}
          <div
            style={{
              position: 'absolute',
              top: '-40px',
              right: '-40px',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(242,183,51,0.2) 0%, transparent 70%)',
              pointerEvents: 'none'
            }}
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: '36px', alignItems: 'center' }}>
            {/* LEFT COLUMN: TITLE & FEATURES */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(242, 183, 51, 0.15)',
                  border: '1px solid #f2b733',
                  color: '#f2b733',
                  padding: '6px 16px',
                  borderRadius: '50px',
                  fontSize: '0.75rem',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '16px'
                }}
              >
                <HiSparkles size={14} /> OFFICIAL EZER COHORT ACCESS
              </div>

              <h3 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 900, color: '#ffffff', marginBottom: '12px', lineHeight: 1.2 }}>
                {course?.title || 'EZER IT Certification'}
              </h3>

              <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '24px' }}>
                {course?.tagline || 'Master real IT skills with live instructor training and 12-month placement assistance.'}
              </p>

              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px', padding: 0, margin: 0, listStyle: 'none' }}>
                {COURSE_FEATURES.map((feat) => (
                  <li key={feat} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: '#f8fafc' }}>
                    <span
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: '#f2b733',
                        color: '#000648',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 900,
                        fontSize: '0.75rem',
                        flexShrink: 0
                      }}
                    >
                      <HiCheck size={14} />
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT COLUMN: PRICING & ENROLLMENT ACTION */}
            <div
              style={{
                background: '#000326',
                borderRadius: '20px',
                padding: '32px',
                border: '2px solid #f2b733',
                textAlign: 'center',
                boxShadow: '0 12px 32px rgba(0,0,0,0.4)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <span style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: '#94a3b8', letterSpacing: '0.06em' }}>
                Total One-Time Tuition Fee
              </span>

              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '8px', margin: '14px 0 16px' }}>
                <span style={{ fontSize: '3.6rem', fontWeight: 900, color: '#f2b733', lineHeight: 1 }}>
                  ₹9
                </span>
                <span style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: 600 }}>
                  one-time total
                </span>
              </div>

              <div style={{ background: 'rgba(242, 183, 51, 0.15)', color: '#f2b733', padding: '6px 16px', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 800, marginBottom: '24px' }}>
                {course?.duration || '3 Months'} Full Cohort & Placement Support
              </div>

              <button
                type="button"
                className="ezer-fly-enroll-btn"
                onClick={handleCheckout}
                disabled={loading}
              >
                <div className="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </div>
                <span>{loading ? 'Processing...' : 'Enroll Now for ₹9'}</span>
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
