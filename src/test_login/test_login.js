import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './test_login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('Submitting login:', {
            das_id: username,
            password: password,
        });

        const dummyUsername = 'admin';
        const dummyPassword = 'admin';

        if (username === dummyUsername && password === dummyPassword) {
            alert('Login successful!');
            sessionStorage.setItem('isLoggedIn', 'true');
            navigate('/app');
        } else {
            try {
                const response = await axios.post('http://localhost:5000/login', {
                    das_id: username,
                    password: password
                });

                console.log('Login response:', response.data);

                if (response.data.success) {
                    alert('Login successful!');
                    sessionStorage.setItem('isLoggedIn', 'true');
                    sessionStorage.setItem('das_id', username);
                    navigate('/app');
                } else {
                    alert('Invalid credentials! Please try again.');
                }
            } catch (error) {
                console.error('Login error:', error);
                alert('An error occurred. Please try again.');
            }
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
