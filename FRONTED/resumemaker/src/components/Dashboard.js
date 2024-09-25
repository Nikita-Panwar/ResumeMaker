import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard({ onLogout }) {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li><Link to="/create-resume">Create Resume</Link></li>
          <li><Link to="/edit-resume">Edit Resume</Link></li>
          <li><Link to="/view-resume">View Resume</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Dashboard;
