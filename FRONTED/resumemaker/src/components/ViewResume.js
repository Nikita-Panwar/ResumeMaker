import React from 'react';
import { useLocation } from 'react-router-dom';
import './view.css'; // Import the CSS file for styling

function ViewResume() {
  const location = useLocation();
  const { resume } = location.state || {}; // Get the updated resume data from state

  if (!resume) {
    return <p>No resume data found. Please create or edit a resume.</p>;
  }

  return (
    <div className="view-resume-container">
      <h2 className="resume-title">View Resume</h2>
      <div className="resume-details">
        <p><strong>Name:</strong> {resume.name}</p>
        <p><strong>Email:</strong> {resume.email}</p>
        <p><strong>Summary:</strong> {resume.summary}</p>
        <p><strong>Experience:</strong> {resume.experience}</p>
      </div>
    </div>
  );
}

export default ViewResume;
