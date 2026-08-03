export function resolveImageSrc(urlStr) {
  if (!urlStr) return '';
  if (urlStr.startsWith('data:') || urlStr.startsWith('http://') || urlStr.startsWith('https://')) {
    return urlStr;
  }
  const baseUrl = import.meta.env.BASE_URL || '/';
  const cleanPath = urlStr.replace(/^\//, '');
  return baseUrl.endsWith('/') ? `${baseUrl}${cleanPath}` : `${baseUrl}/${cleanPath}`;
}
