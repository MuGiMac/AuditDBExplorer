import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Header.css';
import logo from '../icons/logo1.png';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('isLoggedIn');
    //window.location.reload();
    navigate('/', { replace: true });
  };

  return (
    <header className="header">
      <a href='http://localhost:3000/app'>
        <img src={logo} alt="Logo" />
      </a>
      <nav>
        <ul className="nav-links">
          <li><a href="http://localhost:3000/app">Home</a></li>
          {/* <li><span className="nav-next" onClick={() => navigate('/results')}>Test_Results</span></li>*/}
          
          <li><span className="nav-next" onClick={() => navigate('/myinfo')}>My Info</span></li>
          <li><span className="nav-next" onClick={handleLogout}>Logout</span></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
