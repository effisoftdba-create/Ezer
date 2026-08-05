import { phase1Courses } from '../../data/courses';
import { testimonials as initialTestimonials, videoStories } from '../../data/testimonials';
import { generalFaqs } from '../../data/faq';
import productionData from '../../data/productionData.json';

export const STORAGE_SLIDES_KEY = 'ezer_hero_slides:v7_cache_busted';
export const STORAGE_COURSES_KEY = 'ezer_courses:v7_cache_busted';
export const STORAGE_PLATFORM_KEY = 'ezer_platform_def:v7_cache_busted';
export const STORAGE_SUPPORT_CARDS_KEY = 'ezer_support_cards:v7_cache_busted';
export const STORAGE_TRANSFORMED_KEY = 'ezer_transformed_lives:v7_cache_busted';
export const STORAGE_OUTCOMES_HEADER_KEY = 'ezer_outcomes_header:v7_cache_busted';
export const STORAGE_MENTORS_KEY = 'ezer_senior_mentors:v7_cache_busted';
export const STORAGE_MENTORS_HEADER_KEY = 'ezer_mentors_header:v7_cache_busted';
export const STORAGE_VIDEOS_KEY = 'ezer_video_testimonials:v7_cache_busted';
export const STORAGE_TESTIMONIALS_HERO_KEY = 'ezer_testimonials_hero:v7_cache_busted';
export const STORAGE_WRITTEN_TESTIMONIALS_KEY = 'ezer_written_testimonials:v7_cache_busted';
export const STORAGE_FAQS_KEY = 'ezer_faqs:v7_cache_busted';
export const STORAGE_CONTACT_KEY = 'ezer_contact:v7_cache_busted';
export const STORAGE_POPUP_CONFIG_KEY = 'ezer_popup_config:v7_cache_busted';
export const STORAGE_LEADS_KEY = 'ezer_leads:v7_cache_busted';

export const defaultPopupConfig = {
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
    'AI/ML',
    'Full stack development with AI',
    'Data Analyst',
    'Cloud DevOps with AI',
    'Cyber Security',
    'Spoken English (International standard)'
  ],
  countriesList: [
    'India',
    'United States',
    'UAE',
    'Singapore',
    'Other'
  ]
};

export const defaultSlides = [
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
    headline: 'Build Modern AI-Powered Web Applications',
    sub: 'Master React, Node.js, Next.js & PostgreSQL supercharged with AI coding assistants.',
    badge: 'Full Stack with AI',
  },
  {
    id: 'slide-4',
    url: 'images/hero/AI_machine_learning.png',
    headline: 'From Python Basics to Deploying Real ML Models',
    sub: 'A hands-on, project-based path into AI & Machine Learning — live, instructor-led, and practical.',
    badge: 'AI & Data Science Track',
  },
];

export const defaultPlatformDef = {
  tag: 'Empowering Career Switchers',
  headline: 'Leading EdTech Platform for Learning in Native Languages & Real IT Skills.',
  description: "EZER Learning Solutions is India's top tech-driven EdTech platform delivering live online, practical, job-oriented IT courses. Taught by corporate-experienced IT professionals, EZER offers personalized live online training, hands-on labs, 12-month placement support, and up to 3 years of community access.",
  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=700&h=800',
  highlights: [
    'Live Online Instructor-Led',
    '12-Month Placement Support',
    'Mentorship by Industry Practitioners',
    'Alumni & Peer Community'
  ]
};

export const defaultSupportCards = [
  {
    id: 'supp-1',
    number: '01',
    tag: 'PLACEMENT SUPPORT',
    title: '12-Month Career Placement Support',
    desc: 'Comprehensive resume optimization, interview preparation, and curated job opportunities',
    bgColor: '#ffffff',
    borderColor: '#e2e8f0',
    tagBg: '#000648',
    tagColor: '#f2b733',
    numColor: '#000648',
    titleColor: '#000648',
    descColor: '#475569'
  },
  {
    id: 'supp-2',
    number: '02',
    tag: 'EXPERT FACULTY',
    title: 'Mentorship by Industry Practitioners',
    desc: 'Learn from senior leaders and tech experts working at top global organizations',
    bgColor: '#ffffff',
    borderColor: '#e2e8f0',
    tagBg: '#000648',
    tagColor: '#f2b733',
    numColor: '#000648',
    titleColor: '#000648',
    descColor: '#475569'
  },
  {
    id: 'supp-3',
    number: '03',
    tag: 'NETWORKING',
    title: 'Alumni & Peer Community*',
    desc: 'Continuous mentorship, Slack access, and networking with a thriving alumni ecosystem',
    bgColor: '#ffffff',
    borderColor: '#e2e8f0',
    tagBg: '#000648',
    tagColor: '#f2b733',
    numColor: '#000648',
    titleColor: '#000648',
    descColor: '#475569'
  },
  {
    id: 'supp-4',
    number: '04',
    tag: 'ON-DEMAND REVISION',
    title: 'Learning Management Access',
    desc: 'On-demand access to all session recordings for flexible revision and learning',
    bgColor: '#ffffff',
    borderColor: '#e2e8f0',
    tagBg: '#000648',
    tagColor: '#f2b733',
    numColor: '#000648',
    titleColor: '#000648',
    descColor: '#475569'
  }
];

