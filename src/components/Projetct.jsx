import React from "react";

export default function Project({ project }) {
  if (!project) {
    return <div>Projet non trouvé</div>;
  }

  const openCodeLink = () => {
    window.open(project.code, "_blank");
  };

  return (
    <div>
      <h2>{project.titre}</h2>
      <p>{project.description_complete}</p>
      <button onClick={openCodeLink}>Voir le code</button>
    </div>
  );
}