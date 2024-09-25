import React, { useState, useEffect } from 'react';

function ViewResume() {
  const [resume, setResume] = useState(null);

  // Load resume data on component mount
  useEffect(() => {
    // Fetch the resume data from API (or local storage)
    const fetchedResume = {
      name: 'John Doe',
      email: 'john@example.com',
      summary: 'Experienced software developer...',
      experience: '5 years at XYZ Corp.',
    };
    setResume(fetchedResume);
  }, []);

  if (!resume) {
    return <div>Loading resume...</div>;
  }

  return (
    <div>
      <h2>View Resume</h2>
      <p><strong>Name:</strong> {resume.name}</p>
      <p><strong>Email:</strong> {resume.email}</p>
      <p><strong>Summary:</strong> {resume.summary}</p>
      <p><strong>Experience:</strong> {resume.experience}</p>
    </div>
  );
}

export default ViewResume;
