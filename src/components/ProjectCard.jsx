import React from "react";
import "../styles/ProjectCard.scss"

export default function ProjectCard ({ projects, onNavigate }){
    const handleProjectClick = (projectId) => {
        onNavigate(`/Projet/${projectId}`);
      };

      return (
        <div className="project-card">
          {projects.map((project) => (
            <div className="dimensionsCard" key={project.id}>
              <img src={`${process.env.PUBLIC_URL}/${project.image_acceuil}`} alt="projet" title="projet" />
              <h2>{project.titre}</h2>
              <p>{project.description_courte}</p>
              <button onClick={() => handleProjectClick(project.id)}>Voir le projet</button>
            </div>
          ))}
        </div>
      );
    }