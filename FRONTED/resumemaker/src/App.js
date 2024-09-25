import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Dashboard from './components/Dashboard';
import CreateResume from './components/CreateResume';
import EditResume from './components/EditResume';
import ViewResume from './components/ViewResume';
import Logout from './components/Logout';
import { isAuthenticated } from './utils/auth';
import './App.css';


function App() {
  const [authenticated, setAuthenticated] = useState(isAuthenticated());

  const handleLogin = () => {
    setAuthenticated(true);
  };

  const handleLogout = () => {
    setAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={authenticated ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />} 
        />
        <Route path="/signup" element={<Signup />} />
        <Route 
          path="/dashboard" 
          element={authenticated ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/" />} 
        />
        <Route path="/create-resume" element={<CreateResume />} />
        <Route path="/edit-resume" element={<EditResume />} />
        <Route path="/view-resume" element={<ViewResume />} />
        <Route 
          path="/logout" 
          element={<Logout onLogout={handleLogout} />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
