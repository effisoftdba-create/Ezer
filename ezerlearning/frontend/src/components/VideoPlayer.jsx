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

  // Render Google Drive component: try direct video first; fallback to direct drive action card if direct playback fails
  const isDriveType = config.type === 'drive' || config.isDrive;
  const showDriveFallback = isDriveType && (driveDirectError || !config.directUrl);

  if (isDriveType && showDriveFallback) {
    const driveWatchUrl = config.originalUrl || config.src || (config.fileId ? `https://drive.google.com/file/d/${config.fileId}/view` : 'https://drive.google.com');
    return (
      <div className="ezer-video-player-container" ref={containerRef} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#000648', color: '#ffffff', textAlign: 'center', padding: '24px', position: 'relative' }}>
        {poster && (
          <img src={poster} alt={title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }} />
        )}
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(242, 183, 51, 0.25)', border: '2.5px solid #f2b733', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f2b733' }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
          <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 900, color: '#ffffff' }}>{title || 'Google Drive Course Video'}</h4>
          <p style={{ margin: 0, fontSize: '0.85rem', color: '#cbd5e1', maxWidth: '460px', lineHeight: 1.5 }}>
            This video is hosted on Google Drive. Click below to play the video directly.
          </p>
          <a
            href={driveWatchUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: '4px',
              padding: '10px 22px',
              background: '#f2b733',
              color: '#000648',
              fontWeight: 900,
              fontSize: '0.88rem',
              borderRadius: '8px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 14px rgba(242, 183, 51, 0.4)'
            }}
          >
            ▶ Watch Video on Google Drive ↗
          </a>
        </div>
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
        {isDriveType ? (
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
            referrerPolicy="strict-origin-when-cross-origin"
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

        {/* Fullscreen button — allows user to expand inline video anytime */}
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



