import React from 'react';
import { HiCheckCircle, HiLightBulb, HiShieldCheck, HiUserGroup, HiAcademicCap, HiSparkles } from 'react-icons/hi';
import CTABanner from '../components/CTABanner';

const gallery = [
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=500',
  'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800&h=500',
  'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800&h=500',
];

const diffPoints = [
  {
    title: 'Support On Both Sides of Employment',
    desc: 'Pre-employment resume reviews and mock interviews before your first job, plus up to 1 year of continuous placement assistance after graduation.'
  },
  {
    title: 'Structured Pathway for Career Switchers',
    desc: 'Designed specifically to help non-IT graduates, diploma holders, and professionals with career gaps transition into software roles with confidence.'
  },
  {
    title: '3-Year Community & Mentorship Model',
    desc: 'Learning does not end when class finishes. Access senior mentors, code reviews, and alumni peer networks for 3 full years.'
  },
  {
    title: 'Corporate Practitioner Faculty',
    desc: 'Taught exclusively by working tech leads, DevOps architects, and QA leads who manage live corporate production environments.'
  },
  {
    title: 'Industry-Current Hands-On Labs',
    desc: 'Practical-first curriculum centered around real-world projects, CI/CD toolchains, Playwright automation, and deployed ML pipelines.'
  },
];

