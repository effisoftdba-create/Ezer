import React from 'react';

export default function PopupSuccessState({ onClose }) {
  return (
    <div style={{ textAlign: 'center', padding: '20px 0' }}>
      <div
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'rgba(13, 186, 75, 0.15)',
          color: 'var(--brand-green)',
          fontSize: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 16px',
        }}
      >
        ✓
      </div>
      <h4 style={{ color: 'var(--primary)', fontSize: '1.3rem', marginBottom: '8px' }}>
        Registration Successful!
      </h4>
      <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', marginBottom: '24px' }}>
        Thank you for reaching out to EZER Learning Solution. Our career counsellor will contact you shortly with demo class details.
      </p>
      <button type="button" onClick={onClose} className="btn btn-primary" style={{ width: '100%' }}>
        Close Window
      </button>
    </div>
  );
}
