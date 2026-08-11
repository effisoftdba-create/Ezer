import { phase1Courses } from '../../../data/courses';
import { testimonials as initialTestimonials, videoStories } from '../../../data/testimonials';
import { generalFaqs } from '../../../data/faq';
import productionData from '../../../data/productionData.json';

export const STORAGE_SLIDES_KEY = 'ezer_hero_slides:v18_clean_image_paths';

export const defaultSlides = [
  {
    id: 'slide-1',
    url: 'images/hero/hero_section_1.jpg',
    headline: 'Leading EdTech Platform for Learning in Native Languages & Real IT Skills.',
    sub: "EZER Learning Solutions is India's top tech-driven platform delivering live online, job-oriented IT courses. Learn from corporate tech practitioners with hands-on labs, 12-month placement assistance, and 3-year community access.",
    badge: 'Empowering Career Switchers',
    position: 'center center',
    fit: 'cover',
    zoom: 1
  },
  {
    id: 'slide-2',
    url: 'images/hero/devops.avif',
    headline: 'Deploy, Automate, and Scale Like a Real DevOps Engineer',
    sub: 'Master AWS, Azure, GCP, Docker, Kubernetes, Jenkins & Terraform with real production cloud labs. Build enterprise CI/CD pipelines and accelerate your IT career switch with dedicated 1-on-1 expert mentor reviews.',
    badge: 'Cloud & DevOps Masterclass',
    position: 'center center',
    fit: 'cover',
    zoom: 1
  },
  {
    id: 'slide-3',
    url: 'images/hero/full-stack-development.jpg',
    headline: 'Build Modern AI-Powered Web Applications',
    sub: 'Master React, Node.js, Next.js & PostgreSQL supercharged with cutting-edge AI coding assistants. Develop full-stack scalable web applications from scratch and build a high-impact portfolio that gets you hired.',
    badge: 'Full Stack with AI',
    position: 'center center',
    fit: 'cover',
    zoom: 1
  },
  {
    id: 'slide-4',
    url: 'images/hero/AI_machine_learning.png',
    headline: 'From Python Basics to Deploying Real ML Models',
    sub: 'A hands-on, project-based path into AI & Machine Learning — live, instructor-led, and practical. Learn data engineering, neural networks, and model deployment strategies backed by 12-month career placement support.',
    badge: 'AI & Data Science Track',
    position: 'center center',
    fit: 'cover',
    zoom: 1
  },
];
export const STORAGE_COURSES_KEY = 'ezer_courses:v18_clean_image_paths';
export const STORAGE_PLATFORM_KEY = 'ezer_platform_def:v18_clean_image_paths';
export const STORAGE_SUPPORT_CARDS_KEY = 'ezer_support_cards:v18_clean_image_paths';
export const STORAGE_TRANSFORMED_KEY = 'ezer_transformed_lives:v18_clean_image_paths';
export const STORAGE_OUTCOMES_HEADER_KEY = 'ezer_outcomes_header:v18_clean_image_paths';
export const STORAGE_MENTORS_KEY = 'ezer_senior_mentors:v18_clean_image_paths';
export const STORAGE_MENTORS_HEADER_KEY = 'ezer_mentors_header:v18_clean_image_paths';
export const STORAGE_VIDEOS_KEY = 'ezer_video_testimonials:v18_clean_image_paths';
export const STORAGE_TESTIMONIALS_HERO_KEY = 'ezer_testimonials_hero:v18_clean_image_paths';
export const STORAGE_WRITTEN_TESTIMONIALS_KEY = 'ezer_written_testimonials:v18_clean_image_paths';
export const STORAGE_FAQS_KEY = 'ezer_faqs:v18_clean_image_paths';
export const STORAGE_CONTACT_KEY = 'ezer_contact:v18_clean_image_paths';
export const STORAGE_POPUP_CONFIG_KEY = 'ezer_popup_config:v18_clean_image_paths';
export const STORAGE_LEADS_KEY = 'ezer_leads:v18_clean_image_paths';
export const STORAGE_BLOGS_KEY = 'ezer_blogs:v18_clean_image_paths';
export const STORAGE_ACHIEVEMENTS_KEY = 'ezer_achievements:v18_clean_image_paths';
export const STORAGE_EXECUTIVE_LEADERS_KEY = 'ezer_executive_leaders:v18_clean_image_paths';
export const STORAGE_HIRING_PARTNERS_KEY = 'ezer_hiring_partners:v18_clean_image_paths';
export const STORAGE_PAYMENT_CONFIG_KEY = 'ezer_payment_config:v18_clean_image_paths';

