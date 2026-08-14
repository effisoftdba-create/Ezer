import React from 'react';
import { HiStar, HiUserGroup, HiArrowRight } from 'react-icons/hi';
import { useSiteData } from '../../context/SiteContext';
import { resolveImageSrc } from '../../utils/imageUtils';

export default function TestimonialsHero({ onOpenDemoModal }) {
  const { testimonialsHero } = useSiteData();

  const heroTag = testimonialsHero?.tag || testimonialsHero?.badge || 'STUDENT SUCCESS STORIES';
  const heroHeadline = testimonialsHero?.headline || 'Real Learners. Real High-Growth IT Careers.';
  const heroSub = testimonialsHero?.sub || 'Discover how EZER Learning Solutions empowers freshers, career switchers, and non-IT professionals to land high-growth tech roles through live online practical training and 12-month dedicated placement support.';
  const heroRating = testimonialsHero?.ratingBadge || '4.9/5 Rating (2,500+ Reviews)';
  const heroAssistance = testimonialsHero?.assistanceBadge || '12-Month Dedicated Placement Support';
  const heroImage = testimonialsHero?.image || 'images/hero/hero_section_1.jpg';

  const scrollToReviews = () => {
    const el = document.getElementById('testimonials-grid-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      style={{
        background: '#000648',
        color: '#ffffff',
        padding: '64px 0 56px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '48px',
            alignItems: 'center',
          }}
          className="testimonials-hero-grid"
        >
          {/* Left Text & Action Column */}
          <div>
            {Boolean(heroTag.trim()) && (
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(242, 183, 51, 0.14)',
                  border: '1.5px solid rgba(242, 183, 51, 0.35)',
                  color: '#f2b733',
                  fontSize: '0.78rem',
                  fontWeight: 900,
                  padding: '6px 18px',
                  borderRadius: '50px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '18px',
                }}
              >
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f2b733' }} />
                <span>{heroTag}</span>
              </div>
            )}

            <h1
              style={{
                color: '#ffffff',
                marginBottom: '16px',
                fontSize: 'clamp(2rem, 3.4vw, 2.9rem)',
                fontWeight: 900,
                lineHeight: 1.15,
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                letterSpacing: '-0.025em',
              }}
            >
              {heroHeadline}
            </h1>

            <p
              style={{
                fontSize: 'clamp(0.96rem, 1.1vw, 1.05rem)',
                color: 'rgba(255, 255, 255, 0.85)',
                lineHeight: 1.68,
                marginBottom: '28px',
                maxWidth: '600px',
                fontWeight: 400,
              }}
            >
              {heroSub}
            </p>

            {/* Verified Trust Badges Row */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '32px' }}>
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(242, 183, 51, 0.4)',
                  padding: '7px 16px',
                  borderRadius: '50px',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  color: '#f2b733',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                }}
              >
                <HiStar size={17} style={{ color: '#f2b733' }} />
                <span>{heroRating}</span>
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  padding: '7px 16px',
                  borderRadius: '50px',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                }}
              >
                <HiUserGroup size={17} style={{ color: '#f2b733' }} />
                <span>{heroAssistance}</span>
              </div>
            </div>

            {/* Dual Action CTA Buttons */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
              <button
                type="button"
                onClick={() => (typeof onOpenDemoModal === 'function' ? onOpenDemoModal() : null)}
                className="btn btn-primary"
                style={{
                  background: 'linear-gradient(135deg, #f2b733 0%, #e5a822 100%)',
                  color: '#000648',
                  padding: '14px 28px',
                  fontSize: '0.92rem',
                  fontWeight: 900,
                  borderRadius: '10px',
                  border: 'none',
                  boxShadow: '0 6px 20px rgba(242, 183, 51, 0.4)',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
              >
                <span>Book Free Demo Class</span>
                <HiArrowRight size={16} />
              </button>

              <button
                type="button"
                onClick={scrollToReviews}
                style={{
                  background: 'transparent',
                  color: '#ffffff',
                  padding: '14px 24px',
                  fontSize: '0.92rem',
                  fontWeight: 800,
                  borderRadius: '10px',
                  border: '1.5px solid rgba(255, 255, 255, 0.3)',
                  cursor: 'pointer',
                  transition: 'background 0.2s ease, border-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.borderColor = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                }}
              >
                Explore All Stories ↓
              </button>
            </div>
          </div>

          {/* Right Visual Spotlight Frame - Crystal Clear (No blend, no overlays) */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
                position: 'relative',
                height: 'clamp(280px, 36vw, 380px)',
                background: '#000638',
              }}
            >
              <img
                src={resolveImageSrc(heroImage)}
                alt="EZER Placed Alumni Cohort"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 20%',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonials-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}
