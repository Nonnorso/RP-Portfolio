import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MenuDropdown from '../Header/MenuDropDown';
import '../../styles/Header.scss';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
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
            <li><NavLink exact="true" to="/" activeclassname="active">Accueil</NavLink></li>
            <li><NavLink to="/about" activeclassname="active">À propos</NavLink></li>
            <li><NavLink to="/portfolios" activeclassname="active">Portfolios</NavLink></li>
            <li><NavLink to="/contact" activeclassname="active">Contact</NavLink></li>
          </ul>
        </div>
      )}

      {isMobile ? (
              <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} 
              onClick={(e) => {
                e.stopPropagation();
                toggleMenu();
              }}
              >
                ☰
              </div>
            ) : (
              null
            )}
      
      {isMobile ? <MenuDropdown isOpen={isMenuOpen} closeMenu={closeMenu} /> : null}
    </div>
  );
};

export default Header;