import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import TestLogin from './test_login/test_login';
import PrivateRoute from './PrivateRoute'; 
import reportWebVitals from './reportWebVitals';
import MyInfo from './myinfo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<TestLogin />} />
        <Route path="/app" element={<PrivateRoute><App /></PrivateRoute>} />
        <Route path="/myinfo" element={<MyInfo />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
