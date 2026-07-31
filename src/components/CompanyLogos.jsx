import React, { useRef, useEffect, useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

// Authentic high-fidelity corporate brand SVG logos
const corporateLogos = [
  {
    name: "TCS",
    svg: (
      <svg viewBox="0 0 190 50" style={{ height: '36px' }}>
        <path d="M10 12 L45 12 M27.5 12 L27.5 40" stroke="#000648" strokeWidth="6" strokeLinecap="square" />
        <text x="50" y="38" fontFamily="DM Sans, sans-serif" fontSize="30" fontWeight="900" fill="#000648" letterSpacing="-0.5px">TCS</text>
        <rect x="115" y="16" width="3" height="24" fill="#f2b733" />
        <text x="126" y="36" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="900" fill="#000648" letterSpacing="1px">TATA</text>
      </svg>
    )
  },
  {
    name: "Infosys",
    svg: (
      <svg viewBox="0 0 150 50" style={{ height: '36px' }}>
        <text x="5" y="36" fontFamily="DM Sans, sans-serif" fontSize="32" fontWeight="900" fill="#006699" letterSpacing="-1px">Infosys</text>
      </svg>
    )
  },
  {
    name: "Wipro",
    svg: (
      <svg viewBox="0 0 150 50" style={{ height: '36px' }}>
        <circle cx="16" cy="18" r="5" fill="#e42528" />
        <circle cx="28" cy="18" r="5" fill="#f2b733" />
        <circle cx="16" cy="30" r="5" fill="#006699" />
        <circle cx="28" cy="30" r="5" fill="#0dba4b" />
        <text x="42" y="36" fontFamily="DM Sans, sans-serif" fontSize="28" fontWeight="900" fill="#000648">wipro</text>
      </svg>
    )
  },
  {
    name: "HCLTech",
    svg: (
      <svg viewBox="0 0 170 50" style={{ height: '36px' }}>
        <text x="5" y="36" fontFamily="DM Sans, sans-serif" fontSize="32" fontWeight="900" fill="#00529b">HCL</text>
        <text x="80" y="36" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="800" fill="#f2b733">Tech</text>
      </svg>
    )
  },
  {
    name: "Zoho",
    svg: (
      <svg viewBox="0 0 160 50" style={{ height: '36px' }}>
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
  },
  {
    name: "Capgemini",
    svg: (
      <svg viewBox="0 0 190 50" style={{ height: '34px' }}>
        <path d="M12 25 C12 15, 25 10, 25 25 C25 40, 38 35, 38 25" stroke="#0070ad" strokeWidth="5" fill="none" strokeLinecap="round" />
        <text x="48" y="34" fontFamily="DM Sans, sans-serif" fontSize="26" fontWeight="900" fill="#0070ad">Capgemini</text>
      </svg>
    )
  },
  {
    name: "Accenture",
    svg: (
      <svg viewBox="0 0 180 50" style={{ height: '34px' }}>
        <text x="5" y="36" fontFamily="DM Sans, sans-serif" fontSize="28" fontWeight="900" fill="#000648">accenture</text>
        <path d="M136 12 L150 22 L136 32" stroke="#a100ff" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    name: "Cognizant",
    svg: (
      <svg viewBox="0 0 170 50" style={{ height: '34px' }}>
        <text x="5" y="35" fontFamily="DM Sans, sans-serif" fontSize="27" fontWeight="900" fill="#0033a0">Cognizant</text>
      </svg>
    )
  },
  {
    name: "Amazon",
    svg: (
      <svg viewBox="0 0 150 50" style={{ height: '36px' }}>
        <text x="5" y="32" fontFamily="DM Sans, sans-serif" fontSize="28" fontWeight="900" fill="#131921">amazon</text>
        <path d="M10 38 Q 55 46, 95 35" fill="none" stroke="#ff9900" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M90 32 L98 35 L93 40" fill="none" stroke="#ff9900" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    name: "Google",
    svg: (
      <svg viewBox="0 0 150 50" style={{ height: '36px' }}>
        <text x="5" y="36" fontFamily="DM Sans, sans-serif" fontSize="32" fontWeight="900" fill="#4285F4">G</text>
        <text x="34" y="36" fontFamily="DM Sans, sans-serif" fontSize="32" fontWeight="900" fill="#EA4335">o</text>
        <text x="56" y="36" fontFamily="DM Sans, sans-serif" fontSize="32" fontWeight="900" fill="#FBBC05">o</text>
        <text x="78" y="36" fontFamily="DM Sans, sans-serif" fontSize="32" fontWeight="900" fill="#4285F4">g</text>
        <text x="100" y="36" fontFamily="DM Sans, sans-serif" fontSize="32" fontWeight="900" fill="#34A853">l</text>
        <text x="110" y="36" fontFamily="DM Sans, sans-serif" fontSize="32" fontWeight="900" fill="#EA4335">e</text>
      </svg>
    )
  },
  {
    name: "Microsoft",
    svg: (
      <svg viewBox="0 0 170 50" style={{ height: '34px' }}>
        <rect x="5" y="10" width="13" height="13" fill="#f25022" />
        <rect x="21" y="10" width="13" height="13" fill="#7fba00" />
        <rect x="5" y="26" width="13" height="13" fill="#00a4ef" />
        <rect x="21" y="26" width="13" height="13" fill="#ffb900" />
        <text x="42" y="34" fontFamily="DM Sans, sans-serif" fontSize="26" fontWeight="800" fill="#475569">Microsoft</text>
      </svg>
    )
  },
  {
    name: "IBM",
    svg: (
      <svg viewBox="0 0 130 50" style={{ height: '36px' }}>
        <text x="5" y="36" fontFamily="monospace" fontSize="36" fontWeight="900" fill="#052FAD" letterSpacing="2px">IBM</text>
      </svg>
    )
  },
  {
    name: "Freshworks",
    svg: (
      <svg viewBox="0 0 180 50" style={{ height: '34px' }}>
        <circle cx="18" cy="25" r="12" fill="#ff5a5f" />
        <text x="36" y="34" fontFamily="DM Sans, sans-serif" fontSize="24" fontWeight="900" fill="#000648">freshworks</text>
      </svg>
    )
  }
];

// Static triple corporate logos list in module scope with unique IDs
const marqueeList = [
  ...corporateLogos.map(c => ({ ...c, uniqueId: c.name + '-set1' })),
  ...corporateLogos.map(c => ({ ...c, uniqueId: c.name + '-set2' })),
  ...corporateLogos.map(c => ({ ...c, uniqueId: c.name + '-set3' }))
];

export default function CompanyLogos() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // JavaScript Continuous Auto-Scroll Engine
  useEffect(() => {
    let animationFrameId;

    const autoScroll = () => {
      if (scrollRef.current && !isPaused) {
        scrollRef.current.scrollLeft += 1.2;
        // Loop back when reached half width
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const handleManualScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section
      style={{
        padding: '24px 0 28px',
        background: '#ffffff',
        borderBottom: '1px solid var(--border)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <style>{`
        .hide-scroll-bar::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }
        .hide-scroll-bar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `}</style>

      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <h3
            style={{
              fontSize: '0.85rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#64748b',
              margin: 0,
            }}
          >
            Our Graduates Work At Leading Technology Companies
          </h3>
        </div>

        {/* Interactive Left & Right Scroll Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            type="button"
            onClick={() => handleManualScroll('left')}
            aria-label="Scroll Left"
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              border: '1.5px solid #000648',
              background: '#ffffff',
              color: '#000648',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 6px rgba(0, 6, 72, 0.08)',
            }}
          >
            <HiChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => handleManualScroll('right')}
            aria-label="Scroll Right"
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              border: '1.5px solid #000648',
              background: '#000648',
              color: '#f2b733',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 6px rgba(0, 6, 72, 0.15)',
            }}
          >
            <HiChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Auto & Manual Scrollable Container Track without visual scrollbar */}
      <div
        ref={scrollRef}
        className="hide-scroll-bar"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{
          display: 'flex',
          gap: '20px',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          padding: '4px 24px 12px',
          width: '100%',
          boxSizing: 'border-box',
          maskImage: 'linear-gradient(to right, transparent, black 4%, black 96%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 4%, black 96%, transparent)',
        }}
      >
        {marqueeList.map((company) => (
          <div
            key={company.uniqueId}
            style={{
              height: '56px',
              padding: '8px 24px',
              background: '#ffffff',
              borderRadius: '14px',
              border: '1.5px solid #e2e8f0',
              boxShadow: '0 4px 14px rgba(0, 6, 72, 0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            {company.svg}
          </div>
        ))}
      </div>
    </section>
  );
}
