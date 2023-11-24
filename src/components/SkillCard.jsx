import React from 'react';

export default function SkillCard({ skills }) {
  return (
    <div>
      {skills.map((skill, index) => (
        <div key={index}>
          <img src={skill.image} alt={skill.titre} title="IconeSkill" />
          <p>{skill.titre}</p>
        </div>
      ))}
    </div>
  );
}