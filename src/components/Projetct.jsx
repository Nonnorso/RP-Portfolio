import React from "react";
import "../styles/Projet.scss"

export default function Project({ project }) {
  if (!project) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <div className="ProjetText">
      <h2>{project.titre}</h2>
      <p>{project.description_complete}</p>
    </div>
  );
}