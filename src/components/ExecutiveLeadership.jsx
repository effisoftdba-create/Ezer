import React from 'react';
import { motion } from 'framer-motion';
import { useSiteData } from '../Admin_Control/context/SiteContext';
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
          image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=700&h=700',
          tagline: 'From problem to solution.',
          headline: 'A creative and strategic transformation partner for bold businesses.',
          bio: 'Visionary Leader driving native language tech education, corporate placement partnerships, and pan-India EdTech growth.'
        },
        {
          id: 'exec-2',
          roleTag: 'CFO',
          roleName: 'Chief Financial Officer',
          name: 'Meenakshi Sundaram',
          image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=700&h=700',
          tagline: 'Financial integrity & student affordability.',
          headline: 'Pioneering accessible scholarship funds for high-growth tech careers.',
          bio: 'Strategic Financial Lead overseeing student scholarship funds and affordable learning models.'
        },
        {
          id: 'exec-3',
          roleTag: 'CMTO',
          roleName: 'Chief Tech & Academic Officer',
          name: 'Anand Kumar K',
          image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=700&h=700',
          tagline: 'Curriculum innovation & hands-on labs.',
          headline: 'Architecting AI-integrated practical capstones for production readiness.',
          bio: 'Pioneer of AI-integrated lab curriculums and corporate technical readiness standards.'
        }
      ];

  return (
    <section
      style={{
        position: 'relative',
        background: '#e5e7eb',
        color: '#0f172a',
        padding: '64px 20px',
        borderTop: '2px solid rgba(0, 6, 72, 0.1)',
        borderBottom: '2px solid rgba(0, 6, 72, 0.1)',
        overflow: 'hidden'
      }}
    >
      <style>{`
        .editorial-exec-card {
          display: grid;
          grid-template-columns: minmax(280px, 420px) 1fr;
          background: #d1d5db;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0,0,0,0.06);
          margin-bottom: 36px;
          border: 1px solid #cbd5e1;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .editorial-exec-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 25px 45px rgba(0,0,0,0.12);
        }

        .editorial-img-box {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 380px;
          background: #111827;
          overflow: hidden;
        }

        .editorial-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          transition: transform 0.6s ease;
        }

        .editorial-exec-card:hover .editorial-img-box img {
          transform: scale(1.04);
        }

        .editorial-content-box {
          padding: 48px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: #e5e7eb;
        }

        .editorial-tagline {
          font-size: 1.05rem;
          color: #4b5563;
          font-weight: 500;
          margin-bottom: 16px;
          letter-spacing: -0.01em;
        }

        .editorial-headline {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(1.8rem, 3.2vw, 2.6rem);
          font-weight: 400;
          color: #111827;
          line-height: 1.22;
          margin: 0 0 24px 0;
          letter-spacing: -0.02em;
        }

        .editorial-officer-name {
          font-size: 1.1rem;
          font-weight: 900;
          color: #000648;
          margin-bottom: 4px;
        }

        .editorial-officer-role {
          font-size: 0.82rem;
          font-weight: 800;
          color: #2563eb;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 16px;
        }

        .editorial-bio {
          font-size: 0.95rem;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 28px;
          max-width: 640px;
        }

        .editorial-readmore-btn {
          align-self: flex-start;
          font-size: 0.85rem;
          font-weight: 900;
          color: #111827;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          text-decoration: none;
          padding-bottom: 4px;
          border-bottom: 3px solid #111827;
          transition: color 0.3s ease, border-color 0.3s ease;
          cursor: pointer;
          background: transparent;
          border-top: none;
          border-left: none;
          border-right: none;
        }

        .editorial-readmore-btn:hover {
          color: #2563eb;
          border-color: #2563eb;
        }

        @media (max-width: 860px) {
          .editorial-exec-card {
            grid-template-columns: 1fr;
          }
          .editorial-content-box {
            padding: 28px 24px;
          }
          .editorial-img-box {
            min-height: 320px;
          }
        }
      `}</style>

      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span
            style={{
              display: 'inline-block',
              background: '#000648',
              color: '#f2b733',
              padding: '6px 22px',
              borderRadius: '50px',
              fontWeight: 900,
              fontSize: '0.78rem',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              marginBottom: '12px'
            }}
          >
            EXECUTIVE LEADERSHIP BOARD
          </span>

          <h2
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
              fontWeight: 900,
              color: '#000648',
              lineHeight: 1.15,
              marginBottom: '10px',
              letterSpacing: '-0.02em'
            }}
          >
            Guided by Corporate Visionaries & EdTech Pioneers
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: '#475569',
              maxWidth: '740px',
              margin: '0 auto',
              lineHeight: 1.6
            }}
          >
            Our executive board brings decades of technology leadership, corporate partnerships, and native-language education models to empower every learner.
          </p>
        </div>

        {/* Editorial Executive Cards Grid */}
        <div>
          {leaders.map((leader, idx) => (
            <motion.div
              key={leader.id || idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="editorial-exec-card"
            >
              {/* Left Photo Container */}
              <div className="editorial-img-box">
                <img
                  src={resolveImageSrc(leader.image)}
                  alt={leader.name}
                  onError={handleImgError}
                />
              </div>

              {/* Right Luxury Editorial Content Box */}
              <div className="editorial-content-box">
                <span className="editorial-tagline">{leader.tagline || 'From problem to solution.'}</span>
                
                <h3 className="editorial-headline">
                  {leader.headline || 'A creative and strategic transformation partner for bold businesses.'}
                </h3>

                <div className="editorial-officer-name">{leader.name}</div>
                <div className="editorial-officer-role">{leader.roleName || leader.roleTag}</div>

                <p className="editorial-bio">{leader.bio}</p>

                <button type="button" className="editorial-readmore-btn">
                  READ MORE
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
