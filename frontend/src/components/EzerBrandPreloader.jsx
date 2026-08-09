import React, { useState, useEffect } from 'react';

export default function EzerBrandPreloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 999999,
        background: '#000648',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.4s ease-in-out',
        padding: '16px',
        boxSizing: 'border-box'
      }}
    >
      {/* From Uiverse.io by Smit-Prajapati - Tailored for EZER Learning Solutions */}
      <style>{`
        .ezer-preloader-card {
          width: clamp(310px, 92vw, 380px);
          height: 220px;
          background: #000648;
          position: relative;
          display: grid;
          place-content: center;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.5);
          animation: ezerPreloaderScale 1.8s ease-in-out forwards;
        }

        .ezer-preloader-border {
          position: absolute;
          inset: 12px;
          border: 2.5px solid #f2b733;
          border-radius: 12px;
          opacity: 1;
          transform: rotate(0deg);
          animation: ezerBorderRotate 1.5s ease-in-out infinite alternate;
        }

        .ezer-preloader-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          z-index: 2;
          padding: 0 12px;
        }

        .ezer-preloader-logo {
          height: 44px;
          width: 44px;
          margin-bottom: 10px;
          animation: ezerLogoPulse 1.2s ease-in-out infinite alternate;
        }

        .ezer-preloader-title {
          font-size: clamp(1.2rem, 4vw, 1.5rem);
          font-weight: 900;
          color: #ffffff;
          letter-spacing: 3px;
          text-transform: uppercase;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          margin-bottom: 8px;
          white-space: nowrap;
        }

        .ezer-preloader-subtitle {
          font-size: clamp(0.58rem, 2.4vw, 0.7rem);
          font-weight: 800;
          text-transform: uppercase;
          color: #f2b733;
          background: #000648;
          padding: 5px 14px;
          border-radius: 50px;
          border: 1.5px solid #f2b733;
          letter-spacing: 1.2px;
          white-space: nowrap;
          animation: ezerSubTextGlow 1.4s ease-in-out infinite alternate;
          max-width: 95%;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        @keyframes ezerPreloaderScale {
          0% { transform: scale(0.92); opacity: 0.8; }
          50% { transform: scale(1.02); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes ezerBorderRotate {
          0% { transform: rotate(-2.5deg); inset: 13px; }
          100% { transform: rotate(2.5deg); inset: 10px; }
        }

        @keyframes ezerLogoPulse {
          0% { transform: scale(0.95); }
          100% { transform: scale(1.08); }
        }

        @keyframes ezerSubTextGlow {
          0% { letter-spacing: 1px; box-shadow: 0 0 6px rgba(242, 183, 51, 0.2); }
          100% { letter-spacing: 1.8px; box-shadow: 0 0 14px rgba(242, 183, 51, 0.45); }
        }
      `}</style>

      <div className="ezer-preloader-card">
        <div className="ezer-preloader-border" />
        <div className="ezer-preloader-content">
          <svg
            className="ezer-preloader-logo"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#f2b733"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <div className="ezer-preloader-title">EZER LEARNING</div>
          <div className="ezer-preloader-subtitle">Helper, Strength, and Support</div>
        </div>
      </div>
    </div>
  );
}
