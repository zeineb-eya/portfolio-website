import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-light-bg dark:bg-[#121212] transition-colors duration-300">
      <Navbar />
      <div className="container mt-24 mx-auto px-6 md:px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
