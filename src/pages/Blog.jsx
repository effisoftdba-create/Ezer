import React from 'react';
import { useSiteData } from '../Admin_Control/context/SiteContext';
import { HiBadgeCheck, HiNewspaper, HiCalendar, HiArrowRight, HiSparkles } from 'react-icons/hi';
import CTABanner from '../components/CTABanner';

export default function Blog({ onOpenDemoModal }) {
  const { blogs, achievements } = useSiteData();

  // Combine blogs and achievements into a single showcase stream
  const allItems = [
    ...(achievements || []).map((item) => ({
      id: `ach-${item.id}`,
      type: 'achievement',
      title: item.title,
      badge: item.category || 'Achievement & Award',
      meta: `Issued by: ${item.issuer} • ${item.year}`,
      summary: item.description,
      image: item.image,
      year: item.year,
      icon: <HiBadgeCheck size={18} />
    })),
    ...(blogs || []).map((item) => ({
      id: `blog-${item.id}`,
      type: 'blog',
      title: item.title,
      badge: item.category || 'Tech Article',
      meta: `${item.date} • ${item.author}`,
      summary: item.summary,
      content: item.content,
      image: item.image,
      icon: <HiNewspaper size={18} />
    }))
  ];

  return (
    <div style={{ background: '#faf9f6', minHeight: '100vh', paddingBottom: '60px' }}>
      {/* Hero Header */}
      <section style={{ background: 'linear-gradient(135deg, #000648 0%, #00127a 100%)', color: '#ffffff', padding: '64px 20px 54px', textAlign: 'center', position: 'relative', overflow: 'hidden', borderBottom: '3px solid #f2b733' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(242, 183, 51, 0.18)', color: '#f2b733', padding: '6px 18px', borderRadius: '50px', fontWeight: 800, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px', border: '1.5px solid rgba(242, 183, 51, 0.4)' }}>
            <HiSparkles size={16} /> EZER Showcase Gallery
          </span>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.2, marginBottom: '14px' }}>
            Achievements, Awards & Tech Insights
          </h1>

          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', maxWidth: '720px', margin: '0 auto', lineHeight: 1.65 }}>
            Explore verified national awards, industry honors, and expert tech articles published by EZER Learning Solutions.
          </p>
        </div>
      </section>

      {/* Main Single Stream - Zig Zag Layout */}
      <div className="container" style={{ maxWidth: '1140px', margin: '54px auto 0', padding: '0 20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {allItems.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <article
                key={item.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  alignItems: 'stretch',
                  background: '#ffffff',
                  borderRadius: '24px',
                  border: '2px solid #000648',
                  boxShadow: '0 12px 36px rgba(0, 6, 72, 0.08)',
                  overflow: 'hidden',
                  transition: 'transform 0.35s ease, box-shadow 0.35s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 45px rgba(0, 6, 72, 0.16)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 12px 36px rgba(0, 6, 72, 0.08)';
                }}
              >
                {/* Image Box - Alternates Left (even) / Right (odd) */}
                <div
                  style={{
                    order: isEven ? 1 : 2,
                    position: 'relative',
                    minHeight: '280px',
                    maxHeight: '360px',
                    overflow: 'hidden',
                    background: '#000648',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      transition: 'transform 0.5s ease',
                    }}
                  />
                  {/* Category Pill Badge */}
                  <span
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      background: '#000648',
                      color: '#f2b733',
                      fontWeight: 900,
                      fontSize: '0.72rem',
                      padding: '5px 14px',
                      borderRadius: '50px',
                      border: '1.5px solid #f2b733',
                      boxShadow: '0 4px 14px rgba(0, 6, 72, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {item.icon}
                    {item.badge}
                  </span>
                </div>

                {/* Content Details Box - Alternates Right (even) / Left (odd) */}
                <div
                  style={{
                    order: isEven ? 2 : 1,
                    padding: 'clamp(24px, 4vw, 40px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    background: '#ffffff',
                  }}
                >
                  <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 700, marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <HiCalendar size={15} color="#000648" />
                    {item.meta}
                  </div>

                  <h2 style={{ fontSize: 'clamp(1.25rem, 2.2vw, 1.65rem)', fontWeight: 900, color: '#000648', lineHeight: 1.35, marginBottom: '14px' }}>
                    {item.title}
                  </h2>

                  <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.7, marginBottom: '24px' }}>
                    {item.summary}
                  </p>

                  <button
                    type="button"
                    onClick={() => onOpenDemoModal(item.title)}
                    style={{
                      alignSelf: 'flex-start',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: '#000648',
                      color: '#f2b733',
                      fontWeight: 800,
                      fontSize: '0.84rem',
                      padding: '10px 22px',
                      borderRadius: '50px',
                      border: '1.5px solid #f2b733',
                      cursor: 'pointer',
                      boxShadow: '0 4px 14px rgba(0, 6, 72, 0.18)',
                      transition: 'transform 0.2s ease, background-color 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.04)';
                      e.currentTarget.style.background = '#f2b733';
                      e.currentTarget.style.color = '#000648';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.background = '#000648';
                      e.currentTarget.style.color = '#f2b733';
                    }}
                  >
                    <span>{item.type === 'achievement' ? 'View Award Details' : 'Read Article'}</span>
                    <HiArrowRight size={16} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div style={{ marginTop: '72px' }}>
        <CTABanner onOpenDemoModal={onOpenDemoModal} />
      </div>

      <style>{`
        @media (max-width: 768px) {
          article {
            grid-template-columns: 1fr !important;
            display: flex !important;
            flex-direction: column !important;
          }
          article > div:first-child {
            order: 1 !important;
            min-height: 220px !important;
          }
          article > div:last-child {
            order: 2 !important;
          }
        }
      `}</style>
    </div>
  );
}
