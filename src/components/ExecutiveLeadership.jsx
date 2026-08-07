import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSiteData } from '../Admin_Control/context/SiteContext';
import { HiBadgeCheck } from 'react-icons/hi';
import { resolveImageSrc } from '../utils/imageUtils';

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
          roleTag: 'CMTO',
          roleName: 'Chief Tech & Academic Officer',
          name: 'Anand Kumar K',
          image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600&h=700',
          bio: 'Pioneer of AI-integrated lab curriculums, hands-on production capstones, and corporate readiness standards.'
        }
      ];

  const [hoveredId, setHoveredId] = useState(null);

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
      <style>{`
        .exec-card-wrapper {
          width: 100%;
          max-width: 360px;
          height: 480px;
          border-radius: 28px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 16px 40px rgba(0, 6, 72, 0.35);
          border: 2.5px solid #000648;
          transition: border-color 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
          margin: 0 auto;
          background: #000648;
        }

        .exec-card-wrapper:hover {
          border-color: #f2b733;
          transform: translateY(-8px);
          box-shadow: 0 24px 50px rgba(242, 183, 51, 0.22);
        }

        .exec-card-wrapper .portrait-photo-container {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .exec-card-wrapper .portrait-photo-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .exec-card-wrapper:hover .portrait-photo-container img {
          transform: scale(1.06);
        }

        .exec-card-wrapper .role-badge-top {
          position: absolute;
          right: 1.2rem;
          top: 1.2rem;
          background: #000648;
          border: 1.5px solid #f2b733;
          color: #f2b733;
          font-weight: 900;
          font-size: 0.75rem;
          padding: 6px 16px;
          border-radius: 50px;
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 4px 14px rgba(0,0,0,0.4);
        }

        /* Bottom Drawer Card Bar */
        .exec-card-wrapper .bottom-info-drawer {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 5;
          background: linear-gradient(180deg, rgba(0, 6, 72, 0.2) 0%, rgba(0, 6, 72, 0.92) 30%, #000648 100%);
          backdrop-filter: blur(8px);
          border-top: 2.5px solid #f2b733;
          padding: 24px 22px;
          transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .exec-card-wrapper:hover .bottom-info-drawer {
          background: linear-gradient(180deg, rgba(0, 6, 72, 0.88) 0%, #000648 100%);
        }

        .exec-card-wrapper .bottom-info-drawer .name-title {
          font-size: 1.38rem;
          font-weight: 900;
          color: #ffffff;
          line-height: 1.25;
          margin: 0 0 4px 0;
          display: block;
          letter-spacing: -0.01em;
          text-shadow: 0 2px 8px rgba(0,0,0,0.5);
        }

        .exec-card-wrapper .bottom-info-drawer .role-name-tag {
          font-size: 0.82rem;
          font-weight: 900;
          color: #f2b733;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          display: block;
          margin-bottom: 8px;
        }

        .exec-card-wrapper .bottom-info-drawer .bio-description {
          font-size: 0.88rem;
          color: #e2e8f0;
          line-height: 1.55;
          margin: 0;
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height 0.45s ease, opacity 0.4s ease, margin-top 0.4s ease;
        }

        .exec-card-wrapper:hover .bottom-info-drawer .bio-description,
        .exec-card-wrapper.is-open .bottom-info-drawer .bio-description {
          max-height: 120px;
          opacity: 1;
          margin-top: 10px;
        }

        .exec-card-wrapper .bottom-info-drawer .directorate-badge {
          margin-top: 12px;
          padding-top: 10px;
          border-top: 1px solid rgba(242, 183, 51, 0.3);
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.76rem;
          color: #f2b733;
          font-weight: 900;
        }
      `}</style>

      {/* Ambient Background Glows */}
      <div style={{ pointerEvents: 'none', position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', left: '15%', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(242, 183, 51, 0.14)', filter: 'blur(120px)' }} />
        <div style={{ position: 'absolute', bottom: '-100px', right: '15%', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(17, 93, 252, 0.18)', filter: 'blur(120px)' }} />
      </div>

      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'rgba(242, 183, 51, 0.15)',
              color: '#f2b733',
              padding: '8px 24px',
              borderRadius: '50px',
              fontWeight: 900,
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              marginBottom: '16px',
              border: '1.5px solid #f2b733',
              boxShadow: '0 0 24px rgba(242, 183, 51, 0.25)'
            }}
          >
            EXECUTIVE LEADERSHIP BOARD
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

        {/* 3 Executive Leader Cards Grid with Full Cover Photo & Highlighted Name & Role */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: '32px', width: '100%' }}>
          {leaders.map((leader, idx) => {
            const cardId = leader.id || leader.roleTag || `exec-${idx}`;
            const isHovered = hoveredId === cardId;

            return (
              <motion.div
                key={cardId}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className={`exec-card-wrapper ${isHovered ? 'is-open' : ''}`}
                onMouseEnter={() => setHoveredId(cardId)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Top Role Badge */}
                <span className="role-badge-top">
                  <HiBadgeCheck size={15} /> {leader.roleTag || 'DIRECTOR'}
                </span>

                {/* Full Portrait Cover Photo */}
                <div className="portrait-photo-container">
                  <img src={resolveImageSrc(leader.image)} alt={leader.name} />
                </div>

                {/* Always-Visible Bottom Info Drawer */}
                <div className="bottom-info-drawer">
                  <span className="name-title">{leader.name}</span>
                  <span className="role-name-tag">{leader.roleName || leader.roleTag}</span>

                  <p className="bio-description">{leader.bio}</p>

                  <div className="directorate-badge">
                    <HiBadgeCheck size={15} /> EZER Corporate Directorate
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
