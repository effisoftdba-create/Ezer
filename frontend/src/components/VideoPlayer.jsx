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
    <div
      className="ezer-video-player-container"
      style={{
        width: '100%',
        maxWidth: '1040px',
        margin: '0 auto',
        aspectRatio: '16 / 9',
        borderRadius: '20px',
        overflow: 'hidden',
        background: '#000000',
        boxShadow: '0 16px 48px rgba(0, 6, 72, 0.4)',
        border: '2px solid #f2b733',
        position: 'relative'
      }}
    >
      {config.type === 'video' ? (
        <video
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
          src={config.src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            display: 'block'
          }}
        />
      )}
    </div>
  );
}
