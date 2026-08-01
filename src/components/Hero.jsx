import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiOutlineShieldCheck, HiOutlineUserGroup, HiOutlineClock, HiOutlineAcademicCap, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion';

const baseUrl = import.meta.env.BASE_URL || '/';

const slides = [
  {
    url: `${baseUrl}images/hero/hero_section_1.jpg`,
    headline: 'Learn Live. Build Real Skills. Get Placed.',
    sub: 'Live online classes led by working corporate professionals, hands-on labs on industry tools, and placement support that continues after graduation.',
    badge: 'Outcome-Driven IT Training',
  },
  {
    url: `${baseUrl}images/hero/cloud_deveops.png`,
    headline: 'Deploy, Automate, and Scale Like a Real DevOps Engineer',
    sub: 'Master AWS, Azure, GCP, Docker, Kubernetes, Jenkins & Terraform with hands-on production labs.',
    badge: 'Cloud & DevOps Masterclass',
  },
  {
    url: `${baseUrl}images/hero/software_testing_playwright.jpg`,
    headline: 'Test Smarter With Modern Automation Frameworks',
    sub: 'From manual testing fundamentals to full Playwright automation and CI/CD integration.',
    badge: 'Playwright Automation Program',
  },
  {
    url: `${baseUrl}images/hero/AI_machine_learning.png`,
    headline: 'From Python Basics to Deploying Real ML Models',
    sub: 'A hands-on, project-based path into AI & Machine Learning — live, instructor-led, and practical.',
    badge: 'AI & Data Science Track',
  },
];

const trustSignals = [
  {
    title: 'Up to 1-Year Placement Support',
    sub: 'Continuous resume & interview prep',
    icon: <HiOutlineShieldCheck size={20} />
  },
  {
    title: 'Corporate Practitioner Trainers',
    sub: 'Active senior tech leads from top firms',
    icon: <HiOutlineUserGroup size={20} />
  },
  {
    title: '3-Year Community Access',
    sub: 'Mentorship, slack & alumni network',
    icon: <HiOutlineClock size={20} />
  },
  {
    title: '1-Year LMS Recorded Access',
    sub: 'Full session replays for revision',
    icon: <HiOutlineAcademicCap size={20} />
  }
];

function HeroTrustSignals() {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px',
      paddingTop: '24px', borderTop: '1.5px solid #e2e8f0'
    }}>
      {trustSignals.map((item) => (
        <m.div 
          key={item.title}
          whileHover={{ y: -3, scale: 1.015, borderColor: '#000648', boxShadow: '0 8px 20px rgba(0,6,72,0.12)' }}
          transition={{ duration: 0.2 }}
          style={{
            display: 'flex', alignItems: 'flex-start', gap: '10px',
            padding: '10px 12px', borderRadius: '10px',
            background: '#ffffff', border: '1.5px solid #e2e8f0',
            boxShadow: '0 2px 8px rgba(0,6,72,0.04)', cursor: 'default'
          }}
        >
          <div style={{
            color: '#f2b733', background: '#000648',
            padding: '6px', borderRadius: '8px', flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 3px 8px rgba(0,6,72,0.2)'
          }}>
            {item.icon}
          </div>
          <div>
            <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#000648', lineHeight: 1.25 }}>
              {item.title}
            </div>
            <div style={{ fontSize: '0.68rem', color: '#64748b', marginTop: '2px', fontWeight: 500 }}>
              {item.sub}
            </div>
          </div>
        </m.div>
      ))}
    </div>
  );
}

