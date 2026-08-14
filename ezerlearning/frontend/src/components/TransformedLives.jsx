import React, { useRef, useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { useSiteData } from '../context/SiteContext';
import { resolveImageSrc } from '../utils/imageUtils';

import CarouselDotsNav from './CarouselDotsNav';

export default function TransformedLives() {
  const { transformedLives, outcomesHeader } = useSiteData();
  const sliderRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const displayList = (transformedLives && transformedLives.length > 0) ? transformedLives : [];

  const cardWidthRef = React.useRef(315);

  // Cache card width once on mount and on resize to avoid forced reflow on each scroll
  useEffect(() => {
    const updateCardWidth = () => {
      if (sliderRef.current?.children[0]) {
        cardWidthRef.current = sliderRef.current.children[0].offsetWidth + 20;
      }
    };
    updateCardWidth();
    window.addEventListener('resize', updateCardWidth, { passive: true });
    return () => window.removeEventListener('resize', updateCardWidth);
  }, []);

  // Auto Scroll Loop with Pause on Mouse Hover
  useEffect(() => {
    if (isHovered || !displayList.length) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % displayList.length;
        if (sliderRef.current) {
          sliderRef.current.scrollTo({ left: next * cardWidthRef.current, behavior: 'smooth' });
        }
        return next;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered, displayList.length]);

  const handlePrev = () => {
    if (!displayList.length) return;
    const next = (activeIndex - 1 + displayList.length) % displayList.length;
    setActiveIndex(next);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: next * cardWidthRef.current, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (!displayList.length) return;
    const next = (activeIndex + 1) % displayList.length;
    setActiveIndex(next);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: next * cardWidthRef.current, behavior: 'smooth' });
    }
  };

  const handleSelect = (idx) => {
    setActiveIndex(idx);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: idx * cardWidthRef.current, behavior: 'smooth' });
    }
  };

  const handleScroll = (e) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const cardWidth = cardWidthRef.current || 315;
    const newIdx = Math.round(scrollLeft / cardWidth);
    if (newIdx !== activeIndex && newIdx >= 0 && newIdx < displayList.length) {
      setActiveIndex(newIdx);
    }
  };

  const headerTag = (outcomesHeader?.tag || 'TRANSFORMED LIVES').trim() || 'TRANSFORMED LIVES';
  const headerHeadline = (outcomesHeader?.headline || outcomesHeader?.title || 'Our Graduates Get Hired by Leading Tech Firms').trim() || 'Our Graduates Get Hired by Leading Tech Firms';
  const headerSub = (outcomesHeader?.sub || 'Hear directly from our learners who transitioned into high-paying IT roles.').trim() || 'Hear directly from our learners who transitioned into high-paying IT roles.';

  return (
    <LazyMotion features={domAnimation}>
      <section className="section-alt" style={{ padding: '36px 0', background: '#f8fafc' }}>
        <div className="container">
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span 
              style={{
                background: 'rgba(0, 6, 56, 0.06)',
                color: '#000638',
                fontSize: '0.72rem',
                fontWeight: 800,
                padding: '5px 16px',
                borderRadius: '50px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                display: 'inline-block',
                marginBottom: '12px',
                border: '1px solid rgba(0, 6, 56, 0.12)'
              }}
            >
              {headerTag}
            </span>

            <h2 style={{ color: '#000638', fontSize: 'clamp(1.6rem, 2.8vw, 2.3rem)', fontWeight: 900, marginBottom: '8px' }}>
              {headerHeadline}
            </h2>

            <p style={{ color: '#475569', fontSize: '0.94rem', maxWidth: '640px', margin: '0 auto' }}>
              {headerSub}
            </p>
          </div>

          {/* Controls & Track Wrapper */}
          <div style={{ position: 'relative' }}>
            {/* Standardized Centered < . . . > Controls */}
            <CarouselDotsNav
              totalItems={displayList.length}
              activeIndex={activeIndex}
              onPrev={handlePrev}
              onNext={handleNext}
              onSelectIndex={handleSelect}
              style={{ marginBottom: '24px', marginTop: 0 }}
            />

            {/* Horizontal Slider Track */}
            <div
              ref={sliderRef}
              className="no-scrollbar"
              onScroll={handleScroll}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                display: 'flex', gap: '20px', overflowX: 'auto',
                scrollSnapType: 'x mandatory',
                scrollBehavior: 'smooth', padding: '12px 10px 24px', width: '100%',
              }}
            >
              {transformedLives.map((item) => (
                <m.div
                  key={item.id}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    flex: '0 0 min(290px, 82vw)',
                    scrollSnapAlign: 'center',
                    background: '#ffffff',
                    borderRadius: '24px',
                    border: '2px solid #000638',
                    boxShadow: '0 12px 36px rgba(0, 6, 56, 0.08)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    cursor: 'pointer',
                  }}
                >
                  {/* Top Header Section with Subtle Geometric Grid & Avatar */}
                  <div 
                    style={{
                      padding: '28px 20px 20px',
                      textAlign: 'center',
                      background: '#faf9f6',
                      backgroundImage: 'radial-gradient(#cbd5e1 1.2px, transparent 1.2px)',
                      backgroundSize: '14px 14px',
                      color: '#000638',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      position: 'relative',
                      borderBottom: '1px solid #e2e8f0'
                    }}
                  >
                    {/* Circle Avatar with Soft Glowing Gold Ring */}
                    <div
                      style={{
                        width: '88px',
                        height: '88px',
                        borderRadius: '50%',
                        padding: '3px',
                        background: 'linear-gradient(135deg, #f2b733 0%, #ffd066 50%, #f2b733 100%)',
                        boxShadow: '0 6px 18px rgba(242, 183, 51, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '14px',
                        flexShrink: 0,
                      }}
                    >
                      <div
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: '50%',
                          overflow: 'hidden',
                          background: '#000648',
                          position: 'relative',
                          isolation: 'isolate',
                          WebkitMaskImage: '-webkit-radial-gradient(white, black)',
                          border: '2px solid #ffffff',
                        }}
                      >
                        <img
                          src={resolveImageSrc(item.image)}
                          alt={item.name}
                          loading="lazy"
                          decoding="async"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: item.fit || item.imageFit || 'cover',
                            objectPosition: item.position || item.imagePosition || 'center 20%',
                            transform: (item.zoom || item.imageZoom) && (item.zoom || item.imageZoom) !== 1
                              ? `scale(${item.zoom || item.imageZoom})`
                              : 'none',
                            transformOrigin: item.position || item.imagePosition || 'center 20%',
                            display: 'block',
                          }}
                          onError={(e) => {
                            e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300';
                          }}
                        />
                      </div>
                    </div>

                    {/* Student Name */}
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#000638', marginBottom: '6px', letterSpacing: '-0.01em' }}>
                      {item.name}
                    </h3>

                    {/* EZER Brand Crest Emblem in Center */}
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', opacity: 0.85, marginTop: '2px' }}>
                      <span style={{ fontSize: '0.74rem', fontWeight: 900, color: '#000638', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                        EZER ALUMNI
                      </span>
                    </div>
                  </div>

                  {/* Bottom Timeline Progression Flow Section */}
                  <div style={{ padding: '20px 18px 22px', background: '#ffffff', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                    
                    {/* Step 1: Before Role Card Box */}
                    <div style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '16px',
                      border: '1.5px solid #cbd5e1',
                      background: '#f8fafc',
                      fontSize: '0.84rem',
                      color: '#475569',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      boxSizing: 'border-box'
                    }}>
                      <div style={{ width: '14px', height: '14px', borderRadius: '50%', border: '2px solid #94a3b8', flexShrink: 0 }} />
                      <div style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                        <span style={{ fontSize: '0.76rem', color: '#64748b', display: 'block', fontWeight: 700 }}>Before EZER:</span>
                        <strong style={{ color: '#000638', fontWeight: 800 }}>{item.beforeRole}</strong>
                      </div>
                    </div>

                    {/* Vertical Dashed Line & Milestone Emblem Node */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '-4px 0' }}>
                      <div style={{ width: '2px', height: '12px', borderLeft: '2px dashed #000638' }} />
                      <div style={{
                        background: '#000638', color: '#f2b733',
                        fontSize: '0.66rem', fontWeight: 900, padding: '3px 12px',
                        borderRadius: '50px', border: '1px solid #f2b733',
                        boxShadow: '0 2px 8px rgba(0,6,56,0.2)',
                        textTransform: 'uppercase', letterSpacing: '0.04em'
                      }}>
                        After EZER Training
                      </div>
                      <div style={{ width: '2px', height: '10px', borderLeft: '2px dashed #000638' }} />
                      <div style={{ width: 0, height: 0, borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '6px solid #000638' }} />
                    </div>

                    {/* Step 2: After Role & Placed Company Box */}
                    <div 
                      style={{
                        width: '100%',
                        padding: '13px 14px',
                        borderRadius: '16px',
                        border: '2px solid #000638',
                        background: 'linear-gradient(135deg, rgba(242, 183, 51, 0.18) 0%, rgba(0, 6, 72, 0.05) 100%)',
                        color: '#000638',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        boxSizing: 'border-box',
                        boxShadow: '0 4px 14px rgba(0, 6, 56, 0.08)'
                      }}
                    >
                      <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#000638', border: '3px solid #f2b733', flexShrink: 0, boxShadow: '0 0 8px rgba(242,183,51,0.6)' }} />
                      <div>
                        <span style={{ fontSize: '0.74rem', color: '#000638', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block' }}>
                          Placed @ {item.company}
                        </span>
                        <strong style={{ color: '#000638', fontSize: '0.94rem', fontWeight: 900 }}>
                          {item.afterRole}
                        </strong>
                      </div>
                    </div>

                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
