import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer-container">
        <p><Link to="/contact">Contactez-moi</Link></p>
        <p><Link to="/LegalMentions">Mentions Légales</Link></p>
        <p>© 2023 Philippot Raphaël All rights reserved</p>
    </footer>
  );
};

export default Footer;