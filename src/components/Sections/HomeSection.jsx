import HomePage from '/HomePage.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function HomeSection(){
    return(
        <section className='home'>
          <div className='home-img'>
            <img src={HomePage} alt="HomePage.png" />
          </div>
          <div className='home-content'>
              <h1>Hi, it's <span>Vadym</span></h1>
              <h3>I'm a <span>Student Frontend developer</span></h3>
              <p className='typing-text'>I'm looking for a job, I'll be glad if you offer it to me. 
                 I'm currently a free agent who practices every day to become even better.
                 If you have any advice or suggestions, you can write to me.
                 I'm online almost all day.
              </p>
              <div className='social-icons'>
                <a href="https://www.instagram.com/n7lots/" target='blank'><FontAwesomeIcon icon={faInstagram} className="fa-2x" /></a>
                <a href="https://github.com/n7lots" target='blank'><FontAwesomeIcon icon={faGithub} className="fa-2x" /></a>
                <a href="https://www.linkedin.com/in/%D0%B2%D0%B0%D0%B4%D0%B8%D0%BC-%D0%B2%D0%B0%D1%81%D0%B8%D0%BB%D1%8C%D1%94%D0%B2-2a621029a/" target='blank'><FontAwesomeIcon icon={faLinkedin} className="fa-2x" /></a>
              </div>
          </div>
        </section>
    )
}