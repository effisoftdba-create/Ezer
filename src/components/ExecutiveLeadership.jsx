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

  const top3Leaders = leaders.slice(0, 3);

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
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
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

        {/* 3D ROTATING CAROUSEL CONTAINER */}
        <div className="card-3d-stage">
          <div className="card-3d">
            {top3Leaders.map((exec, idx) => (
              <div
                key={exec.id || exec.roleTag || idx}
                className="exec-3d-card-item"
              >
                {/* Image Frame */}
                <div className="exec-3d-img-box">
                  <img src={exec.image} alt={exec.name || exec.roleTag} />
                  <span className="exec-3d-tag">
                    <HiBadgeCheck size={14} /> {exec.roleTag || 'EXEC'}
                  </span>
                </div>

                {/* Card Content */}
                <div className="exec-3d-body">
                  <h3 className="exec-3d-name">{exec.name}</h3>
                  <div className="exec-3d-role">{exec.roleName || exec.roleTag}</div>
                  <p className="exec-3d-bio">{exec.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 3D Carousel & Responsive Animation Styles */}
      <style>{`
        @keyframes autoRun3d {
          from {
            transform: perspective(800px) rotateY(-360deg);
          }
          to {
            transform: perspective(800px) rotateY(0deg);
          }
        }

        @keyframes animateBrightness {
          0%, 100% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(0.85);
          }
        }

        .card-3d-stage {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 480px;
          perspective: 1000px;
          padding: 20px 0;
        }

        .card-3d {
          position: relative;
          width: 320px;
          height: 420px;
          transform-style: preserve-3d;
          transform: perspective(800px);
          animation: autoRun3d 20s linear infinite;
          will-change: transform;
        }

        .card-3d div.exec-3d-card-item {
          position: absolute;
          width: 300px;
          height: 410px;
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: solid 2.5px #f2b733;
          border-radius: 24px;
          top: 50%;
          left: 50%;
          transform-origin: center center;
          animation: animateBrightness 20s linear infinite;
          transition: transform 0.3s ease, border-color 0.3s ease;
          will-change: transform, filter;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
          display: flex;
          flex-direction: column;
        }

        .card-3d:hover,
        .card-3d:hover div.exec-3d-card-item {
          animation-play-state: paused !important;
        }

        .card-3d div.exec-3d-card-item:nth-child(1) {
          transform: translate(-50%, -50%) rotateY(0deg) translateZ(300px);
          animation-delay: -0s;
        }

        .card-3d div.exec-3d-card-item:nth-child(2) {
          transform: translate(-50%, -50%) rotateY(120deg) translateZ(300px);
          animation-delay: -6.66s;
        }

        .card-3d div.exec-3d-card-item:nth-child(3) {
          transform: translate(-50%, -50%) rotateY(240deg) translateZ(300px);
          animation-delay: -13.33s;
        }

        .exec-3d-img-box {
          position: relative;
          width: 100%;
          height: 230px;
          background: #000;
          overflow: hidden;
        }

        .exec-3d-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }

        .exec-3d-tag {
          position: absolute;
          top: 14px;
          right: 14px;
          background: #000648;
          color: #f2b733;
          font-size: 0.75rem;
          font-weight: 900;
          padding: 5px 14px;
          border-radius: 50px;
          border: 1.5px solid #f2b733;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.5);
        }

        .exec-3d-body {
          padding: 18px 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex-grow: 1;
          background: rgba(15, 23, 42, 0.98);
        }

        .exec-3d-name {
          font-size: 1.2rem;
          font-weight: 900;
          color: #ffffff;
          margin: 0 0 2px 0;
        }

        .exec-3d-role {
          font-size: 0.8rem;
          font-weight: 800;
          color: #f2b733;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 8px;
        }

        .exec-3d-bio {
          font-size: 0.82rem;
          color: #cbd5e1;
          line-height: 1.5;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* MOBILE RESPONSIVE DISPLAY (Stack 1 by 1) */
        @media (max-width: 768px) {
          .card-3d-stage {
            min-height: auto;
            perspective: none;
          }

          .card-3d {
            animation: none !important;
            transform: none !important;
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
            gap: 24px;
          }

          .card-3d div.exec-3d-card-item {
            position: relative !important;
            top: auto !important;
            left: auto !important;
            transform: none !important;
            animation: none !important;
            width: 100% !important;
            height: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
