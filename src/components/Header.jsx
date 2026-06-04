import React, { useEffect, useMemo, useState } from 'react';
import { useActiveSection } from '../hooks/useActiveSection.js';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 80);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen);
    return () => document.body.classList.remove('nav-open');
  }, [menuOpen]);

  function handleNavClick() {
    setMenuOpen(false);
  }

  return (
    <header className={`header${isScrolled ? ' scrolled' : ''}`}>
      <nav className="nav" aria-label="Primary navigation">
        <div className="nav-container">
          <a className="nav-logo" href="#home" onClick={handleNavClick} aria-label="Eliah Dimmed home">
            E.D
          </a>

          <ul className={`nav-menu${menuOpen ? ' active' : ''}`} id="primary-navigation">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link${activeSection === item.id ? ' active' : ''}`}
                  onClick={handleNavClick}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className={`nav-toggle${menuOpen ? ' active' : ''}`}
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="bar" aria-hidden="true" />
            <span className="bar" aria-hidden="true" />
            <span className="bar" aria-hidden="true" />
          </button>
        </div>
      </nav>
    </header>
  );
}
