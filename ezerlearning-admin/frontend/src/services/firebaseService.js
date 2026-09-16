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
 * Extract canonical unique business key for items to prevent duplicate reflection
 */
export function getCollectionItemKey(item, collectionName = '') {
  if (!item || typeof item !== 'object') return '';

  const rawTitle = String(item.title || '').trim().toLowerCase();
  const rawSlug = String(item.slug || '').trim().toLowerCase();
  const rawName = String(item.name || item.author || item.fullName || item.studentName || '').trim().toLowerCase();
  const rawHeadline = String(item.headline || '').trim().toLowerCase();
  const rawQuestion = String(item.question || '').trim().toLowerCase();
  const rawUrl = String(item.url || item.image || '').trim().toLowerCase();

  const normTitle = rawTitle.replace(/[^a-z0-9]/g, '');
  const normSlug = rawSlug.replace(/[^a-z0-9]/g, '');
  const normName = rawName.replace(/[^a-z0-9]/g, '');

  if (collectionName === 'courses') {
    const key = normSlug || normTitle;
    if (key) {
      if (key.includes('devops') || key.includes('cloud')) return 'course_cloud_devops';
      if (key.includes('playwright') || key.includes('softwaretesting') || key.includes('testing')) return 'course_testing_playwright';
      if (key === 'aiml' || key.includes('machinelearning') || key.includes('aimachinelearning')) return 'course_ai_ml';
      if (key.includes('infrastructure') || key.includes('sysadmin') || key.includes('itinfra')) return 'course_it_infra';
      if (key.includes('fullstack') || key.includes('fullstackdev')) return 'course_full_stack';
      if (key.includes('dataanal') || key.includes('dataengineering')) return 'course_data_analytics';
      if (key.includes('spokenenglish') || key.includes('english')) return 'course_spoken_english';
      if (key.includes('cyber') || key.includes('ethicalhacking')) return 'course_cyber_security';
      return `course_${key}`;
    }
  }

  if (collectionName === 'heroSlides') {
    if (rawUrl) return `slide_${rawUrl.split('?')[0].replace(/[^a-z0-9]/g, '')}`;
    if (rawHeadline) return `slide_${rawHeadline.slice(0, 35).replace(/[^a-z0-9]/g, '')}`;
  }

  if (collectionName === 'homeTrainers' || collectionName === 'seniorMentors' || collectionName === 'executiveLeaders') {
    if (normName) return `trainer_${normName}`;
  }

  if (collectionName === 'writtenTestimonials' || collectionName === 'videoTestimonials') {
    if (normName) return `testi_${normName}`;
  }

  if (collectionName === 'faqList') {
    if (rawQuestion) return `faq_${rawQuestion.slice(0, 40).replace(/[^a-z0-9]/g, '')}`;
  }

  if (collectionName === 'blogs') {
    if (normSlug) return `blog_${normSlug}`;
    if (normTitle) return `blog_${normTitle}`;
  }

  if (collectionName === 'hiringPartners') {
    if (normName) return `partner_${normName}`;
  }

  if (collectionName === 'supportCards') {
    if (normTitle) return `support_${normTitle}`;
  }

  if (collectionName === 'transformedLives') {
    if (normName) return `trans_${normName}`;
  }

  if (collectionName === 'achievements') {
    if (normTitle) return `achieve_${normTitle}`;
  }

  return String(item.id || normSlug || normTitle || normName || '');
}

/**
 * Robust deduplication of collection items by canonical business identity.
 * Merges duplicate entries so no detailed syllabus, tools or data are lost.
 */
export function deduplicateCollectionItems(items, collectionName = '') {
  if (!Array.isArray(items)) return [];
  const map = new Map();

  items.forEach((item) => {
    if (!item) return;
    const key = getCollectionItemKey(item, collectionName) || String(item.id || '');
    if (!key) return;

    if (!map.has(key)) {
      map.set(key, { ...item });
    } else {
      const existing = map.get(key);
      const isNewer = item.updatedAt && (!existing.updatedAt || new Date(item.updatedAt) > new Date(existing.updatedAt));
      const base = isNewer ? { ...existing, ...item } : { ...item, ...existing };

      // Preserve rich curriculum modules if present
      if (Array.isArray(existing.curriculumModules) && existing.curriculumModules.length > (item.curriculumModules?.length || 0)) {
        base.curriculumModules = existing.curriculumModules;
      } else if (Array.isArray(item.curriculumModules) && item.curriculumModules.length > (existing.curriculumModules?.length || 0)) {
        base.curriculumModules = item.curriculumModules;
      }

      // Preserve tools, projects, whoIsItFor
      if (Array.isArray(existing.tools) && existing.tools.length > (item.tools?.length || 0)) {
        base.tools = existing.tools;
      }
      if (Array.isArray(existing.whoIsItFor) && existing.whoIsItFor.length > (item.whoIsItFor?.length || 0)) {
        base.whoIsItFor = existing.whoIsItFor;
      }
      if (Array.isArray(existing.projects) && existing.projects.length > (item.projects?.length || 0)) {
        base.projects = existing.projects;
      }

      // Preserve image and positioning
      if (!base.image && (existing.image || item.image)) base.image = existing.image || item.image;
      if (!base.imageFit && (existing.imageFit || item.imageFit)) base.imageFit = existing.imageFit || item.imageFit;
      if (!base.imagePosition && (existing.imagePosition || item.imagePosition)) base.imagePosition = existing.imagePosition || item.imagePosition;

      map.set(key, base);
    }
  });

  return Array.from(map.values());
}

