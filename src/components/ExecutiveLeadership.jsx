import React from 'react';
import { useSiteData } from '../Admin_Control/context/SiteContext';
import { HiSparkles, HiUserGroup, HiBadgeCheck } from 'react-icons/hi';

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
          rotationDeg: -12,
          bio: 'Visionary Leader driving native language tech education, corporate placement partnerships, and pan-India growth.'
        },
        {
          id: 'exec-2',
          roleTag: 'CFO',
          roleName: 'Chief Financial Officer',
          name: 'Meenakshi Sundaram',
          image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=700',
          rotationDeg: 4,
          bio: 'Strategic Financial Lead overseeing student scholarship funds, affordable fee structures, and enterprise scalability.'
        },
        {
          id: 'exec-3',
          roleTag: 'CTHM',
          roleName: 'Chief Tech & Academic Officer',
          name: 'Anand Kumar K',
          image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600&h=700',
          rotationDeg: 16,
          bio: 'Pioneer of AI-integrated lab curriculums, hands-on production capstones, and corporate readiness standards.'
        }
      ];

  return (
    <section
      style={{
        position: 'relative',
        background: 'radial-gradient(circle at 50% 0%, #1e1b4b 0%, #000648 60%, #050b1c 100%)',
        color: '#ffffff',
        padding: '72px 20px',
        borderTop: '2px solid rgba(242, 183, 51, 0.3)',
        borderBottom: '2px solid rgba(242, 183, 51, 0.3)',
        overflow: 'hidden'
      }}
    >
      {/* Background Glows */}
      <div style={{ pointerEvents: 'none', position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', left: '10%', width: '350px', height: '350px', borderRadius: '50%', background: 'rgba(242, 183, 51, 0.12)', filter: 'blur(110px)' }} />
        <div style={{ position: 'absolute', bottom: '-100px', right: '10%', width: '350px', height: '350px', borderRadius: '50%', background: 'rgba(17, 93, 252, 0.15)', filter: 'blur(110px)' }} />
      </div>

      <div className="container" style={{ maxWidth: '1140px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Header Title */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(242, 183, 51, 0.18)',
              color: '#f2b733',
              padding: '6px 20px',
              borderRadius: '50px',
              fontWeight: 900,
              fontSize: '0.78rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '14px',
              border: '1.5px solid rgba(242, 183, 51, 0.4)',
              boxShadow: '0 0 20px rgba(242, 183, 51, 0.2)'
            }}
          >
            <HiSparkles size={16} /> EXECUTIVE LEADERSHIP BOARD
          </span>

          <h2
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1.15,
              marginBottom: '12px',
              letterSpacing: '-0.02em'
            }}
          >
            Guided by Corporate Visionaries & EdTech Pioneers
          </h2>

          <p
            style={{
              fontSize: '1.02rem',
              color: 'rgba(255,255,255,0.82)',
              maxWidth: '720px',
              margin: '0 auto',
              lineHeight: 1.65
            }}
          >
            Our executive board brings decades of technology leadership, corporate partnerships, and native-language education models to empower every learner.
          </p>
        </div>

        {/* 3 OVERLAPPING GLASSMORPHISM EXECUTIVE PHOTO CARDS (CEO, CFO, CTHM) */}
        <div style={{ margin: '20px 0 48px' }}>
          <div className="exec-glass-container">
            {leaders.slice(0, 3).map((exec, idx) => {
              const rotDeg = exec.rotationDeg !== undefined ? exec.rotationDeg : (-12 + idx * 14);
              const tagLabel = `${exec.roleTag || 'EXEC'} • ${exec.name || 'Leadership'}`;

              return (
                <div
                  key={exec.id || exec.roleTag || exec.name}
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
          <span style={{ display: 'block', textAlign: 'center', fontSize: '0.78rem', color: '#f2b733', fontWeight: 800, marginTop: '12px' }}>
            ★ Hover over cards to expand Executive Board
          </span>
        </div>

        {/* EXECUTIVE DETAILS GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {leaders.slice(0, 3).map((exec) => (
            <div
              key={exec.id || exec.roleTag}
              style={{
                background: 'rgba(17, 24, 39, 0.8)',
                backdropFilter: 'blur(12px)',
                border: '1.5px solid rgba(242, 183, 51, 0.3)',
                borderRadius: '20px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                boxShadow: '0 12px 32px rgba(0,0,0,0.3)',
                transition: 'transform 0.3s ease, border-color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#f2b733';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(242, 183, 51, 0.3)';
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{
                    background: '#000648', color: '#f2b733', fontWeight: 900, fontSize: '0.75rem',
                    padding: '4px 14px', borderRadius: '50px', border: '1.5px solid #f2b733'
                  }}>
                    {exec.roleTag || 'EXEC'}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <HiBadgeCheck color="#f2b733" size={16} /> Board Director
                  </span>
                </div>

                <h3 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#ffffff', margin: '0 0 4px 0' }}>
                  {exec.name}
                </h3>
                <div style={{ fontSize: '0.84rem', fontWeight: 800, color: '#38bdf8', marginBottom: '12px' }}>
                  {exec.roleName}
                </div>

                <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.6, margin: 0 }}>
                  {exec.bio || 'Driving vision, academic quality, and placement metrics for EZER Learning Solutions.'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* USER REQUESTED GLASSMORPHISM CSS */}
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
          height: 220px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.05) 100%);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 25px 25px rgba(0, 0, 0, 0.35);
          display: flex;
          justify-content: center;
          align-items: center;
          transition: transform 0.5s ease, margin 0.5s ease, border-color 0.3s ease;
          border-radius: 14px;
          margin: 0 -45px;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          transform: rotate(calc(var(--r) * 1deg));
          overflow: hidden;
          cursor: pointer;
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
          min-height: 44px;
          background: rgba(0, 6, 72, 0.9);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          justify-content: center;
          align-items: center;
          color: #ffffff;
          font-weight: 900;
          font-size: 0.74rem;
          text-align: center;
          padding: 4px 8px;
          z-index: 5;
          border-top: 1.5px solid rgba(242, 183, 51, 0.5);
        }

        @media (max-width: 768px) {
          .exec-glass-container .glass {
            width: 135px;
            height: 165px;
            margin: 0 -24px;
          }
        }
      `}</style>
    </section>
  );
}
