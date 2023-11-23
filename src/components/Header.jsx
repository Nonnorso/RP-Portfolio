import React, { useState, useEffect, useCallback } from 'react';
import { Link,NavLink } from 'react-router-dom';
import '../styles/Header.scss';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const handleOutsideClick = useCallback((event) => {
    if (isMenuOpen && !event.target.closest('.menu')) {
      closeMenu();
    }
  }, [isMenuOpen, closeMenu]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return (
    <div className="header-container">
      <div className="header-title">
        <h1><Link to="/"><span className='InitialGold'>N</span>onnorso</Link></h1>
      </div>
      {isMobile ? null : (
        <div className='DesktopNav'>
          <ul>
            <li><NavLink to="/" activeclassname="active">Accueil</NavLink></li>
            <li><NavLink to="/about" activeclassname="active">À propos</NavLink></li>
            <li><NavLink to="/portfolio" activeclassname="active">Portfolio</NavLink></li>
          </ul>
        </div>
      )}

      {isMobile ? (
        <div
          className={`menu-icon ${isMenuOpen ? 'open' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleMenu();
          }}
        >
          ☰
        </div>
      ) : null}

      {isMobile ? (
        <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={closeMenu}>Accueil</Link></li>
            <li><Link to="/about" onClick={closeMenu}>À propos</Link></li>
            <li><Link to="/portfolio" onClick={closeMenu}>Portfolio</Link></li>
          </ul>
        </nav>
      ) : null}
    </div>
  );
};

export default Header;