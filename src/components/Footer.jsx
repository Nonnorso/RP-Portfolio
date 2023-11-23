import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer-container">
        <h2 id="contact">Contactez-moi</h2>
        <p><a href="tel:+0643775569"><span className="icon">✆</span> 06.43.77.55.69</a></p>
        <p> <a href="mailto:r.philippot@live.fr"><span className="icon">✉</span> r.philippot@live.fr</a></p>
        <p><Link to="/LegalMentions">Mentions Légales</Link></p>
        <p>© 2023 Philippot Raphaël All rights reserved</p>
    </footer>
  );
};

export default Footer;