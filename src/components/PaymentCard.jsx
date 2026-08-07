import React, { useState } from 'react';
import { HiCheck, HiLockClosed, HiSparkles } from 'react-icons/hi';

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
    'Live Online Instructor-Led Cohort Sessions',
    '12-Month Dedicated Placement Assistance & Resume Reviews',
    'Hands-on Practical Labs & Production Capstone Projects',
    '1:1 Code Reviews & Mentorship by Senior Engineers',
    'Verifiable ISO 9001:2015 Professional IT Certification',
    'Up to 3 Years Access to Alumni Network & Community'
  ];

  return (
    <div style={{ width: '100%', maxWidth: '30rem', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="growth-pro-card-group" style={{ position: 'relative', width: '100%' }}>
        {/* Keyframe styles for spinning blur animations and card hover */}
        <style>{`
          @keyframes spinSlow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes spinSlowRev {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }
          .growth-pro-blur-1 {
            animation: spinSlow 8s linear infinite;
          }
          .growth-pro-blur-2 {
            animation: spinSlowRev 16s linear infinite;
          }
          .growth-pro-card-box {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .growth-pro-card-box:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 40px -10px rgba(34, 211, 238, 0.45);
          }
        `}</style>

        {/* Rotating blur background */}
        <div style={{ position: 'absolute', inset: 0, borderRadius: '1.25rem', overflow: 'hidden', pointerEvents: 'none' }}>
          <div
            className="growth-pro-blur-1"
            style={{
              position: 'absolute',
              top: '-2.5rem',
              left: '-2.5rem',
              right: '-2.5rem',
              bottom: '-2.5rem',
              borderRadius: '9999px',
              background: 'linear-gradient(to right, transparent, rgba(34, 211, 238, 0.35), transparent)',
              filter: 'blur(24px)',
              opacity: 0.65
            }}
          />
          <div
            className="growth-pro-blur-2"
            style={{
              position: 'absolute',
              top: '-5rem',
              left: '-5rem',
              right: '-5rem',
              bottom: '-5rem',
              borderRadius: '9999px',
              background: 'linear-gradient(to right, transparent, rgba(14, 165, 233, 0.25), transparent)',
              filter: 'blur(36px)',
              opacity: 0.45
            }}
          />
        </div>

        {/* Border gradient */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '1.25rem',
            padding: '1px',
            background: 'linear-gradient(to bottom, rgba(103, 232, 249, 0.6), rgba(71, 85, 105, 0.8), rgba(30, 58, 138, 0.7))',
            pointerEvents: 'none'
          }}
        />

        {/* Growth Pro Card Main Container */}
        <div
          className="growth-pro-card-box"
          style={{
            position: 'relative',
            borderRadius: '1.25rem',
            overflow: 'hidden',
            boxShadow: 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.1)',
            outline: '1px solid rgba(255, 255, 255, 0.2)',
            backgroundColor: 'hsl(222, 47%, 11%)',
            backgroundImage: `
              radial-gradient(at 88% 40%, hsl(222, 47%, 11%) 0px, transparent 85%),
              radial-gradient(at 49% 30%, hsl(222, 47%, 11%) 0px, transparent 85%),
              radial-gradient(at 14% 26%, hsl(222, 47%, 11%) 0px, transparent 85%),
              radial-gradient(at 0% 64%, hsl(188, 95%, 55%) 0px, transparent 85%),
              radial-gradient(at 41% 94%, hsl(205, 92%, 62%) 0px, transparent 85%),
              radial-gradient(at 100% 99%, hsl(195, 100%, 55%) 0px, transparent 85%)
            `
          }}
        >
          <div style={{ position: 'relative', padding: '1.75rem' }}>
            {/* Header */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 800, tracking: '-0.025em', color: '#ffffff' }}>
                  {course?.title || 'EZER IT Certification'}
                </span>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    background: 'linear-gradient(to right, rgba(6, 182, 212, 0.25), rgba(59, 130, 246, 0.25))',
                    color: '#67e8f9',
                    outline: '1px solid rgba(34, 211, 238, 0.4)'
                  }}
                >
                  <HiSparkles size={12} /> Popular Cohort
                </span>
              </div>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', margin: 0, paddingRight: '0.5rem' }}>
                {course?.tagline || 'Perfect for career switchers ready to master real IT skills and get placed.'}
              </p>
            </div>

            {/* Pricing - Strictly ₹9 */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-0.025em', color: '#ffffff', lineHeight: 1 }}>
                ₹9
              </span>
              <span style={{ fontSize: '0.875rem', color: '#94a3b8', fontWeight: 600 }}>
                one-time total
              </span>
            </div>

            {/* Divider */}
            <hr style={{ marginBottom: '1.5rem', border: 'none', borderTop: '1px solid rgba(255, 255, 255, 0.12)' }} />

            {/* Features */}
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem', padding: 0, margin: '0 0 2rem 0', listStyle: 'none' }}>
              {courseFeatures.map((feat, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span
                    style={{
                      display: 'grid',
                      placeItems: 'center',
                      width: '1.25rem',
                      height: '1.25rem',
                      borderRadius: '9999px',
                      background: 'rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(4px)',
                      outline: '1px solid rgba(255, 255, 255, 0.25)',
                      flexShrink: 0
                    }}
                  >
                    <HiCheck size={14} style={{ color: '#ffffff' }} />
                  </span>
                  <span style={{ fontSize: '0.875rem', color: '#f1f5f9', fontWeight: 500 }}>
                    {feat}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button
              type="button"
              onClick={handleCheckout}
              disabled={loading}
              style={{
                width: '100%',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '0.75rem',
                padding: '0.875rem 1.25rem',
                fontSize: '0.95rem',
                fontWeight: 800,
                color: '#ffffff',
                background: 'linear-gradient(135deg, #0284c7 0%, #06b6d4 100%)',
                boxShadow: 'inset 0 -2px 25px -4px rgba(255, 255, 255, 0.35)',
                outline: '1px solid rgba(255, 255, 255, 0.15)',
                border: 'none',
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                gap: '8px'
              }}
            >
              <HiLockClosed size={18} />
              <span>{loading ? 'Processing Order...' : 'Enroll Now for ₹9'}</span>
            </button>

            {/* Note: 14-day money back guarantee pill REMOVED completely per user request */}
          </div>
        </div>
      </div>
    </div>
  );
}
