import React, { useState } from "react";
import leftArrowIcon from '../assets/Right_vector.webp';
import rightArrowIcon from '../assets/Left_vector.webp';
import "../styles/Projet.scss";

export default function PreviewProject({ project }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!project || !project.images_apercu) {
    return <div>Aperçu non disponible</div>;
  }

  const openCodeLink = () => {
    window.open(project.code, "_blank");
  };

  const openSiteLink = () => {
    window.open(project.site, "_blank");
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? project.images_apercu.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === project.images_apercu.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="ProjetImg">
      <h2>Aperçu du projet</h2>

      {project.images_apercu.length > 1 && (
        <>
          <div className="CarousselContainer">
            <div className="CarousselImage">
              <img
                src={`${process.env.PUBLIC_URL}/${project.images_apercu[currentIndex]}`}
                alt={`apercu-${currentIndex + 1}`}
                title={`apercu-${currentIndex + 1}`}
              />
            </div>

            <div className="CarousselNav">
              <img
                src={rightArrowIcon}
                alt="Previous"
                className="NavArrow LeftArrow"
                onClick={handlePrevClick}
              />

              <img
                src={leftArrowIcon}
                alt="Next"
                className="NavArrow RightArrow"
                onClick={handleNextClick}
              />
            </div>
          </div>
        </>
      )}

      <div className="linkButton">
        <button onClick={openCodeLink}>Voir le code</button>
        <button onClick={openSiteLink}>Voir le site</button> </div>
    </div>
  );
}