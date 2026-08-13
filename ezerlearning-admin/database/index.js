/**
 * EZER Database Layer Unified Entry Point
 * Exports Models for Admin Control, Courses, Leads, Payments, and Database Configurations.
 */

import adminModel from './models/adminModel.js';
import courseModel from './models/courseModel.js';
import paymentModel from './models/paymentModel.js';
import dbConfig from './config/dbConfig.js';

export const DATABASE_COLLECTIONS = {
  USERS: 'users',
  LEADS: 'leads',
  COURSES: 'courses',
  PAYMENTS: 'payments',
  TESTIMONIALS: 'testimonials',
  BLOGS: 'blogs',
  SITE_DEFAULTS: 'site_defaults'
};

export function getDatabaseStatus() {
  return {
    adapter: 'Firebase / Local JSON Hybrid Database',
    modelsLoaded: ['adminModel', 'courseModel', 'paymentModel'],
    ready: true,
    timestamp: new Date().toISOString()
  };
}

export {
  adminModel,
  courseModel,
  paymentModel,
  dbConfig
};

export default {
  DATABASE_COLLECTIONS,
  getDatabaseStatus,
  adminModel,
  courseModel,
  paymentModel,
  dbConfig
};
