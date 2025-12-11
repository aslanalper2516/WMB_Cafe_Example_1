import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageWrapper({ children }) {
  const { language } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return <>{children}</>;
}


