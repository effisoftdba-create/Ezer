import React from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { HiAcademicCap, HiUserGroup, HiShieldCheck, HiPlay, HiVolumeUp, HiBriefcase } from 'react-icons/hi';
import { resolveImageSrc, resolveWebPSrc } from '../../utils/imageUtils';

export default function HeroRightFrame({ currentSlide, safeActive }) {
  const imagePos = currentSlide.position || currentSlide.imagePosition || 'center center';
  const imageFit = currentSlide.fit || currentSlide.imageFit || 'cover';

  return (
    <div
      style={{
        position: 'relative',
        background: '#000648',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '520px',
        width: '100%',
        height: '100%',
        clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 0% 100%)',
      }}
    >
      {/* Background Subtle Gradient Circles */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-10%',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(242,183,51,0.15) 0%, rgba(0,6,72,0) 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* CENTER MOBILE / TABLET APP FRAME MOCKUP */}
      <div
        style={{
          position: 'relative',
          width: '260px',
          height: '420px',
          background: '#ffffff',
          borderRadius: '32px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.4), 0 0 0 4px rgba(242, 183, 51, 0.35)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 5,
        }}
      >
        {/* Mockup Top Notch Bar */}
        <div style={{ height: '24px', background: '#000648', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ width: '60px', height: '4px', borderRadius: '4px', background: 'rgba(255,255,255,0.3)' }} />
        </div>

        {/* Live Cohort Image Screen */}
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden', background: '#000648' }}>
          <AnimatePresence mode="wait">
            <m.div
              key={currentSlide.id || safeActive}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
            >
              <picture style={{ width: '100%', height: '100%' }}>
                <source srcSet={resolveWebPSrc(currentSlide.url || currentSlide.image).webp} type="image/webp" />
                <img
                  src={resolveImageSrc(currentSlide.url || currentSlide.image)}
                  alt={currentSlide.headline || 'Hero live cohort preview'}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: imageFit,
                    objectPosition: imagePos,
                  }}
                />
              </picture>
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,6,72,0.85) 0%, transparent 60%)',
                }}
              />
            </m.div>
          </AnimatePresence>

          {/* Overlay Screen Controls */}
          <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px', color: '#ffffff' }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 900, color: '#f2b733', textTransform: 'uppercase', letterSpacing: '1px' }}>
              LIVE COHORT IN PROGRESS
            </div>
            <div style={{ fontSize: '0.82rem', fontWeight: 800, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {currentSlide.headline || 'Cloud DevOps & AI Masterclass'}
            </div>
          </div>
        </div>
      </div>

      {/* FLOATING WIDGET NODES (Connected with SVG lines) */}
      
      {/* Node 1: Top Left - LMS Access */}
      <m.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '12%',
          left: '8%',
          background: 'linear-gradient(135deg, #000648 0%, #0a146e 100%)',
          border: '1.5px solid #f2b733',
          borderRadius: '16px',
          padding: '10px 14px',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
          zIndex: 10,
        }}
      >
        <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'rgba(242,183,51,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f2b733' }}>
          <HiVolumeUp size={18} />
        </div>
        <div>
          <div style={{ fontSize: '0.72rem', fontWeight: 900, color: '#f2b733' }}>LMS ACCESS</div>
          <div style={{ fontSize: '0.68rem', opacity: 0.9 }}>On-Demand Recordings</div>
        </div>
      </m.div>

      {/* Node 2: Bottom Left - Mentorship */}
      <m.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        style={{
          position: 'absolute',
          bottom: '14%',
          left: '12%',
          background: 'linear-gradient(135deg, #000648 0%, #0a146e 100%)',
          border: '1.5px solid #f2b733',
          borderRadius: '16px',
          padding: '10px 14px',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
          zIndex: 10,
        }}
      >
        <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'rgba(242,183,51,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f2b733' }}>
          <HiUserGroup size={18} />
        </div>
        <div>
          <div style={{ fontSize: '0.72rem', fontWeight: 900, color: '#f2b733' }}>INDUSTRY MENTORS</div>
          <div style={{ fontSize: '0.68rem', opacity: 0.9 }}>Senior Tech Experts</div>
        </div>
      </m.div>

      {/* Node 3: Right Side - 12-Month Placement */}
      <m.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{
          position: 'absolute',
          top: '38%',
          right: '8%',
          background: 'linear-gradient(135deg, #000648 0%, #0a146e 100%)',
          border: '1.5px solid #f2b733',
          borderRadius: '16px',
          padding: '12px 16px',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          boxShadow: '0 12px 30px rgba(0,0,0,0.35)',
          zIndex: 10,
        }}
      >
        <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#f2b733', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000648' }}>
          <HiBriefcase size={20} />
        </div>
        <div>
          <div style={{ fontSize: '0.75rem', fontWeight: 900, color: '#ffffff' }}>12-MONTH PLACEMENT</div>
          <div style={{ fontSize: '0.68rem', color: '#f2b733', fontWeight: 800 }}>Comprehensive Career Support</div>
        </div>
      </m.div>

      {/* Floating Top Badge */}
      <div
        className="hero-badge-pill"
        style={{
          position: 'absolute',
          top: '20px',
          right: '24px',
          background: '#000648',
          color: '#ffffff',
          padding: '6px 16px',
          borderRadius: '50px',
          border: '1.5px solid #f2b733',
          fontSize: '0.72rem',
          fontWeight: 900,
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          boxShadow: '0 4px 14px rgba(0,6,72,0.3)',
          zIndex: 12,
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
