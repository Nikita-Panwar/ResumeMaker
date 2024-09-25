import React, { useState, useEffect } from 'react';

function EditResume() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [summary, setSummary] = useState('');
  const [experience, setExperience] = useState('');

  // Load existing resume data on component mount (you can fetch this data)
  useEffect(() => {
    // For demonstration purposes, assume these values are fetched from API
    setName('John Doe');
    setEmail('john@example.com');
    setSummary('Experienced software developer...');
    setExperience('5 years at XYZ Corp.');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle editing resume logic here
    console.log('Resume Updated', { name, email, summary, experience });
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
