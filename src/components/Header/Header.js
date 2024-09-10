import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logoImage from '../../assets/images/Fidel.webp';

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logoImage} alt="Logo" className="logo-img" />
          <Link to="/">Fidel Omondi O.</Link>
        </div>
        <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><Link to="/" className={currentPath === '/' ? 'active' : ''}>Home</Link></li>
            <li className="dropdown">
              <Link to="/about-me" className={currentPath.startsWith('/about-me') ? 'active dropdown-button' : 'dropdown-button'}>
                About Me
              </Link>
              <div className="dropdown-menu">
                <Link to="/about-me/bio" className={currentPath === '/about-me/bio' ? 'active' : ''}>Bio</Link>
                <Link to="/about-me/hobbies" className={currentPath === '/about-me/hobbies' ? 'active' : ''}>Hobbies/Interests</Link>
                <Link to="/about-me/professional-background" className={currentPath === '/about-me/professional-background' ? 'active' : ''}>Professional Background</Link>
                <Link to="/about-me/education" className={currentPath === '/about-me/education' ? 'active' : ''}>Education</Link>
                <Link to="/about-me/mission" className={currentPath === '/about-me/mission' ? 'active' : ''}>Personal Mission/Philosophy</Link>
                <Link to="/about-me/call-to-action" className={currentPath === '/about-me/call-to-action' ? 'active' : ''}>Call to Action</Link>
              </div>
            </li>
            <li className="dropdown">
              <Link to="/my-services" className={currentPath.startsWith('/my-services') ? 'active dropdown-button' : 'dropdown-button'}>
                My Services
              </Link>
              <div className="dropdown-menu">
                <Link to="/my-services" className={currentPath === '/my-services' ? 'active' : ''}>Overview</Link>
              </div>
            </li>
            <li><Link to="/skills" className={currentPath === '/skills' ? 'active' : ''}>Skills</Link></li>
            <li><Link to="/projects" className={currentPath === '/projects' ? 'active' : ''}>Projects</Link></li>
            <li><Link to="/testimonials" className={currentPath === '/testimonials' ? 'active' : ''}>Testimonials</Link></li>
            <li><Link to="/contact-form" className={currentPath === '/contact-form' ? 'active' : ''}>Contact</Link></li>
            <li><Link to="/resume" className={currentPath === '/resume' ? 'active' : ''}>Resume</Link></li>
            <li><Link to="/blog-posts" className={currentPath === '/blog-posts' ? 'active' : ''}>Blog</Link></li>
          </ul>
          <div className={`burger ${isMenuOpen ? 'toggle' : ''}`} onClick={toggleMenu}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
