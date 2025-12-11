import { createContext, useContext, useState, useEffect } from 'react';
import { tr } from '../locales/tr';
import { en } from '../locales/en';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    // localStorage'dan kaydedilmiş dili kontrol et
    const saved = localStorage.getItem('language');
    if (saved) return saved;
    // Varsayılan dil Türkçe
    return 'tr';
  });

  const translations = {
    tr,
    en
  };

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}

