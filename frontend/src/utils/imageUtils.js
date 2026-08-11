const BUILD_TIMESTAMP = Date.now();

const TECH_FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800"
];

export function resolveImageSrc(urlStr) {
  if (!urlStr) {
    return TECH_FALLBACK_IMAGES[0];
  }

  if (urlStr.startsWith('data:') || urlStr.startsWith('http://') || urlStr.startsWith('https://')) {
    return urlStr;
  }

  const cleanPath = urlStr.replace(/^\//, '');
  const baseUrl = import.meta.env.BASE_URL || '/';

  let finalUrl = '';
  if (baseUrl === './') {
    finalUrl = `./${cleanPath}`;
  } else {
    finalUrl = baseUrl.endsWith('/') ? `${baseUrl}${cleanPath}` : `${baseUrl}/${cleanPath}`;
  }

  // Optimize Unsplash image query params to match actual display size and format
  if (finalUrl.includes('images.unsplash.com')) {
    if (finalUrl.includes('w=')) {
      finalUrl = finalUrl.replace(/w=\d+/, 'w=500').replace(/q=\d+/, 'q=75');
    } else {
      finalUrl += (finalUrl.includes('?') ? '&' : '?') + 'auto=format&fit=crop&w=500&q=75';
    }
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
 * Generates WebP image source url with JPEG/PNG fallback safely
 */
export function resolveWebPSrc(urlStr) {
  const original = resolveImageSrc(urlStr);
  return { webp: original, fallback: original };
}
