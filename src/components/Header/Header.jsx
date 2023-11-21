import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuDropdown from '../Header/MenuDropDown';
import '../../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="header-container">
      <div className="header-title">
        <h1><Link to="/"><span className='InitialGold'>N</span>onnorso</Link></h1>
      </div>
      {isMobile ? null : (
        <div className='DesktopNav'>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">À propos</Link></li>
            <li><Link to="/portfolios">Portfolios</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      )}

      {isMobile ? (
              <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                ☰
              </div>
            ) : (
              null
            )}
      
      {isMobile ? <MenuDropdown isOpen={isMenuOpen} /> : null}
    </div>
  );
};

export default Header;