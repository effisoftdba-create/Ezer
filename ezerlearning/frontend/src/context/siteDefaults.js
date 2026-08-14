import { phase1Courses } from '../data/courses';
import { testimonials as initialTestimonials, videoStories } from '../data/testimonials';
import { generalFaqs } from '../data/faq';
import productionData from '../data/productionData.json';

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
export const STORAGE_LEADS_KEY = 'ezer_leads:v21_clean_zero';
export const STORAGE_BLOGS_KEY = 'ezer_blogs:v18_clean_image_paths';
export const STORAGE_ACHIEVEMENTS_KEY = 'ezer_achievements:v18_clean_image_paths';
export const STORAGE_EXECUTIVE_LEADERS_KEY = 'ezer_executive_leaders:v18_clean_image_paths';
export const STORAGE_HIRING_PARTNERS_KEY = 'ezer_hiring_partners:v18_clean_image_paths';
export const STORAGE_PAYMENT_CONFIG_KEY = 'ezer_payment_config:v18_clean_image_paths';
export const STORAGE_PAYMENTS_KEY = 'ezer_payments_list:v21_clean_zero';
export const STORAGE_ADMIN_USERS_KEY = 'ezer_admin_users:v18_clean_image_paths';

export const defaultPayments = [];
export const defaultAdminUsers = [
  {
    id: 'user-01',
    email: 'effisoftdba@gmail.com',
    name: 'Effisoft Super Admin',
    role: 'SUPER_ADMIN',
    password: 'dba@effisoft$123',
    allowedTabs: '*',
    status: 'ACTIVE',
    createdAt: '2026-01-01T00:00:00.000Z'
  },
  {
    id: 'user-02',
    email: 'admin@ezer.com',
    name: 'Ezer Admin',
    role: 'ADMIN',
    password: 'admin@ezer$123',
    allowedTabs: '*',
    status: 'ACTIVE',
    createdAt: '2026-01-01T00:00:00.000Z'
  },
  {
    id: 'user-03',
    email: 'staff@ezer.com',
    name: 'Ezer Staff',
    role: 'STAFF',
    password: 'staff@ezer$123',
    allowedTabs: ['leads', 'courses', 'blog'],
    status: 'ACTIVE',
    createdAt: '2026-01-01T00:00:00.000Z'
  }
];

export const defaultPaymentConfig = {
  enrollmentPrice: 9,
  originalPrice: 49999,
  discountBadge: '99% OFF SPECIAL',
  priceLabel: 'Full Course Access + Mentorship',
  enrollmentLabel: 'INSTANT COHORT ENROLLMENT',
  integrationMode: 'direct_p2m', // 'direct_p2m' | 'gateway'
  upiVpa: 'ezerlearning@okaxis',
  upiMerchantName: 'EZER Learning Solutions Pvt. Ltd.',
  mccCode: '8220', // Educational Services & Training
  transactionNote: 'EZER Course Enrollment',
  upiQrImageUrl: 'images/payment/upi_qr_code.png',
  utrRegex: '^[0-9]{12}$',
  allowManualUtrSubmission: true,
  paymentMethods: [
    { id: 'upi', label: 'UPI / GooglePay / PhonePe / Paytm', subtitle: 'Instant QR Code Scan & Pay', enabled: true },
    { id: 'card', label: 'Credit Card / Debit Card', subtitle: 'Visa, MasterCard, RuPay, Amex', enabled: true }
  ],
  payButtonLabel: 'Pay & Unlock Course',
  successMessage: 'Welcome to EZER Learning Solutions!',
  successSubtext: 'Your seat has been locked successfully.'
};

