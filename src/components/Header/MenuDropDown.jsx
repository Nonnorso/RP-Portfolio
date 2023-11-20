import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Header.css';

const MenuDropdown = ({ isOpen }) => {
  console.log('isOpen:', isOpen);

  return (
    <nav className={`menu ${isOpen ? 'open' : ''}`}>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/about">À propos</Link></li>
        <li><Link to="/portfolios">Portfolios</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default MenuDropdown;