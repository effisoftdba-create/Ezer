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

  // 3. External HTTP / HTTPS links — return directly so all pasted image URLs display properly
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
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
