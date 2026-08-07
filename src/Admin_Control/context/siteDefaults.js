import { phase1Courses } from '../../data/courses';
import { testimonials as initialTestimonials, videoStories } from '../../data/testimonials';
import { generalFaqs } from '../../data/faq';
import productionData from '../../data/productionData.json';

export const STORAGE_SLIDES_KEY = 'ezer_hero_slides:v10_executive_pricing_busted';
export const STORAGE_COURSES_KEY = 'ezer_courses:v10_executive_pricing_busted';
export const STORAGE_PLATFORM_KEY = 'ezer_platform_def:v10_executive_pricing_busted';
export const STORAGE_SUPPORT_CARDS_KEY = 'ezer_support_cards:v10_executive_pricing_busted';
export const STORAGE_TRANSFORMED_KEY = 'ezer_transformed_lives:v10_executive_pricing_busted';
export const STORAGE_OUTCOMES_HEADER_KEY = 'ezer_outcomes_header:v10_executive_pricing_busted';
export const STORAGE_MENTORS_KEY = 'ezer_senior_mentors:v10_executive_pricing_busted';
export const STORAGE_MENTORS_HEADER_KEY = 'ezer_mentors_header:v10_executive_pricing_busted';
export const STORAGE_VIDEOS_KEY = 'ezer_video_testimonials:v10_executive_pricing_busted';
export const STORAGE_TESTIMONIALS_HERO_KEY = 'ezer_testimonials_hero:v10_executive_pricing_busted';
export const STORAGE_WRITTEN_TESTIMONIALS_KEY = 'ezer_written_testimonials:v10_executive_pricing_busted';
export const STORAGE_FAQS_KEY = 'ezer_faqs:v10_executive_pricing_busted';
export const STORAGE_CONTACT_KEY = 'ezer_contact:v10_executive_pricing_busted';
export const STORAGE_POPUP_CONFIG_KEY = 'ezer_popup_config:v10_executive_pricing_busted';
export const STORAGE_LEADS_KEY = 'ezer_leads:v10_executive_pricing_busted';
export const STORAGE_BLOGS_KEY = 'ezer_blogs:v10_executive_pricing_busted';
export const STORAGE_ACHIEVEMENTS_KEY = 'ezer_achievements:v10_executive_pricing_busted';

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
    headline: 'Leading EdTech Platform for Learning in Native Languages & Real IT Skills.',
    sub: "EZER Learning Solutions is India's top tech-driven EdTech platform delivering live online, practical, job-oriented IT courses. Taught by corporate-experienced IT professionals, EZER offers personalized live online training, hands-on labs, 12-month placement support, and up to 3 years of community access.",
    badge: 'Empowering Career Switchers',
  },
  {
    id: 'slide-2',
    url: 'images/hero/devops.avif',
    headline: 'Deploy, Automate, and Scale Like a Real DevOps Engineer',
    sub: 'Master AWS, Azure, GCP, Docker, Kubernetes, Jenkins & Terraform with hands-on production labs.',
    badge: 'Cloud & DevOps Masterclass',
  },
  {
    id: 'slide-3',
    url: 'images/hero/full-stack-development.jpg',
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
  acronymText: '"Helper, Strength, and Support" — acting as a dependable support system that helps students, aspirants, and professionals become job-ready and corporate-relevant.',
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
    image: 'images/hero/hero_section_1.jpg',
    fit: 'cover',
    position: 'center center',
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
    image: 'images/hero/here_section_2.webp',
    fit: 'cover',
    position: 'center center',
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
    image: 'images/hero/full-stack-development.jpg',
    fit: 'cover',
    position: 'center center',
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
    image: 'images/hero/AI_machine_learning.png',
    fit: 'cover',
    position: 'center center',
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
  },
  {
    id: 'tl-3',
    name: 'Ananth Vignesh',
    beforeRole: 'B.Sc Physics Graduate (Non-IT)',
    afterRole: 'Data Analyst',
    salaryHike: '160% Salary Hike',
    story: 'Learning SQL, Power BI, and Python at EZER unlocked my first IT job as a Data Analyst in just 3 months.',
    company: 'Analytics Cloud',
    courseSlug: 'data-analyst',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    id: 'tl-4',
    name: 'Karthik Raja',
    beforeRole: 'Helpdesk Support Tech',
    afterRole: 'Cyber Security Analyst',
    salaryHike: '150% Salary Hike',
    story: 'Ethical hacking and SOC lab training at EZER allowed me to pivot straight into enterprise cyber defense.',
    company: 'SecureTech Solutions',
    courseSlug: 'cyber-security',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    id: 'tl-5',
    name: 'Divya Murali',
    beforeRole: 'Arts Graduate',
    afterRole: 'AI/ML Associate Engineer',
    salaryHike: '175% Salary Hike',
    story: 'The practical Python and machine learning labs along with 1-on-1 mentorship made my career switch seamless.',
    company: 'InnovateAI Labs',
    courseSlug: 'ai-machine-learning',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300&h=300'
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
  sub: 'Discover how EZER Learning Solutions helps freshers and career switchers land high-growth tech jobs.',
  image: 'images/hero/hero_section_1.jpg'
};

