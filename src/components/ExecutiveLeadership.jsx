import React from 'react';
import { useSiteData } from '../Admin_Control/context/SiteContext';
import { HiSparkles, HiBadgeCheck } from 'react-icons/hi';

export default function ExecutiveLeadership() {
  const { executiveLeaders } = useSiteData();

  const leaders = (executiveLeaders && executiveLeaders.length > 0)
    ? executiveLeaders
    : [
        {
          id: 'exec-1',
          roleTag: 'CEO',
          roleName: 'Chief Executive Officer',
          name: 'Dr. Subramanian R',
          image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&h=700',
          bio: 'Visionary Leader driving native language tech education, corporate placement partnerships, and pan-India growth.'
        },
        {
          id: 'exec-2',
          roleTag: 'CFO',
          roleName: 'Chief Financial Officer',
          name: 'Meenakshi Sundaram',
          image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=700',
          bio: 'Strategic Financial Lead overseeing student scholarship funds, affordable fee structures, and enterprise scalability.'
        },
        {
          id: 'exec-3',
          roleTag: 'CTHM',
          roleName: 'Chief Tech & Academic Officer',
          name: 'Anand Kumar K',
          image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600&h=700',
          bio: 'Pioneer of AI-integrated lab curriculums, hands-on production capstones, and corporate readiness standards.'
        }
      ];

  return (
    <section
      style={{
        position: 'relative',
        background: 'radial-gradient(circle at 50% 0%, #1e1b4b 0%, #000648 60%, #030712 100%)',
        color: '#ffffff',
        padding: '80px 20px',
        borderTop: '2px solid rgba(242, 183, 51, 0.3)',
        borderBottom: '2px solid rgba(242, 183, 51, 0.3)',
        overflow: 'hidden'
      }}
    >
      {/* Ambient Glows */}
      <div style={{ pointerEvents: 'none', position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', left: '15%', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(242, 183, 51, 0.14)', filter: 'blur(120px)' }} />
        <div style={{ position: 'absolute', bottom: '-100px', right: '15%', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(17, 93, 252, 0.18)', filter: 'blur(120px)' }} />
      </div>

      <div className="container" style={{ maxWidth: '1180px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(242, 183, 51, 0.15)',
              color: '#f2b733',
              padding: '6px 22px',
              borderRadius: '50px',
              fontWeight: 900,
              fontSize: '0.78rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '16px',
              border: '1.5px solid rgba(242, 183, 51, 0.4)',
              boxShadow: '0 0 24px rgba(242, 183, 51, 0.25)'
            }}
          >
            <HiSparkles size={16} /> EXECUTIVE LEADERSHIP BOARD
          </span>

          <h2
            style={{
              fontSize: 'clamp(2.1rem, 4vw, 3.4rem)',
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1.15,
              marginBottom: '14px',
              letterSpacing: '-0.02em'
            }}
          >
            Guided by Corporate Visionaries & EdTech Pioneers
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: 'rgba(255,255,255,0.85)',
              maxWidth: '740px',
              margin: '0 auto',
              lineHeight: 1.65
            }}
          >
            Our executive board brings decades of technology leadership, corporate partnerships, and native-language education models to empower every learner.
          </p>
        </div>

        {/* BIG & DETAILED STYLISH EXECUTIVE CARDS (1-by-1 on Mobile) */}
        <div className="executive-board-grid">
          {leaders.slice(0, 3).map((exec) => (
            <div
              key={exec.id || exec.roleTag || exec.name}
              className="executive-stylish-card"
            >
              {/* Image Frame with Gradient Overlay */}
              <div className="exec-image-wrapper">
                <img src={exec.image} alt={exec.name || exec.roleTag} />
                <div className="exec-image-overlay" />
                
                <span className="exec-role-pill">
                  <HiBadgeCheck size={16} /> {exec.roleTag || 'EXEC'}
                </span>
              </div>

              {/* Executive Details Body */}
              <div className="exec-card-body">
                <h3 className="exec-name">{exec.name}</h3>
                <div className="exec-title">{exec.roleName || exec.roleTag}</div>
                <p className="exec-bio">{exec.bio}</p>

                <div className="exec-footer-badge">
                  <HiSparkles color="#f2b733" size={14} /> EZER Corporate Directorate
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scoped Stylish & Responsive CSS */}
      <style>{`
        .executive-board-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
          align-items: stretch;
        }

        .executive-stylish-card {
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid rgba(242, 183, 51, 0.35);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
          transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
          display: flex;
          flex-direction: column;
        }

        .executive-stylish-card:hover {
          transform: translateY(-8px);
          border-color: #f2b733;
          box-shadow: 0 24px 50px rgba(242, 183, 51, 0.25);
        }

        .exec-image-wrapper {
          position: relative;
          width: 100%;
          height: 320px;
          overflow: hidden;
          background: #000;
        }

        .exec-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          transition: transform 0.5s ease;
        }

        .executive-stylish-card:hover .exec-image-wrapper img {
          transform: scale(1.05);
        }

        .exec-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(15, 23, 42, 1) 0%, rgba(15, 23, 42, 0.2) 60%, transparent 100%);
        }

        .exec-role-pill {
          position: absolute;
          top: 16px;
          right: 16px;
          background: #000648;
          color: #f2b733;
          font-size: 0.78rem;
          font-weight: 900;
          padding: 6px 14px;
          border-radius: 50px;
          border: 1.5px solid #f2b733;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.5);
          z-index: 5;
        }

        .exec-card-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          justify-content: space-between;
        }

        .exec-name {
          font-size: 1.35rem;
          font-weight: 900;
          color: #ffffff;
          margin: 0 0 4px 0;
          line-height: 1.25;
        }

        .exec-title {
          font-size: 0.85rem;
          font-weight: 800;
          color: #f2b733;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 14px;
        }

        .exec-bio {
          font-size: 0.88rem;
          color: #cbd5e1;
          line-height: 1.6;
          margin: 0 0 20px 0;
        }

        .exec-footer-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          font-weight: 800;
          color: #94a3b8;
          padding-top: 14px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* MOBILE VIEW: Photos come ONE BY ONE (stacked 100% width) */
        @media (max-width: 768px) {
          .executive-board-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .exec-image-wrapper {
            height: 280px;
          }
        }
      `}</style>
    </section>
  );
}
