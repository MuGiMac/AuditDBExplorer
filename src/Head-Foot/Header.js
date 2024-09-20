import React from 'react';
import './CSS/Header.css';
import logo from '../icons/logo.png';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" />
      <nav>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
