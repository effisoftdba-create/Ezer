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
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=700&h=700',
        tagline: 'Financial integrity & student affordability.',
        headline: 'Pioneering accessible scholarship funds for high-growth tech careers.',
        bio: 'Strategic Financial Lead overseeing student scholarship funds and affordable learning models.'
      },
      {
        id: 'exec-3',
        roleTag: 'CMTO',
        roleName: 'Chief Marketing Technology Officer',
        name: 'Anand Kumar K',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=700&h=700',
        tagline: 'Curriculum innovation & hands-on labs.',
        headline: 'Architecting AI-integrated practical capstones for production readiness.',
        bio: 'Pioneer of AI-integrated lab curriculums and corporate technical readiness standards.'
      }
    ];

  return (
    <section
      className="exec-section-compact"
      style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)',
        color: '#000648',
        padding: '36px 20px',
        borderTop: '3px solid #f2b733',
        borderBottom: '3px solid #f2b733',
        overflow: 'hidden'
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .exec-section-compact {
            padding: 20px 12px !important;
          }
          .zigzag-exec-row {
            margin-bottom: 20px !important;
            padding: 20px 14px !important;
          }
        }

        /* Golden Ambient Background Accents */
        .exec-bg-glow-1 {
          position: absolute;
          top: 10%;
          left: 5%;
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(242,183,51,0.18) 0%, rgba(248,155,41,0) 70%);
          filter: blur(50px);
          pointer-events: none;
        }

        .exec-bg-glow-2 {
          position: absolute;
          bottom: 10%;
          right: 5%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(217,119,6,0.18) 0%, rgba(0,6,72,0) 70%);
          filter: blur(60px);
          pointer-events: none;
        }

        /* Zig-Zag Card Grid Layout */
        .zigzag-exec-row {
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 36px;
          align-items: center;
          background: #ffffff;
          border-radius: 24px;
          padding: 32px;
          margin-bottom: 24px;
          border: 1.5px solid #cbd5e1;
          box-shadow: 0 15px 40px rgba(0, 6, 72, 0.07);
          transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
        }

        .zigzag-exec-row.reverse {
          grid-template-columns: 1fr 340px;
        }

        .zigzag-exec-row:hover {
          transform: translateY(-4px);
          border-color: #f2b733;
          box-shadow: 0 25px 50px rgba(0, 6, 72, 0.12);
        }

        /* Glowing Image Card Container Style */
        .exec-card-container {
          width: 100%;
          maxWidth: 340px;
          height: 360px;
          position: relative;
          border-radius: 20px;
          margin: 0 auto;
        }

        .exec-card-container::before {
          content: "";
          z-index: 1;
          position: absolute;
          inset: 0;
          background: linear-gradient(-45deg, #f2b733 0%, #f89b29 50%, #d97706 100%);
          transform: translate3d(0, 0, 0) scale(0.96);
          filter: blur(22px);
          border-radius: 20px;
          opacity: 0.85;
          transition: opacity 0.5s ease, filter 0.5s ease;
        }

        .exec-card-container:hover::before {
          opacity: 1;
          filter: blur(28px);
        }

        .exec-card {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          overflow: hidden;
          border: 2px solid #f2b733;
          background: #000648;
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.4);
        }

        .exec-card .img-content {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000;
          overflow: hidden;
          transition: scale 0.6s, rotate 0.6s, filter 1s;
        }

        .exec-card .img-content img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
        }

        .exec-card:hover .img-content img {
          scale: 1.25;
          rotate: 4deg;
          filter: blur(4px);
        }

        .exec-card .card-hover-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 10px;
          color: #ffffff;
          padding: 24px;
          background: rgba(0, 6, 72, 0.88);
          backdrop-filter: blur(8px);
          border-radius: 20px;
          opacity: 0;
          pointer-events: none;
          transform: translateY(40px);
          transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
        }

        .exec-card .card-hover-overlay .heading {
          font-size: 1.4rem;
          font-weight: 900;
          color: #f2b733;
        }

        .exec-card .card-hover-overlay .sub-heading {
          font-size: 0.82rem;
          font-weight: 800;
          color: #60a5fa;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .exec-card:hover .card-hover-overlay {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        /* Editorial Content Box */
        .zigzag-content-box {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .zigzag-role-badge {
          display: inline-block;
          align-self: flex-start;
          background: #000648;
          color: #f2b733;
          border: 1.5px solid #000648;
          padding: 4px 16px;
          borderRadius: 50px;
          font-weight: 900;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 14px;
        }

        .zigzag-tagline {
          font-size: 1.05rem;
          color: #d97706;
          font-weight: 700;
          font-style: italic;
          margin-bottom: 12px;
          letter-spacing: -0.01em;
        }

        .zigzag-headline {
          font-family: 'Plus Jakarta Sans', 'Inter', system-ui, -apple-system, sans-serif;
          font-size: clamp(1.8rem, 3.2vw, 2.5rem);
          font-weight: 900;
          color: #000648;
          line-height: 1.15;
          margin: 0 0 20px 0;
          letter-spacing: -0.025em;
        }

        .zigzag-officer-name {
          font-size: 1.2rem;
          font-weight: 900;
          color: #000648;
          margin-bottom: 4px;
        }

        .zigzag-officer-role {
          font-size: 0.84rem;
          font-weight: 800;
          color: #115DFC;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 14px;
        }

        .zigzag-bio {
          font-size: 0.96rem;
          color: #475569;
          line-height: 1.65;
          margin: 0;
          max-width: 660px;
        }

        @media (max-width: 900px) {
          .zigzag-exec-row, .zigzag-exec-row.reverse {
            grid-template-columns: 1fr;
            padding: 28px 20px;
            gap: 28px;
          }
          .zigzag-exec-row.reverse .exec-card-container {
            order: -1;
          }
        }
      `}</style>

      {/* Glow Effects */}
      <div className="exec-bg-glow-1" />
      <div className="exec-bg-glow-2" />

      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 3 }}>

        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span
            style={{
              display: 'inline-block',
              background: '#f2b733',
              color: '#000648',
              padding: '6px 24px',
              borderRadius: '50px',
              fontWeight: 900,
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              marginBottom: '14px',
              boxShadow: '0 4px 20px rgba(242,183,51,0.3)'
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
              marginBottom: '12px',
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

        {/* Zig-Zag Executive Rows */}
        <div>
          {leaders.map((leader, idx) => {
            const isReverse = idx % 2 === 1;

            return (
              <motion.div
                key={leader.id || leader.roleTag || (leader.name ? leader.name.toLowerCase().replace(/[^a-z0-9]/g, '') : 'executive')}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className={`zigzag-exec-row ${isReverse ? 'reverse' : ''}`}
              >
                {/* Order image / content based on reverse zig-zag */}
                {!isReverse ? (
                  <>
                    {/* Glowing Image Card Container */}
                    <div className="exec-card-container">
                      <div className="exec-card">
                        <div className="img-content">
                          <img
                            src={resolveImageSrc(leader.image)}
                            alt={leader.name}
                            onError={handleImgError}
                            style={{
                              objectPosition: leader.imagePosition || 'center top',
                              objectFit: leader.imageFit || 'cover'
                            }}
                          />

                        </div>
                        <div className="card-hover-overlay">
                          <div className="heading">{leader.name}</div>
                          <div className="sub-heading">{leader.roleName || leader.roleTag}</div>
                          <p style={{ fontSize: '0.8rem', color: '#e2e8f0', margin: '6px 0 0 0', lineHeight: 1.4 }}>
                            {leader.bio}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Editorial Content Box */}
                    <div className="zigzag-content-box">
                      <span className="zigzag-role-badge">{leader.roleTag} • {leader.roleName}</span>
                      {leader.tagline && <span className="zigzag-tagline">{leader.tagline}</span>}

                      <h3 className="zigzag-headline">
                        {leader.headline || 'A creative and strategic transformation partner for bold businesses.'}
                      </h3>

                      <div className="zigzag-officer-name">{leader.name}</div>
                      <div className="zigzag-officer-role">{leader.roleName}</div>

                      <p className="zigzag-bio">{leader.bio}</p>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Editorial Content Box (Left side for odd index) */}
                    <div className="zigzag-content-box">
                      <span className="zigzag-role-badge">{leader.roleTag} • {leader.roleName}</span>
                      {leader.tagline && <span className="zigzag-tagline">{leader.tagline}</span>}

                      <h3 className="zigzag-headline">
                        {leader.headline || 'Pioneering accessible scholarship funds for high-growth tech careers.'}
                      </h3>

                      <div className="zigzag-officer-name">{leader.name}</div>
                      <div className="zigzag-officer-role">{leader.roleName}</div>

                      <p className="zigzag-bio">{leader.bio}</p>
                    </div>

                    {/* Glowing Image Card Container (Right side for odd index) */}
                    <div className="exec-card-container">
                      <div className="exec-card">
                        <div className="img-content">
                          <img
                            src={resolveImageSrc(leader.image)}
                            alt={leader.name}
                            onError={handleImgError}
                            style={{
                              objectPosition: leader.imagePosition || 'center top',
                              objectFit: leader.imageFit || 'cover'
                            }}
                          />

                        </div>
                        <div className="card-hover-overlay">
                          <div className="heading">{leader.name}</div>
                          <div className="sub-heading">{leader.roleName || leader.roleTag}</div>
                          <p style={{ fontSize: '0.8rem', color: '#e2e8f0', margin: '6px 0 0 0', lineHeight: 1.4 }}>
                            {leader.bio}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
