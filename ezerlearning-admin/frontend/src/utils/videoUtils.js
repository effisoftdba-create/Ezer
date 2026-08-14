/**
 * Normalizes any video URL (YouTube, Google Drive, MP4/direct file, or fallback iframe)
 * into an embeddable format with direct stream support for Google Drive
 * and privacy-enhanced, ad-suppressed YouTube embedding.
 */
export function getNormalizedVideoConfig(url, options = {}) {
  if (!url || typeof url !== 'string') {
    return { type: 'none', src: '' };
  }

  const trimmed = url.trim();
  const autoplayVal = options.autoplay ? 1 : 0;

  // 1. YouTube normalization with privacy-enhanced no-cookie domain & ad-reducing parameters
  const ytMatch = trimmed.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/
  );
  if (ytMatch && ytMatch[1]) {
    const videoId = ytMatch[1];
    // Parameters:
    // - youtube-nocookie.com: Privacy mode that suppresses ad tracking and reduces ad impressions
    // - rel=0: Restricts recommendations to the same channel, avoiding random ads
    // - modestbranding=1: Minimizes YouTube branding
    // - iv_load_policy=3: Disables video annotations and interactive popup cards
    // - playsinline=1: Prevents iOS from hijacking playback with external fullscreen player
    // - enablejsapi=1: Enables JS API interaction
    const ytSrc = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=${autoplayVal}&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1&enablejsapi=1&controls=1`;
    return {
      type: 'iframe',
      isYouTube: true,
      videoId: videoId,
      src: ytSrc,
      originalUrl: `https://www.youtube.com/watch?v=${videoId}`,
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

  // 3. Direct HTML5 video file extensions (100% ad-free native playback)
  if (/\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(trimmed)) {
    return {
      type: 'video',
      src: trimmed,
      originalUrl: trimmed,
      title: 'HTML5 Video Player'
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
