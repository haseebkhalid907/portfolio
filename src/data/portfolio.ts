export const personalInfo = {
  name: "Haseeb Khalid",
  title: "Full Stack Software Engineer",
  email: "haseebkhalid560@gmail.com",
  phone: "+92 304-0543216",
  linkedin: "https://linkedin.com/in/haseeb-khalid-6a7110225",
  github: "https://github.com/haseebkhalid907",
  location: "Faisalabad, Pakistan",
  bio: "Full Stack Software Engineer with 4+ years of experience building scalable web applications, SaaS platforms, and cloud infrastructure tools. Specialized in MERN/MEVN stack development with expertise in multi-tenant architectures, real-time systems, and cloud-native deployments across GCP, AWS, and Azure.",
  resumeUrl: "/resume.pdf",
  availableForWork: true,
};

export interface Skill {
  category: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Vue.js",
      "Nuxt.js",
      "Redux Toolkit",
      "Astro",
      "Three.js",
      "Tailwind CSS",
      "Bootstrap",
      "Framer Motion",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "WebSocket",
      "Strapi",
      "Socket.io",
    ],
  },
  {
    category: "Databases & ORM",
    items: ["MongoDB", "PostgreSQL", "SQL", "Prisma", "Supabase", "Redis"],
  },
  {
    category: "Auth & Payments",
    items: ["Auth0", "Firebase Auth", "Stripe", "JWT", "Passport.js"],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "GCP",
      "AWS",
      "Azure",
      "Docker",
      "Terraform",
      "CI/CD",
      "PM2",
      "Cloudflare R2",
      "Google App Engine",
    ],
  },
  {
    category: "Monitoring & Analytics",
    items: ["Elastic APM", "Amplitude", "New Relic", "Intercom"],
  },
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript"],
  },
];

