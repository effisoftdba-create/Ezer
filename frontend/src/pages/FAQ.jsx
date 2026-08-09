import React from 'react';
import FAQAccordion from '../components/FAQAccordion';
import CTABanner from '../components/CTABanner';
import { useSiteData } from '../Admin_Control/context/SiteContext';

export default function FAQ({ onOpenDemoModal }) {
  const { faqList } = useSiteData();

  return (
    <div>
      {/* Header Banner */}
      <section
        style={{
          background: '#000648',
          color: '#ffffff',
          padding: '72px 0 60px',
          textAlign: 'center',
          borderBottom: '3px solid #f2b733',
        }}
      >
        <div className="container">
          <span
            style={{
              background: 'rgba(242, 183, 51, 0.15)',
              border: '1.5px solid rgba(242, 183, 51, 0.4)',
              color: '#f2b733',
              fontSize: '0.8rem',
              fontWeight: 800,
              padding: '6px 16px',
              borderRadius: '50px',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              display: 'inline-block',
              marginBottom: '16px',
            }}
          >
            EZER Support & Knowledge Base
          </span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 900, color: '#ffffff', marginBottom: '16px' }}>
            Frequently Asked Questions
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.88)', maxWidth: '680px', margin: '0 auto', lineHeight: 1.6 }}>
            Find clear answers to questions regarding live online classes, placement assistance, 3-year community access, and payment options.
          </p>
        </div>
      </section>

      {/* Main FAQ Accordion Container */}
      <section className="section" style={{ padding: '72px 0', background: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '860px', display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {Array.isArray(faqList) && faqList.map((categoryGroup) => (
            <div key={categoryGroup.category || categoryGroup.id}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#000648', marginBottom: '16px', paddingBottom: '8px', borderBottom: '2px solid #f2b733', display: 'inline-block' }}>
                {categoryGroup.category} Questions
              </h2>
              <FAQAccordion items={categoryGroup.items} />
            </div>
          ))}
        </div>
      </section>

      <CTABanner onOpenDemoModal={onOpenDemoModal} />
    </div>
  );
}
