import { db, getRealtimeDb, isFirebaseConfigured } from '../config/firebase';
import { collection, doc, setDoc, deleteDoc, onSnapshot, getDocs } from 'firebase/firestore';
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
      if (val.length > 1500000) {
        console.warn(`[Firebase] Data URI for field "${key}" exceeds 1.5MB limit for Firestore.`);
        cleaned[key] = val; // Keep image in memory
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
 * Helper to deduplicate array of collection items by unique identifier
 */
function deduplicateCollectionItems(items) {
  if (!Array.isArray(items)) return [];
  const map = new Map();
  items.forEach((item) => {
    if (!item) return;
    const key = String(item.id || item.slug || item.badge || item.title || item.name || item.tag || '');
    if (key) {
      if (map.has(key)) {
        map.set(key, { ...map.get(key), ...item, id: item.id || key });
      } else {
        map.set(key, { ...item, id: item.id || key });
      }
    } else {
      map.set(String(Date.now() + Math.random()), item);
    }
  });
  return Array.from(map.values());
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
      const cleanItems = deduplicateCollectionItems(items);
      const jsonStr = JSON.stringify(cleanItems);
      if (jsonStr === lastJsonPayload) return; // Deduplicate dual DB snapshots
      lastJsonPayload = jsonStr;

      if (rafId) {
        if (typeof cancelAnimationFrame !== 'undefined') cancelAnimationFrame(rafId);
        else clearTimeout(rafId);
      }

      if (typeof requestAnimationFrame !== 'undefined') {
        rafId = requestAnimationFrame(() => {
          onUpdate(cleanItems);
        });
      } else {
        rafId = setTimeout(() => onUpdate(cleanItems), 0);
      }
    } catch (err) {
      onUpdate(deduplicateCollectionItems(items));
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
              items = Object.keys(val).map((k) => {
                const itemData = typeof val[k] === 'object' ? val[k] : { value: val[k] };
                return {
                  ...itemData,
                  id: itemData?.id || k
                };
              });
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
    if (rafId) {
      if (typeof cancelAnimationFrame !== 'undefined') cancelAnimationFrame(rafId);
      else clearTimeout(rafId);
    }
    if (typeof unsubFirestore === 'function') unsubFirestore();
    if (typeof unsubRealtime === 'function') unsubRealtime();
  };
}

/**
 * Save document (Dual Firestore + Realtime DB Sync)
 */
export async function saveDocument(collectionName, docId, data) {
  if (!isFirebaseConfigured) return false;
  const cleanId = String(docId || (data && (data.id || data.slug || data.title)) || `doc_${Date.now()}`);
  const cleanData = sanitizeForFirestore({ ...data, id: cleanId, updatedAt: new Date().toISOString() });

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
 * Save collection array (Dual Firestore + Realtime DB Sync with Clean Overwrite & Pruning)
 */
export async function saveCollectionArray(collectionName, itemsArray) {
  if (!isFirebaseConfigured || !Array.isArray(itemsArray)) return false;
  try {
    const cleanItemsArray = deduplicateCollectionItems(itemsArray);
    const keepIds = new Set(cleanItemsArray.flatMap((item) => [
      String(item.id || ''),
      String(item.slug || ''),
      String(item.badge || ''),
      String(item.title || ''),
      String(item.name || ''),
      String(item.author || ''),
      String(item.roleTag || '')
    ].filter(Boolean)));

    // 1. Remove obsolete documents from Firestore collection
    if (db) {
      try {
        const colRef = collection(db, collectionName);
        const snapshot = await getDocs(colRef);
        const prunePromises = [];
        for (const d of snapshot.docs) {
          const data = d.data();
          const docId = String(d.id);
          const docTitle = String(data?.title || '');
          const docSlug = String(data?.slug || '');
          const docName = String(data?.name || data?.author || '');
          if (!keepIds.has(docId) && !keepIds.has(docTitle) && !keepIds.has(docSlug) && !keepIds.has(docName)) {
            prunePromises.push(deleteDoc(d.ref));
          }
        }

        if (prunePromises.length > 0) {
          await Promise.all(prunePromises);
        }
      } catch (e) {
        console.warn(`[Firestore Prune Notice] ${collectionName}:`, e.message || e);
      }
    }

    // 2. Overwrite Realtime Database node cleanly so old items disappear
    const rtdb = getRealtimeDb();
    if (rtdb) {
      try {
        const dbRef = ref(rtdb, collectionName);
        const cleanSanitized = sanitizeForFirestore(cleanItemsArray);
        await set(dbRef, cleanSanitized);
      } catch (e) {
        console.warn(`[RealtimeDB Overwrite Notice] ${collectionName}:`, e.message || e);
      }
    }

    // 3. Save each current item to Firestore
    if (db) {
      const savePromises = cleanItemsArray.map((item) => {
        const id = String(item.id || item.slug || item.badge || item.title || `item_${Date.now()}`);
        const docRef = doc(db, collectionName, id);
        const cleanData = sanitizeForFirestore({ ...item, id, updatedAt: new Date().toISOString() });
        return setDoc(docRef, cleanData, { merge: true });
      });
      await Promise.all(savePromises);
    }

    return true;
  } catch (err) {
    console.error(`[Firebase] Save collection error for ${collectionName}:`, err);
    return false;
  }
}

