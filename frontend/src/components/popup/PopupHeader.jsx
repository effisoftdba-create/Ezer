import React from 'react';
import { HiX } from 'react-icons/hi';
import { useSiteData } from '../../Admin_Control/context/SiteContext';
import { resolveImageSrc } from '../../utils/imageUtils';

export default function PopupHeader({ onClose, overrideConfig }) {
  const siteData = useSiteData();
  const config = overrideConfig || siteData?.popupConfig || {
    title: 'Register For Free Demo',
    subtitle: 'Book your free live demo class & 1-on-1 career counselling session',
    badge: 'LIMITED SEATS AVAILABLE',
  };

  return (
    <div
      style={{
        position: 'relative',
        background: '#000648',
        color: '#ffffff',
        borderTopLeftRadius: '16px',
        borderTopRightRadius: '16px',
        overflow: 'hidden',
        borderBottom: '2.5px solid #f2b733',
        padding: '20px 24px 18px',
        textAlign: 'center'
      }}
    >
      {/* Optional Badge Tagline */}
      {config.badge && (
        <div style={{ marginBottom: '8px' }}>
          <span style={{
            background: 'rgba(242, 183, 51, 0.15)', color: '#f2b733',
            fontSize: '0.68rem', fontWeight: 900, padding: '3px 12px',
            borderRadius: '50px', border: '1px solid rgba(242, 183, 51, 0.5)',
            letterSpacing: '0.05em', textTransform: 'uppercase'
          }}>
            {config.badge}
          </span>
        </div>
      )}

      {/* Brand Logo & Name */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '8px' }}>
        <img
          src={resolveImageSrc('images/logo_white_border.png')}
          alt="EZER Crest Logo"
          style={{
            height: '40px',
            width: 'auto',
            objectFit: 'contain',
            mixBlendMode: 'screen'
          }}
        />
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1 }}>
            EZER
          </div>
          <div style={{ fontSize: '0.58rem', fontWeight: 800, color: '#f2b733', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '2px' }}>
            Learning Solutions
          </div>
        </div>
      </div>

      {/* Main Title & Subtitle */}
      <h3 style={{ fontSize: '1.25rem', color: '#f2b733', fontWeight: 900, margin: '4px 0 3px', lineHeight: 1.25 }}>
        {config.title || 'Register For Free Demo'}
      </h3>
      <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.88)', margin: 0, lineHeight: 1.4 }}>
        {config.subtitle || 'Book your free live demo class & 1-on-1 career counselling session'}
      </p>

      {/* High-Contrast Visible Close Button */}
      <button
        type="button"
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '14px',
          right: '14px',
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
