import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { LearningJourney } from './components/LearningJourney';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#292D29] flex flex-col font-sans selection:bg-[#426B50]/20 selection:text-[#292D29]">
      {/* Sticky Top Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* About Me Section */}
        <About />

        {/* Skills and Current Learning Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Education Section */}
        <Education />

        {/* Learning Journey Section */}
        <LearningJourney />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to top floating button */}
      <BackToTop />
    </div>
  );
}
