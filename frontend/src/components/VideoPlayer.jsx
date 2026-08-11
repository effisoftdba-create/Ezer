import React, { useRef } from 'react';
import { getNormalizedVideoConfig } from '../utils/videoUtils';

export default function VideoPlayer({ videoUrl = 'https://www.youtube.com/watch?v=aircAruvnKk', poster, title = 'Course Preview Video' }) {
  const effectiveUrl = videoUrl || 'https://www.youtube.com/watch?v=aircAruvnKk';
  const config = getNormalizedVideoConfig(effectiveUrl);
  const iframeRef = useRef(null);
  const containerRef = useRef(null);

  const handleFullscreen = () => {
    // 1. Try native iframe fullscreen first
    const el = iframeRef.current;
    if (el) {
      if (el.requestFullscreen) { el.requestFullscreen(); return; }
      if (el.webkitRequestFullscreen) { el.webkitRequestFullscreen(); return; }
      if (el.mozRequestFullScreen) { el.mozRequestFullScreen(); return; }
    }
    // 2. Fallback: open original Drive/YouTube URL in new tab
    const url = config.originalUrl || config.src;
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (config.type === 'none') {
    return (
      <div
        style={{
          width: '100%',
          aspectRatio: '16 / 9',
          borderRadius: '16px',
          overflow: 'hidden',
          background: '#000648',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          position: 'relative'
        }}
      >
        {poster ? (
          <img
            src={poster}
            alt={title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <span style={{ fontSize: '1rem', color: '#94a3b8' }}>No video preview available</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div style={{ width: '100%', maxWidth: '1040px', margin: '0 auto' }}>
      <style>{`
        .ezer-video-player-container {
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: 16px;
          overflow: hidden;
          background: #000000;
          box-shadow: 0 8px 24px rgba(0, 6, 72, 0.15);
          border: 2px solid #000648;
          position: relative;
        }
        .ezer-video-player-container iframe,
        .ezer-video-player-container video {
          width: 100% !important;
          height: 100% !important;
          border: 0 !important;
          margin: 0 !important;
          padding: 0 !important;
          display: block !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
        }
        .ezer-fullscreen-btn {
          position: absolute;
          bottom: 10px;
          right: 10px;
          z-index: 10;
          background: rgba(0, 6, 72, 0.75);
          color: #ffffff;
          border: none;
          border-radius: 8px;
          padding: 7px 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          backdrop-filter: blur(4px);
          transition: background 0.2s;
        }
        .ezer-fullscreen-btn:hover {
          background: rgba(0, 6, 72, 0.95);
        }
        @media (max-width: 768px) {
          .ezer-video-player-container {
            border-radius: 12px !important;
          }
          .ezer-fullscreen-btn {
            padding: 6px 10px;
            font-size: 0.72rem;
          }
        }
        @media (max-width: 480px) {
          .ezer-video-player-container {
            border-radius: 10px !important;
          }
        }
      `}</style>
      <div className="ezer-video-player-container" ref={containerRef}>
        {config.type === 'video' ? (
          <video
            key={config.src}
            ref={iframeRef}
            src={config.src}
            poster={poster}
            controls
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          >
            Your browser does not support HTML5 video playback.
          </video>
        ) : (
          <iframe
            key={config.src}
            ref={iframeRef}
            src={config.src}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              border: 'none',
              display: 'block',
              pointerEvents: 'auto'
            }}
          />
        )}

        {/* Fullscreen button — always visible so user can expand anytime */}
        <button
          type="button"
          className="ezer-fullscreen-btn"
          onClick={handleFullscreen}
          title="Open video in fullscreen"
          aria-label="Open video fullscreen"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
          </svg>
          Fullscreen
        </button>
      </div>
    </div>
  );
}
