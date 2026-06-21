"use client";

import { useEffect } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import ServicesSection from "./sections/ServicesSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import ExperienceSection from "./sections/ExperienceSection";
import CredentialsSection from "./sections/CredentialsSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";

export default function Portfolio({ details }) {
  const {
    personalInfo,
    summary,
    experience,
    projects,
    skills,
    education,
    certifications,
    achievements,
  } = details;

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const stats = [
    { value: projects.length, suffix: "+", label: "Projects Shipped" },
    { value: 14, suffix: "+", label: "Deployments" },
    { value: achievements.length, suffix: "", label: "Open Source PR" },
    { value: certifications.length, suffix: "", label: "Certifications" },
  ];

  return (
    <div className="relative min-h-screen bg-coal text-muted selection:bg-gold/20 selection:text-ivory">
      <div className="dot-grid pointer-events-none fixed inset-0 z-0" />

      <Navbar personalInfo={personalInfo} />
      <Hero personalInfo={personalInfo} />
      <About summary={summary} stats={stats} />
      <ServicesSection />
      <ProjectsSection projects={projects} />
      <SkillsSection skills={skills} />
      <ExperienceSection experience={experience} />
      <CredentialsSection 
        education={education} 
        certifications={certifications} 
        achievements={achievements} 
      />
      <ContactSection personalInfo={personalInfo} />
      <Footer personalInfo={personalInfo} />
    </div>
  );
}
