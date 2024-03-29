import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { requestUserInfo } from '../requests/GeneralRequests';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.bubble.css'
 

export const ProfileView = ({ token }) => {
    const [userId, setUserId] = useState('');
    const [userFirstName, setUserFirstName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [codename, setCodename] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [personalNotes, setPersonalNotes] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [ github, setGithub] = useState('');
    const [ codePen, setCodePen] = useState('');
    const [ portfolio, setPortfolio] = useState('');
    const [error, setError] = useState(null)


    useEffect(() => {
        setError(null)
        requestUserInfo(token)
        .then(res => {
                setUserId(res.id)
                setUserFirstName(res.data.first_name);
                setUserLastName(res.data.last_name);
                setCodename(res.data.codename);
                setUserEmail(res.data.email);
                setPersonalNotes(res.data.personal_pitch);
                setLinkedin(res.data.linkedin);
                setGithub(res.data.github);
                setCodePen(res.data.codepen);
                setPortfolio(res.data.portfolio);
            })
            .catch(error => setError(error.message))
            },[token])

        const modules = {
            toolbar: [
                [{ 'header': [1, 2, 3, false] }],
                [{ 'bold': true }, { 'italic': true }, { 'underline': true }, { 'strike': true }],
                [{ list:  "ordered" }, { list:  "bullet" }],
                ["blockquote", "code-block"],
            ]
        }
    
        

    return (
        <div className='container-profile'>
        {error && <div className="error">{ error }</div>}

            <h2 className='main-title'>The facts.</h2>
            <div key={userId}>
                <p className="form-label-data">{`First Name: ${userFirstName}`}</p>
                <p className="form-label-data">{`Last Name: ${userLastName}`}</p>
                <p className="form-label-data">{`Codename: ${codename}`}</p>
                <p className="form-label-data">{`Email: ${userEmail}`}</p>
                <p className="form-label-data">{`LinkedIn: ${linkedin}`}</p>
                <p className="form-label-data">{`Github: ${github}`}</p>          
                <p className="form-label-data">Personal Notes:</p>
                <ReactQuill
                    modules={modules}
                    theme="snow"
                    readOnly={true}
                    className='custom-quill'
                    id='personalNotes'
                    style={{height: 'auto', minHeight: '200px', maxWidth: '300px'}}
                    name='personalNotes'
                    maxLength={2000}
                    onChange={(value) => setPersonalNotes(value)}              
                />
            </div> 
                <Link
                    to={`/profile/edit/`}
                    >
                    <button className='button-edit'>Edit</button>
                </Link>               
        </div>
    )
};
