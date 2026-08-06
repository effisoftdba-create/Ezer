import React from 'react';
import { useSiteData } from '../Admin_Control/context/SiteContext';
import { HiBadgeCheck, HiNewspaper, HiCalendar, HiArrowRight, HiSparkles, HiUserGroup, HiAcademicCap } from 'react-icons/hi';
import CTABanner from '../components/CTABanner';

export default function Blog({ onOpenDemoModal }) {
  const { blogs, achievements, executiveLeaders } = useSiteData();

  const leaders = executiveLeaders || [
    {
      id: 'exec-1',
      roleTag: 'CEO',
      roleName: 'Chief Executive Officer',
      name: 'Dr. Subramanian R',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&h=700',
      rotationDeg: -12,
    },
    {
      id: 'exec-2',
      roleTag: 'CFO',
      roleName: 'Chief Financial Officer',
      name: 'Meenakshi Sundaram',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=700',
      rotationDeg: 4,
    },
    {
      id: 'exec-3',
      roleTag: 'CTHM',
      roleName: 'Chief Tech & Academic Officer',
      name: 'Anand Kumar K',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600&h=700',
      rotationDeg: 16,
    }
  ];

  const featuredCoverArticle = (blogs && blogs[0]) || {
    title: 'How Non-IT Professionals Are Transitioning Into AI & Software Development in 2025',
    category: 'Cover Story',
    author: 'EZER Academic Board',
    date: 'August 2025 Edition',
    summary: 'Discover the step-by-step roadmap used by non-tech switchers to master Full Stack AI engineering and land high-growth tech roles.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200'
  };

  const blogList = (blogs || []).slice(1);

  return (
    <div style={{ background: '#0b0f19', color: '#f8fafc', minHeight: '100vh', paddingBottom: '60px' }}>
      {/* Magazine Hero Header */}
      <section style={{
        background: 'radial-gradient(circle at 50% 0%, #1e1b4b 0%, #000648 60%, #060913 100%)',
        color: '#ffffff',
        padding: '56px 20px 48px',
        textAlign: 'center',
        position: 'relative',
        borderBottom: '2px solid rgba(242, 183, 51, 0.3)'
      }}>
        <div className="container" style={{ maxWidth: '1080px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            background: 'rgba(242, 183, 51, 0.18)', color: '#f2b733',
            padding: '6px 20px', borderRadius: '50px', fontWeight: 900,
            fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em',
            marginBottom: '16px', border: '1.5px solid rgba(242, 183, 51, 0.4)',
            boxShadow: '0 0 20px rgba(242, 183, 51, 0.2)'
          }}>
            <HiSparkles size={16} /> EZER TECH MAGAZINE • VOL. 2026 EDITION
          </span>

          <h1 style={{
            fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', fontWeight: 900,
            color: '#ffffff', lineHeight: 1.15, marginBottom: '14px', letterSpacing: '-0.02em'
          }}>
            Leadership, Innovation & Tech Honors
          </h1>

          <p style={{
            fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)',
            maxWidth: '720px', margin: '0 auto 28px', lineHeight: 1.65
          }}>
            Explore verified national awards, executive leadership vision, and editorial insights from EZER Learning Solutions.
          </p>

          {/* EXECUTIVE LEADERSHIP GLASSMORPHISM OVERLAPPING PHOTO CARDS SECTION */}
          <div style={{ marginTop: '36px' }}>
            <span style={{
              fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase',
              letterSpacing: '0.12em', color: '#f2b733', display: 'block', marginBottom: '10px'
            }}>
              ✨ Executive Leadership Board (Hover to Expand)
            </span>

            <div className="exec-glass-container">
              {leaders.slice(0, 3).map((exec, idx) => {
                const rotDeg = exec.rotationDeg !== undefined ? exec.rotationDeg : (-12 + idx * 14);
                const tagLabel = `${exec.roleTag || 'EXEC'} • ${exec.name || 'Leadership'}`;

                return (
                  <div
                    key={exec.id || idx}
                    className="glass"
                    data-text={tagLabel}
                    style={{ '--r': rotDeg }}
                    title={`${exec.roleName || exec.roleTag} — ${exec.name}`}
                  >
                    <img src={exec.image} alt={exec.name || exec.roleTag} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED MAGAZINE COVER ARTICLE */}
      <div className="container" style={{ maxWidth: '1180px', margin: '48px auto 0', padding: '0 20px' }}>
        <div style={{
          background: 'linear-gradient(135deg, #111827 0%, #000648 100%)',
          borderRadius: '24px',
          border: '2px solid rgba(242, 183, 51, 0.4)',
          overflow: 'hidden',
          boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '0',
          marginBottom: '54px'
        }}>
          <div style={{ position: 'relative', minHeight: '360px' }}>
            <img
              src={featuredCoverArticle.image}
              alt={featuredCoverArticle.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <span style={{
              position: 'absolute', top: '20px', left: '20px',
              background: '#f2b733', color: '#000648', fontWeight: 900,
              fontSize: '0.75rem', padding: '6px 16px', borderRadius: '50px',
              textTransform: 'uppercase', letterSpacing: '0.08em'
            }}>
              ★ COVER STORY
            </span>
          </div>

          <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 700, marginBottom: '10px' }}>
              {featuredCoverArticle.date} • By {featuredCoverArticle.author}
            </div>

            <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.3, marginBottom: '16px' }}>
              {featuredCoverArticle.title}
            </h2>

            <p style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: 1.7, marginBottom: '24px' }}>
              {featuredCoverArticle.summary}
            </p>

            <button
              type="button"
              onClick={() => onOpenDemoModal(featuredCoverArticle.title)}
              style={{
                alignSelf: 'flex-start', padding: '12px 26px', borderRadius: '50px',
                background: '#f2b733', color: '#000648', fontWeight: 900, border: 'none',
                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem',
                boxShadow: '0 4px 18px rgba(242, 183, 51, 0.3)'
              }}
            >
              Read Full Cover Story <HiArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* MAGAZINE GRID: LEFT ARTICLES, RIGHT AWARDS & HONORS */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '36px', alignItems: 'start' }}>
          
          {/* COLUMN 1: EDITORIAL ARTICLES */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', borderBottom: '2px solid #1e293b', paddingBottom: '12px' }}>
              <HiNewspaper size={22} color="#f2b733" />
              <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.01em' }}>
                Editorial Tech Articles & Guides
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {(blogList || []).map((blog) => (
                <article
                  key={blog.id}
                  style={{
                    background: '#111827', borderRadius: '18px', border: '1.5px solid #1e293b',
                    padding: '20px', display: 'grid', gridTemplateColumns: '140px 1fr', gap: '18px',
                    transition: 'border-color 0.3s ease, transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#f2b733'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#1e293b'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <div style={{ height: '110px', borderRadius: '12px', overflow: 'hidden', background: '#000' }}>
                    <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <span style={{ fontSize: '0.68rem', fontWeight: 900, color: '#38bdf8', textTransform: 'uppercase' }}>
                        {blog.category || 'Tech Article'}
                      </span>
                      <h4 style={{ fontSize: '1.02rem', fontWeight: 800, color: '#ffffff', margin: '4px 0 6px 0', lineHeight: 1.3 }}>
                        {blog.title}
                      </h4>
                      <p style={{ fontSize: '0.78rem', color: '#94a3b8', margin: 0, lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {blog.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenDemoModal(blog.title)}
                      style={{ background: 'none', border: 'none', color: '#f2b733', fontWeight: 800, fontSize: '0.78rem', cursor: 'pointer', padding: 0, marginTop: '8px', display: 'flex', alignItems: 'center', gap: '4px' }}
                    >
                      Read Article <HiArrowRight size={14} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* COLUMN 2: NATIONAL AWARDS & HONORS */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', borderBottom: '2px solid #1e293b', paddingBottom: '12px' }}>
              <HiBadgeCheck size={22} color="#f2b733" />
              <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.01em' }}>
                National Awards & Achievements
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {(achievements || []).map((ach) => (
                <div
                  key={ach.id}
                  style={{
                    background: '#111827', borderRadius: '18px', border: '1.5px solid #1e293b',
                    overflow: 'hidden', boxShadow: '0 8px 20px rgba(0,0,0,0.3)'
                  }}
                >
                  <div style={{ position: 'relative', height: '140px', background: '#000' }}>
                    <img src={ach.image} alt={ach.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <span style={{ position: 'absolute', top: '10px', right: '10px', background: '#000648', color: '#f2b733', fontSize: '0.7rem', fontWeight: 900, padding: '3px 10px', borderRadius: '50px', border: '1px solid #f2b733' }}>
                      {ach.year}
                    </span>
                  </div>

                  <div style={{ padding: '16px' }}>
                    <span style={{ fontSize: '0.68rem', fontWeight: 900, color: '#f2b733', textTransform: 'uppercase' }}>
                      {ach.category || 'Award'}
                    </span>
                    <h4 style={{ fontSize: '0.98rem', fontWeight: 800, color: '#ffffff', margin: '4px 0', lineHeight: 1.3 }}>
                      {ach.title}
                    </h4>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 700 }}>
                      Issued by: {ach.issuer}
                    </div>
                    <p style={{ fontSize: '0.78rem', color: '#cbd5e1', marginTop: '8px', lineHeight: 1.5, margin: '8px 0 0 0' }}>
                      {ach.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '72px' }}>
        <CTABanner onOpenDemoModal={onOpenDemoModal} />
      </div>

      {/* GLASSMORPHISM STYLES AS SPECIFIED BY USER */}
      <style>{`
        .exec-glass-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 32px 0 20px;
        }

        .exec-glass-container .glass {
          position: relative;
          width: 180px;
          height: 210px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 25px 25px rgba(0, 0, 0, 0.35);
          display: flex;
          justify-content: center;
          align-items: center;
          transition: transform 0.5s ease, margin 0.5s ease, border-color 0.3s ease;
          border-radius: 12px;
          margin: 0 -38px;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          transform: rotate(calc(var(--r) * 1deg));
          overflow: hidden;
        }

        .exec-glass-container:hover .glass {
          transform: rotate(0deg);
          margin: 0 10px;
        }

        .exec-glass-container .glass img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .exec-glass-container .glass::before {
          content: attr(data-text);
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          min-height: 42px;
          background: rgba(0, 6, 72, 0.88);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          justify-content: center;
          align-items: center;
          color: #ffffff;
          font-weight: 800;
          font-size: 0.72rem;
          text-align: center;
          padding: 4px 6px;
          z-index: 5;
          border-top: 1.5px solid rgba(242, 183, 51, 0.5);
        }

        @media (max-width: 768px) {
          .exec-glass-container .glass {
            width: 130px;
            height: 160px;
            margin: 0 -20px;
          }
        }
      `}</style>
    </div>
  );
}
