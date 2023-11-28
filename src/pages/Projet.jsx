import React from "react";
import { useParams } from "react-router-dom";
import Project from "../components/Projetct";
import PreviewProject from "../components/PreviewProject";
import data from '../Data/data.json';
import "../styles/Projet.scss"

export default function Projects() {
  const { projectId } = useParams();
  const projectToShow = data.projets.find(project => project.id === parseInt(projectId));

  if (!projectToShow) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <div className="ProjetContainer">
      <div className="ProjetContent">
        <img
          className="ProjetBanner"
          src={`${process.env.PUBLIC_URL}/${projectToShow.image_acceuil}`}
          alt="project-banner"
          title="project-banner"
        />
        <div key={projectId}>
          <Project project={projectToShow} />
          <PreviewProject project={projectToShow} />
        </div>
      </div>
    </div>
  );
}