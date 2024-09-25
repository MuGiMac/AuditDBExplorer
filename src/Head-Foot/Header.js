import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Header.css';
import logo from '../icons/logo1.png';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('isLoggedIn');
    window.location.reload();
    navigate('/');
  };

  return (
    <header className="header">
      <a href='http://localhost:3000/'>
        <img src={logo} alt="Logo" />
      </a>
      <nav>
        <ul className="nav-links">
          <li><a href="http://localhost:3000/">Home</a></li>
          <li><a href="http://localhost:3000/">My Info</a></li>
          <li><span className="logout" onClick={handleLogout}>Logout</span></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
