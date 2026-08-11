import React, { createContext, useContext, useReducer, useEffect, useMemo, useCallback } from 'react';
import { triggerStateToast } from '../../../utils/toastService';
import { batchFetchRelatedData } from '../../../utils/dbQueries';
import { phase1Courses } from '../../../data/courses';
import { testimonials as initialTestimonials } from '../../../data/testimonials';
import { generalFaqs } from '../../../data/faq';
import {
  STORAGE_SLIDES_KEY,
  STORAGE_COURSES_KEY,
  STORAGE_PLATFORM_KEY,
  STORAGE_SUPPORT_CARDS_KEY,
  STORAGE_TRANSFORMED_KEY,
  STORAGE_OUTCOMES_HEADER_KEY,
  STORAGE_MENTORS_KEY,
  STORAGE_MENTORS_HEADER_KEY,
  STORAGE_VIDEOS_KEY,
  STORAGE_TESTIMONIALS_HERO_KEY,
  STORAGE_WRITTEN_TESTIMONIALS_KEY,
  STORAGE_FAQS_KEY,
  STORAGE_CONTACT_KEY,
  STORAGE_POPUP_CONFIG_KEY,
  STORAGE_LEADS_KEY,
  STORAGE_BLOGS_KEY,
  STORAGE_ACHIEVEMENTS_KEY,
  STORAGE_EXECUTIVE_LEADERS_KEY,
  STORAGE_HIRING_PARTNERS_KEY,
  STORAGE_PAYMENT_CONFIG_KEY,
  STORAGE_ABOUT_VIDEOS_KEY,
  STORAGE_PAYMENTS_KEY,
  defaultPaymentConfig,
  defaultAboutVideos,
  defaultPayments,

  defaultExecutiveLeaders,
  defaultHiringPartners,
  defaultSlides,
  defaultPlatformDef,
  defaultSupportCards,
  defaultTransformedLives,
  defaultSeniorMentors,
  defaultVideoTestimonials,
  defaultBlogs,
  defaultAchievements,
  getStored,
  getInitialState,
  siteReducer,
  safeSetStorage
} from '../../database/defaults/siteDefaults';

import { subscribeToCollection, saveCollectionArray, saveDocument, removeDocument } from '../../../services/firebaseService';

const SiteContext = createContext();

function mergeCollection(defaults, firebaseItems, primaryKey = 'id') {
  if (!Array.isArray(firebaseItems) || firebaseItems.length === 0) return defaults || [];
  if (!Array.isArray(defaults) || defaults.length === 0) return firebaseItems;

  const itemMap = new Map();
  defaults.forEach((defItem) => {
    const key = String(defItem[primaryKey] || defItem.id || defItem.roleTag || defItem.badge || defItem.title || defItem.slug || '');
    if (key) itemMap.set(key, defItem);
  });

  firebaseItems.forEach((fbItem) => {
    const key = String(fbItem[primaryKey] || fbItem.id || fbItem.roleTag || fbItem.badge || fbItem.title || fbItem.slug || '');
    if (key) {
      const existing = itemMap.get(key) || {};
      const merged = { ...existing, ...fbItem };
      if (!merged.position && existing.position) merged.position = existing.position;
      if (!merged.imagePosition && existing.imagePosition) merged.imagePosition = existing.imagePosition;
      if (!merged.fit && existing.fit) merged.fit = existing.fit;
      if (!merged.imageFit && existing.imageFit) merged.imageFit = existing.imageFit;
      if (!merged.zoom && existing.zoom) merged.zoom = existing.zoom;
      if (!merged.imageZoom && existing.imageZoom) merged.imageZoom = existing.imageZoom;
      itemMap.set(key, merged);
    } else {
      itemMap.set(String(Date.now() + Math.random()), fbItem);
    }
  });

  return Array.from(itemMap.values());
}

