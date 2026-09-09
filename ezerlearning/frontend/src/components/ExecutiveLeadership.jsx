import { useState, useRef, useEffect, useCallback } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { useSiteData } from '../context/SiteContext';
import { resolveImageSrc, handleImgError } from '../utils/imageUtils';

/* ─────────────────────────────────────────────────────────────
   ExecutiveLeadership — Unified Swipe Carousel
   Combines Executive Leaders + Senior Mentors (Corporate Trainers)
   under one single section header with left/right swipe navigation.
   ───────────────────────────────────────────────────────────── */

const CARD_WIDTH = 340;   // px — fixed card width
const CARD_GAP = 24;      // px — gap between cards

function MemberCard({ member, index }) {
  const roleLabel = member.roleTag || member.role || 'TEAM MEMBER';
  const designation = member.roleName || member.company || '';
  const tagline = member.tagline || member.headline || '';
  const experience = member.exp || '';
  const bio = member.bio || '';
  const skills = member.skills || [];

  return (
    <m.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.08, 0.4) }}
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
  const { executiveLeaders, seniorMentors } = useSiteData();
  const trackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

  // Merge executive leaders and senior mentors into one list
  const leaders = (executiveLeaders && executiveLeaders.length > 0)
    ? executiveLeaders
    : [
        {
          id: 'exec-1', roleTag: 'FOUNDER', name: 'Vivekkumar S',
          roleName: 'Managing Director',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=700&h=700',
          tagline: 'From Problem to Solution',
          headline: 'Building Skills. Shaping Careers. Creating Futures',
          bio: 'Building industry-ready talent through practical, career-focused IT education, while empowering learners with the skills and confidence to succeed in the IT industry'
        },
        {
          id: 'exec-2', roleTag: 'CO-FOUNDER', name: 'Vignesh B',
          roleName: 'Executive Director',
          image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=700&h=700',
          tagline: 'From Learning to Career',
          headline: 'Building industry-ready talent for high-growth technology careers.',
          bio: 'A seasoned IT expert with over 10 years of experience in IT Infrastructure and Technical Support. His commitment to quality and innovation is the cornerstone of our success'
        },
        {
          id: 'exec-3', roleTag: 'CMTO', name: 'Mr.Jeeva T',
          roleName: 'Chief Marketing & Technology Officer',
          image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=700&h=700',
          tagline: 'Marketing & Technology Innovation for Ezer',
          headline: "Driving Ezer's growth through marketing, technology & innovation",
          bio: 'An accomplished Digital Marketing Strategist and Technical Expert with 5+ years of experience in driving digital growth, brand visibility and innovative technical solutions'
        }
      ];

  const mentors = (seniorMentors && seniorMentors.length > 0)
    ? seniorMentors.map(m => ({
        ...m,
        roleTag: m.roleTag || m.role || 'CORPORATE TRAINER',
        roleName: m.roleName || m.company || m.role || '',
        tagline: m.tagline || m.headline || '',
        skills: m.skills || []
      }))
    : [
        {
          id: 'm-1', roleTag: 'STAFF FULL-STACK LEAD', name: 'Pradeep Rajan',
          roleName: 'Senior Staff Full-Stack Engineer @ Ex-Zoho / Global Tech Lead',
          tagline: 'Production-Scale Distributed Systems',
          headline: 'Full-Stack Architecture & AI Copilot Workflows',
          exp: '10+ Yrs Exp',
          bio: 'Specialist in React, Node.js, Next.js and AI Copilot workflow automation. Deep expertise in production-scale distributed microservices and front-end performance tuning.',
          skills: ['React 19', 'Next.js', 'System Architecture', 'Node.js Microservices'],
          image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300'
        },
        {
          id: 'm-2', roleTag: 'PRINCIPAL CLOUD ARCHITECT', name: 'Arun Kumar S',
          roleName: 'Principal Cloud Architect @ AWS / TechCorp',
          tagline: 'Resilient Cloud Infrastructures',
          headline: 'Multi-Cloud Deployments & Kubernetes Clusters',
          exp: '12+ Yrs Exp',
          bio: '11+ years designing multi-cloud architectures across AWS and Azure. Mentored 2,500+ engineers into high-paying DevOps and Cloud Engineering roles.',
          skills: ['AWS Certified', 'Kubernetes Lead', 'Multi-Cloud DevOps', 'Terraform IaC'],
          image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300&h=300'
        },
        {
          id: 'm-3', roleTag: 'PRINCIPAL AI/ML SPECIALIST', name: 'Divya Bharathi M',
          roleName: 'Principal AI & Machine Learning Lead',
          tagline: 'Applied AI & Practical Deep Learning',
          headline: 'Generative AI, Large Language Models & MLOps',
          exp: '9+ Yrs Exp',
          bio: 'Pioneering generative AI capstones, LLM fine-tuning, and practical machine learning deployment across enterprise production pipelines.',
          skills: ['GenAI & LLMs', 'PyTorch Lead', 'Enterprise MLOps', 'Prompt Engineering'],
          image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=300&h=300'
        }
      ];

  const allMembers = [...leaders, ...mentors];
  const totalCards = allMembers.length;

  // Calculate visible cards based on container width
  useEffect(() => {
    const calc = () => {
      if (trackRef.current) {
        const containerWidth = trackRef.current.parentElement?.offsetWidth || 1200;
        const count = Math.max(1, Math.floor((containerWidth + CARD_GAP) / (CARD_WIDTH + CARD_GAP)));
        setVisibleCards(count);
      }
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

  const maxIndex = Math.max(0, totalCards - visibleCards);

  const scrollToIndex = useCallback((idx) => {
    const clamped = Math.max(0, Math.min(idx, maxIndex));
    setCurrentIndex(clamped);
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${clamped * (CARD_WIDTH + CARD_GAP)}px)`;
    }
  }, [maxIndex]);

  const goLeft = () => scrollToIndex(currentIndex - 1);
  const goRight = () => scrollToIndex(currentIndex + 1);

  // Mouse drag support
  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragStart.current = { x: e.clientX, scrollLeft: currentIndex };
  };
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diff = dragStart.current.x - e.clientX;
    if (Math.abs(diff) > 60) {
      if (diff > 0) goRight();
      else goLeft();
      setIsDragging(false);
    }
  };
  const handleMouseUp = () => setIsDragging(false);

  // Touch swipe support
  const handleTouchStart = (e) => {
    dragStart.current = { x: e.touches[0].clientX, scrollLeft: currentIndex };
  };
  const handleTouchEnd = (e) => {
    const diff = dragStart.current.x - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goRight();
      else goLeft();
    }
  };

  // Dot navigation
  const totalDots = Math.max(1, maxIndex + 1);

  return (
    <LazyMotion features={domAnimation}>
      <section className="unified-leadership-section">
        <style>{`
          .unified-leadership-section {
            position: relative;
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%);
            color: #000648;
            padding: 56px 20px 48px;
            border-top: 3px solid #f2b733;
            border-bottom: 3px solid #f2b733;
            overflow: hidden;
          }

          /* Ambient Glows */
          .uls-glow-1 {
            position: absolute; top: 8%; left: 3%;
            width: 380px; height: 380px;
            background: radial-gradient(circle, rgba(242,183,51,0.16) 0%, transparent 70%);
            filter: blur(55px); pointer-events: none;
          }
          .uls-glow-2 {
            position: absolute; bottom: 8%; right: 3%;
            width: 420px; height: 420px;
            background: radial-gradient(circle, rgba(217,119,6,0.15) 0%, transparent 70%);
            filter: blur(65px); pointer-events: none;
          }

          /* Header */
          .uls-header { text-align: center; margin-bottom: 44px; position: relative; z-index: 2; }
          .uls-header-badge {
            display: inline-block;
            background: #f2b733; color: #000648;
            padding: 6px 24px; border-radius: 50px;
            font-weight: 900; font-size: 0.78rem;
            text-transform: uppercase; letter-spacing: 0.12em;
            margin-bottom: 14px;
            box-shadow: 0 4px 20px rgba(242,183,51,0.3);
          }
          .uls-header h2 {
            font-size: clamp(1.8rem, 3.8vw, 3rem);
            font-weight: 900; color: #000648;
            line-height: 1.15; margin-bottom: 12px;
            letter-spacing: -0.02em;
          }
          .uls-header p {
            font-size: 1.02rem; color: #475569;
            max-width: 740px; margin: 0 auto; line-height: 1.6;
          }

          /* Carousel Container */
          .uls-carousel-wrapper {
            position: relative; z-index: 2;
            max-width: 1240px; margin: 0 auto;
          }
          .uls-carousel-viewport {
            overflow: hidden;
            position: relative;
            cursor: grab;
          }
          .uls-carousel-viewport:active { cursor: grabbing; }
          .uls-carousel-track {
            display: flex;
            gap: ${CARD_GAP}px;
            transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
            will-change: transform;
          }

          /* Navigation Arrows */
          .uls-nav-arrow {
            position: absolute; top: 50%; z-index: 10;
            width: 48px; height: 48px;
            border-radius: 50%;
            background: #000648; color: #f2b733;
            border: 2px solid #f2b733;
            display: flex; align-items: center; justify-content: center;
            font-size: 1.4rem; font-weight: 900;
            cursor: pointer;
            box-shadow: 0 4px 16px rgba(0,6,72,0.25);
            transition: all 0.3s ease;
            transform: translateY(-50%);
          }
          .uls-nav-arrow:hover {
            background: #f2b733; color: #000648;
            box-shadow: 0 6px 24px rgba(242,183,51,0.4);
          }
          .uls-nav-arrow:disabled {
            opacity: 0.3; cursor: not-allowed;
            background: #94a3b8; border-color: #94a3b8; color: #fff;
          }
          .uls-nav-arrow.left { left: -16px; }
          .uls-nav-arrow.right { right: -16px; }

          /* Dots Navigation */
          .uls-dots {
            display: flex; justify-content: center; align-items: center;
            gap: 10px; margin-top: 28px;
          }
          .uls-dot {
            width: 10px; height: 10px; border-radius: 50%;
            background: #cbd5e1; border: none; cursor: pointer;
            transition: all 0.3s ease; padding: 0;
          }
          .uls-dot.active {
            width: 32px; border-radius: 5px;
            background: #000648;
          }

          /* ───── Member Card ───── */
          .unified-member-card {
            flex: 0 0 ${CARD_WIDTH}px;
            width: ${CARD_WIDTH}px;
            background: #ffffff;
            border-radius: 20px;
            border: 1.5px solid #e2e8f0;
            padding: 28px 24px;
            text-align: center;
            display: flex; flex-direction: column; align-items: center;
            box-shadow: 0 8px 32px rgba(0,6,72,0.06);
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
          }
          .unified-member-card:hover {
            transform: translateY(-6px);
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
            width: 110px; height: 110px;
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
            font-size: 1.15rem; font-weight: 900;
            color: #000648; margin: 0 0 4px 0;
          }

          /* Designation */
          .umc-designation {
            font-size: 0.78rem; font-weight: 700;
            color: #115DFC; text-transform: uppercase;
            letter-spacing: 0.06em;
            margin: 0 0 10px 0;
            line-height: 1.3;
          }

          /* Tagline */
          .umc-tagline {
            font-size: 0.88rem; font-weight: 700;
            color: #d97706; font-style: italic;
            margin: 0 0 8px 0; line-height: 1.3;
          }

          /* Experience Pill */
          .umc-exp-pill {
            display: inline-block;
            background: linear-gradient(135deg, #000648 0%, #1e293b 100%);
            color: #f2b733;
            padding: 4px 14px; border-radius: 50px;
            font-weight: 800; font-size: 0.72rem;
            margin-bottom: 10px;
          }

          /* Bio */
          .umc-bio {
            font-size: 0.84rem; color: #475569;
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
            font-size: 0.68rem; font-weight: 800;
            letter-spacing: 0.02em;
          }

          /* Responsive */
          @media (max-width: 768px) {
            .unified-leadership-section { padding: 36px 12px 32px; }
            .uls-nav-arrow { width: 38px; height: 38px; font-size: 1.1rem; }
            .uls-nav-arrow.left { left: -6px; }
            .uls-nav-arrow.right { right: -6px; }
            .unified-member-card {
              flex: 0 0 290px; width: 290px;
              padding: 22px 18px;
            }
          }
          @media (max-width: 480px) {
            .unified-member-card {
              flex: 0 0 calc(100vw - 48px); width: calc(100vw - 48px);
            }
          }
        `}</style>

        {/* Ambient Glows */}
        <div className="uls-glow-1" />
        <div className="uls-glow-2" />

        {/* Header */}
        <div className="uls-header">
          <span className="uls-header-badge">OUR MANAGEMENT & LEADERSHIP TEAM</span>
          <h2>Guided by Corporate Visionaries & EdTech Pioneers</h2>
          <p>
            Our management team brings decades of technology leadership, corporate partnerships,
            and practical education models to empower every learner.
          </p>
        </div>

        {/* Carousel */}
        <div className="uls-carousel-wrapper">
          {/* Left Arrow */}
          <button
            className="uls-nav-arrow left"
            onClick={goLeft}
            disabled={currentIndex <= 0}
            aria-label="Previous member"
          >
            ‹
          </button>

          {/* Right Arrow */}
          <button
            className="uls-nav-arrow right"
            onClick={goRight}
            disabled={currentIndex >= maxIndex}
            aria-label="Next member"
          >
            ›
          </button>

          {/* Viewport */}
          <div
            className="uls-carousel-viewport"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              ref={trackRef}
              className="uls-carousel-track"
              style={{ transform: `translateX(-${currentIndex * (CARD_WIDTH + CARD_GAP)}px)` }}
            >
              {allMembers.map((member, idx) => (
                <MemberCard key={member.id || idx} member={member} index={idx} />
              ))}
            </div>
          </div>

          {/* Dot Navigation */}
          <div className="uls-dots">
            {Array.from({ length: totalDots }).map((_, i) => (
              <button
                key={i}
                className={`uls-dot ${i === currentIndex ? 'active' : ''}`}
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
