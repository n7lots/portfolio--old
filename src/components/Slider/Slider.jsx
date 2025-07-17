import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';


export default function Slider({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="slider">
      <button className='slider-button' onClick={prevSlide}><FontAwesomeIcon icon={faChevronLeft}  className="fa-3x" /></button>
      <div className="slider-content">{items[currentIndex]}</div>
      <button className='slider-button' onClick={nextSlide}><FontAwesomeIcon icon={faChevronRight}  className="fa-3x" /></button>
    </div>
  );
}
