import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiChevronLeft, HiChevronRight, HiSparkles } from 'react-icons/hi';
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion';
import { useSiteData } from '../context/SiteContext';
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
        className="hero-main-section"
        style={{
          position: 'relative',
          width: '100%',
          contain: 'layout style',
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
              alignItems: 'stretch',
            }}
          >
            {/* LEFT SIDE: TEXT DETAILS */}
            <div
              className="hero-left-text-column"
              style={{
                padding: 'clamp(24px, 3.5vw, 44px) clamp(20px, 3.5vw, 48px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                background: '#faf9f6',
                position: 'relative',
              }}
            >
              <div className="hero-text-content-wrapper" style={{ width: '100%', maxWidth: '580px' }}>
                <div
                  className="hero-text-fixed-slot"
                  style={{
                    position: 'relative',
                    minHeight: '195px',
                    height: '195px',
                    marginBottom: '16px',
                  }}
                >
                  <AnimatePresence mode="wait">
                    <m.div
                      key={currentSlide.id || safeActive}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 12 }}
                      transition={{ duration: 0.25 }}
                      className="hero-animated-text-container"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                      }}
                    >
                      <h1
                        className="hero-headline-title"
                        style={{
                          fontSize: 'clamp(1.65rem, 2.9vw, 2.45rem)',
                          fontWeight: 900,
                          color: '#000648',
                          lineHeight: 1.15,
                          marginBottom: '8px',
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
                        className="hero-divider-bar"
                        style={{
                          width: '56px',
                          height: '4px',
                          background: 'linear-gradient(90deg, #000648 0%, #f2b733 100%)',
                          marginBottom: '8px',
                          borderRadius: '4px',
                          flexShrink: 0
                        }}
                      />

                      <p
                        className="hero-sub-description"
                        style={{
                          fontSize: 'clamp(0.86rem, 1.05vw, 0.95rem)',
                          color: '#334155',
                          lineHeight: 1.5,
                          marginBottom: '0',
                          maxWidth: '560px',
                          fontWeight: 500,
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {currentSlide.sub}
                      </p>
                    </m.div>
                  </AnimatePresence>
                </div>

                {/* Dual Matching Action Buttons */}
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '18px' }} className="hero-action-buttons">
                  <Link
                    to="/courses"
                    className="hero-btn-explore"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      width: '210px',
                      height: '50px',
                      minHeight: '50px',
                      maxHeight: '50px',
                      boxSizing: 'border-box',
                      padding: '0 20px',
                      background: '#000638',
                      color: '#ffffff',
                      fontWeight: 800,
                      fontSize: '0.86rem',
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
                      width: '210px',
                      height: '50px',
                      minHeight: '50px',
                      maxHeight: '50px',
                      boxSizing: 'border-box',
                      padding: '0 20px',
                      background: '#f2b733',
                      color: '#000648',
                      fontWeight: 800,
                      fontSize: '0.86rem',
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
            </div>

            {/* RIGHT SIDE: PHOTO FRAME */}
            <div className="hero-right-photo-column">
              <HeroRightFrame currentSlide={currentSlide} safeActive={safeActive} />
            </div>
          </div>
        </div>

        <style>{`
          .hero-main-section {
            min-height: 480px;
          }
          .hero-split-container {
            min-height: 480px;
          }
          @media (max-width: 900px) {
            .hero-main-section {
              min-height: auto !important;
            }
            .hero-split-container {
              grid-template-columns: 1fr !important;
              display: flex !important;
              flex-direction: column !important;
              min-height: auto !important;
            }
            .hero-left-text-column {
              order: 1 !important;
              padding: 20px 16px 14px !important;
              min-height: auto !important;
              justify-content: flex-start !important;
            }
            .hero-text-content-wrapper {
              max-width: 100% !important;
            }
            .hero-text-fixed-slot {
              height: auto !important;
              min-height: auto !important;
              margin-bottom: 14px !important;
              position: relative !important;
            }
            .hero-animated-text-container {
              position: relative !important;
              height: auto !important;
              min-height: auto !important;
            }
            .hero-headline-title {
              font-size: clamp(1.4rem, 5.8vw, 1.85rem) !important;
              line-height: 1.2 !important;
              margin-bottom: 6px !important;
            }
            .hero-divider-bar {
              margin-bottom: 8px !important;
            }
            .hero-sub-description {
              font-size: 0.86rem !important;
              line-height: 1.45 !important;
              -webkit-line-clamp: 4 !important;
            }
            .hero-action-buttons {
              gap: 8px !important;
              margin-bottom: 14px !important;
            }
            .hero-btn-explore,
            .hero-btn-demo {
              height: 46px !important;
              min-height: 46px !important;
              max-height: 46px !important;
              font-size: 0.82rem !important;
              padding: 0 16px !important;
            }
            .hero-right-photo-column {
              order: 2 !important;
              width: 100% !important;
              aspect-ratio: 1 / 1 !important;
              min-height: 260px !important;
              max-height: 380px !important;
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
          @media (max-width: 600px) {
            .hero-left-text-column {
              padding: 16px 14px 12px !important;
            }
            .hero-text-fixed-slot {
              margin-bottom: 10px !important;
            }
            .hero-action-buttons {
              flex-direction: column !important;
              width: 100% !important;
              gap: 8px !important;
              margin-bottom: 12px !important;
            }
            .hero-btn-explore,
            .hero-btn-demo {
              width: 100% !important;
            }
          }
        `}</style>

      </section>
    </LazyMotion>
  );
}
