import React from "react";

export default function Project ({ project }) {

    return(
        <div>
            <h2>{project.titre}</h2>
            <p>{project.description_complete}</p>
            <button>Voir le code</button>
        </div>
    )
}