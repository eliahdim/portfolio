import React, { useEffect, useMemo, useState } from 'react';
import { useActiveSection } from '../hooks/useActiveSection.js';

export default function Header({ language, onLanguageChange, copy }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionIds = useMemo(() => copy.navItems.map((item) => item.id), [copy.navItems]);
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
      <nav className="nav" aria-label={copy.navigationLabel}>
        <div className="nav-container">
          <a className="nav-logo" href="#home" onClick={handleNavClick} aria-label={copy.logoLabel}>
            E.D
          </a>

          <div className="nav-controls">
            <ul className={`nav-menu${menuOpen ? ' active' : ''}`} id="primary-navigation">
              {copy.navItems.map((item) => (
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

            <div className="language-switch" role="group" aria-label={copy.languageLabel}>
              <button
                type="button"
                className={`language-option${language === 'sv' ? ' active' : ''}`}
                aria-pressed={language === 'sv'}
                aria-label={copy.swedishLabel}
                lang="sv"
                onClick={() => onLanguageChange('sv')}
              >
                SV
              </button>
              <span className="language-divider" aria-hidden="true" />
              <button
                type="button"
                className={`language-option${language === 'en' ? ' active' : ''}`}
                aria-pressed={language === 'en'}
                aria-label={copy.englishLabel}
                lang="en"
                onClick={() => onLanguageChange('en')}
              >
                EN
              </button>
            </div>

            <button
              className={`nav-toggle${menuOpen ? ' active' : ''}`}
              type="button"
              aria-label={menuOpen ? copy.closeMenu : copy.openMenu}
              aria-expanded={menuOpen}
              aria-controls="primary-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="bar" aria-hidden="true" />
              <span className="bar" aria-hidden="true" />
              <span className="bar" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
