import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { requestResume } from '../requests/ResumeRequests';

export const Resumes = ({token}) => {
  const [resume, setResume] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = event => {
    setResume({
      ...resume,
      [event.target.name]: event.target.value
    });
  };

  const handleFileChange = event => {
    setResume({
      ...resume,
      resume_file: event.target.files[0]
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setError(null);
    setIsLoading(true);
    requestResume(token, {
      title: resume.title,
      job: resume.job,
      notes: resume.notes,
      resume_file: resume.resume_file
    })
      .then(() => {
        setResume({});
      })
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='title'>Title:</label>
      <input
        type='text'
        id='title'
        name='title'
        value={resume.title || ''}
        onChange={handleChange}
      />
      <br />
      <label htmlFor='job'>Job:</label>
      <input
        type='text'
        id='job'
        name='job'
        value={resume.job || ''}
        onChange={handleChange}
      />
      <br />
      <label htmlFor='notes'>Notes:</label>
      <textarea
        id='notes'
        name='notes'
        value={resume.notes || ''}
        onChange={handleChange}
      />
      <br />
      <label htmlFor='resume_file'>Resume file:</label>
      <input
        type='file'
        id='resume_file'
        name='resume_file'
        accept='application/pdf'
        onChange={handleFileChange}
      />
      <br />
      <button type='submit'>Save</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {isLoading && <p>Loading...</p>}
    </form>
  );
};
