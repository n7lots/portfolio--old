import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function VerticalSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex === slides.length - 1) {
        setCurrentIndex(0);
    } else {
        setCurrentIndex(currentIndex + 1);
    }
  };
  
  const prevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(slides.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  };
  

  return (
    <div className="slider-container">
      <div
        className="slides-wrapper"
        style={{ transform: `translateY(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <img src={slide.image} alt={slide.title} />
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="slider-controls">
        <button onClick={prevSlide}><FontAwesomeIcon icon={faChevronUp} className="fa-3x"/></button>
        <button onClick={nextSlide}><FontAwesomeIcon icon={faChevronDown} className="fa-3x"/></button>
      </div>
    </div>
  );
}