export const defaultPaymentConfig = {
  enrollmentPrice: 9,
  originalPrice: 49999,
  discountBadge: '99% OFF SPECIAL',
  priceLabel: 'Full Course Access + Mentorship',
  enrollmentLabel: 'INSTANT COHORT ENROLLMENT',
  paymentMethods: [
    { id: 'upi', label: 'UPI / GooglePay / PhonePe / Paytm', subtitle: 'Instant QR Code Scan & Pay', enabled: true },
    { id: 'card', label: 'Credit Card / Debit Card', subtitle: 'Visa, MasterCard, RuPay, Amex', enabled: true }
  ],
  payButtonLabel: 'Pay & Unlock Course',
  successMessage: 'Welcome to EZER Learning Solutions!',
  successSubtext: 'Your seat has been locked successfully.'
};

export const defaultHiringPartners = [
  { id: 'partner-1', name: 'TCS Tata', image: '<svg viewBox="0 0 190 50" style="height:28px"><path d="M10 12 L45 12 M27.5 12 L27.5 40" stroke="#000648" stroke-width="6" stroke-linecap="square"/><text x="50" y="38" font-family="sans-serif" font-size="30" font-weight="900" fill="#000648" letter-spacing="-0.5px">TCS</text><rect x="115" y="16" width="3" height="24" fill="#f2b733"/><text x="126" y="36" font-family="sans-serif" font-size="16" font-weight="900" fill="#000648" letter-spacing="1px">TATA</text></svg>', row: 'Row 1', status: 'Active', imagePosition: 'center center', imageFit: 'contain' },
  { id: 'partner-2', name: 'Infosys', image: '<svg viewBox="0 0 150 50" style="height:28px"><text x="5" y="36" font-family="sans-serif" font-size="32" font-weight="900" fill="#006699" letter-spacing="-1px">Infosys</text></svg>', row: 'Row 1', status: 'Active', imagePosition: 'center center', imageFit: 'contain' },
  { id: 'partner-3', name: 'Wipro', image: '<svg viewBox="0 0 150 50" style="height:28px"><circle cx="16" cy="18" r="5" fill="#e42528"/><circle cx="28" cy="18" r="5" fill="#f2b733"/><circle cx="16" cy="30" r="5" fill="#006699"/><circle cx="28" cy="30" r="5" fill="#0dba4b"/><text x="42" y="36" font-family="sans-serif" font-size="28" font-weight="900" fill="#000648">wipro</text></svg>', row: 'Row 1', status: 'Active', imagePosition: 'center center', imageFit: 'contain' },
  { id: 'partner-4', name: 'HCLTech', image: '<svg viewBox="0 0 170 50" style="height:28px"><text x="5" y="36" font-family="sans-serif" font-size="32" font-weight="900" fill="#00529b">HCL</text><text x="80" y="36" font-family="sans-serif" font-size="24" font-weight="800" fill="#f2b733">Tech</text></svg>', row: 'Row 1', status: 'Active', imagePosition: 'center center', imageFit: 'contain' },
  { id: 'partner-5', name: 'Zoho Corporation', image: '<svg viewBox="0 0 160 50" style="height:28px"><rect x="4" y="10" width="28" height="28" rx="6" fill="#e42528"/><text x="11" y="32" font-family="sans-serif" font-size="20" font-weight="900" fill="#fff">Z</text><rect x="36" y="10" width="28" height="28" rx="6" fill="#006699"/><text x="42" y="32" font-family="sans-serif" font-size="20" font-weight="900" fill="#fff">O</text><rect x="68" y="10" width="28" height="28" rx="6" fill="#0dba4b"/><text x="74" y="32" font-family="sans-serif" font-size="20" font-weight="900" fill="#fff">H</text><rect x="100" y="10" width="28" height="28" rx="6" fill="#f2b733"/><text x="106" y="32" font-family="sans-serif" font-size="20" font-weight="900" fill="#000648">O</text></svg>', row: 'Row 1', status: 'Active', imagePosition: 'center center', imageFit: 'contain' },
  { id: 'partner-6', name: 'Capgemini', image: '<svg viewBox="0 0 190 50" style="height:28px"><path d="M12 25 C12 15, 25 10, 25 25 C25 40, 38 35, 38 25" stroke="#0070ad" stroke-width="5" fill="none" stroke-linecap="round"/><text x="48" y="34" font-family="sans-serif" font-size="26" font-weight="900" fill="#0070ad">Capgemini</text></svg>', row: 'Row 2', status: 'Active', imagePosition: 'center center', imageFit: 'contain' },
  { id: 'partner-7', name: 'Accenture', image: '<svg viewBox="0 0 180 50" style="height:28px"><text x="5" y="36" font-family="sans-serif" font-size="28" font-weight="900" fill="#000648">accenture</text><path d="M136 12 L150 22 L136 32" stroke="#a100ff" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>', row: 'Row 2', status: 'Active', imagePosition: 'center center', imageFit: 'contain' },
  { id: 'partner-8', name: 'Cognizant', image: '<svg viewBox="0 0 170 50" style="height:28px"><text x="5" y="35" font-family="sans-serif" font-size="27" font-weight="900" fill="#0033a0">Cognizant</text></svg>', row: 'Row 2', status: 'Active', imagePosition: 'center center', imageFit: 'contain' },
  { id: 'partner-9', name: 'Amazon Web Services', image: '<svg viewBox="0 0 150 50" style="height:28px"><text x="5" y="32" font-family="sans-serif" font-size="28" font-weight="900" fill="#131921">amazon</text><path d="M10 38 Q 55 46, 95 35" fill="none" stroke="#ff9900" stroke-width="3.5" stroke-linecap="round"/><path d="M90 32 L98 35 L93 40" fill="none" stroke="#ff9900" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>', row: 'Row 2', status: 'Active', imagePosition: 'center center', imageFit: 'contain' },
  { id: 'partner-10', name: 'Google Cloud', image: '<svg viewBox="0 0 150 50" style="height:28px"><text x="5" y="36" font-family="sans-serif" font-size="32" font-weight="900" fill="#4285F4">G</text><text x="34" y="36" font-family="sans-serif" font-size="32" font-weight="900" fill="#EA4335">o</text><text x="56" y="36" font-family="sans-serif" font-size="32" font-weight="900" fill="#FBBC05">o</text><text x="78" y="36" font-family="sans-serif" font-size="32" font-weight="900" fill="#4285F4">g</text><text x="100" y="36" font-family="sans-serif" font-size="32" font-weight="900" fill="#34A853">l</text><text x="110" y="36" font-family="sans-serif" font-size="32" font-weight="900" fill="#EA4335">e</text></svg>', row: 'Row 2', status: 'Active', imagePosition: 'center center', imageFit: 'contain' },
  { id: 'partner-11', name: 'Microsoft Azure', image: '<svg viewBox="0 0 170 50" style="height:28px"><rect x="5" y="10" width="13" height="13" fill="#f25022"/><rect x="21" y="10" width="13" height="13" fill="#7fba00"/><rect x="5" y="26" width="13" height="13" fill="#00a4ef"/><rect x="21" y="26" width="13" height="13" fill="#ffb900"/><text x="42" y="34" font-family="sans-serif" font-size="26" font-weight="800" fill="#475569">Microsoft</text></svg>', row: 'Row 3', status: 'Active', imagePosition: 'center center', imageFit: 'contain' },
  { id: 'partner-12', name: 'IBM Global', image: '<svg viewBox="0 0 130 50" style="height:28px"><text x="5" y="36" font-family="monospace" font-size="36" font-weight="900" fill="#052FAD" letter-spacing="2px">IBM</text></svg>', row: 'Row 3', status: 'Active', imagePosition: 'center center', imageFit: 'contain' },
  { id: 'partner-13', name: 'Freshworks', image: '<svg viewBox="0 0 180 50" style="height:28px"><circle cx="18" cy="25" r="12" fill="#ff5a5f"/><text x="36" y="34" font-family="sans-serif" font-size="24" font-weight="900" fill="#000648">freshworks</text></svg>', row: 'Row 3', status: 'Active', imagePosition: 'center center', imageFit: 'contain' },
  { id: 'partner-14', name: 'L&T Technology Services', image: '<svg viewBox="0 0 160 50" style="height:28px"><text x="5" y="36" font-family="sans-serif" font-size="32" font-weight="900" fill="#0033a0">L&T</text><text x="70" y="36" font-family="sans-serif" font-size="22" font-weight="800" fill="#f2b733">Tech</text></svg>', row: 'Row 3', status: 'Active', imagePosition: 'center center', imageFit: 'contain' },
  { id: 'partner-15', name: 'Tech Mahindra', image: '<svg viewBox="0 0 210 50" style="height:28px"><text x="5" y="36" font-family="sans-serif" font-size="26" font-weight="900" fill="#e42528">Tech</text><text x="75" y="36" font-family="sans-serif" font-size="26" font-weight="900" fill="#000648">Mahindra</text></svg>', row: 'Row 3', status: 'Active', imagePosition: 'center center', imageFit: 'contain' }
];

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



