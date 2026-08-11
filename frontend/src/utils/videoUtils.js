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
  const driveIdMatch = trimmed.match(/(?:file\/d\/|id=)([\w-]+)/);
  if (trimmed.includes('drive.google.com') && driveIdMatch && driveIdMatch[1]) {
    return {
      type: 'iframe',
      src: `https://drive.google.com/file/d/${driveIdMatch[1]}/preview`,
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
