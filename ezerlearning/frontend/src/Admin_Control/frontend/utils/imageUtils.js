const BUILD_TIMESTAMP = Date.now();

const TECH_FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800"
];

const HD_IMAGE_MAP = {
  'images/hero/hero_section_1.jpg': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=85&w=1600',
  'images/hero/devops.avif': 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=85&w=1600',
  'images/hero/full-stack-development.jpg': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=85&w=1600',
  'images/hero/AI_machine_learning.png': 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=85&w=1600',
  'images/hero/data-analysis.jpeg': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=85&w=1600',
  'images/hero/Cybersecurity.webp': 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=85&w=1600',
  'images/hero/Spoken_english.png': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=85&w=1600',
  'images/hero/here_section_2.webp': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=85&w=1600',
  'images/hero/optimized/hero_section_1.jpg': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=85&w=1600',
};

export function resolveImageSrc(urlStr) {
  if (!urlStr) {
    return TECH_FALLBACK_IMAGES[0];
  }

  const trimmed = String(urlStr).trim();

  // 1. Data URIs (user uploaded custom base64 images) — return directly!
  if (trimmed.startsWith('data:')) {
    return trimmed;
  }

  // 2. External HTTP / HTTPS links — return directly so all custom pasted image URLs display properly
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return trimmed;
  }

  // 3. Convert raw or URL-encoded inline SVG strings to valid Data URIs
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

  // 4. Auto-upgrade legacy low-res static paths to 1600px HD crystal clear Unsplash images
  const cleanPathKey = trimmed.replace(/^\//, '');
  if (HD_IMAGE_MAP[cleanPathKey]) {
    return HD_IMAGE_MAP[cleanPathKey];
  }

  // 5. Local relative paths
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
