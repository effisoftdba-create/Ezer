import React from 'react';

export default function PopupSuccessState({ onClose }) {
  return (
    <div className="modern-success-message">
      <button type="button" className="close-btn" onClick={onClose} aria-label="Close message">
        ×
      </button>

      <div className="icon-wrapper">
        <svg
          className="success-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      <div className="text-wrapper">
        <div className="title">Registration Successful!</div>
        <div className="message">
          Thank you for reaching out to EZER Learning Solutions. Our career counsellor will contact you shortly with live demo details.
        </div>
      </div>
    </div>
  );
}
