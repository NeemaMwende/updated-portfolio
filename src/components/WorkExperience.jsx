import React, { useRef } from 'react';
import "./WorkExperience.css";
import ExperienceCard from './ExperienceCard';
import { WORK_EXPERIENCE } from "../../src/utils/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SlidingCard from './SlidingCard';

const WorkExperience = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    sliderRef.current.slickNext();
  };

  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section id='work-section' className='experience-container'>
     <SlidingCard>
      <h5>Work Experience</h5>
      </SlidingCard>
      <SlidingCard>
      <div className="experience-content">
        <div className='arrows'>
            <div className="arrow-right" onClick={slideRight}>
              &gt;
            </div>
            <div className="arrow-left" onClick={slideLeft}>
              &lt;
            </div>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {WORK_EXPERIENCE.map((item) => (
            <ExperienceCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
      </SlidingCard>
    </section>
  );
}

export default WorkExperience;
