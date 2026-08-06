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
  getInitialState,
  siteReducer,
  safeSetStorage
} from './siteDefaults';

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
    achievements
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
            if (decoded.courses) safeSetStorage(STORAGE_COURSES_KEY, decoded.courses);
            if (decoded.popupConfig) safeSetStorage(STORAGE_POPUP_CONFIG_KEY, decoded.popupConfig);
            if (decoded.heroSlides) safeSetStorage(STORAGE_SLIDES_KEY, decoded.heroSlides);
            alert('✅ Mobile Sync Successful! This mobile device has been updated with your admin settings.');
            window.location.href = window.location.origin + window.location.pathname + '#/';
            window.location.reload();
          }
        }
      }
    } catch (e) {
      console.warn('[SiteContext] Mobile sync parsing failed:', e);
    }
  }, []);

  // LocalStorage Sync Effects
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

  // Action Dispatchers
  const updateBlogs = useCallback((newBlogs) => {
    dispatch({ type: 'SET_KEY', key: 'blogs', value: newBlogs });
    triggerStateToast('SAVED');
  }, []);

  const addBlog = useCallback((blogData) => {
    const newBlog = { id: `blog-${Date.now()}`, ...blogData };
    dispatch({ type: 'SET_KEY', key: 'blogs', value: [newBlog, ...(blogs || [])] });
    triggerStateToast('SAVED');
  }, [blogs]);

  const deleteBlog = useCallback((blogId) => {
    dispatch({ type: 'SET_KEY', key: 'blogs', value: (blogs || []).filter(b => b.id !== blogId) });
    triggerStateToast('SAVED');
  }, [blogs]);

  const updateAchievements = useCallback((newAch) => {
    dispatch({ type: 'SET_KEY', key: 'achievements', value: newAch });
    triggerStateToast('SAVED');
  }, []);

  const addAchievement = useCallback((achData) => {
    const newAch = { id: `ach-${Date.now()}`, ...achData };
    dispatch({ type: 'SET_KEY', key: 'achievements', value: [newAch, ...(achievements || [])] });
    triggerStateToast('SAVED');
  }, [achievements]);

  const deleteAchievement = useCallback((achId) => {
    dispatch({ type: 'SET_KEY', key: 'achievements', value: (achievements || []).filter(a => a.id !== achId) });
    triggerStateToast('SAVED');
  }, [achievements]);

  const updateHeroSlides = useCallback((slides) => {
    dispatch({ type: 'SET_KEY', key: 'heroSlides', value: slides });
    triggerStateToast('SAVED');
  }, []);

  const updateCourses = useCallback((newCourses) => {
    dispatch({ type: 'SET_KEY', key: 'courses', value: newCourses });
    triggerStateToast('SAVED');
  }, []);

  const addCourse = useCallback((newCourse) => {
    dispatch({ type: 'SET_KEY', key: 'courses', value: [newCourse, ...(courses || [])] });
    triggerStateToast('SAVED');
  }, [courses]);

  const updateCourse = useCallback((id, updatedCourse) => {
    const updated = (courses || []).map((c) => (c.id === id || c.slug === id ? { ...c, ...updatedCourse } : c));
    dispatch({ type: 'SET_KEY', key: 'courses', value: updated });
    triggerStateToast('SAVED');
  }, [courses]);

  const deleteCourse = useCallback((id) => {
    const updated = (courses || []).filter((c) => c.id !== id && c.slug !== id);
    dispatch({ type: 'SET_KEY', key: 'courses', value: updated });
    triggerStateToast('SAVED');
  }, [courses]);

  const updateEzerDefinition = useCallback((def) => {
    dispatch({ type: 'SET_KEY', key: 'ezerDefinition', value: def });
    triggerStateToast('SAVED');
  }, []);

  const updateSupportCards = useCallback((cards) => {
    dispatch({ type: 'SET_KEY', key: 'supportCards', value: cards });
    triggerStateToast('SAVED');
  }, []);

  const updateTransformedLives = useCallback((lives) => {
    dispatch({ type: 'SET_KEY', key: 'transformedLives', value: lives });
    triggerStateToast('SAVED');
  }, []);

  const updateOutcomesHeader = useCallback((header) => {
    dispatch({ type: 'SET_KEY', key: 'outcomesHeader', value: header });
    triggerStateToast('SAVED');
  }, []);

  const updateSeniorMentors = useCallback((mentors) => {
    dispatch({ type: 'SET_KEY', key: 'seniorMentors', value: mentors });
    triggerStateToast('SAVED');
  }, []);

  const updateMentorsHeader = useCallback((header) => {
    dispatch({ type: 'SET_KEY', key: 'mentorsHeader', value: header });
    triggerStateToast('SAVED');
  }, []);

  const updateVideoTestimonials = useCallback((videos) => {
    dispatch({ type: 'SET_KEY', key: 'videoTestimonials', value: videos });
    triggerStateToast('SAVED');
  }, []);

  const updateTestimonialsHero = useCallback((hero) => {
    dispatch({ type: 'SET_KEY', key: 'testimonialsHero', value: hero });
    triggerStateToast('SAVED');
  }, []);

  const updateWrittenTestimonials = useCallback((testimonials) => {
    dispatch({ type: 'SET_KEY', key: 'writtenTestimonials', value: testimonials });
    triggerStateToast('SAVED');
  }, []);

  const updateFaqs = useCallback((faqs) => {
    dispatch({ type: 'SET_KEY', key: 'faqList', value: faqs });
    triggerStateToast('SAVED');
  }, []);

  const updateContactInfo = useCallback((info) => {
    dispatch({ type: 'SET_KEY', key: 'contactInfo', value: info });
    triggerStateToast('SAVED');
  }, []);

  const updatePopupConfig = useCallback((config) => {
    dispatch({ type: 'SET_KEY', key: 'popupConfig', value: config });
    triggerStateToast('SAVED');
  }, []);

  const addLead = useCallback((leadData) => {
    const newLead = { id: Date.now(), ...leadData, date: new Date().toLocaleString() };
    dispatch({ type: 'SET_KEY', key: 'leads', value: [newLead, ...leads] });
    triggerStateToast('SAVED');
  }, [leads]);

  const deleteLead = useCallback((leadId) => {
    dispatch({ type: 'SET_KEY', key: 'leads', value: leads.filter(l => l.id !== leadId) });
    triggerStateToast('SAVED');
  }, [leads]);

  const resetAllToDefaults = useCallback(() => {
    localStorage.clear();
    dispatch({ type: 'RESET_ALL' });
    triggerStateToast('SAVED');
  }, []);

  const value = useMemo(() => ({
    heroSlides, updateHeroSlides,
    courses, updateCourses, addCourse, updateCourse, deleteCourse,
    ezerDefinition, updateEzerDefinition,
    supportCards, updateSupportCards,
    transformedLives, updateTransformedLives,
    outcomesHeader, updateOutcomesHeader,
    seniorMentors, updateSeniorMentors,
    mentorsHeader, updateMentorsHeader,
    videoTestimonials, updateVideoTestimonials,
    testimonialsHero, updateTestimonialsHero,
    writtenTestimonials, updateWrittenTestimonials,
    faqList, updateFaqs,
    contactInfo, updateContactInfo,
    popupConfig, updatePopupConfig,
    leads, addLead, deleteLead,
    blogs, updateBlogs, addBlog, deleteBlog,
    achievements, updateAchievements, addAchievement, deleteAchievement,
    resetAllToDefaults
  }), [
    heroSlides, updateHeroSlides,
    courses, updateCourses, addCourse, updateCourse, deleteCourse,
    ezerDefinition, updateEzerDefinition,
    supportCards, updateSupportCards,
    transformedLives, updateTransformedLives,
    outcomesHeader, updateOutcomesHeader,
    seniorMentors, updateSeniorMentors,
    mentorsHeader, updateMentorsHeader,
    videoTestimonials, updateVideoTestimonials,
    testimonialsHero, updateTestimonialsHero,
    writtenTestimonials, updateWrittenTestimonials,
    faqList, updateFaqs,
    contactInfo, updateContactInfo,
    popupConfig, updatePopupConfig,
    leads, addLead, deleteLead,
    blogs, updateBlogs, addBlog, deleteBlog,
    achievements, updateAchievements, addAchievement, deleteAchievement,
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
