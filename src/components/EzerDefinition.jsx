import React from 'react';
import { HiSparkles, HiCheckCircle } from 'react-icons/hi';

export default function EzerDefinition() {
  return (
    <section 
      style={{
        padding: '72px 0',
        background: '#ffffff',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <div className="container">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center'
          }}
        >
          
          {/* Left Side: Graphic with Polygon Backdrop & Floating Badges (Reference Image 2) */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            
            {/* Green Geometric Polygon Shapes */}
            <div 
              style={{
                position: 'absolute',
                top: '-20px',
                left: '5%',
                width: '90%',
                height: '105%',
                background: 'linear-gradient(135deg, rgba(13, 186, 75, 0.15) 0%, rgba(13, 186, 75, 0.05) 100%)',
                clipPath: 'polygon(15% 0%, 100% 10%, 85% 100%, 0% 85%)',
                borderRadius: '24px',
                zIndex: 1
              }} 
            />

            <div 
              style={{
                position: 'absolute',
                top: '10px',
                right: '2%',
                width: '80%',
                height: '95%',
                border: '2px solid rgba(13, 186, 75, 0.35)',
                clipPath: 'polygon(20% 0%, 100% 20%, 80% 100%, 0% 80%)',
                borderRadius: '24px',
                zIndex: 1
              }} 
            />

            {/* Main Student Portrait Image */}
            <div 
              style={{
                position: 'relative',
                zIndex: 2,
                maxWidth: '400px',
                width: '100%',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0, 6, 72, 0.08)'
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=700&h=800" 
                alt="EZER Learner" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            {/* Floating Language/Tech Circles (Reference Image 2) */}
            <div 
              style={{
                position: 'absolute', top: '10%', left: '0%', zIndex: 3,
                width: '44px', height: '44px', borderRadius: '50%',
                background: '#ffffff', color: '#0dba4b', fontWeight: 900, fontSize: '1.1rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 6px 16px rgba(0,0,0,0.12)', border: '1px solid #e2e8f0'
              }}
            >
              அ
            </div>

            <div 
              style={{
                position: 'absolute', top: '35%', right: '-3%', zIndex: 3,
                width: '42px', height: '42px', borderRadius: '50%',
                background: '#ffffff', color: '#0dba4b', fontWeight: 900, fontSize: '1rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 6px 16px rgba(0,0,0,0.12)', border: '1px solid #e2e8f0'
              }}
            >
              A
            </div>

            <div 
              style={{
                position: 'absolute', bottom: '15%', left: '-2%', zIndex: 3,
                width: '46px', height: '46px', borderRadius: '50%',
                background: '#ffffff', color: '#0dba4b', fontWeight: 900, fontSize: '1.1rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 6px 16px rgba(0,0,0,0.12)', border: '1px solid #e2e8f0'
              }}
            >
              క
            </div>

            <div 
              style={{
                position: 'absolute', bottom: '10%', right: '10%', zIndex: 3,
                width: '40px', height: '40px', borderRadius: '50%',
                background: '#ffffff', color: '#0dba4b', fontWeight: 900, fontSize: '1rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 6px 16px rgba(0,0,0,0.12)', border: '1px solid #e2e8f0'
              }}
            >
              ம
            </div>

          </div>

          {/* Right Side: Headline, Paragraph, and EZER Definition Tagline (Reference Image 2) */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span className="section-tag" style={{ margin: 0 }}>
                <HiSparkles size={14} style={{ color: '#f2b733' }} />
                Empowering Career Switchers
              </span>
            </div>

            <h2 
              style={{
                fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)',
                fontWeight: 900,
                color: '#1f2937',
                lineHeight: 1.25,
                marginBottom: '18px'
              }}
            >
              Leading EdTech Platform for Learning in Native Languages & Real IT Skills.
            </h2>

            <p 
              style={{
                fontSize: '0.96rem',
                color: '#475569',
                lineHeight: 1.7,
                marginBottom: '28px'
              }}
            >
              EZER Learning Solution is India's top tech-driven EdTech platform delivering live online, practical, job-oriented IT courses. Taught by corporate-experienced IT professionals, EZER offers personalized live online training, hands-on labs, 1-year placement support, and up to 3 years of community access.
            </p>

            {/* Key Trust Highlights */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '12px',
                marginBottom: '32px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <HiCheckCircle size={20} style={{ color: '#0dba4b', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1f2937' }}>Live Online Instructor-Led</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <HiCheckCircle size={20} style={{ color: '#0dba4b', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1f2937' }}>1-Year LMS & Placement Support</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <HiCheckCircle size={20} style={{ color: '#0dba4b', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1f2937' }}>3-Year Community Access</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <HiCheckCircle size={20} style={{ color: '#0dba4b', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1f2937' }}>Hands-on Real World Labs</span>
              </div>
            </div>

            {/* EZER Definition Line matching Reference Image 2 ("HCL GUVI - Grab Ur Vernacular Imprint") */}
            <div 
              style={{
                paddingTop: '20px',
                borderTop: '1px solid #e2e8f0',
                fontSize: '1.05rem',
                fontWeight: 800,
                color: '#1f2937',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                flexWrap: 'wrap'
              }}
            >
              <span style={{ color: '#0dba4b', fontWeight: 900 }}>EZER</span>
              <span>—</span>
              <span>
                <strong style={{ color: '#0dba4b' }}>E</strong>mpowering <strong style={{ color: '#0dba4b' }}>Z</strong>ero-to-Hero <strong style={{ color: '#0dba4b' }}>E</strong>ducation & <strong style={{ color: '#0dba4b' }}>R</strong>eal Career Transformations
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
