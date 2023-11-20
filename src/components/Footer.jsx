import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="contact-column">
        <h2>Me Contacter</h2>
        <p>Pour toute question, collaboration ou simplement pour discuter, n'hésitez pas à me contacter.</p>
        <Link to="/contact">Contactez-moi</Link>
        <p>Coordonnées : Tel, Email</p>
      </div>
      <div className="legal-column">
        <Link to="/LegalMentions">Mentions Légales</Link>
      </div>
    </footer>
  );
};

export default Footer;