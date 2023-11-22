import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Header.scss';

const MenuDropdown = ({ isOpen, closeMenu }) => {
  console.log('isOpen:', isOpen);

  return (
    <nav className={`menu ${isOpen ? 'open' : ''}`}>
      <ul>
        <li><Link to="/" onClick={closeMenu}>Accueil</Link></li>
        <li><Link to="/about" onClick={closeMenu}>À propos</Link></li>
        <li><Link to="/portfolios" onClick={closeMenu}>Portfolios</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default MenuDropdown;