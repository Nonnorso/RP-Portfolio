import React from "react";
import "../styles/ProjectCard.scss"

export default function ProjectCard ({ projects, onNavigate }){
    const handleProjectClick = () => {
        onNavigate("/Project");
      };

      return (
        <div className="project-card">
          {projects.map((project, index) => (
            <div className="dimensionsCard" key={index}>
              <img src={project.image_acceuil} alt="projet" title="projet" />
              <h2>{project.titre}</h2>
              <p>{project.description_courte}</p>
              <button onClick={handleProjectClick}>Voir le projet</button>
            </div>
          ))}
        </div>
      );
    }