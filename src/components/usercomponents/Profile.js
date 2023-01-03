import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { requestUserInfo } from '../requests/GeneralRequests';
import { ProfileView } from './ProfileView'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.bubble.css'
 

export const Profile = ({ token }) => {
    const [userId, setUserId] = useState('');
    const [userFirstName, setUserFirstName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [codename, setCodename] = useState('');
    const [userEmail, setUserEmail] = useState('');
    // const [password, setPassword] = useState('');
    const [personalNotes, setPersonalNotes] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [ github, setGithub] = useState('');
    const [ codePen, setCodePen] = useState('');
    const [ portfolio, setPortfolio] = useState('');
    const [error, setError] = useState(null)
        

    return (
        <div className='container-profile'>
        {error && <div className="error">{ error }</div>}

            <h2>The facts.</h2>
            <ProfileView token={token}/>
        </div>
    )
};
