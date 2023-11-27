import React from 'react';
import "../styles/SkillCard.scss"

export default function SkillCard({ skills }) {
  return (
    <div className="skill-card">
      {skills.map((skill, index) => (
        <div className="dimensionsCard" key={index}>
          <img src={skill.image} alt={skill.titre} title="IconeSkill" />
          <p>{skill.titre}</p>
        </div>
      ))}
    </div>
  );
}