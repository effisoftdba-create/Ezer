import React, { useState } from 'react';
import { LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const baseLogosRow1 = [
  {
    id: 'tcs',
    name: 'TCS',
    icon: (
      <svg viewBox="0 0 190 50" style={{ height: '28px' }}>
        <path d="M10 12 L45 12 M27.5 12 L27.5 40" stroke="#000648" strokeWidth="6" strokeLinecap="square" />
        <text x="50" y="38" fontFamily="DM Sans, sans-serif" fontSize="30" fontWeight="900" fill="#000648" letterSpacing="-0.5px">TCS</text>
        <rect x="115" y="16" width="3" height="24" fill="#f2b733" />
        <text x="126" y="36" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="900" fill="#000648" letterSpacing="1px">TATA</text>
      </svg>
    )
  },
  {
    id: 'infosys',
    name: 'Infosys',
    icon: (
      <svg viewBox="0 0 150 50" style={{ height: '28px' }}>
        <text x="5" y="36" fontFamily="DM Sans, sans-serif" fontSize="32" fontWeight="900" fill="#006699" letterSpacing="-1px">Infosys</text>
      </svg>
    )
  },
  {
    id: 'wipro',
    name: 'Wipro',
    icon: (
      <svg viewBox="0 0 150 50" style={{ height: '28px' }}>
        <circle cx="16" cy="18" r="5" fill="#e42528" />
        <circle cx="28" cy="18" r="5" fill="#f2b733" />
        <circle cx="16" cy="30" r="5" fill="#006699" />
        <circle cx="28" cy="30" r="5" fill="#0dba4b" />
        <text x="42" y="36" fontFamily="DM Sans, sans-serif" fontSize="28" fontWeight="900" fill="#000648">wipro</text>
      </svg>
    )
  },
  {
    id: 'hcltech',
    name: 'HCLTech',
    icon: (
      <svg viewBox="0 0 170 50" style={{ height: '28px' }}>
        <text x="5" y="36" fontFamily="DM Sans, sans-serif" fontSize="32" fontWeight="900" fill="#00529b">HCL</text>
        <text x="80" y="36" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="800" fill="#f2b733">Tech</text>
      </svg>
    )
  },
  {
    id: 'zoho',
    name: 'Zoho',
    icon: (
      <svg viewBox="0 0 160 50" style={{ height: '28px' }}>
        <rect x="4" y="10" width="28" height="28" rx="6" fill="#e42528" />
        <text x="11" y="32" fontFamily="sans-serif" fontSize="20" fontWeight="900" fill="#fff">Z</text>
        <rect x="36" y="10" width="28" height="28" rx="6" fill="#006699" />
        <text x="42" y="32" fontFamily="sans-serif" fontSize="20" fontWeight="900" fill="#fff">O</text>
        <rect x="68" y="10" width="28" height="28" rx="6" fill="#0dba4b" />
        <text x="74" y="32" fontFamily="sans-serif" fontSize="20" fontWeight="900" fill="#fff">H</text>
        <rect x="100" y="10" width="28" height="28" rx="6" fill="#f2b733" />
        <text x="106" y="32" fontFamily="sans-serif" fontSize="20" fontWeight="900" fill="#000648">O</text>
      </svg>
    )
  }
];

const baseLogosRow2 = [
  {
    id: 'capgemini',
    name: 'Capgemini',
    icon: (
      <svg viewBox="0 0 190 50" style={{ height: '28px' }}>
        <path d="M12 25 C12 15, 25 10, 25 25 C25 40, 38 35, 38 25" stroke="#0070ad" strokeWidth="5" fill="none" strokeLinecap="round" />
        <text x="48" y="34" fontFamily="DM Sans, sans-serif" fontSize="26" fontWeight="900" fill="#0070ad">Capgemini</text>
      </svg>
    )
  },
  {
    id: 'accenture',
    name: 'Accenture',
    icon: (
      <svg viewBox="0 0 180 50" style={{ height: '28px' }}>
        <text x="5" y="36" fontFamily="DM Sans, sans-serif" fontSize="28" fontWeight="900" fill="#000648">accenture</text>
        <path d="M136 12 L150 22 L136 32" stroke="#a100ff" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    id: 'cognizant',
    name: 'Cognizant',
    icon: (
      <svg viewBox="0 0 170 50" style={{ height: '28px' }}>
        <text x="5" y="35" fontFamily="DM Sans, sans-serif" fontSize="27" fontWeight="900" fill="#0033a0">Cognizant</text>
      </svg>
    )
  },
  {
    id: 'amazon',
    name: 'Amazon',
    icon: (
      <svg viewBox="0 0 150 50" style={{ height: '28px' }}>
        <text x="5" y="32" fontFamily="DM Sans, sans-serif" fontSize="28" fontWeight="900" fill="#131921">amazon</text>
        <path d="M10 38 Q 55 46, 95 35" fill="none" stroke="#ff9900" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M90 32 L98 35 L93 40" fill="none" stroke="#ff9900" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    id: 'google',
    name: 'Google',
    icon: (
      <svg viewBox="0 0 150 50" style={{ height: '28px' }}>
        <text x="5" y="36" fontFamily="DM Sans, sans-serif" fontSize="32" fontWeight="900" fill="#4285F4">G</text>
        <text x="34" y="36" fontFamily="DM Sans, sans-serif" fontSize="32" fontWeight="900" fill="#EA4335">o</text>
        <text x="56" y="36" fontFamily="DM Sans, sans-serif" fontSize="32" fontWeight="900" fill="#FBBC05">o</text>
        <text x="78" y="36" fontFamily="DM Sans, sans-serif" fontSize="32" fontWeight="900" fill="#4285F4">g</text>
        <text x="100" y="36" fontFamily="DM Sans, sans-serif" fontSize="32" fontWeight="900" fill="#34A853">l</text>
        <text x="110" y="36" fontFamily="DM Sans, sans-serif" fontSize="32" fontWeight="900" fill="#EA4335">e</text>
      </svg>
    )
  }
];

const baseLogosRow3 = [
  {
    id: 'microsoft',
    name: 'Microsoft',
    icon: (
      <svg viewBox="0 0 170 50" style={{ height: '28px' }}>
        <rect x="5" y="10" width="13" height="13" fill="#f25022" />
        <rect x="21" y="10" width="13" height="13" fill="#7fba00" />
        <rect x="5" y="26" width="13" height="13" fill="#00a4ef" />
        <rect x="21" y="26" width="13" height="13" fill="#ffb900" />
        <text x="42" y="34" fontFamily="DM Sans, sans-serif" fontSize="26" fontWeight="800" fill="#475569">Microsoft</text>
      </svg>
    )
  },
  {
    id: 'ibm',
    name: 'IBM',
    icon: (
      <svg viewBox="0 0 130 50" style={{ height: '28px' }}>
        <text x="5" y="36" fontFamily="monospace" fontSize="36" fontWeight="900" fill="#052FAD" letterSpacing="2px">IBM</text>
      </svg>
    )
  },
  {
    id: 'freshworks',
    name: 'Freshworks',
    icon: (
      <svg viewBox="0 0 180 50" style={{ height: '28px' }}>
        <circle cx="18" cy="25" r="12" fill="#ff5a5f" />
        <text x="36" y="34" fontFamily="DM Sans, sans-serif" fontSize="24" fontWeight="900" fill="#000648">freshworks</text>
      </svg>
    )
  },
  {
    id: 'tcs-3',
    name: 'TCS',
    icon: (
      <svg viewBox="0 0 190 50" style={{ height: '28px' }}>
        <path d="M10 12 L45 12 M27.5 12 L27.5 40" stroke="#000648" strokeWidth="6" strokeLinecap="square" />
        <text x="50" y="38" fontFamily="DM Sans, sans-serif" fontSize="30" fontWeight="900" fill="#000648" letterSpacing="-0.5px">TCS</text>
        <rect x="115" y="16" width="3" height="24" fill="#f2b733" />
        <text x="126" y="36" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="900" fill="#000648" letterSpacing="1px">TATA</text>
      </svg>
    )
  },
  {
    id: 'zoho-3',
    name: 'Zoho',
    icon: (
      <svg viewBox="0 0 160 50" style={{ height: '28px' }}>
        <rect x="4" y="10" width="28" height="28" rx="6" fill="#e42528" />
        <text x="11" y="32" fontFamily="sans-serif" fontSize="20" fontWeight="900" fill="#fff">Z</text>
        <rect x="36" y="10" width="28" height="28" rx="6" fill="#006699" />
        <text x="42" y="32" fontFamily="sans-serif" fontSize="20" fontWeight="900" fill="#fff">O</text>
        <rect x="68" y="10" width="28" height="28" rx="6" fill="#0dba4b" />
        <text x="74" y="32" fontFamily="sans-serif" fontSize="20" fontWeight="900" fill="#fff">H</text>
        <rect x="100" y="10" width="28" height="28" rx="6" fill="#f2b733" />
        <text x="106" y="32" fontFamily="sans-serif" fontSize="20" fontWeight="900" fill="#000648">O</text>
      </svg>
    )
  }
];

// Quadrupled arrays for continuous infinite smooth CSS ticker
const makeInfiniteTrack = (items) => [
  ...items.map((item, i) => ({ ...item, uId: `${item.id}-a-${i}` })),
  ...items.map((item, i) => ({ ...item, uId: `${item.id}-b-${i}` })),
  ...items.map((item, i) => ({ ...item, uId: `${item.id}-c-${i}` })),
  ...items.map((item, i) => ({ ...item, uId: `${item.id}-d-${i}` }))
];

const track1 = makeInfiniteTrack(baseLogosRow1);
const track2 = makeInfiniteTrack(baseLogosRow2);
const track3 = makeInfiniteTrack(baseLogosRow3);

function LogoCard({ logo }) {
  return (
    <m.div
      whileHover={{ scale: 1.06, borderColor: '#000648', boxShadow: '0 6px 18px rgba(0,6,72,0.12)' }}
      style={{
        height: '48px',
        padding: '6px 18px',
        background: '#ffffff',
        borderRadius: '12px',
        border: '1.5px solid #e2e8f0',
        boxShadow: '0 2px 8px rgba(0, 6, 72, 0.05)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        cursor: 'pointer',
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
      }}
    >
      {logo.icon}
    </m.div>
  );
}

export default function CompanyLogos() {
  const [speedMultiplier, setSpeedMultiplier] = useState(1);
  const shouldReduceMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        style={{
          padding: '32px 0 36px',
          background: '#ffffff',
          borderBottom: '1px solid #e2e8f0',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* CSS Keyframes for High Speed Infinite Marquee Scroll */}
        <style>{`
          @keyframes ezerMarqueeLeft {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          @keyframes ezerMarqueeRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
          .marquee-track-1 {
            display: flex;
            gap: 16px;
            width: max-content;
            animation: ezerMarqueeLeft ${12 / speedMultiplier}s linear infinite;
          }
          .marquee-track-2 {
            display: flex;
            gap: 16px;
            width: max-content;
            animation: ezerMarqueeRight ${12 / speedMultiplier}s linear infinite;
          }
          .marquee-track-3 {
            display: flex;
            gap: 16px;
            width: max-content;
            animation: ezerMarqueeLeft ${12 / speedMultiplier}s linear infinite;
          }
          .marquee-row-wrapper:hover .marquee-track-1,
          .marquee-row-wrapper:hover .marquee-track-2,
          .marquee-row-wrapper:hover .marquee-track-3 {
            animation-play-state: paused;
          }
        `}</style>

        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <div>
            <span className="section-tag" style={{ fontSize: '0.68rem', padding: '3px 10px' }}>
              Corporate Hiring Partners
            </span>
            <h3
              style={{
                fontSize: '0.96rem',
                fontWeight: 800,
                color: '#000648',
                marginTop: '4px',
                letterSpacing: '-0.01em',
              }}
            >
              Our Graduates Are Hired At Top Global Technology Companies
            </h3>
          </div>

          {/* Speed Toggle Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto' }}>
            <button
              type="button"
              onClick={() => setSpeedMultiplier(prev => (prev === 1 ? 1.8 : 1))}
              aria-label="Toggle Auto Scroll Speed"
              style={{
                padding: '6px 14px',
                borderRadius: '50px',
                border: '1.5px solid #000648',
                background: speedMultiplier > 1 ? '#000648' : '#ffffff',
                color: speedMultiplier > 1 ? '#f2b733' : '#000648',
                fontSize: '0.75rem',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 2px 6px rgba(0, 6, 72, 0.08)'
              }}
            >
              🚀 {speedMultiplier > 1 ? 'Fast Auto-Scroll ON' : 'Boost Scroll Speed'}
            </button>
          </div>
        </div>

        {/* 3-Row Infinite Ticker Container (1st Left->Right, 2nd Right->Left, 3rd Left->Right) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', overflow: 'hidden' }}>
          
          {/* Row 1: Left to Right Scroll */}
          <div className="marquee-row-wrapper" style={{ overflow: 'hidden', padding: '2px 0' }}>
            <div className="marquee-track-1">
              {track1.map((logo) => (
                <LogoCard key={logo.uId} logo={logo} />
              ))}
            </div>
          </div>

          {/* Row 2: Right to Left Scroll */}
          <div className="marquee-row-wrapper" style={{ overflow: 'hidden', padding: '2px 0' }}>
            <div className="marquee-track-2">
              {track2.map((logo) => (
                <LogoCard key={logo.uId} logo={logo} />
              ))}
            </div>
          </div>

          {/* Row 3: Left to Right Scroll */}
          <div className="marquee-row-wrapper" style={{ overflow: 'hidden', padding: '2px 0' }}>
            <div className="marquee-track-3">
              {track3.map((logo) => (
                <LogoCard key={logo.uId} logo={logo} />
              ))}
            </div>
          </div>

        </div>
      </section>
    </LazyMotion>
  );
}
