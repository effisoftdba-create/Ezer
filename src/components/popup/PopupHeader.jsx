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
    image: 'images/hero/hero_section_1.jpg',
    imagePosition: 'center center',
    imageFit: 'cover',
    photoVisibility: 85,
    photoHeight: 120,
    showPhoto: true
  };

  const showBanner = config.showPhoto !== false && Boolean(config.image) && Number(config.photoHeight || 0) > 0;
  const opacityVal = (config.photoVisibility !== undefined ? config.photoVisibility : 85) / 100;
  const bannerHeight = config.photoHeight !== undefined ? config.photoHeight : 120;

  return (
    <div
      style={{
        position: 'relative',
        background: '#000648',
        color: '#ffffff',
        borderTopLeftRadius: '16px',
        borderTopRightRadius: '16px',
        overflow: 'hidden',
        borderBottom: '2px solid #f2b733'
      }}
    >
      {/* Optional Custom Banner Photo Header */}
      {showBanner && (
        <div style={{
          height: `${bannerHeight}px`,
          position: 'relative',
          overflow: 'hidden',
          background: '#000648'
        }}>
          <img
            src={resolveImageSrc(config.image)}
            alt="Popup Header Banner"
            style={{
              width: '100%',
              height: '100%',
              objectFit: config.imageFit || 'cover',
              objectPosition: config.imagePosition || 'center center',
              opacity: opacityVal,
              transition: 'opacity 0.2s ease, height 0.2s ease'
            }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,6,72,0.2) 0%, rgba(0,6,72,0.92) 100%)'
          }} />

          {config.badge && (
            <span style={{
              position: 'absolute', top: '10px', left: '12px',
              background: '#000648', color: '#f2b733',
              fontSize: '0.65rem', fontWeight: 900, padding: '3px 10px',
              borderRadius: '50px', border: '1px solid #f2b733',
              boxShadow: '0 2px 6px rgba(0,6,72,0.3)', textTransform: 'uppercase'
            }}>
              {config.badge}
            </span>
          )}
        </div>
      )}

      {/* Main Header Content */}
      <div style={{ padding: showBanner ? '14px 20px 16px' : '20px 24px 16px', textAlign: 'center', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '6px' }}>
          <img
            src={resolveImageSrc('images/logo_white_border.png')}
            alt="EZER Crest Logo"
            style={{
              height: '38px',
              width: 'auto',
              objectFit: 'contain',
              mixBlendMode: 'screen'
            }}
          />
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '1.05rem', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1 }}>
              EZER
            </div>
            <div style={{ fontSize: '0.55rem', fontWeight: 800, color: '#f2b733', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '2px' }}>
              Learning Solutions
            </div>
          </div>
        </div>

        <h3 style={{ fontSize: '1.2rem', color: '#f2b733', fontWeight: 900, margin: '4px 0 2px' }}>
          {config.title || 'Register For Free Demo'}
        </h3>
        <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: 1.35 }}>
          {config.subtitle || 'Book your free live demo class & 1-on-1 career counselling session'}
        </p>

        {/* High-Contrast Visible Close Button */}
        <button
          type="button"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: showBanner ? '-28px' : '12px',
            right: '12px',
            background: 'rgba(0,6,72,0.75)',
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
            boxShadow: '0 4px 10px rgba(0,6,72,0.4)',
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
            e.currentTarget.style.background = 'rgba(0,6,72,0.75)';
            e.currentTarget.style.color = '#f2b733';
          }}
        >
          <HiX />
        </button>
      </div>
    </div>
  );
}
