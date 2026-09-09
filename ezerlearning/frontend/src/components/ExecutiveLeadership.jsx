import React from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { useSiteData } from '../Admin_Control/context/SiteContext';
import { resolveImageSrc, handleImgError } from '../utils/imageUtils';

export default function ExecutiveLeadership() {
  const { executiveLeaders } = useSiteData();

  const fallbackLeaders = [
    {
      id: 'exec-1',
      roleTag: 'FOUNDER • Managing Director',
      roleName: 'Managing Director',
      name: 'Vivekkumar S',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=600',
      tagline: 'From Problem to Solution',
      headline: 'Building Skills. Shaping Careers. Creating Futures',
      bio: 'Building industry-ready talent through practical, career-focused IT education, while empowering learners with the skills and confidence to succeed in the IT industry.'
    },
    {
      id: 'exec-2',
      roleTag: 'Co- Founder • Executive Director',
      roleName: 'Executive Director',
      name: 'Vignesh B',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600&h=600',
      tagline: 'From Learning to Career',
      headline: 'Building industry-ready talent for high-growth technology careers.',
      bio: 'A seasoned IT expert with over 10 years of experience in IT Infrastructure and Technical Support. His commitment to quality and innovation is the cornerstone of our success.'
    },
    {
      id: 'exec-3',
      roleTag: 'CMTO • Chief Marketing & Technology Officer',
      roleName: 'Chief Marketing & Technology Officer',
      name: 'Mr. Jeeva T',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600&h=600',
      tagline: 'Marketing & Technology Innovation for Ezer',
      headline: 'Driving Ezer’s growth through marketing, technology & innovation',
      bio: 'An accomplished Digital Marketing Strategist and Technical Expert with 5+ years of experience in driving digital growth, brand visibility and innovative technical solutions.'
    }
  ];

  const leaders = (executiveLeaders && executiveLeaders.length > 0)
    ? executiveLeaders
    : fallbackLeaders;

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="management-leadership"
        className="exec-section-compact"
        style={{
          position: 'relative',
          background: 'linear-gradient(135deg, #f8fafc 0%, #eef2f6 50%, #f8fafc 100%)',
          color: '#000648',
          padding: '48px 20px',
          borderTop: '3px solid #f2b733',
          borderBottom: '3px solid #f2b733',
          overflow: 'hidden'
        }}
      >
        <style>{`
          /* Golden Ambient Background Glows */
          .mgmt-bg-glow-1 {
            position: absolute;
            top: 5%;
            left: 5%;
            width: 320px;
            height: 320px;
            background: radial-gradient(circle, rgba(242,183,51,0.15) 0%, rgba(248,155,41,0) 70%);
            filter: blur(50px);
            pointer-events: none;
          }

          .mgmt-bg-glow-2 {
            position: absolute;
            bottom: 5%;
            right: 5%;
            width: 350px;
            height: 350px;
            background: radial-gradient(circle, rgba(17,93,252,0.12) 0%, rgba(0,6,72,0) 70%);
            filter: blur(60px);
            pointer-events: none;
          }

          /* Compact Unified Grid */
          .mgmt-cards-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            align-items: stretch;
          }

          @media (max-width: 1024px) {
            .mgmt-cards-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 680px) {
            .mgmt-cards-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }
          }

          /* Management Profile Card */
          .mgmt-card {
            background: #ffffff;
            border-radius: 20px;
            border: 1.5px solid #e2e8f0;
            padding: 28px 24px;
            box-shadow: 0 10px 30px rgba(0, 6, 72, 0.05);
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            position: relative;
            transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
          }

          .mgmt-card:hover {
            transform: translateY(-5px);
            border-color: #f2b733;
            box-shadow: 0 20px 40px rgba(0, 6, 72, 0.12);
          }

          /* Circular Profile Picture with Gold Ring */
          .mgmt-avatar-frame {
            width: 125px;
            height: 125px;
            border-radius: 50%;
            padding: 4px;
            background: linear-gradient(135deg, #f2b733 0%, #f89b29 50%, #d97706 100%);
            box-shadow: 0 8px 24px rgba(242, 183, 51, 0.35);
            margin-bottom: 18px;
            flex-shrink: 0;
            transition: transform 0.35s ease, box-shadow 0.35s ease;
          }

          .mgmt-card:hover .mgmt-avatar-frame {
            transform: scale(1.04);
            box-shadow: 0 12px 30px rgba(242, 183, 51, 0.48);
          }

          .mgmt-avatar-inner {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            overflow: hidden;
            background: #000648;
            position: relative;
          }

          .mgmt-avatar-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }

          .mgmt-role-badge {
            display: inline-block;
            background: #000648;
            color: #f2b733;
            padding: 5px 14px;
            border-radius: 50px;
            font-size: 0.74rem;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            margin-bottom: 12px;
            border: 1px solid rgba(242, 183, 51, 0.4);
            max-width: 95%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .mgmt-tagline {
            font-size: 0.88rem;
            color: #d97706;
            font-weight: 700;
            font-style: italic;
            margin-bottom: 8px;
            line-height: 1.35;
          }

          .mgmt-headline {
            font-size: 1.08rem;
            font-weight: 900;
            color: #000648;
            line-height: 1.35;
            margin: 0 0 14px 0;
            letter-spacing: -0.015em;
            min-height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .mgmt-name {
            font-size: 1.25rem;
            font-weight: 900;
            color: #000648;
            margin: 0 0 4px 0;
          }

          .mgmt-role-name {
            font-size: 0.82rem;
            font-weight: 800;
            color: #115DFC;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            margin-bottom: 14px;
          }

          .mgmt-bio {
            font-size: 0.88rem;
            color: #475569;
            line-height: 1.6;
            margin: 0;
            flex-grow: 1;
          }
        `}</style>

        {/* Ambient Glows */}
        <div className="mgmt-bg-glow-1" />
        <div className="mgmt-bg-glow-2" />

        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 3 }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
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
                marginBottom: '12px',
                boxShadow: '0 4px 18px rgba(242,183,51,0.35)'
              }}
            >
              Our Management & Leadership Team
            </span>

            <h2
              style={{
                fontSize: 'clamp(1.9rem, 3.4vw, 2.8rem)',
                fontWeight: 900,
                color: '#000648',
                lineHeight: 1.2,
                marginBottom: '10px',
                letterSpacing: '-0.02em'
              }}
            >
              Guided by Corporate Visionaries & EdTech Pioneers
            </h2>

            <p
              style={{
                fontSize: '1rem',
                color: '#475569',
                maxWidth: '720px',
                margin: '0 auto',
                lineHeight: 1.6
              }}
            >
              Our management team brings decades of technology leadership, corporate partnerships, and practical education models to empower every learner.
            </p>
          </div>

          {/* Compact 3-Column Grid */}
          <div className="mgmt-cards-grid">
            {leaders.map((leader, idx) => {
              const roleBadgeText = leader.roleTag || leader.roleName || 'EXECUTIVE LEADER';
              const designationText = leader.roleName || leader.roleTag || 'Executive Officer';

              return (
                <m.div
                  key={leader.id || leader.roleTag || idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  className="mgmt-card"
                >
                  {/* Circular Profile Picture with Gold Ring */}
                  <div className="mgmt-avatar-frame">
                    <div className="mgmt-avatar-inner">
                      <img
                        src={resolveImageSrc(leader.image)}
                        alt={leader.name}
                        onError={handleImgError}
                        className="mgmt-avatar-img"
                        style={{
                          objectPosition: leader.imagePosition || leader.position || 'center top',
                          objectFit: leader.imageFit || leader.fit || 'cover',
                          transform: (leader.imageZoom || leader.zoom || 1) !== 1 ? `scale(${leader.imageZoom || leader.zoom})` : 'none'
                        }}
                      />
                    </div>
                  </div>

                  {/* Role Badge */}
                  <span className="mgmt-role-badge">
                    {roleBadgeText}
                  </span>

                  {/* Tagline & Card Headline */}
                  {leader.tagline && (
                    <div className="mgmt-tagline">
                      "{leader.tagline}"
                    </div>
                  )}

                  {leader.headline && (
                    <h3 className="mgmt-headline">
                      {leader.headline}
                    </h3>
                  )}

                  {/* Leader Name & Designation */}
                  <h4 className="mgmt-name">
                    {leader.name}
                  </h4>
                  <div className="mgmt-role-name">
                    {designationText}
                  </div>

                  {/* Bio Description */}
                  <p className="mgmt-bio">
                    {leader.bio}
                  </p>
                </m.div>
              );
            })}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
