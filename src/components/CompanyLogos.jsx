import React, { useState } from 'react';
import { LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion';
import { useSiteData } from '../Admin_Control/context/SiteContext';
import { resolveImageSrc } from '../utils/imageUtils';


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

const BRAND_SVGS = {
  'tcs': '<svg viewBox="0 0 190 50" style="height:28px"><path d="M10 12 L45 12 M27.5 12 L27.5 40" stroke="#000648" stroke-width="6" stroke-linecap="square"/><text x="50" y="38" font-family="sans-serif" font-size="30" font-weight="900" fill="#000648" letter-spacing="-0.5px">TCS</text><rect x="115" y="16" width="3" height="24" fill="#f2b733"/><text x="126" y="36" font-family="sans-serif" font-size="16" font-weight="900" fill="#000648" letter-spacing="1px">TATA</text></svg>',
  'infosys': '<svg viewBox="0 0 150 50" style="height:28px"><text x="5" y="36" font-family="sans-serif" font-size="32" font-weight="900" fill="#006699" letter-spacing="-1px">Infosys</text></svg>',
  'wipro': '<svg viewBox="0 0 150 50" style="height:28px"><circle cx="16" cy="18" r="5" fill="#e42528"/><circle cx="28" cy="18" r="5" fill="#f2b733"/><circle cx="16" cy="30" r="5" fill="#006699"/><circle cx="28" cy="30" r="5" fill="#0dba4b"/><text x="42" y="36" font-family="sans-serif" font-size="28" font-weight="900" fill="#000648">wipro</text></svg>',
  'hcl': '<svg viewBox="0 0 170 50" style="height:28px"><text x="5" y="36" font-family="sans-serif" font-size="32" font-weight="900" fill="#00529b">HCL</text><text x="80" y="36" font-family="sans-serif" font-size="24" font-weight="800" fill="#f2b733">Tech</text></svg>',
  'hcltech': '<svg viewBox="0 0 170 50" style="height:28px"><text x="5" y="36" font-family="sans-serif" font-size="32" font-weight="900" fill="#00529b">HCL</text><text x="80" y="36" font-family="sans-serif" font-size="24" font-weight="800" fill="#f2b733">Tech</text></svg>',
  'zoho': '<svg viewBox="0 0 160 50" style="height:28px"><rect x="4" y="10" width="28" height="28" rx="6" fill="#e42528"/><text x="11" y="32" font-family="sans-serif" font-size="20" font-weight="900" fill="#fff">Z</text><rect x="36" y="10" width="28" height="28" rx="6" fill="#006699"/><text x="42" y="32" font-family="sans-serif" font-size="20" font-weight="900" fill="#fff">O</text><rect x="68" y="10" width="28" height="28" rx="6" fill="#0dba4b"/><text x="74" y="32" font-family="sans-serif" font-size="20" font-weight="900" fill="#fff">H</text><rect x="100" y="10" width="28" height="28" rx="6" fill="#f2b733"/><text x="106" y="32" font-family="sans-serif" font-size="20" font-weight="900" fill="#000648">O</text></svg>',
  'capgemini': '<svg viewBox="0 0 190 50" style="height:28px"><path d="M12 25 C12 15, 25 10, 25 25 C25 40, 38 35, 38 25" stroke="#0070ad" stroke-width="5" fill="none" stroke-linecap="round"/><text x="48" y="34" font-family="sans-serif" font-size="26" font-weight="900" fill="#0070ad">Capgemini</text></svg>',
  'accenture': '<svg viewBox="0 0 180 50" style="height:28px"><text x="5" y="36" font-family="sans-serif" font-size="28" font-weight="900" fill="#000648">accenture</text><path d="M136 12 L150 22 L136 32" stroke="#a100ff" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  'cognizant': '<svg viewBox="0 0 170 50" style="height:28px"><text x="5" y="35" font-family="sans-serif" font-size="27" font-weight="900" fill="#0033a0">Cognizant</text></svg>',
  'amazon': '<svg viewBox="0 0 150 50" style="height:28px"><text x="5" y="32" font-family="sans-serif" font-size="28" font-weight="900" fill="#131921">amazon</text><path d="M10 38 Q 55 46, 95 35" fill="none" stroke="#ff9900" stroke-width="3.5" stroke-linecap="round"/><path d="M90 32 L98 35 L93 40" fill="none" stroke="#ff9900" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  'google': '<svg viewBox="0 0 150 50" style="height:28px"><text x="5" y="36" font-family="sans-serif" font-size="32" font-weight="900" fill="#4285F4">G</text><text x="34" y="36" font-family="sans-serif" font-size="32" font-weight="900" fill="#EA4335">o</text><text x="56" y="36" font-family="sans-serif" font-size="32" font-weight="900" fill="#FBBC05">o</text><text x="78" y="36" font-family="sans-serif" font-size="32" font-weight="900" fill="#4285F4">g</text><text x="100" y="36" font-family="sans-serif" font-size="32" font-weight="900" fill="#34A853">l</text><text x="110" y="36" font-family="sans-serif" font-size="32" font-weight="900" fill="#EA4335">e</text></svg>',
  'microsoft': '<svg viewBox="0 0 170 50" style="height:28px"><rect x="5" y="10" width="13" height="13" fill="#f25022"/><rect x="21" y="10" width="13" height="13" fill="#7fba00"/><rect x="5" y="26" width="13" height="13" fill="#00a4ef"/><rect x="21" y="26" width="13" height="13" fill="#ffb900"/><text x="42" y="34" font-family="sans-serif" font-size="26" font-weight="800" fill="#475569">Microsoft</text></svg>',
  'ibm': '<svg viewBox="0 0 130 50" style="height:28px"><text x="5" y="36" font-family="monospace" font-size="36" font-weight="900" fill="#052FAD" letter-spacing="2px">IBM</text></svg>',
  'freshworks': '<svg viewBox="0 0 180 50" style="height:28px"><circle cx="18" cy="25" r="12" fill="#ff5a5f"/><text x="36" y="34" font-family="sans-serif" font-size="24" font-weight="900" fill="#000648">freshworks</text></svg>',
  'l&t': '<svg viewBox="0 0 160 50" style="height:28px"><text x="5" y="36" font-family="sans-serif" font-size="32" font-weight="900" fill="#0033a0">L&T</text><text x="70" y="36" font-family="sans-serif" font-size="22" font-weight="800" fill="#f2b733">Tech</text></svg>',
  'tech mahindra': '<svg viewBox="0 0 210 50" style="height:28px"><text x="5" y="36" font-family="sans-serif" font-size="26" font-weight="900" fill="#e42528">Tech</text><text x="75" y="36" font-family="sans-serif" font-size="26" font-weight="900" fill="#000648">Mahindra</text></svg>'
};

function LogoCard({ logo }) {
  const [imgError, setImgError] = useState(false);
  const isSvgStr = typeof logo.image === 'string' && logo.image.trim().startsWith('<svg');

  const lowerName = (logo.name || '').toLowerCase();
  let matchedSvg = null;
  Object.keys(BRAND_SVGS).forEach((key) => {
    if (lowerName.includes(key)) matchedSvg = BRAND_SVGS[key];
  });

  const renderSvg = isSvgStr ? logo.image : (!logo.image || imgError || logo.image.includes('clearbit') || logo.image.includes('wikimedia')) ? matchedSvg : null;

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
      {logo.icon ? (
        logo.icon
      ) : renderSvg ? (
        <div dangerouslySetInnerHTML={{ __html: renderSvg }} style={{ display: 'flex', alignItems: 'center' }} />
      ) : (
        <img
          src={resolveImageSrc(logo.image)}
          alt={logo.name || 'Hiring Partner'}
          onError={() => setImgError(true)}
          style={{
            maxHeight: '30px',
            maxWidth: '130px',
            objectFit: logo.imageFit || 'contain',
            objectPosition: logo.imagePosition || 'center center',
            transform: logo.imageZoom ? `scale(${logo.imageZoom})` : 'none',
            transformOrigin: logo.imagePosition || 'center center'
          }}
        />
      )}
    </m.div>
  );
}



