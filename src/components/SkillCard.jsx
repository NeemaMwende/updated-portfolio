import React from 'react';
import './SkillCard.css';

const SkillCard = ({ title, iconUrl, onClick, isActive }) => {
  return (
    <div
      className={`skills-card ${isActive ? "active" : ""}`}
      onClick={() => onClick()}
        >
      <div className="skill-icon">
        <img src={iconUrl} alt="" />
      </div>

      <span>{title}</span>
    </div>
  );
};

export default SkillCard;