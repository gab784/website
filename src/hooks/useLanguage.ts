import { useState, useEffect } from 'react';

export type Language = 'es' | 'en' | 'pt';

export const useLanguage = () => {
  // Función para detectar el idioma del navegador
  const getBrowserLanguage = (): Language => {
    const browserLang = navigator.language.toLowerCase();
    
    if (browserLang.startsWith('es')) {
      return 'es';
    } else if (browserLang.startsWith('en')) {
      return 'en';
    } else if (browserLang.startsWith('pt')) {
      return 'pt';
    }
    
    // Fallback a español
    return 'es';
  };

  const [language, setLanguage] = useState<Language>(getBrowserLanguage());

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage') as Language;
    if (savedLanguage && ['es', 'en', 'pt'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    } else {
      // Si no hay idioma guardado, usar el del navegador
      const detectedLanguage = getBrowserLanguage();
      setLanguage(detectedLanguage);
      localStorage.setItem('preferredLanguage', detectedLanguage);
    }
    
    // Establecer el idioma en el documento HTML
    document.documentElement.lang = language;
  }, [language]);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('preferredLanguage', newLanguage);
    document.documentElement.lang = newLanguage;
  };

  return { language, changeLanguage };
};
