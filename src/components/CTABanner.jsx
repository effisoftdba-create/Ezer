import React from 'react';
import { HiArrowRight } from 'react-icons/hi';

export default function CTABanner({ onOpenDemoModal }) {
  return (
    <section style={{
      background: '#000648', padding: '56px 0',
      backgroundImage: 'radial-gradient(ellipse at 20% 50%, rgba(242,183,51,0.12) 0%, transparent 60%)',
      borderTop: '2px solid #f2b733',
    }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ color: '#fff', fontSize: 'clamp(1.4rem, 2.4vw, 1.8rem)', marginBottom: '10px' }}>
          Not sure which course fits your goals?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', maxWidth: '520px', margin: '0 auto 24px auto' }}>
          Book a free 1-on-1 counselling call with EZER Learning Solution and get a personalised learning path.
        </p>
        <button 
          type="button" 
          onClick={onOpenDemoModal} 
          className="btn btn-primary"
          style={{
            padding: '12px 28px', borderRadius: '8px',
            fontSize: '0.88rem', fontWeight: 800,
          }}
        >
          Book Free Counselling Call <HiArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}

