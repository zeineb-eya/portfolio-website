"use client";

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

const skillsData = [
  {
    category: "programming",
    skills: [
      { name: "Python", level: 95 },
      { name: "JavaScript/TypeScript", level: 90 },
      { name: "Java", level: 85 },
      { name: "SQL", level: 95 },
      { name: "R", level: 80 },
    ]
  },
  {
    category: "testing",
    skills: [
      { name: "Selenium", level: 90 },
      { name: "Playwright", level: 95 },
      { name: "Cypress", level: 85 },
      { name: "JUnit", level: 85 },
      { name: "API Testing", level: 90 },
    ]
  },
  {
    category: "data",
    skills: [
      { name: "Power BI", level: 95 },
      { name: "Apache Airflow", level: 90 },
      { name: "BigQuery", level: 90 },
      { name: "dbt", level: 85 },
      { name: "Tableau", level: 85 },
    ]
  },
  {
    category: "cloud",
    skills: [
      { name: "Google Cloud Platform", level: 85 },
      { name: "Microsoft Azure", level: 80 },
      { name: "Docker", level: 90 },
      { name: "Jenkins", level: 85 },
      { name: "GitLab CI", level: 85 },
    ]
  },
  {
    category: "management",
    skills: [
      { name: "Jira", level: 95 },
      { name: "ClickUp", level: 90 },
      { name: "Scrum/Agile", level: 90 },
      { name: "Confluence", level: 85 },
      { name: "Trello", level: 90 },
    ]
  },
  {
    category: "business",
    skills: [
      { name: "Business Analysis", level: 90 },
      { name: "Requirements Gathering", level: 95 },
      { name: "Process Modeling", level: 85 },
      { name: "KPI Analysis", level: 90 },
      { name: "Stakeholder Management", level: 90 },
    ]
  }
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("programming");

  const activeSkills = skillsData.find(cat => cat.category === activeCategory)?.skills || [];

  return (
    <section id="skills" className="py-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-center text-4xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-light-pink-600 to-light-rose-600 dark:from-primary-400 dark:to-secondary-600">
            {t('skills.title')}
          </span>
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 mt-8">
          {skillsData.map((category) => (
            <button
              key={category.category}
              onClick={() => setActiveCategory(category.category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.category
                  ? 'bg-gradient-to-r from-light-pink-500 to-light-rose-500 dark:from-primary-500 dark:to-secondary-500 text-white shadow-lg shadow-light-pink-500/50 dark:shadow-primary-500/50'
                  : 'bg-light-surface dark:bg-[#181818] text-light-text-primary dark:text-[#ADB7BE] border border-light-border dark:border-[#33353F] hover:border-light-pink-400 dark:hover:border-primary-400'
              }`}
            >
              {t(`skills.categories.${category.category}`)}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {activeSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-light-surface dark:bg-[#181818] rounded-lg p-6 border border-light-border dark:border-[#33353F] hover:border-light-pink-400 dark:hover:border-primary-500 transition-all duration-300 shadow-md hover:shadow-xl"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-light-text-primary dark:text-white text-lg">
                    {skill.name}
                  </span>
                  <span className="text-light-pink-600 dark:text-primary-400 font-bold">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-light-pink-100 dark:bg-[#222] rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-light-pink-500 to-light-rose-500 dark:from-primary-500 dark:to-secondary-500 rounded-full shadow-lg"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
