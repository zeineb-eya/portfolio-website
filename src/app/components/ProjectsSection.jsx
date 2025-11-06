"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { useLanguage } from '../i18n/LanguageContext';

const projectsData = [
  {
    id: 1,
    title: "Machine Learning for Computational Drug Discovery",
    description: "A comprehensive machine learning workflow for computational drug discovery using ChEMBL data, applying ML techniques to predict bioactivity of chemical compounds.",
    image: null,
    tag: ["All", "Machine Learning", "Data Science"],
    gitUrl: "https://github.com/zeineb-eya/Drug-Discovery",
    techStack: ["Python", "Jupyter Notebooks", "scikit-learn", "ChEMBL API"],
    features: [
      "Data retrieval from ChEMBL database",
      "Exploratory data analysis",
      "Molecular descriptor calculation",
      "Regression modeling and comparison"
    ]
  },
  {
    id: 2,
    title: "Bioactivity Prediction App for Acetylcholinesterase",
    description: "Web application for predicting bioactivity of chemical compounds against Acetylcholinesterase, a key drug target for Alzheimer's disease treatment.",
    image: null,
    tag: ["All", "Machine Learning", "Web Development"],
    gitUrl: "https://github.com/zeineb-eya/bioactivity-predictions-app",
    techStack: ["Python", "Streamlit", "scikit-learn", "PaDEL-Descriptor", "Pandas"],
    features: [
      "SMILES input processing",
      "Molecular descriptor calculation",
      "ML-based prediction",
      "Interactive UI with results export"
    ]
  },
  {
    id: 3,
    title: "InsightFlow: Online Retail Data Pipeline",
    description: "End-to-end data engineering pipeline for processing and analyzing online retail data with automated quality checks.",
    image: null,
    tag: ["All", "Data Engineering"],
    gitUrl: "https://github.com/zeineb-eya/retail",
    techStack: ["Apache Airflow", "Docker", "Google Cloud Storage", "BigQuery", "dbt", "Soda"],
    features: [
      "Automated data ingestion",
      "Data quality checks with Soda",
      "Data modeling with dbt",
      "Business reporting dashboards"
    ]
  },
  {
    id: 4,
    title: "Coffee Shop Sales Analytics Dashboard",
    description: "A comprehensive Excel-based analytics dashboard for coffee shop sales data with multi-dimensional analysis and visualization.",
    image: null,
    tag: ["All", "Business Intelligence", "Analytics"],
    gitUrl: "https://github.com/zeineb-eya/coffee-shop-sales-analysis",
    techStack: ["Microsoft Excel", "Pivot Tables", "Excel Charts", "Data Transformation"],
    features: [
      "Revenue tracking by month",
      "Product category analysis",
      "Location-based performance",
      "Hourly sales patterns with interactive filtering"
    ]
  },
  {
    id: 5,
    title: "DevOps Pipeline for Spring Boot",
    description: "Robust CI/CD pipeline for automating build, test, and deployment processes for Spring Boot applications.",
    image: null,
    tag: ["All", "DevOps"],
    gitUrl: "https://github.com/moueffek/Devops23/tree/feat/initiation_kaddem_devops_project",
    techStack: ["Jenkins", "Git", "JUnit", "SonarQube", "Nexus", "Docker", "Prometheus", "Grafana"],
    features: [
      "Continuous integration and deployment",
      "Automated testing with JUnit",
      "Code quality analysis with SonarQube",
      "Containerization and monitoring"
    ]
  },
  {
    id: 6,
    title: "World Development Indicators Dashboard",
    description: "Business intelligence dashboard analyzing sustainable development indicators and COVID-19 impacts across multiple dimensions.",
    image: null,
    tag: ["All", "Business Intelligence"],
    gitUrl: "https://github.com/zeineb-eya/sustainable-development-goals",
    techStack: ["Power BI", "Talend", "SQL", "Data Mining"],
    features: [
      "Interactive visualizations",
      "Multi-source data integration",
      "Predictive analytics",
      "COVID-19 impact analysis"
    ]
  },
  {
    id: 7,
    title: "Dynamics CRM for Real Estate",
    description: "Custom CRM solution for real estate management with automated workflows and business process flows.",
    image: null,
    tag: ["All", "CRM", "Business Solutions"],
    gitUrl: "#",
    techStack: ["Microsoft Dynamics 365", "JavaScript", "Business Process Flows"],
    features: [
      "Custom entity modeling",
      "Dynamic form behaviors",
      "Process automation",
      "Customer relationship management"
    ]
  },
  {
    id: 8,
    title: "BCG Data Science Job Simulation",
    description: "Completed a customer churn analysis simulation, demonstrating advanced data analytics skills and achieving an 85% accuracy rate in predicting customer churn.",
    image: null,
    tag: ["All", "Data Science"],
    gitUrl: "https://github.com/zeineb-eya/BCG-Data-Science-Job-Simulation-on-Forage",
    techStack: ["Python", "Pandas", "scikit-learn", "Data Visualization"],
    features: [
      "Customer churn prediction",
      "Feature engineering",
      "Model evaluation (85% accuracy)",
      "Business recommendations"
    ]
  },
];

const ProjectsSection = () => {
  const { t } = useLanguage();
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
      project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
      <section id="projects" className="py-8">
        <h2 className="text-center text-4xl font-bold text-light-text-primary dark:text-white mt-4 mb-4 md:mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-light-pink-600 to-light-rose-600 dark:from-primary-400 dark:to-secondary-600">
            {t('projects.title')}
          </span>
        </h2>
        <p className="text-light-text-secondary dark:text-[#ADB7BE] text-center mb-8 max-w-2xl mx-auto">
          {t('projects.subtitle')}
        </p>
        <div className="text-light-text-primary dark:text-white flex flex-row flex-wrap justify-center items-center gap-2 py-6">
          <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
          <ProjectTag onClick={handleTagChange} name="Machine Learning" isSelected={tag === "Machine Learning"} />
          <ProjectTag onClick={handleTagChange} name="Data Science" isSelected={tag === "Data Science"} />
          <ProjectTag onClick={handleTagChange} name="Data Engineering" isSelected={tag === "Data Engineering"} />
          <ProjectTag onClick={handleTagChange} name="Business Intelligence" isSelected={tag === "Business Intelligence"} />
          <ProjectTag onClick={handleTagChange} name="DevOps" isSelected={tag === "DevOps"} />
          <ProjectTag onClick={handleTagChange} name="Analytics" isSelected={tag === "Analytics"} />
          <ProjectTag onClick={handleTagChange} name="CRM" isSelected={tag === "CRM"} />
        </div>
        <ul ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
              <motion.li
                  key={index}
                  variants={cardVariants}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  transition={{ duration: 0.3, delay: index * 0.15 }}
              >
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    imgUrl={project.image}
                    gitUrl={project.gitUrl}
                    techStack={project.techStack}
                    features={project.features}
                />
              </motion.li>
          ))}
        </ul>
      </section>
  );
};

export default ProjectsSection;
