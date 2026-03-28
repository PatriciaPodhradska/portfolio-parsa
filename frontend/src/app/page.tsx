'use client';

import { useState, useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { BackgroundElements } from '../components/BackgroundElements';
import { LoadingScreen } from '../components/LoadingScreen';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { ContactSection } from '../components/sections/ContactSection';
import { Footer } from '../components/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setCurrentSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="min-h-screen bg-white">
      <BackgroundElements />
      <Navigation currentSection={currentSection} onNavigate={handleNavigate} />
      <main className="pt-16">
        <div id="home"><HeroSection onNavigate={handleNavigate} /></div>
        <div id="about"><AboutSection /></div>
        <div id="projects"><ProjectsSection /></div>
        <div id="skills"><SkillsSection /></div>
        <div id="contact"><ContactSection /></div>
      </main>
      <Footer />
    </div>
  );
}
