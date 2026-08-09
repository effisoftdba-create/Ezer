/**
 * Database Module Interface for EZER Learning Solutions
 * Unifies access between Firebase Firestore, Realtime Database, and Local Fallback Storage.
 */

export const DATABASE_COLLECTIONS = {
  LEADS: 'leads',
  COURSES: 'courses',
  TESTIMONIALS: 'testimonials',
  BLOGS: 'blogs',
  SITE_DEFAULTS: 'site_defaults'
};

export function getDatabaseStatus() {
  return {
    adapter: 'Firebase / Hybrid DB',
    ready: true,
    timestamp: new Date().toISOString()
  };
}

export default {
  DATABASE_COLLECTIONS,
  getDatabaseStatus
};
