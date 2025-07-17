import EducationPage from '/EducationPage.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

export default function EducationSection() {
  return (
    <section className="education">
      <div className='education-content'>
        <div className='education-img'>
          <img src={EducationPage} alt="EducationPage" />
        </div>
        <div className='about-education'>
            <h1>What about <span>education</span>?</h1>
            <h3>I will become a <span>bachelor</span> <span><FontAwesomeIcon icon={faGraduationCap} /></span></h3>
            <p>
              In 2022, I graduated from Pavlograd Lyceum No. 11 with a silver medal.
              After graduating from school in September of the same year, I entered 
              the University of Customs and Finance at the Faculty of Innovative Technologies 
              (121 "software engineering"). During the 3 years of study, I studied various languages 
              ​​and areas of programming, but I am most interested in Javascript and Frontend development.
            </p>
        </div>
      </div>
    </section>
  );
}