export const defaultHiringPartners = [
  { id: 'partner-1', name: 'TCS Tata', image: 'data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%220%200%20190%2050%22%20style%3D%22height%3A28px%22%3E%3Cpath%20d%3D%22M10%2012%20L45%2012%20M27.5%2012%20L27.5%2040%22%20stroke%3D%22%23000648%22%20stroke-width%3D%226%22%20stroke-linecap%3D%22square%22%2F%3E%3Ctext%20x%3D%2250%22%20y%3D%2238%22%20font-family%3D%22sans-serif%22%20font-size%3D%2230%22%20font-weight%3D%22900%22%20fill%3D%22%23000648%22%20letter-spacing%3D%22-0.5px%22%3ETCS%3C%2Ftext%3E%3Crect%20x%3D%22115%22%20y%3D%2216%22%20width%3D%223%22%20height%3D%2224%22%20fill%3D%22%23f2b733%22%2F%3E%3Ctext%20x%3D%22126%22%20y%3D%2236%22%20font-family%3D%22sans-serif%22%20font-size%3D%2216%22%20font-weight%3D%22900%22%20fill%3D%22%23000648%22%20letter-spacing%3D%221px%22%3ETATA%3C%2Ftext%3E%3C%2Fsvg%3E', row: 'Row 1', status: 'Active', imagePosition: 'center center', imageFit: 'contain' },
  { id: 'partner-2', name: 'Infosys', image: 'data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%220%200%20150%2050%22%20style%3D%22height%3A28px%22%3E%3Ctext%20x%3D%225%22%20y%3D%2236%22%20font-family%3D%22sans-serif%22%20font-size%3D%2232%22%20font-weight%3D%22900%22%20fill%3D%22%23006699%22%20letter-spacing%3D%22-1px%22%3EInfosys%3C%2Ftext%3E%3C%2Fsvg%3E', row: 'Row 1', status: 'Active', imagePosition: 'center center', imageFit: 'contain' },
  { id: 'partner-3', name: 'Wipro', image: 'data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%220%200%20150%2050%22%20style%3D%22height%3A28px%22%3E%3Ccircle%20cx%3D%2216%22%20cy%3D%2218%22%20r%3D%225%22%20fill%3D%22%23e42528%22%2F%3E%3Ccircle%20cx%3D%2228%22%20cy%3D%2218%22%20r%3D%225%22%20fill%3D%22%23f2b733%22%2F%3E%3Ccircle%20cx%3D%2216%22%20cy%3D%2230%22%20r%3D%225%22%20fill%3D%22%23006699%22%2F%3E%3Ccircle%20cx%3D%2228%22%20cy%3D%2230%22%20r%3D%225%22%20fill%3D%22%230dba4b%22%2F%3E%3Ctext%20x%3D%2242%22%20y%3D%2236%22%20font-family%3D%22sans-serif%22%20font-size%3D%2228%22%20font-weight%3D%22900%22%20fill%3D%22%23000648%22%3Ewipro%3C%2Ftext%3E%3C%2Fsvg%3E', row: 'Row 1', status: 'Active', imagePosition: 'center center', imageFit: 'contain' },
  { id: 'partner-4', name: 'HCLTech', image: 'data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%220%200%20170%2050%22%20style%3D%22height%3A28px%22%3E%3Ctext%20x%3D%225%22%20y%3D%2236%22%20font-family%3D%22sans-serif%22%20font-size%3D%2232%22%20font-weight%3D%22900%22%20fill%3D%22%2300529b%22%3EHCL%3C%2Ftext%3E%3Ctext%20x%3D%2280%22%20y%3D%2236%22%20font-family%3D%22sans-serif%22%20font-size%3D%2224%22%20font-weight%3D%22800%22%20fill%3D%22%23f2b733%22%3ETech%3C%2Ftext%3E%3C%2Fsvg%3E', row: 'Row 1', status: 'Active', imagePosition: 'center center', imageFit: 'contain' },
  { id: 'partner-5', name: 'Zoho Corporation', image: 'data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%220%200%20160%2050%22%20style%3D%22height%3A28px%22%3E%3Crect%20x%3D%224%22%20y%3D%2210%22%20width%3D%2228%22%20height%3D%2228%22%20rx%3D%226%22%20fill%3D%22%23e42528%22%2F%3E%3Ctext%20x%3D%2211%22%20y%3D%2232%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23fff%22%3EZ%3C%2Ftext%3E%3Crect%20x%3D%2236%22%20y%3D%2210%22%20width%3D%2228%22%20height%3D%2228%22%20rx%3D%226%22%20fill%3D%22%23006699%22%2F%3E%3Ctext%20x%3D%2242%22%20y%3D%2232%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23fff%22%3EO%3C%2Ftext%3E%3Crect%20x%3D%2268%22%20y%3D%2210%22%20width%3D%2228%22%20height%3D%2228%22%20rx%3D%226%22%20fill%3D%22%230dba4b%22%2F%3E%3Ctext%20x%3D%2274%22%20y%3D%2232%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23fff%22%3EH%3C%2Ftext%3E%3Crect%20x%3D%22100%22%20y%3D%2210%22%20width%3D%2228%22%20height%3D%2228%22%20rx%3D%226%22%20fill%3D%22%23f2b733%22%2F%3E%3Ctext%20x%3D%22106%22%20y%3D%2232%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000648%22%3EO%3C%2Ftext%3E%3C%2Fsvg%3E', row: 'Row 1', status: 'Active', imagePosition: 'center center', imageFit: 'contain' },
  { id: 'partner-6', name: 'Capgemini', image: 'data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%220%200%20190%2050%22%20style%3D%22height%3A28px%22%3E%3Cpath%20d%3D%22M12%2025%20C12%2015%2C%2025%2010%2C%2025%2025%20C25%2040%2C%2038%2035%2C%2038%2025%22%20stroke%3D%22%230070ad%22%20stroke-width%3D%225%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%2F%3E%3Ctext%20x%3D%2248%22%20y%3D%2234%22%20font-family%3D%22sans-serif%22%20font-size%3D%2226%22%20font-weight%3D%22900%22%20fill%3D%22%230070ad%22%3ECapgemini%3C%2Ftext%3E%3C%2Fsvg%3E', row: 'Row 2', status: 'Active', imagePosition: 'center center', imageFit: 'contain' },
  { id: 'partner-7', name: 'Accenture', image: 'data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%220%200%20180%2050%22%20style%3D%22height%3A28px%22%3E%3Ctext%20x%3D%225%22%20y%3D%2236%22%20font-family%3D%22sans-serif%22%20font-size%3D%2228%22%20font-weight%3D%22900%22%20fill%3D%22%23000648%22%3Eaccenture%3C%2Ftext%3E%3Cpath%20d%3D%22M136%2012%20L150%2022%20L136%2032%22%20stroke%3D%22%23a100ff%22%20stroke-width%3D%225%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E', row: 'Row 2', status: 'Active', imagePosition: 'center center', imageFit: 'contain' },
  { id: 'partner-8', name: 'Cognizant', image: 'data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%220%200%20170%2050%22%20style%3D%22height%3A28px%22%3E%3Ctext%20x%3D%225%22%20y%3D%2235%22%20font-family%3D%22sans-serif%22%20font-size%3D%2227%22%20font-weight%3D%22900%22%20fill%3D%22%230033a0%22%3ECognizant%3C%2Ftext%3E%3C%2Fsvg%3E', row: 'Row 2', status: 'Active', imagePosition: 'center center', imageFit: 'contain' },
  { id: 'partner-9', name: 'Amazon Web Services', image: 'data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20160%2040%22%20style%3D%22height%3A28px%22%3E%3Ctext%20x%3D%225%22%20y%3D%2224%22%20font-family%3D%22sans-serif%22%20font-size%3D%2224%22%20font-weight%3D%22900%22%20fill%3D%22%23000648%22%3Eamazon%3C%2Ftext%3E%3Cpath%20d%3D%22M10%2030%20Q%2050%2038%2C%2090%2028%22%20fill%3D%22none%22%20stroke%3D%22%23ff9900%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M86%2025%20L93%2028%20L89%2033%22%20fill%3D%22none%22%20stroke%3D%22%23ff9900%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E', row: 'Row 2', status: 'Active', imagePosition: 'center center', imageFit: 'contain' },
  { id: 'partner-10', name: 'Google Cloud', image: 'data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%220%200%20150%2050%22%20style%3D%22height%3A28px%22%3E%3Ctext%20x%3D%225%22%20y%3D%2236%22%20font-family%3D%22sans-serif%22%20font-size%3D%2232%22%20font-weight%3D%22900%22%20fill%3D%22%234285F4%22%3EG%3C%2Ftext%3E%3Ctext%20x%3D%2234%22%20y%3D%2236%22%20font-family%3D%22sans-serif%22%20font-size%3D%2232%22%20font-weight%3D%22900%22%20fill%3D%22%23EA4335%22%3Eo%3C%2Ftext%3E%3Ctext%20x%3D%2256%22%20y%3D%2236%22%20font-family%3D%22sans-serif%22%20font-size%3D%2232%22%20font-weight%3D%22900%22%20fill%3D%22%23FBBC05%22%3Eo%3C%2Ftext%3E%3Ctext%20x%3D%2278%22%20y%3D%2236%22%20font-family%3D%22sans-serif%22%20font-size%3D%2232%22%20font-weight%3D%22900%22%20fill%3D%22%234285F4%22%3Eg%3C%2Ftext%3E%3Ctext%20x%3D%22100%22%20y%3D%2236%22%20font-family%3D%22sans-serif%22%20font-size%3D%2232%22%20font-weight%3D%22900%22%20fill%3D%22%2334A853%22%3El%3C%2Ftext%3E%3Ctext%20x%3D%22110%22%20y%3D%2236%22%20font-family%3D%22sans-serif%22%20font-size%3D%2232%22%20font-weight%3D%22900%22%20fill%3D%22%23EA4335%22%3Ee%3C%2Ftext%3E%3C%2Fsvg%3E', row: 'Row 2', status: 'Active', imagePosition: 'center center', imageFit: 'contain' },
  { id: 'partner-11', name: 'Microsoft Azure', image: 'data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%220%200%20170%2050%22%20style%3D%22height%3A28px%22%3E%3Crect%20x%3D%225%22%20y%3D%2210%22%20width%3D%2213%22%20height%3D%2213%22%20fill%3D%22%23f25022%22%2F%3E%3Crect%20x%3D%2221%22%20y%3D%2210%22%20width%3D%2213%22%20height%3D%2213%22%20fill%3D%22%237fba00%22%2F%3E%3Crect%20x%3D%225%22%20y%3D%2226%22%20width%3D%2213%22%20height%3D%2213%22%20fill%3D%22%2300a4ef%22%2F%3E%3Crect%20x%3D%2221%22%20y%3D%2226%22%20width%3D%2213%22%20height%3D%2213%22%20fill%3D%22%23ffb900%22%2F%3E%3Ctext%20x%3D%2242%22%20y%3D%2234%22%20font-family%3D%22sans-serif%22%20font-size%3D%2226%22%20font-weight%3D%22800%22%20fill%3D%22%23475569%22%3EMicrosoft%3C%2Ftext%3E%3C%2Fsvg%3E', row: 'Row 3', status: 'Active', imagePosition: 'center center', imageFit: 'contain' },
  { id: 'partner-12', name: 'IBM Global', image: 'data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%220%200%20130%2050%22%20style%3D%22height%3A28px%22%3E%3Ctext%20x%3D%225%22%20y%3D%2236%22%20font-family%3D%22monospace%22%20font-size%3D%2236%22%20font-weight%3D%22900%22%20fill%3D%22%23052FAD%22%20letter-spacing%3D%222px%22%3EIBM%3C%2Ftext%3E%3C%2Fsvg%3E', row: 'Row 3', status: 'Active', imagePosition: 'center center', imageFit: 'contain' },
  { id: 'partner-13', name: 'Freshworks', image: 'data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%220%200%20180%2050%22%20style%3D%22height%3A28px%22%3E%3Ccircle%20cx%3D%2218%22%20cy%3D%2225%22%20r%3D%2212%22%20fill%3D%22%23ff5a5f%22%2F%3E%3Ctext%20x%3D%2236%22%20y%3D%2234%22%20font-family%3D%22sans-serif%22%20font-size%3D%2224%22%20font-weight%3D%22900%22%20fill%3D%22%23000648%22%3Efreshworks%3C%2Ftext%3E%3C%2Fsvg%3E', row: 'Row 3', status: 'Active', imagePosition: 'center center', imageFit: 'contain' },
  { id: 'partner-14', name: 'L&T Technology Services', image: 'data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%220%200%20160%2050%22%20style%3D%22height%3A28px%22%3E%3Ctext%20x%3D%225%22%20y%3D%2236%22%20font-family%3D%22sans-serif%22%20font-size%3D%2232%22%20font-weight%3D%22900%22%20fill%3D%22%230033a0%22%3EL%26T%3C%2Ftext%3E%3Ctext%20x%3D%2270%22%20y%3D%2236%22%20font-family%3D%22sans-serif%22%20font-size%3D%2222%22%20font-weight%3D%22800%22%20fill%3D%22%23f2b733%22%3ETech%3C%2Ftext%3E%3C%2Fsvg%3E', row: 'Row 3', status: 'Active', imagePosition: 'center center', imageFit: 'contain' },
  { id: 'partner-15', name: 'Tech Mahindra', image: 'data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%220%200%20210%2050%22%20style%3D%22height%3A28px%22%3E%3Ctext%20x%3D%225%22%20y%3D%2236%22%20font-family%3D%22sans-serif%22%20font-size%3D%2226%22%20font-weight%3D%22900%22%20fill%3D%22%23e42528%22%3ETech%3C%2Ftext%3E%3Ctext%20x%3D%2275%22%20y%3D%2236%22%20font-family%3D%22sans-serif%22%20font-size%3D%2226%22%20font-weight%3D%22900%22%20fill%3D%22%23000648%22%3EMahindra%3C%2Ftext%3E%3C%2Fsvg%3E', row: 'Row 3', status: 'Active', imagePosition: 'center center', imageFit: 'contain' }
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
export const STORAGE_ABOUT_SHOWCASE_KEY = 'ezer_about_showcase:v1_zigzag';

export const defaultAboutShowcaseCards = [
  {
    id: 'showcase-1',
    tag: 'PRACTICAL LABS & CODE ENCLAVES',
    title: 'Enterprise-Grade Practical Labs & Production Workspaces',
    description: 'Our learners do not just watch lectures—they engineer scalable, enterprise-grade software architectures inside dedicated cloud sandboxes, mastering modern CI/CD pipelines and production-grade tools.',
    badge: 'HANDS-ON SIMULATION',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=900&h=600',
    imagePosition: 'center center',
    imageFit: 'cover',
    points: [
      'Live Industry-Standard Toolchains (Docker, Kubernetes, AWS, Git)',
      'Real Enterprise Project Simulation with Production Deployments',
      'Continuous Feedback on Code Quality & Architecture'
    ]
  },
  {
    id: 'showcase-2',
    tag: '1-ON-1 CORPORATE MENTORSHIP',
    title: 'Collaborative Mentorship by Practicing Corporate Leaders',
    description: 'Receive personalized technical guidance, pair programming sessions, and live architectural code reviews directly from Principal Engineers and Tech Leads working at premier global technology enterprises.',
    badge: 'EXPERT GUIDANCE',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=900&h=600',
    imagePosition: 'center center',
    imageFit: 'cover',
    points: [
      '1-on-1 Personalized Code Reviews & Pair Programming',
      'Rigorous Technical & Behavioral Mock Interviews',
      'Customized Career Roadmaps & Growth Checkpoints'
    ]
  },
  {
    id: 'showcase-3',
    tag: 'CAREER ACCELERATION & RECRUITMENT',
    title: 'Direct Placement Pipelines & Global Career Enablement',
    description: 'We bridge the gap between skill acquisition and top-tier employment through structured recruitment drives, direct resume shortlisting with 250+ hiring partners, and up to 1-year dedicated placement assistance.',
    badge: 'GLOBAL PLACEMENT',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=900&h=600',
    imagePosition: 'center center',
    imageFit: 'cover',
    points: [
      '250+ Active Global Corporate Hiring Partners',
      'Dedicated Placement Assistance & Job Search Support',
      'Global Opportunities in India, UAE, and Singapore'
    ]
  }
];

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
  headline: 'Our Graduates Get Hired by Leading Tech Firms',
  title: 'Our Graduates Get Hired by Leading Tech Firms',
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
  tag: 'STUDENT SUCCESS STORIES',
  badge: 'STUDENT SUCCESS STORIES',
  headline: 'Real Learners. Real High-Growth IT Careers.',
  sub: 'Discover how EZER Learning Solutions helps freshers, career switchers, and non-IT professionals land high-growth tech roles with personalized live online training and 12-month placement support.',
  image: 'images/hero/hero_section_1.jpg',
  ratingBadge: '4.9/5 Rating (2,500+ Reviews)',
  assistanceBadge: '12-Month Placement Support'
};

