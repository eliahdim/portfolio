import React, { useEffect, useRef, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ProjectModal from './components/ProjectModal.jsx';
import JungleCanvas from './components/JungleCanvas.jsx';
import { getSiteData } from './data/translations.js';
import { useLanguage } from './hooks/useLanguage.js';

export default function App() {
  const { language, setLanguage } = useLanguage();
  const siteData = getSiteData(language);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const lastFocusedElement = useRef(null);
  const selectedProject = siteData.projects.find((project) => project.id === selectedProjectId) || null;

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dataset.language = language;
    document.title = siteData.meta.title;

    const description = document.querySelector('meta[name="description"]');
    const openGraphTitle = document.querySelector('meta[property="og:title"]');
    const openGraphDescription = document.querySelector('meta[property="og:description"]');

    description?.setAttribute('content', siteData.meta.description);
    openGraphTitle?.setAttribute('content', siteData.meta.title);
    openGraphDescription?.setAttribute('content', siteData.meta.socialDescription);
  }, [language, siteData]);

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
  }, [language]);

  function openProject(project, triggerElement) {
    lastFocusedElement.current = triggerElement || document.activeElement;
    setSelectedProjectId(project.id);
  }

  function closeProject() {
    setSelectedProjectId(null);
    requestAnimationFrame(() => lastFocusedElement.current?.focus?.());
  }

  return (
    <>
      <JungleCanvas />
      <Header language={language} onLanguageChange={setLanguage} copy={siteData.ui.header} />
      <main>
        <Hero profile={siteData.profile} stats={siteData.stats} copy={siteData.ui.hero} />
        <About
          profile={siteData.profile}
          journey={siteData.journey}
          skills={siteData.skills}
          infoCards={siteData.infoCards}
          copy={siteData.ui.about}
        />
        <Projects
          projects={siteData.projects}
          onOpenProject={openProject}
          copy={siteData.ui.projects}
        />
        <Contact
          contacts={siteData.contacts}
          profile={siteData.profile}
          copy={siteData.ui.contact}
        />
      </main>
      <Footer profile={siteData.profile} copy={siteData.ui.footer} />
      <ProjectModal project={selectedProject} onClose={closeProject} copy={siteData.ui.modal} />
    </>
  );
}
