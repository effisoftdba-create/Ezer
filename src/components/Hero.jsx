import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiChevronLeft, HiChevronRight, HiSparkles } from 'react-icons/hi';
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion';
import { useSiteData } from '../Admin_Control/context/SiteContext';
import HeroRightFrame from './hero/HeroRightFrame';
import HeroTrustGrid from './hero/HeroTrustGrid';

export default function Hero({ onOpenDemoModal }) {
  const { heroSlides } = useSiteData();
  const [active, setActive] = useState(0);

  const slides = heroSlides || [];

  useEffect(() => {
    if (slides.length === 0) return;
    const t = setInterval(() => setActive((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [slides.length]);

  const safeActive = active < slides.length ? active : 0;
  const currentSlide = slides[safeActive] || {
    badge: 'Outcome-Driven IT Training',
    headline: 'Learn Live. Build Real Skills. Get Placed.',
    sub: 'Live online classes led by working corporate professionals, hands-on labs on industry tools, and placement support that continues after graduation.',
    url: 'images/hero/hero_section_1.jpg'
  };

  const handleNext = () => setActive((prev) => (prev + 1) % slides.length);
  const handlePrev = () => setActive((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <LazyMotion features={domAnimation}>
      <section
        style={{
          position: 'relative',
          width: '100%',
          background: '#faf9f6',
          padding: '0',
          overflow: 'hidden',
          borderBottom: '2px solid #f2b733',
        }}
      >
        <div style={{ width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
          <div
            className="hero-split-container"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              minHeight: '540px',
              alignItems: 'stretch',
            }}
          >
            {/* LEFT SIDE: TEXT DETAILS */}
            <div
              className="hero-left-text-column"
              style={{
                padding: 'clamp(32px, 5vw, 64px) clamp(24px, 4vw, 56px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                background: '#faf9f6',
                position: 'relative',
              }}
            >
              <AnimatePresence mode="wait">
                <m.div
                  key={currentSlide.id || safeActive}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '18px',
                      background: '#000648',
                      color: '#f2b733',
                      padding: '6px 16px',
                      borderRadius: '50px',
                      fontSize: '0.74rem',
                      fontWeight: 900,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      border: '1.5px solid #f2b733',
                      boxShadow: '0 4px 14px rgba(0,6,72,0.15)'
                    }}
                  >
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f2b733', display: 'inline-block' }} />
                    <span>{currentSlide.badge || 'OUTCOME-DRIVEN IT TRAINING'}</span>
                  </div>

                  <h1
                    style={{
                      fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
                      fontWeight: 900,
                      color: '#000648',
                      lineHeight: 1.12,
                      marginBottom: '18px',
                      fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif",
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {currentSlide.headline ? (
                      <>
                        <span style={{ color: '#000648' }}>
                          {currentSlide.headline.split('. ')[0] || currentSlide.headline}
                        </span>
                        {currentSlide.headline.includes('. ') && (
                          <span
                            style={{
                              display: 'block',
                              background: 'linear-gradient(135deg, #f2b733 0%, #d9a02a 100%)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              fontWeight: 900
                            }}
                          >
                            {currentSlide.headline.split('. ').slice(1).join('. ')}
                          </span>
                        )}
                      </>
                    ) : (
                      'Learn Live. Build Real Skills.'
                    )}
                  </h1>

                  <div
                    style={{
                      width: '72px',
                      height: '4px',
                      background: 'linear-gradient(90deg, #000648 0%, #f2b733 100%)',
                      marginBottom: '20px',
                      borderRadius: '4px',
                    }}
                  />

                  <p
                    style={{
                      fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
                      color: '#334155',
                      lineHeight: 1.65,
                      marginBottom: '32px',
                      maxWidth: '560px',
                      fontWeight: 500,
                    }}
                  >
                    {currentSlide.sub}
                  </p>
                </m.div>
              </AnimatePresence>

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', marginBottom: '40px' }}>
                <Link
                  to="/courses"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    padding: '14px 28px',
                    background: '#000638',
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    boxShadow: '0 4px 14px rgba(0,6,56,0.2)',
                    transition: 'background-color 0.25s ease, color 0.25s ease, transform 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#f2b733';
                    e.currentTarget.style.color = '#000638';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#000638';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                >
                  <span>Explore Courses</span>
                  <HiArrowRight size={16} />
                </Link>

                <button
                  type="button"
                  onClick={onOpenDemoModal}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 24px',
                    borderRadius: '50px',
                    background: 'linear-gradient(135deg, #000648 0%, #00127a 100%)',
                    color: '#f2b733',
                    fontWeight: 800,
                    fontSize: '0.86rem',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    border: '1.5px solid #f2b733',
                    boxShadow: '0 4px 18px rgba(0, 6, 72, 0.25)',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(242, 183, 51, 0.4)';
                    e.currentTarget.style.background = 'linear-gradient(135deg, #f2b733 0%, #ffd066 100%)';
                    e.currentTarget.style.color = '#000648';
                    e.currentTarget.style.borderColor = '#000648';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 18px rgba(0, 6, 72, 0.25)';
                    e.currentTarget.style.background = 'linear-gradient(135deg, #000648 0%, #00127a 100%)';
                    e.currentTarget.style.color = '#f2b733';
                    e.currentTarget.style.borderColor = '#f2b733';
                  }}
                >
                  <HiSparkles size={16} />
                  <span>Book Free Demo</span>
                </button>
              </div>

              {/* Slide Pill Dots Nav */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: 'auto' }}>
                <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                  <button
                    type="button"
                    onClick={handlePrev}
                    style={{ background: 'none', border: 'none', color: '#000638', cursor: 'pointer', padding: '4px', display: 'flex', alignItems: 'center' }}
                    aria-label="Previous slide"
                  >
                    <HiChevronLeft size={20} />
                  </button>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(0,6,56,0.06)', padding: '4px 10px', borderRadius: '50px' }}>
                    {slides.map((s, i) => (
                      <button
                        key={s.id || s.badge || s.headline}
                        type="button"
                        onClick={() => setActive(i)}
                        aria-label={`Slide ${i + 1}`}
                        style={{
                          padding: 0,
                          border: 'none',
                          width: safeActive === i ? '20px' : '7px',
                          height: '7px',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          background: safeActive === i ? '#000638' : '#cbd5e1',
                          borderTop: safeActive === i ? '2px solid #f2b733' : 'none',
                          transition: 'width 0.3s ease, background-color 0.3s ease',
                        }}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={handleNext}
                    style={{ background: 'none', border: 'none', color: '#000638', cursor: 'pointer', padding: '4px', display: 'flex', alignItems: 'center' }}
                    aria-label="Next slide"
                  >
                    <HiChevronRight size={20} />
                  </button>
                </div>
              </div>

              {/* Trust Signals Footer Grid */}
              <HeroTrustGrid />
            </div>

            {/* RIGHT SIDE: PHOTO FRAME */}
            <div className="hero-right-photo-column">
              <HeroRightFrame currentSlide={currentSlide} safeActive={safeActive} />
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .hero-split-container {
              grid-template-columns: 1fr !important;
              display: flex !important;
              flex-direction: column !important;
            }
            .hero-left-text-column {
              order: 1 !important;
            }
            .hero-right-photo-column {
              order: 2 !important;
              min-height: 360px !important;
              height: 360px !important;
            }
            .hero-badge-pill {
              top: 10px !important;
              right: 10px !important;
              padding: 3px 10px !important;
              font-size: 0.62rem !important;
              background: rgba(0, 6, 56, 0.85) !important;
              backdrop-filter: blur(4px) !important;
              box-shadow: 0 2px 8px rgba(0,0,0,0.4) !important;
            }
          }
        `}</style>
      </section>
    </LazyMotion>
  );
}
