"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDownTrayIcon, EnvelopeIcon, LinkIcon } from "@heroicons/react/24/outline";
import { useLanguage } from '../i18n/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-light-text-primary dark:text-white mb-4 text-3xl sm:text-5xl lg:text-7xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-light-pink-600 to-light-rose-600 dark:from-primary-400 dark:to-secondary-600">
              {t('hero.greeting')}{" "}
            </span>
            <br></br>
            <span className="inline-block">
              <TypeAnimation
                sequence={[
                  "Zeineb Eya Rahmani",
                  1500,
                  "BI & QA Engineer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-light-text-secondary dark:text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl leading-relaxed" dangerouslySetInnerHTML={{ __html: t('hero.description') }} />
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/#contact"
              className="px-6 inline-flex items-center justify-center gap-2 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-light-pink-500 to-light-rose-500 dark:from-primary-500 dark:to-secondary-500 hover:shadow-xl text-white font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <EnvelopeIcon className="h-5 w-5" />
              {t('hero.cta.contact')}
            </Link>
            <Link
              href="https://linktr.ee/zeineb_eya_rahmani"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 inline-flex items-center justify-center gap-2 py-3 w-full sm:w-fit rounded-full border-2 border-light-pink-500 dark:border-primary-500 text-light-pink-600 dark:text-primary-400 font-semibold hover:bg-light-pink-50 dark:hover:bg-primary-900/20 transition-all duration-300 transform hover:scale-105"
            >
              <LinkIcon className="h-5 w-5" />
              {t('hero.cta.linktree')}
            </Link>
            <button
              onClick={() => window.open('/documents/Resume-Zeineb-Eya-Rahmani.pdf', '_blank')}
              className="px-6 inline-flex items-center justify-center gap-2 py-3 w-full sm:w-fit rounded-full border-2 border-light-border dark:border-[#33353F] text-light-text-primary dark:text-white hover:border-light-pink-500 dark:hover:border-primary-500 hover:bg-light-surfaceAlt dark:hover:bg-[#181818] font-semibold transition-all duration-300"
            >
              <ArrowDownTrayIcon className="h-5 w-5" />
              {t('hero.cta.cv')}
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-gradient-to-br from-light-pink-200 to-light-rose-200 dark:from-primary-900/30 dark:to-secondary-900/30 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative shadow-2xl">
            <Image
              src="/images/hero-image.png"
              alt="Zeineb Eya Rahmani"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
