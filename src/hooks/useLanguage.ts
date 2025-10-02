import { useState, useEffect } from 'react';

export type Language = 'es' | 'en' | 'pt';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('es');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage') as Language;
    if (savedLanguage && ['es', 'en', 'pt'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('preferredLanguage', newLanguage);
    document.documentElement.lang = newLanguage;
  };

  return { language, changeLanguage };
};
