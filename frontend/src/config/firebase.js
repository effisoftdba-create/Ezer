import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

const defaultFirebaseConfig = {
  apiKey: 'AIzaSyAkMQEGr8hy1KgJ4wYaZIstlBryjZKrolw',
  authDomain: 'ezer-learning-platform-8f1b1.firebaseapp.com',
  projectId: 'ezer-learning-platform-8f1b1',
  storageBucket: 'ezer-learning-platform-8f1b1.firebasestorage.app',
  messagingSenderId: '656530228571',
  appId: '1:656530228571:web:0e312e3cf2b775e25d067e',
  databaseURL: 'https://ezer-learning-platform-8f1b1-default-rtdb.firebaseio.com'
};

const getEnvValue = (envName, fallback) => {
  try {
    const metaEnv = (import.meta && import.meta.env) ? import.meta.env : {};
    return metaEnv[envName] || fallback;
  } catch {
    return fallback;
  }
};

const makeKey = (suffix) => 'VITE_' + 'FIREBASE_' + suffix;

const firebaseConfig = {
  apiKey: getEnvValue(makeKey('API_KEY'), defaultFirebaseConfig.apiKey),
  authDomain: getEnvValue(makeKey('AUTH_DOMAIN'), defaultFirebaseConfig.authDomain),
  projectId: getEnvValue(makeKey('PROJECT_ID'), defaultFirebaseConfig.projectId),
  storageBucket: getEnvValue(makeKey('STORAGE_BUCKET'), defaultFirebaseConfig.storageBucket),
  messagingSenderId: getEnvValue(makeKey('MESSAGING_SENDER_ID'), defaultFirebaseConfig.messagingSenderId),
  appId: getEnvValue(makeKey('APP_ID'), defaultFirebaseConfig.appId),
  databaseURL: getEnvValue(makeKey('DATABASE_URL'), defaultFirebaseConfig.databaseURL)
};

export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey &&
  firebaseConfig.projectId &&
  firebaseConfig.apiKey !== 'YOUR_FIREBASE_API_KEY'
);

let app;
let db = null;
let _realtimeDb = null;
let _realtimeDbInitialized = false;

if (isFirebaseConfigured) {
  try {
    app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    try {
      db = getFirestore(app);
    } catch (e) {
      db = null;
    }
    // Realtime DB is lazy-initialized on first access via getRealtimeDb()
    // to avoid opening WebSocket connections on pages that don't need it
  } catch (error) {
    console.error('[Firebase] Initialization error:', error);
    db = null;
  }
} else {
  console.info('[Firebase] Config incomplete. Running in Local Storage Fallback Mode.');
}

/**
 * Lazy getter for Realtime Database — only connects when first called.
 * This prevents WebSocket errors on the public homepage (Best Practices fix).
 */
export function getRealtimeDb() {
  if (_realtimeDbInitialized) return _realtimeDb;
  _realtimeDbInitialized = true;
  if (!isFirebaseConfigured || !app) return null;
  try {
    _realtimeDb = getDatabase(app);
  } catch (e) {
    console.warn('[Firebase] Realtime DB init error:', e);
    _realtimeDb = null;
  }
  return _realtimeDb;
}

// Backward-compatible named export (null until getRealtimeDb() is called)
const realtimeDb = null;

export { app, db, realtimeDb };
