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
      }}
    >
      {/* From Uiverse.io by Smit-Prajapati - Tailored for EZER Learning Solutions */}
      <style>{`
        .ezer-preloader-card {
          width: 320px;
          height: 220px;
          background: #000648;
          position: relative;
          display: grid;
          place-content: center;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
          animation: ezerPreloaderScale 1.8s ease-in-out forwards;
        }

        .ezer-preloader-border {
          position: absolute;
          inset: 12px;
          border: 2.5px solid #f2b733;
          border-radius: 10px;
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
        }

        .ezer-preloader-logo {
          height: 48px;
          width: 48px;
          margin-bottom: 12px;
          animation: ezerLogoPulse 1.2s ease-in-out infinite alternate;
        }

        .ezer-preloader-title {
          font-size: 1.4rem;
          font-weight: 900;
          color: #ffffff;
          letter-spacing: 4px;
          text-transform: uppercase;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          margin-bottom: 6px;
        }

        .ezer-preloader-subtitle {
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          color: #f2b733;
          background: #000648;
          padding: 2px 10px;
          border-radius: 50px;
          border: 1px solid #f2b733;
          letter-spacing: 2.5px;
          animation: ezerSubTextGlow 1.4s ease-in-out infinite alternate;
        }

        @keyframes ezerPreloaderScale {
          0% { transform: scale(0.92); opacity: 0.8; }
          50% { transform: scale(1.03); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes ezerBorderRotate {
          0% { transform: rotate(-3deg); inset: 14px; }
          100% { transform: rotate(3deg); inset: 10px; }
        }

        @keyframes ezerLogoPulse {
          0% { transform: scale(0.95); }
          100% { transform: scale(1.1); }
        }

        @keyframes ezerSubTextGlow {
          0% { letter-spacing: 1.5px; box-shadow: 0 0 6px rgba(242, 183, 51, 0.2); }
          100% { letter-spacing: 3.5px; box-shadow: 0 0 16px rgba(242, 183, 51, 0.5); }
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
