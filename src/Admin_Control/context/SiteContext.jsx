import React, { createContext, useContext, useReducer, useEffect, useMemo, useCallback } from 'react';
import { phase1Courses } from '../../data/courses';
import { testimonials as initialTestimonials, videoStories } from '../../data/testimonials';
import { generalFaqs } from '../../data/faq';
import productionData from '../../data/productionData.json';

const SiteContext = createContext();

const STORAGE_SLIDES_KEY = 'ezer_hero_slides:v6_cache_busted';
const STORAGE_COURSES_KEY = 'ezer_courses:v6_cache_busted';
const STORAGE_PLATFORM_KEY = 'ezer_platform_def:v6_cache_busted';
const STORAGE_SUPPORT_CARDS_KEY = 'ezer_support_cards:v6_cache_busted';
const STORAGE_TRANSFORMED_KEY = 'ezer_transformed_lives:v6_cache_busted';
const STORAGE_OUTCOMES_HEADER_KEY = 'ezer_outcomes_header:v6_cache_busted';
const STORAGE_MENTORS_KEY = 'ezer_senior_mentors:v6_cache_busted';
const STORAGE_MENTORS_HEADER_KEY = 'ezer_mentors_header:v6_cache_busted';
const STORAGE_VIDEOS_KEY = 'ezer_video_testimonials:v6_cache_busted';
const STORAGE_TESTIMONIALS_HERO_KEY = 'ezer_testimonials_hero:v6_cache_busted';
const STORAGE_WRITTEN_TESTIMONIALS_KEY = 'ezer_written_testimonials:v6_cache_busted';
const STORAGE_FAQS_KEY = 'ezer_faqs:v6_cache_busted';
const STORAGE_CONTACT_KEY = 'ezer_contact:v6_cache_busted';
const STORAGE_POPUP_CONFIG_KEY = 'ezer_popup_config:v6_cache_busted';

const defaultPopupConfig = {
  title: 'Register For Free Demo',
  subtitle: 'Book your free live demo class & 1-on-1 career counselling session',
  badge: 'LIMITED SEATS AVAILABLE',
  submitBtnText: 'Register Now',
  image: 'images/hero/hero_section_1.jpg',
  imagePosition: 'center center',
  imageFit: 'cover',
  photoVisibility: 85,
  photoHeight: 120,
  showPhoto: false,
  bodyBgImage: 'images/hero/hero_section_1.jpg',
  bodyBgOpacity: 15,
  showStateCity: true,
  nameLabel: 'Full Name*',
  emailLabel: 'Email Address*',
  phoneLabel: 'Mobile Number*',
  countryLabel: 'Country',
  courseLabel: 'Target Course*',
  termsLabel: 'I hereby accept and agree to the terms and conditions and privacy policy of EZER Learning Solutions.',
  coursesList: [
    'Cloud DevOps with AI',
    'Software Testing – Playwright',
    'AI & Machine Learning',
    'IT Infrastructure & System Administration'
  ],
  countriesList: [
    'India',
    'United States',
    'UAE',
    'Singapore',
    'Other'
  ]
};

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

const defaultPlatformDef = {
  tag: 'Empowering Career Switchers',
  headline: 'Leading EdTech Platform for Learning in Native Languages & Real IT Skills.',
  description: "EZER Learning Solution is India's top tech-driven EdTech platform delivering live online, practical, job-oriented IT courses. Taught by corporate-experienced IT professionals, EZER offers personalized live online training, hands-on labs, 1-year placement support, and up to 3 years of community access.",
  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=700&h=800',
  highlights: [
    'Live Online Instructor-Led',
    '1-Year LMS & Placement Support',
    '3-Year Community Access',
    'Hands-on Real World Labs'
  ],
  acronymText: 'EZER — Empowering Zero-to-Hero Education & Real Career Transformations'
};

