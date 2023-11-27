import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/HomePage.scss';
import Banner from '../components/Banner'
import SkillCard from '../components/SkillCard'
import ProjectCard from '../components/ProjectCard'
import data from '../Data/data.json';

function HomePage() {
  const navigate = useNavigate();

  const handleNavigate = (projectId) => {
    navigate(`${projectId}`);
  };

  const latestProjects = data.projets.slice(-3);

  

  return ( 
    <div className="HomepageContainer">
      <div className="HomePageContent">

        <Banner data={data.banner[0]}/>

        <section className='competences'>
          <h2>Quelques compétences</h2>
          <SkillCard skills={data.skills}/>
        </section>

        <section className='portfolio'>
          <h2>Mes dernieres realisations</h2>
          <ProjectCard projects={latestProjects} onNavigate={handleNavigate} />
          <p>Vous souhaitez découvrir l'ensemble de mes travaux ? Consultez la page complète de tous mes projets. Vous y trouverez une variété de projets mettant en avant mes compétences et ma passion pour le développement web.</p>
          <button><Link to="/Portfolio">Tous mes projets</Link></button>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
