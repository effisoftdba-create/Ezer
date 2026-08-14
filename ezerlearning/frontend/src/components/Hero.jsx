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
              gridTemplateColumns: '1.08fr 0.92fr',
              alignItems: 'stretch',
            }}
          >
            {/* LEFT SIDE: TEXT DETAILS */}
            <div
              className="hero-left-text-column"
              style={{
                padding: 'clamp(36px, 4.5vw, 56px) clamp(28px, 4vw, 56px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                background: '#faf9f6',
                position: 'relative',
              }}
            >
              <div className="hero-text-content-wrapper" style={{ width: '100%', maxWidth: '600px' }}>
                <div
                  className="hero-text-fixed-slot"
                  style={{
                    position: 'relative',
                    minHeight: '220px',
                    height: '220px',
                    marginBottom: '22px',
                  }}
                >
                  <AnimatePresence mode="wait">
                    <m.div
                      key={currentSlide.id || safeActive}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.28, ease: 'easeOut' }}
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
                          fontSize: 'clamp(1.95rem, 3.2vw, 2.75rem)',
                          fontWeight: 900,
                          color: '#000648',
                          lineHeight: 1.15,
                          marginBottom: '10px',
                          fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif",
                          letterSpacing: '-0.025em',
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
                                  marginTop: '4px',
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
                          width: '64px',
                          height: '4px',
                          background: 'linear-gradient(90deg, #000648 0%, #f2b733 100%)',
                          marginBottom: '12px',
                          borderRadius: '4px',
                          flexShrink: 0
                        }}
                      />

                      <p
                        className="hero-sub-description"
                        style={{
                          fontSize: 'clamp(0.92rem, 1.1vw, 1.02rem)',
                          color: '#334155',
                          lineHeight: 1.6,
                          marginBottom: '0',
                          maxWidth: '570px',
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

                {/* Dual Matching Animated Action Buttons */}
                <div className="hero-action-buttons">
                  <Link
                    to="/courses"
                    className="hero-btn-explore hero-animated-btn"
                  >
                    <span>Explore Courses</span>
                    <HiArrowRight className="hero-btn-arrow-icon" size={17} />
                  </Link>

                  <button
                    type="button"
                    onClick={onOpenDemoModal}
                    className="hero-btn-demo hero-animated-btn"
                  >
                    <span className="hero-btn-shimmer-sweep" />
                    <span>Book Free Demo</span>
                    <HiArrowRight className="hero-btn-arrow-icon" size={17} />
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
            min-height: 500px;
          }
          .hero-split-container {
            min-height: 500px;
          }

          /* Button Styling & Rich Animations */
          .hero-action-buttons {
            display: flex;
            gap: 14px;
            flex-wrap: wrap;
            align-items: center;
            margin-bottom: 22px;
          }

          .hero-animated-btn {
            position: relative;
            overflow: hidden;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 9px;
            width: 220px;
            height: 52px;
            min-height: 52px;
            max-height: 52px;
            box-sizing: border-box;
            padding: 0 24px;
            font-weight: 800;
            font-size: 0.88rem;
            letter-spacing: '0.04em';
            text-transform: uppercase;
            border-radius: 10px;
            cursor: pointer;
            text-decoration: none;
            transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .hero-btn-arrow-icon {
            transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          .hero-animated-btn:hover .hero-btn-arrow-icon {
            transform: translateX(5px);
          }

          .hero-animated-btn:active {
            transform: scale(0.97) !important;
          }

          /* Explore Courses Button */
          .hero-btn-explore {
            background: #000638;
            color: #ffffff;
            border: 1.5px solid #000638;
            box-shadow: 0 4px 14px rgba(0, 6, 56, 0.22);
          }

          .hero-btn-explore:hover {
            background: #000a58;
            border-color: #f2b733;
            color: #f2b733;
            transform: translateY(-2px);
            box-shadow: 0 8px 22px rgba(0, 6, 72, 0.32);
          }

          /* Book Free Demo Button (Primary Vibrant Pulse + Shimmer) */
          .hero-btn-demo {
            background: linear-gradient(135deg, #f2b733 0%, #e5a822 100%);
            color: #000648;
            border: 1.5px solid #f2b733;
            box-shadow: 0 4px 16px rgba(242, 183, 51, 0.4);
            animation: heroDemoPulse 3s infinite ease-in-out;
          }

          .hero-btn-demo:hover {
            background: linear-gradient(135deg, #f7c34d 0%, #f2b733 100%);
            border-color: #000648;
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(242, 183, 51, 0.55);
          }

          /* Light Shimmer Sweep Animation */
          .hero-btn-shimmer-sweep {
            position: absolute;
            top: 0;
            left: -120%;
            width: 80%;
            height: 100%;
            background: linear-gradient(
              90deg,
              transparent 0%,
              rgba(255, 255, 255, 0.45) 50%,
              transparent 100%
            );
            transform: skewX(-22deg);
            animation: heroShimmerSweep 4.5s infinite;
            pointer-events: none;
          }

          @keyframes heroDemoPulse {
            0%, 100% {
              box-shadow: 0 4px 16px rgba(242, 183, 51, 0.38);
            }
            50% {
              box-shadow: 0 4px 24px rgba(242, 183, 51, 0.65), 0 0 0 4px rgba(242, 183, 51, 0.18);
            }
          }

          @keyframes heroShimmerSweep {
            0%, 65% {
              left: -120%;
            }
            100% {
              left: 180%;
            }
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
              padding: 28px 22px 20px !important;
              min-height: auto !important;
              justify-content: flex-start !important;
            }
            .hero-text-content-wrapper {
              max-width: 100% !important;
            }
            .hero-text-fixed-slot {
              height: auto !important;
              min-height: auto !important;
              margin-bottom: 20px !important;
              position: relative !important;
            }
            .hero-animated-text-container {
              position: relative !important;
              height: auto !important;
              min-height: auto !important;
            }
            .hero-headline-title {
              font-size: clamp(1.75rem, 6.2vw, 2.25rem) !important;
              line-height: 1.18 !important;
              margin-bottom: 10px !important;
            }
            .hero-divider-bar {
              margin-bottom: 12px !important;
              width: 56px !important;
            }
            .hero-sub-description {
              font-size: 0.92rem !important;
              line-height: 1.55 !important;
              -webkit-line-clamp: 4 !important;
            }
            .hero-action-buttons {
              gap: 12px !important;
              margin-bottom: 20px !important;
            }
            .hero-animated-btn {
              height: 50px !important;
              min-height: 50px !important;
              max-height: 50px !important;
              font-size: 0.86rem !important;
            }
            .hero-right-photo-column {
              order: 2 !important;
              width: 100% !important;
              aspect-ratio: 1 / 1 !important;
              min-height: 280px !important;
              max-height: 420px !important;
            }
            .hero-badge-pill {
              top: 12px !important;
              right: 12px !important;
              padding: 4px 12px !important;
              font-size: 0.65rem !important;
              background: rgba(0, 6, 56, 0.88) !important;
              backdrop-filter: blur(4px) !important;
              box-shadow: 0 2px 8px rgba(0,0,0,0.4) !important;
            }
          }

          @media (max-width: 600px) {
            .hero-left-text-column {
              padding: 24px 18px 18px !important;
            }
            .hero-headline-title {
              font-size: 1.82rem !important;
              line-height: 1.18 !important;
            }
            .hero-text-fixed-slot {
              margin-bottom: 18px !important;
            }
            .hero-action-buttons {
              flex-direction: column !important;
              width: 100% !important;
              gap: 10px !important;
              margin-bottom: 18px !important;
            }
            .hero-animated-btn {
              width: 100% !important;
            }
          }
        `}</style>

      </section>
    </LazyMotion>
  );
}