export const STORAGE_ABOUT_VIDEOS_KEY = 'ezer_about_videos:v20_two_videos';

export const defaultAboutVideos = [
  {
    id: 'vid-1',
    tag: 'VIDEO SHOWCASE 01',
    title: 'Platform & Learning Methodology in Action',
    description: 'Watch how our corporate-experienced instructors deliver live interactive classes, hands-on cloud labs, and personalized career counseling.',
    videoUrl: 'https://www.youtube.com/watch?v=aircAruvnKk',
    poster: 'images/hero/hero_section_1.jpg'
  },
  {
    id: 'vid-2',
    tag: 'VIDEO SHOWCASE 02',
    title: 'Live Hands-On Cloud Labs & Placement Support',
    description: 'Explore how students gain real enterprise experience working with production CI/CD pipelines, AWS sandboxes, and mock technical interviews.',
    videoUrl: 'https://www.youtube.com/watch?v=aircAruvnKk',
    poster: 'images/hero/full-stack-development.jpg'
  }
];

export const defaultPlatformDef = {
  tag: 'Empowering Career Switchers',
  headline: 'Leading EdTech Platform for Learning in Native Languages & Real IT Skills.',
  description: "EZER Learning Solutions is India's top tech-driven EdTech platform delivering live online, practical, job-oriented IT courses. Taught by corporate-experienced IT professionals, EZER offers personalized live online training, hands-on labs, 12-month placement support, and up to 3 years of community access.",
  image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=700&h=800',
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
    image: 'images/hero/optimized/hero_section_1.jpg',
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
  image: 'images/hero/optimized/hero_section_1.jpg'
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
    title: 'How Non-IT Professionals Are Transitioning Into AI & Software Development in 2026',
    slug: 'how-non-it-professionals-transition-into-ai',
    category: 'Career Guide',
    author: 'EZER Academic Board',
    date: 'August 2, 2026',
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
    featured: false
  },
  {
    id: 'blog-3',
    title: 'Native Language Learning: Breaking Barriers for Non-IT Career Aspirants',
    slug: 'native-language-learning-breaking-barriers',
    category: 'Education Impact',
    author: 'EZER Research Dept',
    date: 'August 5, 2025',
    summary: 'How learning complex software concepts in Tamil, Hindi, and English accelerates comprehension and boosts interview confidence.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
    content: 'Comprehending complex data structures, cloud architectures, and AI API integrations is significantly faster when explained in native languages first alongside industry-standard English code syntax.',
    featured: false
  },
  {
    id: 'blog-4',
    title: 'The Rise of AI-Assisted Full Stack Developers in Top Tech Corporates',
    slug: 'rise-of-ai-assisted-full-stack-developers',
    category: 'Industry Trends',
    author: 'EZER Tech Desk',
    date: 'August 8, 2025',
    summary: 'Why modern engineering teams look for developers who leverage AI tools to build scalable production apps in record time.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    content: 'Generative AI and automated coding assistants have shifted software engineering requirements towards developer productivity, architectural design, and prompt-driven full-stack development.',
    featured: false
  }
];

