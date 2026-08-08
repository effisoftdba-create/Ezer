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

  // 1. Try Firestore snapshot
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
          console.warn(`[Firebase Firestore] Notice for ${collectionName}:`, error);
        }
      );
    } catch (err) {
      console.warn(`[Firebase Firestore] Fallback to Realtime DB:`, err);
    }
  }

  // 2. Fallback to Realtime Database
  if (realtimeDb) {
    try {
      const dbRef = ref(realtimeDb, collectionName);
      return onValue(dbRef, (snapshot) => {
        const val = snapshot.val();
        if (val) {
          const items = Array.isArray(val) ? val : Object.values(val);
          onUpdate(items);
        }
      });
    } catch (err) {
      console.warn(`[Firebase Realtime DB] Error for ${collectionName}:`, err);
    }
  }

  return () => {};
}

/**
 * Save document to Firestore / Realtime Database
 */
export async function saveDocument(collectionName, docId, data) {
  if (!isFirebaseConfigured) return false;
  const cleanId = String(docId || `doc_${Date.now()}`);

  if (db) {
    try {
      const docRef = doc(db, collectionName, cleanId);
      await setDoc(docRef, { ...data, updatedAt: new Date().toISOString() }, { merge: true });
      return true;
    } catch (err) {
      console.warn(`[Firebase Firestore] Save notice:`, err);
    }
  }

  if (realtimeDb) {
    try {
      const dbRef = ref(realtimeDb, `${collectionName}/${cleanId}`);
      await set(dbRef, { ...data, updatedAt: new Date().toISOString() });
      return true;
    } catch (err) {
      console.warn(`[Firebase Realtime DB] Save error:`, err);
    }
  }

  return false;
}

/**
 * Delete document
 */
export async function removeDocument(collectionName, docId) {
  if (!isFirebaseConfigured) return false;
  const cleanId = String(docId);

  if (db) {
    try {
      const docRef = doc(db, collectionName, cleanId);
      await deleteDoc(docRef);
      return true;
    } catch (err) {
      console.warn(`[Firebase Firestore] Delete notice:`, err);
    }
  }

  if (realtimeDb) {
    try {
      const dbRef = ref(realtimeDb, `${collectionName}/${cleanId}`);
      await remove(dbRef);
      return true;
    } catch (err) {
      console.warn(`[Firebase Realtime DB] Delete error:`, err);
    }
  }

  return false;
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
    console.error(`[Firebase] Failed saving collection ${collectionName}:`, err);
    return false;
  }
}
