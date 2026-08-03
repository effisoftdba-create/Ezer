import React from 'react';
import { HiSparkles, HiCheckCircle } from 'react-icons/hi';
import { useSiteData } from '../Admin_Control/context/SiteContext';

export default function EzerDefinition() {
  const { ezerDefinition } = useSiteData();

  return (
    <section 
      id="ezer-definition"
      style={{
        padding: '72px 0',
        background: '#ffffff',
        overflow: 'hidden',
        position: 'relative',
        borderBottom: '1px solid #e2e8f0'
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
          
          {/* Left Side: Graphic with Polygon Backdrop & Floating Badges */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            
            {/* Gold Geometric Polygon Shapes matching EZER Brand Palette */}
            <div 
              style={{
                position: 'absolute',
                top: '-20px',
                left: '5%',
                width: '90%',
                height: '105%',
                background: 'linear-gradient(135deg, rgba(242, 183, 51, 0.22) 0%, rgba(0, 6, 72, 0.08) 100%)',
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
                border: '2.5px solid #f2b733',
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
                boxShadow: '0 20px 40px rgba(0, 6, 72, 0.14)',
                border: '3px solid #000648'
              }}
            >
              <img 
                src={ezerDefinition.image} 
                alt="EZER Learner" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            {/* Floating Language Circles */}
            <div 
              style={{
                position: 'absolute', top: '8%', left: '-2%', zIndex: 3,
                width: '46px', height: '46px', borderRadius: '50%',
                background: '#000648', color: '#f2b733', fontWeight: 900, fontSize: '1.15rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 6px 18px rgba(0,6,72,0.25)', border: '2px solid #f2b733'
              }}
            >
              அ
            </div>

            <div 
              style={{
                position: 'absolute', top: '35%', right: '-4%', zIndex: 3,
                width: '44px', height: '44px', borderRadius: '50%',
                background: '#000648', color: '#f2b733', fontWeight: 900, fontSize: '1.05rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 6px 18px rgba(0,6,72,0.25)', border: '2px solid #f2b733'
              }}
            >
              A
            </div>

            <div 
              style={{
                position: 'absolute', bottom: '15%', left: '-4%', zIndex: 3,
                width: '48px', height: '48px', borderRadius: '50%',
                background: '#000648', color: '#f2b733', fontWeight: 900, fontSize: '1.15rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 6px 18px rgba(0,6,72,0.25)', border: '2px solid #f2b733'
              }}
            >
              క
            </div>

            <div 
              style={{
                position: 'absolute', bottom: '8%', right: '8%', zIndex: 3,
                width: '44px', height: '44px', borderRadius: '50%',
                background: '#000648', color: '#f2b733', fontWeight: 900, fontSize: '1.05rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 6px 18px rgba(0,6,72,0.25)', border: '2px solid #f2b733'
              }}
            >
              ம
            </div>

          </div>

          {/* Right Side: Headline, Copy, and EZER Definition Tagline */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <span 
                style={{
                  background: 'rgba(0, 6, 72, 0.08)',
                  color: '#000648',
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  padding: '5px 14px',
                  borderRadius: '50px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <HiSparkles size={14} style={{ color: '#f2b733' }} />
                {ezerDefinition.tag}
              </span>
            </div>

            <h2 
              style={{
                fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)',
                fontWeight: 900,
                color: '#000648',
                lineHeight: 1.25,
                marginBottom: '18px'
              }}
            >
              {ezerDefinition.headline}
            </h2>

            <p 
              style={{
                fontSize: '0.96rem',
                color: '#334155',
                lineHeight: 1.7,
                marginBottom: '26px'
              }}
            >
              {ezerDefinition.description}
            </p>

            {/* Key Trust Highlights */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '14px',
                marginBottom: '32px'
              }}
            >
              {ezerDefinition.highlights?.map((feat) => (
                <div key={feat} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <HiCheckCircle size={20} style={{ color: '#000648', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#000648' }}>{feat}</span>
                </div>
              ))}
            </div>

            {/* EZER Definition Box */}
            <div 
              style={{
                background: '#000648',
                color: '#ffffff',
                padding: '16px 20px',
                borderRadius: '12px',
                borderLeft: '4px solid #f2b733',
                fontSize: '1rem',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                flexWrap: 'wrap',
                boxShadow: '0 4px 16px rgba(0, 6, 72, 0.15)'
              }}
            >
              <span>
                {ezerDefinition.acronymText}
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
