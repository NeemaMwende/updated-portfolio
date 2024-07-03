import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Projects.css';
import angel from "../Images/movie.png";
import { useRef } from 'react';
import { PROJECTS } from "../../src/utils/data";
import SlidingCard from './SlidingCard';


const Projects = () => {
  const sliderRef = useRef();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const slideRight = () => {
    sliderRef.current.slickNext();
  };

  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section id='projects-section' className="projects-container">
      <div className="arrow-right" onClick={slideRight}>
        &gt;
      </div>
      <div className="arrow-left" onClick={slideLeft}>
        &lt;
      </div>
      <SlidingCard>
      <div className="projects-info">
        <h5>My Projects</h5>

        <Slider ref={sliderRef} {...settings}>
          {PROJECTS.map((project, index) => (
            <div key={index} className="project-slide projects">
              <img src={project.image} alt={project.name} />
              <div className='information'>
                <span><h3>{project.name}</h3></span>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </div>
          ))}
          
        </Slider>

      </div>
      </SlidingCard>
    </section>
  );
};

export default Projects;