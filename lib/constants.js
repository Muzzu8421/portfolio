import { GitHubIcon, LinkedInIcon, MailIcon } from "../components/ui/Icons";

export const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
];

export const SERVICES = [
  {
    num: "01",
    title: "Frontend Development",
    desc: "Building responsive, interactive interfaces with React, Next.js, and React Native that users love to use.",
  },
  {
    num: "02",
    title: "Backend Engineering",
    desc: "Designing scalable APIs, authentication systems, and database architectures with Node.js, Express, and MongoDB.",
  },
  {
    num: "03",
    title: "Full-Stack Products",
    desc: "End-to-end product development from concept to deployment — web apps, mobile apps, admin panels, and more.",
  },
];

export const SOCIAL_LINKS = (info) => [
  { href: info.github, Icon: GitHubIcon, label: "GitHub", external: true },
  { href: info.linkedin, Icon: LinkedInIcon, label: "LinkedIn", external: true },
  { href: `mailto:${info.email}`, Icon: MailIcon, label: "Email", external: false },
];