export const defaultContactInfo = {
  email: 'support@ezerlearning.com',
  phone: '+91 98765 43210',
  address: 'Ezer Learning Solutions\nPlot No: 90, 3rd Cross Street, Phase-2, Thirumalai Nagar Annexe, Perungudi, Chennai - 600096, Tamil Nadu, India',
  whatsapp: '+91 98765 43210',
  whatsappGroupUrl: 'https://chat.whatsapp.com/EZERStudentCohortOfficial',
  workingHours: 'Mon - Sat: 9:00 AM - 7:00 PM'
};

export const defaultLeads = [];

export const defaultAchievements = [
  {
    id: 'ach-1',
    title: 'EdTech Excellence & Innovation Award 2025',
    issuer: 'National Skill Development Forum',
    year: '2025',
    category: 'Excellence Award',
    image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=800',
    description: 'Recognized as India\'s leading EdTech platform for delivering live online, native-language tech education with verified job outcomes.'
  },
  {
    id: 'ach-2',
    title: 'Top Career Transition Pioneer Award',
    issuer: 'Tech Learning & HR Excellence Guild',
    year: '2024',
    category: 'Placement Award',
    image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=800',
    description: 'Awarded for enabling over 10,000+ non-IT professionals and career switchers to transition into high-paying software engineering roles.'
  },
  {
    id: 'ach-3',
    title: 'Best AI-Integrated Curriculum Design',
    issuer: 'Global EdTech Leadership Summit',
    year: '2024',
    category: 'Innovation Award',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    description: 'Honored for pioneering hands-on AI copilot labs in Full Stack Development, Cloud DevOps, and Data Analytics programs.'
  },
  {
    id: 'ach-4',
    title: '10,000+ Students Upskilled Milestone',
    issuer: 'EZER Learning Solutions Foundation',
    year: '2025',
    category: 'Milestone Honor',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    description: 'Celebrating 10,000+ active learners across Tamil Nadu, Pan-India, and global NRI communities achieving 100% career confidence.'
  }
];

export const defaultBlogs = [
  {
    id: 'blog-1',
    title: 'How Non-IT Professionals Are Transitioning Into AI & Software Development in 2025',
    slug: 'how-non-it-professionals-transition-into-ai',
    category: 'Career Guide',
    author: 'EZER Academic Board',
    date: 'August 2, 2025',
    summary: 'Discover the exact step-by-step roadmap used by non-tech switchers to master Full Stack AI engineering and land high-growth tech roles.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
    content: 'Transitioning into technology does not require a Computer Science degree. With live online instructor-led training in native languages, practical production projects, and 12-month placement assistance, non-IT candidates are closing skill gaps faster than ever.',
    featured: true
  },
  {
    id: 'blog-2',
    title: 'EZER Learning Solutions Honored at EdTech Excellence Awards 2025',
    slug: 'ezer-honored-at-edtech-excellence-awards-2025',
    category: 'Company News',
    author: 'EZER Editorial Team',
    date: 'July 28, 2025',
    summary: 'EZER wins national recognition for native language IT education, outcome-driven mentorship, and outstanding placement metrics.',
    image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=800',
    content: 'We are thrilled to announce that EZER Learning Solutions has been awarded the EdTech Excellence & Innovation Award for 2025. This achievement reflects our commitment to democratizing tech education.',
    featured: true
  }
];

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

export const STORAGE_EXECUTIVE_LEADERS_KEY = 'ezer_executive_leaders:v1';

