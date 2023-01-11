import { useEffect, useState } from "react";
import { requestUpdateUserInfo, requestUserInfo } from "../requests/GeneralRequests";
import { Link, useParams } from "react-router-dom";
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.bubble.css'

export const ProfileEdit = ({token}) => {
    const {pk} = useParams()
    const [userId, setUserId] = useState('');
    const [userFirstName, setUserFirstName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [codename, setCodename] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [personalNotes, setPersonalNotes] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [ github, setGithub] = useState('');
    const [ codepen, setCodePen] = useState('');
    const [ portfolio, setPortfolio] = useState('');
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setError(null)
        setIsLoading(true)
        requestUserInfo(token, {pk})
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
            .finally(() => setIsLoading(false))
    },[token, pk]);

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            [{ 'bold': true }, { 'italic': true }, { 'underline': true }, { 'strike': true }],
            [{ list:  "ordered" }, { list:  "bullet" }],
            ["blockquote", "code-block"],
        ]
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setError(null)

        requestUpdateUserInfo(token, { pk }, userId, userFirstName, userLastName, codename, userEmail, personalNotes, linkedin, github, codepen, portfolio)
            .catch((error) => {
            setError(error.message)
        })
    }


    return (
        <div className="container-form">
        {error && <div className="error">{error}</div>}
            <h2>Edit your Profile.</h2>
            <form className="form-profile" id="form-profile" onSubmit={handleSubmit}>
            <div className='container-form' >
                    <label className='form-label' htmlFor="userFirstName">First Name</label>
                    <div className='container-input'>
                        <input 
                            type="text"
                            id="userFirstName"
                            className='form-input-text'
                            autoFocus
                            autoComplete='off'
                            value={userFirstName}
                            maxLength={20}
                            onChange={(e) => setUserFirstName(e.target.value)}
                            />
                    </div>
                    <label className='form-label' htmlFor='userLastName'>Your last name, Agent.</label>
                    <div className='container-input'>
                        <input 
                            className='text'
                            value={userLastName}
                            onChange={(e) => setUserLastName(e.target.value)}
                            id='userLastName'
                            type='text'
                            autoComplete='off'
                            name='userLastName'
                        />
                    </div>
                    <label className='form-label' htmlFor='codename'>Choose your Codename, Agent. </label>
                    <div className='container-input'>
                        <textarea 
                            className='input-textarea'
                            value={codename}
                            onChange={(e) => setCodename(e.target.value)}
                            id='codename'
                            type='text'
                            autoComplete='off'
                            maxLength={1000}
                            name='codename'
                        />
                    </div>
                    <label className='form-label' htmlFor='userEmail'>Email</label>
                    <div className='container-input'>
                        <input 
                            className='input-textarea'
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                            id='task'
                            type='text'
                            autoComplete='off'
                            name='task'
                        />
                    </div>
                    <label className='form-label' htmlFor='personalNotes'>Pitches</label>
                    <div className='container-input'>
                        <ReactQuill 
                            className='custom-quill'
                            value={personalNotes}
                            onChange={(e) => setPersonalNotes(e.target.value)}
                            id='personalNotes'
                            maxLength={2000}
                            style={{height: 'auto', minHeight: '200px'}}
                            theme="snow"
                            name='personalNotes'
                            modules={modules}
                        />
                    </div>
                    <label className='form-label' htmlFor='linkedin'>LinkedIn Profile link</label>
                    <div className='container-input'>
                        <input 
                            className='form-input-url'                  
                            value={linkedin}
                            onChange={(e) => setLinkedin(e.target.value)}
                            id='linkedin'
                            pattern="https://.*"
                            type='url'
                            autoComplete='off'
                            name='linkedin'
                        />
                    </div>
                    <label className='form-label' htmlFor='github'>Github link</label>
                    <div className='container-input'>
                        <input 
                            className='form-input-url'
                            value={github}
                            onChange={(e) => setGithub(e.target.value)}
                            id='github'
                            type='url'
                            autoComplete='off'
                            name='github'
                        />
                    </div>
                    <label className='form-label' htmlFor='codepen'>Codepen link</label>
                    <div className='container-input'>
                        <input 
                            className='form-input-url'
                            value={codepen}
                            onChange={(e) => setCodePen(e.target.value)}
                            id='codepen'
                            type='url'
                            autoComplete='off'
                            name='codepen'
                        />
                    </div>
                </div> 
                <div className='container-input'>
                    <label htmlFor='submit' className='form-label'></label>
                    <input
                        id='submit'
                        to="/profile"
                        className='button-submit'
                        type='submit'
                        value='Save My Work!'
                    />
                </div>
    
            </form>
        </div>


    )    
}


