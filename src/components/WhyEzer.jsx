import React, { useRef } from 'react';
import { 
  HiOutlineBriefcase, 
  HiChevronLeft,
  HiChevronRight,
  HiSparkles,
  HiCheckCircle
} from 'react-icons/hi';
import { useSiteData } from '../Admin_Control/context/SiteContext';
import { resolveImageSrc } from '../utils/imageUtils';

export default function WhyEzer() {
  const { supportCards } = useSiteData();
  const sliderRef = useRef(null);

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 340;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="section" style={{ background: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '64px 0' }}>
      <div className="container">
        
        {/* Header with Title & Navigation Arrows */}
        <div style={{
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          marginBottom: '36px', flexWrap: 'wrap', gap: '16px'
        }}>
          <div>
            <span className="section-tag">
              <HiSparkles size={14} style={{ color: '#f2b733' }} />
              The EZER Advantage
            </span>
            <h2 style={{ color: '#000648', fontSize: 'clamp(1.35rem, 2.2vw, 1.7rem)', marginTop: '4px' }}>
              Why EZER Learning Solution
            </h2>
            <p style={{ color: '#475569', fontSize: '0.86rem', maxWidth: '520px', marginTop: '4px', lineHeight: 1.6 }}>
              We bridge the gap between classroom theory and real corporate tech jobs through end-to-end outcome support.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto' }}>
            <button
              type="button"
              onClick={() => handleScroll('left')}
              aria-label="Scroll left"
              style={{
                width: '40px', height: '40px', borderRadius: '50%',
                border: '1.5px solid #000648', background: '#ffffff',
                color: '#000648', display: 'flex', alignItems: 'center',
                justifyContent: 'center', cursor: 'pointer', transition: 'background-color 0.2s ease, color 0.2s ease',
                boxShadow: '0 2px 8px rgba(0,6,72,0.08)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#000648';
                e.currentTarget.style.color = '#f2b733';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.color = '#000648';
              }}
            >
              <HiChevronLeft size={22} />
            </button>

            <button
              type="button"
              onClick={() => handleScroll('right')}
              aria-label="Scroll right"
              style={{
                width: '40px', height: '40px', borderRadius: '50%',
                border: '1.5px solid #000648', background: '#000648',
                color: '#f2b733', display: 'flex', alignItems: 'center',
                justifyContent: 'center', cursor: 'pointer', transition: 'background-color 0.2s ease, color 0.2s ease',
                boxShadow: '0 2px 8px rgba(0,6,72,0.15)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#f2b733';
                e.currentTarget.style.color = '#000648';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#000648';
                e.currentTarget.style.color = '#f2b733';
              }}
            >
              <HiChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Single-Line Horizontal Scroll Track */}
        <div
          ref={sliderRef}
          className="no-scrollbar"
          style={{
            display: 'flex',
            gap: '24px',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            padding: '12px 8px 24px 8px',
            width: '100%',
            boxSizing: 'border-box',
            scrollBehavior: 'smooth',
          }}
        >
          {supportCards.map((r) => (
            <div 
              key={r.id || r.title} 
              style={{
                flex: '0 0 clamp(290px, 30vw, 340px)',
                scrollSnapAlign: 'start',
                minWidth: '290px',
                background: '#ffffff', borderRadius: '16px', overflow: 'hidden',
                border: '1.5px solid #e2e8f0', transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                boxShadow: '0 4px 16px rgba(0,6,72,0.06)',
                display: 'flex', flexDirection: 'column',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 14px 36px rgba(0, 6, 72, 0.16)';
                e.currentTarget.style.borderColor = '#000648';
                e.currentTarget.style.transform = 'translateY(-6px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 6, 72, 0.06)';
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Image Banner Header */}
              <div style={{ height: '175px', overflow: 'hidden', position: 'relative', background: '#000648' }}>
                <img 
                  src={resolveImageSrc(r.image)} 
                  alt={r.title} 
                  style={{ width: '100%', height: '100%', objectFit: r.fit || r.imageFit || 'cover', opacity: 1, objectPosition: r.position || r.imagePosition || 'center center' }} 
                />
                
                {/* Floating Icon Box */}
                <div style={{
                  position: 'absolute', bottom: '12px', left: '16px',
                  width: '44px', height: '44px', borderRadius: '12px',
                  background: '#000648', border: '2px solid #f2b733', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  color: '#f2b733', boxShadow: '0 8px 18px rgba(0, 6, 72, 0.45)',
                  zIndex: 3
                }}>
                  <HiOutlineBriefcase size={22} />
                </div>

                {/* Subtitle Badge */}
                {r.subtitle && (
                  <div style={{
                    position: 'absolute', top: '10px', right: '12px',
                    background: '#000648', color: '#f2b733', fontSize: '0.68rem', fontWeight: 800,
                    padding: '4px 12px', borderRadius: '50px', border: '1.5px solid #f2b733',
                    boxShadow: '0 4px 12px rgba(0, 6, 72, 0.3)'
                  }}>
                    {r.subtitle}
                  </div>
                )}
              </div>

              {/* Detailed Content Body */}
              <div style={{ padding: '22px 20px 20px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between', background: '#ffffff' }}>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#000648', marginBottom: '8px', lineHeight: 1.3 }}>
                    {r.title}
                  </h3>
                  <p style={{ fontSize: '0.84rem', color: '#475569', lineHeight: 1.6, marginBottom: '18px' }}>
                    {r.desc}
                  </p>
                </div>

                {/* Inner Rectangle Box */}
                {r.bullets && r.bullets.length > 0 && (
                  <div style={{ 
                    width: '100%',
                    minHeight: '110px',
                    height: 'auto',
                    boxSizing: 'border-box',
                    background: '#f8fafc',
                    padding: '14px 16px',
                    borderRadius: '12px', 
                    border: '1.5px solid #e2e8f0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: '10px',
                    boxShadow: '0 2px 8px rgba(0, 6, 72, 0.03)'
                  }}>
                    {r.bullets.map((bullet) => (
                      <div key={bullet} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.78rem', fontWeight: 800, color: '#000648', lineHeight: 1.35 }}>
                        <HiCheckCircle size={17} style={{ color: '#f2b733', flexShrink: 0, marginTop: '1px' }} />
                        <span style={{ wordBreak: 'break-word' }}>{bullet}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
