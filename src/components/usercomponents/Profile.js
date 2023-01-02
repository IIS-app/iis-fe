import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { requestUserInfo } from '../requests/GeneralRequests';

export const Profile = ({ token }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [codename, setCodename] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [personalPitch, setPersonalPitch] = useState([]);
    const [linkedin, setLinkedin] = useState('');
    const [ github, setGithub] = useState('');
  

    useEffect(() => {
    requestUserInfo(token).then(response => {
      const { first_name, last_name, codename, email, password, personal_pitch, linkedin, github } = response.data;
      setFirstName(first_name);
      setLastName(last_name);
      setCodename(codename);
      setEmail(email);
      setPassword(password);
      setPersonalPitch(personal_pitch);
      setLinkedin(linkedin);
      setGithub(github);
      
    });
    }, []);

    return (
        <div className='container-profile'>
            <h2>The facts.</h2>
            <div>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Codename: {codename}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Personal Pitches:</p>
            <ul>
                {personalPitch.map(pitch => (
                <li key={pitch}>{pitch}</li>
                ))}
            </ul>
                <p>LinkedIn: {linkedin}</p>
                <p>Github: {github}</p>          
            </div>
            
        </div>
    )
};
