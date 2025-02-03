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
          Ecole Supérieure Privée d'Ingénierie et de Technologies,
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
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Results-driven Business Intelligence (BI) Engineer and ERP Analyst with a strong background in data analysis, machine learning, and quality assurance.
            Proven expertise in transforming raw data into actionable insights, optimizing decision-making processes, and enhancing operational efficiency through ERP systems.
            Skilled in BI tools (Power BI, Tableau, Looker), ERP platforms (SAP, Dynamics 365), and data integration (ETL, SQL, dbt).
            Adept at leading cross-functional teams, managing complex data workflows, and delivering high-impact solutions that drive business success.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
