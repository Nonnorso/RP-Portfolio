import React from "react";

export default function PreviewProject({ project }) {
  if (!project || !project.images_apercu) {
    return <div>Aperçu non disponible</div>;
  }

  return (
    <div>
      {project.images_apercu.map((image, index) => (
        <img key={index} src={`${process.env.PUBLIC_URL}/${image}`} alt={`apercu-${index + 1}`} title={`apercu-${index + 1}`} />
      ))}
    </div>
  );
}