import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { HiArrowLeft, HiSparkles, HiClock, HiUser, HiCalendar, HiCheckCircle, HiLocationMarker } from 'react-icons/hi';
import { useSiteData } from '../context/SiteContext';
import { resolveImageSrc, handleImgError } from '../utils/imageUtils';
import CTABanner from '../components/CTABanner';

const ARTICLES_DATABASE = {
  'how-non-it-professionals-transition-into-ai': {
    title: 'How Non-IT Professionals Are Transitioning Into AI & Software Development in 2026',
    category: 'Career Transition Guide',
    author: 'EZER Academic Board & Industry Mentors',
    date: 'August 2026 Edition',
    readTime: '8 Min Read',
    seoGeoAeoTag: 'Best AI & Full Stack IT Training Institute in Chennai India | Non-IT Career Transition Guide',
    summary: 'Discover the comprehensive, step-by-step roadmap used by non-tech career switchers to master Full Stack AI engineering, build production capstones, and land high-growth tech roles.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1400',
    takeaways: [
      'Degree requirements are giving way to practical capstone proof-of-work in corporate hiring.',
      'Native language instruction (Tamil/Hindi/English) accelerates technical mastery by up to 3x.',
      '12-Month placement assistance provides ongoing ATS resume reviews & corporate interview referrals.',
      'AI coding tools like GitHub Copilot allow non-tech learners to build enterprise apps faster.'
    ],
    sections: [
      {
        title: "1. The Changing Tech Landscape & Native Language Learning Advantage",
        content: `The global IT industry has shifted dramatically toward practical execution rather than theoretical degrees. Traditional Computer Science degrees often focus on legacy academic theory, leaving graduates unequipped for production deployment, cloud infrastructure, and modern AI workflows.

At EZER Learning Solutions in Perungudi, Chennai, we pioneered a dual-track methodology: delivering complex software engineering concepts in native languages (Tamil, Hindi, and English) alongside hands-on practical labs. When complex logic like recursion, pointer arithmetic, or neural network backpropagation is explained in native languages, student comprehension speeds increase by up to 3x.`,
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000",
        caption: "Interactive native-language cohort masterclasses in progress."
      },
      {
        title: "2. The 4-Stage Transition Framework for Career Switchers in Chennai & Online",
        content: `Whether coming from BPO, mechanical engineering, sales, or arts backgrounds, every successful career transition follows four core milestones:

• Stage 1: Core Tooling Mastery (Git, Linux CLI, Modern JavaScript / Python)
• Stage 2: Production Capstone Building (REST APIs, Microservices, Cloud Containers)
• Stage 3: Generative AI Workflow Integration (Copilot, Prompting, Automated Testing)
• Stage 4: 1-on-1 Mock Technical Interviews & Resume Optimization

By working directly with active corporate engineers who serve as personal mentors, students bypass generic tutorials and write enterprise-grade production code from week one.`,
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000",
        caption: "Senior Mentors evaluating production capstone projects 1-on-1."
      },
      {
        title: "3. 12-Month Dedicated Placement Assistance & Corporate Partner Referrals",
        content: `Graduating from a course is only half the battle. EZER's 12-Month Dedicated Placement Support ensures candidates receive continuous mock technical interviews, resume optimization tailored for Applicant Tracking Systems (ATS), and direct referral pathways to 250+ corporate hiring partners across India.

Every graduate earns an official QR-verifiable executive certificate accredited under ISO 9001:2015 standards, giving hiring managers total verification confidence during recruitment.`,
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000",
        caption: "Graduate candidates participating in corporate mock interview drives."
      },
      {
        title: "4. Real-World Alumni Case Studies & Salary Growth Benchmarks",
        content: `Our alumni network spans top IT services companies, product startups, and global MNCs. Non-tech switchers who previously worked in customer support or core engineering roles have successfully transitioned into Full Stack Engineers, DevOps Associates, and Data Analysts with average salary packages ranging from ₹4.5 LPA to ₹12 LPA.

With flexible weekend and evening live schedules, working professionals can upskill without quitting their current job.`,
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1000",
        caption: "Alumni celebrating placement milestone offers."
      }
    ]
  },

  'native-language-learning-breaking-barriers': {
    title: 'Native Language Learning: Breaking Tech Education Barriers in Tamil Nadu & Pan-India',
    category: 'Education Impact & GEO Insights',
    author: 'Dr. Subramanian R & Academic Directorate',
    date: 'August 2026',
    readTime: '7 Min Read',
    seoGeoAeoTag: 'Tamil & Hindi Software Engineering Courses | Native Language Tech Upskilling in Chennai & Online',
    summary: 'How learning complex software architecture in Tamil, Hindi, and English unlocks technical fluency, eliminates fear of coding, and empowers tier-2/3 college graduates.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1400',
    takeaways: [
      'Language barriers account for 65% of dropouts in traditional English-only IT training.',
      'Bilingual instruction builds deeper mental models before translating logic into code.',
      'EZER alumni in Chennai & Bangalore report 150%+ average salary hikes post-upskilling.',
      'Native language cohorts foster collaborative peer study groups and faster query resolution.'
    ],
    sections: [
      {
        title: "1. Overcoming the English Fluency Myth in Software Engineering",
        content: `For decades, non-native English speakers across Tamil Nadu and Pan-India believed that software engineering required advanced English rhetoric. In reality, programming languages are mathematical logic systems.

By explaining concepts like object-oriented programming, database indexing, and async loops in Tamil and Hindi first, learners grasp the fundamental architecture effortlessly before writing clean code in English.`,
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000",
        caption: "Tamil and Hindi instruction sessions bridging the IT entry gap."
      },
      {
        title: "2. Real-World Impact Across Chennai, Coimbatore, and Tier-2 Tech Hubs",
        content: `Students from non-IT backgrounds—such as B.Sc graduates, arts majors, and diploma holders—often hesitate when faced with English-heavy documentation. 

Our structured bilingual LMS modules break down complex AWS architecture, Kubernetes pod deployments, and Playwright automation scripts into relatable real-world analogies.`,
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000",
        caption: "Hands-on cloud sandbox lab execution with mentor guidance."
      },
      {
        title: "3. Interactive Bilingual Sandbox Environment & Pedagogy",
        content: `Learning in native languages doesn't mean ignoring industry English terms. Our hybrid pedagogy uses native languages for conceptual breakdown and industry-standard English for code syntax, variable naming, and technical documentation.

This dual-anchor method ensures students can articulate technical solutions confidently in corporate interviews.`,
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1000",
        caption: "Learners executing live debugging tasks in collaborative cohorts."
      },
      {
        title: "4. Corporate HR & Hiring Manager Perspectives",
        content: `Technical recruiters care about problem-solving speed and code quality over accent or vocabulary. Corporate partners hire EZER graduates because they possess deep conceptual clarity and practical execution capability.`,
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1000",
        caption: "Corporate HR leads interviewing EZER cohort candidates."
      }
    ]
  },

  'rise-of-ai-assisted-full-stack-developers': {
    title: 'The Rise of AI-Assisted Full Stack Developers in Corporate Enterprises',
    category: 'Industry Trends & AEO Search',
    author: 'Anand Kumar K (Chief Marketing Tech Officer)',
    date: 'July 2026',
    readTime: '8 Min Read',
    seoGeoAeoTag: 'React Node.js Copilot AI Developer Course | Top High Salary Tech Roles 2026',
    summary: 'Why leading tech firms in India and globally prioritize full-stack engineers who leverage GitHub Copilot, OpenAI APIs, and automated LLM testing pipelines.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1400',
    takeaways: [
      'AI coding tools increase developer feature output velocity by 2.5x.',
      'Corporate recruiters actively test Copilot prompting & API integration in technical rounds.',
      'EZER Full Stack AI curriculum integrates production vector databases and OpenAI endpoints.',
      'Full Stack developers who leverage AI command 30-40% higher starting salaries.'
    ],
    sections: [
      {
        title: "1. Why Traditional Full Stack Development Is Evolving Fast",
        content: `Writing boiler-plate CRUD code manually is no longer the primary benchmark of a senior developer. Modern software teams demand engineers who can architect systems, design robust database schemas, and leverage AI models to write, test, and refactor code efficiently.

At EZER, students learn React, Node.js, Next.js, and PostgreSQL alongside GitHub Copilot and Claude API integrations.`,
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=1000",
        caption: "Full Stack AI developer environment setup and API integration."
      },
      {
        title: "2. Building Enterprise RAG Applications & Vector Search Engines",
        content: `Our curriculum moves beyond simple web pages to complex enterprise capstones: retrieval-augmented generation (RAG) engines, vector embeddings with Pinecone/PGVector, and automated CI/CD pipeline deployments on Vercel and Render.`,
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
        caption: "Students deploying full-stack AI web applications to cloud staging."
      },
      {
        title: "3. Automated Testing, Copilot Prompting & Production Deployment",
        content: `Modern engineering requires writing automated Jest, Cypress, and Playwright test suites. Students learn how to prompt AI assistants to write unit tests, catch edge-case bugs, and optimize SQL database query execution plans.`,
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
        caption: "Automated test runner and cloud deployment dashboard."
      },
      {
        title: "4. The 2026 Corporate Hiring Benchmark for Full Stack AI Engineers",
        content: `Top IT firms in Chennai, Bangalore, and Hyderabad seek candidates who demonstrate end-to-end system ownership—from UI state management to serverless backend deployment and AI API consumption.`,
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000",
        caption: "Full Stack AI cohort students showcasing capstone projects."
      }
    ]
  },

  '12-month-placement-assistance-framework': {
    title: '12-Month Placement Assistance: How EZER Guarantees Interview Referrals & Salary Hikes',
    category: 'Placement Success & SEO',
    author: 'Meenakshi Sundaram & HR Directorate',
    date: 'July 2026',
    readTime: '9 Min Read',
    seoGeoAeoTag: '100% Placement Assistance IT Training Chennai | Resume Optimization & Corporate Referrals',
    summary: 'An inside look into EZER’s placement engine: 1-on-1 mock interviews, ATS resume formatting, corporate HR partnerships, and 1-year continuous job referral coverage.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1400',
    takeaways: [
      'Over 250+ corporate hiring partners refer EZER certified candidates directly.',
      '12-Month placement window covers career gaps, salary negotiation, and interview retakes.',
      'ISO 9001:2015 QR-verifiable certificate validates production lab completion.',
      'Personal HR placement officers guide candidates through 1-on-1 interview feedback.'
    ],
    sections: [
      {
        title: "1. The 3-Tier Career Readiness & Placement Pipeline",
        content: `Many institutes stop at course completion. EZER provides 12 full months of dedicated placement support starting from day 60 of training.

Tier 1: ATS-Compliant Tech Resume & LinkedIn Profile Optimization
Tier 2: 1-on-1 Mock Technical Interviews with Senior Engineering Lead Mentors
Tier 3: Direct Corporate Placement Drives & Priority Partner HR Referrals.`,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000",
        caption: "Corporate HR placement session at EZER Learning Solutions."
      },
      {
        title: "2. ATS Resume Engineering & LinkedIn Personal Branding",
        content: `Over 80% of resumes are rejected by automated applicant tracking systems (ATS) before human eyes ever see them. EZER's placement team formats every student resume with optimized technical keywords, GitHub project proof-of-work links, and verifiable credential badges.`,
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1000",
        caption: "Resume optimization and LinkedIn profile review session."
      },
      {
        title: "3. 1-on-1 Mock Technical Interviews with Lead Corporate Engineers",
        content: `Mock technical interviews simulate real corporate coding rounds, system design questions, and behavioral evaluations. Mentors provide detailed feedback reports highlighting area improvements before students meet hiring managers.`,
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000",
        caption: "Mock technical interview simulation with lead engineer."
      },
      {
        title: "4. ISO 9001:2015 QR-Verifiable Executive Credentials",
        content: `Every EZER graduate receives an official certificate with a unique QR code allowing recruiters to instantly verify course completion, capstone scores, and practical skill badges online.`,
        image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80&w=1000",
        caption: "QR-verifiable executive certificate verification portal."
      }
    ]
  },

  'ezer-honored-at-edtech-excellence-awards-2025': {
    title: 'EZER Learning Solutions Honored at EdTech Excellence Awards 2025',
    category: 'Career Guide & Company News',
    author: 'EZER Academic Board',
    date: 'August 2026 Edition',
    readTime: '8 Min Read',
    seoGeoAeoTag: 'Best AI & Full Stack IT Training Institute in Chennai India',
    summary: 'EZER Learning Solutions receives national acclaim at the EdTech Excellence Awards 2025 for pioneering live native-language tech education, outcome-driven mentorship cohorts, and 12-month dedicated career placement support.',
    image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=1400',
    takeaways: [
      'Degree requirements are giving way to practical proof-of-work in modern IT hiring.',
      'National recognition for democratizing practical tech training and closing the skill gap across India.',
      'Pioneering native-language instruction (Tamil, Hindi, English) for accelerated software comprehension.',
      'Over 10,000+ career switchers and non-IT graduates successfully placed in leading tech firms.',
      'Comprehensive 12-month placement assistance with mock technical interviews, resume preparation, and corporate drives.'
    ],
    sections: [
      {
        title: "1. National Recognition for EdTech Innovation & Practical Outcomes",
        content: `EZER Learning Solutions has been formally honored with the prestigious EdTech Excellence & Innovation Award 2025. This milestone underscores EZER’s unwavering mission to bridge the digital skills divide by empowering freshers, non-IT candidates, and career switchers to transition into high-growth software engineering, cloud DevOps, and AI automation careers.

The award jury recognized EZER's focus on demonstrable student outcomes, verified salary growth metrics, and high post-training job placement rates across top corporate tech employers.`,
        image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=1000",
        caption: "EZER Leadership receiving the EdTech Excellence & Innovation Award 2025."
      },
      {
        title: "2. Revolutionizing Tech Education with Native-Language Cohorts",
        content: `A cornerstone of EZER’s award-winning pedagogy is its dual-language learning framework. By delivering live, interactive instruction in Tamil, Hindi, and English alongside industry-standard coding labs, learners grasp complex data structures, cloud architectures, and full-stack engineering faster and with greater confidence.

Students master algorithmic logic in their native tongue before writing production code in English, eliminating psychological barriers and boosting interview readiness.`,
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000",
        caption: "Interactive live cohort masterclasses with real-time mentor code reviews."
      },
      {
        title: "3. Hands-On Production Labs & Enterprise Portfolio Proof-of-Work",
        content: `Rather than relying on passive video lectures, EZER's curriculum is anchored on live cloud-hosted sandboxes, microservice architectures, and automated testing pipelines. Students write production-ready code, deploy CI/CD workflows, and build verifiable GitHub repositories that demonstrate immediate enterprise value to hiring managers.

Learners build complete full-stack applications with real databases, automated Playwright test suites, and Docker containerized deployments.`,
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000",
        caption: "Students collaborating on enterprise microservice infrastructure and live deployment pipelines."
      },
      {
        title: "4. 12-Month Dedicated Placement Assistance & Corporate Referral Ecosystem",
        content: `Beyond technical mastery, EZER provides up to 12 months of post-completion placement assistance. This includes 1-on-1 resume optimization tailored for ATS filters, AI-assisted mock technical interviews, algorithmic coding drills, and direct recruitment pathways with 150+ corporate hiring partners across top tech firms.

Our dedicated placement officers support each graduate until they secure a rewarding offer with benchmark industry packages.`,
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000",
        caption: "Alumni career acceleration and dedicated corporate placement drive."
      }
    ]
  },

  'cyber-security-and-cloud-devops-career-guide': {
    title: 'Cyber Security & Cloud DevOps in 2026: Roadmap for High-Paying Tech Careers',
    category: 'Cloud & Security Guide',
    author: 'EZER Cloud Engineering Directorate',
    date: 'May 2026',
    readTime: '8 Min Read',
    seoGeoAeoTag: 'Cyber Security & DevOps Training in Chennai | Certified Ethical Hacking & AWS Cloud Labs',
    summary: 'Explore how aspiring IT engineers master AWS cloud infrastructure, Kubernetes containerization, and defensive cyber security tools to secure high-growth enterprise roles.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1400',
    takeaways: [
      'Demand for Cloud DevOps & Cyber Security engineers grew by 180% in 2026.',
      'Hands-on AWS sandboxes & Linux terminal labs prepare students for real incidents.',
      'EZER alumni land senior Cloud Associate & DevOps Engineer roles with ₹6-15 LPA packages.',
      'Industry certifications (AWS SAA, CKA, CompTIA Security+) embedded into curriculum.'
    ],
    sections: [
      {
        title: "1. The Convergence of Cloud Infrastructure & DevSecOps",
        content: `Modern tech corporations require engineers who can build secure, automated infrastructure using Infrastructure as Code (Terraform), Docker containers, and Kubernetes orchestration.`,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
        caption: "Cloud infrastructure automation and Kubernetes orchestration lab."
      },
      {
        title: "2. Hands-On Cloud Sandboxes & Cyber Threat Mitigation Labs",
        content: `Students configure production AWS environments (VPC, EC2, S3, IAM), implement automated CI/CD pipelines with GitHub Actions, and execute penetration testing scenarios using industry standard security tools.`,
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000",
        caption: "Hands-on cloud security terminal and threat simulation."
      },
      {
        title: "3. Industry Certifications & Real-Time Incident Response",
        content: `Our curriculum prepares graduates for high-value certifications like AWS Certified Solutions Architect and Certified Kubernetes Administrator (CKA), ensuring immediate credibility with enterprise hiring teams.`,
        image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=1000",
        caption: "Security lab executing vulnerability assessment scans."
      },
      {
        title: "4. Career Growth Benchmarks & Salary Packages in India",
        content: `Certified Cloud DevOps and Security Engineers command initial salary offers from ₹5 LPA to ₹14 LPA, making this one of the most lucrative tech career paths for switchers.`,
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000",
        caption: "Senior Cloud Architect reviewing student capstone architecture."
      }
    ]
  }
};

