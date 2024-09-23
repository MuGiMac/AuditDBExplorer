import React from 'react';
import './CSS/Header.css';
import logo from '../icons/logo1.png';

const Header = () => {
  return (
    <header className="header">
      <a href='http://localhost:3000/'>
       <img src={logo} alt="Logo" />
      </a>
      <nav>
        <ul className="nav-links">
          <li><a href="http://localhost:3000/">Home</a></li>
          <li><a href="http://localhost:3000/">MyProfile</a></li>
          <li><a href="http://localhost:3000/">Logout</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
