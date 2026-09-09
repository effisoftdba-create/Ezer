import { useState, useRef, useEffect, useCallback } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { useSiteData } from '../context/SiteContext';
import { resolveImageSrc, handleImgError } from '../utils/imageUtils';
import CarouselDotsNav from './CarouselDotsNav';

/* ─────────────────────────────────────────────────────────────
   ExecutiveLeadership — Unified Swipe Carousel
   Combines Executive Leaders + Home Trainers (Corporate Mentors)
   under one single section header with CarouselDotsNav navigation.
   ───────────────────────────────────────────────────────────── */

function MemberCard({ member, index }) {
  const roleLabel = member.roleTag || member.role || 'TEAM MEMBER';
  const designation = member.roleName || member.designation || member.company || '';
  const tagline = member.tagline || '';
  const experience = member.exp || '';
  const bio = member.bio || '';
  const skills = member.tags || member.skills || [];

  return (
    <m.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.08, 0.4) }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="unified-member-card"
    >
      {/* Role Badge */}
      <div className="umc-role-badge">{roleLabel}</div>

      {/* Avatar with Gold Ring */}
      <div className="umc-avatar-ring">
        <img
          loading="lazy"
          src={resolveImageSrc(member.image)}
          alt={member.name}
          onError={handleImgError}
          style={{
            objectPosition: member.imagePosition || member.position || 'center top',
            objectFit: member.imageFit || member.fit || 'cover',
            transform: (member.imageZoom || member.zoom || 1) !== 1
              ? `scale(${member.imageZoom || member.zoom})`
              : 'none',
            transformOrigin: member.imagePosition || member.position || 'center top'
          }}
        />
      </div>

      {/* Name & Designation */}
      <h3 className="umc-name">{member.name}</h3>
      {designation && <p className="umc-designation">{designation}</p>}

      {/* Tagline / Headline */}
      {tagline && <p className="umc-tagline">"{tagline}"</p>}

      {/* Headline */}
      {member.headline && <p className="umc-headline">{member.headline}</p>}

      {/* Experience Pill */}
      {experience && <span className="umc-exp-pill">{experience}</span>}

      {/* Bio */}
      {bio && <p className="umc-bio">{bio}</p>}

      {/* Skill Tags */}
      {skills.length > 0 && (
        <div className="umc-skills">
          {skills.map((skill, i) => (
            <span key={i} className="umc-skill-tag">{skill}</span>
          ))}
        </div>
      )}
    </m.div>
  );
}