export const defaultExecutiveLeaders = [
  {
    id: 'exec-1',
    roleTag: 'CEO',
    roleName: 'Chief Executive Officer',
    name: 'Dr. Subramanian R',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=700&h=700',
    tagline: 'From problem to solution.',
    headline: 'A creative and strategic transformation partner for bold businesses.',
    bio: 'Visionary Leader driving native language tech education, corporate placement partnerships, and pan-India EdTech growth.'
  },
  {
    id: 'exec-2',
    roleTag: 'CFO',
    roleName: 'Chief Financial Officer',
    name: 'Meenakshi Sundaram',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=700&h=700',
    tagline: 'Financial integrity & student affordability.',
    headline: 'Pioneering accessible scholarship funds for high-growth tech careers.',
    bio: 'Strategic Financial Lead overseeing student scholarship funds and affordable learning models.'
  },
  {
    id: 'exec-3',
    roleTag: 'CMTO',
    roleName: 'Chief Marketing Technology Officer',
    name: 'Anand Kumar K',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=700&h=700',
    tagline: 'Curriculum innovation & hands-on labs.',
    headline: 'Architecting AI-integrated practical capstones for production readiness.',
    bio: 'Pioneer of AI-integrated lab curriculums and corporate technical readiness standards.'
  }
];

export function getInitialState() {
  const prodConfig = defaultPopupConfig;
  const storedDef = getStored(STORAGE_PLATFORM_KEY, defaultPlatformDef);
  const safePlatformDef = (storedDef && typeof storedDef === 'object') ? { ...defaultPlatformDef, ...storedDef } : defaultPlatformDef;

  const rawExec = getStored(STORAGE_EXECUTIVE_LEADERS_KEY, defaultExecutiveLeaders) || defaultExecutiveLeaders;
  const safeExec = (Array.isArray(rawExec) ? rawExec : defaultExecutiveLeaders).map((leader) => {
    if (leader.id === 'exec-3' || leader.roleTag === 'CTHM' || leader.roleName === 'Chief Tech & Academic Officer') {
      return {
        ...leader,
        roleTag: 'CMTO',
        roleName: 'Chief Marketing Technology Officer'
      };
    }
    return leader;
  });

  return {
    heroSlides: getStored(STORAGE_SLIDES_KEY, defaultSlides) || defaultSlides,
    courses: getStored(STORAGE_COURSES_KEY, phase1Courses) || phase1Courses,
    ezerDefinition: safePlatformDef,
    supportCards: getStored(STORAGE_SUPPORT_CARDS_KEY, defaultSupportCards) || defaultSupportCards,
    transformedLives: getStored(STORAGE_TRANSFORMED_KEY, defaultTransformedLives) || defaultTransformedLives,
    outcomesHeader: getStored(STORAGE_OUTCOMES_HEADER_KEY, defaultOutcomesHeader) || defaultOutcomesHeader,
    seniorMentors: getStored(STORAGE_MENTORS_KEY, defaultSeniorMentors) || defaultSeniorMentors,
    mentorsHeader: getStored(STORAGE_MENTORS_HEADER_KEY, defaultMentorsHeader) || defaultMentorsHeader,
    videoTestimonials: getStored(STORAGE_VIDEOS_KEY, defaultVideoTestimonials) || defaultVideoTestimonials,
    testimonialsHero: getStored(STORAGE_TESTIMONIALS_HERO_KEY, defaultTestimonialsHero) || defaultTestimonialsHero,
    writtenTestimonials: getStored(STORAGE_WRITTEN_TESTIMONIALS_KEY, initialTestimonials) || initialTestimonials,
    faqList: getStored(STORAGE_FAQS_KEY, generalFaqs) || generalFaqs,
    contactInfo: getStored(STORAGE_CONTACT_KEY, defaultContactInfo) || defaultContactInfo,
    popupConfig: getStored(STORAGE_POPUP_CONFIG_KEY, prodConfig) || prodConfig,
    leads: getStored(STORAGE_LEADS_KEY, defaultLeads) || defaultLeads,
    blogs: getStored(STORAGE_BLOGS_KEY, defaultBlogs) || defaultBlogs,
    achievements: getStored(STORAGE_ACHIEVEMENTS_KEY, defaultAchievements) || defaultAchievements,
    executiveLeaders: safeExec,
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
