import React, { useRef, useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { useSiteData } from '../Admin_Control/context/SiteContext';
import { resolveImageSrc } from '../utils/imageUtils';

export default function TransformedLives() {
  const { transformedLives, outcomesHeader } = useSiteData();
  const sliderRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Auto Scroll Loop with Pause on Mouse Hover
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 320;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const headerData = outcomesHeader || {
    tag: 'CAREER PLACEMENT OUTCOMES',
    headline: 'Our Graduates Get Hired by Leading Tech Firms',
    sub: 'Join a community of engineers building impactful, high-growth software careers.'
  };

  return (
    <LazyMotion features={domAnimation}>
      <section className="section-alt" style={{ padding: '72px 0', background: '#f8fafc' }}>
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
              {headerData.tag}
            </span>

            <h2 style={{ color: '#000638', fontSize: 'clamp(1.6rem, 2.8vw, 2.3rem)', fontWeight: 900, marginBottom: '8px' }}>
              {headerData.headline}
            </h2>

            <p style={{ color: '#475569', fontSize: '0.94rem', maxWidth: '640px', margin: '0 auto' }}>
              {headerData.sub}
            </p>
          </div>

          {/* Controls & Track Wrapper */}
          <div style={{ position: 'relative' }}>
            {/* Scroll Buttons Header Bar */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginBottom: '16px' }}>
              <m.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                type="button"
                onClick={() => handleScroll('left')}
                aria-label="Previous story"
                style={{
                  width: '38px', height: '38px', borderRadius: '50%',
                  border: '1.5px solid #000638', background: '#ffffff',
                  color: '#000638', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', cursor: 'pointer',
                  boxShadow: '0 2px 6px rgba(0, 6, 56, 0.06)',
                }}
              >
                <HiChevronLeft size={20} />
              </m.button>

              <m.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                type="button"
                onClick={() => handleScroll('right')}
                aria-label="Next story"
                style={{
                  width: '38px', height: '38px', borderRadius: '50%',
                  border: '1.5px solid #000638', background: '#000638',
                  color: '#f2b733', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', cursor: 'pointer',
                  boxShadow: '0 4px 10px rgba(0, 6, 56, 0.18)',
                }}
              >
                <HiChevronRight size={20} />
              </m.button>
            </div>

            {/* Horizontal Slider Track */}
            <div
              ref={sliderRef}
              className="no-scrollbar"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                display: 'flex', gap: '20px', overflowX: 'auto',
                scrollBehavior: 'smooth', padding: '12px 4px 24px', width: '100%',
              }}
            >
              {transformedLives.map((item) => (
                <m.div
                  key={item.id}
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    flex: '0 0 290px',
                    background: '#ffffff',
                    borderRadius: '24px',
                    border: '2px solid #000638',
                    boxShadow: '0 12px 36px rgba(0, 6, 56, 0.12)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    cursor: 'pointer',
                  }}
                >
                  {/* Top Header Banner Section */}
                  <div 
                    style={{
                      padding: '28px 20px 22px',
                      textAlign: 'center',
                      background: 'linear-gradient(135deg, #000638 0%, #00127a 100%)',
                      color: '#ffffff',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    {/* Subtle Radial Glow */}
                    <div style={{
                      position: 'absolute', top: '-40px', right: '-40px',
                      width: '120px', height: '120px', borderRadius: '50%',
                      background: 'radial-gradient(circle, rgba(242,183,51,0.2) 0%, transparent 70%)',
                      pointerEvents: 'none'
                    }} />

                    {/* Verified Badge */}
                    <span style={{
                      position: 'absolute', top: '12px', right: '12px',
                      background: 'rgba(242, 183, 51, 0.16)', color: '#f2b733',
                      fontSize: '0.62rem', fontWeight: 900, padding: '3px 10px',
                      borderRadius: '50px', border: '1px solid rgba(242, 183, 51, 0.4)',
                      letterSpacing: '0.06em', textTransform: 'uppercase'
                    }}>
                      ✓ Verified
                    </span>

                    {/* Circle Avatar with Glowing Animated Ring */}
                    <div style={{ position: 'relative', display: 'inline-block', marginBottom: '14px' }}>
                      <div 
                        style={{
                          padding: '3px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #f2b733 0%, #ffd066 50%, #f2b733 100%)',
                          boxShadow: '0 8px 22px rgba(242, 183, 51, 0.45)',
                          display: 'inline-block'
                        }}
                      >
                        <img
                          src={resolveImageSrc(item.image)}
                          alt={item.name}
                          style={{
                            width: '82px', height: '82px', borderRadius: '50%',
                            objectFit: 'cover',
                            objectPosition: item.imagePosition || 'center center',
                            display: 'block',
                            border: '2px solid #000638'
                          }}
                        />
                      </div>
                    </div>

                    {/* Student Name */}
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#ffffff', marginBottom: '6px', letterSpacing: '-0.01em' }}>
                      {item.name}
                    </h3>

                    {/* Placed @ Company Pill */}
                    <div style={{
                      fontSize: '0.86rem', fontWeight: 900, color: '#f2b733',
                      background: 'rgba(242, 183, 51, 0.14)', padding: '5px 16px',
                      borderRadius: '50px', border: '1.5px solid rgba(242, 183, 51, 0.4)',
                      boxShadow: '0 4px 12px rgba(0,6,56,0.2)'
                    }}>
                      Placed @ {item.company}
                    </div>
                  </div>

                  {/* Bottom Outcome Progression Section */}
                  <div style={{ padding: '22px 20px 24px', background: '#ffffff', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', gap: '10px' }}>
                    
                    {/* Before Role Pill */}
                    <div style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '14px',
                      border: '1.5px solid #e2e8f0',
                      background: '#f8fafc',
                      fontSize: '0.86rem',
                      color: '#475569',
                      textAlign: 'center',
                      boxSizing: 'border-box'
                    }}>
                      Before: <strong style={{ color: '#000638', fontWeight: 800 }}>{item.beforeRole}</strong>
                    </div>

                    {/* Animated Step Connector */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '-2px 0' }}>
                      <div style={{ width: '2px', height: '12px', background: 'linear-gradient(to bottom, #000638, #f2b733)' }} />
                      <div style={{ width: 0, height: 0, borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '7px solid #f2b733' }} />
                    </div>

                    {/* After Role Badge Box */}
                    <div 
                      style={{
                        width: '100%',
                        padding: '13px 14px',
                        borderRadius: '14px',
                        border: '2px solid #000638',
                        background: 'linear-gradient(135deg, #000638 0%, #00127a 100%)',
                        color: '#ffffff',
                        fontSize: '0.92rem',
                        fontWeight: 900,
                        textAlign: 'center',
                        boxSizing: 'border-box',
                        boxShadow: '0 6px 16px rgba(0, 6, 56, 0.18)'
                      }}
                    >
                      After: <span style={{ color: '#f2b733', fontWeight: 900 }}>{item.afterRole}</span>
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
