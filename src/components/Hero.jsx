import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiOutlineShieldCheck, HiOutlineUserGroup, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion';
import { useSiteData } from '../Admin_Control/context/SiteContext';
import HeroLeftFrame from './hero/HeroLeftFrame';

const trustSignals = [
  {
    title: 'Up to 1-Year Placement Support',
    sub: 'Continuous resume & interview prep',
    icon: <HiOutlineShieldCheck size={18} />
  },
  {
    title: 'Corporate Practitioner Trainers',
    sub: 'Active senior tech leads from top firms',
    icon: <HiOutlineUserGroup size={18} />
  }
];

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
            {/* LEFT SIDE FRAME */}
            <HeroLeftFrame currentSlide={currentSlide} safeActive={safeActive} />

            {/* RIGHT SIDE CONTENT */}
            <div
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
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '16px',
                      color: '#000638',
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    <span style={{ width: '24px', height: '2px', background: '#000638', display: 'inline-block' }} />
                    <span>{currentSlide.badge || 'FESTIVAL FAVOURITES'}</span>
                  </div>

                  <h1
                    style={{
                      fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
                      fontWeight: 900,
                      color: '#000638',
                      lineHeight: 1.15,
                      marginBottom: '18px',
                      fontFamily: "'Playfair Display', Georgia, serif, 'DM Sans'",
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {currentSlide.headline}
                  </h1>

                  <div
                    style={{
                      width: '64px',
                      height: '3.5px',
                      background: '#f2b733',
                      marginBottom: '20px',
                      borderRadius: '2px',
                    }}
                  />

                  <p
                    style={{
                      fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
                      color: '#000638',
                      lineHeight: 1.65,
                      marginBottom: '32px',
                      maxWidth: '560px',
                      opacity: 0.9,
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
                    background: 'none',
                    border: 'none',
                    color: '#000638',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    padding: '8px 12px',
                    borderBottom: '2px solid #f2b733',
                    transition: 'opacity 0.2s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
                >
                  Book Free Demo
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
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '12px',
                  marginTop: '24px',
                  paddingTop: '20px',
                  borderTop: '1px solid rgba(0, 6, 56, 0.1)',
                }}
              >
                {trustSignals.map((item) => (
                  <div key={item.title} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#000638' }}>
                    <div style={{ color: '#000638', background: '#f2b733', padding: '4px', borderRadius: '4px', display: 'flex', alignItems: 'center' }}>
                      {item.icon}
                    </div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, lineHeight: 1.2 }}>
                      {item.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .hero-split-container {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>
    </LazyMotion>
  );
}
