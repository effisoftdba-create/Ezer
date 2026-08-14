import React from 'react';
import { HiLocationMarker, HiPhone, HiMail, HiClock } from 'react-icons/hi';
import { useSiteData } from '../../context/SiteContext';

export default function ContactInfoCards() {
  const { contactInfo } = useSiteData();

  const supportHours = contactInfo?.workingHours || contactInfo?.hours || 'Mon - Sat: 9:00 AM - 7:00 PM';

  const cards = [
    {
      title: 'Headquarters Location',
      icon: <HiLocationMarker />,
      content: (
        <>
          <strong style={{ color: '#000648', display: 'block', marginBottom: '2px' }}>EZER Learning Solutions</strong>
          <span style={{ color: '#475569', fontSize: '0.88rem', lineHeight: 1.5 }}>
            {(contactInfo?.address || 'Plot No: 90, 3rd Cross Street, Phase-2, Thirumalai Nagar Annexe, Perungudi, Chennai - 600096, Tamil Nadu, India').replace(/^EZER Learning Solutions\s*/i, '').replace(/^Ezer Learning Solutions\s*/i, '')}
          </span>
        </>
      ),
    },
    {
      title: 'Advisory Support Line',
      icon: <HiPhone />,
      content: (
        <>
          <span style={{ color: '#64748b', fontSize: '0.82rem', display: 'block', marginBottom: '2px' }}>
            Speak directly with a course counselor:
          </span>
          <a href={`tel:${contactInfo?.phone || '+91 98765 43210'}`} style={{ fontSize: '1.05rem', fontWeight: 800, color: '#000648', marginTop: '2px', display: 'inline-block', textDecoration: 'none' }}>
            {contactInfo?.phone || '+91 98765 43210'}
          </a>
        </>
      ),
    },
    {
      title: 'Official Inquiry Email',
      icon: <HiMail />,
      content: (
        <>
          <span style={{ color: '#64748b', fontSize: '0.82rem', display: 'block', marginBottom: '2px' }}>
            For corporate partnerships & admissions:
          </span>
          <a href={`mailto:${contactInfo?.email || 'support@ezerlearning.com'}`} style={{ fontSize: '0.95rem', fontWeight: 800, color: '#000648', marginTop: '2px', display: 'inline-block', textDecoration: 'none' }}>
            {contactInfo?.email || 'support@ezerlearning.com'}
          </a>
        </>
      ),
    },
    {
      title: 'Support & Business Hours',
      icon: <HiClock />,
      content: (
        <>
          <span style={{ color: '#64748b', fontSize: '0.82rem', display: 'block', marginBottom: '2px' }}>
            Advisory Desk & Student Support:
          </span>
          <span style={{ fontSize: '0.96rem', fontWeight: 800, color: '#000648', display: 'inline-block' }}>
            {supportHours}
          </span>
        </>
      ),
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {cards.map((card) => (
        <div
          key={card.title}
          style={{
            background: '#ffffff',
            borderRadius: '16px',
            padding: '24px',
            border: '1.5px solid #e2e8f0',
            boxShadow: '0 4px 16px rgba(0, 6, 72, 0.05)',
            display: 'flex',
            gap: '18px',
            alignItems: 'flex-start',
            transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#000648';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,6,72,0.12)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#e2e8f0';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 6, 72, 0.05)';
          }}
        >
          <div
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '12px',
              background: '#000648',
              border: '1.5px solid #f2b733',
              color: '#f2b733',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.35rem',
              flexShrink: 0,
              boxShadow: '0 4px 12px rgba(0,6,72,0.2)',
            }}
          >
            {card.icon}
          </div>
          <div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#000648', marginBottom: '6px' }}>
              {card.title}
            </h3>
            <div style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6 }}>
              {card.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
