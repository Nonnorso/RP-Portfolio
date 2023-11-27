import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../components/Banner";
import ProjectCard from "../components/ProjectCard";
import data from '../Data/data.json';

export default function Portfolio (){
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

    return ( 
        <div>
          <Banner data={data.banner[1]}/>

          <section className="Projects">
            <h2>Mes projets</h2>
            <ProjectCard projects={data.projets} onNavigate={handleNavigate}/>        
          </section>
        </div>
      );
}