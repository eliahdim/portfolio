import React, { useEffect, useRef, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ProjectModal from './components/ProjectModal.jsx';
import JungleCanvas from './components/JungleCanvas.jsx';
import { projects } from './data/siteData.js';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const lastFocusedElement = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  function openProject(project, triggerElement) {
    lastFocusedElement.current = triggerElement || document.activeElement;
    setSelectedProject(project);
  }

  function closeProject() {
    setSelectedProject(null);
    requestAnimationFrame(() => lastFocusedElement.current?.focus?.());
  }

  return (
    <>
      <JungleCanvas />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects projects={projects} onOpenProject={openProject} />
        <Contact />
      </main>
      <Footer />
      <ProjectModal project={selectedProject} onClose={closeProject} />
    </>
  );
}
