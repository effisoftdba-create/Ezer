import React, { useState, useEffect } from 'react';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import { FaQuoteLeft } from 'react-icons/fa';
import { useSiteData } from '../../Admin_Control/context/SiteContext';

export default function TestimonialsSliderTrack() {
  const { writtenTestimonials } = useSiteData();
  const [activeIdx, setActiveIdx] = useState(0);

  const testimonialsList = (writtenTestimonials && writtenTestimonials.length > 0)
    ? writtenTestimonials
    : [
        {
          id: 'tl-1',
          name: 'Sarah Ahmed',
          role: 'Full Stack Engineer',
          company: 'TechCorp India',
          quote: 'EZER delivered outstanding results with great professionalism and timely execution. Their instructors’ dedication and safety-first approach to real production code made my transition seamless.',
          background: 'Route: Full Stack AI • Salary Hike: 180%',
          image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2c958486-bfef-4917-862a-7e3de9f9e62c_1600w.webp'
        },
        {
          id: 'tl-2',
          name: 'Marco Lee',
          role: 'Cloud DevOps Specialist',
          company: 'Agnikul Cosmos',
          quote: 'The route planning, mock interviews, and lab check-ins were spot on. We kept to schedule without rushing beginners, and the offline materials saved us twice in complex production projects.',
          background: 'Route: Cloud DevOps • Salary Hike: 160%',
          image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/782ff660-820f-4153-aa85-b3d60237bd11_1600w.webp'
        },
        {
          id: 'tl-3',
          name: 'Aisha Patel',
          role: 'Cyber Security Analyst',
          company: 'SecureTech Labs',
          quote: 'Clear protocols, well-stocked labs, and calm leadership throughout a tricky job market window. I would trust this team with any corporate career objective.',
          background: 'Rating: 4.9/5 • 100% Placement Guarantee',
          image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c2c54da9-4434-41f6-a5e4-7988893b20a7_1600w.webp'
        }
      ];

  const totalCount = testimonialsList.length;
  const current = testimonialsList[activeIdx] || testimonialsList[0];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % totalCount);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + totalCount) % totalCount);
  };

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % totalCount);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalCount]);

  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: '#ffffff',
        color: '#0f172a',
        padding: '80px 0',
        borderTop: '2px solid #e2e8f0',
        borderBottom: '2px solid #e2e8f0'
      }}
    >
      {/* Ambient Accent Glows */}
      <div style={{ pointerEvents: 'none', position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            top: '-96px',
            left: '-96px',
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            background: 'rgba(242, 183, 51, 0.2)',
            filter: 'blur(90px)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            right: '-96px',
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            background: 'rgba(0, 6, 72, 0.1)',
            filter: 'blur(90px)'
          }}
        />
      </div>

      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
        {/* Header Row */}
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.78rem',
                color: '#000648',
                background: 'rgba(0, 6, 72, 0.08)',
                border: '1.5px solid rgba(0, 6, 72, 0.15)',
                borderRadius: '50px',
                padding: '6px 16px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.06em'
              }}
            >
              <span style={{ height: '8px', width: '8px', borderRadius: '50%', background: '#f2b733' }} />
              Testimonials
            </div>
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                lineHeight: 1.08,
                fontWeight: 900,
                color: '#000648',
                letterSpacing: '-0.02em',
                marginTop: '16px',
                marginBottom: '12px'
              }}
            >
              What our learners are saying
            </h2>
            <p style={{ color: '#475569', fontSize: '1.05rem', maxWidth: '640px', margin: 0, lineHeight: 1.6 }}>
              Stories from freshers, working professionals, and career switchers who trusted our guides, routes, and placement support.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 700 }}>
              <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '#000648' }}>
                {String(activeIdx + 1).padStart(2, '0')}
              </span>{' '}
              <span style={{ color: '#cbd5e1' }}>/</span>{' '}
              <span style={{ color: '#64748b', fontWeight: 700 }}>
                {String(totalCount).padStart(2, '0')}
              </span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Testimonial"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  border: '2px solid #000648',
                  background: '#000648',
                  color: '#f2b733',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: '0 4px 12px rgba(0,6,72,0.2)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#f2b733';
                  e.currentTarget.style.color = '#000648';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#000648';
                  e.currentTarget.style.color = '#f2b733';
                }}
              >
                <HiArrowLeft size={18} />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Testimonial"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  border: '2px solid #000648',
                  background: '#000648',
                  color: '#f2b733',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: '0 4px 12px rgba(0,6,72,0.2)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#f2b733';
                  e.currentTarget.style.color = '#000648';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#000648';
                  e.currentTarget.style.color = '#f2b733';
                }}
              >
                <HiArrowRight size={18} />
              </button>
            </div>  </div>
          </div>
        </div>

        {/* Current Active Testimonial Slide */}
        <div style={{ marginTop: '48px' }}>
          <article
            key={current.id || activeIdx}
            className="testimonial-slide-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '36px',
              alignItems: 'center'
            }}
          >
            {/* Left Column: Portrait Image */}
            <div className="slide-photo-col" style={{ gridColumn: 'span 5' }}>
              <div
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '1px solid rgba(242, 183, 51, 0.35)',
                  background: '#000648',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                  aspectRatio: '4/5',
                  position: 'relative'
                }}
              >
                <img
                  src={current.image}
                  alt={`Portrait of ${current.name}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>

            {/* Right Column: Quote Details */}
            <div className="slide-content-col" style={{ gridColumn: 'span 7' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <div
                  style={{
                    flexShrink: 0,
                    width: '46px',
                    height: '46px',
                    borderRadius: '14px',
                    background: 'rgba(242, 183, 51, 0.12)',
                    border: '1.5px solid rgba(242, 183, 51, 0.3)',
                    color: '#f2b733',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <FaQuoteLeft size={18} />
                </div>

                <div>
                  <p style={{ fontSize: '0.82rem', color: '#0284c7', fontWeight: 900, margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {current.role || current.afterRole || current.background || 'Learner Outcome'} {current.company ? `@ ${current.company}` : ''}
                  </p>
                  <h3
                    style={{
                      marginTop: '4px',
                      fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                      fontWeight: 900,
                      color: '#000648',
                      letterSpacing: '-0.01em',
                      marginBottom: '16px'
                    }}
                  >
                    {current.name}
                  </h3>
                  <p
                    style={{
                      fontSize: '1.1rem',
                      color: '#1e293b',
                      lineHeight: 1.7,
                      margin: 0,
                      fontWeight: 500
                    }}
                  >
                    “{current.quote || current.story}”
                  </p>

                  <div
                    style={{
                      marginTop: '24px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      borderRadius: '50px',
                      background: 'rgba(0, 6, 72, 0.06)',
                      border: '1.5px solid rgba(0, 6, 72, 0.15)',
                      padding: '8px 18px',
                      fontSize: '0.8rem',
                      color: '#000648',
                      fontWeight: 800
                    }}
                  >
                    <span style={{ height: '8px', width: '8px', borderRadius: '50%', background: '#d97706' }} />
                    <span>
                      {current.course || current.courseSlug ? `Track: ${current.course || current.courseSlug}` : 'Verified EZER Outcome'}
                      {current.salaryHike ? ` • ${current.salaryHike}` : current.beforeRole ? ` • From: ${current.beforeRole}` : ''}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .testimonial-slide-grid {
            grid-template-columns: 1fr !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 24px !important;
          }
          .slide-photo-col, .slide-content-col {
            grid-column: span 12 !important;
            width: 100% !important;
          }
          .slide-photo-col > div {
            max-width: 320px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
