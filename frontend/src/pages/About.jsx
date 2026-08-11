import React from 'react';
import { HiCheckCircle, HiLightBulb, HiShieldCheck, HiHeart, HiAcademicCap, HiSparkles, HiTrendingUp, HiUserGroup, HiBriefcase, HiGlobeAlt } from 'react-icons/hi';
import CTABanner from '../components/CTABanner';
import VideoPlayer from '../components/VideoPlayer';
import { useSiteData } from '../Admin_Control/context/SiteContext';
import { resolveImageSrc } from '../utils/imageUtils';

const gallery = [
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=500',
  'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800&h=500',
  'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800&h=500',
];

const coreObjectives = [
  {
    num: '1',
    title: 'Skill Development',
    desc: 'Offer industry-focused training programs in emerging technologies with practical, project-based learning.',
    icon: <HiAcademicCap size={24} />
  },
  {
    num: '2',
    title: 'Career Enablement',
    desc: 'Provide complete placement support including resume building, interview preparation, and corporate connections for every learner.',
    icon: <HiBriefcase size={24} />
  },
  {
    num: '3',
    title: 'Corporate Alignment',
    desc: 'Collaborate with companies and corporate experts to ensure our curriculum meets current market requirements.',
    icon: <HiTrendingUp size={24} />
  },
  {
    num: '4',
    title: 'Accessible Learning',
    desc: 'Make quality technical education available and affordable to students, graduates, and working professionals.',
    icon: <HiGlobeAlt size={24} />
  },
  {
    num: '5',
    title: 'Overall Development',
    desc: 'Build both technical and soft skills such as communication, problem-solving, and professional conduct.',
    icon: <HiLightBulb size={24} />
  },
  {
    num: '6',
    title: 'Learning Community',
    desc: 'Develop a strong network of learners, mentors, and alumni to support continuous growth and knowledge sharing.',
    icon: <HiUserGroup size={24} />
  }
];

