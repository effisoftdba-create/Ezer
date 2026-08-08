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

  // 1. Listen via Realtime Database if available
  if (realtimeDb) {
    try {
      const dbRef = ref(realtimeDb, collectionName);
      return onValue(
        dbRef,
        (snapshot) => {
          const val = snapshot.val();
          if (val) {
            const items = Array.isArray(val) ? val : Object.values(val);
            if (items && items.length > 0) onUpdate(items);
          }
        },
        (error) => {
          console.debug(`[Firebase Realtime DB] Notice for ${collectionName}:`, error);
        }
      );
    } catch (err) {
      console.debug(`[Firebase Realtime DB] Listener notice:`, err);
    }
  }

  // 2. Listen via Firestore if available
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
          if (items.length > 0) onUpdate(items);
        },
        (error) => {
          console.debug(`[Firebase Firestore] Notice for ${collectionName}:`, error);
        }
      );
    } catch (err) {
      console.debug(`[Firebase Firestore] Listener notice:`, err);
    }
  }

  return () => {};
}

/**
 * Save document to Realtime Database / Firestore
 */
export async function saveDocument(collectionName, docId, data) {
  if (!isFirebaseConfigured) return false;
  const cleanId = String(docId || `doc_${Date.now()}`);

  let saved = false;

  if (realtimeDb) {
    try {
      const dbRef = ref(realtimeDb, `${collectionName}/${cleanId}`);
      await set(dbRef, { ...data, updatedAt: new Date().toISOString() });
      saved = true;
    } catch (err) {
      console.debug(`[Firebase Realtime DB] Save notice:`, err);
    }
  }

  if (db && !saved) {
    try {
      const docRef = doc(db, collectionName, cleanId);
      await setDoc(docRef, { ...data, updatedAt: new Date().toISOString() }, { merge: true });
      saved = true;
    } catch (err) {
      console.debug(`[Firebase Firestore] Save notice:`, err);
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
      console.debug(`[Firebase Realtime DB] Delete notice:`, err);
    }
  }

  if (db && !removed) {
    try {
      const docRef = doc(db, collectionName, cleanId);
      await deleteDoc(docRef);
      removed = true;
    } catch (err) {
      console.debug(`[Firebase Firestore] Delete notice:`, err);
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
    console.debug(`[Firebase] Save collection notice for ${collectionName}:`, err);
    return false;
  }
}
