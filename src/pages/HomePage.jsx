import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.scss';
import Banner from '../components/Banner'
import SkillCard from '../components/SkillCard'
import ProjectCard from '../components/ProjectCard'

function HomePage() {
  return ( 
    <div>
      <Banner />

      <section className='competences'>
        <h2>Compétences</h2>
        <SkillCard />
      </section>

      <section className='portfolio'>
        <h2>Quelsques projets...</h2>
        <ProjectCard />
        <p>Vous souhaitez découvrir l'ensemble de mes travaux ? Consultez la page complète de tous mes projets. Vous y trouverez une variété de projets mettant en avant mes compétences et ma passion pour le développement web.</p>
        <btn><Link to="/Portfolio">Tous mes projets</Link></btn>
      </section>
    </div>
  );
}

export default HomePage;
