import { db, getRealtimeDb, isFirebaseConfigured } from '../config/firebase';
import { collection, doc, setDoc, deleteDoc, onSnapshot } from 'firebase/firestore';
import { ref, onValue, set, remove } from 'firebase/database';

/**
 * Sanitize and validate data before saving to Firestore.
 * Firestore has a 1MB limit per document.
 * Data URIs (SVGs, PNGs, JPEGs) under ~900KB are preserved intact.
 * Oversized data URIs that exceed Firestore payload limits are safely omitted
 * rather than truncated into corrupt base64 strings.
 */
function stripDataUris(data) {
  if (!data || typeof data !== 'object') return data;
  const cleaned = { ...data };
  for (const key of Object.keys(cleaned)) {
    const val = cleaned[key];
    if (typeof val === 'string' && val.startsWith('data:')) {
      // Keep data URIs up to 900KB — allows SVGs, compressed images, and logos to save intact
      if (val.length > 900000) {
        console.warn(`[Firebase] Data URI for field "${key}" exceeds 900KB limit for Firestore document.`);
        // Omit oversized data URI to prevent Firestore setDoc 1MB size exception
        cleaned[key] = '';
      }
    } else if (Array.isArray(val)) {
      cleaned[key] = val.map((item) =>
        typeof item === 'object' && item !== null ? stripDataUris(item) : item
      );
    } else if (typeof val === 'object' && val !== null) {
      cleaned[key] = stripDataUris(val);
    }
  }
  return cleaned;
}

/**
 * Real-time listener for Firestore
 */
export function subscribeToCollection(collectionName, onUpdate) {
  if (!isFirebaseConfigured) {
    return () => {};
  }

  if (db) {
    try {
      const colRef = collection(db, collectionName);
      return onSnapshot(
        colRef,
        (snapshot) => {
          const items = snapshot.docs.map((docItem) => ({
            id: docItem.id,
            ...docItem.data()
          }));
          onUpdate(items);
        },
        (error) => {
          console.error(`[Firebase Firestore] Subscription error on "${collectionName}":`, error);
        }
      );
    } catch (err) {
      console.error(`[Firebase Firestore] Failed to subscribe to "${collectionName}":`, err);
    }
  }

  return () => {};
}

/**
 * Save document
 */
export async function saveDocument(collectionName, docId, data) {
  if (!isFirebaseConfigured) return false;
  const cleanId = String(docId || `doc_${Date.now()}`);

  let saved = false;

  // 1. Firestore (Primary)
  // Strip base64 data URIs — they exceed Firestore's 1MB doc limit and silently break cross-device sync
  if (db) {
    try {
      const docRef = doc(db, collectionName, cleanId);
      const cleanData = stripDataUris({ ...data, updatedAt: new Date().toISOString() });
      await setDoc(docRef, cleanData, { merge: true });
      saved = true;
    } catch (err) {
      console.warn(`[Firebase Firestore] Save error for ${collectionName}/${cleanId}:`, err.message || err);
    }
  }

  return saved;
}

/**
 * Delete document
 */
export async function removeDocument(collectionName, docId) {
  if (!isFirebaseConfigured) return false;
  const cleanId = String(docId);

  let removed = false;

  if (db) {
    try {
      const docRef = doc(db, collectionName, cleanId);
      await deleteDoc(docRef);
      removed = true;
    } catch (err) {
      console.warn(`[Firebase Firestore] Delete notice:`, err);
    }
  }

  return removed;
}

/**
 * Save collection array
 */
export async function saveCollectionArray(collectionName, itemsArray) {
  if (!isFirebaseConfigured || !Array.isArray(itemsArray)) return false;
  try {
    const savePromises = itemsArray.map((item) => {
      const id = item.id || item.slug || item.badge || item.title || `item_${Date.now()}`;
      return saveDocument(collectionName, id, item);
    });
    await Promise.all(savePromises);
    return true;
  } catch (err) {
    console.error(`[Firebase] Save collection error for ${collectionName}:`, err);
    return false;
  }
}