const defaultSupportCards = [
  {
    id: 'support-1',
    title: 'Pre-Employment Support',
    subtitle: 'Career Readiness Phase',
    desc: 'Comprehensive guidance before you start applying — build a high-impact profile that catches recruiter attention.',
    bullets: [
      'Resume & LinkedIn profile optimization',
      '1-on-1 technical mock interviews',
      'GitHub portfolio & capstone review'
    ],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=400',
  },
  {
    id: 'support-2',
    title: 'Post-Employment Assistance',
    subtitle: '1-Year Placement Safety Net',
    desc: 'Our commitment doesn’t end on graduation day. Receive continuous job referrals and interview prep for 1 full year.',
    bullets: [
      'Up to 1 year continuous job referrals',
      'Post-hiring workplace onboarding support',
      'Salary negotiation & offer review'
    ],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600&h=400',
  },
  {
    id: 'support-3',
    title: '3-Year Community Access',
    subtitle: 'Long-Term Peer Network',
    desc: 'Stay connected with senior mentors, corporate practitioners, and fellow alumni for continuous growth.',
    bullets: [
      '3-year active Slack & Discord access',
      'Monthly expert masterclasses',
      'Peer code reviews & hackathons'
    ],
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600&h=400',
  },
  {
    id: 'support-4',
    title: 'Practical-First Live Labs',
    subtitle: 'Hands-on Production Depth',
    desc: 'Master industry-standard production tools through hands-on labs and real corporate scenario simulations.',
    bullets: [
      'Real cloud & automation environment labs',
      'Industry-standard toolchain exposure',
      'Live scenario troubleshooting'
    ],
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600&h=400',
  },
];

const defaultTransformedLives = [
  {
    id: 1,
    name: 'B Swathy',
    company: 'SmartHealth',
    beforeRole: 'Associate',
    afterRole: 'UI/UX Designer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300&h=300',
  },
  {
    id: 2,
    name: 'Balasubramani',
    company: 'ClarityTTS',
    beforeRole: 'Support Associate',
    afterRole: 'VLSI Physical Design Engineer',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300&h=300',
  },
  {
    id: 3,
    name: 'Padmini Kadhirvel',
    company: 'TachoMind',
    beforeRole: 'Non-IT Graduate',
    afterRole: 'Automation Testing Engineer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300',
  },
  {
    id: 4,
    name: 'Hasna Raza',
    company: 'Fipsar Tech',
    beforeRole: 'Fresher, B.Sc (Physics)',
    afterRole: 'ASIC Verification Engineer',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300&h=300',
  },
];

const defaultOutcomesHeader = {
  tag: 'CAREER PLACEMENT OUTCOMES',
  headline: 'Our Graduates Get Hired by Leading Tech Firms',
  sub: 'Join a community of engineers building impactful, high-growth software careers.'
};

const defaultSeniorMentors = [
  {
    id: 'mentor-1',
    name: 'Arun Kumar S',
    designation: 'Principal Cloud Architect @ TechCorp',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300&h=300',
    bio: '11+ years designing multi-cloud architectures across AWS and Azure. Mentored 2,500+ engineers into DevOps career roles.',
    tags: ['AWS Certified', 'Kubernetes Lead', 'DevOps Veteran']
  },
  {
    id: 'mentor-2',
    name: 'Kavitha Ranganathan',
    designation: 'Senior SRE Lead @ Global Cloud Systems',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300',
    bio: 'Specialist in Kubernetes zero-downtime deployments and IaC automation with Terraform.',
    tags: ['Terraform Expert', 'SRE Architecture', 'GitOps Specialist']
  }
];

const defaultMentorsHeader = {
  tag: 'SENIOR MENTORS',
  headline: 'Learn Directly From Senior Engineers & Academic Mentors',
  sub: 'Gain real-world insights from instructors with years of industry tenure across top technology firms.'
};

