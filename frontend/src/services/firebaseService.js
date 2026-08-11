import { db, getRealtimeDb, isFirebaseConfigured } from '../config/firebase';
import { collection, doc, setDoc, deleteDoc, onSnapshot } from 'firebase/firestore';
import { ref, onValue, set, remove } from 'firebase/database';

/**
 * Strip base64 data URI values from an object before saving to Firestore.
 * Firestore has a 1MB document size limit — large base64 images silently fail to save,
 * which causes cross-device sync to break. Images should be hosted URLs, not embedded data.
 */
function stripDataUris(data) {
  if (!data || typeof data !== 'object') return data;
  const cleaned = { ...data };
  for (const key of Object.keys(cleaned)) {
    const val = cleaned[key];
    if (typeof val === 'string' && val.startsWith('data:')) {
      // Replace with a sentinel so we know an image existed but was too large for Firestore
      cleaned[key] = cleaned[key + '_url'] || cleaned['imageUrl'] || cleaned['src'] || '';
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
 * Real-time listener for Firestore or Realtime Database
 */
export function subscribeToCollection(collectionName, onUpdate) {
  if (!isFirebaseConfigured) {
    return () => {};
  }

  // 1. Primary: Firestore (clean HTTP API, no WebSocket console errors)
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
          // Always call onUpdate — even for empty arrays so deletions sync across devices
          onUpdate(items);
        },
        (error) => {
          // Suppress offline/permission notices to avoid console noise
        }
      );
    } catch (err) {
      // Ignore
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