export const defaultContactInfo = {
  email: 'support@ezerlearning.com',
  phone: '+91 98765 43210',
  address: 'Ezer Learning Solutions\nPlot No: 90, 3rd Cross Street, Phase-2, Thirumalai Nagar Annexe, Perungudi, Chennai - 600096, Tamil Nadu, India',
  whatsapp: '+91 98765 43210',
  whatsappGroupUrl: 'https://chat.whatsapp.com/EZERStudentCohortOfficial',
  workingHours: 'Mon - Sat: 9:00 AM - 7:00 PM'
};

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
    author: 'EZER Academic Board',
    date: 'July 28, 2025',
    readTime: '6 Min Read',
    seoGeoAeoTag: 'Best AI & Full Stack IT Training Institute in Chennai India',
    summary: 'EZER Learning Solutions receives national acclaim at the EdTech Excellence Awards 2025 for pioneering live native-language tech education, outcome-driven mentorship cohorts, and 12-month dedicated career placement support.',
    image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=800',
    content: 'We are thrilled to announce that EZER Learning Solutions has been awarded the EdTech Excellence & Innovation Award for 2025. This milestone underscores EZER’s mission to bridge the digital skills divide by empowering freshers, non-IT candidates, and career switchers to transition into high-growth software engineering, cloud DevOps, and AI automation careers.',
    takeaways: [
      'National recognition for democratizing practical tech training across India.',
      'Pioneering native-language instruction (Tamil, Hindi, English) for accelerated software comprehension.',
      'Over 10,000+ career switchers and non-IT graduates successfully placed in top IT firms.',
      'Comprehensive 12-month placement assistance with mock technical interviews and resume preparation.'
    ],
    sections: [
      {
        id: 'sec-1',
        title: '1. National Recognition for EdTech Innovation & Practical Outcomes',
        content: 'EZER Learning Solutions has been formally honored with the prestigious EdTech Excellence & Innovation Award 2025. This milestone underscores EZER’s unwavering mission to bridge the digital skills divide by empowering freshers, non-IT candidates, and career switchers to transition into high-growth software engineering, cloud DevOps, and AI automation careers.',
        image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=1000',
        caption: 'EZER Leadership receiving the EdTech Excellence & Innovation Award 2025.'
      },
      {
        id: 'sec-2',
        title: '2. Revolutionizing Tech Education with Native-Language Cohorts',
        content: 'A cornerstone of EZER’s award-winning pedagogy is its dual-language learning framework. By delivering live, interactive instruction in Tamil, Hindi, and English alongside industry-standard coding labs, learners grasp complex data structures, cloud architectures, and full-stack engineering faster and with greater confidence.',
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000',
        caption: 'Interactive live cohort masterclasses with real-time mentor code reviews.'
      },
      {
        id: 'sec-3',
        title: '3. Hands-On Production Labs & Enterprise Portfolio Proof-of-Work',
        content: 'Rather than relying on passive video lectures, EZER’s curriculum is anchored on live cloud-hosted sandboxes, microservice architectures, and automated testing pipelines. Students write production-ready code, deploy CI/CD workflows, and build verifiable GitHub repositories that demonstrate immediate enterprise value to hiring managers.',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000',
        caption: 'Students collaborating on enterprise microservice infrastructure and live deployment pipelines.'
      },
      {
        id: 'sec-4',
        title: '4. 12-Month Dedicated Placement Assistance & Corporate Referral Ecosystem',
        content: 'Beyond technical mastery, EZER provides up to 12 months of post-completion placement assistance. This includes 1-on-1 resume optimization, AI-assisted mock technical interviews, algorithmic coding drills, and direct recruitment pathways with 150+ corporate hiring partners across top tech firms.',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000',
        caption: 'Alumni career acceleration and dedicated corporate placement drive.'
      }
    ],
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
  // Never read state from LocalStorage — return fallback default so state is driven purely from the Database!
  return fallback;
}

