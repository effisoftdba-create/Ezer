import React from 'react';
import { motion } from 'framer-motion';
import { useSiteData } from '../Admin_Control/context/SiteContext';
import { HiBadgeCheck } from 'react-icons/hi';
import { resolveImageSrc, handleImgError } from '../utils/imageUtils';

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
          bio: 'Visionary Leader driving native language tech education and corporate placement partnerships.'
        },
        {
          id: 'exec-2',
          roleTag: 'CFO',
          roleName: 'Chief Financial Officer',
          name: 'Meenakshi Sundaram',
          image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=700',
          bio: 'Strategic Financial Lead overseeing student scholarship funds and affordable learning models.'
        },
        {
          id: 'exec-3',
          roleTag: 'CMTO',
          roleName: 'Chief Tech & Academic Officer',
          name: 'Anand Kumar K',
          image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600&h=700',
          bio: 'Pioneer of AI-integrated lab curriculums and corporate technical readiness standards.'
        }
      ];

  return (
    <section
      style={{
        position: 'relative',
        background: 'radial-gradient(circle at 50% 0%, #1e1b4b 0%, #000648 60%, #030712 100%)',
        color: '#ffffff',
        padding: '64px 20px',
        borderTop: '2px solid rgba(242, 183, 51, 0.3)',
        borderBottom: '2px solid rgba(242, 183, 51, 0.3)',
        overflow: 'visible'
      }}
    >
      <style>{`
        .ezer-3d-card {
          overflow: visible;
          position: relative;
          width: 100%;
          max-width: 320px;
          height: 380px;
          background: #000648;
          border-radius: 24px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
          margin: 0 auto;
          border: 2.5px solid #f2b733;
          transition: transform 0.4s ease, border-color 0.4s ease;
        }

        .ezer-3d-card:before,
        .ezer-3d-card:after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 24px;
          background: #000a5e;
          border: 2px solid rgba(242, 183, 51, 0.4);
          transition: 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: -1;
        }

        .ezer-3d-card:hover {
          transform: translateY(-6px);
        }

        .ezer-3d-card:hover:before {
          transform: rotate(12deg);
          background: #000d78;
        }

        .ezer-3d-card:hover:after {
          transform: rotate(6deg);
          box-shadow: 0 2px 25px rgba(242, 183, 51, 0.3);
        }

        .ezer-3d-card .role-badge-top {
          position: absolute;
          right: 1rem;
          top: 1rem;
          background: #000648;
          border: 1.5px solid #f2b733;
          color: #f2b733;
          font-weight: 900;
          font-size: 0.72rem;
          padding: 4px 12px;
          border-radius: 50px;
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 4px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.4);
        }

        .ezer-3d-card .imgbox {
          position: absolute;
          top: 10px;
          left: 10px;
          bottom: 10px;
          right: 10px;
          background: #000648;
          border-radius: 18px;
          transition: 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 1;
          overflow: hidden;
          border: 1.5px solid rgba(242, 183, 51, 0.3);
        }

        .ezer-3d-card .imgbox img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          transition: transform 0.5s ease;
        }

        .ezer-3d-card:hover .imgbox {
          bottom: 100px;
        }

        .ezer-3d-card .details {
          position: absolute;
          left: 12px;
          right: 12px;
          bottom: 10px;
          height: 80px;
          text-align: center;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .ezer-3d-card .details .title {
          font-weight: 900;
          font-size: 1.25rem;
          color: #ffffff;
          margin: 0;
          line-height: 1.15;
          text-shadow: 0 2px 8px rgba(0,0,0,0.6);
        }

        .ezer-3d-card .details .caption {
          font-weight: 800;
          font-size: 0.76rem;
          color: #f2b733;
          display: block;
          margin-top: 3px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .ezer-3d-card .details .bio-text {
          font-size: 0.74rem;
          color: #cbd5e1;
          margin-top: 4px;
          line-height: 1.3;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      {/* Ambient Background Glows */}
      <div style={{ pointerEvents: 'none', position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', left: '15%', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(242, 183, 51, 0.14)', filter: 'blur(120px)' }} />
        <div style={{ position: 'absolute', bottom: '-100px', right: '15%', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(17, 93, 252, 0.18)', filter: 'blur(120px)' }} />
      </div>

      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'rgba(242, 183, 51, 0.15)',
              color: '#f2b733',
              padding: '6px 20px',
              borderRadius: '50px',
              fontWeight: 900,
              fontSize: '0.78rem',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              marginBottom: '12px',
              border: '1.5px solid #f2b733',
              boxShadow: '0 0 24px rgba(242, 183, 51, 0.25)'
            }}
          >
            EXECUTIVE LEADERSHIP BOARD
          </span>

          <h2
            style={{
              fontSize: 'clamp(1.8rem, 3.6vw, 3rem)',
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1.15,
              marginBottom: '10px',
              letterSpacing: '-0.02em'
            }}
          >
            Guided by Corporate Visionaries & EdTech Pioneers
          </h2>

          <p
            style={{
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.85)',
              maxWidth: '740px',
              margin: '0 auto',
              lineHeight: 1.6
            }}
          >
            Our executive board brings decades of technology leadership, corporate partnerships, and native-language education models to empower every learner.
          </p>
        </div>

        {/* 3 Executive Leader Cards Grid with User 3D Stack Rotating Effect & EZER Colors */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: '40px', width: '100%', padding: '20px 0' }}>
          {leaders.map((leader, idx) => (
            <motion.div
              key={leader.id || leader.roleTag || idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="ezer-3d-card"
            >
              {/* Role Badge Top */}
              <span className="role-badge-top">
                <HiBadgeCheck size={14} /> {leader.roleTag || 'DIRECTOR'}
              </span>

              {/* Photo Box container */}
              <div className="imgbox">
                <img src={resolveImageSrc(leader.image)} alt={leader.name} onError={handleImgError} />
              </div>

              {/* Details Text Box */}
              <div className="details">
                <h3 className="title">{leader.name}</h3>
                <span className="caption">{leader.roleName || leader.roleTag}</span>
                <p className="bio-text">{leader.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
