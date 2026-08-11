import React from 'react';
import { getNormalizedVideoConfig } from '../utils/videoUtils';

export default function VideoPlayer({ videoUrl = 'https://www.youtube.com/watch?v=aircAruvnKk', poster, title = 'Course Preview Video' }) {
  const effectiveUrl = videoUrl || 'https://www.youtube.com/watch?v=aircAruvnKk';
  const config = getNormalizedVideoConfig(effectiveUrl);

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
          min-height: 380px;
          border-radius: 16px;
          overflow: hidden;
          background: #000000;
          box-shadow: 0 8px 24px rgba(0, 6, 72, 0.15);
          border: 2px solid #000648;
          position: relative;
        }
        @media (max-width: 768px) {
          .ezer-video-player-container {
            aspect-ratio: 16 / 11 !important;
            min-height: 250px !important;
            border-radius: 14px !important;
          }
        }
        @media (max-width: 480px) {
          .ezer-video-player-container {
            aspect-ratio: 4 / 3 !important;
            min-height: 260px !important;
            border-radius: 12px !important;
          }
        }
      `}</style>
      <div className="ezer-video-player-container">
        {config.type === 'video' ? (
          <video
            key={config.src}
            src={config.src}
            poster={poster}
            controls
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          >
            Your browser does not support HTML5 video playback.
          </video>
        ) : (
          <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
            <iframe
              key={config.src}
              src={config.src}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                display: 'block'
              }}
            />
            {/* Top Right Shield Overlay for Google Drive: Prevents accidental navigation out to external Drive link */}
            {config.isDrive && (
              <div
                title="EZER Video Showcase"
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '64px',
                  height: '54px',
                  zIndex: 8,
                  background: 'transparent',
                  cursor: 'default'
                }}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
