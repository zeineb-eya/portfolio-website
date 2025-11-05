"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
      content: (
          <div>
              <h3>Technical Skills:</h3>
              <ul className="list-disc pl-2">
                  <li><strong>Programming:</strong> Python, R, Java, C/C++/C#, JavaScript, TypeScript, React</li>
                  <li><strong>Databases:</strong> SQL Server, SAP BW, SAP ABAP, dbt, Google BigQuery</li>
                  <li><strong>ETL & Integration:</strong> SSIS, SSAS, Talend, NiFi</li>
                  <li><strong>Cloud:</strong> Google Cloud (Composer, Storage), SAP Analytics Cloud, Microsoft Azure</li>
                  <li><strong>Data Analysis:</strong> Data Visualization, Mining, Warehousing, Modeling, Pipelines</li>
                  <li><strong>Testing:</strong> Manual & Automated (Selenium/Puppeteer), Unit, Regression, API, Performance</li>
              </ul>

              <h3>Business & Tools:</h3>
              <ul className="list-disc pl-2">
                  <li><strong>BI Tools:</strong> Power BI, Tableau, Looker, Data Studio, Excel</li>
                  <li><strong>ERP & CRM:</strong> Dynamics 365, SAP BW, SAP ABAP</li>
                  <li><strong>Project Management:</strong> Agile (Scrum, Kanban), Jira, Trello, ClickUp, Notion</li>
                  <li><strong>Marketing:</strong> Marketing Mix Modeling, Customer Segmentation, SWAT Analysis</li>
                  <li><strong>Design:</strong> Adobe XD, Figma, Illustrator, Photoshop</li>
              </ul>

              <h3>Soft Skills:</h3>
              <ul className="list-disc pl-2">
                  <li>Presentation, Teamwork, Problem Solving, Detail-Oriented, Organization</li>
              </ul>
          </div>
      ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Computer Science, <br/>
          Ecole Supérieure Privée d&apos;Ingénierie et de Technologies,
          Ariana</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li> <a href="https://www.coursera.org/account/accomplishments/verify/39KTAVSPM9PL"> Certificate Of Achievement
          Digital Marketing
          Analytics:
          Master the Art of Data
          Visualization With Tableau
          Public</a></li>
        <li><a href="https://certificates.mavenanalytics.io/e8789177-7da5-4536-a83f-421b98a972e6#acc.6MEkj0UI"> Think Like an Analyst</a></li>
        <li><a href="https://www.coursera.org/account/accomplishments/verify/CDU3B7P9CRM5"> Designing a SAP Solution </a></li>
        <li><a href="https://www.coursera.org/account/accomplishments/verify/4J4X2LK8F6UR">Implementing an SAP Solution
        </a></li>
        <li><a href=""></a> Dashboard In A Day
          Certificate Of Completion
        </li>
        <li><a href="https://www.coursera.org/account/accomplishments/verify/UGTT9BLCDULU"></a> Introduction to Microsoft Azure Cloud Services
        </li>
        <li><a href="https://www.coursera.org/account/accomplishments/verify/XCX8PRS2EXHX">Microsoft Azure Management Tools and Security Solutions</a> </li>
        <li><a href="https://www.coursera.org/account/accomplishments/verify/FXE9HA4G4PMK">Microsoft Azure Services and Lifecycles
        </a> </li>
        <li><a href="https://www.coursera.org/account/accomplishments/verify/U6B78UQU4XW3">Preparing for the AZ-900 Microsoft Azure Fundamentals Exam
        </a> </li>
        <li><a href="https://festman.io/certificate_validation">Certificate Of
            Accomplishment Power BI
            Fundamentals for Data
            Analytics
            Credential ID:
            379

        </a> </li>

      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-light-text-primary dark:text-white py-16" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16">
        <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden bg-gradient-to-br from-light-pink-200 to-light-rose-200 dark:from-primary-900/30 dark:to-secondary-900/30 shadow-2xl flex items-center justify-center sticky top-24">
          <Image 
            src="/images/about-image.png" 
            alt="Zeineb Eya Rahmani" 
            width={500} 
            height={500}
            className="object-cover"
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-light-pink-600 to-light-rose-600 dark:from-primary-400 dark:to-secondary-600">
              About Me
            </span>
          </h2>
          <p className="text-base lg:text-lg text-light-text-secondary dark:text-gray-300 leading-relaxed">
            Computer Science Engineer and Business Intelligence Analyst with <strong>3+ years of experience</strong> in Quality Assurance, Data Engineering, and Business Analysis. 
            I build robust data pipelines, design interactive dashboards, and implement comprehensive testing frameworks. 
            Passionate about leveraging data to drive business decisions and ensure software quality.
          </p>
          <div className="flex flex-row flex-wrap justify-start mt-8 gap-2">
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8 text-light-text-secondary dark:text-gray-300">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
