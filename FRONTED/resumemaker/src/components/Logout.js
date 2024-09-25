import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../utils/auth';

function Logout({ onLogout }) {
  const navigate = useNavigate(); // Correct the useNavigate hook

  useEffect(() => {
    logout(); // Clear the authentication
    onLogout(); // Inform parent component
    navigate('/'); // Redirect to the login page (use navigate directly)
  }, [navigate, onLogout]); // Use navigate instead of history

  return <div>Logging out...</div>;
}

export default Logout;
