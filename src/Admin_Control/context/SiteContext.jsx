import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { phase1Courses } from '../../data/courses';
import { testimonials as initialTestimonials, videoStories } from '../../data/testimonials';
import { generalFaqs } from '../../data/faq';

const SiteContext = createContext();

const STORAGE_SLIDES_KEY = 'ezer_hero_slides:v1';
const STORAGE_COURSES_KEY = 'ezer_courses:v1';
const STORAGE_PLATFORM_KEY = 'ezer_platform_def:v1';
const STORAGE_SUPPORT_CARDS_KEY = 'ezer_support_cards:v1';
const STORAGE_TRANSFORMED_KEY = 'ezer_transformed_lives:v1';
const STORAGE_OUTCOMES_HEADER_KEY = 'ezer_outcomes_header:v1';
const STORAGE_MENTORS_KEY = 'ezer_senior_mentors:v1';
const STORAGE_MENTORS_HEADER_KEY = 'ezer_mentors_header:v1';
const STORAGE_VIDEOS_KEY = 'ezer_video_testimonials:v1';
const STORAGE_TESTIMONIALS_HERO_KEY = 'ezer_testimonials_hero:v1';
const STORAGE_WRITTEN_TESTIMONIALS_KEY = 'ezer_written_testimonials:v1';
const STORAGE_FAQS_KEY = 'ezer_faqs:v1';
const STORAGE_CONTACT_KEY = 'ezer_contact:v1';

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