export default function BlogDetail({ onOpenDemoModal }) {
  const { slug } = useParams();
  const { blogs } = useSiteData();

  // Look up custom article in SiteContext or fallback to matching slug in ARTICLES_DATABASE
  const userBlog = (blogs || []).find((b) => b.slug === slug || b.id === slug);
  const baseArticle = ARTICLES_DATABASE[slug] || ARTICLES_DATABASE['how-non-it-professionals-transition-into-ai'];

  const cleanSummary = (userBlog?.summary && userBlog.summary.trim().toLowerCase() !== 'testing')
    ? userBlog.summary
    : baseArticle.summary;

  const cleanTakeaways = (Array.isArray(userBlog?.takeaways) && userBlog.takeaways.length > 1)
    ? userBlog.takeaways
    : baseArticle.takeaways;

  const cleanSections = (Array.isArray(userBlog?.sections) && userBlog.sections.length >= 4)
    ? userBlog.sections
    : baseArticle.sections;

  const article = userBlog
    ? {
        title: userBlog.title || baseArticle.title,
        category: userBlog.category || baseArticle.category,
        author: userBlog.author || baseArticle.author,
        date: userBlog.date || baseArticle.date,
        readTime: userBlog.readTime || baseArticle.readTime,
        seoGeoAeoTag: userBlog.seoGeoAeoTag || baseArticle.seoGeoAeoTag,
        summary: cleanSummary,
        image: userBlog.image || baseArticle.image,
        takeaways: cleanTakeaways,
        sections: cleanSections
      }
    : baseArticle;

  return (
    <div style={{ background: '#f8fafc', color: '#0f172a', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      
      {/* Article Top Navigation Bar */}
      <div style={{ background: '#000648', color: '#ffffff', padding: '16px 20px', borderBottom: '2.5px solid #f2b733' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <Link to="/blog" style={{ color: '#f2b733', textDecoration: 'none', fontWeight: 900, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <HiArrowLeft size={18} /> Back to EZER Tech Magazine
          </Link>
          <span style={{ fontSize: '0.78rem', color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 900, background: 'rgba(255,255,255,0.1)', padding: '4px 14px', borderRadius: '50px' }}>
            {article.category}
          </span>
        </div>
      </div>

      {/* Hero Magazine Article Header - Full Width */}
      <header style={{ background: 'radial-gradient(circle at 50% 0%, #000a5e 0%, #000428 100%)', color: '#ffffff', padding: '64px 24px 56px', position: 'relative', width: '100%' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
          
          {/* SEO / GEO / AEO Keyword Badges */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              background: 'rgba(242, 183, 51, 0.18)', color: '#f2b733',
              padding: '6px 22px', borderRadius: '50px', fontWeight: 900,
              fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em',
              border: '1.5px solid rgba(242, 183, 51, 0.4)'
            }}>
              SPECIAL EDITORIAL FEATURE
            </span>


            <span style={{ fontSize: '0.78rem', color: '#ffffff', background: 'rgba(255,255,255,0.12)', padding: '5px 16px', borderRadius: '50px', fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: '6px', border: '1px solid rgba(255,255,255,0.2)' }}>
              <HiLocationMarker size={15} color="#f2b733" /> {article.seoGeoAeoTag}
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.16, color: '#ffffff', marginBottom: '20px', letterSpacing: '-0.02em', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
            {article.title}
          </h1>

          <p style={{ fontSize: '1.2rem', color: '#cbd5e1', lineHeight: 1.65, marginBottom: '28px', maxWidth: '1000px', fontWeight: 400 }}>
            {article.summary}
          </p>

          {/* Author Metadata Bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.15)', fontSize: '0.9rem', color: '#94a3b8' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffffff', fontWeight: 800 }}>
              <HiUser size={18} color="#f2b733" /> {article.author}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <HiCalendar size={18} color="#f2b733" /> {article.date}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <HiClock size={18} color="#f2b733" /> {article.readTime}
            </div>
          </div>

        </div>
      </header>

      {/* Main Hero Cover Photo - Full Width */}
      <div style={{ maxWidth: '1280px', margin: '-35px auto 48px', padding: '0 24px', position: 'relative', zIndex: 10, width: '100%' }}>
        <div style={{ borderRadius: '28px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,6,72,0.25)', border: '4px solid #ffffff' }}>
          <img
            loading="lazy"
            src={resolveImageSrc(article.image)}
            alt={article.title}
            onError={handleImgError}
            style={{
              width: '100%',
              maxHeight: '560px',
              objectFit: article.fit || article.imageFit || 'cover',
              objectPosition: article.position || article.imagePosition || 'center center',
              transform: (article.zoom || article.imageZoom || 1) !== 1 ? `scale(${article.zoom || article.imageZoom})` : 'none',
              transformOrigin: article.position || article.imagePosition || 'center center',
              display: 'block'
            }}
          />
        </div>
      </div>

      {/* Main Article Grid Layout - Spanning Full Width (1280px) */}
      <main style={{ maxWidth: '1280px', margin: '0 auto 64px', padding: '0 24px', width: '100%' }}>
        
        {/* Magazine Key Takeaways Full-Width Callout */}
        <div style={{ background: '#eff6ff', borderLeft: '6px solid #000648', borderRadius: '16px', padding: '28px 32px', marginBottom: '48px', boxShadow: '0 8px 24px rgba(0,6,72,0.06)' }}>
          <h4 style={{ color: '#000648', fontSize: '1.2rem', fontWeight: 900, margin: '0 0 14px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <HiCheckCircle size={24} color="#000648" /> Executive Summary & Key Takeaways
          </h4>
          <ul style={{ margin: 0, paddingLeft: '22px', color: '#1e293b', fontSize: '1.02rem', lineHeight: 1.75, fontWeight: 500 }}>
            {article.takeaways.map((item) => (
              <li key={item} style={{ marginBottom: '6px' }}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Article Body Sections */}
        {article.sections.map((sec, idx) => (
          <article key={sec.id || (sec.title ? sec.title.toLowerCase().replace(/[^a-z0-9]/g, '') : `sec-${sec.content ? sec.content.substring(0, 10) : 'block'}`)} style={{ marginBottom: '56px' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 900, color: '#000648', marginBottom: '18px', lineHeight: 1.25 }}>
              {sec.title}
            </h2>

            <p style={{ fontSize: '1.12rem', color: '#334155', lineHeight: 1.85, whiteSpace: 'pre-line', marginBottom: '28px' }}>
              {sec.content}
            </p>

            {sec.image && (
              <figure style={{ margin: '28px 0 40px 0' }}>
                <img
                  loading="lazy"
                  src={sec.image}
                  alt={sec.title}
                  onError={handleImgError}
                  style={{
                    width: '100%',
                    borderRadius: '20px',
                    maxHeight: '520px',
                    objectFit: sec.fit || sec.imageFit || 'cover',
                    objectPosition: sec.position || sec.imagePosition || 'center center',
                    transform: (sec.zoom || sec.imageZoom || 1) !== 1 ? `scale(${sec.zoom || sec.imageZoom})` : 'none',
                    transformOrigin: sec.position || sec.imagePosition || 'center center',
                    display: 'block',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.12)'
                  }}
                />
                {sec.caption && (
                  <figcaption style={{ fontSize: '0.88rem', color: '#64748b', textAlign: 'center', marginTop: '12px', fontStyle: 'italic', fontWeight: 600 }}>
                    {sec.caption}
                  </figcaption>
                )}
              </figure>
            )}
          </article>
        ))}

        {/* Full-Width Call to Action Banner Inside Article */}
        <div style={{ background: 'linear-gradient(135deg, #000648 0%, #0a1478 100%)', color: '#ffffff', padding: '44px 36px', borderRadius: '28px', textAlign: 'center', border: '2.5px solid #f2b733', boxShadow: '0 20px 40px rgba(0,6,72,0.3)', width: '100%' }}>
          <h3 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 900, color: '#ffffff', marginBottom: '12px' }}>
            Ready to Launch Your Career in Technology?
          </h3>
          <p style={{ color: '#cbd5e1', fontSize: '1.05rem', maxWidth: '780px', margin: '0 auto 24px', lineHeight: 1.65 }}>
            Book a free 1-on-1 counseling session with senior EZER academic counselors in Chennai and explore our accelerated live cohorts.
          </p>
          <button
            type="button"
            onClick={() => onOpenDemoModal(article.title)}
            style={{ padding: '16px 36px', borderRadius: '50px', background: '#f2b733', color: '#000648', fontWeight: 900, fontSize: '1rem', border: 'none', cursor: 'pointer', boxShadow: '0 6px 24px rgba(242,183,51,0.4)' }}
          >
            BOOK FREE COUNSELING CALL →
          </button>
        </div>

      </main>

      <CTABanner onOpenDemoModal={onOpenDemoModal} />
    </div>
  );
}
