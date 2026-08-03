import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { phase1Courses } from '../../data/courses';

const SiteContext = createContext();

const STORAGE_SLIDES_KEY = 'ezer_hero_slides:v1';
const STORAGE_COURSES_KEY = 'ezer_courses:v1';

const defaultSlides = [
  {
    id: 'slide-1',
    url: 'images/hero/hero_section_1.jpg',
    headline: 'Learn Live. Build Real Skills. Get Placed.',
    sub: 'Live online classes led by working corporate professionals, hands-on labs on industry tools, and placement support that continues after graduation.',
    badge: 'Outcome-Driven IT Training',
  },
  {
    id: 'slide-2',
    url: 'images/hero/cloud_deveops.png',
    headline: 'Deploy, Automate, and Scale Like a Real DevOps Engineer',
    sub: 'Master AWS, Azure, GCP, Docker, Kubernetes, Jenkins & Terraform with hands-on production labs.',
    badge: 'Cloud & DevOps Masterclass',
  },
  {
    id: 'slide-3',
    url: 'images/hero/software_testing_playwright.jpg',
    headline: 'Test Smarter With Modern Automation Frameworks',
    sub: 'From manual testing fundamentals to full Playwright automation and CI/CD integration.',
    badge: 'Playwright Automation Program',
  },
  {
    id: 'slide-4',
    url: 'images/hero/AI_machine_learning.png',
    headline: 'From Python Basics to Deploying Real ML Models',
    sub: 'A hands-on, project-based path into AI & Machine Learning — live, instructor-led, and practical.',
    badge: 'AI & Data Science Track',
  },
];

export function SiteProvider({ children }) {
  const [heroSlides, setHeroSlides] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_SLIDES_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (err) {
      console.error('Error loading hero slides from localStorage:', err);
    }
    return defaultSlides;
  });

  const [courses, setCourses] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_COURSES_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (err) {
      console.error('Error loading courses from localStorage:', err);
    }
    return phase1Courses;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_SLIDES_KEY, JSON.stringify(heroSlides));
    } catch (e) {
      console.error('Failed to save hero slides:', e);
    }
  }, [heroSlides]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_COURSES_KEY, JSON.stringify(courses));
    } catch (e) {
      console.error('Failed to save courses:', e);
    }
  }, [courses]);

  const addHeroSlide = (slide) => {
    const newSlide = {
      id: `slide-${Date.now()}`,
      ...slide,
    };
    setHeroSlides((prev) => [...prev, newSlide]);
  };

  const updateHeroSlide = (id, updatedData) => {
    setHeroSlides((prev) =>
      prev.map((slide) => (slide.id === id || slide.badge === id ? { ...slide, ...updatedData } : slide))
    );
  };

  const deleteHeroSlide = (id) => {
    setHeroSlides((prev) => prev.filter((slide) => slide.id !== id && slide.badge !== id));
  };

  const addCourse = (newCourse) => {
    const formatted = {
      id: newCourse.slug || `course-${Date.now()}`,
      badge: 'New Course',
      tools: [],
      curriculumModules: [],
      projects: [],
      faculty: [],
      whoIsItFor: [],
      admissionSteps: [],
      schedule: 'Weekday & Weekend batches available',
      startDate: 'Starting Next Month',
      languages: 'Tamil, English, Hindi',
      applicationFee: 'Free Counseling Registration',
      ...newCourse,
    };
    setCourses((prev) => [formatted, ...prev]);
  };

  const updateCourse = (id, updatedCourse) => {
    setCourses((prev) =>
      prev.map((c) => (c.id === id || c.slug === id ? { ...c, ...updatedCourse } : c))
    );
  };

  const deleteCourse = (id) => {
    setCourses((prev) => prev.filter((c) => c.id !== id && c.slug !== id));
  };

  const resetToDefault = () => {
    setHeroSlides(defaultSlides);
    setCourses(phase1Courses);
    localStorage.removeItem(STORAGE_SLIDES_KEY);
    localStorage.removeItem(STORAGE_COURSES_KEY);
  };

  const contextValue = useMemo(
    () => ({
      heroSlides,
      courses,
      addHeroSlide,
      updateHeroSlide,
      deleteHeroSlide,
      addCourse,
      updateCourse,
      deleteCourse,
      resetToDefault,
    }),
    [heroSlides, courses]
  );

  return <SiteContext.Provider value={contextValue}>{children}</SiteContext.Provider>;
}

export function useSiteData() {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error('useSiteData must be used within a SiteProvider');
  }
  return context;
}
