import React from "react";
import AboutMe from "../components/AboutMe";
import CV from "../assets/CV/Philippot-Raphael-Developpeur-Integrateur-Web.pdf";
import "../styles/About.scss"

export default function About (){

    const handleDownloadClick = () => {
      const link = document.createElement("a");
      link.href = CV;
      link.download = "Philippot-Raphael-Developpeur-Integrateur-Web.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    return ( 
      <div className="AboutContainer">
      <div className="AboutContent">
          <AboutMe />

          <section className="formation">
            <h2>Ma formation</h2>
            <p>Ayant suivis une formation spécialisée sur le site web d'Openclassrooms, et plusieurs formations approfondies sur Javascript et React notamment, je suis maintenant un développeur web compétent avec des compétences approfondies en HTML5, CSS3, JavaScript et React. Fort d'une expérience pratique, j'ai déjà utilisé ces techniques pour la création de plusieurs projets web, démontrant ma capacité à concevoir des interfaces interactives et esthétiques. </p>
          </section>

          <section className="more">
            <h2>Mon parcours</h2>
            <p>Pour plus de détails sur mon parcours académique et mes expériences professionnelles, n’hesitez pas à télécharger mon CV !</p>
            <button onClick={handleDownloadClick}>Télécharger mon CV</button>
          </section>
        </div>
      </div>
      );
}