export function SiteProvider({ children }) {
  const [state, dispatch] = useReducer(siteReducer, null, getInitialState);

  const {
    heroSlides,
    courses,
    ezerDefinition,
    supportCards,
    transformedLives,
    outcomesHeader,
    seniorMentors,
    mentorsHeader,
    videoTestimonials,
    testimonialsHero,
    writtenTestimonials,
    faqList,
    contactInfo,
    popupConfig,
    leads,
    blogs,
    achievements,
    executiveLeaders,
    hiringPartners,
    paymentConfig,
    aboutVideos,
    payments
  } = state;

  // Check for mobile sync token in URL
  useEffect(() => {
    try {
      const fullUrl = window.location.href || '';
      if (fullUrl.includes('syncData=') || fullUrl.includes('sync?data=')) {
        let rawToken = '';
        if (fullUrl.includes('syncData=')) {
          rawToken = fullUrl.split('syncData=')[1].split('&')[0];
        } else if (fullUrl.includes('sync?data=')) {
          rawToken = fullUrl.split('sync?data=')[1].split('&')[0];
        }

        if (rawToken) {
          const decoded = JSON.parse(decodeURIComponent(rawToken));
          if (decoded && typeof decoded === 'object') {
            Object.keys(decoded).forEach((key) => {
              if (decoded[key]) {
                dispatch({ type: 'SET_KEY', key, value: decoded[key] });
              }
            });
            window.history.replaceState({}, document.title, window.location.pathname);
            triggerStateToast('SAVED');
          }
        }
      }
    } catch (e) {
      console.warn('[SyncToken] Could not parse token:', e);
    }
  }, []);

  // Sync internal state to LocalStorage
  useEffect(() => { safeSetStorage(STORAGE_SLIDES_KEY, heroSlides); }, [heroSlides]);
  useEffect(() => { safeSetStorage(STORAGE_COURSES_KEY, courses); }, [courses]);
  useEffect(() => { safeSetStorage(STORAGE_PLATFORM_KEY, ezerDefinition); }, [ezerDefinition]);
  useEffect(() => { safeSetStorage(STORAGE_SUPPORT_CARDS_KEY, supportCards); }, [supportCards]);
  useEffect(() => { safeSetStorage(STORAGE_TRANSFORMED_KEY, transformedLives); }, [transformedLives]);
  useEffect(() => { safeSetStorage(STORAGE_OUTCOMES_HEADER_KEY, outcomesHeader); }, [outcomesHeader]);
  useEffect(() => { safeSetStorage(STORAGE_MENTORS_KEY, seniorMentors); }, [seniorMentors]);
  useEffect(() => { safeSetStorage(STORAGE_MENTORS_HEADER_KEY, mentorsHeader); }, [mentorsHeader]);
  useEffect(() => { safeSetStorage(STORAGE_VIDEOS_KEY, videoTestimonials); }, [videoTestimonials]);
  useEffect(() => { safeSetStorage(STORAGE_TESTIMONIALS_HERO_KEY, testimonialsHero); }, [testimonialsHero]);
  useEffect(() => { safeSetStorage(STORAGE_WRITTEN_TESTIMONIALS_KEY, writtenTestimonials); }, [writtenTestimonials]);
  useEffect(() => { safeSetStorage(STORAGE_FAQS_KEY, faqList); }, [faqList]);
  useEffect(() => { safeSetStorage(STORAGE_CONTACT_KEY, contactInfo); }, [contactInfo]);
  useEffect(() => { safeSetStorage(STORAGE_POPUP_CONFIG_KEY, popupConfig); }, [popupConfig]);
  useEffect(() => { safeSetStorage(STORAGE_LEADS_KEY, leads); }, [leads]);
  useEffect(() => { safeSetStorage(STORAGE_BLOGS_KEY, blogs); }, [blogs]);
  useEffect(() => { safeSetStorage(STORAGE_ACHIEVEMENTS_KEY, achievements); }, [achievements]);
  useEffect(() => { safeSetStorage(STORAGE_EXECUTIVE_LEADERS_KEY, executiveLeaders); }, [executiveLeaders]);
  useEffect(() => { safeSetStorage(STORAGE_HIRING_PARTNERS_KEY, hiringPartners); }, [hiringPartners]);
  useEffect(() => { safeSetStorage(STORAGE_PAYMENT_CONFIG_KEY, paymentConfig); }, [paymentConfig]);
  useEffect(() => { safeSetStorage(STORAGE_ABOUT_VIDEOS_KEY, aboutVideos); }, [aboutVideos]);
  useEffect(() => { safeSetStorage(STORAGE_PAYMENTS_KEY, payments); }, [payments]);


  // Firebase Real-time Firestore Subscriptions — Authoritative source of truth
  // Immediate subscription on mount for instant cross-device sync
  useEffect(() => {
    let unsubs = [];

    try {
      unsubs.push(subscribeToCollection('courses', (items) => {
        if (Array.isArray(items) && items.length > 0) {
          const storedLocal = getStored(STORAGE_COURSES_KEY, phase1Courses) || phase1Courses;
          const merged = mergeCollection(storedLocal, items, 'id');
          dispatch({ type: 'SET_KEY', key: 'courses', value: merged });
          safeSetStorage(STORAGE_COURSES_KEY, merged);
        }
      }));
      unsubs.push(subscribeToCollection('heroSlides', (items) => {
        if (Array.isArray(items) && items.length > 0) {
          const storedLocal = getStored(STORAGE_SLIDES_KEY, defaultSlides) || defaultSlides;
          const merged = mergeCollection(storedLocal, items, 'id');
          dispatch({ type: 'SET_KEY', key: 'heroSlides', value: merged });
          safeSetStorage(STORAGE_SLIDES_KEY, merged);
        }
      }));
      unsubs.push(subscribeToCollection('leads', (items) => {
        if (Array.isArray(items) && items.length > 0) {
          dispatch({ type: 'SET_KEY', key: 'leads', value: items });
          safeSetStorage(STORAGE_LEADS_KEY, items);
        }
      }));
      unsubs.push(subscribeToCollection('blogs', (items) => {
        if (Array.isArray(items) && items.length > 0) {
          const storedLocal = getStored(STORAGE_BLOGS_KEY, defaultBlogs) || defaultBlogs;
          const merged = mergeCollection(storedLocal, items, 'id');
          dispatch({ type: 'SET_KEY', key: 'blogs', value: merged });
          safeSetStorage(STORAGE_BLOGS_KEY, merged);
        }
      }));
      unsubs.push(subscribeToCollection('ezerDefinition', (items) => {
        if (Array.isArray(items) && items.length > 0) {
          const mainDef = items.find((i) => i.id === 'main') || items[0];
          if (mainDef) {
            const storedLocal = getStored(STORAGE_PLATFORM_KEY, defaultPlatformDef) || defaultPlatformDef;
            const updated = { ...storedLocal, ...mainDef };
            dispatch({ type: 'SET_KEY', key: 'ezerDefinition', value: updated });
            safeSetStorage(STORAGE_PLATFORM_KEY, updated);
          }
        }
      }));
      unsubs.push(subscribeToCollection('executiveLeaders', (items) => {
        if (Array.isArray(items) && items.length > 0) {
          const storedLocal = getStored(STORAGE_EXECUTIVE_LEADERS_KEY, defaultExecutiveLeaders) || defaultExecutiveLeaders;
          const merged = mergeCollection(storedLocal, items, 'id');
          dispatch({ type: 'SET_KEY', key: 'executiveLeaders', value: merged });
          safeSetStorage(STORAGE_EXECUTIVE_LEADERS_KEY, merged);
        }
      }));
      unsubs.push(subscribeToCollection('popupConfig', (items) => {
        if (Array.isArray(items) && items.length > 0) {
          const mainConfig = items.find((i) => i.id === 'main') || items[0];
          if (mainConfig) {
            dispatch({ type: 'SET_KEY', key: 'popupConfig', value: mainConfig });
            safeSetStorage(STORAGE_POPUP_CONFIG_KEY, mainConfig);
          }
        }
      }));
      unsubs.push(subscribeToCollection('contactInfo', (items) => {
        if (Array.isArray(items) && items.length > 0) {
          const mainContact = items.find((i) => i.id === 'main') || items[0];
          if (mainContact) {
            dispatch({ type: 'SET_KEY', key: 'contactInfo', value: mainContact });
            safeSetStorage(STORAGE_CONTACT_KEY, mainContact);
          }
        }
      }));
      unsubs.push(subscribeToCollection('seniorMentors', (items) => {
        if (Array.isArray(items) && items.length > 0) {
          const storedLocal = getStored(STORAGE_MENTORS_KEY, defaultSeniorMentors) || defaultSeniorMentors;
          const merged = mergeCollection(storedLocal, items, 'id');
          dispatch({ type: 'SET_KEY', key: 'seniorMentors', value: merged });
          safeSetStorage(STORAGE_MENTORS_KEY, merged);
        }
      }));
      unsubs.push(subscribeToCollection('writtenTestimonials', (items) => {
        if (Array.isArray(items) && items.length > 0) {
          const storedLocal = getStored(STORAGE_WRITTEN_TESTIMONIALS_KEY, initialTestimonials) || initialTestimonials;
          const merged = mergeCollection(storedLocal, items, 'id');
          dispatch({ type: 'SET_KEY', key: 'writtenTestimonials', value: merged });
          safeSetStorage(STORAGE_WRITTEN_TESTIMONIALS_KEY, merged);
        }
      }));
      unsubs.push(subscribeToCollection('videoTestimonials', (items) => {
        if (Array.isArray(items) && items.length > 0) {
          const storedLocal = getStored(STORAGE_VIDEOS_KEY, defaultVideoTestimonials) || defaultVideoTestimonials;
          const merged = mergeCollection(storedLocal, items, 'id');
          dispatch({ type: 'SET_KEY', key: 'videoTestimonials', value: merged });
          safeSetStorage(STORAGE_VIDEOS_KEY, merged);
        }
      }));
      unsubs.push(subscribeToCollection('faqList', (items) => {
        if (Array.isArray(items) && items.length > 0) {
          const storedLocal = getStored(STORAGE_FAQS_KEY, generalFaqs) || generalFaqs;
          const merged = mergeCollection(storedLocal, items, 'id');
          dispatch({ type: 'SET_KEY', key: 'faqList', value: merged });
          safeSetStorage(STORAGE_FAQS_KEY, merged);
        }
      }));
      unsubs.push(subscribeToCollection('hiringPartners', (items) => {
        if (Array.isArray(items) && items.length > 0) {
          const storedLocal = getStored(STORAGE_HIRING_PARTNERS_KEY, defaultHiringPartners) || defaultHiringPartners;
          const merged = mergeCollection(storedLocal, items, 'id');
          dispatch({ type: 'SET_KEY', key: 'hiringPartners', value: merged });
          safeSetStorage(STORAGE_HIRING_PARTNERS_KEY, merged);
        }
      }));
      unsubs.push(subscribeToCollection('aboutVideos', (items) => {
        if (Array.isArray(items) && items.length > 0) {
          const storedLocal = getStored(STORAGE_ABOUT_VIDEOS_KEY, defaultAboutVideos) || defaultAboutVideos;
          const merged = mergeCollection(storedLocal, items, 'id');
          dispatch({ type: 'SET_KEY', key: 'aboutVideos', value: merged });
          safeSetStorage(STORAGE_ABOUT_VIDEOS_KEY, merged);
        }
      }));
      unsubs.push(subscribeToCollection('payments', (items) => {
        if (Array.isArray(items) && items.length > 0) {
          const storedLocal = getStored(STORAGE_PAYMENTS_KEY, defaultPayments) || defaultPayments;
          const merged = mergeCollection(storedLocal, items, 'id');
          dispatch({ type: 'SET_KEY', key: 'payments', value: merged });
          safeSetStorage(STORAGE_PAYMENTS_KEY, merged);
        }
      }));
    } catch (err) {
      console.error('[SiteContext] Error initializing Firestore subscriptions:', err);
    }

    return () => {
      unsubs.forEach((unsub) => typeof unsub === 'function' && unsub());
    };
  }, []);

  // Action Dispatchers with Array Integrity & Full-Stack Realtime Sync
  const updateExecutiveLeaders = useCallback((newExecs) => {
    dispatch({ type: 'SET_KEY', key: 'executiveLeaders', value: newExecs });
    saveCollectionArray('executiveLeaders', newExecs);
    triggerStateToast('SAVED');
  }, []);

  const updateExecutiveLeader = useCallback((id, updatedLeader) => {
    const baseList = (executiveLeaders && executiveLeaders.length >= 3) ? executiveLeaders : defaultExecutiveLeaders;
    const updated = baseList.map((l) => {
      if (l.id === id || l.roleTag === id) {
        const pos = updatedLeader.imagePosition || updatedLeader.position || l.imagePosition || l.position || 'center center';
        const fit = updatedLeader.imageFit || updatedLeader.fit || l.imageFit || l.fit || 'cover';
        const zoom = updatedLeader.imageZoom || updatedLeader.zoom || l.imageZoom || l.zoom || 1;
        return {
          ...l,
          ...updatedLeader,
          imagePosition: pos,
          position: pos,
          imageFit: fit,
          fit: fit,
          imageZoom: zoom,
          zoom: zoom
        };
      }
      return l;
    });
    dispatch({ type: 'SET_KEY', key: 'executiveLeaders', value: updated });
    saveCollectionArray('executiveLeaders', updated);
    triggerStateToast('SAVED');
  }, [executiveLeaders]);

  const updateBlogs = useCallback((newBlogs) => {
    dispatch({ type: 'SET_KEY', key: 'blogs', value: newBlogs });
    saveCollectionArray('blogs', newBlogs);
    triggerStateToast('SAVED');
  }, []);

  const addBlog = useCallback((blogData) => {
    const newBlog = { id: `blog-${Date.now()}`, ...blogData };
    const updated = [newBlog, ...(blogs || [])];
    dispatch({ type: 'SET_KEY', key: 'blogs', value: updated });
    saveDocument('blogs', newBlog.id, newBlog);
    triggerStateToast('SAVED');
  }, [blogs]);

  const updateBlog = useCallback((id, updatedData) => {
    const updated = (blogs || []).map((b) => (b.id === id || b.slug === id ? { ...b, ...updatedData } : b));
    dispatch({ type: 'SET_KEY', key: 'blogs', value: updated });
    saveCollectionArray('blogs', updated);
    triggerStateToast('SAVED');
  }, [blogs]);

  const deleteBlog = useCallback((blogId) => {
    const updated = (blogs || []).filter(b => b.id !== blogId);
    dispatch({ type: 'SET_KEY', key: 'blogs', value: updated });
    removeDocument('blogs', String(blogId));
    triggerStateToast('SAVED');
  }, [blogs]);

  const updateAchievements = useCallback((newAch) => {
    dispatch({ type: 'SET_KEY', key: 'achievements', value: newAch });
    saveCollectionArray('achievements', newAch);
    triggerStateToast('SAVED');
  }, []);

  const addAchievement = useCallback((achData) => {
    const newAch = { id: `ach-${Date.now()}`, ...achData };
    const updated = [newAch, ...(achievements || [])];
    dispatch({ type: 'SET_KEY', key: 'achievements', value: updated });
    saveDocument('achievements', newAch.id, newAch);
    triggerStateToast('SAVED');
  }, [achievements]);

  const updateAchievement = useCallback((id, updatedData) => {
    const updated = (achievements || []).map((a) => (a.id === id ? { ...a, ...updatedData } : a));
    dispatch({ type: 'SET_KEY', key: 'achievements', value: updated });
    saveCollectionArray('achievements', updated);
    triggerStateToast('SAVED');
  }, [achievements]);

  const deleteAchievement = useCallback((achId) => {
    const updated = (achievements || []).filter(a => a.id !== achId);
    dispatch({ type: 'SET_KEY', key: 'achievements', value: updated });
    removeDocument('achievements', String(achId));
    triggerStateToast('SAVED');
  }, [achievements]);

  const updateHeroSlides = useCallback((slides) => {
    dispatch({ type: 'SET_KEY', key: 'heroSlides', value: slides });
    saveCollectionArray('heroSlides', slides);
    triggerStateToast('SAVED');
  }, []);

  const addHeroSlide = useCallback((newSlide) => {
    const slide = { id: `hero-${Date.now()}`, ...newSlide };
    const updated = [...(heroSlides || []), slide];
    dispatch({ type: 'SET_KEY', key: 'heroSlides', value: updated });
    saveDocument('heroSlides', slide.id, slide);
    triggerStateToast('SAVED');
  }, [heroSlides]);

  const updateHeroSlide = useCallback((id, updatedSlide) => {
    const updated = (heroSlides || []).map((slide) => {
      if (slide.id === id || slide.badge === id || slide.headline === id) {
        const pos = updatedSlide.position || updatedSlide.imagePosition || slide.position || slide.imagePosition || 'center center';
        const fit = updatedSlide.fit || updatedSlide.imageFit || slide.fit || slide.imageFit || 'cover';
        const zoom = updatedSlide.zoom || updatedSlide.imageZoom || slide.zoom || slide.imageZoom || 1;
        return {
          ...slide,
          ...updatedSlide,
          position: pos,
          imagePosition: pos,
          fit: fit,
          imageFit: fit,
          zoom: zoom,
          imageZoom: zoom
        };
      }
      return slide;
    });
    dispatch({ type: 'SET_KEY', key: 'heroSlides', value: updated });
    saveCollectionArray('heroSlides', updated);
    triggerStateToast('SAVED');
  }, [heroSlides]);

  const deleteHeroSlide = useCallback((id) => {
    const updated = (heroSlides || []).filter((slide) => slide.id !== id && slide.badge !== id);
    dispatch({ type: 'SET_KEY', key: 'heroSlides', value: updated });
    removeDocument('heroSlides', String(id));
    triggerStateToast('SAVED');
  }, [heroSlides]);

  const updateCourses = useCallback((newCourses) => {
    dispatch({ type: 'SET_KEY', key: 'courses', value: newCourses });
    saveCollectionArray('courses', newCourses);
    triggerStateToast('SAVED');
  }, []);

  const addCourse = useCallback((newCourse) => {
    const courseId = newCourse.id || newCourse.slug || `course-${Date.now()}`;
    const courseObj = { ...newCourse, id: courseId };
    const currentList = Array.isArray(courses) ? courses : (getStored(STORAGE_COURSES_KEY, phase1Courses) || phase1Courses);
    const updated = [courseObj, ...currentList.filter((c) => c.id !== courseId && c.slug !== courseObj.slug)];
    dispatch({ type: 'SET_KEY', key: 'courses', value: updated });
    safeSetStorage(STORAGE_COURSES_KEY, updated);
    saveDocument('courses', String(courseId), courseObj);
    triggerStateToast('SAVED');
  }, [courses]);

  const updateCourse = useCallback((id, updatedCourse) => {
    const currentList = Array.isArray(courses) ? courses : (getStored(STORAGE_COURSES_KEY, phase1Courses) || phase1Courses);
    const updated = currentList.map((c) => (c.id === id || c.slug === id ? { ...c, ...updatedCourse } : c));
    dispatch({ type: 'SET_KEY', key: 'courses', value: updated });
    safeSetStorage(STORAGE_COURSES_KEY, updated);
    saveCollectionArray('courses', updated);
    triggerStateToast('SAVED');
  }, [courses]);

  const deleteCourse = useCallback((id) => {
    const currentList = Array.isArray(courses) ? courses : (getStored(STORAGE_COURSES_KEY, phase1Courses) || phase1Courses);
    const updated = currentList.filter((c) => c.id !== id && c.slug !== id);
    dispatch({ type: 'SET_KEY', key: 'courses', value: updated });
    safeSetStorage(STORAGE_COURSES_KEY, updated);
    removeDocument('courses', String(id));
    triggerStateToast('SAVED');
  }, [courses]);

  const updateEzerDefinition = useCallback((def) => {
    const payload = { id: 'main', ...def };
    dispatch({ type: 'SET_KEY', key: 'ezerDefinition', value: payload });
    saveDocument('ezerDefinition', 'main', payload);
    triggerStateToast('SAVED');
  }, []);

  const updateSupportCards = useCallback((cards) => {
    dispatch({ type: 'SET_KEY', key: 'supportCards', value: cards });
    saveCollectionArray('supportCards', cards);
    triggerStateToast('SAVED');
  }, []);

  const addSupportCard = useCallback((newCard) => {
    const card = { id: `support-${Date.now()}`, ...newCard };
    const updated = [...(supportCards || []), card];
    dispatch({ type: 'SET_KEY', key: 'supportCards', value: updated });
    saveDocument('supportCards', card.id, card);
    triggerStateToast('SAVED');
  }, [supportCards]);

  const updateSupportCard = useCallback((id, updatedCard) => {
    const updated = (supportCards || []).map((card) =>
      card.id === id || card.title === id ? { ...card, ...updatedCard } : card
    );
    dispatch({ type: 'SET_KEY', key: 'supportCards', value: updated });
    saveCollectionArray('supportCards', updated);
    triggerStateToast('SAVED');
  }, [supportCards]);

  const deleteSupportCard = useCallback((id) => {
    const updated = (supportCards || []).filter((card) => card.id !== id && card.title !== id);
    dispatch({ type: 'SET_KEY', key: 'supportCards', value: updated });
    removeDocument('supportCards', String(id));
    triggerStateToast('SAVED');
  }, [supportCards]);

  const updateTransformedLives = useCallback((lives) => {
    dispatch({ type: 'SET_KEY', key: 'transformedLives', value: lives });
    saveCollectionArray('transformedLives', lives);
    triggerStateToast('SAVED');
  }, []);

  const addTransformedLife = useCallback((newLife) => {
    const life = { id: `life-${Date.now()}`, ...newLife };
    const updated = [...(transformedLives || []), life];
    dispatch({ type: 'SET_KEY', key: 'transformedLives', value: updated });
    saveDocument('transformedLives', life.id, life);
    triggerStateToast('SAVED');
  }, [transformedLives]);

  const updateTransformedLife = useCallback((id, updatedLife) => {
    const updated = (transformedLives || []).map((life) =>
      life.id === id ? { ...life, ...updatedLife } : life
    );
    dispatch({ type: 'SET_KEY', key: 'transformedLives', value: updated });
    saveCollectionArray('transformedLives', updated);
    triggerStateToast('SAVED');
  }, [transformedLives]);

  const deleteTransformedLife = useCallback((id) => {
    const updated = (transformedLives || []).filter((life) => life.id !== id);
    dispatch({ type: 'SET_KEY', key: 'transformedLives', value: updated });
    removeDocument('transformedLives', String(id));
    triggerStateToast('SAVED');
  }, [transformedLives]);

  const updateOutcomesHeader = useCallback((header) => {
    const payload = { id: 'main', ...header };
    dispatch({ type: 'SET_KEY', key: 'outcomesHeader', value: payload });
    saveDocument('outcomesHeader', 'main', payload);
    triggerStateToast('SAVED');
  }, []);

  const updateSeniorMentors = useCallback((mentors) => {
    dispatch({ type: 'SET_KEY', key: 'seniorMentors', value: mentors });
    saveCollectionArray('seniorMentors', mentors);
    triggerStateToast('SAVED');
  }, []);

  const addSeniorMentor = useCallback((newMentor) => {
    const mentor = { id: `mentor-${Date.now()}`, ...newMentor };
    const updated = [...(seniorMentors || []), mentor];
    dispatch({ type: 'SET_KEY', key: 'seniorMentors', value: updated });
    saveDocument('seniorMentors', mentor.id, mentor);
    triggerStateToast('SAVED');
  }, [seniorMentors]);

  const updateSeniorMentor = useCallback((id, updatedMentor) => {
    const updated = (seniorMentors || []).map((mentor) =>
      mentor.id === id ? { ...mentor, ...updatedMentor } : mentor
    );
    dispatch({ type: 'SET_KEY', key: 'seniorMentors', value: updated });
    saveCollectionArray('seniorMentors', updated);
    triggerStateToast('SAVED');
  }, [seniorMentors]);

  const deleteSeniorMentor = useCallback((id) => {
    const updated = (seniorMentors || []).filter((mentor) => mentor.id !== id);
    dispatch({ type: 'SET_KEY', key: 'seniorMentors', value: updated });
    removeDocument('seniorMentors', String(id));
    triggerStateToast('SAVED');
  }, [seniorMentors]);

  const updateMentorsHeader = useCallback((header) => {
    const payload = { id: 'main', ...header };
    dispatch({ type: 'SET_KEY', key: 'mentorsHeader', value: payload });
    saveDocument('mentorsHeader', 'main', payload);
    triggerStateToast('SAVED');
  }, []);

  const updateVideoTestimonials = useCallback((videos) => {
    dispatch({ type: 'SET_KEY', key: 'videoTestimonials', value: videos });
    saveCollectionArray('videoTestimonials', videos);
    triggerStateToast('SAVED');
  }, []);

  const addVideoTestimonial = useCallback((newVideo) => {
    const video = { id: `video-${Date.now()}`, ...newVideo };
    const updated = [...(videoTestimonials || []), video];
    dispatch({ type: 'SET_KEY', key: 'videoTestimonials', value: updated });
    saveDocument('videoTestimonials', video.id, video);
    triggerStateToast('SAVED');
  }, [videoTestimonials]);

  const updateVideoTestimonial = useCallback((id, updatedVideo) => {
    const updated = (videoTestimonials || []).map((video) =>
      video.id === id ? { ...video, ...updatedVideo } : video
    );
    dispatch({ type: 'SET_KEY', key: 'videoTestimonials', value: updated });
    saveCollectionArray('videoTestimonials', updated);
    triggerStateToast('SAVED');
  }, [videoTestimonials]);

  const deleteVideoTestimonial = useCallback((id) => {
    const updated = (videoTestimonials || []).filter((video) => video.id !== id);
    dispatch({ type: 'SET_KEY', key: 'videoTestimonials', value: updated });
    removeDocument('videoTestimonials', String(id));
    triggerStateToast('SAVED');
  }, [videoTestimonials]);

  const updateTestimonialsHero = useCallback((hero) => {
    const payload = { id: 'main', ...hero };
    dispatch({ type: 'SET_KEY', key: 'testimonialsHero', value: payload });
    saveDocument('testimonialsHero', 'main', payload);
    triggerStateToast('SAVED');
  }, []);

  const updateWrittenTestimonials = useCallback((testimonials) => {
    dispatch({ type: 'SET_KEY', key: 'writtenTestimonials', value: testimonials });
    saveCollectionArray('writtenTestimonials', testimonials);
    triggerStateToast('SAVED');
  }, []);

  const addWrittenTestimonial = useCallback((newTestimonial) => {
    const testimonial = { id: `testi-${Date.now()}`, ...newTestimonial };
    const updated = [...(writtenTestimonials || []), testimonial];
    dispatch({ type: 'SET_KEY', key: 'writtenTestimonials', value: updated });
    saveDocument('writtenTestimonials', testimonial.id, testimonial);
    triggerStateToast('SAVED');
  }, [writtenTestimonials]);

  const updateWrittenTestimonial = useCallback((id, updatedTestimonial) => {
    const updated = (writtenTestimonials || []).map((t) =>
      t.id === id || t.author === id ? { ...t, ...updatedTestimonial } : t
    );
    dispatch({ type: 'SET_KEY', key: 'writtenTestimonials', value: updated });
    saveCollectionArray('writtenTestimonials', updated);
    triggerStateToast('SAVED');
  }, [writtenTestimonials]);

  const deleteWrittenTestimonial = useCallback((id) => {
    const updated = (writtenTestimonials || []).filter((t) => t.id !== id && t.author !== id);
    dispatch({ type: 'SET_KEY', key: 'writtenTestimonials', value: updated });
    removeDocument('writtenTestimonials', String(id));
    triggerStateToast('SAVED');
  }, [writtenTestimonials]);

  const updateFaqs = useCallback((faqs) => {
    dispatch({ type: 'SET_KEY', key: 'faqList', value: faqs });
    saveCollectionArray('faqList', faqs);
    triggerStateToast('SAVED');
  }, []);

  const updateContactInfo = useCallback((info) => {
    const payload = { id: 'main', ...info };
    dispatch({ type: 'SET_KEY', key: 'contactInfo', value: payload });
    saveDocument('contactInfo', 'main', payload);
    triggerStateToast('SAVED');
  }, []);

  const updatePopupConfig = useCallback((config) => {
    const payload = { id: 'main', ...config };
    dispatch({ type: 'SET_KEY', key: 'popupConfig', value: payload });
    saveDocument('popupConfig', 'main', payload);
    triggerStateToast('SAVED');
  }, []);

  const updatePaymentConfig = useCallback((config) => {
    const payload = { id: 'main', ...config };
    dispatch({ type: 'SET_KEY', key: 'paymentConfig', value: payload });
    saveDocument('paymentConfig', 'main', payload);
    triggerStateToast('SAVED');
  }, []);

  const addLead = useCallback((leadData) => {
    const newLead = { id: String(Date.now()), status: 'New', ...leadData, date: new Date().toLocaleString() };
    const updated = [newLead, ...(leads || [])];
    dispatch({ type: 'SET_KEY', key: 'leads', value: updated });
    saveDocument('leads', newLead.id, newLead);
    triggerStateToast('SAVED');
  }, [leads]);

  const updateLeadStatus = useCallback((id, status) => {
    const updated = (leads || []).map((lead) => (lead.id === id ? { ...lead, status } : lead));
    dispatch({ type: 'SET_KEY', key: 'leads', value: updated });
    saveCollectionArray('leads', updated);
    triggerStateToast('SAVED');
  }, [leads]);

  const addLeadComment = useCallback((id, text, author) => {
    const newComment = { id: `comment-${Date.now()}`, text, author: author || 'Admin Counselor', date: new Date().toLocaleString() };
    const updated = (leads || []).map((lead) => {
      if (lead.id === id) {
        return { ...lead, comments: [...(lead.comments || []), newComment] };
      }
      return lead;
    });
    dispatch({ type: 'SET_KEY', key: 'leads', value: updated });
    saveCollectionArray('leads', updated);
    triggerStateToast('SAVED');
  }, [leads]);

  const updateLeadDetails = useCallback((id, { status, commentText, author }) => {
    const updated = (leads || []).map((lead) => {
      if (lead.id === id) {
        const nextComments = [...(lead.comments || [])];
        if (status && status !== lead.status) {
          nextComments.push({
            id: `comment-${Date.now()}-sys`,
            text: `Status updated to "${status}".`,
            author: 'System',
            date: new Date().toLocaleString()
          });
        }
        if (commentText && commentText.trim()) {
          nextComments.push({
            id: `comment-${Date.now()}-user`,
            text: commentText.trim(),
            author: author || 'Admin Counselor',
            date: new Date().toLocaleString()
          });
        }
        return {
          ...lead,
          status: status || lead.status,
          comments: nextComments
        };
      }
      return lead;
    });
    dispatch({ type: 'SET_KEY', key: 'leads', value: updated });
    saveCollectionArray('leads', updated);
    triggerStateToast('SAVED');
  }, [leads]);


  const deleteLead = useCallback((leadId) => {
    const updated = (leads || []).filter(l => l.id !== leadId);
    dispatch({ type: 'SET_KEY', key: 'leads', value: updated });
    removeDocument('leads', String(leadId));
    triggerStateToast('SAVED');
  }, [leads]);

  const addHiringPartner = useCallback((partnerData) => {
    const newPartner = { id: `partner-${Date.now()}`, ...partnerData };
    const updated = [...(hiringPartners || []), newPartner];
    dispatch({ type: 'SET_KEY', key: 'hiringPartners', value: updated });
    saveDocument('hiringPartners', newPartner.id, newPartner);
    triggerStateToast('SAVED');
  }, [hiringPartners]);

  const updateHiringPartner = useCallback((id, updatedData) => {
    const updated = (hiringPartners || []).map((p) => (p.id === id ? { ...p, ...updatedData } : p));
    dispatch({ type: 'SET_KEY', key: 'hiringPartners', value: updated });
    saveCollectionArray('hiringPartners', updated);
    triggerStateToast('SAVED');
  }, [hiringPartners]);

  const deleteHiringPartner = useCallback((partnerId) => {
    const updated = (hiringPartners || []).filter((p) => p.id !== partnerId);
    dispatch({ type: 'SET_KEY', key: 'hiringPartners', value: updated });
    removeDocument('hiringPartners', String(partnerId));
    triggerStateToast('SAVED');
  }, [hiringPartners]);

  const updateAboutVideos = useCallback((newVideosData) => {
    const updated = Array.isArray(newVideosData) ? newVideosData : (aboutVideos || defaultAboutVideos);
    dispatch({ type: 'SET_KEY', key: 'aboutVideos', value: updated });
    saveCollectionArray('aboutVideos', updated);
    triggerStateToast('SAVED');
  }, [aboutVideos]);

  const addPayment = useCallback((paymentData) => {
    const newPay = {
      id: `pay-${Date.now()}`,
      status: 'SUCCESSFUL',
      paidTo: 'EZER Learning Solutions Pvt Ltd',
      paymentDate: new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' }),
      ...paymentData
    };
    const updated = [newPay, ...(payments || [])];
    dispatch({ type: 'SET_KEY', key: 'payments', value: updated });
    saveDocument('payments', newPay.id, newPay);
    triggerStateToast('SAVED');
  }, [payments]);

  const deletePayment = useCallback((paymentId) => {
    const updated = (payments || []).filter((p) => p.id !== paymentId);
    dispatch({ type: 'SET_KEY', key: 'payments', value: updated });
    removeDocument('payments', String(paymentId));
    triggerStateToast('SAVED');
  }, [payments]);

  const resetAllToDefaults = useCallback(() => {
    localStorage.clear();
    dispatch({ type: 'RESET_ALL' });
    triggerStateToast('SAVED');
  }, []);

  const value = useMemo(() => ({
    heroSlides, updateHeroSlides, addHeroSlide, updateHeroSlide, deleteHeroSlide,
    courses, updateCourses, addCourse, updateCourse, deleteCourse,
    ezerDefinition, updateEzerDefinition,
    supportCards, updateSupportCards, addSupportCard, updateSupportCard, deleteSupportCard,
    transformedLives, updateTransformedLives, addTransformedLife, updateTransformedLife, deleteTransformedLife,
    outcomesHeader, updateOutcomesHeader,
    seniorMentors, updateSeniorMentors, addSeniorMentor, updateSeniorMentor, deleteSeniorMentor,
    mentorsHeader, updateMentorsHeader,
    videoTestimonials, updateVideoTestimonials, addVideoTestimonial, updateVideoTestimonial, deleteVideoTestimonial,
    testimonialsHero, updateTestimonialsHero,
    writtenTestimonials, updateWrittenTestimonials, addWrittenTestimonial, updateWrittenTestimonial, deleteWrittenTestimonial,
    faqList, updateFaqs,
    contactInfo, updateContactInfo,
    popupConfig, updatePopupConfig,
    leads, addLead, updateLeadStatus, addLeadComment, updateLeadDetails, deleteLead,
    blogs, updateBlogs, addBlog, updateBlog, deleteBlog,
    achievements, updateAchievements, addAchievement, updateAchievement, deleteAchievement,
    executiveLeaders, updateExecutiveLeaders, updateExecutiveLeader,
    hiringPartners, addHiringPartner, updateHiringPartner, deleteHiringPartner,
    paymentConfig, updatePaymentConfig,
    aboutVideos, updateAboutVideos,
    payments, addPayment, deletePayment,
    resetAllToDefaults
  }), [
    heroSlides, updateHeroSlides, addHeroSlide, updateHeroSlide, deleteHeroSlide,
    courses, updateCourses, addCourse, updateCourse, deleteCourse,
    ezerDefinition, updateEzerDefinition,
    supportCards, updateSupportCards, addSupportCard, updateSupportCard, deleteSupportCard,
    transformedLives, updateTransformedLives, addTransformedLife, updateTransformedLife, deleteTransformedLife,
    outcomesHeader, updateOutcomesHeader,
    seniorMentors, updateSeniorMentors, addSeniorMentor, updateSeniorMentor, deleteSeniorMentor,
    mentorsHeader, updateMentorsHeader,
    videoTestimonials, updateVideoTestimonials, addVideoTestimonial, updateVideoTestimonial, deleteVideoTestimonial,
    testimonialsHero, updateTestimonialsHero,
    writtenTestimonials, updateWrittenTestimonials, addWrittenTestimonial, updateWrittenTestimonial, deleteWrittenTestimonial,
    faqList, updateFaqs,
    contactInfo, updateContactInfo,
    popupConfig, updatePopupConfig,
    leads, addLead, updateLeadStatus, addLeadComment, updateLeadDetails, deleteLead,
    blogs, updateBlogs, addBlog, updateBlog, deleteBlog,
    achievements, updateAchievements, addAchievement, updateAchievement, deleteAchievement,
    executiveLeaders, updateExecutiveLeaders, updateExecutiveLeader,
    hiringPartners, addHiringPartner, updateHiringPartner, deleteHiringPartner,
    paymentConfig, updatePaymentConfig,
    aboutVideos, updateAboutVideos,
    payments, addPayment, deletePayment,
    resetAllToDefaults
  ]);


  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSiteData() {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error('useSiteData must be used within a SiteProvider');
  }
  return context;
}

export default SiteProvider;
