import React, { useRef } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { useSiteData } from '../../Admin_Control/context/SiteContext';
import { resolveImageSrc } from '../../utils/imageUtils';

export default function HiredCompaniesGrid({ transitions: propTransitions }) {
  const { transformedLives, outcomesHeader } = useSiteData();
  const sliderRef = useRef(null);

  const displayList = (transformedLives && transformedLives.length > 0) ? transformedLives : (propTransitions || []);
  const headerData = outcomesHeader || {
    tag: 'CAREER PLACEMENT OUTCOMES',
    headline: 'Our Graduates Get Hired by Leading Tech Firms',
    sub: 'Join a community of engineers building impactful, high-growth software careers.'
  };

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 320;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  if (!displayList || displayList.length === 0) return null;

  return (
    <section className="section" style={{ background: '#ffffff', padding: '72px 0', borderBottom: '1px solid #e2e8f0' }}>
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

        {/* Controls & Single-Line Horizontal Slider Track */}
        <div style={{ position: 'relative' }}>
          {/* Left/Right Navigation Scroll Buttons */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginBottom: '16px' }}>
            <button
              type="button"
              onClick={() => handleScroll('left')}
              aria-label="Scroll outcomes left"
              style={{
                width: '38px', height: '38px', borderRadius: '50%',
                border: '1.5px solid #000638', background: '#ffffff',
                color: '#000638', display: 'flex', alignItems: 'center',
                justifyContent: 'center', cursor: 'pointer',
                boxShadow: '0 2px 6px rgba(0, 6, 56, 0.06)',
              }}
            >
              <HiChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={() => handleScroll('right')}
              aria-label="Scroll outcomes right"
              style={{
                width: '38px', height: '38px', borderRadius: '50%',
                border: '1.5px solid #000638', background: '#000638',
                color: '#f2b733', display: 'flex', alignItems: 'center',
                justifyContent: 'center', cursor: 'pointer',
                boxShadow: '0 4px 10px rgba(0, 6, 56, 0.18)',
              }}
            >
              <HiChevronRight size={20} />
            </button>
          </div>

          {/* Horizontal Slider Track (No wrapping onto 2nd row) */}
          <div
            ref={sliderRef}
            className="no-scrollbar"
            style={{
              display: 'flex',
              gap: '20px',
              overflowX: 'auto',
              scrollBehavior: 'smooth',
              padding: '12px 4px 24px',
              width: '100%',
            }}
          >
            {displayList.map((item) => (
              <div
                key={item.id || item.name}
                style={{
                  flex: '0 0 280px',
                  background: '#ffffff',
                  border: '2px solid #000638',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 12px 30px rgba(0, 6, 56, 0.12)',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
              >
                {/* Dark Navy Top Header matching User Reference Image 2 & 3 */}
                <div style={{ background: '#000638', padding: '24px 20px 20px', color: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ position: 'relative', marginBottom: '12px' }}>
                    <img
                      src={resolveImageSrc(item.image)}
                      alt={item.name}
                      style={{
                        width: '82px',
                        height: '82px',
                        borderRadius: '50%',
                        objectFit: item.fit || item.imageFit || 'cover',
                        objectPosition: item.position || item.imagePosition || 'center center',
                        border: '3.5px solid #f2b733',
                        boxShadow: '0 6px 18px rgba(242, 183, 51, 0.45)',
                      }}
                    />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '4px' }}>
                    {item.name}
                  </h3>
                  <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#f2b733', background: 'rgba(242, 183, 51, 0.12)', padding: '4px 14px', borderRadius: '50px', border: '1px solid rgba(242, 183, 51, 0.3)' }}>
                    Placed @ {item.company}
                  </div>
                </div>

                {/* White Bottom Body Section with Step Connector matching User Reference Image 3 */}
                <div style={{ padding: '20px 18px 22px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px', background: '#ffffff' }}>
                  {/* Before Role Pill */}
                  <div style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '12px',
                    border: '1.5px solid #e2e8f0',
                    background: '#f8fafc',
                    fontSize: '0.85rem',
                    color: '#475569',
                    textAlign: 'center',
                    boxSizing: 'border-box'
                  }}>
                    Before: <strong style={{ color: '#000638', fontWeight: 800 }}>{item.beforeRole}</strong>
                  </div>

                  {/* Vertical Connector Line */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '-4px 0' }}>
                    <div style={{ width: '2px', height: '14px', borderLeft: '2px dashed #000638' }} />
                    <div style={{ width: 0, height: 0, borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '6px solid #000638' }} />
                  </div>

                  {/* After Role Pill */}
                  <div style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '12px',
                    border: '2px solid #000638',
                    background: '#000638',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    fontWeight: 900,
                    textAlign: 'center',
                    boxSizing: 'border-box',
                    boxShadow: '0 4px 12px rgba(0, 6, 56, 0.15)'
                  }}>
                    After: <span style={{ color: '#f2b733' }}>{item.afterRole}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
