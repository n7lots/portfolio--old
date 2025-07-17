import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons';
import NavButton from './Buttons/NavButton';
import './Buttons/NavButton.css'


export default function Header({ onHomeClick, onEducationClick, onSkillClick, onExperienceClick, activeTab, setActiveTab }) {
  return (
    <header>
      <button className="button">Language <FontAwesomeIcon icon={faEarthEurope} /></button>
      <nav>
        <NavButton onClick={() =>{onHomeClick(); setActiveTab('home');}}
                   className={activeTab === 'home' ? 'active' : ''}>
                   Home
        </NavButton>
        <NavButton
                   onClick={() =>{onEducationClick(); setActiveTab('education')}}
                   className={activeTab === 'education' ? 'active' : ''}>
                   Education
        </NavButton>
        <NavButton
                   onClick={() => {onSkillClick(); setActiveTab('skill')}}
                   className={activeTab === 'skill' ? 'active' : ''}>
                   Skills
        </NavButton>
        <NavButton
                   onClick={() => {onExperienceClick(); setActiveTab('experience')}}
                   className={activeTab === 'experience' ? 'active' : ''}>
                   Experience
        </NavButton>
      </nav>
    </header>
  );
}
