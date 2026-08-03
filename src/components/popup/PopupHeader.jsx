import React from 'react';
import { HiX } from 'react-icons/hi';

export default function PopupHeader({ onClose }) {
  return (
    <div
      style={{
        padding: '20px 24px 16px',
        textAlign: 'center',
        borderBottom: '1.5px solid #e2e8f0',
        position: 'relative',
        background: '#000648',
        color: '#ffffff',
        borderTopLeftRadius: '16px',
        borderTopRightRadius: '16px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '8px' }}>
        <div style={{ background: '#ffffff', padding: '4px 8px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.25)' }}>
          <img
            src={`${import.meta.env.BASE_URL || '/'}images/logo_white_border.png`}
            alt="EZER Learning Solutions Crest Logo"
            style={{
              height: '38px',
              width: 'auto',
              objectFit: 'contain',
            }}
          />
        </div>
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1 }}>
            EZER
          </div>
          <div style={{ fontSize: '0.58rem', fontWeight: 800, color: '#f2b733', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '2px' }}>
            Learning Solutions
          </div>
        </div>
      </div>

      <h3 style={{ fontSize: '1.25rem', color: '#f2b733', fontWeight: 900, margin: '6px 0 2px' }}>
        Register For Free Demo
      </h3>
      <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.85)', margin: 0 }}>
        Book your free live demo class & 1-on-1 career counselling session
      </p>

      {/* High-Contrast Visible Close Button */}
      <button
        type="button"
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          background: 'rgba(255,255,255,0.15)',
          border: '1.5px solid #f2b733',
          fontSize: '1.2rem',
          color: '#f2b733',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          boxShadow: '0 4px 10px rgba(0,6,72,0.3)',
          transition: 'transform 0.2s ease, background-color 0.2s ease, color 0.2s ease',
          zIndex: 10,
        }}
        aria-label="Close modal"
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.background = '#f2b733';
          e.currentTarget.style.color = '#000648';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
          e.currentTarget.style.color = '#f2b733';
        }}
      >
        <HiX />
      </button>
    </div>
  );
}