function HeroImageSlider({ active, setActive, handleNext, handlePrev }) {
  return (
    <div style={{ 
      position: 'relative', width: '100%', 
      padding: '24px 0',
      display: 'flex', flexDirection: 'column', alignItems: 'center'
    }}>
      <m.div 
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          alignSelf: 'flex-start',
          marginBottom: '12px',
          background: '#000648',
          color: '#ffffff',
          padding: '8px 18px',
          borderRadius: '50px',
          border: '1.5px solid #f2b733',
          fontSize: '0.78rem',
          fontWeight: 800,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: '0 8px 20px rgba(0, 6, 72, 0.25)',
          zIndex: 25,
        }}
      >
        <span style={{
          width: '8px', height: '8px', borderRadius: '50%',
          background: '#22c55e', display: 'inline-block',
          boxShadow: '0 0 10px #22c55e'
        }}></span>
        <span>100% Live Interactive Sessions • Small Batch Mentorship</span>
      </m.div>

      <div style={{
        position: 'relative', width: '100%', height: 'clamp(340px, 46vh, 440px)',
        borderRadius: '20px', overflow: 'hidden',
        boxShadow: '0 16px 40px rgba(0, 6, 72, 0.2)',
        border: '4px solid #ffffff',
        background: '#000648',
      }}>
        {slides.map((s, idx) => (
          <img 
            key={s.badge} 
            src={s.url} 
            alt={s.headline} 
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%', objectFit: 'cover',
              opacity: active === idx ? 1 : 0,
              transition: 'opacity 0.6s ease-in-out',
            }} 
          />
        ))}

        <div style={{
          position: 'absolute', bottom: '16px', right: '16px',
          display: 'flex', alignItems: 'center', gap: '8px',
          background: 'rgba(0, 6, 72, 0.88)', backdropFilter: 'blur(6px)',
          padding: '6px 14px', borderRadius: '50px',
          border: '1.5px solid rgba(242, 183, 51, 0.5)',
          zIndex: 20,
        }}>
          <button
            type="button"
            onClick={handlePrev}
            style={{
              background: 'none', border: 'none', color: '#f2b733',
              display: 'flex', alignItems: 'center', cursor: 'pointer',
              padding: '2px', transition: 'transform 0.15s ease'
            }}
            aria-label="Previous image"
          >
            <HiChevronLeft size={20} />
          </button>
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            {slides.map((s, i) => (
              <button 
                key={s.badge}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}`}
                style={{
                  padding: 0,
                  border: 'none',
                  width: active === i ? '20px' : '6px', height: '6px',
                  borderRadius: '3px', cursor: 'pointer',
                  background: active === i ? '#f2b733' : 'rgba(255,255,255,0.4)',
                  transition: 'width 0.3s ease, background-color 0.3s ease',
                }}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={handleNext}
            style={{
              background: 'none', border: 'none', color: '#f2b733',
              display: 'flex', alignItems: 'center', cursor: 'pointer',
              padding: '2px', transition: 'transform 0.15s ease'
            }}
            aria-label="Next image"
          >
            <HiChevronRight size={20} />
          </button>
        </div>
      </div>

      <m.div 
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        style={{
          alignSelf: 'flex-end',
          marginTop: '12px',
          background: '#ffffff',
          color: '#000648',
          padding: '10px 20px',
          borderRadius: '14px',
          border: '1.5px solid #000648',
          fontSize: '0.8rem',
          fontWeight: 800,
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          boxShadow: '0 10px 28px rgba(0, 6, 72, 0.12)',
          zIndex: 25,
        }}
      >
        <div style={{
          background: '#000648', color: '#f2b733',
          padding: '5px 9px', borderRadius: '8px', fontWeight: 900,
          fontSize: '0.72rem'
        }}>
          ISO 9001:2015
        </div>
        <div>
          <div style={{ color: '#000648', lineHeight: 1.2 }}>Certified Quality Training</div>
          <div style={{ color: '#64748b', fontSize: '0.7rem', fontWeight: 600 }}>1,500+ Placements & Career Transitions</div>
        </div>
      </m.div>
    </div>
  );
}

export default function Hero({ onOpenDemoModal }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  const handleNext = () => setActive((prev) => (prev + 1) % slides.length);
  const handlePrev = () => setActive((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <LazyMotion features={domAnimation}>
      <section style={{ 
        position: 'relative', 
        width: '100%', 
        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        padding: '40px 0 48px',
        overflow: 'hidden',
        borderBottom: '1px solid #e2e8f0'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.05fr)',
            gap: '36px',
            alignItems: 'center',
          }} className="hero-grid">

            <div style={{ display: 'flex', flexDirection: 'column', zIndex: 10 }}>
              <AnimatePresence mode="wait">
                <m.div
                  key={slides[active].badge}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    padding: '6px 14px', borderRadius: '50px',
                    background: '#000648', color: '#f2b733',
                    fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase',
                    letterSpacing: '0.06em', marginBottom: '16px', width: 'fit-content',
                    boxShadow: '0 2px 8px rgba(0,6,72,0.12)',
                  }}>
                    <HiOutlineShieldCheck size={15} style={{ color: '#f2b733' }} />
                    {slides[active].badge}
                  </div>

                  <h1 style={{
                    fontSize: 'clamp(1.6rem, 2.6vw, 2.1rem)', fontWeight: 900,
                    color: '#000648', lineHeight: 1.2, marginBottom: '14px',
                    letterSpacing: '-0.02em', fontFamily: "'DM Sans', sans-serif"
                  }}>
                    {slides[active].headline}
                  </h1>

                  <p style={{
                    fontSize: '0.88rem', color: '#475569',
                    lineHeight: 1.6, marginBottom: '24px', maxWidth: '540px',
                    fontWeight: 500
                  }}>
                    {slides[active].sub}
                  </p>
                </m.div>
              </AnimatePresence>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '32px' }}>
                <m.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link to="/courses" className="btn btn-primary" style={{
                    padding: '12px 26px', borderRadius: '8px',
                    fontWeight: 800, fontSize: '0.86rem',
                  }}>
                    Explore Courses <HiArrowRight size={16} />
                  </Link>
                </m.div>
                <m.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <button 
                    type="button" 
                    onClick={onOpenDemoModal} 
                    className="btn btn-secondary"
                    style={{
                      padding: '12px 26px', borderRadius: '8px',
                      fontWeight: 800, fontSize: '0.86rem',
                    }}
                  >
                    Book a Free Demo Class
                  </button>
                </m.div>
              </div>

              <HeroTrustSignals />
            </div>

            <HeroImageSlider 
              active={active} 
              setActive={setActive} 
              handleNext={handleNext} 
              handlePrev={handlePrev} 
            />

          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .hero-grid {
              grid-template-columns: 1fr !important;
              gap: 28px !important;
            }
          }
        `}</style>
      </section>
    </LazyMotion>
  );
}
