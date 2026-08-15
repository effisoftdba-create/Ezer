// Complete Master Data Definition for EZER Learning Solution Programs
// ISO 9001:2015 Verified Curriculum Specifications

export const phase1Courses = [
  {
    id: "ai-ml",
    title: "AI/ML",
    slug: "ai-ml",
    badge: "High Demand",
    tagline: "Build, Train & Deploy Real-World AI Models and Intelligent Systems.",
    description: "A hands-on, project-based path into Artificial Intelligence, Machine Learning algorithms, Deep Learning, and Generative AI application deployment taught by industry AI engineers.",
    tools: ["Python", "TensorFlow", "PyTorch", "Scikit-Learn", "FastAPI", "Pandas", "NumPy", "OpenAI API", "Hugging Face"],
    image: "images/hero/ai.jpeg",
    duration: "4 Months",
    schedule: "Weekday & Weekend batches available",
    startDate: "New Cohort Starting Next Week",
    languages: "Tamil, English, Hindi",
    fee: "₹45,000 + 18% GST",
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
        title: "Python Programming & Applied Mathematics for AI",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600",
        badge: "Core Foundations",
        topics: [
          "Python Core, Advanced Data Structures, OOP & Decorators",
          "NumPy Arrays, Broadcasting & Matrix Computations",
          "Pandas Series, DataFrames, Data Cleaning & Feature Engineering",
          "Applied Linear Algebra, Probability, Calculus & Matrix Decomposition"
        ]
      },
      {
        num: "02",
        title: "Exploratory Data Analysis (EDA) & Data Visualization",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
        badge: "Data Insights",
        topics: [
          "Statistical Hypothesis Testing (t-tests, ANOVA, Chi-Square)",
          "Matplotlib & Seaborn Advanced Multidimensional Charts",
          "Data Preprocessing, Imputation, MinMax/Standard Scaling & One-Hot Encoding",
          "Identifying Multicollinearity with VIF & Correlation Heatmaps"
        ]
      },
      {
        num: "03",
        title: "Supervised Machine Learning & Predictive Modeling",
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=600",
        badge: "Predictive ML",
        topics: [
          "Linear, Polynomial & Logistic Regression with Regularization (L1/L2)",
          "Decision Trees, Bagging & Random Forest Classifiers",
          "Support Vector Machines (SVM), Kernels & K-Nearest Neighbors",
          "Gradient Boosting Classifiers (XGBoost, LightGBM, CatBoost)"
        ]
      },
      {
        num: "04",
        title: "Unsupervised Learning & Dimensionality Reduction",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
        badge: "Clustering & PCA",
        topics: [
          "K-Means, K-Medoids & Hierarchical Clustering",
          "Density-Based Spatial Clustering (DBSCAN) & Outlier Detection",
          "Principal Component Analysis (PCA) & t-SNE Dimensionality Reduction",
          "Collaborative Filtering & Content-Based Recommendation Engines"
        ]
      },
      {
        num: "05",
        title: "Deep Learning, CNNs & Natural Language Processing",
        image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=600",
        badge: "Neural Networks",
        topics: [
          "Artificial Neural Networks (ANN), Forward/Backpropagation & Optimizers",
          "Deep Learning Frameworks: PyTorch & TensorFlow / Keras Architecture",
          "Convolutional Neural Networks (CNN) for Image Recognition & Vision",
          "RNNs, LSTMs, Transformers & Hugging Face NLP Pipelines"
        ]
      },
      {
        num: "06",
        title: "ML Model Deployment, MLOps & Generative AI Systems",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600",
        badge: "Production AI & LLM",
        topics: [
          "Hyperparameter Tuning with Optuna & Model Cross-Validation",
          "Model Serialization & Microservices API Deployment using FastAPI",
          "Building Interactive AI Dashboards using Streamlit & Gradio",
          "Prompt Engineering, OpenAI/Claude API Integrations & RAG Architecture"
        ]
      }
    ],

    projects: [
      "Customer Churn Prediction & Retention Modeling System",
      "Real-Time Object Detection & Classification with PyTorch CNN",
      "Generative AI Document QA Bot with LangChain & OpenAI API",
      "Stock Price Trend Forecasting with LSTM Neural Networks",
      "Automated Medical Image Diagnostic Classifier"
    ],

    faculty: [
      {
        name: "Dr. K. Vignesh",
        role: "Lead AI Researcher @ Top Global Tech",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300&h=300",
        bio: "Ph.D. in Computer Science with 8+ years building enterprise Machine Learning pipelines and LLM systems.",
        tags: ["Machine Learning", "PyTorch Specialist", "NLP Lead"]
      }
    ],

    admissionSteps: [
      { step: "01", title: "Application Form", desc: "Submit your basic profile and select the AI/ML cohort." },
      { step: "02", title: "Domain Counseling", desc: "Connect with our AI team to evaluate your mathematical background." },
      { step: "03", title: "Live Workshop", desc: "Attend a live hands-on coding session with Python and ML libraries." },
      { step: "04", title: "Seat Confirmation", desc: "Lock your cohort seat with easy installment and scholarship options." },
      { step: "05", title: "LMS Onboarding", desc: "Access the pre-recorded prerequisite modules and lab repositories." },
      { step: "06", title: "Live Classes Begin", desc: "Start live cohort classes with industry mentors and 1-on-1 doubt clearing." }
    ],

    certificateCriteria: {
      participation: {
        title: "Certificate of Participation",
        req: "Minimum 80% attendance in live sessions and successful completion of weekly lab assignments.",
        issuer: "Issued by EZER Learning Solution"
      },
      completion: {
        title: "Certified AI/ML Practitioner",
        req: "Successfully complete 2 capstone projects, pass the final technical evaluation, and deliver an ML demo.",
        issuer: "Issued by EZER Learning Solution (ISO 9001:2015)"
      }
    },

    comparisonTable: [
      { feature: "Live Mentorship", us: "100% Live interactive classes with corporate AI engineers", others: "Pre-recorded videos with automated chatbot support" },
      { feature: "Placement Support", us: "12-Month dedicated placement team + up to 3 years community access", others: "Job board links only" },
      { feature: "Hands-on Labs", us: "Cloud GPU sandboxes & real industry datasets", others: "Local Jupyter notebooks with toy datasets" }
    ],

    installmentSchedule: [
      { stage: "Registration Deposit", detail: "Seat Confirmation", amount: "₹9,000" },
      { stage: "1st Installment", detail: "Start of Month 1", amount: "₹18,000 + GST" },
      { stage: "2nd Installment", detail: "Start of Month 2", amount: "₹18,000 + GST" }
    ],

    referralOffer: {
      title: "Refer & Earn ₹5,000",
      desc: "Refer a friend to any EZER Live Cohort and receive ₹5,000 directly once they enroll."
    },

    outcomes: ["AI/ML Engineer", "Data Scientist", "Machine Learning Specialist", "Python AI Developer"],

    faq: [
      { q: "Do I need coding experience to join?", a: "No, we start from absolute Python fundamentals before moving to advanced ML algorithms." },
      { q: "Are the classes live?", a: "Yes, 100% live interactive classes with screen sharing, live labs, and instant Q&A." }
    ]
  },

  {
    id: "fullstack-ai",
    title: "Full stack development with AI",
    slug: "fullstack-ai",
    badge: "Most Popular",
    tagline: "Master Modern Full-Stack Web Architecture Supercharged with Generative AI.",
    description: "Learn React, Node.js, Express, MongoDB, PostgreSQL, and integrate AI APIs (OpenAI, Claude) to build intelligent web apps that scale to millions of users.",
    tools: ["React", "Node.js", "Express", "MongoDB", "PostgreSQL", "TailwindCSS", "Next.js", "Docker", "Git"],
    image: "images/hero/full-stack-dev.jpeg",
    duration: "4 Months",
    schedule: "Weekday & Weekend batches available",
    startDate: "New Cohort Starting Next Week",
    languages: "Tamil, English, Hindi",
    fee: "₹42,000 + 18% GST",
    applicationFee: "Free Counseling Registration",

    whoIsItFor: [
      "Freshers aiming to become full-stack software engineers",
      "Frontend or backend developers upgrading to modern AI-assisted workflows",
      "Non-IT graduates and career switchers building real software applications",
      "Entrepreneurs & freelancers wanting to build end-to-end web platforms fast"
    ],

    curriculumModules: [
      {
        num: "01",
        title: "Modern Frontend Foundations & Advanced JavaScript (ES6+)",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600",
        badge: "Frontend Core",
        topics: [
          "HTML5 Semantic Architecture, Responsive Web Design & CSS Flexbox/Grid",
          "Modern JavaScript ES6+: Closures, Event Loop, Promises & Async/Await",
          "DOM Manipulation, Browser APIs, LocalStorage & Modular JS Architecture",
          "Version Control with Git, GitHub Collaboration, Branching & Pull Requests"
        ]
      },
      {
        num: "02",
        title: "Modern Frontend Framework: React.js & State Management",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600",
        badge: "React Ecosystem",
        topics: [
          "React Architecture, JSX, Virtual DOM, Components, Props & State",
          "React Hooks: useState, useEffect, useContext, useMemo, useCallback & Custom Hooks",
          "Routing with React Router v6 & Client-Side Single Page Application (SPA)",
          "Global State Management with Context API, Redux Toolkit & Zustand"
        ]
      },
      {
        num: "03",
        title: "Backend Engineering with Node.js, Express & REST APIs",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600",
        badge: "Backend & APIs",
        topics: [
          "Node.js Runtime Architecture, Event-Driven I/O & Streams/Buffers",
          "Developing RESTful APIs with Express.js Framework & Route Controllers",
          "Middleware Pipelines, Request Validation (Joi/Zod) & Global Error Handling",
          "User Authentication with JWT Tokens, bcrypt Hashing, Cookies & Role-Based Access Control"
        ]
      },
      {
        num: "04",
        title: "Database Engineering: PostgreSQL, Prisma & MongoDB",
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=600",
        badge: "Databases & ORM",
        topics: [
          "Relational Database Modeling, Schema Migrations & Queries in PostgreSQL",
          "Type-Safe Database Access using Prisma ORM & Supabase Backend",
          "NoSQL Document Modeling, Indexing & Aggregations with MongoDB & Mongoose",
          "Database Performance Optimization, Connection Pooling & Pagination"
        ]
      },
      {
        num: "05",
        title: "AI-Assisted Engineering & Generative AI Integration",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
        badge: "AI Full-Stack",
        topics: [
          "Developer Productivity Acceleration with GitHub Copilot & AI Code Reviewers",
          "Integrating LLMs & Vision APIs using OpenAI, Claude & Hugging Face SDKs",
          "Vector Embeddings, Semantic Search & Retrieval-Augmented Generation (RAG)",
          "Real-Time Full-Stack Applications with WebSockets, Socket.io & Streaming"
        ]
      },
      {
        num: "06",
        title: "Production Full-Stack Deployment, Testing & CI/CD",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
        badge: "Production & DevOps",
        topics: [
          "End-to-End & Unit Testing Frameworks using Vitest, Jest & Playwright",
          "Containerizing Full-Stack Apps with Docker & Docker Compose",
          "Production Cloud Deployments on Vercel, Render, AWS & DigitalOcean",
          "Live Enterprise Capstone Project & 12-Month Dedicated Placement Support"
        ]
      }
    ],

    projects: [
      "AI-Powered SaaS Content Generator Platform with Next.js & OpenAI",
      "E-Commerce Web Application with Payment Gateway & Cart Management",
      "Real-Time Collaborative Project Management Tool with WebSockets",
      "Full-Stack Social Network Platform with JWT Authentication",
      "Automated Code Review & AI Bug Fixer Web Tool"
    ],

    faculty: [
      {
        name: "Pradeep Rajan",
        role: "Senior Staff Full-Stack Engineer @ Global Tech",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300&h=300",
        bio: "10+ years engineering enterprise React and Node.js web applications. Trained 2,000+ web developers.",
        tags: ["React Specialist", "Node.js Architect", "AI Integration"]
      }
    ],

    admissionSteps: [
      { step: "01", title: "Register Profile", desc: "Select weekday or weekend batch for Full Stack Development with AI." },
      { step: "02", title: "Technical Counseling", desc: "Discuss your goals with our senior web engineering mentors." },
      { step: "03", title: "Live Workshop Demo", desc: "Attend a live session building a web app component from scratch." },
      { step: "04", title: "Seat Reservation", desc: "Reserve your seat with flexible monthly EMI plans." },
      { step: "05", title: "LMS & Sandbox Setup", desc: "Receive GitHub access, Node.js setup guides, and starter code repos." },
      { step: "06", title: "Cohort Launch", desc: "Begin live classes, capstone builds, and placement interview drives." }
    ],

    certificateCriteria: {
      participation: {
        title: "Certificate of Participation",
        req: "75% attendance in live coding sessions.",
        issuer: "Issued by EZER Learning Solution"
      },
      completion: {
        title: "Certified AI Full-Stack Developer",
        req: "Deploy 2 full-stack web applications on production domains with GitHub code.",
        issuer: "Issued by EZER Learning Solution (ISO 9001:2015)"
      }
    },

    comparisonTable: [
      { feature: "AI Workflows", us: "Generative AI API integration & GitHub Copilot workflows included", others: "Standard legacy MERN stack without AI" },
      { feature: "Projects", us: "Production multi-tier web applications deployed to Vercel/Render", others: "Basic todo apps and static pages" }
    ],

    installmentSchedule: [
      { stage: "Registration Deposit", detail: "Seat reservation", amount: "₹9,000" },
      { stage: "1st Installment", detail: "Month 1", amount: "₹16,500 + GST" },
      { stage: "2nd Installment", detail: "Month 2", amount: "₹16,500 + GST" }
    ],

    referralOffer: {
      title: "Refer & Earn ₹4,500",
      desc: "Refer a peer to Full Stack Development with AI and receive ₹4,500 cash reward."
    },

    outcomes: ["Full Stack Web Developer", "Frontend Engineer", "Backend Developer", "AI Web Application Engineer"],

    faq: [
      { q: "Can beginners join this course?", a: "Yes! We teach coding fundamentals from HTML/CSS and JavaScript before moving to React, Node.js, and AI API integration." }
    ]
  },

  {
    id: "data-analyst",
    title: "Data Analyst",
    slug: "data-analyst",
    badge: "Industry Favorite",
    tagline: "Turn Raw Data into High-Impact Business Decisions.",
    description: "Master Data Analysis using Advanced Excel, SQL Databases, Power BI, Tableau, and Python Data Visualization. Build interactive executive dashboards and business intelligence reports.",
    tools: ["SQL", "Power BI", "Tableau", "Python", "Pandas", "Excel", "PostgreSQL", "Google Data Studio"],
    image: "images/hero/data-analysis.jpeg",
    duration: "3 Months",
    schedule: "Weekday & Weekend batches available",
    startDate: "New Cohort Starting Next Week",
    languages: "Tamil, English, Hindi",
    fee: "₹36,000 + 18% GST",
    applicationFee: "Free Counseling Registration",

    whoIsItFor: [
      "Graduates from Commerce, Arts, Science, and Engineering seeking IT careers",
      "Business professionals wanting to transition into high-paying analytics roles",
      "Excel users wanting to master SQL, Power BI, and Python automation",
      "Finance and operations analysts aiming to modernize data reporting"
    ],

    curriculumModules: [
      {
        num: "01",
        title: "Advanced Microsoft Excel & Business Financial Modeling",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
        badge: "Excel Analytics",
        topics: [
          "Complex Formulae: XLOOKUP, INDEX/MATCH, Dynamic Arrays & Nested IFs",
          "Advanced Pivot Tables, Calculated Fields, Slicers & Timelines",
          "What-If Analysis, Data Tables, Scenario Manager & Goal Seek",
          "Power Query for Automated Data Cleaning, Transformation & Merging"
        ]
      },
      {
        num: "02",
        title: "Relational Databases & Advanced SQL for Analytics",
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=600",
        badge: "SQL Mastery",
        topics: [
          "Relational Database Fundamentals, Keys & Schemas in PostgreSQL/MySQL",
          "Complex Multi-Table JOINs (INNER, LEFT, RIGHT, FULL OUTER, CROSS)",
          "Window Functions: ROW_NUMBER, RANK, DENSE_RANK, LEAD, LAG & NTILE",
          "Subqueries, Common Table Expressions (CTEs), Aggregations & Grouping Sets"
        ]
      },
      {
        num: "03",
        title: "Power BI Business Intelligence & DAX Modeling",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
        badge: "Power BI BI",
        topics: [
          "Connecting Heterogeneous Data Sources via Power BI Desktop",
          "Data Modeling: Star Schema, Snowflake Schema & Cardinality",
          "DAX Calculations: CALCULATE, FILTER, ALL, RELATED & Time Intelligence",
          "Designing Interactive KPI Dashboards, Drill-Throughs & Row-Level Security"
        ]
      },
      {
        num: "04",
        title: "Visual Analytics & Storytelling with Tableau",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=600",
        badge: "Tableau Visuals",
        topics: [
          "Tableau Desktop Architecture & High-Performance Data Extracts (Hyper)",
          "Advanced Visuals: Dual-Axis Charts, Heat Maps, Tree Maps & Scatter Plots",
          "Parameters, Level of Detail (LOD) Expressions: FIXED, INCLUDE & EXCLUDE",
          "Building Executive Storyboards, Automated Refresh & Tableau Cloud Publishing"
        ]
      },
      {
        num: "05",
        title: "Python for Data Analysis & Statistical Modeling",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600",
        badge: "Python Analysis",
        topics: [
          "Python Fundamentals for Analytics & Jupyter Notebook Workflow",
          "Data Manipulation & Cleaning with Pandas & NumPy",
          "Visualizing Statistical Distributions with Matplotlib & Seaborn",
          "Exploratory Data Analysis (EDA) on Real-World Enterprise Datasets"
        ]
      },
      {
        num: "06",
        title: "Capstone Business Analytics Projects & Career Portfolio",
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=600",
        badge: "Executive Capstone",
        topics: [
          "E-Commerce Sales & Customer Retention Cohort Analysis",
          "Financial Revenue Forecasting & Profit Margin Optimization Report",
          "Supply Chain & Inventory Turnover Interactive Business Dashboard",
          "Resume Crafting, Mock Business Case Presentations & Placement Drive"
        ]
      }
    ],

    projects: [
      "Executive Sales & Revenue KPI Dashboard in Power BI",
      "Healthcare Patient Readmission Analytics in Tableau",
      "E-Commerce Customer Retention & RFM Analysis with SQL & Python",
      "Supply Chain Logistics Optimization Report in Excel & Power Query",
      "Financial Portfolio Risk Analysis & Forecasting Model"
    ],

    faculty: [
      {
        name: "Meera Krishnan",
        role: "Lead Business Intelligence Consultant @ Tier-1 Analytics",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300",
        bio: "9+ years designing enterprise BI dashboards and analytical pipelines for retail and healthcare giants.",
        tags: ["Power BI Expert", "SQL Specialist", "Tableau Certified"]
      }
    ],

    admissionSteps: [
      { step: "01", title: "Counseling Registration", desc: "Select Data Analyst track and schedule a counseling call." },
      { step: "02", title: "Aptitude Evaluation", desc: "Complete a simple 10-minute logic and data assessment." },
      { step: "03", title: "Live Demo Class", desc: "Attend a live class solving an actual business case with SQL and Power BI." },
      { step: "04", title: "Seat Reservation", desc: "Confirm seat with flexible installment or scholarship options." },
      { step: "05", title: "Tool Access", desc: "Install Power BI, PostgreSQL, and Python data environments." },
      { step: "06", title: "Cohort Launch", desc: "Start live cohort sessions and portfolio project builds." }
    ],

    certificateCriteria: {
      participation: {
        title: "Certificate of Participation",
        req: "Minimum 80% attendance in live workshops.",
        issuer: "Issued by EZER Learning Solution"
      },
      completion: {
        title: "Certified Business Data Analyst",
        req: "Build 2 interactive Power BI/Tableau dashboards and clear the SQL viva evaluation.",
        issuer: "Issued by EZER Learning Solution (ISO 9001:2015)"
      }
    },

    comparisonTable: [
      { feature: "Business Projects", us: "5 real company datasets (E-commerce, Retail, Healthcare)", others: "Basic public dummy datasets" },
      { feature: "Tool Coverage", us: "Excel + SQL + Power BI + Tableau + Python all included", others: "Only Power BI or only Excel" }
    ],

    installmentSchedule: [
      { stage: "Registration Deposit", detail: "Seat confirmation", amount: "₹8,000" },
      { stage: "1st Installment", detail: "Month 1", amount: "₹14,000 + GST" },
      { stage: "2nd Installment", detail: "Month 2", amount: "₹14,000 + GST" }
    ],

    referralOffer: {
      title: "Refer & Earn ₹4,000",
      desc: "Refer a peer to Data Analyst program and receive ₹4,000 voucher."
    },

    outcomes: ["Data Analyst", "Business Intelligence Analyst", "Power BI Developer", "SQL Reporting Specialist"],

    faq: [
      { q: "Is math/coding background required?", a: "No advanced math required! Basic arithmetic and logic are sufficient. We teach all tools from scratch." }
    ]
  },

  {
    id: "cloud-devops",
    title: "Cloud DevOps with AI",
    slug: "cloud-devops",
    badge: "Best Seller",
    tagline: "Automate, Deploy & Scale Infrastructure with AWS, Kubernetes & AI Tools.",
    description: "Industry-standard Cloud DevOps curriculum covering AWS, Linux, Docker, Kubernetes, Terraform, Jenkins, and AI-assisted infrastructure operations.",
    tools: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Ansible", "Linux", "GitHub Actions", "Prometheus", "Grafana"],
    image: "images/hero/cloud_deveops.png",
    duration: "4 Months",
    schedule: "Weekday & Weekend batches available",
    startDate: "New Cohort Starting Next Week",
    languages: "Tamil, English, Hindi",
    fee: "₹48,000 + 18% GST",
    applicationFee: "Free Counseling Registration",

    whoIsItFor: [
      "System Administrators and IT Support Engineers moving to Cloud/DevOps",
      "Software Developers wanting to manage cloud infrastructure and CI/CD",
      "Freshers aiming to enter high-paying Cloud & Site Reliability roles",
      "QA Engineers wanting to automate cloud testing environments"
    ],

    curriculumModules: [
      {
        num: "01",
        title: "Cloud Computing & Enterprise Multi-Cloud Architecture",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
        badge: "Cloud Architecture",
        topics: [
          "AWS & Azure Cloud Core Infrastructure, IAM Roles & Security Policies",
          "VPC Networking, Subnets, Route Tables, NAT Gateways & VPN Peering",
          "Elastic Compute (EC2), Auto-Scaling Groups & Load Balancers (ALB/NLB)",
          "Cloud Storage Solutions: AWS S3, EBS Volumes & Azure Blob Storage"
        ]
      },
      {
        num: "02",
        title: "Linux System Administration & Bash Shell Automation",
        image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=600",
        badge: "Linux Core",
        topics: [
          "Linux Architecture, File Hierarchy, User Privileges & SSH Key Auth",
          "Process Management, Systemd Daemons, Crontab Automation & Log Rotation",
          "Networking Utilities (iptables, netstat, curl, dig, traceroute)",
          "Advanced Bash Scripting for Automated Backups & System Health Checks"
        ]
      },
      {
        num: "03",
        title: "Containerization Mastery with Docker & Multi-Stage Builds",
        image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&q=80&w=600",
        badge: "Docker Engine",
        topics: [
          "Docker Engine Architecture, Namespaces, Cgroups & Container Lifecycle",
          "Writing Optimized Dockerfiles, Layer Caching & Multi-Stage Builds",
          "Docker Networking, Persistent Volumes & Environment Configs",
          "Multi-Container Orchestration with Docker Compose & Healthchecks"
        ]
      },
      {
        num: "04",
        title: "Container Orchestration with Production Kubernetes (K8s)",
        image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=600",
        badge: "Kubernetes (K8s)",
        topics: [
          "Kubernetes Architecture: Control Plane, Kubelet, etcd & Worker Nodes",
          "Pods, Deployments, ReplicaSets, StatefulSets & DaemonSets",
          "K8s Networking: ClusterIP, NodePort, LoadBalancer & Ingress Controllers",
          "ConfigMaps, Secrets Management, Resource Limits & Autoscaling (HPA/VPA)"
        ]
      },
      {
        num: "05",
        title: "Continuous Integration & Continuous Delivery (CI/CD)",
        image: "https://images.unsplash.com/photo-1618401471353-b98aedd04e11?auto=format&fit=crop&q=80&w=600",
        badge: "CI/CD Automation",
        topics: [
          "Git Workflows, Branching Strategies & Pull Request Automations",
          "Building Automated CI/CD Pipelines with Jenkins, GitHub Actions & GitLab CI",
          "Automated Testing, SonarQube Code Quality Gates & Artifact Management",
          "Zero-Downtime Deployment Strategies: Blue-Green, Canary & Rolling Updates"
        ]
      },
      {
        num: "06",
        title: "Infrastructure as Code (IaC) with Terraform & Ansible",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600",
        badge: "Terraform & IaC",
        topics: [
          "Declarative Infrastructure Provisioning using HashiCorp Terraform",
          "Terraform State Management, Remote Backends (S3/DynamoDB) & Modules",
          "Configuration Management & Multi-Node Provisioning with Ansible",
          "Writing Ansible Playbooks, Roles, Vaults & Automated Server Hardening"
        ]
      },
      {
        num: "07",
        title: "Observability, Enterprise Monitoring & Site Reliability (SRE)",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
        badge: "Monitoring & SRE",
        topics: [
          "Metrics Collection & Server Monitoring with Prometheus & Node Exporters",
          "Visualizing Real-Time Performance Dashboards with Grafana",
          "Centralized Distributed Log Management using ELK Stack & Grafana Loki",
          "Defining SLIs, SLOs, Error Budgets & PagerDuty Alert Management"
        ]
      },
      {
        num: "08",
        title: "AI-Assisted DevOps, GitOps & Production Capstone",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
        badge: "GitOps & Capstone",
        topics: [
          "GitOps Continuous Delivery using ArgoCD & Kubernetes Helm Charts",
          "AI-Assisted Infrastructure Automation with GitHub Copilot & LLM Agents",
          "Cloud Security, Secret Scanning, Trivy Container Scans & IAM Audits",
          "Enterprise Capstone: Multi-Region Production Microservices Deployment"
        ]
      }
    ],

    projects: [
      "Multi-Region AWS VPC Infrastructure Automation with Terraform",
      "High-Availability Kubernetes Microservices Deployment with Helm & Ingress",
      "Automated End-to-End CI/CD Pipeline using Jenkins & GitHub Actions",
      "Real-Time Server Monitoring System with Prometheus & Grafana",
      "Automated Disaster Recovery & Backup Pipeline on AWS S3"
    ],

    faculty: [
      {
        name: "Senthil Kumar",
        role: "Principal Cloud Architect @ Multi-Cloud Services",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300",
        bio: "14+ years designing cloud infrastructure on AWS and Kubernetes. Mentored 3,500+ DevOps engineers.",
        tags: ["AWS Certified", "Kubernetes CKA", "Terraform Specialist"]
      }
    ],

    admissionSteps: [
      { step: "01", title: "Select Batch", desc: "Choose weekday morning, evening, or weekend intensive DevOps batch." },
      { step: "02", title: "DevOps Counseling", desc: "Discuss your career roadmap and prior Linux/cloud knowledge." },
      { step: "03", title: "Live Lab Demo", desc: "Participate in a live session deploying Docker containers to AWS." },
      { step: "04", title: "Enrollment", desc: "Lock your seat with flexible monthly EMI plans." },
      { step: "05", title: "Cloud Sandbox Access", desc: "Get AWS lab access credits and terminal environment setup." },
      { step: "06", title: "Live Cohort Begins", desc: "Start live cohort classes with corporate architects." }
    ],

    certificateCriteria: {
      participation: {
        title: "Certificate of Participation",
        req: "Minimum 80% attendance in live classes and hands-on lab sessions.",
        issuer: "Issued by EZER Learning Solution & Partner Network"
      },
      completion: {
        title: "Certified Cloud & DevOps Engineer",
        req: "Deploy a production-ready Kubernetes microservices infrastructure using Terraform.",
        issuer: "Issued by EZER Learning Solution (ISO 9001:2015 Accredited)"
      }
    },

    comparisonTable: [
      { feature: "Live Cloud Labs", us: "Real AWS multi-region infrastructure provisioned in live classes", others: "Local virtual machines only" },
      { feature: "Kubernetes & IaC", us: "Production Kubernetes (EKS), Terraform & ArgoCD GitOps included", others: "Only basic Docker commands" }
    ],

    installmentSchedule: [
      { stage: "Registration Deposit", detail: "Seat confirmation", amount: "₹10,000" },
      { stage: "1st Installment", detail: "Month 1", amount: "₹19,000 + GST" },
      { stage: "2nd Installment", detail: "Month 2", amount: "₹19,000 + GST" }
    ],

    referralOffer: {
      title: "Refer & Earn ₹5,000",
      desc: "Refer a peer to Cloud DevOps cohort and receive ₹5,000 directly."
    },

    outcomes: ["Cloud DevOps Engineer", "Site Reliability Engineer (SRE)", "Kubernetes Administrator", "AWS Cloud Architect"],

    faq: [
      { q: "Is prior Linux knowledge required?", a: "We cover Linux fundamentals from ground zero in Module 2 before containerization." }
    ]
  },

  {
    id: "cyber-security",
    title: "Cyber Security",
    slug: "cyber-security",
    badge: "Trending",
    tagline: "Defend Enterprise Infrastructure & Master Ethical Hacking.",
    description: "Comprehensive hands-on Cyber Security curriculum covering Network Defense, Ethical Hacking, Web App Penetration Testing, SOC Operations, SIEM, and ISO 27001 compliance.",
    tools: ["Kali Linux", "Wireshark", "Metasploit", "Burp Suite", "Nmap", "Nessus", "Splunk", "Snort", "OWASP ZAP"],
    image: "images/hero/cyber.jpeg",
    duration: "4 Months",
    schedule: "Weekday & Weekend batches available",
    startDate: "New Cohort Starting Next Week",
    languages: "Tamil, English, Hindi",
    fee: "₹44,000 + 18% GST",
    applicationFee: "Free Counseling Registration",

    whoIsItFor: [
      "Freshers wanting to enter the high-demand Cyber Security & SOC field",
      "Network Engineers and System Admins moving to Security Engineering",
      "Software Developers wanting to master Secure Coding and Web App Pentesting",
      "IT professionals preparing for CEH, Security+, and SOC Analyst roles"
    ],

    curriculumModules: [
      {
        num: "01",
        title: "Networking Protocols & Cyber Security Fundamentals",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
        badge: "Network Security",
        topics: [
          "OSI Model, TCP/IP Suite, DNS, DHCP, ARP, HTTP/HTTPS & Subnetting",
          "Packet Analysis & Network Traffic Inspection with Wireshark & Tcpdump",
          "Firewall Architectures, IDS/IPS Systems & VPN Tunneling Configurations",
          "Linux & Windows Security Hardening, Access Control Lists & System Auditing"
        ]
      },
      {
        num: "02",
        title: "Information Gathering, Reconnaissance & Vulnerability Scanning",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600",
        badge: "Threat Recon",
        topics: [
          "Passive & Active Reconnaissance using OSINT Frameworks & Shodan",
          "Network Mapping, Port Scanning & Service Fingerprinting with Nmap",
          "Vulnerability Assessment & Patch Auditing using Nessus & OpenVAS",
          "Threat Modeling Frameworks: MITRE ATT&CK & Cyber Kill Chain"
        ]
      },
      {
        num: "03",
        title: "Ethical Hacking, Exploitation & Privilege Escalation",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600",
        badge: "Ethical Hacking",
        topics: [
          "Penetration Testing Methodologies & Setting Up Kali Linux Sandbox Labs",
          "Exploitation Frameworks: Metasploit, Searchsploit & Payload Generation",
          "Linux & Windows Privilege Escalation Techniques & Misconfiguration Exploits",
          "Password Cracking, Hash Analysis & Social Engineering Toolkit (SET)"
        ]
      },
      {
        num: "04",
        title: "Web Application Penetration Testing (OWASP Top 10)",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600",
        badge: "OWASP Pentesting",
        topics: [
          "Web Vulnerabilities: SQL Injection (SQLi), Cross-Site Scripting (XSS), CSRF",
          "Insecure Direct Object References (IDOR), SSRF & Broken Authentication",
          "Intercepting & Fuzzing Web Traffic using Burp Suite Professional",
          "API Security Testing, Authentication Tokens & JWT Vulnerability Audits"
        ]
      },
      {
        num: "05",
        title: "SOC Operations, SIEM Architecture & Incident Response",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=600",
        badge: "SOC & SIEM",
        topics: [
          "Security Operations Center (SOC) Workflows, Roles & Triaging Incidents",
          "Log Ingestion, Correlation Rules & Threat Detection with Splunk & Wazuh",
          "Endpoint Detection and Response (EDR) & Sysmon Telemetry Monitoring",
          "Incident Response Procedures: Identification, Containment, Eradication & Recovery"
        ]
      },
      {
        num: "06",
        title: "Compliance, Real-World Capture The Flag (CTF) & Placement",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
        badge: "CTF & Career",
        topics: [
          "Security Standards & Regulatory Frameworks: ISO 27001, NIST, GDPR & PCI-DSS",
          "Hands-on CTF Challenges on HackTheBox & TryHackMe Platforms",
          "Writing Professional Penetration Testing Reports & Remediation Guides",
          "Mock Technical & Security Analyst Interviews with 12-Month Placement Support"
        ]
      }
    ],

    projects: [
      "Enterprise Network Vulnerability Assessment & Hardening Audit Report",
      "OWASP Top 10 Web Application Penetration Testing on Staging Banking Portal",
      "SOC SIEM Log Ingestion & Incident Alerting Pipeline with Splunk",
      "Active Directory Domain Controller Compromise & Privilege Escalation Lab",
      "Ransomware Defense Simulation & Incident Response Playbook"
    ],

    faculty: [
      {
        name: "Arun Prakash",
        role: "Lead Penetration Tester & Security Architect @ InfoSec Labs",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=300",
        bio: "11+ years conducting ethical hacking, red team assessments, and SOC incident triage for financial institutions.",
        tags: ["CEH Master", "OSCP Certified", "SOC Analyst Lead"]
      }
    ],

    admissionSteps: [
      { step: "01", title: "Profile Registration", desc: "Select weekday or weekend batch for Cyber Security." },
      { step: "02", title: "Security Assessment", desc: "Evaluate your networking foundations with our security trainers." },
      { step: "03", title: "Live Lab Demo", desc: "Watch live demonstration of ethical hacking techniques on a secure sandbox." },
      { step: "04", title: "Seat Reservation", desc: "Confirm seat with flexible monthly EMI plans." },
      { step: "05", title: "Kali Linux Lab Setup", desc: "Receive access to our cloud virtual security lab sandbox." },
      { step: "06", title: "Cohort Launch", desc: "Start live cohort classes and participate in weekly CTF challenges." }
    ],

    certificateCriteria: {
      participation: {
        title: "Certificate of Participation",
        req: "Minimum 80% attendance in live workshops.",
        issuer: "Issued by EZER Learning Solution"
      },
      completion: {
        title: "Certified Cyber Security Specialist",
        req: "Pass practical CTF challenge and submit a comprehensive penetration testing report.",
        issuer: "Issued by EZER Learning Solution (ISO 9001:2015)"
      }
    },

    comparisonTable: [
      { feature: "Hands-on Labs", us: "Dedicated cloud Kali Linux sandboxes & live CTF challenges", others: "Slides and video theory without live labs" },
      { feature: "SOC & SIEM", us: "Real Splunk & Wazuh SIEM log triage training included", others: "Only basic tool commands" }
    ],

    installmentSchedule: [
      { stage: "Registration Deposit", detail: "Seat reservation", amount: "₹9,000" },
      { stage: "1st Installment", detail: "Month 1", amount: "₹17,500 + GST" },
      { stage: "2nd Installment", detail: "Month 2", amount: "₹17,500 + GST" }
    ],

    referralOffer: {
      title: "Refer & Earn ₹5,000",
      desc: "Refer a peer to Cyber Security cohort and receive ₹5,000 cash reward."
    },

    outcomes: ["Cyber Security Analyst", "SOC Analyst (L1/L2)", "Penetration Tester / Ethical Hacker", "Security Engineer"],

    faq: [
      { q: "Is prior coding experience mandatory?", a: "No, we cover scripting basics (Bash & Python) needed for security automation." }
    ]
  },

  {
    id: "spoken-english",
    title: "Spoken English (International standard)",
    slug: "spoken-english",
    badge: "Career Addon",
    tagline: "Speak Fluent, Confident English for Corporate Success & Global Client Interviews.",
    description: "Designed specifically for IT professionals, freshers, and non-native speakers to eliminate hesitation, master international business communication, write professional emails, and ace corporate interviews.",
    tools: ["Accent Training", "Interview Mastery", "Email Etiquette", "Group Discussions", "Presentation Skills"],
    image: "images/hero/spoken-english.jpg",
    duration: "2 Months",
    schedule: "Daily 1-Hour live speaking batches",
    startDate: "New Cohort Starting Next Week",
    languages: "English with Tamil explanations for beginners",
    fee: "₹12,000 + 18% GST",
    applicationFee: "Free Counseling Registration",

    whoIsItFor: [
      "Engineers and freshers who hesitate to speak English in client meetings",
      "Candidates preparing for technical and HR job interviews",
      "Working professionals needing better corporate email writing and presentation skills",
      "Anyone wanting to transition from local languages to fluent corporate English"
    ],

    curriculumModules: [
      {
        num: "01",
        title: "Fluency Foundations & Overcoming Hesitation",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600",
        badge: "Fluency Core",
        topics: [
          "Phonetics, Correct Pronunciation, Syllables & Word Stress",
          "Breaking Inbuilt Hesitation with Real-Time Daily Speaking Drills",
          "Thought-to-Speech Translation Elimination (Thinking Directly in English)",
          "Active Listening Comprehension with Native Accent Audio Drills"
        ]
      },
      {
        num: "02",
        title: "Grammar for Confident & Precise Corporate Communication",
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=600",
        badge: "Corporate Grammar",
        topics: [
          "Essential Tenses: Past, Present & Future in Professional Contexts",
          "Modal Verbs, Prepositions & Sentence Structure for Clear Articulation",
          "Vocabulary Expansion: Corporate Buzzwords, Phrasal Verbs & Idioms",
          "Eliminating Common Regional Mother-Tongue Influence (MTI) Errors"
        ]
      },
      {
        num: "03",
        title: "Corporate Business English, Meetings & Email Writing",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600",
        badge: "Business Comm",
        topics: [
          "Professional Email Etiquette, Escalation Templates & Status Reports",
          "Participating in Business Meetings, Group Discussions & Debates",
          "Telephone, Zoom & Teams Call Etiquette with Global Clients",
          "Delivering Confident Presentations, Data Explanations & Slide Pitches"
        ]
      },
      {
        num: "04",
        title: "International Interview Mastery & Executive Articulation",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
        badge: "Interview Prep",
        topics: [
          "Self-Introduction & STAR Method Answer Frameworks for HR/Tech Rounds",
          "Handling Tough & Unexpected Interview Questions Confidently",
          "Non-Verbal Communication: Body Language, Eye Contact & Voice Modulation",
          "1-on-1 Simulated Mock Interviews with Video Recording & Mentor Feedback"
        ]
      }
    ],

    projects: [
      "Live Corporate Product Presentation & Public Speaking Video",
      "Formal Corporate Email & Proposal Writing Portfolio",
      "1-on-1 Simulated HR & Technical Interview Recordings with Mentor Review",
      "Group Discussion & Debate Chamber Certificate Session"
    ],

    faculty: [
      {
        name: "Jennifer Adams",
        role: "Senior International Communication Trainer",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300&h=300",
        bio: "12+ years coaching professionals for international corporate interviews, IELTS, and business communication.",
        tags: ["Voice & Accent Lead", "Corporate Trainer", "Interview Coach"]
      }
    ],

    admissionSteps: [
      { step: "01", title: "Select Addon Course", desc: "Enroll in Spoken English (International Standard) separately or alongside your IT track." },
      { step: "02", title: "Fluency Assessment", desc: "Take a brief 10-minute diagnostic speaking check with our communication trainer." },
      { step: "03", title: "Batch Allocation", desc: "Get assigned to a beginner, intermediate, or advanced fluency group." },
      { step: "04", title: "Live Speaking Classes", desc: "Participate in daily interactive speaking drills, debates, and presentation sessions." }
    ],

    certificateCriteria: {
      participation: {
        title: "Certificate of Participation",
        req: "Minimum 80% attendance in live speaking workshops.",
        issuer: "Issued by EZER Learning Solution"
      },
      completion: {
        title: "Certified International Business Communicator",
        req: "Pass final oral presentation assessment and mock interview evaluation.",
        issuer: "Issued by EZER Learning Solution (ISO 9001:2015)"
      }
    },

    comparisonTable: [
      { feature: "Focus", us: "100% Practical Speaking Drills & Mock HR Interviews", others: "Passive grammar rules writing on paper" },
      { feature: "Standards", us: "International corporate business English standards", others: "Basic school level English" }
    ],

    installmentSchedule: [
      { stage: "Registration Deposit", detail: "Course Enrollment", amount: "₹4,000" },
      { stage: "Final Payment", detail: "Start of Month 2", amount: "₹8,000 + GST" }
    ],

    referralOffer: {
      title: "Refer & Earn ₹1,500",
      desc: "Refer a peer to the Spoken English Addon course and receive a ₹1,500 voucher."
    },

    outcomes: ["Confident Corporate Communicator", "Fluent English Speaker", "HR Interview Specialist", "Client Presentation Lead"],

    faq: [
      { q: "Is Tamil explanation available for beginners?", a: "Yes! Mentors provide bilingual support in Tamil to help beginners transition easily into fluent English." }
    ]
  },

  {
    id: "software-testing-playwright",
    title: "Software Testing – Playwright",
    slug: "software-testing-playwright",
    badge: "Specialized Track",
    tagline: "Master Modern End-to-End Test Automation with Playwright & CI/CD Pipelines.",
    description: "From manual testing fundamentals to advanced Playwright automation with TypeScript, API testing, visual regression, and GitHub Actions CI/CD integration.",
    tools: ["Playwright", "TypeScript", "JavaScript", "Jira", "Postman", "GitHub Actions", "Docker", "Allure Reports"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
    duration: "3 Months",
    schedule: "Weekday & Weekend batches available",
    startDate: "New Cohort Starting Next Week",
    languages: "Tamil, English, Hindi",
    fee: "₹38,000 + 18% GST",
    applicationFee: "Free Counseling Registration",

    whoIsItFor: [
      "Manual QA Testers looking to switch to fast, modern Test Automation",
      "Freshers and Computer Science graduates entering QA & Test Engineering",
      "Software Developers wanting to build reliable automated test suites",
      "Automation engineers switching from legacy Selenium to modern Playwright"
    ],

    curriculumModules: [
      {
        num: "01",
        title: "Manual Testing Fundamentals & QA Methodologies",
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=600",
        badge: "QA Fundamentals",
        topics: [
          "Software Testing Life Cycle (STLC) & Software Development Life Cycle (SDLC)",
          "Test Plan Creation, Test Scenarios, Test Cases & Traceability Matrix (RTM)",
          "Bug Tracking, Defect Life Cycle & Management in Jira",
          "Agile Scrum Methodologies, Sprint Ceremonies & QA Acceptance Criteria"
        ]
      },
      {
        num: "02",
        title: "JavaScript & TypeScript Fundamentals for Automation",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600",
        badge: "JS & TypeScript",
        topics: [
          "JavaScript ES6+ & TypeScript Data Types, Functions & Async Programming",
          "DOM Traversal, CSS Selectors & XPath Strategies for Web Elements",
          "Object-Oriented Programming (OOP) in TypeScript for Automation Suites",
          "Node.js Runtime Environment, NPM Package Management & Git Basics"
        ]
      },
      {
        num: "03",
        title: "Core Playwright Automation & Browser Interactions",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600",
        badge: "Playwright Core",
        topics: [
          "Playwright Architecture, Headless vs Headed Modes & Fast Execution",
          "Interacting with Web Elements: Inputs, Dropdowns, Checkboxes, Dialogs & Frames",
          "Handling Dynamic Waits, Auto-Waiting, Custom Assertions & Timeouts",
          "Multi-Tab, Multi-Window & Multi-Browser Contexts (Chromium, Firefox, WebKit)"
        ]
      },
      {
        num: "04",
        title: "Page Object Model (POM) & Framework Design",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=600",
        badge: "Framework Design",
        topics: [
          "Designing Scalable Automation Frameworks with Page Object Model (POM)",
          "Custom Fixtures, Hooks & Global Setup/Teardown Configurations",
          "Data-Driven Testing using JSON, CSV & Excel Data Sources",
          "Environment Configuration Management (dev, staging, production)"
        ]
      },
      {
        num: "05",
        title: "API Testing, Performance & Visual Regression with Playwright",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
        badge: "API & Visual QA",
        topics: [
          "REST API Testing with Playwright Request Contexts (GET, POST, PUT, DELETE)",
          "Visual Comparison & Screenshot Snapshot Regression Testing",
          "Emulating Mobile Devices, Geolocation, Timezones & Network Throttling",
          "Generating Rich HTML & Allure Test Execution Reports"
        ]
      },
      {
        num: "06",
        title: "CI/CD Pipeline Integration & QA Capstone",
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=600",
        badge: "CI/CD & Capstone",
        topics: [
          "Integrating Playwright Suites into GitHub Actions & Jenkins CI/CD Pipelines",
          "Parallel Cross-Browser Execution & Dockerized Test Runners",
          "AI-Assisted Test Generation & Self-Healing Automation Scripts",
          "Live Industry E-Commerce Automation Capstone & Placement Preparation"
        ]
      }
    ],

    projects: [
      "End-to-End Playwright Automation Suite for E-Commerce Checkout Flow",
      "RESTful API Test Automation Framework with Data-Driven Assertions",
      "Cross-Browser Visual Regression Suite with Automated Snapshot Diffing",
      "GitHub Actions Automated CI/CD Pipeline for QA Test Reporting"
    ],

    faculty: [
      {
        name: "Rajesh Kannan",
        role: "Senior Automation Architect @ Cloud QA",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300",
        bio: "9+ years designing test automation frameworks for banking and healthcare applications.",
        tags: ["Playwright Lead", "TypeScript Expert", "CI/CD QA"]
      }
    ],

    admissionSteps: [
      { step: "01", title: "Profile Registration", desc: "Select Playwright Automation cohort." },
      { step: "02", title: "QA Counseling", desc: "Discuss your testing experience with our senior QA leads." },
      { step: "03", title: "Live Demo Class", desc: "Experience live script execution with Playwright inspector." },
      { step: "04", title: "Seat Reservation", desc: "Reserve your seat with flexible monthly payment plans." },
      { step: "05", title: "Environment Setup", desc: "Install Node.js, VS Code, and Playwright dependencies." },
      { step: "06", title: "Live Cohort Begins", desc: "Start live classes and framework building." }
    ],

    certificateCriteria: {
      participation: {
        title: "Certificate of Participation",
        req: "Minimum 80% attendance in live sessions.",
        issuer: "Issued by EZER Learning Solution"
      },
      completion: {
        title: "Certified Playwright Automation Engineer",
        req: "Build an end-to-end framework repository with CI/CD GitHub Actions integration.",
        issuer: "Issued by EZER Learning Solution (ISO 9001:2015)"
      }
    },

    comparisonTable: [
      { feature: "Modern Tooling", us: "Playwright with TypeScript & CI/CD GitHub Actions", others: "Outdated Selenium with legacy drivers" },
      { feature: "Speed & Reliability", us: "Auto-waiting & parallel multi-browser execution", others: "Flaky tests with static sleep timers" }
    ],

    installmentSchedule: [
      { stage: "Registration Deposit", detail: "Seat reservation", amount: "₹8,000" },
      { stage: "1st Installment", detail: "Month 1", amount: "₹15,000 + GST" },
      { stage: "2nd Installment", detail: "Month 2", amount: "₹15,000 + GST" }
    ],

    referralOffer: {
      title: "Refer & Earn ₹4,000",
      desc: "Refer a peer to Software Testing – Playwright and earn ₹4,000 reward."
    },

    outcomes: ["SDET / Automation Engineer", "QA Automation Lead", "Playwright Specialist", "API Test Engineer"],

    faq: [
      { q: "Do I need coding experience?", a: "We teach JavaScript and TypeScript fundamentals from scratch in Module 2 before building automation suites." }
    ]
  },

  {
    id: "agentic-gen-ai",
    title: "Agentic AI & Generative AI",
    slug: "agentic-gen-ai",
    badge: "Next-Gen AI",
    tagline: "Build Autonomous AI Agents, RAG Pipelines & Multi-Agent Ecosystems.",
    description: "Master autonomous AI agents using LangChain, LangGraph, AutoGen, CrewAI, vector databases, and multi-agent enterprise deployment architectures.",
    tools: ["LangChain", "LangGraph", "AutoGen", "CrewAI", "Pinecone", "ChromaDB", "FastAPI", "OpenAI API", "Anthropic Claude", "Ollama"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
    duration: "4 Months",
    schedule: "Weekday & Weekend batches available",
    startDate: "New Cohort Starting Next Week",
    languages: "Tamil, English, Hindi",
    fee: "₹48,000 + 18% GST",
    applicationFee: "Free Counseling Registration",

    whoIsItFor: [
      "Software Developers wanting to build autonomous AI applications and agents",
      "Data Scientists and AI Engineers moving to production Generative AI",
      "Tech Leads & Architects implementing Enterprise LLM solutions",
      "Founders and innovators building AI-first SaaS platforms"
    ],

    curriculumModules: [
      {
        num: "01",
        title: "LLM Foundations, Prompt Engineering & Advanced Architectures",
        image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=600",
        badge: "LLM Core",
        topics: [
          "Transformer Architecture, Attention Mechanisms & Tokenization",
          "Prompt Engineering Strategies: Few-Shot, Chain-of-Thought & Tree-of-Thoughts",
          "OpenAI API, Anthropic Claude SDK & Open-Source Models (Llama 3, Mistral)",
          "Structured Outputs, Function Calling & JSON Schema Enforcement"
        ]
      },
      {
        num: "02",
        title: "Retrieval-Augmented Generation (RAG) & Vector Databases",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600",
        badge: "RAG & Vectors",
        topics: [
          "Vector Embeddings, Cosine Similarity & Dense Retrieval Models",
          "Document Ingestion, Semantic Chunking & Metadata Filtering",
          "Vector Databases: Pinecone, ChromaDB, Weaviate & pgvector in PostgreSQL",
          "Hybrid Search, Reranking & Context Compression for High-Accuracy RAG"
        ]
      },
      {
        num: "03",
        title: "Frameworks for LLM Applications: LangChain & LlamaIndex",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600",
        badge: "LangChain Ecosystem",
        topics: [
          "LangChain Core: Prompts, Models, Output Parsers & Chains",
          "Memory Systems: ConversationBuffer, VectorStoreRetriever & Summary Memory",
          "LlamaIndex Data Connectors, Knowledge Graphs & Advanced Query Engines",
          "Evaluation Frameworks for RAG Pipelines (RAGAS & TruLens)"
        ]
      },
      {
        num: "04",
        title: "Autonomous AI Agents & Multi-Agent Orchestration",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600",
        badge: "Agentic Systems",
        topics: [
          "Autonomous Agent Architectures: ReAct Pattern, Planning & Tool Use",
          "Multi-Agent Collaboration using LangGraph, AutoGen & CrewAI",
          "Agent Memory, State Machines & Human-in-the-Loop Approval Workflows",
          "Building Specialized Agents: Research Agents, Code Reviewers & Data Analysts"
        ]
      },
      {
        num: "05",
        title: "Fine-Tuning LLMs & Local Deployment Strategies",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600",
        badge: "Fine-Tuning & Local LLMs",
        topics: [
          "Parameter-Efficient Fine-Tuning (PEFT) & Low-Rank Adaptation (LoRA / QLoRA)",
          "Dataset Preparation, Formatting & Synthetic Data Generation",
          "Quantization Techniques (GGUF, AWQ, GPTQ) & Local Inference with Ollama / vLLM",
          "Guardrails & Safety: NeMo Guardrails, Prompt Injection Defense & Moderation"
        ]
      },
      {
        num: "06",
        title: "Production Agentic AI Deployment & Enterprise Capstone",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
        badge: "Production Capstone",
        topics: [
          "Building Scalable Backend APIs with FastAPI, WebSockets & Streaming Responses",
          "Monitoring, Tracing & Cost Observability with LangSmith & Phoenix",
          "Deploying Production Multi-Agent Systems to AWS & Docker Containers",
          "Capstone: Autonomous Enterprise Customer Support & Knowledge Intelligence Agent"
        ]
      }
    ],

    projects: [
      "Autonomous Multi-Agent Market Research & Report Generation System",
      "Enterprise Private Document RAG Assistant with Hybrid Search & Reranking",
      "Autonomous Code Refactoring & Pull Request Review Agent with LangGraph",
      "Local Privacy-First Medical Knowledge LLM Engine using Ollama & LoRA"
    ],

    faculty: [
      {
        name: "Dr. K. Vignesh",
        role: "Lead AI Researcher @ Top Global Tech",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300&h=300",
        bio: "Ph.D. in Computer Science with 8+ years building enterprise Machine Learning pipelines and LLM systems.",
        tags: ["Agentic AI", "LangChain Lead", "LLM Architect"]
      }
    ],

    admissionSteps: [
      { step: "01", title: "Application Form", desc: "Submit your basic profile and select the Agentic AI cohort." },
      { step: "02", title: "Technical Counseling", desc: "Evaluate your Python background with our AI architects." },
      { step: "03", title: "Live Agent Demo", desc: "Experience building an autonomous agent live in class." },
      { step: "04", title: "Seat Confirmation", desc: "Lock your cohort seat with flexible EMI options." },
      { step: "05", title: "LLM API Access", desc: "Receive OpenAI/Claude API keys and lab sandbox credits." },
      { step: "06", title: "Cohort Launch", desc: "Start building autonomous multi-agent systems." }
    ],

    certificateCriteria: {
      participation: {
        title: "Certificate of Participation",
        req: "Minimum 80% attendance in live sessions.",
        issuer: "Issued by EZER Learning Solution"
      },
      completion: {
        title: "Certified Agentic AI Architect",
        req: "Deploy a production multi-agent system with LangGraph and evaluate accuracy using RAGAS.",
        issuer: "Issued by EZER Learning Solution (ISO 9001:2015)"
      }
    },

    comparisonTable: [
      { feature: "Multi-Agent Systems", us: "LangGraph, AutoGen & CrewAI multi-agent orchestration included", others: "Basic single prompt chatbot wrappers" },
      { feature: "Production MLOps", us: "LangSmith observability, vector index caching & cost optimization", others: "Simple toy scripts on free tiers" }
    ],

    installmentSchedule: [
      { stage: "Registration Deposit", detail: "Seat confirmation", amount: "₹10,000" },
      { stage: "1st Installment", detail: "Month 1", amount: "₹19,000 + GST" },
      { stage: "2nd Installment", detail: "Month 2", amount: "₹19,000 + GST" }
    ],

    referralOffer: {
      title: "Refer & Earn ₹5,000",
      desc: "Refer a peer to Agentic AI & Generative AI and earn ₹5,000 cash reward."
    },

    outcomes: ["Agentic AI Engineer", "Generative AI Architect", "LLM Application Developer", "AI Solutions Engineer"],

    faq: [
      { q: "What are the prerequisites?", a: "Intermediate Python proficiency is recommended. We cover all Generative AI concepts from ground up." }
    ]
  },

  {
    id: "data-engineering",
    title: "Data Engineering",
    slug: "data-engineering",
    badge: "High Growth",
    tagline: "Build Scalable Big Data Pipelines with PySpark, Snowflake, Kafka & Airflow.",
    description: "Master Modern Data Stack engineering: Batch & Streaming ETL pipelines, PySpark, Snowflake Data Warehousing, Apache Kafka, and Apache Airflow orchestration.",
    tools: ["Python", "PySpark", "Snowflake", "Apache Kafka", "Apache Airflow", "SQL", "dbt", "AWS Glue", "PostgreSQL", "Docker"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600",
    duration: "4 Months",
    schedule: "Weekday & Weekend batches available",
    startDate: "New Cohort Starting Next Week",
    languages: "Tamil, English, Hindi",
    fee: "₹45,000 + 18% GST",
    applicationFee: "Free Counseling Registration",

    whoIsItFor: [
      "Data Analysts and SQL Developers wanting to transition into Big Data Engineering",
      "Software Engineers wanting to build enterprise data platforms & lakehouses",
      "Freshers aiming to enter high-demand Data Pipeline Engineering roles",
      "Database Administrators (DBAs) moving to Modern Cloud Data Warehousing"
    ],

    curriculumModules: [
      {
        num: "01",
        title: "Modern Data Engineering Foundations & Advanced Python",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600",
        badge: "Core Data Stack",
        topics: [
          "Data Engineering Ecosystem: OLTP vs OLAP, Data Lakes, Warehouses & Lakehouses",
          "Python for Data Engineering: Generators, Multiprocessing, AsyncIO & PyArrow",
          "Advanced SQL for Data Warehousing: Partitioning, Window Functions & CTEs",
          "Linux Server Setup, Cron Orchestration & Shell Scripting for Data Tasks"
        ]
      },
      {
        num: "02",
        title: "Distributed Big Data Processing with Apache Spark & PySpark",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
        badge: "Apache Spark",
        topics: [
          "Spark Architecture: Drivers, Executors, RDDs, DataFrames & Tungsten Engine",
          "PySpark Transformations, Actions, Lazy Evaluation & Catalyst Optimizer",
          "Optimizing Spark Jobs: Partitioning, Caching, Broadcast Joins & Shuffle Reduction",
          "Lakehouse Storage Formats: Delta Lake, Apache Iceberg & ACID Transactions"
        ]
      },
      {
        num: "03",
        title: "Data Warehousing with Snowflake, BigQuery & dbt",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=600",
        badge: "Snowflake & dbt",
        topics: [
          "Snowflake Architecture: Storage, Virtual Warehouses & Cloud Services",
          "Snowflake Features: Time Travel, Zero-Copy Cloning & Snowpipe Ingestion",
          "Data Transformation & Modeling with dbt (data build tool)",
          "Writing dbt Models, Tests, Snapshots, Jinja Macros & Documentation"
        ]
      },
      {
        num: "04",
        title: "Real-Time Event Streaming with Apache Kafka",
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=600",
        badge: "Kafka Streaming",
        topics: [
          "Event-Driven Architecture, Kafka Topics, Partitions & Consumer Groups",
          "Kafka Producers, Consumers & Schema Registry with Apache Avro",
          "Real-Time Stream Processing using Spark Structured Streaming & Kafka",
          "Handling Late Data, Watermarking & Exactly-Once Processing Semantics"
        ]
      },
      {
        num: "05",
        title: "Data Pipeline Orchestration with Apache Airflow",
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=600",
        badge: "Airflow Orchestration",
        topics: [
          "Workflow Automation Fundamentals & Directed Acyclic Graphs (DAGs)",
          "Airflow Architecture: Webserver, Scheduler, Metadata Database & Celery Workers",
          "Custom Airflow Operators, Sensors, TaskGroups & XComs for Data Exchange",
          "Monitoring Data Pipelines, Retries, SLAs & Slack/PagerDuty Alerts"
        ]
      },
      {
        num: "06",
        title: "Cloud Data Engineering (AWS/Azure) & Production Capstone",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
        badge: "Cloud Lakehouse Capstone",
        topics: [
          "AWS Big Data Services: AWS Glue, EMR, Athena, Redshift & S3 Data Lake",
          "Cloud Security, IAM Policies, Data Encryption & GDPR/HIPAA Compliance",
          "End-to-End Capstone: Automated Real-Time & Batch Data Lakehouse Pipeline",
          "Career Coaching, Data Architecture Interview Simulations & Placement Drive"
        ]
      }
    ],

    projects: [
      "Real-Time FinTech Transaction Fraud Detection Streaming with Kafka & Spark",
      "Automated E-Commerce Data Lakehouse Pipeline using Delta Lake & Airflow",
      "Modern Data Warehouse Analytics Platform with Snowflake & dbt",
      "Automated Health Analytics Ingestion Pipeline with AWS Glue & Athena"
    ],

    faculty: [
      {
        name: "Senthil Kumar",
        role: "Principal Data & Cloud Architect",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300",
        bio: "14+ years architecting petabyte-scale data pipelines and cloud lakehouses.",
        tags: ["PySpark Expert", "Snowflake Architect", "Kafka Specialist"]
      }
    ],

    admissionSteps: [
      { step: "01", title: "Application Registration", desc: "Select Data Engineering cohort." },
      { step: "02", title: "Profile Evaluation", desc: "Discuss your SQL and Python background with our architects." },
      { step: "03", title: "Live Pipeline Demo", desc: "Watch a live session building a PySpark and Snowflake ETL pipeline." },
      { step: "04", title: "Seat Reservation", desc: "Lock your cohort seat with flexible monthly EMI plans." },
      { step: "05", title: "Sandbox Access", desc: "Get Snowflake and cloud cluster sandbox access." },
      { step: "06", title: "Cohort Launch", desc: "Start live cohort classes and capstone pipeline builds." }
    ],

    certificateCriteria: {
      participation: {
        title: "Certificate of Participation",
        req: "Minimum 80% attendance in live sessions.",
        issuer: "Issued by EZER Learning Solution"
      },
      completion: {
        title: "Certified Big Data Engineer",
        req: "Deploy an end-to-end streaming data pipeline with PySpark, Kafka, and Snowflake.",
        issuer: "Issued by EZER Learning Solution (ISO 9001:2015)"
      }
    },

    comparisonTable: [
      { feature: "Distributed Processing", us: "Real PySpark clusters, Snowflake & Kafka streaming included", others: "Only standard SQL queries on single databases" },
      { feature: "Modern Data Stack", us: "dbt, Airflow orchestration & Delta Lake lakehouses", others: "Legacy basic tools" }
    ],

    installmentSchedule: [
      { stage: "Registration Deposit", detail: "Seat confirmation", amount: "₹9,000" },
      { stage: "1st Installment", detail: "Month 1", amount: "₹18,000 + GST" },
      { stage: "2nd Installment", detail: "Month 2", amount: "₹18,000 + GST" }
    ],

    referralOffer: {
      title: "Refer & Earn ₹5,000",
      desc: "Refer a peer to Data Engineering and earn ₹5,000 cash reward."
    },

    outcomes: ["Data Engineer", "Big Data Developer", "PySpark / Snowflake Engineer", "Data Platform Architect"],

    faq: [
      { q: "Is prior Python experience required?", a: "Basic programming or SQL knowledge is helpful. We cover advanced Python for data engineering in Module 1." }
    ]
  }
];

export const phase2Courses = [];

export function getCourseBySlug(slug) {
  if (!slug) return null;
  const raw = String(slug).toLowerCase().trim().replace(/^#/, '').replace(/_course$/, '');
  const normalized = raw.replace(/[^a-z0-9]/g, '');
  const all = [...phase1Courses, ...phase2Courses];
  return all.find(c => {
    const cSlugNorm = (c.slug || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    const cIdNorm = (c.id || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    const cTitleNorm = (c.title || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    return c.slug === slug || c.id === slug || c.slug === raw || c.id === raw || 
           cSlugNorm === normalized || cIdNorm === normalized || cTitleNorm === normalized;
  }) || null;
}
