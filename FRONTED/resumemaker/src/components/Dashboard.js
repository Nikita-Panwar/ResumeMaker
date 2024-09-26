import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';  // Import the CSS file for styling

function Dashboard({ onLogout }) {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Welcome to Your Dashboard</h2>
      <nav className="dashboard-nav">
        <ul className="dashboard-menu">
          <li><Link to="/create-resume" className="dashboard-link">Create Resume</Link></li>
          <li><Link to="/edit-resume" className="dashboard-link">Edit Resume</Link></li>
          <li><Link to="/view-resume" className="dashboard-link">View Resume</Link></li>
          <li><Link to="/logout" className="dashboard-link logout-link">Logout</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Dashboard;
