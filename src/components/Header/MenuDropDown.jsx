import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Header.scss';

const MenuDropdown = ({ isOpen, closeMenu }) => {
  console.log('isOpen:', isOpen);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Vérifie si le clic n'est pas à l'intérieur du menu
      if (isOpen && !event.target.closest('.menu')) {
        closeMenu();
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen, closeMenu]);

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