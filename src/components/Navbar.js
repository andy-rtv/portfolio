import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/">ACCUEIL</Link></li>
        <li><Link to="/projects">PROJET</Link></li>
        <li><Link to="/about">À PROPOS</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
