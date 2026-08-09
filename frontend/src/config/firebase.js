import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyAkMQEGr8hy1KgJ4wYaZIstlBryjZKrolw',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'ezer-learning-platform-8f1b1.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'ezer-learning-platform-8f1b1',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'ezer-learning-platform-8f1b1.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '656530228571',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:656530228571:web:0e312e3cf2b775e25d067e',
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || 'https://ezer-learning-platform-8f1b1-default-rtdb.firebaseio.com'
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
