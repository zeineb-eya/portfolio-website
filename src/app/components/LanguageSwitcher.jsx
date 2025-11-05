"use client";
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', name: 'EN', flag: '🇬🇧' },
    { code: 'fr', name: 'FR', flag: '🇫🇷' }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-light-surface dark:bg-[#1a1a1a] border border-light-border dark:border-[#33353F] text-light-text-primary dark:text-white hover:bg-light-surfaceAlt dark:hover:bg-[#252525] transition-colors text-sm"
        aria-label="Select language"
      >
        <span className="text-base">{currentLanguage?.flag}</span>
        <span className="font-medium">{currentLanguage?.name}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-28 bg-light-surface dark:bg-[#1a1a1a] border border-light-border dark:border-[#33353F] rounded-lg shadow-lg py-1 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-light-surfaceAlt dark:hover:bg-[#252525] transition-colors ${
                language === lang.code
                  ? 'text-light-pink-600 dark:text-primary-400 font-semibold bg-light-pink-50 dark:bg-primary-900/20'
                  : 'text-light-text-primary dark:text-gray-300'
              }`}
            >
              <span className="text-base">{lang.flag}</span>
              <span>{lang.name}</span>
              {language === lang.code && (
                <span className="ml-auto text-light-pink-600 dark:text-primary-400">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