function MarqueeRow({ items, direction = 'left', duration = 32 }) {
  const shouldReduceMotion = useReducedMotion();

  // Multiply items 3 times with stable unique ids for seamless 0% -> -50% loop
  const duplicatedItems = [
    ...items.map((item, idx) => ({ ...item, uId: `${item.id || idx}-dup-1` })),
    ...items.map((item, idx) => ({ ...item, uId: `${item.id || idx}-dup-2` })),
    ...items.map((item, idx) => ({ ...item, uId: `${item.id || idx}-dup-3` }))
  ];

  return (
    <div 
      style={{ overflow: 'hidden', width: '100%', padding: '4px 0', pointerEvents: 'none', userSelect: 'none' }}
    >
      <m.div
        animate={
          shouldReduceMotion 
            ? {} 
            : { x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }
        }
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: duration,
            ease: 'linear'
          }
        }}
        style={{
          display: 'flex',
          gap: '16px',
          width: 'max-content'
        }}
      >
        {duplicatedItems.map((logo) => (
          <LogoCard key={logo.uId} logo={logo} />
        ))}
      </m.div>
    </div>
  );
}

export default function CompanyLogos() {
  const { hiringPartners } = useSiteData();
  const safePartners = (Array.isArray(hiringPartners) && hiringPartners.length > 0)
    ? hiringPartners.filter((p) => p.status !== 'Hidden')
    : [];

  const row1Items = safePartners.filter((p) => p.row === 'Row 1' || !p.row);
  const row2Items = safePartners.filter((p) => p.row === 'Row 2');
  const row3Items = safePartners.filter((p) => p.row === 'Row 3');

  const finalRow1 = row1Items.length > 0 ? row1Items : baseLogosRow1;
  const finalRow2 = row2Items.length > 0 ? row2Items : baseLogosRow2;
  const finalRow3 = row3Items.length > 0 ? row3Items : baseLogosRow3;

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
        </div>

        {/* 3-Row Infinite Ticker Container for PC View & Mobile */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', overflow: 'hidden' }}>
          
          {/* Row 1: Leftward Smooth Scroll */}
          <MarqueeRow items={finalRow1} direction="left" duration={35} />

          {/* Row 2: Rightward Smooth Scroll */}
          <MarqueeRow items={finalRow2} direction="right" duration={38} />

          {/* Row 3: Leftward Smooth Scroll */}
          <MarqueeRow items={finalRow3} direction="left" duration={35} />

        </div>
      </section>
    </LazyMotion>
  );
}

