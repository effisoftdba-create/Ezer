import React from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { resolveImageSrc } from '../../utils/imageUtils';

export default function HeroRightFrame({ currentSlide, safeActive }) {
  const imagePos = currentSlide.position || currentSlide.imagePosition || 'center center';
  const imageFit = currentSlide.fit || currentSlide.imageFit || 'cover';

  return (
    <div
      style={{
        position: 'relative',
        background: '#000638',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '420px',
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
          transition={{ duration: 0.55, ease: 'easeOut' }}
          style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
        >
          <img
            src={resolveImageSrc(currentSlide.url || currentSlide.image)}
            alt={currentSlide.headline || 'Hero slide photo'}
            style={{
              width: '100%',
              height: '100%',
              objectFit: imageFit,
              objectPosition: imagePos,
              transition: 'object-position 0.2s ease, object-fit 0.2s ease',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to left, rgba(0, 6, 56, 0.2) 0%, rgba(0, 6, 56, 0) 100%)',
              pointerEvents: 'none',
            }}
          />
        </m.div>
      </AnimatePresence>

      <div
        style={{
          position: 'absolute',
          top: '24px',
          right: '24px',
          background: '#000638',
          color: '#ffffff',
          padding: '6px 14px',
          borderRadius: '50px',
          border: '1.5px solid #f2b733',
          fontSize: '0.72rem',
          fontWeight: 800,
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          boxShadow: '0 4px 14px rgba(0,6,56,0.3)',
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
