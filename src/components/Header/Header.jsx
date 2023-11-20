import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuDropdown from '../Header/MenuDropDown';
import '../../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-container">
      <div className="header-title">
        <h1><Link to="/">Philippot Raphael Portfolio</Link></h1>
      </div>
      <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        ☰
      </div>

      <MenuDropdown isOpen={isMenuOpen} />
    </div>
  );
};

export default Header;