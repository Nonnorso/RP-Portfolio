import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/HomePage.scss';
import Banner from '../components/Banner'
import SkillCard from '../components/SkillCard'
import ProjectCard from '../components/ProjectCard'
import data from '../Data/data.json';

function HomePage() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return ( 
    <div className="HomepageContainer">
      <div className="HomePageContent">

        <Banner data={data.banner[0]}/>

        <section className='competences'>
          <h2>Compétences</h2>
          <SkillCard skills={data.skills}/>
        </section>

        <section className='portfolio'>
          <h2>Quelsques projets...</h2>
          <ProjectCard onNavigate={handleNavigate} />
          <p>Vous souhaitez découvrir l'ensemble de mes travaux ? Consultez la page complète de tous mes projets. Vous y trouverez une variété de projets mettant en avant mes compétences et ma passion pour le développement web.</p>
          <button><Link to="/Portfolio">Tous mes projets</Link></button>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
