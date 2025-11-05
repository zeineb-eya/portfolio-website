"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import en from './locales/en.json';
import fr from './locales/fr.json';

const translations = { en, fr };

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);
    document.documentElement.dir = 'ltr';
    document.documentElement.lang = savedLanguage;
  }, []);

  const changeLanguage = (newLang) => {
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
    document.documentElement.dir = 'ltr';
    document.documentElement.lang = newLang;
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
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
