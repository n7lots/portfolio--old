import "./App.css";
import Header from "./components/Header";
import "./components/Header.css";
import HomeSection from "./components/Sections/HomeSection";
import "./components/Sections/HomeSection.css";
import "./components/Buttons/NavButton.css";
import EducationSection from "./components/Sections/EducationSection";
import "./components/Sections/EducationSection.css";
import SkillsSection from "./components/Sections/SkillsSection";
import "./components/Sections/SkillsSection.css";
import "./components/Card.css";
import "./components/Slider/Slider.css";
import ExperienceSection from "./components/Sections/ExperienceSection";
import './components/Buttons/SkillButton.css'
import './components/Sections/ExperienceSection.css'
import './components/Slider/VerticalSlider.css'
import { useState } from "react";


export default function App() {
  const [showHome, setShowHome] = useState(true);
  const [showEducaton, setShowEducation] = useState(false);
  const [showSkill, setShowSkill] = useState(false);
  const [showExperience, setShowExperience] = useState(false);

  const [activeTab, setActiveTab] = useState("home");

  const handleHomeClick = () => {
    setShowHome(true);
    setShowEducation(false);
    setShowSkill(false);
    setShowExperience(false);
  };

  const handleEducationClick = () => {
    setShowEducation(true);
    setShowHome(false);
    setShowSkill(false);
    setShowExperience(false);
  };

  const handleSkillClick = () => {
    setShowSkill(true);
    setShowHome(false);
    setShowEducation(false);
    setShowExperience(false);
  };

  const handleExperienceClick = () => {
    setShowExperience(true)
    setShowEducation(false);
    setShowHome(false);
    setShowSkill(false);
  }

  return (
    <>
      <Header
        onHomeClick={handleHomeClick}
        onEducationClick={handleEducationClick}
        onSkillClick={handleSkillClick}
        onExperienceClick={handleExperienceClick}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <main>
        {showHome && <HomeSection />}
        {showEducaton && <EducationSection />}
        {showSkill && <SkillsSection />}
        {showExperience && <ExperienceSection />}
      </main>
    </>
  );
}