export default function About({ onOpenDemoModal }) {
  const { aboutVideos } = useSiteData() || {};
  const videoList = Array.isArray(aboutVideos) && aboutVideos.length >= 2
    ? aboutVideos
    : [
        {
          id: 'vid-1',
          tag: 'VIDEO SHOWCASE 01',
          title: 'Platform & Learning Methodology in Action',
          description: 'Watch how our corporate-experienced instructors deliver live interactive classes, hands-on cloud labs, and personalized career counseling.',
          videoUrl: 'https://www.youtube.com/watch?v=aircAruvnKk',
          poster: 'images/hero/hero_section_1.jpg'
        },
        {
          id: 'vid-2',
          tag: 'VIDEO SHOWCASE 02',
          title: 'Live Hands-On Cloud Labs & Placement Support',
          description: 'Explore how students gain real enterprise experience working with production CI/CD pipelines, AWS sandboxes, and mock technical interviews.',
          videoUrl: 'https://www.youtube.com/watch?v=aircAruvnKk',
          poster: 'images/hero/full-stack-development.jpg'
        }
      ];

  return (
    <div style={{ background: '#ffffff' }}>

      {/* Hero Banner */}
      <section style={{
        background: '#000648', padding: '72px 0 56px', color: '#fff', textAlign: 'center',
        backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(242,183,51,0.14) 0%, transparent 65%)',
        borderBottom: '3px solid #f2b733'
      }}>
        <div className="container">
          <span style={{
            background: 'rgba(242, 183, 51, 0.15)', border: '1.5px solid rgba(242, 183, 51, 0.4)',
            color: '#f2b733', fontSize: '0.78rem', fontWeight: 800, padding: '5px 16px',
            borderRadius: '50px', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'inline-block', marginBottom: '14px'
          }}>
            About EZER Learning Solutions
          </span>
          <h1 style={{ color: '#ffffff', fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', fontWeight: 900, marginBottom: '14px' }}>
            Transforming Ambition Into Tech Careers
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.65 }}>
            EZER Learning Solutions is a premier IT training institute delivering live online, practical, outcome-driven programs backed by 12-month career placement support.
          </p>
        </div>
      </section>

      {/* Meaning of EZER Banner */}
      <section style={{ padding: '56px 0', background: '#faf9f6', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{
            background: '#ffffff',
            borderRadius: '20px',
            padding: '36px clamp(20px, 4vw, 44px)',
            border: '2px solid #000648',
            boxShadow: '0 12px 36px rgba(0, 6, 72, 0.08)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute', top: '-15px', right: '-15px', width: '100px', height: '100px',
              background: 'rgba(242, 183, 51, 0.18)', borderRadius: '50%', zIndex: 0
            }} />
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px', background: '#000648', color: '#f2b733', padding: '4px 14px', borderRadius: '50px', fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                <HiHeart size={14} />
                OUR PURPOSE
              </div>
              <h2 style={{ color: '#000648', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 900, marginBottom: '14px' }}>
                Meaning of <span style={{ color: '#000648', borderBottom: '3px solid #f2b733' }}>EZER</span>
              </h2>
              <p style={{ fontSize: '1.12rem', fontWeight: 800, color: '#000648', lineHeight: 1.5, marginBottom: '12px' }}>
                Ezer means "Helper, Strength, and Support".
              </p>
              <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: 1.75, margin: 0 }}>
                At Ezer Learning Solutions, this defines our purpose — to act as a dependable support system that helps students, aspirants, and professionals become job-ready and corporate-relevant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section style={{ padding: '64px 0', background: '#000648', color: '#ffffff', borderTop: '3px solid #f2b733' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{
              background: 'rgba(242,183,51,0.15)', color: '#f2b733', border: '1px solid rgba(242,183,51,0.4)',
              fontSize: '0.75rem', fontWeight: 800, padding: '4px 14px', borderRadius: '50px', textTransform: 'uppercase', letterSpacing: '0.06em'
            }}>
              FOUNDATIONAL PILLARS
            </span>
            <h2 style={{ color: '#ffffff', fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', marginTop: '8px', fontWeight: 900 }}>
              Vision & Mission Statements
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            
            {/* Vision Card */}
            <div className="vm-3d-card">
              <div className="card-content">
                <div style={{
                  width: '56px', height: '56px', borderRadius: '16px',
                  background: '#f2b733', color: '#000648',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 6px 20px rgba(242,183,51,0.4)',
                }}>
                  <HiShieldCheck size={30} />
                </div>
                <h3 className="card-title">
                  Vision
                </h3>
                <p className="card-para">
                  To be recognized as one of India’s leading learning platforms that develops skilled professionals and enables them to build successful careers in technology and related fields.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="vm-3d-card">
              <div className="card-content">
                <div style={{
                  width: '56px', height: '56px', borderRadius: '16px',
                  background: '#f2b733', color: '#000648',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 6px 20px rgba(242,183,51,0.4)',
                }}>
                  <HiLightBulb size={30} />
                </div>
                <h3 className="card-title">
                  Mission
                </h3>
                <p className="card-para">
                  To provide practical, affordable, and results-driven training supported by expert mentorship, real-time projects, and dedicated placement assistance to bridge the gap between education and employment.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Us Brand Video Showcase Section (Supports 2 Videos: YouTube & Google Drive) */}
      <section style={{ padding: '64px 0', background: '#faf9f6', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{
              background: 'rgba(0, 6, 72, 0.07)', color: '#000648', border: '1.5px solid rgba(0, 6, 72, 0.15)',
              fontSize: '0.75rem', fontWeight: 800, padding: '5px 16px', borderRadius: '50px',
              textTransform: 'uppercase', letterSpacing: '0.08em', display: 'inline-block', marginBottom: '12px'
            }}>
              BRAND VIDEO SHOWCASE
            </span>
            <h2 style={{ color: '#000648', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: 900, marginBottom: '12px' }}>
              Experience Our Platform & Learning Methodology
            </h2>
            <p style={{ color: '#475569', fontSize: '1rem', maxWidth: '720px', margin: '0 auto', lineHeight: 1.6 }}>
              Watch our live classroom walkthroughs, cloud sandbox demonstrations, and student career transformation journey.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', maxWidth: '1040px', margin: '0 auto' }}>
            {videoList.slice(0, 2).map((vid, idx) => (
              <div
                key={vid.id || idx}
                style={{
                  background: '#ffffff',
                  border: '1.5px solid #e2e8f0',
                  borderRadius: '20px',
                  padding: '24px',
                  boxShadow: '0 8px 24px rgba(0, 6, 72, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between'
                }}
              >
                <div>
                  <div style={{ marginBottom: '14px' }}>
                    <span style={{
                      background: '#000648', color: '#f2b733',
                      fontSize: '0.7rem', fontWeight: 800, padding: '4px 12px', borderRadius: '50px',
                      textTransform: 'uppercase', letterSpacing: '0.06em', display: 'inline-block', marginBottom: '8px'
                    }}>
                      {vid.tag || `VIDEO SHOWCASE 0${idx + 1}`}
                    </span>
                    <h3 style={{ color: '#000648', fontSize: '1.25rem', fontWeight: 900, margin: '4px 0 8px 0', lineHeight: 1.35 }}>
                      {vid.title}
                    </h3>
                    <p style={{ color: '#475569', fontSize: '0.9rem', margin: 0, lineHeight: 1.6 }}>
                      {vid.description}
                    </p>
                  </div>
                </div>

                <div style={{ marginTop: '16px' }}>
                  <VideoPlayer
                    videoUrl={vid.videoUrl}
                    poster={resolveImageSrc(vid.poster || 'images/hero/hero_section_1.jpg')}
                    title={vid.title}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Objectives Section */}
      <section className="section-alt" style={{ padding: '64px 0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-tag">
              Strategic Goals
            </span>

            <h2 style={{ color: '#000648', fontSize: 'clamp(1.7rem, 2.8vw, 2.2rem)', fontWeight: 900, marginTop: '6px' }}>
              Core Objectives
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px', width: '100%' }}>
            {coreObjectives.map((obj) => (
              <div 
                key={obj.num} 
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  background: '#ffffff',
                  padding: '36px 28px',
                  borderRadius: '24px',
                  boxShadow: '0px 0px 20px rgba(0, 6, 72, 0.08)',
                  border: '1.5px solid #e2e8f0',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0px 12px 32px rgba(0, 6, 72, 0.15)';
                  e.currentTarget.style.borderColor = '#000648';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0px 0px 20px rgba(0, 6, 72, 0.08)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
              >
                {/* Top-Right Circle Number Badge */}
                <div
                  style={{
                    width: '96px',
                    height: '96px',
                    background: '#000648',
                    borderRadius: '50%',
                    position: 'absolute',
                    right: '-20px',
                    top: '-28px',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-start',
                    paddingBottom: '20px',
                    paddingLeft: '24px',
                    boxShadow: '0 4px 14px rgba(0, 6, 72, 0.3)',
                  }}
                >
                  <span style={{ color: '#f2b733', fontSize: '1.4rem', fontWeight: 900, lineHeight: 1 }}>
                    0{obj.num}
                  </span>
                </div>

                {/* Icon Box */}
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: 'rgba(0, 6, 72, 0.07)',
                    color: '#000648',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    border: '1.5px solid rgba(0, 6, 72, 0.12)',
                  }}
                >
                  {obj.icon}
                </div>

                {/* Title & Description */}
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#000648', marginBottom: '10px', lineHeight: 1.3 }}>
                    {obj.num}. {obj.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: '#475569', margin: 0, lineHeight: 1.65 }}>
                    {obj.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Showcase */}
      <section style={{ padding: '48px 0 64px', background: '#f8fafc' }}>
        <div className="container">
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}>
            {gallery.map((src) => (
              <div key={src} style={{ 
                borderRadius: '16px', overflow: 'hidden', height: '220px', 
                border: '1.5px solid #e2e8f0', boxShadow: '0 4px 16px rgba(0,6,72,0.06)' 
              }}>
                <img 
                  src={src} 
                  alt="EZER Learning Environment" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} 
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner onOpenDemoModal={onOpenDemoModal} />
    </div>
  );
}
