import React from "react";
import { Link } from "react-router-dom";
import "../styles/Banner.scss"

export default function Banner({ data, afficherBouton = true }) {
  return (
    <div className="banner-container">
      <img src={data.image} alt="banniere" title="banniere" />
        <div className="banner-content">
        <h2>{data.titre}</h2>
        <p>{data.description}</p>
        {afficherBouton && (
          <button>
            <Link to="/About">En savoir plus</Link>
          </button>
          )}
      </div>
    </div>
  );
}