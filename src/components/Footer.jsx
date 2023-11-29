import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Footer.scss';

const Footer = () => {

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <footer className="footer-container">
        <h2 id="contact">Contactez-moi</h2>
        <p><a href="tel:+33 0643775569"><span className="icon">✆</span> 06.43.77.55.69</a></p>
        <p> <a href="mailto:r.philippot@live.fr"><span className="icon">✉</span> r.philippot@live.fr</a></p>
        <p><Link to="/LegalMentions" onClick={() => handleNavigate('/LegalMentions')}>Mentions Légales</Link></p>
        <p>© 2023 Philippot Raphaël All rights reserved</p>
    </footer>
  );
};

export default Footer;