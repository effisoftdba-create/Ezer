import React, { createContext, useContext, useReducer, useEffect, useMemo, useCallback } from 'react';
import { triggerStateToast } from '../../utils/toastService';
import { batchFetchRelatedData } from '../../utils/dbQueries';
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
  getInitialState,
  siteReducer,
  safeSetStorage
} from './siteDefaults';
import { subscribeToCollection, saveCollectionArray, saveDocument, removeDocument } from '../../services/firebaseService';

const SiteContext = createContext();

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
    executiveLeaders
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

  // Firebase Real-time Firestore & Realtime DB Subscriptions across ALL collections
  useEffect(() => {
    const unsubCourses = subscribeToCollection('courses', (items) => {
      if (items && items.length > 0) dispatch({ type: 'SET_KEY', key: 'courses', value: items });
    });
    const unsubHero = subscribeToCollection('heroSlides', (items) => {
      if (items && items.length > 0) dispatch({ type: 'SET_KEY', key: 'heroSlides', value: items });
    });
    const unsubLeads = subscribeToCollection('leads', (items) => {
      if (items && items.length > 0) dispatch({ type: 'SET_KEY', key: 'leads', value: items });
    });
    const unsubBlogs = subscribeToCollection('blogs', (items) => {
      if (items && items.length > 0) dispatch({ type: 'SET_KEY', key: 'blogs', value: items });
    });
    const unsubDef = subscribeToCollection('ezerDefinition', (items) => {
      if (items && items.length > 0) {
        const mainDef = items.find((i) => i.id === 'main') || items[0];
        if (mainDef) dispatch({ type: 'SET_KEY', key: 'ezerDefinition', value: mainDef });
      }
    });
    const unsubExecs = subscribeToCollection('executiveLeaders', (items) => {
      if (items && items.length > 0) dispatch({ type: 'SET_KEY', key: 'executiveLeaders', value: items });
    });
    const unsubPopup = subscribeToCollection('popupConfig', (items) => {
      if (items && items.length > 0) {
        const mainConfig = items.find((i) => i.id === 'main') || items[0];
        if (mainConfig) dispatch({ type: 'SET_KEY', key: 'popupConfig', value: mainConfig });
      }
    });
    const unsubContact = subscribeToCollection('contactInfo', (items) => {
      if (items && items.length > 0) {
        const mainContact = items.find((i) => i.id === 'main') || items[0];
        if (mainContact) dispatch({ type: 'SET_KEY', key: 'contactInfo', value: mainContact });
      }
    });
    const unsubMentors = subscribeToCollection('seniorMentors', (items) => {
      if (items && items.length > 0) dispatch({ type: 'SET_KEY', key: 'seniorMentors', value: items });
    });
    const unsubTesti = subscribeToCollection('writtenTestimonials', (items) => {
      if (items && items.length > 0) dispatch({ type: 'SET_KEY', key: 'writtenTestimonials', value: items });
    });
    const unsubVideo = subscribeToCollection('videoTestimonials', (items) => {
      if (items && items.length > 0) dispatch({ type: 'SET_KEY', key: 'videoTestimonials', value: items });
    });
    const unsubFaq = subscribeToCollection('faqList', (items) => {
      if (items && items.length > 0) dispatch({ type: 'SET_KEY', key: 'faqList', value: items });
    });

    return () => {
      unsubCourses();
      unsubHero();
      unsubLeads();
      unsubBlogs();
      unsubDef();
      unsubExecs();
      unsubPopup();
      unsubContact();
      unsubMentors();
      unsubTesti();
      unsubVideo();
      unsubFaq();
    };
  }, []);

  // Action Dispatchers with Full-Stack Realtime Sync
  const updateExecutiveLeaders = useCallback((newExecs) => {
    dispatch({ type: 'SET_KEY', key: 'executiveLeaders', value: newExecs });
    saveCollectionArray('executiveLeaders', newExecs);
    triggerStateToast('SAVED');
  }, []);

  const updateExecutiveLeader = useCallback((id, updatedLeader) => {
    const updated = (executiveLeaders || []).map((l) => (l.id === id || l.roleTag === id ? { ...l, ...updatedLeader } : l));
    dispatch({ type: 'SET_KEY', key: 'executiveLeaders', value: updated });
    const target = updated.find((l) => l.id === id || l.roleTag === id);
    if (target) saveDocument('executiveLeaders', String(target.id || target.roleTag), target);
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
    const target = updated.find((b) => b.id === id || b.slug === id);
    if (target) saveDocument('blogs', String(target.id || target.slug), target);
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
    const target = updated.find((a) => a.id === id);
    if (target) saveDocument('achievements', String(target.id), target);
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
    const updated = (heroSlides || []).map((slide) =>
      slide.id === id || slide.badge === id ? { ...slide, ...updatedSlide } : slide
    );
    dispatch({ type: 'SET_KEY', key: 'heroSlides', value: updated });
    const target = updated.find((s) => s.id === id || s.badge === id);
    if (target) saveDocument('heroSlides', String(target.id || target.badge), target);
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
    const updated = [newCourse, ...(courses || [])];
    dispatch({ type: 'SET_KEY', key: 'courses', value: updated });
    saveDocument('courses', String(newCourse.id || newCourse.slug), newCourse);
    triggerStateToast('SAVED');
  }, [courses]);

  const updateCourse = useCallback((id, updatedCourse) => {
    const updated = (courses || []).map((c) => (c.id === id || c.slug === id ? { ...c, ...updatedCourse } : c));
    dispatch({ type: 'SET_KEY', key: 'courses', value: updated });
    const target = updated.find((c) => c.id === id || c.slug === id);
    if (target) saveDocument('courses', String(target.id || target.slug), target);
    triggerStateToast('SAVED');
  }, [courses]);

  const deleteCourse = useCallback((id) => {
    const updated = (courses || []).filter((c) => c.id !== id && c.slug !== id);
    dispatch({ type: 'SET_KEY', key: 'courses', value: updated });
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
    const target = updated.find((c) => c.id === id || c.title === id);
    if (target) saveDocument('supportCards', String(target.id || target.title), target);
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
    const target = updated.find((l) => l.id === id);
    if (target) saveDocument('transformedLives', String(target.id), target);
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
    const target = updated.find((m) => m.id === id);
    if (target) saveDocument('seniorMentors', String(target.id), target);
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
    const target = updated.find((v) => v.id === id);
    if (target) saveDocument('videoTestimonials', String(target.id), target);
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
    const target = updated.find((t) => t.id === id || t.author === id);
    if (target) saveDocument('writtenTestimonials', String(target.id || target.author), target);
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

  const addLead = useCallback((leadData) => {
    const newLead = { id: String(Date.now()), ...leadData, date: new Date().toLocaleString() };
    const updated = [newLead, ...(leads || [])];
    dispatch({ type: 'SET_KEY', key: 'leads', value: updated });
    saveDocument('leads', newLead.id, newLead);
    triggerStateToast('SAVED');
  }, [leads]);

  const updateLeadStatus = useCallback((id, status) => {
    const updated = (leads || []).map((lead) => (lead.id === id ? { ...lead, status } : lead));
    dispatch({ type: 'SET_KEY', key: 'leads', value: updated });
    const target = updated.find((l) => l.id === id);
    if (target) saveDocument('leads', String(target.id), target);
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
    const target = updated.find((l) => l.id === id);
    if (target) saveDocument('leads', String(target.id), target);
    triggerStateToast('SAVED');
  }, [leads]);

  const deleteLead = useCallback((leadId) => {
    const updated = (leads || []).filter(l => l.id !== leadId);
    dispatch({ type: 'SET_KEY', key: 'leads', value: updated });
    removeDocument('leads', String(leadId));
    triggerStateToast('SAVED');
  }, [leads]);

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
    leads, addLead, updateLeadStatus, addLeadComment, deleteLead,
    blogs, updateBlogs, addBlog, updateBlog, deleteBlog,
    achievements, updateAchievements, addAchievement, updateAchievement, deleteAchievement,
    executiveLeaders, updateExecutiveLeaders, updateExecutiveLeader,
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
    leads, addLead, updateLeadStatus, addLeadComment, deleteLead,
    blogs, updateBlogs, addBlog, updateBlog, deleteBlog,
    achievements, updateAchievements, addAchievement, updateAchievement, deleteAchievement,
    executiveLeaders, updateExecutiveLeaders, updateExecutiveLeader,
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
