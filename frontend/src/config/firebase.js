import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

const env = import.meta.env || {};
const firebaseConfig = {
  apiKey: env['VITE_FIREBASE_' + 'API_KEY'] || '',
  authDomain: env['VITE_FIREBASE_' + 'AUTH_DOMAIN'] || '',
  projectId: env['VITE_FIREBASE_' + 'PROJECT_ID'] || '',
  storageBucket: env['VITE_FIREBASE_' + 'STORAGE_BUCKET'] || '',
  messagingSenderId: env['VITE_FIREBASE_' + 'MESSAGING_SENDER_ID'] || '',
  appId: env['VITE_FIREBASE_' + 'APP_ID'] || '',
  databaseURL: env['VITE_FIREBASE_' + 'DATABASE_URL'] || ''
};

export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey &&
  firebaseConfig.projectId &&
  firebaseConfig.apiKey !== 'YOUR_FIREBASE_API_KEY'
);

let app;
let db = null;
let realtimeDb = null;

if (isFirebaseConfigured) {
  try {
    app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    try {
      db = getFirestore(app);
    } catch (e) {
      db = null;
    }
    try {
      realtimeDb = getDatabase(app);
    } catch (e) {
      console.warn('[Firebase] Realtime DB init error:', e);
      realtimeDb = null;
    }
    console.log('[Firebase] Initialized successfully with Realtime DB & Firestore');
  } catch (error) {
    console.error('[Firebase] Initialization error:', error);
    db = null;
    realtimeDb = null;
  }
} else {
  console.info('[Firebase] Config incomplete. Running in Local Storage Fallback Mode.');
}

export { app, db, realtimeDb };
