import Portfolio from "@/components/Portfolio";

const details = {
  personalInfo: {
    name: "Shaikh Muzakkir Shaikh Ajam",
    shortName: "Shaikh Muzakkir",
    initials: "SM",
    title: "Full Stack Developer",
    email: "skmuzakkir750@gmail.com",
    phone: "+91 84213 26526",
    location: "Hyderabad, India",
    github: "https://github.com/Muzzu8421",
    linkedin: "https://www.linkedin.com/in/shaikh-muzakkir",
  },
  summary:
    "Product-minded full-stack developer who turns ambitious ideas into reliable, production-ready web and mobile experiences. I build thoughtful interfaces, scalable APIs, and complete products with a sharp eye for usability and maintainability.",
  experience: [
    {
      role: "Freelance Full-Stack Developer",
      company: "Red Rose Mart",
      location: "Kagaznagar, India",
      period: "May 2026 — Present",
      technologies: [
        "React Native",
        "Next.js",
        "Express.js",
        "MongoDB",
        "Google OAuth",
      ],
      highlights: [
        "Built a grocery e-commerce platform spanning a React Native customer app, Express.js REST API, Next.js admin panel, and delivery partner app.",
        "Implemented Google OAuth, JWT authentication, and role-based access for customers, administrators, and delivery partners.",
        "Deployed the web stack to Vercel across 14 successful production deployments and submitted the mobile app to Google Play for review.",
        "Designed protected middleware, consistent error handling, and scalable MongoDB schemas for products, orders, and users.",
      ],
    },
  ],
  projects: [
    {
      name: "Flowdoc",
      kicker: "Freelance Invoice Generator",
      description:
        "A frictionless invoice builder with live previews, dynamic line items, automatic tax and discount calculations, and one-click PDF exports. All data stays in the browser—no account or database required.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "jsPDF",
        "html2canvas",
        "Vercel",
      ],
      github: "https://github.com/Muzzu8421/freelance-invoice-generator",
      liveUrl: "https://flowdoc-sepia.vercel.app",
      image: "/projects/flowdoc.png",
    },
    {
      name: "Folioo",
      kicker: "Portfolio Generator SaaS",
      description:
        "A full-stack portfolio generator that turns an uploaded resume into a live, customizable portfolio. It combines resume parsing, selectable templates, and Google and GitHub authentication.",
      technologies: [
        "Next.js",
        "React",
        "MongoDB",
        "NextAuth",
        "Google AI",
        "Tailwind CSS",
      ],
      github: "https://github.com/Muzzu8421/folioo",
      liveUrl: "https://folioo-muzzu.vercel.app/",
      image: "/projects/folioo.png",
    },
    {
      name: "OneLink",
      kicker: "Link-in-bio Platform",
      description:
        "A full-stack link-in-bio platform with custom handles, a guided four-step setup flow, profile images, unlimited links, and dynamic public pages backed by MongoDB.",
      technologies: [
        "Next.js",
        "React",
        "MongoDB",
        "Tailwind CSS",
        "Rive",
      ],
      github: "https://github.com/Muzzu8421/onelink",
      liveUrl: "https://onelink-weld-mu.vercel.app",
      image: "/projects/onelink.png",
    },
    {
      name: "Buy Me A Chai",
      kicker: "Creator Crowdfunding Platform",
      description:
        "A production-ready crowdfunding platform where creators publish profiles, receive secure Razorpay contributions, and track supporters and earnings from a private dashboard.",
      technologies: [
        "Next.js",
        "React",
        "MongoDB",
        "Mongoose",
        "NextAuth",
        "Razorpay",
      ],
      github: "https://github.com/Muzzu8421/buy-me-a-chai",
      liveUrl: "https://buy-me-a-chai-beta.vercel.app",
      image: "/projects/buy-me-a-chai.png",
    },
  ],
  skills: {
    Frontend: [
      "React.js",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "Responsive Design",
      "Rive",
    ],
    Backend: [
      "Node.js",
      "Express.js",
      "Next.js API Routes",
      "REST APIs",
      "MongoDB",
      "Mongoose",
      "NextAuth.js",
      "OAuth",
      "Razorpay",
    ],
    "Tools & DevOps": [
      "Git",
      "GitHub",
      "Vercel",
      "VS Code",
      "npm",
      "Expo",
      "Postman",
    ],
    Languages: ["JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  education: [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "St. Martin’s Engineering College",
      location: "Hyderabad, India",
      period: "Aug 2023 — May 2027",
    },
  ],
  certifications: [
    {
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
    },
    {
      name: "Frontend Developer (React)",
      issuer: "HackerRank",
    },
    {
      name: "Software Engineer Intern",
      issuer: "HackerRank",
    },
  ],
  achievements: [
    {
      title: "Merged open-source contribution",
      organization: "code-charity/youtube",
      description:
        "Fixed a dark-theme CSS bug in the ImprovedTube browser extension. The targeted light/dark theme patch was reviewed and merged into master as PR #3833.",
      link: "https://github.com/code-charity/youtube/pull/3833",
    },
  ],
};

export default function Home() {
  return <Portfolio details={details} />;
}