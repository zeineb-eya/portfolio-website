"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import { BriefcaseIcon, CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline';

const experiences = [
  {
    id: 1,
    title: "Software Quality Assurance Engineer",
    company: "Uvey",
    location: "Centre Urban Nord, Ariana, Tunisia",
    period: "April 2025 – Present",
    current: true,
    highlights: [
      "Conduct functional, regression, and API testing for SaaS accounting platform (Quarkus, React)",
      "Build and maintain automated tests using Playwright with Allure reporting",
      "Integrate and validate AI-driven features using prompt engineering",
      "Monitor system health with Grafana and Prometheus dashboards",
      "Manage ClickUp boards and ensure traceable task lifecycles"
    ]
  },
  {
    id: 2,
    title: "Business Intelligence Engineer",
    company: "WeCraft",
    location: "Centre Urban Nord, Ariana, Tunisia",
    period: "February 2024 – September 2024",
    current: false,
    highlights: [
      "Designed scalable ETL pipelines with Apache Airflow and dbt, boosting efficiency by 40%",
      "Implemented CI/CD pipelines using Docker and GitLab CI",
      "Centralized financial datasets in BigQuery for enhanced data governance",
      "Implemented ML-driven anomaly detection, reducing fraud incidents by 20%",
      "Designed interactive dashboards improving decision-making efficiency by 30%"
    ]
  },
  {
    id: 3,
    title: "Software Quality Assurance Engineer",
    company: "WeCraft",
    location: "Centre Urban Nord, Ariana, Tunisia",
    period: "October 2022 – September 2024",
    current: false,
    highlights: [
      "Executed 200+ manual/automated test cases achieving 90% defect-identification rate",
      "Leveraged Kibana and Elasticsearch for comprehensive log analysis",
      "Reduced defect resolution turnaround by 30% through comprehensive documentation",
      "Built real-time defect-resolution dashboard with Trello integration",
      "Assisted in debugging 50+ issues using Quarkus and Angular"
    ]
  },
  {
    id: 4,
    title: "Software Quality Assurance Analyst Intern",
    company: "Deepnrise",
    location: "Centre Urban Nord, Ariana, Tunisia",
    period: "June 2022 – August 2022",
    current: false,
    highlights: [
      "Reviewed system specifications for Industry 4.0 platform",
      "Executed 150+ manual/automated test cases with 95% quality adherence",
      "Reduced bug-fix turnaround time by 25% through detailed reporting",
      "Performed post-release testing cutting defects by 15%"
    ]
  }
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-center text-4xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-light-pink-600 to-light-rose-600 dark:from-primary-400 dark:to-secondary-600">
            {t('experience.title')}
          </span>
        </h2>
        <p className="text-light-text-secondary dark:text-[#ADB7BE] text-center mb-12 max-w-2xl mx-auto">
          {t('experience.subtitle')}
        </p>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 pb-12 border-l-2 border-light-pink-300 dark:border-primary-500/30 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-light-pink-500 to-light-rose-500 dark:from-primary-500 dark:to-secondary-500 shadow-lg"></div>
              
              <div className="bg-light-surface dark:bg-[#181818] rounded-xl p-6 border border-light-border dark:border-[#33353F] hover:border-light-pink-400 dark:hover:border-primary-500 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-light-text-primary dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-light-pink-600 dark:text-primary-400 font-semibold mb-1">
                      <BriefcaseIcon className="h-5 w-5" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-light-text-secondary dark:text-[#ADB7BE] text-sm">
                      <MapPinIcon className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2 md:mt-0">
                    <CalendarIcon className="h-5 w-5 text-light-text-tertiary dark:text-[#ADB7BE]" />
                    <span className="text-sm font-medium text-light-text-secondary dark:text-[#ADB7BE]">
                      {exp.period}
                    </span>
                    {exp.current && (
                      <span className="ml-2 px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-light-pink-500 to-light-rose-500 dark:from-primary-500 dark:to-secondary-500 text-white">
                        {t('experience.current')}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-light-text-secondary dark:text-[#ADB7BE] text-sm">
                      <span className="text-light-pink-600 dark:text-primary-500 mt-1">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
