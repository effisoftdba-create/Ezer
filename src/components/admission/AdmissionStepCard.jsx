import React from 'react';
import { HiShieldCheck } from 'react-icons/hi';

export default function AdmissionStepCard({ item, idx, isVisible }) {
  const isEven = idx % 2 === 0;
  const stepNumber = item.step || `0${idx + 1}`;
  const delayTime = (idx * 0.1).toFixed(2);

  return (
    <div
      data-step-idx={idx}
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
          : isEven ? 'translateX(-24px)' : 'translateX(24px)',
        transition: 'transform 0.4s ease, opacity 0.4s ease',
        transitionDelay: `${delayTime}s`,
      }}
      className={`timeline-step-row ${isVisible ? 'popup-active' : ''}`}
    >
      {/* Left Side Content Column */}
      <div
        style={{
          width: '45%',
          display: 'flex',
          justifyContent: 'flex-end',
          paddingRight: isEven ? '20px' : '0',
        }}
        className="timeline-side-left"
      >
        {isEven && (
          <div
            style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '20px 22px',
              boxShadow: '0 1px 3px rgba(15, 23, 42, 0.05)',
              width: '100%',
              maxWidth: '380px',
              textAlign: 'left',
              position: 'relative',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span
                style={{
                  background: '#eff6ff',
                  color: '#2563eb',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  padding: '3px 8px',
                  borderRadius: '6px',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  border: '1px solid #bfdbfe',
                }}
              >
                STEP {stepNumber}
              </span>
              <HiShieldCheck style={{ color: '#2563eb', fontSize: '1.2rem' }} />
            </div>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px', lineHeight: 1.35 }}>
              {item.title}
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5, margin: 0 }}>
              {item.desc || item.description}
            </p>
          </div>
        )}
      </div>

      {/* Center Node Badge */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '38px',
          height: '38px',
          borderRadius: '10px',
          background: '#2563eb',
          border: '2px solid #ffffff',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700,
          fontSize: '0.85rem',
          boxShadow: '0 2px 8px rgba(37, 99, 235, 0.25)',
          zIndex: 3,
        }}
      >
        {idx + 1}
      </div>

      {/* Right Side Content Column */}
      <div
        style={{
          width: '45%',
          display: 'flex',
          justifyContent: 'flex-start',
          paddingLeft: !isEven ? '20px' : '0',
        }}
        className="timeline-side-right"
      >
        {!isEven && (
          <div
            style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '20px 22px',
              boxShadow: '0 1px 3px rgba(15, 23, 42, 0.05)',
              width: '100%',
              maxWidth: '380px',
              textAlign: 'left',
              position: 'relative',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span
                style={{
                  background: '#eff6ff',
                  color: '#2563eb',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  padding: '3px 8px',
                  borderRadius: '6px',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  border: '1px solid #bfdbfe',
                }}
              >
                STEP {stepNumber}
              </span>
              <HiShieldCheck style={{ color: '#2563eb', fontSize: '1.2rem' }} />
            </div>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px', lineHeight: 1.35 }}>
              {item.title}
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5, margin: 0 }}>
              {item.desc || item.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
