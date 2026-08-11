import React, { useRef, useState } from 'react';
import { getNormalizedVideoConfig } from '../utils/videoUtils';

function VideoPlayerInner({ config, poster, title }) {
  const iframeRef = useRef(null);
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [driveDirectError, setDriveDirectError] = useState(false);

  const handleFullscreen = () => {
    // 1. Try native element fullscreen first
    const el = videoRef.current || iframeRef.current;
    if (el) {
      if (el.requestFullscreen) { el.requestFullscreen(); return; }
      if (el.webkitRequestFullscreen) { el.webkitRequestFullscreen(); return; }
      if (el.mozRequestFullScreen) { el.mozRequestFullScreen(); return; }
    }
    // 2. Fallback: open original Drive/YouTube URL in new tab
    const url = config.originalUrl || config.src;
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleOpenDrive = () => {
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

  // Render Google Drive component: try direct video first; fallback to drive iframe if CORS/auth required
  const isDriveType = config.type === 'drive' || config.isDrive;
  const showDriveIframe = isDriveType && driveDirectError;

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
        .ezer-video-actions-top {
          position: absolute;
          top: 10px;
          right: 10px;
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .ezer-video-btn {
          background: rgba(0, 6, 72, 0.85);
          color: #ffffff;
          border: 1px solid rgba(242, 183, 51, 0.4);
          border-radius: 8px;
          padding: 6px 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          backdrop-filter: blur(6px);
          transition: all 0.2s ease;
          text-decoration: none;
        }
        .ezer-video-btn:hover {
          background: #000648;
          color: #f2b733;
          border-color: #f2b733;
          transform: translateY(-1px);
        }
        .ezer-fullscreen-btn {
          position: absolute;
          bottom: 10px;
          right: 10px;
          z-index: 10;
        }
        @media (max-width: 768px) {
          .ezer-video-player-container {
            border-radius: 12px !important;
          }
          .ezer-video-btn {
            padding: 5px 10px;
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
        {isDriveType && !showDriveIframe ? (
          <video
            key={config.directUrl}
            ref={videoRef}
            poster={poster}
            controls
            playsInline
            onError={() => setDriveDirectError(true)}
            style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#000' }}
          >
            <source src={config.directUrl} type="video/mp4" />
            <source src={config.fallbackDirectUrl} type="video/mp4" />
            Your browser does not support HTML5 video playback.
          </video>
        ) : config.type === 'video' ? (
          <video
            key={config.src}
            ref={videoRef}
            src={config.src}
            poster={poster}
            controls
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#000' }}
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

        {/* Top Actions Bar for Google Drive / external video links */}
        {isDriveType && (
          <div className="ezer-video-actions-top">
            <button
              type="button"
              className="ezer-video-btn"
              onClick={handleOpenDrive}
              title="Open video directly in Google Drive"
              aria-label="Open video in Google Drive"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              Open Drive
            </button>
          </div>
        )}

        {/* Fullscreen button — always visible so user can expand anytime */}
        <button
          type="button"
          className="ezer-video-btn ezer-fullscreen-btn"
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

export default function VideoPlayer({ videoUrl = 'https://www.youtube.com/watch?v=aircAruvnKk', poster, title = 'Course Preview Video' }) {
  const effectiveUrl = videoUrl || 'https://www.youtube.com/watch?v=aircAruvnKk';
  const config = getNormalizedVideoConfig(effectiveUrl);
  return <VideoPlayerInner key={effectiveUrl} config={config} poster={poster} title={title} />;
}


