import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiChevronLeft, HiChevronRight, HiSparkles } from 'react-icons/hi';
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion';
import { useSiteData } from '../Admin_Control/context/SiteContext';
import HeroRightFrame from './hero/HeroRightFrame';
import HeroTrustGrid from './hero/HeroTrustGrid';
import HeroSlideNav from './hero/HeroSlideNav';

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
    badge: 'Empowering Career Switchers',
    headline: 'Leading EdTech Platform for Learning in Native Languages & Real IT Skills.',
    sub: "EZER Learning Solutions is India's top tech-driven EdTech platform delivering live online, practical, job-oriented IT courses. Taught by corporate-experienced IT professionals, EZER offers personalized live online training, hands-on labs, 12-month placement support, and up to 3 years of community access.",
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
                  className="hero-animated-text-container"
                  style={{ minHeight: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}
                >
                  {currentSlide.badge && (
                    <div style={{ marginBottom: '12px' }}>
                      <span
                        className="hero-badge-pill-inline"
                        style={{
                          background: 'rgba(0, 6, 72, 0.08)',
                          color: '#000648',
                          fontSize: '0.75rem',
                          fontWeight: 800,
                          padding: '5px 14px',
                          borderRadius: '50px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          border: '1px solid rgba(0, 6, 72, 0.15)'
                        }}
                      >
                        <HiSparkles color="#f2b733" size={14} />
                        {currentSlide.badge}
                      </span>
                    </div>
                  )}

                  <h1
                    style={{
                      fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
                      fontWeight: 900,
                      color: '#000648',
                      lineHeight: 1.12,
                      marginBottom: '14px',
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
                      marginBottom: '14px',
                      borderRadius: '4px',
                    }}
                  />

                  <p
                    style={{
                      fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
                      color: '#334155',
                      lineHeight: 1.65,
                      marginBottom: '16px',
                      maxWidth: '560px',
                      fontWeight: 500,
                    }}
                  >
                    {currentSlide.sub}
                  </p>
                </m.div>
              </AnimatePresence>

              {/* Dual Matching Action Buttons */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '24px' }} className="hero-action-buttons">
                <Link
                  to="/courses"
                  className="hero-btn-explore"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    width: '220px',
                    height: '52px',
                    minHeight: '52px',
                    maxHeight: '52px',
                    boxSizing: 'border-box',
                    padding: '0 24px',
                    background: '#000638',
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    border: '1.5px solid #000638',
                    borderRadius: '10px',
                    boxShadow: '0 4px 14px rgba(0,6,56,0.25)',
                    transition: 'background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease, transform 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#f2b733';
                    e.currentTarget.style.color = '#000638';
                    e.currentTarget.style.borderColor = '#f2b733';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#000638';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.borderColor = '#000638';
                  }}
                >
                  <span>Explore Courses</span>
                  <HiArrowRight size={16} />
                </Link>

                <button
                  type="button"
                  onClick={onOpenDemoModal}
                  className="hero-btn-demo"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    width: '220px',
                    height: '52px',
                    minHeight: '52px',
                    maxHeight: '52px',
                    boxSizing: 'border-box',
                    padding: '0 24px',
                    background: '#f2b733',
                    color: '#000648',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    border: '1.5px solid #f2b733',
                    borderRadius: '10px',
                    boxShadow: '0 4px 14px rgba(242, 183, 51, 0.35)',
                    transition: 'background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease, transform 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#000648';
                    e.currentTarget.style.color = '#f2b733';
                    e.currentTarget.style.borderColor = '#000648';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#f2b733';
                    e.currentTarget.style.color = '#000648';
                    e.currentTarget.style.borderColor = '#f2b733';
                  }}
                >
                  <span>Book Free Demo</span>
                  <HiArrowRight size={16} />
                </button>
              </div>

              {/* Slide Pill Dots Nav */}
              <HeroSlideNav
                slides={slides}
                safeActive={safeActive}
                handlePrev={handlePrev}
                handleNext={handleNext}
                setActive={setActive}
              />

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
            .hero-animated-text-container {
              min-height: 240px !important;
            }
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
              width: 100% !important;
              aspect-ratio: 1 / 1 !important;
              min-height: 300px !important;
              max-height: 480px !important;
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
