import { db, getRealtimeDb, isFirebaseConfigured } from '../config/firebase';
import { collection, doc, setDoc, deleteDoc, onSnapshot } from 'firebase/firestore';
import { ref, onValue, set, remove } from 'firebase/database';

/**
 * Sanitize data before saving to Firestore.
 * Strips non-serializable objects (React JSX nodes, functions, symbols),
 * and omits data URIs > 900KB to prevent 1MB document limit errors.
 */
function sanitizeForFirestore(data) {
  if (data === null || data === undefined) return null;
  if (typeof data !== 'object') {
    if (typeof data === 'function' || typeof data === 'symbol') return undefined;
    return data;
  }
  if (data.$$typeof || data._owner || data._store) return undefined;

  if (Array.isArray(data)) {
    return data
      .map((item) => sanitizeForFirestore(item))
      .filter((item) => item !== undefined);
  }

  const cleaned = {};
  for (const key of Object.keys(data)) {
    const val = data[key];
    if (val === undefined || typeof val === 'function' || typeof val === 'symbol') continue;
    if (val && typeof val === 'object' && (val.$$typeof || val._owner || val._store)) continue;

    if (typeof val === 'string' && val.startsWith('data:')) {
      if (val.length > 900000) {
        console.warn(`[Firebase] Data URI for field "${key}" exceeds 900KB limit for Firestore.`);
        cleaned[key] = '';
      } else {
        cleaned[key] = val;
      }
    } else if (typeof val === 'object' && val !== null) {
      const child = sanitizeForFirestore(val);
      if (child !== undefined) cleaned[key] = child;
    } else {
      cleaned[key] = val;
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

  if (db) {
    try {
      const docRef = doc(db, collectionName, cleanId);
      const cleanData = sanitizeForFirestore({ ...data, updatedAt: new Date().toISOString() });
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