const RTDB_COLLECTION_ALIASES = {
  heroSlides: ['heroSlider', 'heroSlides'],
  homeTrainers: ['teamTrainers', 'homeTrainers'],
  seniorMentors: ['teamTrainers', 'seniorMentors'],
  transformedLives: ['transformations', 'transformedLives'],
  aboutVideos: ['aboutHero', 'aboutVideos'],
  aboutShowcaseCards: ['aboutValuesCards', 'aboutShowcaseCards'],
  supportCards: ['opportunite', 'supportCards']
};

/**
 * Real-time listener for Cloud Firestore (Single Authoritative Source).
 * Realtime Database is only used as a fallback if Firestore is unavailable.
 * Dual-listener concurrent execution is strictly disabled to prevent duplication.
 */
export function subscribeToCollection(collectionName, onUpdate) {
  if (!isFirebaseConfigured) {
    return () => {};
  }

  let unsubFirestore = () => {};
  let unsubRealtime = () => {};
  let lastJsonPayload = '';
  let rafId = null;
  let isFirestoreActive = false;

  const emitClean = (items) => {
    if (!Array.isArray(items)) return;
    const cleanItems = deduplicateCollectionItems(items, collectionName);
    const jsonStr = JSON.stringify(cleanItems);
    if (jsonStr === lastJsonPayload) return;
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
  };

  const startRealtimeFallback = () => {
    if (isFirestoreActive) return;
    const rtdb = getRealtimeDb();
    if (!rtdb) return;

    const aliasList = RTDB_COLLECTION_ALIASES[collectionName] || [collectionName];
    const rtdbKey = aliasList[0] || collectionName;

    try {
      const dbRef = ref(rtdb, rtdbKey);
      unsubRealtime = onValue(
        dbRef,
        (snapshot) => {
          if (isFirestoreActive) return;
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
              emitClean(items);
            }
          }
        },
        (err) => {
          if (err && (err.code === 'PERMISSION_DENIED' || String(err.message || '').includes('permission_denied'))) {
            return;
          }
          console.warn(`[RealtimeDB Fallback Notice] ${collectionName}:`, err.message || err);
        }
      );
    } catch (err) {
      console.warn(`[RealtimeDB Fallback Error] ${collectionName}:`, err);
    }
  };

  // 1. Primary Authoritative Listener: Cloud Firestore
  if (db) {
    try {
      const colRef = collection(db, collectionName);
      unsubFirestore = onSnapshot(
        colRef,
        (snapshot) => {
          isFirestoreActive = true;
          // Shut down any fallback listener immediately
          if (typeof unsubRealtime === 'function') {
            unsubRealtime();
            unsubRealtime = () => {};
          }

          if (!snapshot.empty) {
            const items = snapshot.docs.map((docItem) => ({
              id: docItem.id,
              ...docItem.data()
            }));
            emitClean(items);
          } else {
            emitClean([]);
          }
        },
        (error) => {
          console.warn(`[Firestore Listener Notice] ${collectionName}:`, error.message || error);
          if (!isFirestoreActive) {
            startRealtimeFallback();
          }
        }
      );
    } catch (err) {
      console.warn(`[Firestore Subscription Error] ${collectionName}:`, err);
      startRealtimeFallback();
    }
  } else {
    startRealtimeFallback();
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
 * Save document (Dual Firestore + Realtime DB Sync with alias support)
 */
export async function saveDocument(collectionName, docId, data) {
  if (!isFirebaseConfigured) return false;
  const cleanId = String(docId || (data && (data.id || data.slug || data.title)) || `doc_${Date.now()}`);
  const cleanData = sanitizeForFirestore({ ...data, id: cleanId, updatedAt: new Date().toISOString() });

  let firestoreSaved = false;
  let rtdbSaved = false;

  // 1. Firestore (Primary)
  if (db) {
    try {
      const docRef = doc(db, collectionName, cleanId);
      await setDoc(docRef, cleanData, { merge: true });
      firestoreSaved = true;
    } catch (err) {
      console.warn(`[Firestore Save Notice] ${collectionName}/${cleanId}:`, err.message || err);
    }
  }

  // 2. Realtime Database (Secondary Sync with aliases)
  const rtdb = getRealtimeDb();
  if (rtdb) {
    const aliasList = Array.from(new Set([collectionName, ...(RTDB_COLLECTION_ALIASES[collectionName] || [])]));
    for (const nodeKey of aliasList) {
      try {
        const itemRef = ref(rtdb, `${nodeKey}/${cleanId}`);
        await set(itemRef, cleanData);
        rtdbSaved = true;
      } catch (err) {
        if (!String(err?.message || '').includes('permission_denied')) {
          console.warn(`[RealtimeDB Save Notice] ${nodeKey}/${cleanId}:`, err.message || err);
        }
      }
    }
  }

  return firestoreSaved || rtdbSaved;
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
    const aliasList = Array.from(new Set([collectionName, ...(RTDB_COLLECTION_ALIASES[collectionName] || [])]));
    for (const nodeKey of aliasList) {
      try {
        const itemRef = ref(rtdb, `${nodeKey}/${cleanId}`);
        await remove(itemRef);
        removed = true;
      } catch (err) {
        if (!String(err?.message || '').includes('permission_denied')) {
          console.warn(`[RealtimeDB Delete Notice] ${nodeKey}/${cleanId}:`, err.message || err);
        }
      }
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
    const cleanItemsArray = deduplicateCollectionItems(itemsArray, collectionName);
    const keepIds = new Set(cleanItemsArray.flatMap((item) => [
      String(item.id || ''),
      String(item.slug || ''),
      String(item.badge || ''),
      String(item.title || ''),
      String(item.name || ''),
      String(item.author || ''),
      String(item.roleTag || '')
    ].filter(Boolean)));

    let firestoreSaved = false;
    let rtdbSaved = false;

    // 1. Remove obsolete or duplicate documents from Firestore collection
    if (db) {
      try {
        const colRef = collection(db, collectionName);
        const snapshot = await getDocs(colRef);
        const prunePromises = [];
        const seenKeysInFirestore = new Set();

        for (const d of snapshot.docs) {
          const data = d.data();
          const docItem = { id: d.id, ...data };
          const itemKey = getCollectionItemKey(docItem, collectionName);
          const docId = String(d.id);
          const docTitle = String(data?.title || '');
          const docSlug = String(data?.slug || '');
          const docName = String(data?.name || data?.author || '');

          const isKeep = keepIds.has(docId) || keepIds.has(docTitle) || keepIds.has(docSlug) || keepIds.has(docName);

          if (!isKeep || (itemKey && seenKeysInFirestore.has(itemKey))) {
            prunePromises.push(deleteDoc(d.ref));
          } else if (itemKey) {
            seenKeysInFirestore.add(itemKey);
          }
        }

        if (prunePromises.length > 0) {
          await Promise.all(prunePromises);
        }
      } catch (e) {
        console.warn(`[Firestore Prune Notice] ${collectionName}:`, e.message || e);
      }
    }

    // 2. Overwrite Realtime Database node cleanly so old items disappear (syncing to all aliases)
    const rtdb = getRealtimeDb();
    if (rtdb) {
      const aliasList = Array.from(new Set([collectionName, ...(RTDB_COLLECTION_ALIASES[collectionName] || [])]));
      const cleanSanitized = sanitizeForFirestore(cleanItemsArray);
      for (const nodeKey of aliasList) {
        try {
          const dbRef = ref(rtdb, nodeKey);
          await set(dbRef, cleanSanitized);
          rtdbSaved = true;
        } catch (e) {
          if (!String(e?.message || '').includes('permission_denied')) {
            console.warn(`[RealtimeDB Overwrite Notice] ${nodeKey}:`, e.message || e);
          }
        }
      }
    }

    // 3. Save each current item to Firestore
    if (db) {
      try {
        const savePromises = cleanItemsArray.map((item) => {
          const id = String(item.id || item.slug || item.badge || item.title || `item_${Date.now()}`);
          const docRef = doc(db, collectionName, id);
          const cleanData = sanitizeForFirestore({ ...item, id, updatedAt: new Date().toISOString() });
          return setDoc(docRef, cleanData, { merge: true });
        });
        await Promise.all(savePromises);
        firestoreSaved = true;
      } catch (e) {
        console.warn(`[Firestore Save Collection Notice] ${collectionName}:`, e.message || e);
      }
    }

    return firestoreSaved || rtdbSaved;
  } catch (err) {
    console.error(`[Firebase] Save collection error for ${collectionName}:`, err);
    return false;
  }
}

