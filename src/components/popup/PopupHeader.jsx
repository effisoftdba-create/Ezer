import React from 'react';
import { HiX } from 'react-icons/hi';

export default function PopupHeader({ onClose }) {
  return (
    <div
      style={{
        padding: '16px 20px 12px',
        textAlign: 'center',
        borderBottom: '1px solid var(--border)',
        position: 'relative',
        background: 'var(--off-white)',
      }}
    >
      <img
        src={`${import.meta.env.BASE_URL || '/'}logo.jpg?v=2`}
        alt="EZER Learning Solutions"
        style={{
          height: '36px',
          margin: '0 auto 6px',
          borderRadius: '6px',
          objectFit: 'contain',
          background: '#fff',
          padding: '2px',
        }}
      />
      <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', fontWeight: 800, margin: '0 0 2px' }}>
        Register Now
      </h3>
      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>
        Book your free live demo class & counselling session
      </p>

      {/* High-Contrast Visible Close Button */}
      <button
        type="button"
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: '#000648',
          border: '2px solid #f2b733',
          fontSize: '1.2rem',
          color: '#ffffff',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          boxShadow: '0 4px 10px rgba(0,6,72,0.3)',
          transition: 'transform 0.2s ease, background-color 0.2s ease',
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
          e.currentTarget.style.background = '#000648';
          e.currentTarget.style.color = '#ffffff';
        }}
      >
        <HiX />
      </button>
    </div>
  );
}
