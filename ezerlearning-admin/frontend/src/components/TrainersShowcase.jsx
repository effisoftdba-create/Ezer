import React, { useRef, useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight, HiAcademicCap, HiSparkles } from 'react-icons/hi';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { useSiteData } from '../Admin_Control/context/SiteContext';
import { defaultHomeTrainers } from '../Admin_Control/frontend/context/siteDefaults';
import { resolveImageSrc, handleImgError } from '../utils/imageUtils';
import CarouselDotsNav from './CarouselDotsNav';

export default function TrainersShowcase({ trainers: propTrainers, title: propTitle }) {
  const { homeTrainers, mentorsHeader } = useSiteData();
  const sliderRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const displayTrainers = (homeTrainers && homeTrainers.length > 0)
    ? homeTrainers
    : (propTrainers && propTrainers.length > 0 ? propTrainers : defaultHomeTrainers);

  const headerData = mentorsHeader || {
    tag: 'EXPERT INDUSTRY TRAINERS',
    headline: propTitle || 'Learn Live From Seasoned Tech Leaders & Corporate Mentors',
    sub: 'Gain production-grade engineering insights from instructors with proven tenure across top global technology firms.'
  };

  const cardWidthRef = useRef(340);

  // Update card width on mount and resize
  useEffect(() => {
    const updateCardWidth = () => {
      if (sliderRef.current?.children[0]) {
        cardWidthRef.current = sliderRef.current.children[0].offsetWidth + 24; // width + gap
      }
    };
    updateCardWidth();
    window.addEventListener('resize', updateCardWidth, { passive: true });
    return () => window.removeEventListener('resize', updateCardWidth);
  }, [displayTrainers.length]);

  // Update arrow button visibility based on scroll position
  const checkScrollPosition = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Calculate active index
    const index = Math.round(scrollLeft / (cardWidthRef.current || 340));
    setActiveIndex(Math.min(Math.max(index, 0), displayTrainers.length - 1));
  };

  useEffect(() => {
    checkScrollPosition();
  }, [displayTrainers.length]);

  // Auto-scroll loop advancing sequentially to the right, pausing on hover
  useEffect(() => {
    if (isHovered || !displayTrainers.length || displayTrainers.length <= 1) return;

    const interval = setInterval(() => {
      if (!sliderRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      const isAtEnd = scrollLeft >= scrollWidth - clientWidth - 20;
      
      const nextIndex = isAtEnd ? 0 : (activeIndex + 1) % displayTrainers.length;
      scrollToIndex(nextIndex);
    }, 4500);

    return () => clearInterval(interval);
  }, [isHovered, activeIndex, displayTrainers.length]);

  const scrollToIndex = (idx) => {
    if (!sliderRef.current) return;
    const targetScroll = idx * (cardWidthRef.current || 340);
    sliderRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
    setActiveIndex(idx);
  };

  const handlePrev = () => {
    if (!displayTrainers.length) return;
    const next = (activeIndex - 1 + displayTrainers.length) % displayTrainers.length;
    scrollToIndex(next);
  };

  const handleNext = () => {
    if (!displayTrainers.length) return;
    const next = (activeIndex + 1) % displayTrainers.length;
    scrollToIndex(next);
  };

  if (!displayTrainers || displayTrainers.length === 0) return null;

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="trainers-showcase"
        className="trainers-showcase-section"
        style={{
          position: 'relative',
          padding: '48px 20px',
          background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)',
          borderTop: '1px solid #e2e8f0',
          borderBottom: '1px solid #e2e8f0',
          overflow: 'hidden'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <style>{`
          .trainers-scroll-track {
            display: flex;
            gap: 24px;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;
            padding: 20px 8px 32px 8px;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none; /* Firefox */
          }
          .trainers-scroll-track::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Edge */
          }

          .trainer-profile-card {
            flex: 0 0 320px;
            max-width: 340px;
            scroll-snap-align: start;
            background: #ffffff;
            border-radius: 24px;
            border: 1.5px solid #cbd5e1;
            padding: 32px 24px 28px 24px;
            box-shadow: 0 10px 30px rgba(0, 6, 72, 0.05);
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                        box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                        border-color 0.35s ease;
            position: relative;
          }

          .trainer-profile-card:hover {
            transform: translateY(-6px);
            border-color: #f2b733;
            box-shadow: 0 20px 45px rgba(0, 6, 72, 0.12);
          }

          /* Circular Profile Picture Styling */
          .trainer-avatar-wrapper {
            position: relative;
            width: 110px;
            height: 110px;
            margin-bottom: 20px;
            flex-shrink: 0;
          }

          .trainer-avatar-ring {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            padding: 3.5px;
            background: linear-gradient(135deg, #f2b733 0%, #f89b29 50%, #d97706 100%);
            box-shadow: 0 8px 24px rgba(242, 183, 51, 0.35);
            transition: transform 0.4s ease, box-shadow 0.4s ease;
          }

          .trainer-profile-card:hover .trainer-avatar-ring {
            transform: scale(1.05);
            box-shadow: 0 12px 30px rgba(242, 183, 51, 0.5);
          }

          .trainer-avatar-img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
            display: block;
            background: #000648;
          }

          /* Navigation Arrow Buttons */
          .trainer-nav-btn {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            border: 2px solid #000648;
            background: #ffffff;
            color: #000648;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 4px 14px rgba(0, 6, 72, 0.1);
            transition: all 0.25s ease;
          }

          .trainer-nav-btn:hover:not(:disabled) {
            background: #000648;
            color: #f2b733;
            border-color: #000648;
            transform: scale(1.08);
            box-shadow: 0 6px 20px rgba(0, 6, 72, 0.2);
          }

          .trainer-nav-btn:disabled {
            opacity: 0.35;
            cursor: not-allowed;
            border-color: #cbd5e1;
            color: #94a3b8;
          }

          @media (max-width: 640px) {
            .trainer-profile-card {
              flex: 0 0 280px;
              padding: 24px 18px;
            }
            .trainer-avatar-wrapper {
              width: 96px;
              height: 96px;
            }
          }
        `}</style>

        {/* Golden ambient background glow */}
        <div
          style={{
            position: 'absolute',
            top: '-5%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: '350px',
            background: 'radial-gradient(circle, rgba(242,183,51,0.12) 0%, rgba(248,155,41,0) 70%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />

        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          
          {/* Header Section */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(0, 6, 72, 0.06)',
                color: '#000648',
                border: '1.5px solid rgba(0, 6, 72, 0.12)',
                padding: '6px 20px',
                borderRadius: '50px',
                fontWeight: 900,
                fontSize: '0.78rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '12px'
              }}
            >
              <HiAcademicCap size={16} color="#000648" />
              {headerData.tag || 'Expert Industry Trainers'}
            </span>

            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)',
                fontWeight: 900,
                color: '#000648',
                lineHeight: 1.2,
                marginBottom: '10px',
                letterSpacing: '-0.02em'
              }}
            >
              {headerData.headline}
            </h2>

            <p
              style={{
                fontSize: '0.96rem',
                color: '#475569',
                maxWidth: '680px',
                margin: '0 auto',
                lineHeight: 1.6
              }}
            >
              {headerData.sub}
            </p>

            {/* Desktop / Tablet Scroll Controls in Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginTop: '20px' }}>
              <button
                type="button"
                className="trainer-nav-btn"
                onClick={handlePrev}
                aria-label="Previous trainer profile"
                title="Previous Trainer"
              >
                <HiChevronLeft size={22} />
              </button>

              <CarouselDotsNav
                totalItems={displayTrainers.length}
                activeIndex={activeIndex}
                onPrev={handlePrev}
                onNext={handleNext}
                onSelectIndex={scrollToIndex}
                style={{ margin: 0, width: 'auto' }}
              />

              <button
                type="button"
                className="trainer-nav-btn"
                onClick={handleNext}
                aria-label="Next trainer profile"
                title="Next Trainer"
              >
                <HiChevronRight size={22} />
              </button>
            </div>
          </div>

          {/* Right-Scrolling Horizontal Profile Track */}
          <div
            ref={sliderRef}
            className="trainers-scroll-track"
            onScroll={checkScrollPosition}
          >
            {displayTrainers.map((trainer, idx) => {
              if (!trainer) return null;
              const designationText = trainer.designation || [trainer.role, trainer.company].filter(Boolean).join(' @ ') || 'Corporate Technical Specialist';
              const bioText = trainer.bio || trainer.experience || 'Industry specialist dedicated to mentoring engineers with practical, career-focused software curriculum.';
              const tagsList = Array.isArray(trainer.tags)
                ? trainer.tags
                : (typeof trainer.tags === 'string' ? trainer.tags.split(',').map(t => t.trim()).filter(Boolean) : []);

              return (
                <m.div
                  key={trainer.id || trainer.name || idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="trainer-profile-card"
                >
                  {/* Top Role Badge */}
                  <span
                    style={{
                      background: '#000648',
                      color: '#f2b733',
                      fontSize: '0.68rem',
                      fontWeight: 900,
                      padding: '3px 12px',
                      borderRadius: '50px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginBottom: '12px',
                      border: '1px solid rgba(242, 183, 51, 0.4)',
                      maxWidth: '90%',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {trainer.roleTag || trainer.role || 'EXPERT TRAINER'}
                  </span>

                  {/* Circular Profile Picture */}
                  <div className="trainer-avatar-wrapper">
                    <div className="trainer-avatar-ring">
                      <img
                        src={resolveImageSrc(trainer.image)}
                        alt={trainer.name}
                        onError={handleImgError}
                        className="trainer-avatar-img"
                        style={{
                          objectFit: trainer.imageFit || trainer.fit || 'cover',
                          objectPosition: trainer.imagePosition || trainer.position || 'center center',
                          transform: (trainer.imageZoom || trainer.zoom || 1) !== 1 ? `scale(${trainer.imageZoom || trainer.zoom})` : 'none'
                        }}
                      />
                    </div>
                  </div>

                  {/* Profile Header Details Directly Below Photo */}
                  <h3
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 900,
                      color: '#000648',
                      margin: '0 0 4px 0',
                      letterSpacing: '-0.015em'
                    }}
                  >
                    {trainer.name}
                  </h3>

                  <div
                    style={{
                      fontSize: '0.84rem',
                      fontWeight: 800,
                      color: '#115DFC',
                      lineHeight: 1.35,
                      marginBottom: '8px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em'
                    }}
                  >
                    {designationText}
                  </div>

                  {/* Tagline or Headline */}
                  {trainer.tagline && (
                    <div style={{ fontSize: '0.78rem', color: '#d97706', fontStyle: 'italic', fontWeight: 700, marginBottom: '6px', textAlign: 'center' }}>
                      "{trainer.tagline}"
                    </div>
                  )}
                  {trainer.headline && (
                    <div style={{ fontSize: '0.85rem', color: '#000648', fontWeight: 800, marginBottom: '10px', lineHeight: 1.35, textAlign: 'center' }}>
                      {trainer.headline}
                    </div>
                  )}

                  {/* Experience pill if available */}
                  {trainer.exp && (
                    <span
                      style={{
                        display: 'inline-block',
                        background: '#fef3c7',
                        color: '#92400e',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        padding: '2px 10px',
                        borderRadius: '50px',
                        marginBottom: '12px'
                      }}
                    >
                      {trainer.exp}
                    </span>
                  )}

                  {/* Biography Placed Directly Below Photo & Header */}
                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: '#475569',
                      lineHeight: 1.6,
                      margin: '0 0 18px 0',
                      flexGrow: 1,
                      textAlign: 'center'
                    }}
                  >
                    {bioText}
                  </p>

                  {/* Industry Expertise Tags */}
                  {tagsList.length > 0 && (
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '6px',
                        width: '100%',
                        paddingTop: '14px',
                        borderTop: '1px solid #f1f5f9'
                      }}
                    >
                      {tagsList.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: '0.7rem',
                            fontWeight: 800,
                            background: 'rgba(0, 6, 72, 0.05)',
                            color: '#000648',
                            padding: '3px 10px',
                            borderRadius: '50px',
                            border: '1px solid rgba(0, 6, 72, 0.08)'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </m.div>
              );
            })}
          </div>

          {/* Bottom Swipe / Scroll Hint */}
          <div
            style={{
              textAlign: 'center',
              marginTop: '8px',
              fontSize: '0.75rem',
              color: '#94a3b8',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px'
            }}
          >
            <span>👉 Swipe or click arrows to view more corporate trainers</span>
          </div>

        </div>
      </section>
    </LazyMotion>
  );
}
