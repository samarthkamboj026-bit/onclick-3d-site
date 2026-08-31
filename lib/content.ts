export interface ContentSection {
  title: string;
  body?: string;
  items?: { title: string; desc: string }[];
  list?: string[];
}

export interface PageContent {
  slug: string;
  path: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSub: string;
  cta: string;
  ctaSecondary?: string;
  sections: ContentSection[];
  faqs?: { q: string; a: string }[];
}

export const PAGES: Record<string, PageContent> = {
  about: {
    slug: "about",
    path: "/about",
    metaTitle: "About Onclick Innovations - Software & AI Company in Mohali",
    metaDescription:
      "Mohali-based strategic technology partner with over a decade of experience in engineering high-performance web, mobile, and AI solutions.",
    h1: "Redefining Success Through Strategic Innovation",
    heroSub:
      "Onclick Innovations Pvt. Ltd. is a Mohali, Punjab-based strategic technology partner. We do not just build software; we engineer growth and long-term value.",
    cta: "Connect With Our Team",
    sections: [
      {
        title: "Our History",
        body: "Since 2015, Onclick Innovations has served as a trusted partner for startups and enterprises globally, delivering robust web, mobile, and cloud-based solutions.",
      },
      {
        title: "Our Mission",
        body: "We aim to help businesses innovate faster, automate smarter, and grow confidently through scalable software, AI-driven solutions, and strategic technology execution.",
      },
      {
        title: "Our Vision",
        body: "To become a trusted technology partner for businesses by delivering innovative, scalable, and future-ready digital solutions that drive long-term growth and transformation.",
      },
      {
        title: "Our Core Values",
        items: [
          {
            title: "Client-Centricity",
            desc: "Your goals are our compass. We listen, adapt, and innovate to ensure your vision becomes a market-leading reality.",
          },
          {
            title: "Uncompromising Integrity",
            desc: "Transparency and trust are the bedrock of our operations. We deliver on our promises with high ethical standards.",
          },
          {
            title: "Results-Oriented",
            desc: "We measure success by your growth. Every strategic decision is engineered to deliver measurable business impact.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "When was Onclick Innovations founded?",
        a: "Onclick Innovations was founded in 2015 in Mohali, Punjab, India, and has been operating continuously as an enterprise technology services provider.",
      },
      {
        q: "What industries does Onclick Innovations serve?",
        a: "Healthcare, Banks, Retail & E-commerce, IT & Services, Generative AI, Travel & Hospitality, and FinTech / Financial Services.",
      },
      {
        q: "Where is your development center?",
        a: "Our headquarters and development center is in Sector 74, Phase 8B, Mohali, Punjab, India.",
      },
    ],
  },

  services: {
    slug: "services",
    path: "/services",
    metaTitle: "Software, AI & Automation Services | Onclick Innovations",
    metaDescription:
      "Professional software, AI, automation, web, and mobile app services designed to help businesses build and scale digital products.",
    h1: "Tailored IT Solutions for Your Success",
    heroSub:
      "From our Mohali, Punjab delivery team, Onclick Innovations designs tailored digital solutions for software, mobile apps, AI automation, and enterprise systems.",
    cta: "Get a Quote",
    sections: [
      {
        title: "We Are Your Technology Partner",
        body: "We understand that every business is unique, with its own challenges and goals. Our team focuses on building secure, future-ready digital systems that improve efficiency, automate operations, and support measurable business impact.",
      },
      {
        title: "Why Our Services are Better Than Others?",
        list: [
          "Quality Comes First",
          "On-time Delivery",
          "Qualified Developers",
          "Flexible Cooperation",
          "Transparent Costs",
          "Quick Scale-up",
        ],
      },
    ],
  },

  "custom-software": {
    slug: "custom-software",
    path: "/services/custom-software",
    metaTitle: "Custom Software Development | Onclick Innovations",
    metaDescription:
      "High-performance web applications and modern digital platforms designed for scalability, speed, security, and exceptional user experiences.",
    h1: "Custom Software Development",
    heroSub:
      "We create high-performance web applications and modern digital platforms designed for scalability, speed, security, and exceptional user experiences.",
    cta: "Get a Quote",
    sections: [
      {
        title: "What We Deliver",
        items: [
          { title: "Custom Web Applications", desc: "Develop scalable and feature-rich web platforms tailored to your business operations and goals." },
          { title: "Responsive UI/UX Design", desc: "Create modern, mobile-friendly, and user-focused interfaces optimized for seamless digital experiences." },
          { title: "Enterprise & SaaS Platforms", desc: "Build secure, cloud-ready, and scalable enterprise systems capable of handling growing business demands." },
          { title: "API & System Integrations", desc: "Connect applications, services, and platforms seamlessly using modern API-driven architectures." },
          { title: "High-Performance Architecture", desc: "Develop optimized systems focused on speed, reliability, scalability, and long-term maintainability." },
        ],
      },
      {
        title: "Our Process",
        items: [
          { title: "Requirement Analysis", desc: "Detailed gathering of business needs and technical constraints." },
          { title: "Architecture Design", desc: "Planning a scalable, secure, and maintainable software structure." },
          { title: "Core Development", desc: "Building custom modules and features using modern frameworks." },
          { title: "QA & Integration", desc: "Ensuring new software works perfectly with your existing systems." },
        ],
      },
    ],
  },

  "ai-development": {
    slug: "ai-development",
    path: "/services/ai-development",
    metaTitle: "AI Development Services | Onclick Innovations",
    metaDescription:
      "AI-powered software solutions that help businesses automate workflows, optimize operations, and accelerate digital growth.",
    h1: "AI-Powered Software Solutions",
    heroSub:
      "We develop AI-powered software solutions that help businesses automate workflows, optimize operations, improve decision-making, and accelerate digital growth.",
    cta: "Get a Quote",
    sections: [
      {
        title: "What We Deliver",
        items: [
          { title: "AI Automation Systems", desc: "Automate repetitive business operations, workflows, and decision-making processes using intelligent AI-powered automation." },
          { title: "Intelligent Business Applications", desc: "Develop scalable enterprise-grade applications powered by AI, cloud technologies, and modern software architecture." },
          { title: "Predictive Analytics & Insights", desc: "Transform business data into actionable insights with forecasting models, recommendation systems, and predictive intelligence." },
          { title: "AI Integration & Smart Workflows", desc: "Integrate AI capabilities seamlessly into existing platforms, software ecosystems, and operational workflows." },
          { title: "Enterprise AI Solutions", desc: "Build custom AI-driven platforms tailored for enterprise operations, scalability, and long-term digital transformation." },
        ],
      },
      {
        title: "Our Process",
        items: [
          { title: "Data Audit", desc: "We analyze your existing data landscape to identify opportunities for AI integration." },
          { title: "Model Design", desc: "Developing custom machine learning models tailored to your specific business logic." },
          { title: "Training & Refinement", desc: "Rigorous training of models with secure data sets to ensure high accuracy and performance." },
          { title: "AI Integration", desc: "Seamlessly embedding AI capabilities into your existing software ecosystem." },
        ],
      },
    ],
  },

  "ai-model-training": {
    slug: "ai-model-training",
    path: "/services/ai-model-training",
    metaTitle: "AI Model Training | Onclick Innovations",
    metaDescription:
      "Precision-tuned machine learning models designed for production-grade AI performance.",
    h1: "AI Model Training",
    heroSub:
      "Precision-tuned machine learning models designed for production-grade AI performance.",
    cta: "Get a Quote",
    sections: [
      {
        title: "What We Deliver",
        items: [
          { title: "Custom Dataset Engineering", desc: "Gathering and cleaning high-quality data sets for model training." },
          { title: "Architecture Selection", desc: "Choosing the right neural network or ML architecture for the task." },
          { title: "Model Training", desc: "Computing-intensive training cycles with specialized hardware." },
          { title: "Evaluation", desc: "Testing models against benchmark data to ensure high accuracy." },
          { title: "Production Ready", desc: "Exporting optimized models for seamless integration into applications." },
        ],
      },
    ],
  },

  openclaw: {
    slug: "openclaw",
    path: "/services/openclaw",
    metaTitle: "OpenCLAW - Autonomous AI Workforce | Onclick Innovations",
    metaDescription:
      "OpenCLAW is an intelligent AI-powered platform designed to simplify, automate, and enhance the way businesses interact with technology.",
    h1: "Intelligent AI-Powered Platform",
    heroSub:
      "OpenCLAW helps organizations streamline operations, improve decision-making, and create smarter digital experiences through automation and intelligent systems.",
    cta: "Explore OpenCLAW",
    sections: [
      {
        title: "Key Highlights",
        list: [
          "AI-Powered Automation",
          "Intelligent Workflow Management",
          "Scalable & Flexible Architecture",
          "Smart Data Processing & Analysis",
          "Seamless Integration Capabilities",
          "Modern, Secure & Reliable Infrastructure",
        ],
      },
      {
        title: "Industry Use Cases",
        items: [
          { title: "Healthcare", desc: "Medical document processing, AI healthcare assistants, patient support automation, and appointment workflow automation." },
          { title: "FinTech", desc: "Fraud detection systems, risk analysis & forecasting, financial data automation, and intelligent reporting." },
          { title: "E-commerce", desc: "Personalized customer experiences, inventory automation, catalog AI, and performance optimization." },
        ],
      },
      {
        title: "Our Process",
        items: [
          { title: "Agent Configuration", desc: "Defining the roles and permissions for your autonomous digital workforce." },
          { title: "Knowledge Training", desc: "Feeding agents with your company data to ensure contextual accuracy." },
          { title: "Integration", desc: "Connecting OpenCLAW agents to your existing software tools." },
          { title: "Full Deployment", desc: "Agents go live to manage tasks independently and proactively." },
        ],
      },
    ],
  },

  automation: {
    slug: "automation",
    path: "/services/automation",
    metaTitle: "Automation Services | Onclick Innovations",
    metaDescription:
      "Intelligent automation solutions designed to optimize repetitive workflows and enhance productivity.",
    h1: "Automation Services",
    heroSub:
      "We help businesses streamline operations, reduce manual effort, and improve efficiency through intelligent automation solutions powered by modern technologies and AI-driven systems.",
    cta: "Get a Quote",
    sections: [
      {
        title: "What We Deliver",
        items: [
          { title: "Business Process Automation", desc: "Automate repetitive workflows, approvals, and reporting to reduce manual workload." },
          { title: "AI-Powered Automation", desc: "Integrate AI systems into workflows for smarter decision-making and process optimization." },
          { title: "Workflow Management", desc: "Build scalable platforms that streamline collaboration and operational processes." },
          { title: "System & API Integrations", desc: "Connect platforms seamlessly to create unified and automated digital ecosystems." },
        ],
      },
      {
        title: "Our Process",
        items: [
          { title: "Process Mapping", desc: "Identifying repetitive tasks suitable for automation." },
          { title: "Bot Design", desc: "Developing RPA scripts and automated workflow rules." },
          { title: "Integration", desc: "Connecting automation bots with existing ERP and CRM systems." },
          { title: "Go Live", desc: "Going live with monitored automation cycles." },
        ],
      },
    ],
  },

  "web-development": {
    slug: "web-development",
    path: "/services/web-development",
    metaTitle: "Next Gen Web Development | Onclick Innovations",
    metaDescription:
      "Building modern, high-performance web applications with the latest technology stacks.",
    h1: "Next Gen Web Development",
    heroSub:
      "Building modern, high-performance web applications with the latest technology stacks.",
    cta: "Get a Quote",
    sections: [
      {
        title: "What We Deliver",
        items: [
          { title: "React & Next.js Development", desc: "Building fast, responsive components and scalable server-side logic." },
          { title: "Progressive Web Apps (PWA)", desc: "Creating visually stunning and intuitive interfaces for maximum engagement." },
          { title: "High-Performance Architecture", desc: "Rigorous performance tuning for SEO, speed, and cross-browser compatibility." },
        ],
      },
      {
        title: "Our Process",
        items: [
          { title: "Wireframing", desc: "Mapping out user journeys and technical requirements for the web application." },
          { title: "UI/UX Design", desc: "Creating visually stunning and intuitive interfaces for maximum engagement." },
          { title: "Frontend/Backend Dev", desc: "Building fast, responsive components and scalable server-side logic." },
          { title: "Live Launch", desc: "Seamless deployment to production with automated CI/CD pipelines." },
        ],
      },
    ],
  },

  "mobile-app": {
    slug: "mobile-app",
    path: "/services/mobile-app",
    metaTitle: "Mobile App Development | Onclick Innovations",
    metaDescription:
      "Seamless cross-platform mobile experiences for iOS, Android, and beyond.",
    h1: "Mobile App Development",
    heroSub:
      "Seamless cross-platform mobile experiences for iOS, Android, and beyond.",
    cta: "Get a Quote",
    sections: [
      {
        title: "What We Deliver",
        items: [
          { title: "Native-like Flutter Apps", desc: "Building cross-platform apps using Flutter or React Native frameworks." },
          { title: "React Native Solutions", desc: "Creating interactive prototypes to test user flows and design concepts." },
          { title: "App Store Optimization (ASO)", desc: "Managing the submission and approval process for iOS and Android stores." },
          { title: "Mobile UI/UX Optimization", desc: "Defining target audience and core mobile functionalities for your app." },
        ],
      },
    ],
  },

  "ui-ux": {
    slug: "ui-ux",
    path: "/services/ui-ux",
    metaTitle: "UI/UX Design Services | Onclick Innovations",
    metaDescription:
      "Creating intuitive and engaging user experiences through modern design principles.",
    h1: "UI/UX Design Services",
    heroSub:
      "Creating intuitive and engaging user experiences through modern design principles.",
    cta: "Get a Quote",
    sections: [
      {
        title: "What We Deliver",
        items: [
          { title: "Visual Identity Design", desc: "Understanding user behavior and industry trends to inform design decisions." },
          { title: "Prototyping", desc: "Developing high-fidelity interactive models of the final product." },
          { title: "Usability Testing", desc: "Conducting usability tests to refine the user experience further." },
          { title: "Design Handover", desc: "Providing developers with precise design specs and assets." },
        ],
      },
    ],
  },

  "data-management": {
    slug: "data-management",
    path: "/services/data-management",
    metaTitle: "Data Management Services | Onclick Innovations",
    metaDescription:
      "Comprehensive data solutions to organize, analyze, and secure your enterprise information.",
    h1: "Data Management Services",
    heroSub:
      "Comprehensive data solutions to organize, analyze, and secure your enterprise information.",
    cta: "Get a Quote",
    sections: [
      {
        title: "What We Deliver",
        items: [
          { title: "Data Warehousing & Architecture", desc: "Designing scalable data pipelines, warehouses, and integration strategies." },
          { title: "Master Data Management", desc: "Securely transferring and consolidating data into centralized systems." },
          { title: "Data Governance & Compliance", desc: "Implementing rules, roles, and compliance standards for data security." },
          { title: "Analytics Integration", desc: "Connecting BI tools and dashboards for real-time actionable insights." },
        ],
      },
    ],
  },

  "it-consultation": {
    slug: "it-consultation",
    path: "/services/it-consultation",
    metaTitle: "IT Consultation Service | Onclick Innovations",
    metaDescription:
      "Expert IT consulting to help you navigate the complex digital landscape and achieve your business goals.",
    h1: "IT Consultation Service",
    heroSub:
      "Expert IT consulting to help you navigate the complex digital landscape and achieve your business goals.",
    cta: "Get a Quote",
    sections: [
      {
        title: "What We Deliver",
        items: [
          { title: "Technology Audit & Assessment", desc: "Reviewing current tech stack and identifying business goals." },
          { title: "Strategic Roadmap", desc: "Creating a strategic plan for IT investment and growth." },
          { title: "Vendor Selection", desc: "Helping choose the best tools and services for your needs." },
          { title: "Ongoing Support", desc: "Ongoing support to ensure the IT strategy remains effective." },
        ],
      },
    ],
  },

  portfolio: {
    slug: "portfolio",
    path: "/portfolio",
    metaTitle: "Software, AI & App Development Portfolio | Onclick Innovations",
    metaDescription:
      "See 150+ successful projects we've shipped — AI, web, mobile, and e-commerce platforms.",
    h1: "Our Portfolio",
    heroSub: "See 150+ successful projects we've shipped across AI development, web development, app development, and e-commerce.",
    cta: "Start Your Project",
    sections: [],
  },

  contact: {
    slug: "contact",
    path: "/contact",
    metaTitle: "Contact Onclick Innovations - Mohali Software & AI Team",
    metaDescription:
      "Ready to start your project? Our experts are ready to help you build something amazing.",
    h1: "Ready to Start Your Project?",
    heroSub: "Our experts are ready to help you build something amazing. Share your project details and receive a transparent, detailed estimate.",
    cta: "Get a Quote",
    sections: [],
  },

  career: {
    slug: "career",
    path: "/career",
    metaTitle: "Software Careers at Onclick Innovations",
    metaDescription: "Join our team in Mohali. Open positions in sales, development, and design.",
    h1: "Join Our Team",
    heroSub:
      "From brainstorming to product launch, we're the tech partner startups and enterprises trust to deliver — fast, flexible, and future-ready.",
    cta: "Apply Now",
    sections: [
      {
        title: "Open Positions",
        items: [
          {
            title: "Sales Executive",
            desc: "Drive growth and forge lasting partnerships. End-to-end management of the sales cycle from prospecting to closing deals.",
          },
        ],
      },
    ],
  },

  technology: {
    slug: "technology",
    path: "/technology",
    metaTitle: "Technology Stack for Software, AI & Web Apps | Onclick Innovations",
    metaDescription:
      "Modern technologies we use: React, Angular, Node.js, Laravel, Flutter, and cloud platforms.",
    h1: "Engineering the Future with Advanced Tech Stacks",
    heroSub:
      "We don't just write code; we architect solutions. Our carefully curated technology stack empowers your business with industry-leading speed, security, and scalability.",
    cta: "Discuss Your Stack",
    sections: [
      {
        title: "Modern Technologies We Use",
        items: [
          { title: "React.js", desc: "Fast, component-based UI for modern web apps." },
          { title: "Angular", desc: "Scalable platform for building enterprise web apps." },
          { title: "Node.js & Express.js", desc: "Efficient JavaScript runtime and minimalist web framework." },
          { title: "Laravel & PHP", desc: "Elegant PHP framework for rapid web development." },
          { title: "Flutter & React Native", desc: "Cross-platform mobile development frameworks." },
        ],
      },
    ],
  },
};

export function getAllServiceSlugs(): string[] {
  return Object.keys(PAGES).filter((s) =>
    ["custom-software", "ai-development", "ai-model-training", "openclaw", "automation", "web-development", "mobile-app", "ui-ux", "data-management", "it-consultation"].includes(s)
  );
}
