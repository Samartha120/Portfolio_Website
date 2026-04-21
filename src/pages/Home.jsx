import React from 'react';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ExpertiseSection from './sections/ExpertiseSection';
import ProjectsSection from './sections/ProjectsSection';
import InsightsSection from './sections/InsightsSection';
import ContactSection from './sections/ContactSection';

export default function Home() {
  return (
    <>
      <div style={{ padding: '20px', background: 'yellow', color: 'black', position: 'fixed', top: 0, left: 0, zIndex: 9999 }}>
        HOME RENDERED
      </div>
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <ProjectsSection />
      <InsightsSection />
      <ContactSection />
    </>
  );
}