import { useCallback, useState } from 'react';

export const LANGUAGE_STORAGE_KEY = 'eliah-portfolio-language';

function getInitialLanguage() {
  try {
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (storedLanguage === 'sv' || storedLanguage === 'en') {
      return storedLanguage;
    }
  } catch {
    // Local storage can be unavailable in privacy-focused browser contexts.
  }

  const browserLanguage = window.navigator.languages?.[0] || window.navigator.language || 'en';
  return browserLanguage.toLowerCase().startsWith('sv') ? 'sv' : 'en';
}

export function useLanguage() {
  const [language, setLanguageState] = useState(getInitialLanguage);

  const setLanguage = useCallback((nextLanguage) => {
    if (nextLanguage !== 'sv' && nextLanguage !== 'en') return;

    setLanguageState(nextLanguage);
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    } catch {
      // The selected language still applies for the current visit.
    }
  }, []);

  return { language, setLanguage };
}