export const defaultTransformedLives = [
  {
    id: 'tl-1',
    name: 'Ramesh Krishnan',
    beforeRole: 'BPO Executive (Non-IT)',
    afterRole: 'Cloud DevOps Engineer',
    salaryHike: '180% Salary Hike',
    story: 'EZER transformed my career trajectory. Transitioned from BPO into a Cloud DevOps role in 4 months.',
    company: 'TechCorp India',
    courseSlug: 'cloud-devops-ai',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    id: 'tl-2',
    name: 'Priya Sundaram',
    beforeRole: 'Manual Tester',
    afterRole: 'AI Full Stack Developer',
    salaryHike: '140% Salary Hike',
    story: 'Full stack development with AI mastery gave me total confidence in corporate technical interviews.',
    company: 'GlobalQA Labs',
    courseSlug: 'full-stack-dev-ai',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300'
  }
];

export const defaultOutcomesHeader = {
  tag: 'TRANSFORMED LIVES',
  title: 'Real Career Switches & Salary Hikes',
  sub: 'Hear directly from our learners who transitioned into high-paying IT roles.'
};

export const defaultSeniorMentors = [
  {
    id: 'm-1',
    name: 'Arun Kumar S',
    role: 'Principal Cloud Architect',
    company: 'Ex-Google / AWS Lead',
    exp: '12+ Yrs Exp',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300&h=300',
    bio: 'Multi-cloud architect & DevOps mentor who has trained over 2,500+ successful tech professionals.'
  },
  {
    id: 'm-2',
    name: 'Pradeep Rajan',
    role: 'Senior Staff Full-Stack Engineer',
    company: 'Ex-Zoho / Global Tech Lead',
    exp: '10+ Yrs Exp',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300',
    bio: 'Specialist in React, Node.js, Next.js and AI Copilot workflow automation.'
  }
];

export const defaultMentorsHeader = {
  tag: 'EXPERT FACULTY',
  title: 'Learn Live From Working Corporate Professionals',
  sub: 'Our instructors work at top tech firms, bringing real production scenarios into every live class.'
};

export const defaultVideoTestimonials = videoStories || [];
export const defaultTestimonialsHero = {
  badge: 'STUDENT SUCCESS STORIES',
  headline: 'Real Learners. Real IT Career Outcomes.',
  sub: 'Discover how EZER Learning Solutions helps freshers and career switchers land high-growth tech jobs.'
};

export const defaultContactInfo = {
  email: 'support@ezerlearning.com',
  phone: '+91 98765 43210',
  address: 'Ezer Learning Solutions\nPlot No: 90, 3rd Cross Street, Phase-2, Thirumalai Nagar Annexe, Perungudi, Chennai - 600096, Tamil Nadu, India',
  whatsapp: '+91 98765 43210',
  workingHours: 'Mon - Sat: 9:00 AM - 7:00 PM'
};

export const defaultLeads = [];

export function getStored(key, fallback) {
  try {
    const item = localStorage.getItem(key);
    if (!item) return fallback;
    const parsed = JSON.parse(item);
    return parsed !== null && parsed !== undefined ? parsed : fallback;
  } catch {
    return fallback;
  }
}

export function safeSetStorage(key, val) {
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch (e) {
    console.warn(`[SiteContext] Storage write skipped for key "${key}" due to quota limits.`);
  }
}

export function getInitialState() {
  const prodConfig = defaultPopupConfig;
  return {
    heroSlides: getStored(STORAGE_SLIDES_KEY, defaultSlides),
    courses: getStored(STORAGE_COURSES_KEY, phase1Courses),
    ezerDefinition: getStored(STORAGE_PLATFORM_KEY, defaultPlatformDef),
    supportCards: getStored(STORAGE_SUPPORT_CARDS_KEY, defaultSupportCards),
    transformedLives: getStored(STORAGE_TRANSFORMED_KEY, defaultTransformedLives),
    outcomesHeader: getStored(STORAGE_OUTCOMES_HEADER_KEY, defaultOutcomesHeader),
    seniorMentors: getStored(STORAGE_MENTORS_KEY, defaultSeniorMentors),
    mentorsHeader: getStored(STORAGE_MENTORS_HEADER_KEY, defaultMentorsHeader),
    videoTestimonials: getStored(STORAGE_VIDEOS_KEY, defaultVideoTestimonials),
    testimonialsHero: getStored(STORAGE_TESTIMONIALS_HERO_KEY, defaultTestimonialsHero),
    writtenTestimonials: getStored(STORAGE_WRITTEN_TESTIMONIALS_KEY, initialTestimonials),
    faqList: getStored(STORAGE_FAQS_KEY, generalFaqs),
    contactInfo: getStored(STORAGE_CONTACT_KEY, defaultContactInfo),
    popupConfig: getStored(STORAGE_POPUP_CONFIG_KEY, prodConfig),
    leads: getStored(STORAGE_LEADS_KEY, defaultLeads),
  };
}

export function siteReducer(state, action) {
  switch (action.type) {
    case 'SET_KEY':
      return { ...state, [action.key]: action.value };
    case 'RESET_ALL':
      return getInitialState();
    default:
      return state;
  }
}
