/**
 * Utilities for Course and Module Title sanitization
 */

export const cleanModuleTitle = (title) => {
  if (!title) return '';
  return String(title).replace(/^(\s*\d{1,2}\.?\s*)+/g, '').trim();
};
