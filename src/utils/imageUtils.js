const BUILD_TIMESTAMP = Date.now();

export function resolveImageSrc(urlStr) {
  if (!urlStr) return '';
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
 * Generates WebP image source url with JPEG/PNG fallback
 */
export function resolveWebPSrc(urlStr) {
  const original = resolveImageSrc(urlStr);
  if (!original) return { webp: '', fallback: '' };

  // If local static image, derive webp path
  if (original.endsWith('.jpg') || original.endsWith('.jpeg') || original.endsWith('.png')) {
    const webpUrl = original.replace(/\.(jpg|jpeg|png)(\?.*)?$/, '.webp$2');
    return { webp: webpUrl, fallback: original };
  }

  return { webp: original, fallback: original };
}
