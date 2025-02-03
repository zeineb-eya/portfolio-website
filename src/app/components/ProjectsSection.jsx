"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "BCG Data Science Job Simulation on Forage",
    description:
        "Completed a customer churn analysis simulation, demonstrating advanced data analytics skills and achieving an 85% accuracy rate in predicting customer churn.",
    image: "/images/projects/bcg.png",
    tag: ["All", "Data Science"],
    gitUrl: "https://github.com/zeineb-eya/BCG-Data-Science-Job-Simulation-on-Forage",
  },
  {
    id: 2,
    title: "Business Intelligence Project: World Development Indicators",
    description:
        "Developed a decision-support dashboard using Power BI, improving data analysis efficiency and accessibility to critical insights.",
    image: "/images/projects/bi.png",
    tag: ["All", "BI"],
    gitUrl: "https://github.com/zeineb-eya/sustainable-development-goals",
  },
  {
    id: 3,
    title: "InsightFlow: Crafting Clarity in Online Retail Data",
    description:
        "Built a data pipeline using Apache Airflow and Google Cloud Storage, enhancing data processing efficiency and reporting accuracy.",
    image: "/images/projects/insightflow.png",
    tag: ["All", "Data Engineering"],
    gitUrl: "https://github.com/zeineb-eya/retail",
  },
  {
    id: 4,
    title: "SAP BW Project: Retail",
    description:
        "Analyzed sales and stock data using SAP BW, enabling data-driven decision-making and improving inventory turnover.",
    image: "/images/projects/sap_bw.png",
    tag: ["All", "BI"],
    gitUrl: "/",
  },
  {
    id: 5,
    title: "Dynamis CRM 365 Project: Real Estate CRM",
    description:
        "Customized CRM Dynamics 365 solution for real estate management, enhancing customer relationship management efficiency.",
    image: "/images/projects/crm.png",
    tag: ["All", "ERP"],
    gitUrl: "/",
  },
  {
    id: 6,
    title: "DevOps Project: Spring Boot Application Pipeline",
    description:
        "Developed a robust DevOps pipeline for a Spring Boot application, implementing CI/CD, Docker, and monitoring with Prometheus and Grafana.",
    image: "/images/projects/devops.png",
    tag: ["All", "DevOps"],
    gitUrl: "https://github.com/moueffek/Devops23/tree/feat/initiation_kaddem_devops_project",
  },
];

const ProjectsSection = () => {
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
      <section id="projects">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          My Projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
          <ProjectTag onClick={handleTagChange} name="Data Science" isSelected={tag === "Data Science"} />
          <ProjectTag onClick={handleTagChange} name="BI" isSelected={tag === "BI"} />
          <ProjectTag onClick={handleTagChange} name="Data Engineering" isSelected={tag === "Data Engineering"} />
          <ProjectTag onClick={handleTagChange} name="ERP" isSelected={tag === "ERP"} />
          <ProjectTag onClick={handleTagChange} name="DevOps" isSelected={tag === "DevOps"} />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
              <motion.li
                  key={index}
                  variants={cardVariants}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  transition={{ duration: 0.3, delay: index * 0.2 }}
              >
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    imgUrl={project.image}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                />
              </motion.li>
          ))}
        </ul>
      </section>
  );
};

export default ProjectsSection;
