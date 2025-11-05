"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Years Experience",
    value: "3",
    postfix: "+",
  },
  {
    metric: "Projects Completed",
    value: "8",
    postfix: "+",
  },
  {
    metric: "Test Cases Executed",
    value: "200",
    postfix: "+",
  },
  {
    metric: "Certifications",
    value: "15",
    postfix: "+",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-light-border dark:sm:border-[#33353F] sm:border rounded-xl py-8 px-8 md:px-16 flex flex-col sm:flex-row items-center justify-between bg-light-surfaceAlt/50 dark:bg-[#181818]/50 backdrop-blur-sm shadow-lg">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-light-text-primary dark:text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-light-pink-600 to-light-rose-600 dark:from-primary-400 dark:to-secondary-600 text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-light-text-secondary dark:text-[#ADB7BE] text-sm md:text-base font-medium">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
