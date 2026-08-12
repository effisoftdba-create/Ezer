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
 * Real-time listener for Firestore and Realtime Database
 */
export function subscribeToCollection(collectionName, onUpdate) {
  if (!isFirebaseConfigured) {
    return () => {};
  }

  let unsubFirestore = () => {};
  let unsubRealtime = () => {};
  let lastJsonPayload = '';
  let rafId = null;

  const debouncedUpdate = (items) => {
    try {
      const jsonStr = JSON.stringify(items);
      if (jsonStr === lastJsonPayload) return; // Deduplicate dual DB snapshots
      lastJsonPayload = jsonStr;

      if (rafId) {
        if (typeof cancelAnimationFrame !== 'undefined') cancelAnimationFrame(rafId);
        else clearTimeout(rafId);
      }

      if (typeof requestAnimationFrame !== 'undefined') {
        rafId = requestAnimationFrame(() => {
          onUpdate(items);
        });
      } else {
        rafId = setTimeout(() => onUpdate(items), 0);
      }
    } catch (err) {
      onUpdate(items);
    }
  };

  // 1. Primary: Firestore Listener
  if (db) {
    try {
      const colRef = collection(db, collectionName);
      unsubFirestore = onSnapshot(
        colRef,
        (snapshot) => {
          if (!snapshot.empty) {
            const items = snapshot.docs.map((docItem) => ({
              id: docItem.id,
              ...docItem.data()
            }));
            debouncedUpdate(items);
          }
        },
        (error) => {
          console.warn(`[Firestore Listener Notice] ${collectionName}:`, error.message || error);
        }
      );
    } catch (err) {
      console.warn(`[Firestore Subscription Error] ${collectionName}:`, err);
    }
  }

  // 2. Secondary Dual Sync: Realtime Database Listener
  const rtdb = getRealtimeDb();
  if (rtdb) {
    try {
      const dbRef = ref(rtdb, collectionName);
      unsubRealtime = onValue(
        dbRef,
        (snapshot) => {
          const val = snapshot.val();
          if (val) {
            let items = [];
            if (Array.isArray(val)) {
              items = val.filter(Boolean);
            } else if (typeof val === 'object') {
              items = Object.keys(val).map((k) => ({
                id: k,
                ...(typeof val[k] === 'object' ? val[k] : { value: val[k] })
              }));
            }
            if (items.length > 0) {
              debouncedUpdate(items);
            }
          }
        },
        (err) => {
          console.warn(`[RealtimeDB Listener Notice] ${collectionName}:`, err.message || err);
        }
      );
    } catch (err) {
      console.warn(`[RealtimeDB Subscription Error] ${collectionName}:`, err);
    }
  }

  return () => {
    if (updateTimer) clearTimeout(updateTimer);
    if (typeof unsubFirestore === 'function') unsubFirestore();
    if (typeof unsubRealtime === 'function') unsubRealtime();
  };
}

/**
 * Save document (Dual Firestore + Realtime DB Sync)
 */
export async function saveDocument(collectionName, docId, data) {
  if (!isFirebaseConfigured) return false;
  const cleanId = String(docId || `doc_${Date.now()}`);
  const cleanData = sanitizeForFirestore({ ...data, updatedAt: new Date().toISOString() });

  let saved = false;

  // 1. Firestore
  if (db) {
    try {
      const docRef = doc(db, collectionName, cleanId);
      await setDoc(docRef, cleanData, { merge: true });
      saved = true;
    } catch (err) {
      console.warn(`[Firestore Save Notice] ${collectionName}/${cleanId}:`, err.message || err);
    }
  }

  // 2. Realtime Database
  const rtdb = getRealtimeDb();
  if (rtdb) {
    try {
      const itemRef = ref(rtdb, `${collectionName}/${cleanId}`);
      await set(itemRef, cleanData);
      saved = true;
    } catch (err) {
      console.warn(`[RealtimeDB Save Notice] ${collectionName}/${cleanId}:`, err.message || err);
    }
  }

  return saved;
}

/**
 * Delete document (Dual Firestore + Realtime DB Removal)
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
      console.warn(`[Firestore Delete Notice] ${collectionName}/${cleanId}:`, err.message || err);
    }
  }

  const rtdb = getRealtimeDb();
  if (rtdb) {
    try {
      const itemRef = ref(rtdb, `${collectionName}/${cleanId}`);
      await remove(itemRef);
      removed = true;
    } catch (err) {
      console.warn(`[RealtimeDB Delete Notice] ${collectionName}/${cleanId}:`, err.message || err);
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

