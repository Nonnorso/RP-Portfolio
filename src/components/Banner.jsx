import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div>
      <img src="" alt=" " title="image banniere" />
      <h2>titre</h2>
      <p>presentation rapide</p>
      <button>
        <Link to="/About">bouton en savoir plus</Link>
      </button>
    </div>
  );
}