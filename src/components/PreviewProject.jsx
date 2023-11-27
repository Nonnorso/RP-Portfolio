import React from "react";

export default function PreviewProject ({ project }) {

    return(
        <div>
            <img src={project.image_acceuil} alt="apperçut" title="apperçut" />
        </div>
    )
}