const defaultTestimonialsHero = {
  tag: 'ALUMNI SUCCESS & REVIEWS',
  headline: 'Proven Outcomes & Real Alumni Stories',
  sub: 'Explore career switch journeys from our graduates who secured engineering roles across leading IT companies after completing EZER live online cohorts.',
  ratingBadge: '4.9 / 5 Rating (1,200+ Reviews)',
  assistanceBadge: 'Up to 1-Year Placement Assistance',
  image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800'
};

const defaultContactInfo = {
  phone: '+91 98765 43210',
  email: 'admissions@ezerlearn.com',
  address: 'No. 42, Tech Park Avenue, Guindy, Chennai, Tamil Nadu - 600032',
  hours: 'Mon - Sat: 9:00 AM - 8:00 PM IST'
};

function safeSetStorage(key, value) {
  try {
    const serialized = JSON.stringify(value);
    localStorage.setItem(key, serialized);
    return true;
  } catch (err) {
    console.warn(`[SiteContext] Could not persist ${key} to localStorage:`, err);

    // If QuotaExceeded, try to free space by removing uploaded images cache first
    if (err.name === 'QuotaExceededError' || err.code === 22 || err.code === 1014) {
      try {
        // Remove uploaded images cache (largest item) to free space
        localStorage.removeItem('ezer_uploaded_images:v3');
        // Retry save after freeing space
        localStorage.setItem(key, serialized);
        console.log(`[SiteContext] Saved ${key} after clearing image cache.`);
        return true;
      } catch (retryErr) {
        // Still failed — alert user
        alert(
          '⚠️ Storage Full! Your changes could not be saved because the browser storage is full.\n\n' +
          'This usually happens when large images are uploaded as base64.\n\n' +
          'Solution: Use image URLs (paste a link) instead of uploading files, or clear your browser data and try again.'
        );
      }
    }
    return false;
  }
}

// Clean up stale localStorage keys so mobile devices don't carry old data
function cleanupOldStorageKeys() {
  try {
    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('ezer_') && !key.endsWith(':v6_cache_busted')) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach((key) => localStorage.removeItem(key));
    if (keysToRemove.length > 0) {
      console.log(`[SiteContext] Cleaned up ${keysToRemove.length} stale storage keys.`);
    }
  } catch (e) {}
}

// Run cleanup on module load (runs once on first import)
cleanupOldStorageKeys();

function getStored(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    if (stored) return JSON.parse(stored);
  } catch (e) {}
  return fallback;
}

function getInitialState() {
  const prodConfig = productionData.popupConfig || defaultPopupConfig;
  const prodSlides = productionData.heroSlides || defaultSlides;
  const prodCourses = productionData.courses || phase1Courses;

  return {
    heroSlides: getStored(STORAGE_SLIDES_KEY, prodSlides),
    courses: getStored(STORAGE_COURSES_KEY, prodCourses),
    ezerDefinition: getStored(STORAGE_PLATFORM_KEY, defaultPlatformDef),
    supportCards: getStored(STORAGE_SUPPORT_CARDS_KEY, defaultSupportCards),
    transformedLives: getStored(STORAGE_TRANSFORMED_KEY, defaultTransformedLives),
    outcomesHeader: getStored(STORAGE_OUTCOMES_HEADER_KEY, defaultOutcomesHeader),
    seniorMentors: getStored(STORAGE_MENTORS_KEY, defaultSeniorMentors),
    mentorsHeader: getStored(STORAGE_MENTORS_HEADER_KEY, defaultMentorsHeader),
    videoTestimonials: getStored(STORAGE_VIDEOS_KEY, videoStories),
    testimonialsHero: getStored(STORAGE_TESTIMONIALS_HERO_KEY, defaultTestimonialsHero),
    writtenTestimonials: getStored(STORAGE_WRITTEN_TESTIMONIALS_KEY, initialTestimonials),
    faqList: getStored(STORAGE_FAQS_KEY, generalFaqs),
    contactInfo: getStored(STORAGE_CONTACT_KEY, defaultContactInfo),
    popupConfig: getStored(STORAGE_POPUP_CONFIG_KEY, prodConfig),
  };
}

