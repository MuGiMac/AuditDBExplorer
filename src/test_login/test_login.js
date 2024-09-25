import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './test_login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "mugi" && password === "1234") {
      alert('Login successful!');
      sessionStorage.setItem('isLoggedIn', 'true');
      navigate('/app');
    } else {
      alert('Invalid !! Please try with "mugi", "1234".');
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className="login-container">
      <h2>Test Login Page</h2><br/>
      <form onSubmit={handleSubmit}>
        <div className='contain1'>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
