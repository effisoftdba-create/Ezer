export const phase1Courses = [
  {
    id: "cloud-devops-ai",
    title: "Cloud DevOps with AI",
    slug: "cloud-devops-ai",
    badge: "Best Seller",
    tagline: "Deploy, Automate, and Scale — Like a Real DevOps Engineer.",
    description: "Live, hands-on training across AWS, Azure, GCP and the industry's core DevOps toolchain integrated with modern AI tools. Build production automated pipelines from day one.",
    tools: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Jenkins", "Terraform", "Python AI", "Prometheus & Grafana"],
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=600&h=400",
    duration: "3 Months",
    schedule: "Weekday & Weekend batches available",
    startDate: "New Cohort Starting Next Week",
    languages: "Tamil, English, Hindi",
    fee: "₹45,000 + 18% GST",
    applicationFee: "Free Counseling Registration",

    whoIsItFor: [
      "Freshers looking to enter Cloud & DevOps engineering roles",
      "Software Developers & QA Engineers transitioning to Infrastructure & Automation",
      "System Administrators moving toward cloud-native automation",
      "Non-IT graduates seeking a high-growth tech career in cloud computing"
    ],

    curriculumModules: [
      {
        num: "01",
        title: "Cloud Fundamentals & Multi-Cloud Architecture",
        topics: ["AWS EC2, S3, VPC & IAM Core Infrastructure", "Azure Virtual Machines & Resource Groups", "GCP Fundamentals & Cloud Storage", "Cloud Security & Identity Best Practices"]
      },
      {
        num: "02",
        title: "Linux Administration & Shell Scripting",
        topics: ["Linux Command Line Mastery & File Permissions", "Bash Shell Scripting & Automation", "Process Management & Systemd Services", "Networking Protocols (SSH, DNS, HTTP, TCP/IP)"]
      },
      {
        num: "03",
        title: "Containerisation with Docker",
        topics: ["Docker Engine & Architecture", "Writing Optimized Dockerfiles", "Multi-Stage Container Builds", "Docker Compose & Microservices Networking"]
      },
      {
        num: "04",
        title: "Container Orchestration with Kubernetes",
        topics: ["Kubernetes Cluster Architecture & Architecture", "Pods, Deployments, Services & Ingress", "StatefulSets, Persistent Volumes & ConfigMaps", "Helm Package Manager & Production Deployment"]
      },
      {
        num: "05",
        title: "Continuous Integration & Delivery (CI/CD)",
        topics: ["Jenkins Pipeline Creation & Automation", "GitHub Actions & Webhooks Integration", "Automated Testing & Artifact Management", "Zero-Downtime Deployment Strategies"]
      },
      {
        num: "06",
        title: "Infrastructure as Code (IaC) with Terraform",
        topics: ["Terraform HCL Syntax & State Management", "Building Multi-Tier Infrastructure on AWS", "Terraform Modules & Environment Workspaces", "GitOps & Infrastructure Versioning"]
      },
      {
        num: "07",
        title: "Observability, Logging & Site Reliability",
        topics: ["Prometheus Metrics Collection & Alerting", "Grafana Dashboard Visualizations", "ELK Stack (Elasticsearch, Logstash, Kibana)", "AI-Powered Incident Response & Troubleshooting"]
      },
      {
        num: "08",
        title: "AI-Assisted DevOps & Production Capstone",
        topics: ["Using GitHub Copilot & LLMs for IaC Generation", "Automating Incident Root-Cause Analysis", "End-to-End Production Pipeline Project", "Resume Building & Mock Interviews"]
      }
    ],

    projects: [
      "Multi-Region AWS VPC Infrastructure Automation with Terraform",
      "High-Availability Kubernetes Microservices Deployment with Helm & Ingress",
      "Automated End-to-End CI/CD Pipeline using Jenkins & GitHub Actions",
      "Enterprise Monitoring & Alerting Setup using Prometheus & Grafana",
      "AI-Assisted Automated Incident Triage & Server Diagnostics System"
    ],

    faculty: [
      {
        name: "Arun Kumar S",
        role: "Principal Cloud Architect @ TechCorp",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300&h=300",
        bio: "11+ years designing multi-cloud architectures across AWS and Azure. Mentored 2,500+ engineers into DevOps career roles.",
        tags: ["AWS Certified", "Kubernetes Lead", "DevOps Veteran"]
      },
      {
        name: "Kavitha Ranganathan",
        role: "Senior SRE Lead @ Global Cloud Systems",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300",
        bio: "Specialist in Kubernetes zero-downtime deployments and IaC automation with Terraform.",
        tags: ["Terraform Expert", "SRE Architecture", "GitOps Specialist"]
      }
    ],

    admissionSteps: [
      { step: "01", title: "Select Batch & Register", desc: "Fill your contact details and select weekday or weekend live online batch." },
      { step: "02", title: "Free Counseling & Profile Evaluation", desc: "Speak with senior tech advisors to evaluate your current background and career goals." },
      { step: "03", title: "Demo Class Attendance", desc: "Attend a live hands-on demo session to experience our interactive live training methodology." },
      { step: "04", title: "Enrollment & Seat Lock", desc: "Confirm your seat with flexible payment options or zero-cost EMI plans." },
      { step: "05", title: "LMS Access & Lab Setup", desc: "Get full access to live cloud sandboxes, GitHub repos, and class materials." },
      { step: "06", title: "Live Cohort & Placement Support", desc: "Start live classes, build capstone projects, and unlock 1-year placement assistance." }
    ],

    certificateCriteria: {
      participation: {
        title: "Certificate of Participation",
        req: "Maintain minimum 75% attendance in live online cloud lab sessions.",
        issuer: "Issued by EZER Learning Solutions & Partner Network"
      },
      completion: {
        title: "Certificate of Completion & Placement Badge",
        req: "Complete all 5 capstone lab projects and pass final DevOps practical assessment.",
        issuer: "Issued by EZER Learning Solutions (ISO 9001:2015 Accredited)"
      }
    },

    comparisonTable: [
      { feature: "Live Hands-On Labs", us: "100% Live Instructor-Led Labs with AWS/GCP Sandboxes", others: "Pre-recorded outdated video modules" },
      { feature: "AI-DevOps Integration", us: "AI Copilot & automated IaC workflow training included", others: "Legacy tools only without AI integration" },
      { feature: "Placement Support", us: "Dedicated 1-Year Placement Assistance with 500+ Hiring Partners", others: "No placement guidance or resume assistance" },
      { feature: "Vernacular Mentorship", us: "Tamil & English explanation support by senior mentors", others: "Strict English-only dry lectures" }
    ],

    installmentSchedule: [
      { stage: "Registration Deposit", detail: "Seat confirmation deposit", amount: "₹10,000" },
      { stage: "1st Installment", detail: "Start of Month 1", amount: "₹17,500 + GST" },
      { stage: "2nd Installment", detail: "Start of Month 2", amount: "₹17,500 + GST" }
    ],

    referralOffer: {
      title: "Refer & Earn ₹5,000",
      desc: "Refer a peer to Cloud DevOps with AI and receive ₹5,000 cash back upon enrollment."
    },

    outcomes: ["DevOps Engineer", "Cloud Infrastructure Engineer", "Site Reliability Engineer (SRE)", "Cloud Support Architect", "CI/CD Automation Engineer"],
    
    faq: [
      { q: "How long is the Cloud DevOps with AI course?", a: "The course runs for 3 months with live interactive classes and weekend lab sessions." },
      { q: "Do I need prior cloud experience to join?", a: "No, we start from Linux and Cloud fundamentals before advancing to Docker, Kubernetes, and Terraform." },
      { q: "Will I get placement support after completing the course?", a: "Yes, EZER provides 1-year comprehensive placement assistance including resume building, mock interviews, and direct company referrals." }
    ]
  },

  {
    id: "software-testing-playwright",
    title: "Software Testing – Playwright",
    slug: "software-testing-playwright",
    badge: "Trending",
    tagline: "Test Smarter With the Automation Framework Top QA Teams Are Adopting.",
    description: "From manual testing fundamentals to full Playwright automation, JavaScript/TypeScript scripting, and CI/CD integration for modern web application testing.",
    tools: ["Playwright", "JavaScript/TypeScript", "Selenium", "Postman", "Jest", "Git", "Jenkins", "Cucumber BDD"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600&h=400",
    duration: "3 Months",
    schedule: "Weekday & Weekend batches available",
    startDate: "New Batch Starting Next Week",
    languages: "Tamil, English, Hindi",
    fee: "₹38,000 + 18% GST",
    applicationFee: "Free Counseling Registration",

    whoIsItFor: [
      "Manual QA Testers upgrading to Test Automation Engineers & SDETs",
      "Freshers aiming for entry-level Software Testing and QA roles",
      "Developers wanting to master modern end-to-end web test automation",
      "Career switchers looking for a high-demand, high-growth IT domain"
    ],

    curriculumModules: [
      {
        num: "01",
        title: "Software Testing Fundamentals & SDLC/STLC",
        topics: ["Manual Testing Principles & Test Case Creation", "STLC Lifecycle & Bug Tracking in Jira", "Agile Methodology & Sprint Testing", "Test Data Preparation & Boundary Analysis"]
      },
      {
        num: "02",
        title: "JavaScript & TypeScript Essentials for Testing",
        topics: ["Variables, Data Types, Arrays & Objects", "Async/Await, Promises & Event Loops", "TypeScript Types, Interfaces & Modules", "Writing Clean, Maintainable Test Code"]
      },
      {
        num: "03",
        title: "Playwright Automation Framework Core",
        topics: ["Setting Up Playwright Project Architecture", "Locators, Selectors & Auto-Waiting Mechanisms", "Handling Popups, Frames, Tabs & Dialogs", "Page Object Model (POM) Design Pattern"]
      },
      {
        num: "04",
        title: "API & Web Services Automation",
        topics: ["REST API Concepts & HTTP Methods", "API Testing with Postman & Newman", "Playwright API Request Context Automation", "JSON Schema Validation & Mocking Responses"]
      },
      {
        num: "05",
        title: "Behavior Driven Development (BDD) & Cucumber",
        topics: ["Writing Gherkin Syntax Feature Files", "Integrating Playwright with Cucumber", "Data-Driven Test Automation Suites", "Generating Visual HTML Test Reports"]
      },
      {
        num: "06",
        title: "Parallel Execution & CI/CD Pipeline Integration",
        topics: ["Cross-Browser Testing (Chromium, Firefox, WebKit)", "Running Tests in Headless & Headed Modes", "Integrating Playwright with GitHub Actions & Jenkins", "Visual Regression & Snapshot Comparison"]
      }
    ],

    projects: [
      "End-to-End Playwright POM Test Suite for E-Commerce Platform",
      "RESTful API Test Automation & Data Validation Framework",
      "Cross-Browser Parallel Test Execution Pipeline in GitHub Actions",
      "Visual Regression & Accessibility Testing Suite",
      "Hybrid Playwright + Cucumber BDD Framework for Banking Web App"
    ],

    faculty: [
      {
        name: "Sowmya Venkatesh",
        role: "Lead QA Automation Engineer @ FinTech Corp",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300&h=300",
        bio: "9+ years of expertise in test automation, Playwright, Selenium, and CI/CD pipelines. Trained 1,800+ QA professionals.",
        tags: ["Playwright Architect", "SDET Lead", "API Testing"]
      }
    ],

    admissionSteps: [
      { step: "01", title: "Profile Submission", desc: "Submit your details for the Playwright Automation cohort." },
      { step: "02", title: "Free Academic Advisory", desc: "Discuss your goals with our QA domain experts to verify eligibility." },
      { step: "03", title: "Live Workshop Demo", desc: "Experience live Playwright scripting in an interactive session." },
      { step: "04", title: "Seat Reservation", desc: "Reserve your seat with flexible monthly EMI plans." },
      { step: "05", title: "Repository & Lab Access", desc: "Gain access to sample test suites, repositories, and study guides." },
      { step: "06", title: "Cohort Launch & Career Drive", desc: "Attend live classes and participate in exclusive 1-year placement drives." }
    ],

    certificateCriteria: {
      participation: {
        title: "Certificate of Participation",
        req: "Attend at least 75% of live interactive test automation sessions.",
        issuer: "Issued by EZER Learning Solutions"
      },
      completion: {
        title: "Certified Automation Test Engineer",
        req: "Deliver 3 verified Playwright automated test repos on GitHub with 80%+ assessment score.",
        issuer: "Issued by EZER Learning Solutions (ISO 9001:2015)"
      }
    },

    comparisonTable: [
      { feature: "Framework Focus", us: "Modern Playwright + TypeScript (Industry Next-Gen Standard)", others: "Outdated legacy Selenium Java only" },
      { feature: "API + UI Testing", us: "Combined Web UI + REST API Automation", others: "UI only, no API coverage" },
      { feature: "Career Outcome", us: "SDET & Automation Test Engineer roles", others: "Basic Manual Tester roles only" }
    ],

    installmentSchedule: [
      { stage: "Registration Deposit", detail: "Seat confirmation", amount: "₹8,000" },
      { stage: "1st Installment", detail: "Month 1", amount: "₹15,000 + GST" },
      { stage: "2nd Installment", detail: "Month 2", amount: "₹15,000 + GST" }
    ],

    referralOffer: {
      title: "Refer & Earn ₹4,000",
      desc: "Refer your teammate to the Playwright Automation course and earn a ₹4,000 voucher."
    },

    outcomes: ["Automation Test Engineer", "SDET (Software Development Engineer in Test)", "QA Automation Lead", "API Testing Specialist"],
    
    faq: [
      { q: "Is this course suitable for manual testers?", a: "Yes! We teach JavaScript/TypeScript basics before diving into Playwright automation." },
      { q: "Why Playwright over Selenium?", a: "Playwright is faster, more reliable with automatic waiting, and heavily requested by modern tech companies." }
    ]
  },

  {
    id: "ai-machine-learning",
    title: "AI & Machine Learning",
    slug: "ai-machine-learning",
    badge: "High Demand",
    tagline: "From Python Basics to Building and Deploying Real ML Models.",
    description: "A hands-on, project-based path into artificial intelligence, machine learning, and deep learning models taught by industry AI engineers.",
    tools: ["Python", "scikit-learn", "TensorFlow", "PyTorch", "Pandas", "NumPy", "OpenCV", "Streamlit"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=600&h=400",
    duration: "3 Months",
    schedule: "Weekday & Weekend batches available",
    startDate: "New Cohort Starting Next Week",
    languages: "English, Tamil, Hindi",
    fee: "₹48,000 + 18% GST",
    applicationFee: "Free Counseling Registration",

    whoIsItFor: [
      "Freshers and Computer Science graduates entering AI & Data Science",
      "Software Engineers wanting to build ML models & intelligent applications",
      "Data Analysts looking to advance into Machine Learning Engineering",
      "Tech professionals aiming to leverage LLMs and Generative AI tools"
    ],

    curriculumModules: [
      {
        num: "01",
        title: "Python Programming & Mathematics for AI",
        topics: ["Python Fundamentals, Data Structures & OOP", "NumPy for Numerical Computing", "Pandas for Data Manipulation & Cleaning", "Linear Algebra, Probability & Statistics for ML"]
      },
      {
        num: "02",
        title: "Exploratory Data Analysis (EDA) & Visualization",
        topics: ["Matplotlib & Seaborn Data Visualizations", "Feature Scaling, Normalization & Encoding", "Handling Missing Data & Outlier Detection", "Exploratory Insights Generation"]
      },
      {
        num: "03",
        title: "Supervised Machine Learning Algorithms",
        topics: ["Linear & Logistic Regression", "Decision Trees & Random Forests", "Support Vector Machines (SVM) & KNN", "Gradient Boosting (XGBoost, LightGBM)"]
      },
      {
        num: "04",
        title: "Unsupervised Machine Learning & Dimensionality",
        topics: ["K-Means & Hierarchical Clustering", "Principal Component Analysis (PCA)", "Anomaly Detection Techniques", "Recommender Systems Architecture"]
      },
      {
        num: "05",
        title: "Deep Learning & Neural Networks",
        topics: ["Artificial Neural Networks (ANN) & Perceptrons", "TensorFlow & Keras Model Architecture", "Convolutional Neural Networks (CNN) for Vision", "Recurrent Neural Networks (RNN) & LSTMs"]
      },
      {
        num: "06",
        title: "ML Model Deployment & AI Application Building",
        topics: ["Model Evaluation Metrics (ROC-AUC, Precision/Recall)", "Saving & Serializing Models (Joblib/Pickle)", "Building Web APIS with FastAPI & Streamlit", "Introduction to Prompt Engineering & LLM Integration"]
      }
    ],

    projects: [
      "Predictive Customer Churn Analytics & ML Classifier",
      "Computer Vision Automated Medical Image Diagnostics System",
      "Real-Time House Price Prediction API with FastAPI",
      "Customer Segmentation Engine using K-Means & PCA",
      "Interactive Streamlit AI Web App for Sentiment Analysis"
    ],

    faculty: [
      {
        name: "Dr. Karthik Sundaram",
        role: "Lead AI Research Scientist @ Innovation Labs",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300",
        bio: "Ph.D. in Machine Learning. 10+ years deploying deep learning models in healthcare and finance sectors.",
        tags: ["PyTorch Expert", "Computer Vision", "LLM Researcher"]
      }
    ],

    admissionSteps: [
      { step: "01", title: "Application Form", desc: "Submit your basic profile and select the AI & ML cohort." },
      { step: "02", title: "Domain Counseling", desc: "Connect with our AI team to evaluate your mathematical background." },
      { step: "03", title: "Live Demo Session", desc: "Attend a live code demo building an ML classifier from scratch." },
      { step: "04", title: "Admission Lock", desc: "Confirm your seat with flexible monthly EMI plans." },
      { step: "05", title: "Environment Setup", desc: "Set up Jupyter, Anaconda, PyTorch, and Google Colab GPUs." },
      { step: "06", title: "Live Cohort Launch", desc: "Begin live sessions, capstone builds, and placement interview prep." }
    ],

    certificateCriteria: {
      participation: {
        title: "Certificate of Participation",
        req: "Minimum 75% attendance in live online sessions.",
        issuer: "Issued by EZER Learning Solutions"
      },
      completion: {
        title: "Certified Machine Learning Engineer",
        req: "Successfully build & deploy 2 live end-to-end ML model applications.",
        issuer: "Issued by EZER Learning Solutions (ISO 9001:2015)"
      }
    },

    comparisonTable: [
      { feature: "Hands-on Implementation", us: "Complete end-to-end ML model deployment using Streamlit & FastAPI", others: "Theory & notebook code only" },
      { feature: "Tooling", us: "PyTorch, TensorFlow, XGBoost & Scikit-learn", others: "Basic Python only" }
    ],

    installmentSchedule: [
      { stage: "Registration Deposit", detail: "Seat reservation", amount: "₹10,000" },
      { stage: "1st Installment", detail: "Month 1", amount: "₹19,000 + GST" },
      { stage: "2nd Installment", detail: "Month 2", amount: "₹19,000 + GST" }
    ],

    referralOffer: {
      title: "Refer & Earn ₹5,000",
      desc: "Refer a colleague to the AI & ML programme and receive ₹5,000 cash back."
    },

    outcomes: ["Machine Learning Engineer", "AI Developer", "Data Scientist (Junior)", "MLOps Associate"],
    
    faq: [
      { q: "Do I need strong math skills for AI & ML?", a: "We cover all necessary linear algebra, calculus, and probability concepts step-by-step during the course." }
    ]
  },

  {
    id: "it-infrastructure-sysadmin",
    title: "IT Infrastructure & System Administration",
    slug: "it-infrastructure-sysadmin",
    badge: "Beginner Friendly",
    tagline: "Your Strong, Practical Foundation for a First IT Role.",
    description: "A beginner-friendly, hands-on path into enterprise IT infrastructure, Active Directory, server management, and network security — ideal for career switchers.",
    tools: ["Windows Server", "Linux", "Active Directory", "TCP/IP", "DNS/DHCP", "Bash", "VMware", "PowerShell"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600&h=400",
    duration: "3 Months",
    schedule: "Weekday & Weekend batches available",
    startDate: "New Batch Starting Next Week",
    languages: "Tamil, English, Hindi",
    fee: "₹32,000 + 18% GST",
    applicationFee: "Free Counseling Registration",

    whoIsItFor: [
      "Beginners & non-IT background graduates wanting a guaranteed entry into IT",
      "Desktop Support Engineers & Helpdesk Technicians looking for career growth",
      "Diploma & Arts/Science graduates targeting SysAdmin and IT Support roles"
    ],

    curriculumModules: [
      {
        num: "01",
        title: "Hardware & Operating Systems Essentials",
        topics: ["Computer Architecture & Hardware Troubleshooting", "Windows 10/11 Installation, Management & Drivers", "Linux Desktop Setup & Disk Management", "System Backup, Recovery & Image Deployment"]
      },
      {
        num: "02",
        title: "Windows Server Administration & Active Directory",
        topics: ["Windows Server 2022 Installation & Roles", "Active Directory Domain Services (AD DS) Setup", "User Accounts, Groups & Group Policy Objects (GPO)", "Domain Controllers & Trust Relationships"]
      },
      {
        num: "03",
        title: "Networking Protocols & Server Services",
        topics: ["IPv4 & IPv6 Subnetting & IP Addressing", "DHCP Server Configuration & Reservation", "DNS Server Setup, Forwarding & Zone Records", "Routing, Switching & VPN Configuration"]
      },
      {
        num: "04",
        title: "Linux System Administration Core",
        topics: ["Linux File System Hierarchy & Permissions", "User & Group Administration in Linux", "SSH Remote Management & Bash Scripting", "Package Management (APT / YUM) & System Logs"]
      },
      {
        num: "05",
        title: "Virtualization & Introduction to Cloud",
        topics: ["VMware Workstation & ESXi Hypervisor", "Creating & Managing Virtual Machines", "Introduction to AWS EC2 & Cloud Virtual Datacenters", "Basic Storage Solutions (SAN / NAS / RAID)"]
      },
      {
        num: "06",
        title: "IT Security & Enterprise Helpdesk Lab",
        topics: ["Antivirus, Firewall & Endpoint Security Policies", "Remote Desktop & IT Support Ticketing Systems (Jira/ServiceNow)", "Live Enterprise Infrastructure Troubleshooting Project", "Interview Preparation & Resume Review"]
      }
    ],

    projects: [
      "Windows Server 2022 Active Directory Enterprise Domain Setup",
      "Multi-Subnet Network Configuration with DNS & DHCP Roles",
      "Linux Server Hardening & Automated Backup Scripting",
      "Virtual Infrastructure Setup using VMware ESXi & Hyper-V",
      "Simulated Corporate IT Support Helpdesk Operations"
    ],

    faculty: [
      {
        name: "Vijay Anand",
        role: "Senior IT Infrastructure Manager @ Global Tech",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=300",
        bio: "14+ years managing enterprise IT infrastructure and datacenter networks. Taught 3,000+ IT support professionals.",
        tags: ["Windows Server Lead", "Active Directory", "Network Security"]
      }
    ],

    admissionSteps: [
      { step: "01", title: "Select Cohort", desc: "Register your interest for the SysAdmin & IT Infra batch." },
      { step: "02", title: "Career Guidance Call", desc: "Speak with an IT advisor to map out your entry strategy into tech." },
      { step: "03", title: "Hands-on Lab Demo", desc: "Attend a live server configuration demo class." },
      { step: "04", title: "Enrollment & Fee Payment", desc: "Secure your seat with easy installment options." },
      { step: "05", title: "Lab Setup & Materials", desc: "Receive your VM lab tools and Linux/Windows images." },
      { step: "06", title: "Live Training & Placement", desc: "Complete 3 months of live training and enter 1-year placement drives." }
    ],

    certificateCriteria: {
      participation: {
        title: "Certificate of Participation",
        req: "Minimum 75% attendance in live training.",
        issuer: "Issued by EZER Learning Solutions"
      },
      completion: {
        title: "Certified IT System Administrator",
        req: "Successfully configure the Active Directory enterprise lab project.",
        issuer: "Issued by EZER Learning Solutions (ISO 9001:2015)"
      }
    },

    comparisonTable: [
      { feature: "Practical Labs", us: "100% Real VMware & Windows Server Active Directory Labs", others: "Pure textbook theory" },
      { feature: "Language Support", us: "Tamil & English explanations for clear understanding", others: "English only" }
    ],

    installmentSchedule: [
      { stage: "Registration Deposit", detail: "Seat confirmation", amount: "₹6,000" },
      { stage: "1st Installment", detail: "Month 1", amount: "₹13,000 + GST" },
      { stage: "2nd Installment", detail: "Month 2", amount: "₹13,000 + GST" }
    ],

    referralOffer: {
      title: "Refer & Earn ₹3,000",
      desc: "Refer a friend to IT Infrastructure and receive a ₹3,000 voucher."
    },

    outcomes: ["IT Support Engineer", "System Administrator", "Desktop Support Technician", "Infrastructure Analyst"],
    
    faq: [
      { q: "Is this course suitable for non-IT graduates?", a: "Yes! It is specifically designed as a zero-prerequisite foundation for entry-level IT roles." }
    ]
  }
];

export const phase2Courses = [
  {
    id: "agentic-gen-ai",
    title: "Agentic AI & Generative AI",
    badge: "Coming Soon",
    description: "Build autonomous AI agents and LLM applications using LangChain and AutoGen."
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    badge: "Coming Soon",
    description: "Master PySpark, Snowflake, Kafka, and modern data pipeline architectures."
  },
  {
    id: "full-stack-dev",
    title: "Full Stack Development (Java / Python / MERN)",
    badge: "Coming Soon",
    description: "End-to-end web software development with modern frontend and robust backend frameworks."
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    badge: "Coming Soon",
    description: "Transform raw data into business intelligence using PowerBI, SQL, and Advanced Excel."
  }
];

export function getCourseBySlug(slug) {
  return phase1Courses.find((c) => c.slug === slug);
}

