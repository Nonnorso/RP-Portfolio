import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="contact-column">
        <h2><Link to="/contact">Contactez-moi</Link></h2>
        <p>Pour toute question, collaboration ou simplement pour discuter, n'hésitez pas à me contacter.</p>
        <p>Coordonnées :</p>
        <p>06.43.77.55.69</p>
        <p>r.philippot@live.fr</p>
      </div>
      <div className="legal-column">
        <Link to="/LegalMentions">Mentions Légales</Link>
      </div>
    </footer>
  );
};

export default Footer;