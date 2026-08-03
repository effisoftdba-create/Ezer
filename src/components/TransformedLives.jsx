import React, { useRef } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { useSiteData } from '../Admin_Control/context/SiteContext';

export default function TransformedLives() {
  const { transformedLives } = useSiteData();
  const sliderRef = useRef(null);

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 320;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <section className="section-alt" style={{ padding: '72px 0', background: '#f8fafc' }}>
        <div className="container">
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span 
              style={{
                background: 'rgba(0, 6, 72, 0.06)',
                color: '#000648',
                fontSize: '0.72rem',
                fontWeight: 800,
                padding: '5px 16px',
                borderRadius: '50px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                display: 'inline-block',
                marginBottom: '12px'
              }}
            >
              CAREER PLACEMENT OUTCOMES
            </span>

            <h2 style={{ color: '#000648', fontSize: 'clamp(1.6rem, 2.8vw, 2.3rem)', fontWeight: 900, marginBottom: '8px' }}>
              Our Graduates Get Hired by Leading Tech Firms
            </h2>

            <p style={{ color: '#475569', fontSize: '0.94rem', maxWidth: '640px', margin: '0 auto' }}>
              Join a community of engineers building impactful, high-growth software careers.
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
                  border: '1.5px solid #cbd5e1', background: '#ffffff',
                  color: '#000648', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', cursor: 'pointer',
                  boxShadow: '0 2px 6px rgba(0, 6, 72, 0.06)',
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
                  border: '1.5px solid #000648', background: '#000648',
                  color: '#f2b733', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', cursor: 'pointer',
                  boxShadow: '0 4px 10px rgba(0, 6, 72, 0.18)',
                }}
              >
                <HiChevronRight size={20} />
              </m.button>
            </div>

            {/* Horizontal Slider Track */}
            <div
              ref={sliderRef}
              className="no-scrollbar"
              style={{
                display: 'flex', gap: '20px', overflowX: 'auto',
                scrollBehavior: 'smooth', padding: '12px 4px 24px', width: '100%',
              }}
            >
              {transformedLives.map((item) => (
                <m.div
                  key={item.id}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  style={{
                    flex: '0 0 280px',
                    background: '#ffffff',
                    borderRadius: '16px',
                    border: '1.5px solid #000648',
                    boxShadow: '0 8px 24px rgba(0, 6, 72, 0.12)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* Dark Navy Top Header Section */}
                  <div 
                    style={{
                      padding: '24px 20px 20px',
                      textAlign: 'center',
                      backgroundColor: '#000648',
                      color: '#ffffff',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center'
                    }}
                  >
                    {/* Circle Avatar with Gold Border */}
                    <div style={{ position: 'relative', display: 'inline-block', marginBottom: '12px' }}>
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: '80px', height: '80px', borderRadius: '50%',
                          objectFit: 'cover', border: '3px solid #f2b733',
                          boxShadow: '0 4px 14px rgba(242, 183, 51, 0.4)'
                        }}
                      />
                    </div>

                    {/* Student Name */}
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', marginBottom: '4px' }}>
                      {item.name}
                    </h3>

                    {/* Placed @ Company */}
                    <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#60a5fa' }}>
                      Placed @ {item.company}
                    </div>
                  </div>

                  {/* White Bottom Body Section */}
                  <div style={{ padding: '20px 18px 22px', background: '#ffffff', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', gap: '14px' }}>
                    
                    {/* Before Role Line */}
                    <div style={{ fontSize: '0.88rem', color: '#64748b' }}>
                      Before: <strong style={{ color: '#000648', fontWeight: 800 }}>{item.beforeRole}</strong>
                    </div>

                    {/* After Role Badge Box */}
                    <div 
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '12px',
                        border: '1.5px solid #000648',
                        background: 'rgba(0, 6, 72, 0.04)',
                        fontSize: '0.9rem',
                        fontWeight: 900,
                        color: '#000648',
                        textAlign: 'center',
                        boxSizing: 'border-box'
                      }}
                    >
                      After: {item.afterRole}
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
