/**
 * Central API Configuration for Frontend -> Backend Connection
 */

// Dynamically use VITE_API_URL or fallback to local backend server
export const API_BASE_URL = 
  import.meta.env.VITE_API_URL || 
  'https://us-central1-ezer-learning-platform-8f1b1.cloudfunctions.net/api';

export default API_BASE_URL;
