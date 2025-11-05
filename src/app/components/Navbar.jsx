"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon, LinkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from '../i18n/LanguageContext';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    {
      title: t('nav.about'),
      path: "#about",
    },
    {
      title: t('nav.projects'),
      path: "#projects",
    },
    {
      title: t('nav.experience'),
      path: "#experience",
    },
    {
      title: t('nav.skills'),
      path: "#skills",
    },
    {
      title: t('nav.contact'),
      path: "#contact",
    },
  ];

  return (
    <nav className="fixed mx-auto border-b border-light-border dark:border-[#33353F] top-0 left-0 right-0 z-50 bg-light-surface/95 dark:bg-[#121212]/95 backdrop-blur-sm shadow-lg">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-3">
        <Link
          href={"/"}
          className="text-lg md:text-xl font-bold"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-light-pink-600 to-light-rose-600 dark:from-primary-400 dark:to-secondary-600">
            Zeineb Eya Rahmani
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="menu hidden md:flex md:items-center md:gap-4" id="navbar">
          <ul className="flex md:flex-row md:space-x-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
          
          <Link
            href="https://linktr.ee/zeineb_eya_rahmani"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-light-pink-500 to-light-rose-500 dark:from-primary-500 dark:to-secondary-500 text-white font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            aria-label="Visit my Linktree"
          >
            <LinkIcon className="h-4 w-4" />
            <span className="hidden lg:inline">Linktree</span>
          </Link>

          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu flex items-center gap-3 md:hidden">
          <ThemeToggle />
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-light-border dark:border-slate-200 text-light-text-primary dark:text-slate-200 hover:text-light-pink-600 dark:hover:text-white hover:border-light-pink-600 dark:hover:border-white"
              aria-label="Open menu"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-light-border dark:border-slate-200 text-light-text-primary dark:text-slate-200 hover:text-light-pink-600 dark:hover:text-white hover:border-light-pink-600 dark:hover:border-white"
              aria-label="Close menu"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} onClose={() => setNavbarOpen(false)} /> : null}
    </nav>
  );
};

export default Navbar;