export function safeSetStorage(key, val) {
  // Never store data in LocalStorage as per requirement
  return;
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
  return {
    heroSlides: defaultSlides,
    courses: phase1Courses,
    ezerDefinition: defaultPlatformDef,
    supportCards: defaultSupportCards,
    transformedLives: defaultTransformedLives,
    outcomesHeader: defaultOutcomesHeader,
    seniorMentors: defaultSeniorMentors,
    mentorsHeader: defaultMentorsHeader,
    videoTestimonials: defaultVideoTestimonials,
    testimonialsHero: defaultTestimonialsHero,
    writtenTestimonials: initialTestimonials,
    faqList: generalFaqs,
    contactInfo: defaultContactInfo,
    popupConfig: defaultPopupConfig,
    leads: [],
    blogs: defaultBlogs,
    achievements: defaultAchievements,
    executiveLeaders: defaultExecutiveLeaders,
    hiringPartners: defaultHiringPartners,
    paymentConfig: defaultPaymentConfig,
    aboutVideos: defaultAboutVideos,
    aboutShowcaseCards: defaultAboutShowcaseCards,
    payments: [],
    adminUsers: defaultAdminUsers
  };
}

export function siteReducer(state, action) {
  switch (action.type) {
    case 'SET_KEY':
      return { ...state, [action.key]: action.value };
    case 'ADD_ITEM': {
      const currentList = Array.isArray(state[action.key]) ? state[action.key] : [];
      return { ...state, [action.key]: [action.item, ...currentList] };
    }
    case 'UPDATE_ITEM': {
      const currentList = Array.isArray(state[action.key]) ? state[action.key] : [];
      const updatedList = currentList.map((item) => (item.id === action.id ? { ...item, ...action.updatedData } : item));
      return { ...state, [action.key]: updatedList };
    }
    case 'DELETE_ITEM': {
      const currentList = Array.isArray(state[action.key]) ? state[action.key] : [];
      const filteredList = currentList.filter((item) => item.id !== action.id);
      return { ...state, [action.key]: filteredList };
    }
    case 'RESET_ALL':
      return getInitialState();
    default:
      return state;
  }
}
