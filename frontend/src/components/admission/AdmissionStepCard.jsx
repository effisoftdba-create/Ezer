import React from 'react';
import { HiShieldCheck } from 'react-icons/hi';
import { m } from 'framer-motion';

export default function AdmissionStepCard({ item, idx, isVisible }) {
  const isEven = idx % 2 === 0;
  const stepNumber = item.step || `0${idx + 1}`;

  return (
    <div
      data-step-idx={idx}
      className={`timeline-step-row ${isVisible ? 'popup-active' : ''}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        position: 'relative',
        marginBottom: '32px',
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? 'translateX(0) scale(1)'
          : isEven ? 'translateX(-16px)' : 'translateX(16px)',
        transition: 'transform 0.4s ease, opacity 0.4s ease',
        transitionDelay: `${idx * 0.08}s`,
      }}
    >
      {/* Left Side Content Column */}
      <div
        className="timeline-side-left"
        style={{
          width: '45%',
          display: 'flex',
          justifyContent: 'flex-end',
          paddingRight: isEven ? '24px' : '0',
        }}
      >
        {isEven && (
          <m.div
            whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0, 6, 72, 0.1)' }}
            transition={{ duration: 0.2 }}
            style={{
              background: '#ffffff',
              border: '1.5px solid #e2e8f0',
              borderRadius: '14px',
              padding: '20px 22px',
              boxShadow: '0 4px 12px rgba(0, 6, 72, 0.04)',
              width: '100%',
              maxWidth: '400px',
              textAlign: 'left',
              position: 'relative',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span
                style={{
                  background: '#000648',
                  color: '#f2b733',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  padding: '3px 10px',
                  borderRadius: '50px',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                STEP {stepNumber}
              </span>
              <HiShieldCheck style={{ color: '#000648', fontSize: '1.25rem' }} />
            </div>

            <h3 style={{ fontSize: '1.08rem', fontWeight: 800, color: '#000648', marginBottom: '6px', lineHeight: 1.35 }}>
              {item.title}
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
              {item.desc || item.description}
            </p>
          </m.div>
        )}
      </div>

      {/* Center Node Badge */}
      <div
        className="timeline-center-node"
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '38px',
          height: '38px',
          borderRadius: '10px',
          background: '#000648',
          border: '2px solid #f2b733',
          color: '#f2b733',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 800,
          fontSize: '0.9rem',
          boxShadow: '0 4px 12px rgba(0, 6, 72, 0.25)',
          zIndex: 3,
        }}
      >
        {idx + 1}
      </div>

      {/* Right Side Content Column */}
      <div
        className="timeline-side-right"
        style={{
          width: '45%',
          display: 'flex',
          justifyContent: 'flex-start',
          paddingLeft: !isEven ? '24px' : '0',
        }}
      >
        {!isEven && (
          <m.div
            whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0, 6, 72, 0.1)' }}
            transition={{ duration: 0.2 }}
            style={{
              background: '#ffffff',
              border: '1.5px solid #e2e8f0',
              borderRadius: '14px',
              padding: '20px 22px',
              boxShadow: '0 4px 12px rgba(0, 6, 72, 0.04)',
              width: '100%',
              maxWidth: '400px',
              textAlign: 'left',
              position: 'relative',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span
                style={{
                  background: '#000648',
                  color: '#f2b733',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  padding: '3px 10px',
                  borderRadius: '50px',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                STEP {stepNumber}
              </span>
              <HiShieldCheck style={{ color: '#000648', fontSize: '1.25rem' }} />
            </div>

            <h3 style={{ fontSize: '1.08rem', fontWeight: 800, color: '#000648', marginBottom: '6px', lineHeight: 1.35 }}>
              {item.title}
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
              {item.desc || item.description}
            </p>
          </m.div>
        )}
      </div>
    </div>
  );
}
