/**
 * Normalizes any video URL (YouTube, Google Drive, MP4/direct file, or fallback iframe)
 * into an embeddable format with direct stream support for Google Drive.
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
      isYouTube: true,
      src: `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=0&rel=0&modestbranding=1`,
      originalUrl: `https://www.youtube.com/watch?v=${ytMatch[1]}`,
      title: 'YouTube Video Player'
    };
  }

  // 2. Google Drive normalization (supports /file/d/ID, /open?id=ID, /uc?id=ID, and raw Drive/Accounts URLs)
  const isGoogleLink = trimmed.includes('drive.google.com') || trimmed.includes('docs.google.com') || trimmed.includes('accounts.google.com');
  const driveIdMatch = trimmed.match(/(?:file\/d\/|d\/|id=|open\?id=)([\w-]{20,50})/i);
  if (isGoogleLink) {
    const fileId = (driveIdMatch && driveIdMatch[1]) ? driveIdMatch[1] : '';
    return {
      type: 'drive',
      isDrive: true,
      fileId: fileId,
      directUrl: fileId ? `https://lh3.googleusercontent.com/d/${fileId}` : '',
      fallbackDirectUrl: fileId ? `https://drive.google.com/uc?export=download&id=${fileId}` : '',
      src: fileId ? `https://drive.google.com/file/d/${fileId}/preview` : trimmed,
      originalUrl: fileId ? `https://drive.google.com/file/d/${fileId}/view?usp=sharing` : trimmed,
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
    originalUrl: trimmed,
    title: 'Embedded Video Player'
  };
}

