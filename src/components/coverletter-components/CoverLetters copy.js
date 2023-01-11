import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { requestCoverLetter } from '../requests/CoverLetterRequests';
import { Resumes } from './Resumes';
import { Accordion } from '../dossier-components/Accordion';

export const CoverLetters = ({ token }) => {
    const [coverLetters, setCoverLetters] = useState({});
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = event => {
        setCoverLetters({
            ...coverLetters,
            [event.target.name]: event.target.value
        });
    };

    const handleFileChange = event => {
        setCoverLetters({
            ...coverLetters,
            cover_letter_file: event.target.files[0]
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        setError(null);
        setIsLoading(true);
        requestCoverLetter(token, {
            title: coverLetters.title,
            job: coverLetters.job,
            notes: coverLetters.notes,
            resume_file: coverLetters.resume_file
        })
            .then(() => {
                setCoverLetters({});
            })
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false));
    };


    return (
        <Accordion
            key='cover-letter-upload'
            title={
                <div>
                <h2 className='main-title'>Upload Cover Letter</h2>
                <input className='button-submit' type='submit' style={{ marginBottom: '20px' }}>Save Cover Letter</input>
                </div>
                }
            content={
            <form onSubmit={handleSubmit}>
                <label htmlFor='title'>Title:</label>
                <input
                    type='text'
                    id='title'
                    name='title'
                    value={coverLetters.title || ''}
                    onChange={handleChange}
                />
                <label htmlFor='notes'>Notes:</label>
                <textarea
                    id='notes'
                    name='notes'
                    value={coverLetters.notes || ''}
                    onChange={handleChange}
                />
                <label htmlFor='cover_letter_file'>Cover Letters file:</label>
                <input
                    type='file'
                    className='custom-upload'
                    id='cover_letter_file'
                    name='cover_letter_file'
                    accept='application/pdf'
                    onChange={handleFileChange}
                    style={{
                        width: '400px',
                        height: '40px',
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'inline-block',
                        border: '1px solid #ccc',
                        borderRadius: '10px',
                        marginBottom: '20px'
                    }}
                />
                <input className='button-submit' type='submit' style={{ marginBottom: '20px' }}>Save</>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {isLoading && <p>Loading...</p>}
            </form>}
    )