export default function ExecutiveLeadership() {
  const { executiveLeaders, homeTrainers } = useSiteData();
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Merge executive leaders and home trainers into one list
  const leaders = (executiveLeaders && executiveLeaders.length > 0)
    ? executiveLeaders
    : [
        {
          id: 'exec-1', roleTag: 'CEO', name: 'Vivekkumar S',
          roleName: 'Chief Executive Officer',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=700&h=700',
          tagline: 'From Problem to Solution',
          headline: 'Building Skills. Shaping Careers. Creating Futures',
          bio: 'Building industry-ready talent through practical, career-focused IT education.'
        },
        {
          id: 'exec-2', roleTag: 'CFO', name: 'Vignesh B',
          roleName: 'Chief Financial Officer',
          image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=700&h=700',
          tagline: 'From Learning to Career',
          headline: 'Building industry-ready talent for high-growth technology careers.',
          bio: 'A seasoned IT expert with over 10 years of experience in IT Infrastructure and Technical Support.'
        },
        {
          id: 'exec-3', roleTag: 'CMTO', name: 'Mr.Jeeva T',
          roleName: 'Chief Marketing & Technology Officer',
          image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=700&h=700',
          tagline: 'Marketing & Technology Innovation for Ezer',
          headline: "Driving Ezer's growth through marketing, technology & innovation",
          bio: 'An accomplished Digital Marketing Strategist and Technical Expert with 5+ years of experience.'
        }
      ];

  const trainers = (homeTrainers && homeTrainers.length > 0)
    ? homeTrainers
    : [
        {
          id: 'ht-1', roleTag: 'SENIOR ENGLISH TRAINER', name: 'Princy Julite',
          designation: 'Senior English Trainer | EZER Learning Solution',
          exp: '12+ Yrs Exp',
          headline: 'Mastering Spoken & Professional Corporate Communication',
          tagline: 'Fluency & Professional Confidence',
          image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400',
          bio: 'Experienced English Language Trainer with 10+ years of expertise in spoken English and professional communication.',
          tags: ['Spoken English', 'Business English', 'Grammar & Fluency', 'Interview Prep']
        },
        {
          id: 'ht-2', roleTag: 'STAFF FULL-STACK LEAD', name: 'Pradeep Rajan',
          designation: 'Senior Staff Full-Stack Engineer @ Ex-Zoho / Global Tech Lead',
          exp: '10+ Yrs Exp',
          headline: 'Full-Stack Architecture & AI Copilot Workflows',
          tagline: 'Production-Scale Distributed Systems',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400',
          bio: 'Specialist in React, Node.js, Next.js and AI Copilot workflow automation.',
          tags: ['React 19', 'Next.js', 'System Architecture', 'Node.js Microservices']
        },
        {
          id: 'ht-3', roleTag: 'PRINCIPAL CLOUD ARCHITECT', name: 'Arun Kumar S',
          designation: 'Principal Cloud Architect @ AWS / TechCorp',
          exp: '12+ Yrs Exp',
          headline: 'Multi-Cloud Deployments & Kubernetes Clusters',
          tagline: 'Resilient Cloud Infrastructures',
          image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=400',
          bio: '11+ years designing multi-cloud architectures across AWS and Azure. Mentored 2,500+ engineers.',
          tags: ['AWS Certified', 'Kubernetes Lead', 'Multi-Cloud DevOps', 'Terraform IaC']
        },
        {
          id: 'ht-4', roleTag: 'PRINCIPAL AI/ML SPECIALIST', name: 'Divya Bharathi M',
          designation: 'Principal AI & Machine Learning Lead',
          exp: '9+ Yrs Exp',
          headline: 'Generative AI, Large Language Models & MLOps',
          tagline: 'Applied AI & Practical Deep Learning',
          image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400',
          bio: 'Pioneering generative AI capstones, LLM fine-tuning, and practical ML deployment.',
          tags: ['GenAI & LLMs', 'PyTorch Lead', 'Enterprise MLOps', 'Prompt Engineering']
        },
        {
          id: 'ht-5', roleTag: 'DATA PLATFORM ARCHITECT', name: 'Rajesh Kannan',
          designation: 'Senior Director of Data Engineering',
          exp: '13+ Yrs Exp',
          headline: 'Real-Time Streaming & Enterprise Data Warehousing',
          tagline: 'High-Throughput Distributed Data',
          image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400',
          bio: 'Architect of high-throughput real-time streaming architectures and cloud data warehouses.',
          tags: ['Apache Spark', 'Kafka Streaming', 'Snowflake DBA', 'Data Modeling']
        }
      ];

  const allMembers = [...leaders, ...trainers];
  const totalCards = allMembers.length;

  // Card width reference for scroll calculations
  const cardWidthRef = useRef(315);

  useEffect(() => {
    const updateCardWidth = () => {
      if (sliderRef.current?.children[0]) {
        cardWidthRef.current = sliderRef.current.children[0].offsetWidth + 20;
      }
    };
    updateCardWidth();
    window.addEventListener('resize', updateCardWidth, { passive: true });
    return () => window.removeEventListener('resize', updateCardWidth);
  }, []);

  // Auto Scroll Loop with Pause on Mouse Hover
  useEffect(() => {
    if (isHovered || !totalCards) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % totalCards;
        if (sliderRef.current) {
          sliderRef.current.scrollTo({ left: next * cardWidthRef.current, behavior: 'smooth' });
        }
        return next;
      });
    }, 3500);
    return () => clearInterval(interval);
  }, [isHovered, totalCards]);

  const handlePrev = () => {
    if (!totalCards) return;
    const next = (activeIndex - 1 + totalCards) % totalCards;
    setActiveIndex(next);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: next * cardWidthRef.current, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (!totalCards) return;
    const next = (activeIndex + 1) % totalCards;
    setActiveIndex(next);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: next * cardWidthRef.current, behavior: 'smooth' });
    }
  };

  const handleSelect = (idx) => {
    setActiveIndex(idx);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: idx * cardWidthRef.current, behavior: 'smooth' });
    }
  };

  const handleScroll = (e) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const cardWidth = cardWidthRef.current || 315;
    const newIdx = Math.round(scrollLeft / cardWidth);
    if (newIdx !== activeIndex && newIdx >= 0 && newIdx < totalCards) {
      setActiveIndex(newIdx);
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <section className="unified-leadership-section">
        <style>{`
          .unified-leadership-section {
            position: relative;
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%);
            color: #000648;
            padding: 36px 0;
            border-top: 3px solid #f2b733;
            border-bottom: 3px solid #f2b733;
            overflow: hidden;
          }

          /* ───── Member Card ───── */
          .unified-member-card {
            flex: 0 0 min(310px, 82vw);
            scroll-snap-align: center;
            background: #ffffff;
            border-radius: 24px;
            border: 2px solid #000638;
            padding: 28px 22px;
            text-align: center;
            display: flex; flex-direction: column; align-items: center;
            box-shadow: 0 12px 36px rgba(0,6,72,0.08);
            transition: border-color 0.35s ease, box-shadow 0.35s ease;
            position: relative;
            overflow: hidden;
            cursor: pointer;
          }
          .unified-member-card:hover {
            border-color: #f2b733;
            box-shadow: 0 20px 48px rgba(0,6,72,0.12);
          }

          /* Role Badge */
          .umc-role-badge {
            display: inline-block;
            background: #000648; color: #f2b733;
            padding: 4px 16px; border-radius: 50px;
            font-weight: 900; font-size: 0.68rem;
            text-transform: uppercase; letter-spacing: 0.1em;
            margin-bottom: 16px;
          }

          /* Avatar */
          .umc-avatar-ring {
            width: 100px; height: 100px;
            border-radius: 50%;
            border: 3px solid #f2b733;
            padding: 3px;
            margin-bottom: 14px;
            box-shadow: 0 4px 20px rgba(242,183,51,0.25);
            overflow: hidden;
            background: #000648;
          }
          .umc-avatar-ring img {
            width: 100%; height: 100%;
            border-radius: 50%;
            object-fit: cover;
            display: block;
          }

          /* Name */
          .umc-name {
            font-size: 1.1rem; font-weight: 900;
            color: #000648; margin: 0 0 4px 0;
          }

          /* Designation */
          .umc-designation {
            font-size: 0.74rem; font-weight: 700;
            color: #115DFC; text-transform: uppercase;
            letter-spacing: 0.06em;
            margin: 0 0 10px 0;
            line-height: 1.3;
          }

          /* Tagline */
          .umc-tagline {
            font-size: 0.84rem; font-weight: 700;
            color: #d97706; font-style: italic;
            margin: 0 0 6px 0; line-height: 1.3;
          }

          /* Headline */
          .umc-headline {
            font-size: 0.82rem; font-weight: 800;
            color: #000648;
            margin: 0 0 8px 0; line-height: 1.3;
          }

          /* Experience Pill */
          .umc-exp-pill {
            display: inline-block;
            background: linear-gradient(135deg, #000648 0%, #1e293b 100%);
            color: #f2b733;
            padding: 4px 14px; border-radius: 50px;
            font-weight: 800; font-size: 0.7rem;
            margin-bottom: 10px;
          }

          /* Bio */
          .umc-bio {
            font-size: 0.82rem; color: #475569;
            line-height: 1.55; margin: 0 0 12px 0;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          /* Skills */
          .umc-skills {
            display: flex; flex-wrap: wrap; gap: 6px;
            justify-content: center;
            margin-top: auto;
          }
          .umc-skill-tag {
            background: rgba(0,6,72,0.06);
            color: #000648;
            padding: 3px 10px; border-radius: 50px;
            font-size: 0.66rem; font-weight: 800;
            letter-spacing: 0.02em;
          }

          /* Scrollbar hide */
          .uls-slider-track { -ms-overflow-style: none; scrollbar-width: none; }
          .uls-slider-track::-webkit-scrollbar { display: none; }

          /* Responsive */
          @media (max-width: 768px) {
            .unified-leadership-section { padding: 24px 0; }
            .unified-member-card {
              flex: 0 0 min(280px, 82vw);
              padding: 22px 18px;
            }
          }
        `}</style>

        <div className="container">
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span
              style={{
                display: 'inline-block',
                background: '#f2b733', color: '#000648',
                padding: '6px 24px', borderRadius: '50px',
                fontWeight: 900, fontSize: '0.78rem',
                textTransform: 'uppercase', letterSpacing: '0.12em',
                marginBottom: '14px',
                boxShadow: '0 4px 20px rgba(242,183,51,0.3)'
              }}
            >
              OUR MANAGEMENT & LEADERSHIP TEAM
            </span>

            <h2
              style={{
                fontSize: 'clamp(1.6rem, 2.8vw, 2.3rem)',
                fontWeight: 900, color: '#000648',
                lineHeight: 1.15, marginBottom: '8px',
                letterSpacing: '-0.02em'
              }}
            >
              Guided by Corporate Visionaries & EdTech Pioneers
            </h2>

            <p style={{ color: '#475569', fontSize: '0.94rem', maxWidth: '640px', margin: '0 auto' }}>
              Our management team brings decades of technology leadership, corporate partnerships,
              and practical education models to empower every learner.
            </p>
          </div>

          {/* Controls & Track Wrapper */}
          <div style={{ position: 'relative' }}>
            {/* CarouselDotsNav — < ○ ● ● ● ○ > style at the top */}
            <CarouselDotsNav
              totalItems={totalCards}
              activeIndex={activeIndex}
              onPrev={handlePrev}
              onNext={handleNext}
              onSelectIndex={handleSelect}
              style={{ marginBottom: '24px', marginTop: 0 }}
            />

            {/* Horizontal Slider Track */}
            <div
              ref={sliderRef}
              className="uls-slider-track no-scrollbar"
              onScroll={handleScroll}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                display: 'flex', gap: '20px', overflowX: 'auto',
                scrollSnapType: 'x mandatory',
                scrollBehavior: 'smooth', padding: '12px 10px 24px', width: '100%',
              }}
            >
              {allMembers.map((member, idx) => (
                <MemberCard key={member.id || idx} member={member} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