function siteReducer(state, action) {
  switch (action.type) {
    case 'SET_KEY':
      return { ...state, [action.key]: action.value };
    case 'RESET_ALL':
      return getInitialState();
    default:
      return state;
  }
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
    popupConfig
  } = state;

  // Check for mobile sync token in URL (#/?syncData=... or #/sync?data=...)
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

  // LocalStorage Persist Effects (Safely guarded against QuotaExceededError crashes)
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

  // Helper dispatch setters with useCallback
  const addHeroSlide = useCallback((slide) => dispatch({ type: 'SET_KEY', key: 'heroSlides', value: [...state.heroSlides, { id: `slide-${Date.now()}`, ...slide }] }), [state.heroSlides]);
  const updateHeroSlide = useCallback((id, updated) => dispatch({ type: 'SET_KEY', key: 'heroSlides', value: state.heroSlides.map((s) => (s.id === id || s.badge === id ? { ...s, ...updated } : s)) }), [state.heroSlides]);
  const deleteHeroSlide = useCallback((id) => dispatch({ type: 'SET_KEY', key: 'heroSlides', value: state.heroSlides.filter((s) => s.id !== id && s.badge !== id) }), [state.heroSlides]);

  const addCourse = useCallback((c) => dispatch({ type: 'SET_KEY', key: 'courses', value: [{ id: c.slug || `course-${Date.now()}`, badge: 'New Course', ...c }, ...state.courses] }), [state.courses]);
  const updateCourse = useCallback((id, updated) => dispatch({ type: 'SET_KEY', key: 'courses', value: state.courses.map((c) => (c.id === id || c.slug === id ? { ...c, ...updated } : c)) }), [state.courses]);
  const deleteCourse = useCallback((id) => dispatch({ type: 'SET_KEY', key: 'courses', value: state.courses.filter((c) => c.id !== id && c.slug !== id) }), [state.courses]);

  const updateEzerDefinition = useCallback((data) => dispatch({ type: 'SET_KEY', key: 'ezerDefinition', value: { ...state.ezerDefinition, ...data } }), [state.ezerDefinition]);

  const addSupportCard = useCallback((card) => dispatch({ type: 'SET_KEY', key: 'supportCards', value: [{ id: `support-${Date.now()}`, ...card }, ...state.supportCards] }), [state.supportCards]);
  const updateSupportCard = useCallback((id, updated) => dispatch({ type: 'SET_KEY', key: 'supportCards', value: state.supportCards.map((c) => (c.id === id || c.title === id ? { ...c, ...updated } : c)) }), [state.supportCards]);
  const deleteSupportCard = useCallback((id) => dispatch({ type: 'SET_KEY', key: 'supportCards', value: state.supportCards.filter((c) => c.id !== id && c.title !== id) }), [state.supportCards]);

  const updateOutcomesHeader = useCallback((data) => dispatch({ type: 'SET_KEY', key: 'outcomesHeader', value: { ...state.outcomesHeader, ...data } }), [state.outcomesHeader]);
  const addTransformedLife = useCallback((item) => dispatch({ type: 'SET_KEY', key: 'transformedLives', value: [{ id: Date.now(), ...item }, ...state.transformedLives] }), [state.transformedLives]);
  const updateTransformedLife = useCallback((id, updated) => dispatch({ type: 'SET_KEY', key: 'transformedLives', value: state.transformedLives.map((t) => (t.id === id ? { ...t, ...updated } : t)) }), [state.transformedLives]);
  const deleteTransformedLife = useCallback((id) => dispatch({ type: 'SET_KEY', key: 'transformedLives', value: state.transformedLives.filter((t) => t.id !== id) }), [state.transformedLives]);

  const updateMentorsHeader = useCallback((data) => dispatch({ type: 'SET_KEY', key: 'mentorsHeader', value: { ...state.mentorsHeader, ...data } }), [state.mentorsHeader]);
  const addSeniorMentor = useCallback((mentor) => dispatch({ type: 'SET_KEY', key: 'seniorMentors', value: [{ id: `mentor-${Date.now()}`, ...mentor }, ...state.seniorMentors] }), [state.seniorMentors]);
  const updateSeniorMentor = useCallback((id, updated) => dispatch({ type: 'SET_KEY', key: 'seniorMentors', value: state.seniorMentors.map((m) => (m.id === id ? { ...m, ...updated } : m)) }), [state.seniorMentors]);
  const deleteSeniorMentor = useCallback((id) => dispatch({ type: 'SET_KEY', key: 'seniorMentors', value: state.seniorMentors.filter((m) => m.id !== id) }), [state.seniorMentors]);

  const addVideoTestimonial = useCallback((v) => dispatch({ type: 'SET_KEY', key: 'videoTestimonials', value: [{ id: `video-${Date.now()}`, ...v }, ...state.videoTestimonials] }), [state.videoTestimonials]);
  const updateVideoTestimonial = useCallback((id, updated) => dispatch({ type: 'SET_KEY', key: 'videoTestimonials', value: state.videoTestimonials.map((v) => (v.id === id ? { ...v, ...updated } : v)) }), [state.videoTestimonials]);
  const deleteVideoTestimonial = useCallback((id) => dispatch({ type: 'SET_KEY', key: 'videoTestimonials', value: state.videoTestimonials.filter((v) => v.id !== id) }), [state.videoTestimonials]);

  const updateTestimonialsHero = useCallback((data) => dispatch({ type: 'SET_KEY', key: 'testimonialsHero', value: { ...state.testimonialsHero, ...data } }), [state.testimonialsHero]);
  const addWrittenTestimonial = useCallback((t) => dispatch({ type: 'SET_KEY', key: 'writtenTestimonials', value: [{ id: Date.now(), ...t }, ...state.writtenTestimonials] }), [state.writtenTestimonials]);
  const updateWrittenTestimonial = useCallback((id, updated) => dispatch({ type: 'SET_KEY', key: 'writtenTestimonials', value: state.writtenTestimonials.map((t) => (t.id === id ? { ...t, ...updated } : t)) }), [state.writtenTestimonials]);
  const deleteWrittenTestimonial = useCallback((id) => dispatch({ type: 'SET_KEY', key: 'writtenTestimonials', value: state.writtenTestimonials.filter((t) => t.id !== id) }), [state.writtenTestimonials]);

  const addFaqItem = useCallback((categoryName, item) => {
    dispatch({ type: 'SET_KEY', key: 'faqList', value: state.faqList.map((cat) => cat.category === categoryName ? { ...cat, items: [...cat.items, { id: `faq-${Date.now()}`, ...item }] } : cat) });
  }, [state.faqList]);
  const updateFaqItem = useCallback((categoryName, id, updated) => {
    dispatch({ type: 'SET_KEY', key: 'faqList', value: state.faqList.map((cat) => cat.category === categoryName ? { ...cat, items: cat.items.map((i) => i.id === id || i.q === id ? { ...i, ...updated } : i) } : cat) });
  }, [state.faqList]);
  const deleteFaqItem = useCallback((categoryName, id) => {
    dispatch({ type: 'SET_KEY', key: 'faqList', value: state.faqList.map((cat) => cat.category === categoryName ? { ...cat, items: cat.items.filter((i) => i.id !== id && i.q !== id) } : cat) });
  }, [state.faqList]);

  const updateContactInfo = useCallback((data) => dispatch({ type: 'SET_KEY', key: 'contactInfo', value: { ...state.contactInfo, ...data } }), [state.contactInfo]);
  const updatePopupConfig = useCallback((data) => dispatch({ type: 'SET_KEY', key: 'popupConfig', value: { ...state.popupConfig, ...data } }), [state.popupConfig]);

  const resetToDefault = useCallback(() => {
    localStorage.removeItem(STORAGE_SLIDES_KEY);
    localStorage.removeItem(STORAGE_COURSES_KEY);
    localStorage.removeItem(STORAGE_PLATFORM_KEY);
    localStorage.removeItem(STORAGE_SUPPORT_CARDS_KEY);
    localStorage.removeItem(STORAGE_TRANSFORMED_KEY);
    localStorage.removeItem(STORAGE_OUTCOMES_HEADER_KEY);
    localStorage.removeItem(STORAGE_MENTORS_KEY);
    localStorage.removeItem(STORAGE_MENTORS_HEADER_KEY);
    localStorage.removeItem(STORAGE_VIDEOS_KEY);
    localStorage.removeItem(STORAGE_TESTIMONIALS_HERO_KEY);
    localStorage.removeItem(STORAGE_WRITTEN_TESTIMONIALS_KEY);
    localStorage.removeItem(STORAGE_FAQS_KEY);
    localStorage.removeItem(STORAGE_CONTACT_KEY);
    localStorage.removeItem(STORAGE_POPUP_CONFIG_KEY);
    dispatch({ type: 'RESET_ALL' });
  }, []);

  const contextValue = useMemo(() => ({
    heroSlides,
    addHeroSlide,
    updateHeroSlide,
    deleteHeroSlide,

    courses,
    addCourse,
    updateCourse,
    deleteCourse,

    ezerDefinition,
    updateEzerDefinition,

    supportCards,
    addSupportCard,
    updateSupportCard,
    deleteSupportCard,

    transformedLives,
    outcomesHeader,
    updateOutcomesHeader,
    addTransformedLife,
    updateTransformedLife,
    deleteTransformedLife,

    seniorMentors,
    mentorsHeader,
    updateMentorsHeader,
    addSeniorMentor,
    updateSeniorMentor,
    deleteSeniorMentor,

    videoTestimonials,
    addVideoTestimonial,
    updateVideoTestimonial,
    deleteVideoTestimonial,

    testimonialsHero,
    updateTestimonialsHero,
    writtenTestimonials,
    addWrittenTestimonial,
    updateWrittenTestimonial,
    deleteWrittenTestimonial,

    faqList,
    addFaqItem,
    updateFaqItem,
    deleteFaqItem,

    contactInfo,
    updateContactInfo,

    popupConfig,
    updatePopupConfig,

    resetToDefault
  }), [
    heroSlides,
    addHeroSlide,
    updateHeroSlide,
    deleteHeroSlide,

    courses,
    addCourse,
    updateCourse,
    deleteCourse,

    ezerDefinition,
    updateEzerDefinition,

    supportCards,
    addSupportCard,
    updateSupportCard,
    deleteSupportCard,

    transformedLives,
    outcomesHeader,
    updateOutcomesHeader,
    addTransformedLife,
    updateTransformedLife,
    deleteTransformedLife,

    seniorMentors,
    mentorsHeader,
    updateMentorsHeader,
    addSeniorMentor,
    updateSeniorMentor,
    deleteSeniorMentor,

    videoTestimonials,
    addVideoTestimonial,
    updateVideoTestimonial,
    deleteVideoTestimonial,

    testimonialsHero,
    updateTestimonialsHero,
    writtenTestimonials,
    addWrittenTestimonial,
    updateWrittenTestimonial,
    deleteWrittenTestimonial,

    faqList,
    addFaqItem,
    updateFaqItem,
    deleteFaqItem,

    contactInfo,
    updateContactInfo,

    popupConfig,
    updatePopupConfig,

    resetToDefault
  ]);

  return (
    <SiteContext.Provider value={contextValue}>
      {children}
    </SiteContext.Provider>
  );
}

export function useSiteData() {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error('useSiteData must be used within a SiteProvider');
  }
  return context;
}
