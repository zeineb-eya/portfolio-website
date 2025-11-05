import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white bg-gradient-to-r from-light-pink-500 to-light-rose-500 dark:from-primary-500 dark:to-secondary-500 border-light-pink-500 dark:border-primary-500 shadow-lg shadow-light-pink-500/50 dark:shadow-primary-500/50 scale-105"
    : "text-light-text-secondary dark:text-[#ADB7BE] bg-light-surface dark:bg-transparent border-light-border dark:border-slate-600 hover:border-light-pink-400 dark:hover:border-primary-400 hover:text-light-pink-600 dark:hover:text-white hover:shadow-md hover:shadow-light-pink-500/30 dark:hover:shadow-primary-500/30";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-semibold cursor-pointer transition-all duration-300 transform hover:scale-105`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
