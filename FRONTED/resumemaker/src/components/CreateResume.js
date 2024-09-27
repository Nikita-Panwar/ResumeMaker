import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateResume() {
  const [resumeData, setResumeData] = useState({
    name: '',
    email: '',
    summary: '',
    experience: '',
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setResumeData({
      ...resumeData,
      [e.target.name]: e.target.value,
    });
  };




  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Store the resume data in localStorage
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
    navigate('/view-resume', { state: { resume: resumeData } });
  };

  return (
    <div>
      <h2>Create Resume</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={resumeData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={resumeData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="summary"
          placeholder="Summary"
          value={resumeData.summary}
          onChange={handleChange}
          required
        />
        <textarea
          name="experience"
          placeholder="Experience"
          value={resumeData.experience}
          onChange={handleChange}
          required
        />
        <button type="submit">Create Resume</button>
      </form>
    </div>
  );
}
export default CreateResume; 