export default function About({ onOpenDemoModal }) {
  return (
    <div style={{ background: '#ffffff' }}>

      {/* Hero Banner */}
      <section style={{
        background: '#000648', padding: '72px 0 56px', color: '#fff', textAlign: 'center',
        backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(242,183,51,0.12) 0%, transparent 60%)',
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
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', maxWidth: '660px', margin: '0 auto', lineHeight: 1.6 }}>
            EZER Learning Solutions is a Chennai-based premier IT training institute delivering live online, practical, outcome-driven programs backed by pre- and post-employment support.
          </p>
        </div>
      </section>

      {/* Image Gallery Showcase */}
      <section style={{ padding: '48px 0', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
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
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founding Story */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <span className="section-tag">
            <HiSparkles size={14} style={{ color: '#f2b733' }} />
            Why EZER Was Built
          </span>
          <h2 style={{ color: '#000648', fontSize: 'clamp(1.7rem, 2.8vw, 2.2rem)', marginBottom: '16px', marginTop: '6px' }}>
            Our Founding Story
          </h2>
          <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.75, marginBottom: '20px' }}>
            We identified a fundamental flaw in traditional IT training: too much passive theory and virtually zero follow-through once the course ends. Learners were left stranded after completing classes without real project portfolios or corporate interview practice.
          </p>
          <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.75 }}>
            EZER Learning Solutions was founded to redefine IT education. We built a mentorship model where learning takes place in live production-style labs led by senior corporate engineers, and placement support extends for 1 full year after graduation alongside 3-year community access.
          </p>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section style={{ padding: '64px 0', background: '#000648', color: '#ffffff', borderTop: '3px solid #f2b733' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{
              background: 'rgba(242,183,51,0.15)', color: '#f2b733', border: '1px solid rgba(242,183,51,0.4)',
              fontSize: '0.75rem', fontWeight: 800, padding: '4px 14px', borderRadius: '50px', textTransform: 'uppercase', letterSpacing: '0.06em'
            }}>
              Our Core Purpose
            </span>
            <h2 style={{ color: '#ffffff', fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', marginTop: '8px' }}>
              Guiding Principles That Drive Student Success
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            
            {/* Our Mission Card */}
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              border: '2px solid #f2b733',
              borderRadius: '16px',
              padding: '36px 28px',
              boxShadow: '0 12px 32px rgba(0, 0, 0, 0.3)',
              display: 'flex', flexDirection: 'column',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{
                width: '48px', height: '48px', borderRadius: '12px',
                background: '#f2b733', color: '#000648',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '20px', boxShadow: '0 4px 16px rgba(242,183,51,0.3)'
              }}>
                <HiLightBulb size={26} />
              </div>
              <h3 style={{ color: '#f2b733', fontSize: '1.35rem', fontWeight: 900, marginBottom: '12px', letterSpacing: '-0.01em' }}>
                Our Mission
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '20px', flexGrow: 1 }}>
                "To make high-growth IT careers accessible to every aspiring learner through live, practical, mentor-led training — backed by outcome support that extends well beyond the classroom."
              </p>
              
              <div style={{ borderTop: '1px solid rgba(242,183,51,0.2)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#f2b733', fontWeight: 700 }}>
                  <HiCheckCircle size={16} /> 100% Live Instructor-Led Classes
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#f2b733', fontWeight: 700 }}>
                  <HiCheckCircle size={16} /> Practical Corporate Toolchain Labs
                </div>
              </div>
            </div>

            {/* Our Vision Card */}
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              border: '2px solid #f2b733',
              borderRadius: '16px',
              padding: '36px 28px',
              boxShadow: '0 12px 32px rgba(0, 0, 0, 0.3)',
              display: 'flex', flexDirection: 'column',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{
                width: '48px', height: '48px', borderRadius: '12px',
                background: '#f2b733', color: '#000648',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '20px', boxShadow: '0 4px 16px rgba(242,183,51,0.3)'
              }}>
                <HiShieldCheck size={26} />
              </div>
              <h3 style={{ color: '#f2b733', fontSize: '1.35rem', fontWeight: 900, marginBottom: '12px', letterSpacing: '-0.01em' }}>
                Our Vision
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '20px', flexGrow: 1 }}>
                "To become India's most trusted outcome-driven IT training institute, recognized as much for the long-term career support we provide after placement as for our curriculum excellence."
              </p>
              
              <div style={{ borderTop: '1px solid rgba(242,183,51,0.2)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#f2b733', fontWeight: 700 }}>
                  <HiCheckCircle size={16} /> 1-Year Post-Employment Assistance
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#f2b733', fontWeight: 700 }}>
                  <HiCheckCircle size={16} /> 3-Year Active Alumni Network
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What Makes EZER Different */}
      <section className="section-alt" style={{ padding: '64px 0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span className="section-tag">Competitive Distinction</span>
            <h2 style={{ color: '#000648' }}>What Makes EZER Different</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {diffPoints.map((item) => (
              <div key={item.title} style={{
                display: 'flex', alignItems: 'flex-start', gap: '16px',
                background: '#ffffff', padding: '20px 24px', borderRadius: '12px',
                border: '1.5px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,6,72,0.04)',
                transition: 'border-color 0.2s ease, transform 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#000648';
                e.currentTarget.style.transform = 'translateX(4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
              >
                <div style={{
                  background: '#000648', color: '#f2b733',
                  padding: '6px', borderRadius: '8px', flexShrink: 0, marginTop: '2px'
                }}>
                  <HiCheckCircle size={18} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#000648', marginBottom: '4px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#475569', margin: 0, lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Trust Stats */}
      <section className="section" style={{ padding: '56px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', textAlign: 'center' }}>
            {[
              { num: '5+', label: 'Years Active in IT Education' },
              { num: '15+', label: 'Combined Years of Practitioner Trainer Experience' },
              { num: 'ISO', label: 'ISO Certified Training Quality Management' },
              { num: '1 Year', label: 'Post-Graduation Job Placement Support' },
            ].map((s) => (
              <div key={s.label} style={{ 
                padding: '28px 20px', background: '#ffffff', borderRadius: '14px', 
                border: '1.5px solid #e2e8f0', boxShadow: '0 4px 16px rgba(0,6,72,0.05)'
              }}>
                <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#000648', marginBottom: '4px' }}>
                  <span style={{ color: '#f2b733' }}>{s.num}</span>
                </div>
                <div style={{ color: '#475569', fontSize: '0.82rem', fontWeight: 700 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fixed High-Quality Image Grid at Bottom (Fixing image cropping issue from user feedback) */}
      <section style={{ padding: '0 0 64px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
            {/* Image 1 — Properly framed team meeting with center top position */}
            <div style={{ borderRadius: '16px', overflow: 'hidden', height: '280px', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 16px rgba(0,6,72,0.08)' }}>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000&h=600" 
                alt="EZER Learning Team Collaboration" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }} 
              />
            </div>
            
            {/* Image 2 — Properly framed classroom high-five with center position */}
            <div style={{ borderRadius: '16px', overflow: 'hidden', height: '280px', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 16px rgba(0,6,72,0.08)' }}>
              <img 
                src="https://images.unsplash.com/photo-1531498860502-7c67cf02f657?auto=format&fit=crop&q=80&w=1000&h=600" 
                alt="EZER Mentorship Success" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} 
              />
            </div>
          </div>
        </div>
      </section>

      <CTABanner onOpenDemoModal={onOpenDemoModal} />
    </div>
  );
}

