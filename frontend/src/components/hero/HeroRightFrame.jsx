import React, { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { resolveImageSrc, resolveWebPSrc } from '../../utils/imageUtils';

export default function HeroRightFrame({ currentSlide, safeActive }) {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const imagePos = isMobile
    ? (currentSlide.mobilePosition || currentSlide.position || currentSlide.imagePosition || 'center center')
    : (currentSlide.position || currentSlide.imagePosition || 'center center');
  const imageFit = currentSlide.fit || currentSlide.imageFit || 'cover';
  const imageZoom = isMobile
    ? (currentSlide.mobileZoom || currentSlide.zoom || currentSlide.imageZoom || 1)
    : (currentSlide.zoom || currentSlide.imageZoom || 1);

  return (
    <div
      style={{
        position: 'relative',
        background: '#000648',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '480px',
        width: '100%',
        height: '100%',
      }}
    >
      <AnimatePresence mode="wait">
        <m.div
          key={currentSlide.id || safeActive}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
        >
          <picture style={{ width: '100%', height: '100%', display: 'block' }}>
            <source srcSet={resolveWebPSrc(currentSlide.url || currentSlide.image).webp} type="image/webp" />
            <img
              src={resolveImageSrc(currentSlide.url || currentSlide.image)}
              alt={currentSlide.headline || 'EZER Learning IT Training Slide'}
              width="800"
              height="480"
              fetchPriority="high"
              loading="eager"
              decoding="async"
              style={{
                width: '100%',
                height: '100%',
                objectFit: imageFit,
                objectPosition: imagePos,
                transform: (imageZoom !== 1) ? `scale(${imageZoom})` : 'none',
                transformOrigin: imagePos,
                transition: 'transform 0.2s ease, object-position 0.2s ease, object-fit 0.2s ease',
              }}
            />
          </picture>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to left, rgba(0, 6, 72, 0.25) 0%, rgba(0, 6, 72, 0) 100%)',
              pointerEvents: 'none',
            }}
          />
        </m.div>
      </AnimatePresence>

      {/* Top Right Brand Pill Badge */}
      <div
        className="hero-badge-pill"
        style={{
          position: 'absolute',
          top: '24px',
          right: '24px',
          background: '#000648',
          color: '#ffffff',
          padding: '6px 16px',
          borderRadius: '50px',
          border: '1.5px solid #f2b733',
          fontSize: '0.72rem',
          fontWeight: 800,
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          boxShadow: '0 4px 14px rgba(0,6,72,0.3)',
          zIndex: 10,
        }}
      >
        <span
          style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            background: '#f2b733',
            display: 'inline-block',
          }}
        />
        <span>EZER LEARNING SOLUTION</span>
      </div>
    </div>
  );
}

