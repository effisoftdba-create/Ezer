import React from 'react';
import { HiLocationMarker, HiPhone, HiMail, HiClock } from 'react-icons/hi';

const cards = [
  {
    title: 'Headquarters Location',
    icon: <HiLocationMarker />,
    content: (
      <>
        EZER Learning Solutions<br />
        IT Highway Road, Taramani / Velachery Tech Hub,<br />
        Chennai – 600113, Tamil Nadu, India
      </>
    ),
  },
  {
    title: 'Advisory Support Line',
    icon: <HiPhone />,
    content: (
      <>
        Speak directly with a course counselor:<br />
        <a href="tel:+919876543210" style={{ fontSize: '1.05rem', fontWeight: 800, color: '#000648', marginTop: '4px', display: 'inline-block' }}>
          +91 98765 43210
        </a>
      </>
    ),
  },
  {
    title: 'Official Inquiry Email',
    icon: <HiMail />,
    content: (
      <>
        For corporate partnerships & admissions:<br />
        <a href="mailto:info@ezerlearning.com" style={{ fontSize: '0.95rem', fontWeight: 800, color: '#000648', marginTop: '4px', display: 'inline-block' }}>
          info@ezerlearning.com
        </a>
      </>
    ),
  },
  {
    title: 'Advisory Desk Hours',
    icon: <HiClock />,
    content: (
      <>
        Monday – Saturday: 9:00 AM – 7:30 PM IST<br />
        Sunday: 10:00 AM – 2:00 PM IST (Online Support)
      </>
    ),
  },
];

export default function ContactInfoCards() {
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

