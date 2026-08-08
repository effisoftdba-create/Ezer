import { db, realtimeDb, isFirebaseConfigured } from '../config/firebase';
import { collection, doc, setDoc, deleteDoc, onSnapshot } from 'firebase/firestore';
import { ref, onValue, set, remove } from 'firebase/database';

/**
 * Real-time listener for Firestore or Realtime Database
 */
export function subscribeToCollection(collectionName, onUpdate) {
  if (!isFirebaseConfigured) {
    return () => {};
  }

  // 1. Primary: Realtime Database snapshot listener
  if (realtimeDb) {
    try {
      const dbRef = ref(realtimeDb, collectionName);
      return onValue(
        dbRef,
        (snapshot) => {
          const val = snapshot.val();
          if (val !== null && val !== undefined) {
            const items = Array.isArray(val) ? val : Object.values(val);
            if (items && items.length > 0) {
              onUpdate(items);
            }
          }
        },
        (error) => {
          console.warn(`[Firebase Realtime DB] Notice for ${collectionName}:`, error);
        }
      );
    } catch (err) {
      console.warn(`[Firebase Realtime DB] Listener error:`, err);
    }
  }

  // 2. Secondary: Firestore
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
          if (items && items.length > 0) onUpdate(items);
        },
        (error) => {
          console.warn(`[Firebase Firestore] Notice for ${collectionName}:`, error);
        }
      );
    } catch (err) {
      console.warn(`[Firebase Firestore] Listener error:`, err);
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

  // 1. Realtime Database (Primary)
  if (realtimeDb) {
    try {
      const dbRef = ref(realtimeDb, `${collectionName}/${cleanId}`);
      await set(dbRef, { ...data, updatedAt: new Date().toISOString() });
      saved = true;
    } catch (err) {
      console.warn(`[Firebase Realtime DB] Save error:`, err);
    }
  }

  // 2. Firestore (Secondary)
  if (db) {
    try {
      const docRef = doc(db, collectionName, cleanId);
      await setDoc(docRef, { ...data, updatedAt: new Date().toISOString() }, { merge: true });
      saved = true;
    } catch (err) {
      console.warn(`[Firebase Firestore] Save notice:`, err);
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

  if (realtimeDb) {
    try {
      const dbRef = ref(realtimeDb, `${collectionName}/${cleanId}`);
      await remove(dbRef);
      removed = true;
    } catch (err) {
      console.warn(`[Firebase Realtime DB] Delete error:`, err);
    }
  }

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
