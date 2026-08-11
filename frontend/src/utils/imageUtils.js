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

  const trimmed = String(urlStr).trim();

  // 1. Convert raw or URL-encoded inline SVG strings to valid Data URIs
  if (trimmed.startsWith('<svg') || trimmed.includes('<svg') || trimmed.startsWith('%3Csvg') || trimmed.includes('%3Csvg')) {
    let unencoded = trimmed;
    if (trimmed.includes('%3Csvg') || trimmed.includes('%20') || trimmed.includes('%22')) {
      try {
        unencoded = decodeURIComponent(trimmed);
      } catch (e) {
        unencoded = trimmed;
      }
    }
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(unencoded)}`;
  }

  // 2. Data URIs
  if (trimmed.startsWith('data:')) {
    return trimmed;
  }

  // 3. External HTTP / HTTPS links
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    // If external domain blocks CORS (pngall.com, logo.wine, pinimg.com), use clean inline SVG logo data URI
    if (trimmed.includes('pngall.com') || trimmed.includes('logo.wine') || trimmed.includes('pinimg.com')) {
      return `data:image/svg+xml;charset=utf-8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 50"><rect width="160" height="50" rx="8" fill="#000648"/><text x="80" y="32" font-family="sans-serif" font-size="20" font-weight="900" fill="#f2b733" text-anchor="middle">EZER PARTNER</text></svg>')}`;
    }
    return trimmed;
  }

  // 4. Local relative paths
  const cleanPath = trimmed.replace(/^\//, '');
  const baseUrl = import.meta.env.BASE_URL || '/';

  let finalUrl = '';
  if (baseUrl === './') {
    finalUrl = `./${cleanPath}`;
  } else {
    finalUrl = baseUrl.endsWith('/') ? `${baseUrl}${cleanPath}` : `${baseUrl}/${cleanPath}`;
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