export function SiteProvider({ children }) {
  const [heroSlides, setHeroSlides] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_SLIDES_KEY);
      if (stored) return JSON.parse(stored);
    } catch (e) {}
    return defaultSlides;
  });

  const [courses, setCourses] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_COURSES_KEY);
      if (stored) return JSON.parse(stored);
    } catch (e) {}
    return phase1Courses;
  });

  const [ezerDefinition, setEzerDefinition] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_PLATFORM_KEY);
      if (stored) return JSON.parse(stored);
    } catch (e) {}
    return defaultPlatformDef;
  });

  const [supportCards, setSupportCards] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_SUPPORT_CARDS_KEY);
      if (stored) return JSON.parse(stored);
    } catch (e) {}
    return defaultSupportCards;
  });

  const [transformedLives, setTransformedLives] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_TRANSFORMED_KEY);
      if (stored) return JSON.parse(stored);
    } catch (e) {}
    return defaultTransformedLives;
  });

  const [outcomesHeader, setOutcomesHeader] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_OUTCOMES_HEADER_KEY);
      if (stored) return JSON.parse(stored);
    } catch (e) {}
    return defaultOutcomesHeader;
  });

  const [seniorMentors, setSeniorMentors] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_MENTORS_KEY);
      if (stored) return JSON.parse(stored);
    } catch (e) {}
    return defaultSeniorMentors;
  });

  const [mentorsHeader, setMentorsHeader] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_MENTORS_HEADER_KEY);
      if (stored) return JSON.parse(stored);
    } catch (e) {}
    return defaultMentorsHeader;
  });

  const [videoTestimonials, setVideoTestimonials] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_VIDEOS_KEY);
      if (stored) return JSON.parse(stored);
    } catch (e) {}
    return videoStories;
  });

  const [testimonialsHero, setTestimonialsHero] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_TESTIMONIALS_HERO_KEY);
      if (stored) return JSON.parse(stored);
    } catch (e) {}
    return defaultTestimonialsHero;
  });

  const [writtenTestimonials, setWrittenTestimonials] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_WRITTEN_TESTIMONIALS_KEY);
      if (stored) return JSON.parse(stored);
    } catch (e) {}
    return initialTestimonials;
  });

  const [faqList, setFaqList] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_FAQS_KEY);
      if (stored) return JSON.parse(stored);
    } catch (e) {}
    return generalFaqs;
  });

  const [contactInfo, setContactInfo] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_CONTACT_KEY);
      if (stored) return JSON.parse(stored);
    } catch (e) {}
    return defaultContactInfo;
  });

  // LocalStorage Persist Effect
  useEffect(() => { localStorage.setItem(STORAGE_SLIDES_KEY, JSON.stringify(heroSlides)); }, [heroSlides]);
  useEffect(() => { localStorage.setItem(STORAGE_COURSES_KEY, JSON.stringify(courses)); }, [courses]);
  useEffect(() => { localStorage.setItem(STORAGE_PLATFORM_KEY, JSON.stringify(ezerDefinition)); }, [ezerDefinition]);
  useEffect(() => { localStorage.setItem(STORAGE_SUPPORT_CARDS_KEY, JSON.stringify(supportCards)); }, [supportCards]);
  useEffect(() => { localStorage.setItem(STORAGE_TRANSFORMED_KEY, JSON.stringify(transformedLives)); }, [transformedLives]);
  useEffect(() => { localStorage.setItem(STORAGE_OUTCOMES_HEADER_KEY, JSON.stringify(outcomesHeader)); }, [outcomesHeader]);
  useEffect(() => { localStorage.setItem(STORAGE_MENTORS_KEY, JSON.stringify(seniorMentors)); }, [seniorMentors]);
  useEffect(() => { localStorage.setItem(STORAGE_MENTORS_HEADER_KEY, JSON.stringify(mentorsHeader)); }, [mentorsHeader]);
  useEffect(() => { localStorage.setItem(STORAGE_VIDEOS_KEY, JSON.stringify(videoTestimonials)); }, [videoTestimonials]);
  useEffect(() => { localStorage.setItem(STORAGE_TESTIMONIALS_HERO_KEY, JSON.stringify(testimonialsHero)); }, [testimonialsHero]);
  useEffect(() => { localStorage.setItem(STORAGE_WRITTEN_TESTIMONIALS_KEY, JSON.stringify(writtenTestimonials)); }, [writtenTestimonials]);
  useEffect(() => { localStorage.setItem(STORAGE_FAQS_KEY, JSON.stringify(faqList)); }, [faqList]);
  useEffect(() => { localStorage.setItem(STORAGE_CONTACT_KEY, JSON.stringify(contactInfo)); }, [contactInfo]);

  // Hero CRUD
  const addHeroSlide = (slide) => setHeroSlides((prev) => [...prev, { id: `slide-${Date.now()}`, ...slide }]);
  const updateHeroSlide = (id, updated) => setHeroSlides((prev) => prev.map((s) => (s.id === id || s.badge === id ? { ...s, ...updated } : s)));
  const deleteHeroSlide = (id) => setHeroSlides((prev) => prev.filter((s) => s.id !== id && s.badge !== id));

  // Course CRUD
  const addCourse = (c) => setCourses((prev) => [{ id: c.slug || `course-${Date.now()}`, badge: 'New Course', ...c }, ...prev]);
  const updateCourse = (id, updated) => setCourses((prev) => prev.map((c) => (c.id === id || c.slug === id ? { ...c, ...updated } : c)));
  const deleteCourse = (id) => setCourses((prev) => prev.filter((c) => c.id !== id && c.slug !== id));

  // Platform Definition Updates
  const updateEzerDefinition = (data) => setEzerDefinition((prev) => ({ ...prev, ...data }));

  // Support Cards CRUD
  const addSupportCard = (card) => setSupportCards((prev) => [{ id: `support-${Date.now()}`, ...card }, ...prev]);
  const updateSupportCard = (id, updated) => setSupportCards((prev) => prev.map((c) => (c.id === id || c.title === id ? { ...c, ...updated } : c)));
  const deleteSupportCard = (id) => setSupportCards((prev) => prev.filter((c) => c.id !== id && c.title !== id));

  // Transformed Lives CRUD
  const updateOutcomesHeader = (data) => setOutcomesHeader((prev) => ({ ...prev, ...data }));
  const addTransformedLife = (item) => setTransformedLives((prev) => [{ id: Date.now(), ...item }, ...prev]);
  const updateTransformedLife = (id, updated) => setTransformedLives((prev) => prev.map((t) => (t.id === id ? { ...t, ...updated } : t)));
  const deleteTransformedLife = (id) => setTransformedLives((prev) => prev.filter((t) => t.id !== id));

  // Senior Mentors CRUD
  const updateMentorsHeader = (data) => setMentorsHeader((prev) => ({ ...prev, ...data }));
  const addSeniorMentor = (mentor) => setSeniorMentors((prev) => [{ id: `mentor-${Date.now()}`, ...mentor }, ...prev]);
  const updateSeniorMentor = (id, updated) => setSeniorMentors((prev) => prev.map((m) => (m.id === id ? { ...m, ...updated } : m)));
  const deleteSeniorMentor = (id) => setSeniorMentors((prev) => prev.filter((m) => m.id !== id));

  // Video Testimonial CRUD
  const addVideoTestimonial = (video) => setVideoTestimonials((prev) => [{ id: Date.now(), ...video }, ...prev]);
  const updateVideoTestimonial = (id, updated) => setVideoTestimonials((prev) => prev.map((v) => (v.id === id ? { ...v, ...updated } : v)));
  const deleteVideoTestimonial = (id) => setVideoTestimonials((prev) => prev.filter((v) => v.id !== id));

  // Testimonials Page CRUD
  const updateTestimonialsHero = (data) => setTestimonialsHero((prev) => ({ ...prev, ...data }));
  const addWrittenTestimonial = (item) => setWrittenTestimonials((prev) => [{ id: Date.now(), ...item }, ...prev]);
  const updateWrittenTestimonial = (id, updated) => setWrittenTestimonials((prev) => prev.map((t) => (t.id === id ? { ...t, ...updated } : t)));
  const deleteWrittenTestimonial = (id) => setWrittenTestimonials((prev) => prev.filter((t) => t.id !== id));

  // FAQ CRUD
  const updateFaqList = (newList) => setFaqList(newList);

  // Contact Info Updates
  const updateContactInfo = (data) => setContactInfo((prev) => ({ ...prev, ...data }));

  const resetToDefault = () => {
    setHeroSlides(defaultSlides);
    setCourses(phase1Courses);
    setEzerDefinition(defaultPlatformDef);
    setSupportCards(defaultSupportCards);
    setTransformedLives(defaultTransformedLives);
    setOutcomesHeader(defaultOutcomesHeader);
    setSeniorMentors(defaultSeniorMentors);
    setMentorsHeader(defaultMentorsHeader);
    setVideoTestimonials(videoStories);
    setTestimonialsHero(defaultTestimonialsHero);
    setWrittenTestimonials(initialTestimonials);
    setFaqList(generalFaqs);
    setContactInfo(defaultContactInfo);

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
  };

  const contextValue = useMemo(
    () => ({
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
      addHeroSlide,
      updateHeroSlide,
      deleteHeroSlide,
      addCourse,
      updateCourse,
      deleteCourse,
      updateEzerDefinition,
      addSupportCard,
      updateSupportCard,
      deleteSupportCard,
      updateOutcomesHeader,
      addTransformedLife,
      updateTransformedLife,
      deleteTransformedLife,
      updateMentorsHeader,
      addSeniorMentor,
      updateSeniorMentor,
      deleteSeniorMentor,
      addVideoTestimonial,
      updateVideoTestimonial,
      deleteVideoTestimonial,
      updateTestimonialsHero,
      addWrittenTestimonial,
      updateWrittenTestimonial,
      deleteWrittenTestimonial,
      updateFaqList,
      updateContactInfo,
      resetToDefault,
    }),
    [heroSlides, courses, ezerDefinition, supportCards, transformedLives, outcomesHeader, seniorMentors, mentorsHeader, videoTestimonials, testimonialsHero, writtenTestimonials, faqList, contactInfo]
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
