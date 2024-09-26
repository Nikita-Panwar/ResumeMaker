import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function EditResume() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [summary, setSummary] = useState('');
  const [experience, setExperience] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if resume data exists (can be fetched from API or local storage)
    const storedResume = JSON.parse(localStorage.getItem('resumeData'));

    if (storedResume) {
      // Resume exists, load data into state
      setName(storedResume.name || '');
      setEmail(storedResume.email || '');
      setSummary(storedResume.summary || '');
      setExperience(storedResume.experience || '');
    } else {
      // No resume found, redirect to create resume page
      navigate('/create-resume');
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedResume = { name, email, summary, experience };
    
    // Save the updated resume data (you can use localStorage or send it to an API)
    localStorage.setItem('resumeData', JSON.stringify(updatedResume));

    // Redirect to the "View Resume" page with updated data
    navigate('/view-resume', { state: { resume: updatedResume } });
  };

  return (
    <div>
      <h2>Edit Resume</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        <textarea
          placeholder="Experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
        <button type="submit">Update Resume</button>
      </form>
    </div>
  );
}

export default EditResume;
