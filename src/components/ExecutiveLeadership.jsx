import React from 'react';
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

  return (
    <section
      style={{
        position: 'relative',
        background: 'radial-gradient(circle at 50% 0%, #1e1b4b 0%, #000648 60%, #030712 100%)',
        color: '#ffffff',
        padding: '72px 20px',
        borderTop: '2px solid rgba(242, 183, 51, 0.3)',
        borderBottom: '2px solid rgba(242, 183, 51, 0.3)',
        overflow: 'hidden'
      }}
    >
      <style>{`
        .exec-card {
          width: 100%;
          max-width: 360px;
          height: 440px;
          background: #ffffff;
          border-radius: 32px;
          padding: 3px;
          position: relative;
          box-shadow: rgba(0, 6, 72, 0.4) 0px 30px 40px -20px;
          transition: all 0.5s ease-in-out;
          border: 2px solid #000648;
          margin: 0 auto;
        }

        .exec-card .role-badge-top {
          position: absolute;
          right: 1.2rem;
          top: 1.2rem;
          background: #000648;
          border: 1.5px solid #f2b733;
          color: #f2b733;
          font-weight: 900;
          font-size: 0.75rem;
          padding: 5px 14px;
          border-radius: 50px;
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        }

        .exec-card .profile-pic {
          position: absolute;
          width: calc(100% - 6px);
          height: calc(100% - 6px);
          top: 3px;
          left: 3px;
          border-radius: 29px;
          z-index: 1;
          border: 0px solid #f2b733;
          overflow: hidden;
          transition: all 0.5s ease-in-out 0.2s, z-index 0.5s ease-in-out 0.2s;
        }

        .exec-card .profile-pic img {
          object-fit: cover;
          width: 100%;
          height: 100%;
          object-position: center top;
          transition: all 0.5s ease-in-out 0s;
        }

        .exec-card .bottom {
          position: absolute;
          bottom: 3px;
          left: 3px;
          right: 3px;
          background: #000648;
          top: 70%;
          border-radius: 29px;
          z-index: 2;
          border-top: 2px solid #f2b733;
          box-shadow: rgba(0, 6, 72, 0.4) 0px 5px 15px 0px inset;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
          padding: 16px 20px;
        }

        .exec-card .bottom .content {
          position: absolute;
          bottom: 1.2rem;
          left: 1.5rem;
          right: 1.5rem;
          height: auto;
        }

        .exec-card .bottom .content .name {
          display: block;
          font-size: 1.35rem;
          color: #ffffff;
          font-weight: 900;
          line-height: 1.2;
          text-shadow: 0 2px 8px rgba(0,0,0,0.5);
        }

        .exec-card .bottom .content .role-title {
          display: block;
          font-size: 0.8rem;
          color: #f2b733;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-top: 4px;
        }

        .exec-card .bottom .content .about-me {
          display: block;
          font-size: 0.88rem;
          color: #cbd5e1;
          margin-top: 0.8rem;
          line-height: 1.5;
          opacity: 0;
          transform: translateY(15px);
          transition: all 0.4s ease 0.1s;
        }

        .exec-card .bottom .bottom-bottom {
          margin-top: 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(242, 183, 51, 0.3);
          padding-top: 10px;
          opacity: 0;
          transform: translateY(15px);
          transition: all 0.4s ease 0.2s;
        }

        .exec-card .bottom .bottom-bottom .button {
          background: #f2b733;
          color: #000648;
          border: none;
          border-radius: 20px;
          font-size: 0.72rem;
          font-weight: 900;
          padding: 0.4rem 0.8rem;
          box-shadow: rgba(0, 6, 72, 0.25) 0px 5px 5px 0px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .exec-card .bottom .bottom-bottom .button:hover {
          background: #ffffff;
          color: #000648;
        }

        /* Hover animation effects */
        .exec-card:hover {
          border-top-left-radius: 55px;
          border-color: #f2b733;
          box-shadow: 0 25px 50px rgba(242, 183, 51, 0.22);
        }

        .exec-card:hover .bottom {
          top: 22%;
          border-radius: 80px 29px 29px 29px;
          transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
        }

        .exec-card:hover .bottom .content .about-me,
        .exec-card:hover .bottom .bottom-bottom {
          opacity: 1;
          transform: translateY(0);
        }

        .exec-card:hover .profile-pic {
          width: 90px;
          height: 90px;
          aspect-ratio: 1;
          top: 10px;
          left: 10px;
          border-radius: 50%;
          z-index: 3;
          border: 4px solid #f2b733;
          box-shadow: rgba(0, 6, 72, 0.4) 0px 5px 15px 0px;
          transition: all 0.5s ease-in-out, z-index 0.5s ease-in-out 0.1s;
        }

        .exec-card:hover .profile-pic:hover {
          transform: scale(1.15);
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

        {/* 3 Executive Leader Cards Grid with User CSS Snippet Effect & EZER Color Palette */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: '32px', width: '100%' }}>
          {leaders.map((leader, idx) => (
            <motion.div
              key={leader.id || leader.roleTag || idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="exec-card"
            >
              {/* Role Badge Top */}
              <span className="role-badge-top">
                <HiBadgeCheck size={15} /> {leader.roleTag || 'DIRECTOR'}
              </span>

              {/* Profile Cover Photo */}
              <div className="profile-pic">
                <img src={resolveImageSrc(leader.image)} alt={leader.name} />
              </div>

              {/* Bottom Morphing Content Drawer */}
              <div className="bottom">
                <div className="content">
                  <span className="name">{leader.name}</span>
                  <span className="role-title">{leader.roleName || leader.roleTag}</span>
                  <p className="about-me">{leader.bio}</p>

                  <div className="bottom-bottom">
                    <button type="button" className="button">
                      <HiBadgeCheck size={14} /> EZER Corporate Directorate
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
