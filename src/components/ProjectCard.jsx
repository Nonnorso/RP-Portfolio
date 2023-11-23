import React from "react";

export default function ProjectCard ({ onNavigate }){
    const handleProjectClick = () => {
        onNavigate("/Project");
      };

    return(
        <div>
            <img src="" alt="" title="Image du projet" />
            <h2>titre du projet</h2>
            <p>courte description avec ellipsis</p>
            <button onClick={handleProjectClick}>Lien vers le projet</button>
        </div>
    )
}