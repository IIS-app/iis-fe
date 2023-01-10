import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { requestCoverLetter } from '../requests/CoverLetterRequests';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.bubble.css'

export const CoverLetters = ({token}) => {
    const [coverLetters, setCoverLetters] = useState({});
	const [title, setTitle] = useState('')
	const [job, setJob] = useState('')
	const [summary, setSummary] = useState('')
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

	const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            [{ 'bold': true }, { 'italic': true }, { 'underline': true }, { 'strike': true }],
            [{ list:  "ordered" }, { list:  "bullet" }],
            ["blockquote", "code-block"],
            ["clean", "undo", "redo"],
        ],
        history: {
            delay: 2000,
            maxStack: 500,
            userOnly: false}
    }

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
        <><div className='container-form'
			{...error && <div className='error'>{error}</div>} /><h2>Cover Letters</h2><form className='cover-letter' id='cover-letter' onSubmit={handleSubmit}>
				<label className='form-label' htmlFor='title'>Title</label>
				<div className='container-input'>
					<ReactQuill
						autoFocus
						autoComplete='off'
						className='custom-quill'
						id='title'
						maxLength={200}
						modules={modules}
						name='title'
						onChange={(value) => setTitle(value)}
						required
						theme="bubble" />
				</div>
				<label className='form-label' htmlFor='job'>To what Job</label>
                    <div className='container-input'>
                        <ReactQuill 
                            autoComplete='off'
                            className='custom-quill'
                            id='job'
                            maxLength={200}
                            modules={modules}
                            name='job'
                            onChange={(value) => setJob(value)}
                            theme="bubble"
                            />
                    </div>
					<label className='form-label' htmlFor='Summary'>Summarize your Letter</label>
                    <div className='container-input'>
                        <ReactQuill 
                            autoComplete='off'
                            className='custom-quill'
                            id='summary'
                            maxLength={2000}
                            modules={modules}
                            name='summary'
                            onChange={(value) => setSummary(value)}
                            theme="bubble"
                            />
                    </div>
				<label htmlFor='cover_letter_file'>Upload your Cover Letter Here:</label>
				<input
					type='file'
					id='cover_letter_file'
					name='cover_letter_file'
					accept='application/pdf'
					onChange={handleFileChange} />
				<br />
				<button type='submit'>Save</button>
				{error && <p style={{ color: 'red' }}>{error}</p>}
				{isLoading && <p>Loading...</p>}
			</form></>
    );
};