export interface Project {
  title: string;
  subtitle: string;
  url?: string;
  status: string;
  tags: string[];
  highlights: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Complya",
    subtitle: "Compliance SaaS Platform",
    url: "https://complya.com",
    status: "Current",
    tags: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Prisma",
      "Firebase Auth",
      "Stripe",
      "Astro",
      "GCP",
      "Docker",
    ],
    highlights: [
      "Built a compliance-focused SaaS platform with multi-portal architecture: client app, admin portal, marketing site, and RESTful API",
      "Developed admin portal for managing workspaces, entities, activity logs, session replays, and system monitoring with role-based permissions",
      "Implemented per-seat subscription billing with Stripe including plan management, invoicing, and usage-based pricing",
      "Integrated Firebase Auth with Google OAuth, Amplitude session replay, and deployed on GCP App Engine with multi-environment CI/CD",
    ],
    featured: true,
  },
  {
    title: "Zagit",
    subtitle: "Cloud Infrastructure Discovery & Management",
    url: "https://zagit.ai",
    status: "Current",
    tags: [
      "React",
      "Three.js",
      "Node.js",
      "Terraform",
      "AWS",
      "Azure",
      "GCP",
      "WebSocket",
      "Supabase",
    ],
    highlights: [
      "Developed a cloud infrastructure discovery and migration platform supporting AWS, Azure, and GCP with multi-region resource scanning",
      "Built secure credential management with AES-256 encryption and automated resource discovery across cloud services",
      "Created migration script generation producing Terraform and shell scripts for infrastructure-as-code workflows",
      "Built interactive 3D architecture visualization with React Three Fiber for visual cloud infrastructure management",
    ],
    featured: true,
  },
  {
    title: "Ilmiya LMS",
    subtitle: "Learning Management System",
    url: "https://accounts.ilmiya.com",
    status: "Ongoing",
    tags: [
      "Vue.js",
      "Node.js",
      "Auth0",
      "Cloudflare R2",
      "MongoDB",
      "New Relic",
    ],
    highlights: [
      "Developed a comprehensive LMS with 10+ portals for multiple schools with organization-based multi-tenancy",
      "Implemented centralized Auth0 authentication with role-based portal redirection",
      "Built separate portals for students, parents, teachers, and course authors",
      "Integrated custom analytics portal for user activity monitoring and performance metrics",
    ],
    featured: true,
  },
  {
    title: "ReEnvoy",
    subtitle: "Driver & Truck Management",
    url: "https://app.reenvoy.dev",
    status: "Current",
    tags: ["React", "Node.js", "MongoDB", "Mobile App"],
    highlights: [
      "Developed a comprehensive web and mobile application for truck and driver management with multi-tenancy",
      "Implemented truck loads, driver assignments, expense tracking, and employment records management",
    ],
    featured: false,
  },
  {
    title: "Morpheus AI",
    subtitle: "AI Content Generator",
    url: "https://app.themorpheus.ai",
    status: "Completed",
    tags: ["React", "Node.js", "GPT-4", "Gemini AI", "LLAMA AI", "Stability AI"],
    highlights: [
      "Built an AI-powered platform integrating GPT-3, GPT-4, Gemini AI, and LLAMA AI for text and image generation",
      "Developed subscription-based access control with token-based usage tracking",
    ],
    featured: false,
  },
  {
    title: "RPlayer",
    subtitle: "Video Platform",
    url: "https://rplayer.teamrtp.org",
    status: "Current",
    tags: ["React", "Node.js", "Cloudflare R2", "Live Streaming"],
    highlights: [
      "Built a custom video player platform with live streaming, video uploads, and cloud storage using Cloudflare R2",
      "Integrated video timestamps, chapters, reactions, and multiple source support (YouTube, Google Drive)",
    ],
    featured: false,
  },
  {
    title: "TokBackup V3",
    subtitle: "Social Media Scraping Tool",
    url: "https://portal.tokbackup.com",
    status: "Current",
    tags: ["React", "Node.js", "Scraping", "Subscriptions"],
    highlights: [
      "Developed a scraping tool to extract profile and video data from TikTok, Instagram, and YouTube",
      "Implemented subscription models for access control and a dashboard for download monitoring",
    ],
    featured: false,
  },
  {
    title: "Aflah",
    subtitle: "Islamic Education Platform",
    url: "https://aflah.dev",
    status: "Current",
    tags: ["React", "Node.js", "PDF Viewer"],
    highlights: [
      "Developed multi-portal Islamic education platform with Quran, Prayer, and Library modules",
    ],
    featured: false,
  },
  {
    title: "Skinny Tax",
    subtitle: "Tax Calculators",
    url: "https://app.skinnytax.co",
    status: "Current",
    tags: ["React", "Auth0", "Supabase", "Strapi"],
    highlights: [
      "Built tax calculators with Auth0 and Supabase authentication and Strapi subscription management",
    ],
    featured: false,
  },
  {
    title: "Singer Voice",
    subtitle: "Online Concert Platform",
    url: "https://uatsingersvoice.singersvoice.com",
    status: "Current",
    tags: ["React", "WebRTC", "Node.js"],
    highlights: [
      "Developed an online video call concert platform with live background music and real-time audience interaction",
    ],
    featured: false,
  },
  {
    title: "ECM",
    subtitle: "Energy Consumption Management",
    url: "https://portal.emslive.co.uk",
    status: "Completed",
    tags: ["React", "Node.js", "Charts"],
    highlights: [
      "Developed energy consumption calculation system supporting hierarchies from branches to floors and racks",
    ],
    featured: false,
  },
  {
    title: "The Main RX",
    subtitle: "E-Commerce Platform",
    url: "https://themainrx.com",
    status: "Completed",
    tags: ["Vue.js", "Laravel", "E-Commerce"],
    highlights: [
      "Built a Vue.js front-end integrated with Laravel back-end for a robust e-commerce platform",
    ],
    featured: false,
  },
  {
    title: "Alaska ERP",
    subtitle: "Pharmacy ERP System",
    url: "https://demo.alaskaerp.com",
    status: "Completed",
    tags: ["React", "Node.js", "ERP"],
    highlights: [
      "Contributed to a comprehensive ERP system for pharmacy management including sales, purchases, and reporting",
    ],
    featured: false,
  },
];

export const experience = {
  company: "Genius Mind Zone",
  role: "Full Stack Software Engineer",
  period: "January 2022 — Present",
  location: "Kohinoor City, Faisalabad",
  description:
    "Leading full-stack development across multiple SaaS products. Building compliance platforms, cloud infrastructure tools, learning management systems, and fleet management applications using modern JavaScript/TypeScript stacks with cloud-native deployment strategies.",
  highlights: [
    "Lead full-stack development of 15+ production web applications and SaaS platforms using React, Vue.js, Node.js, and cloud services across GCP, AWS, and Azure",
    "Architected multi-tenant systems with organization-based database isolation, role-based access control, and centralized authentication (Auth0, Firebase Auth)",
    "Designed and implemented CI/CD pipelines with Docker, PM2, and Google App Engine across development, staging, and production environments",
    "Built real-time features using WebSocket, Socket.io, and Ably for live notifications, deployment logs, and streaming updates",
    "Integrated third-party services including Stripe (subscription billing), Amplitude (analytics), New Relic (monitoring), and Intercom (customer support)",
    "Managed cloud infrastructure and storage with Cloudflare R2, GCP Secrets, Supabase, and Terraform-based infrastructure-as-code workflows",
  ],
};
