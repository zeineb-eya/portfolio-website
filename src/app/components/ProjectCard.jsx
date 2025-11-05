import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, techStack, features, gradient }) => {
  // Default gradients for different project types
  const defaultGradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
  ];
  
  const cardGradient = gradient || imgUrl || defaultGradients[Math.floor(Math.random() * defaultGradients.length)];
  
  return (
    <div className="bg-light-surface dark:bg-[#181818] rounded-xl overflow-hidden border border-light-border dark:border-[#33353F] hover:border-light-pink-400 dark:hover:border-primary-500 transition-all duration-300 hover:transform hover:scale-105 h-full flex flex-col shadow-lg hover:shadow-2xl">
      <div
        className="h-52 md:h-64 relative group"
        style={{ 
          background: imgUrl ? `url(${imgUrl})` : cardGradient, 
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-90 transition-all duration-500">
          <Link
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link transform hover:scale-110 transition-transform"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-light-text-primary dark:text-white p-6 flex flex-col flex-grow">
        <h5 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-light-pink-600 to-light-rose-600 dark:from-primary-400 dark:to-secondary-600">{title}</h5>
        <p className="text-light-text-secondary dark:text-[#ADB7BE] mb-4 text-sm leading-relaxed flex-grow">{description}</p>
        
        {techStack && techStack.length > 0 && (
          <div className="mb-4">
            <p className="text-xs font-semibold text-light-text-tertiary dark:text-gray-400 mb-2">Tech Stack:</p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <span 
                  key={index} 
                  className="text-xs px-3 py-1 rounded-full bg-light-pink-100 dark:bg-primary-500/30 text-light-pink-700 dark:text-white border border-light-pink-300 dark:border-primary-400/50 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {features && features.length > 0 && (
          <div className="mt-auto">
            <p className="text-xs font-semibold text-light-text-tertiary dark:text-gray-400 mb-2">Key Features:</p>
            <ul className="text-xs text-light-text-secondary dark:text-[#ADB7BE] space-y-1">
              {features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-light-pink-600 dark:text-primary-400 mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
