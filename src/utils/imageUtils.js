const BUILD_TIMESTAMP = Date.now();

const TECH_FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800"
];

export function resolveImageSrc(urlStr) {
  if (!urlStr) {
    return TECH_FALLBACK_IMAGES[0];
  }

  if (urlStr.startsWith('data:')) {
    return urlStr;
  }

  let finalUrl = '';
  if (urlStr.startsWith('http://') || urlStr.startsWith('https://')) {
    finalUrl = urlStr;
  } else {
    const baseUrl = import.meta.env.BASE_URL || '/';
    const cleanPath = urlStr.replace(/^\//, '');
    finalUrl = baseUrl.endsWith('/') ? `${baseUrl}${cleanPath}` : `${baseUrl}/${cleanPath}`;
  }

  // Cache Busting: append timestamp version parameter to force mobile browsers and CDN to fetch fresh image
  if (!finalUrl.includes('?v=') && !finalUrl.includes('?t=')) {
    const separator = finalUrl.includes('?') ? '&' : '?';
    finalUrl = `${finalUrl}${separator}v=${BUILD_TIMESTAMP}`;
  }

  return finalUrl;
}

/**
 * Global Image Error Handler - Automatically replaces missing/broken images with high-res Unsplash tech covers
 */
export function handleImgError(e) {
  if (!e || !e.target) return;
  e.target.onerror = null; // prevent infinite loop if fallback fails
  const randomFallback = TECH_FALLBACK_IMAGES[Math.floor(Math.random() * TECH_FALLBACK_IMAGES.length)];
  e.target.src = randomFallback;
}

/**
 * Generates WebP image source url with JPEG/PNG fallback
 */
export function resolveWebPSrc(urlStr) {
  const original = resolveImageSrc(urlStr);
  if (!original) return { webp: '', fallback: '' };

  if (original.endsWith('.jpg') || original.endsWith('.jpeg') || original.endsWith('.png')) {
    const webpUrl = original.replace(/\.(jpg|jpeg|png)(\?.*)?$/, '.webp$2');
    return { webp: webpUrl, fallback: original };
  }

  return { webp: original, fallback: original };
}
