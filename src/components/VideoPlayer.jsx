import React from 'react';

/**
 * Normalizes any video URL (YouTube, Google Drive, MP4/direct file, or fallback iframe)
 * into an embeddable format.
 */
export function getNormalizedVideoConfig(url) {
  if (!url || typeof url !== 'string') {
    return { type: 'none', src: '' };
  }

  const trimmed = url.trim();

  // 1. YouTube normalization
  const ytMatch = trimmed.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/
  );
  if (ytMatch && ytMatch[1]) {
    return {
      type: 'iframe',
      src: `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=0&rel=0&modestbranding=1`,
      title: 'YouTube Video Player'
    };
  }

  // 2. Google Drive normalization
  const driveMatch = trimmed.match(/\/file\/d\/([\w-]+)/);
  if (driveMatch && driveMatch[1]) {
    return {
      type: 'iframe',
      src: `https://drive.google.com/file/d/${driveMatch[1]}/preview`,
      title: 'Google Drive Video Player'
    };
  }

  // 3. Direct HTML5 video file extensions
  if (/\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(trimmed)) {
    return {
      type: 'video',
      src: trimmed
    };
  }

  // 4. Fallback iframe for any other URL
  return {
    type: 'iframe',
    src: trimmed,
    title: 'Embedded Video Player'
  };
}

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
        aspectRatio: '16 / 9',
        borderRadius: '16px',
        overflow: 'hidden',
        background: '#000000',
        boxShadow: '0 12px 32px rgba(0, 6, 72, 0.25)',
        border: '1.5px solid rgba(242, 183, 51, 0.3)',
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