export function getStored(key, fallback) {
  try {
    const item = localStorage.getItem(key);
    if (!item) return fallback;
    const parsed = JSON.parse(item);
    if (parsed !== null && parsed !== undefined) {
      const jsonStr = JSON.stringify(parsed);
      if (jsonStr.includes('.webp') || jsonStr.includes('/optimized/')) {
        const cleanedStr = jsonStr
          .replace(/ezer_shield_logo_optimized\.webp/g, 'ezer_shield_logo.png')
          .replace(/logo_white_border_optimized\.webp/g, 'logo_white_border.png')
          .replace(/AI_machine_learning\.webp/g, 'AI_machine_learning.png')
          .replace(/Spoken_english\.webp/g, 'Spoken_english.png')
          .replace(/here_section_2\.webp/g, 'hero_section_1.jpg')
          .replace(/_optimized\.webp/g, '.png')
          .replace(/\/optimized\//g, '/');
        const cleaned = JSON.parse(cleanedStr);
        safeSetStorage(key, cleaned);
        return cleaned;
      }
      return parsed;
    }
    return fallback;
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

export const defaultExecutiveLeaders = [
  {
    id: 'exec-1',
    roleTag: 'CEO',
    roleName: 'Chief Executive Officer',
    name: 'Dr. Subramanian R',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=700&h=700',
    tagline: 'From problem to solution.',
    headline: 'A creative and strategic transformation partner for bold businesses.',
    bio: 'Visionary Leader driving native language tech education, corporate placement partnerships, and pan-India EdTech growth.',
    imagePosition: 'center top',
    position: 'center top',
    imageFit: 'cover',
    fit: 'cover',
    imageZoom: 1,
    zoom: 1
  },
  {
    id: 'exec-2',
    roleTag: 'CFO',
    roleName: 'Chief Financial Officer',
    name: 'Meenakshi Sundaram',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=700&h=700',
    tagline: 'Financial integrity & student affordability.',
    headline: 'Pioneering accessible scholarship funds for high-growth tech careers.',
    bio: 'Strategic Financial Lead overseeing student scholarship funds and affordable learning models.',
    imagePosition: 'center top',
    position: 'center top',
    imageFit: 'cover',
    fit: 'cover',
    imageZoom: 1,
    zoom: 1
  },
  {
    id: 'exec-3',
    roleTag: 'CMTO',
    roleName: 'Chief Marketing Technology Officer',
    name: 'Anand Kumar K',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=700&h=700',
    tagline: 'Curriculum innovation & hands-on labs.',
    headline: 'Architecting AI-integrated practical capstones for production readiness.',
    bio: 'Pioneer of AI-integrated lab curriculums and corporate technical readiness standards.',
    imagePosition: 'center top',
    position: 'center top',
    imageFit: 'cover',
    fit: 'cover',
    imageZoom: 1,
    zoom: 1
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
    blogs: (() => {
      const raw = getStored(STORAGE_BLOGS_KEY, defaultBlogs);
      if (!Array.isArray(raw) || raw.length < defaultBlogs.length) {
        return defaultBlogs;
      }
      return raw;
    })(),
    achievements: getStored(STORAGE_ACHIEVEMENTS_KEY, defaultAchievements) || defaultAchievements,
    executiveLeaders: safeExec,
    hiringPartners: getStored(STORAGE_HIRING_PARTNERS_KEY, defaultHiringPartners) || defaultHiringPartners,
    paymentConfig: getStored(STORAGE_PAYMENT_CONFIG_KEY, defaultPaymentConfig) || defaultPaymentConfig,
    aboutVideos: getStored(STORAGE_ABOUT_VIDEOS_KEY, defaultAboutVideos) || defaultAboutVideos
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
