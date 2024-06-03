import React, { useState } from 'react'
import './Skills.css'
import SkillCard from './SkillCard';
import { SKILLS } from '../../src/utils/data';
import SkillsInfoCard from './SkillsInfoCard';
import SlidingCard from './SlidingCard';

const Skills = () => {

  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <section id='skills-section' className='skills-container'>
      <SlidingCard>
      <h5>Technical Profiency</h5>
      </SlidingCard>

      <SlidingCard>
      <div className='skills-content'>
     
        <div className='skills'>
            {SKILLS.map((item) => (
              <SkillCard 
                key={item.title}
                iconUrl={item.icon}
                title={item.title}
                isActive={selectedSkill.title === item.title}
                onClick={() => {
                  handleSelectSkill(item);
                }}
              />
            ))}
        </div>
        

        <div className='skills-info'>
          <SkillsInfoCard 
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
        
      </div>
      </SlidingCard>
    </section>
  );
};

export default Skills;