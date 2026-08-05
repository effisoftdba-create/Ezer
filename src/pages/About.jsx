import React from 'react';
import { HiCheckCircle, HiLightBulb, HiShieldCheck, HiHeart, HiAcademicCap, HiSparkles, HiTrendingUp, HiUserGroup, HiBriefcase, HiGlobeAlt } from 'react-icons/hi';
import CTABanner from '../components/CTABanner';

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
        <div className="container" style={{ maxWidth: '860px', margin: '0 auto' }}>
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            
            {/* Vision Card */}
            <div 
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '2px solid #f2b733',
                borderRadius: '16px',
                padding: '36px 28px',
                boxShadow: '0 12px 32px rgba(0, 0, 0, 0.4)',
                display: 'flex', flexDirection: 'column',
                transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(242,183,51,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.4)';
              }}
            >
              <div style={{
                width: '52px', height: '52px', borderRadius: '14px',
                background: '#f2b733', color: '#000648',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '20px', boxShadow: '0 6px 20px rgba(242,183,51,0.4)',
              }}>
                <HiShieldCheck size={28} />
              </div>
              <h3 style={{ color: '#f2b733', fontSize: '1.4rem', fontWeight: 900, marginBottom: '12px' }}>
                Vision
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: '1rem', lineHeight: 1.75, margin: 0, flexGrow: 1 }}>
                To be recognized as one of India’s leading learning platforms that develops skilled professionals and enables them to build successful careers in technology and related fields.
              </p>
            </div>

            {/* Mission Card */}
            <div 
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '2px solid #f2b733',
                borderRadius: '16px',
                padding: '36px 28px',
                boxShadow: '0 12px 32px rgba(0, 0, 0, 0.4)',
                display: 'flex', flexDirection: 'column',
                transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(242,183,51,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.4)';
              }}
            >
              <div style={{
                width: '52px', height: '52px', borderRadius: '14px',
                background: '#f2b733', color: '#000648',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '20px', boxShadow: '0 6px 20px rgba(242,183,51,0.4)',
              }}>
                <HiLightBulb size={28} />
              </div>
              <h3 style={{ color: '#f2b733', fontSize: '1.4rem', fontWeight: 900, marginBottom: '12px' }}>
                Mission
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: '0.98rem', lineHeight: 1.75, marginBottom: '16px' }}>
                To provide practical, affordable, and results-driven training supported by expert mentorship, real-time projects, and dedicated placement assistance.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', lineHeight: 1.65, margin: 0, fontStyle: 'italic' }}>
                Our goal is to bridge the gap between education and employment by equipping learners with the right skills, guidance, and opportunities.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Objectives Section */}
      <section className="section-alt" style={{ padding: '64px 0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-tag">
              <HiSparkles size={14} style={{ color: '#f2b733' }} />
              Strategic Goals
            </span>
            <h2 style={{ color: '#000648', fontSize: 'clamp(1.7rem, 2.8vw, 2.2rem)', fontWeight: 900, marginTop: '6px' }}>
              Core Objectives
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', width: '100%' }}>
            {coreObjectives.map((obj) => (
              <div 
                key={obj.num} 
                style={{
                  display: 'flex', flexDirection: 'column',
                  background: '#ffffff', padding: '24px 22px', borderRadius: '14px',
                  border: '1.5px solid #e2e8f0', boxShadow: '0 4px 16px rgba(0,6,72,0.05)',
                  transition: 'border-color 0.25s ease, transform 0.25s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#000648';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <div style={{
                    background: '#000648', color: '#f2b733',
                    width: '42px', height: '42px', borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    {obj.icon}
                  </div>
                  <span style={{
                    fontSize: '1.2rem', fontWeight: 900, color: '#f2b733', background: '#000648',
                    padding: '2px 10px', borderRadius: '50px'
                  }}>
                    0{obj.num}
                  </span>
                </div>
                
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#000648', marginBottom: '8px' }}>
                  {obj.num}. {obj.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#475569', margin: 0, lineHeight: 1.65 }}>
                  {obj.desc}
                </p>
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
