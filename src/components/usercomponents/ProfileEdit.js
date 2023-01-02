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

    const handleSubmit = (e) => {
        e.preventDefault()
        setError(null)

        requestUpdateUserInfo(token, { pk }, id, first_name, last_name, codename, email, personal_pitch, linkedin, github, codepen, portfolio)
            .catch((error) => {
            setError(error.message)
        })
    }


    return (
        <div className="container-form">
        {error && <div className="error">{error}</div>}
            <h2>Edit your Profile.</h2>
            <form className="form-profile" id="form-profile" onSubmit={handleSubmit}>
            <div className='container-form' style={{border: 'solid', width:'88%', }}>
                    <legend>Celebrate You!</legend>
                    <label className='form-label' htmlFor="userFirstName">Who are you</label>
                    <div className='container-input'>
                        <input 
                            type="text"
                            id="userFirstName"
                            className='form-input-text'
                            autoFocus
                            autoComplete='off'
                            value={first_name}
                            maxLength={20}
                            onChange={(e) => setUserFirstName(e.target.first_name)}
                            />
                    </div>
                    <label className='form-label' htmlFor='userLastName'>What is your Bond name, Agent?</label>
                    <div className='container-input'>
                        <input 
                            className='text'
                            value={last_name}
                            onChange={(e) => setUserLastName(e.target.value)}
                            id='summary'
                            type='text'
                            autoComplete='off'
                            name='summary'
                        />
                    </div>
                    <label className='form-label' htmlFor='situation'>Describe the Situation. </label>
                    <div className='container-input'>
                        <textarea 
                            className='input-textarea'
                            value={situation}
                            onChange={(e) => setSituation(e.target.value)}
                            id='situation'
                            type='text'
                            autoComplete='off'
                            maxLength={1000}
                            name='situation'
                        />
                    </div>
                    <label className='form-label' htmlFor='task'>What is the task at hand?</label>
                    <div className='container-input'>
                        <input 
                            className='input-textarea'
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                            id='task'
                            type='text'
                            autoComplete='off'
                            name='task'
                        />
                    </div>
                    <label className='form-label' htmlFor='action'>What actions did you take?</label>
                    <div className='container-input'>
                        <input 
                            className='input-textarea'
                            value={action}
                            onChange={(e) => setAction(e.target.value)}
                            id='action'
                            type='text'
                            autoComplete='off'
                            name='action'
                        />
                    </div>
                    <label className='form-label' htmlFor='result'>What was the result of your actions?</label>
                    <div className='container-input'>
                        <input 
                            className='input-textarea'                  value={result}
                            onChange={(e) => setResult(e.target.value)}
                            id='result'
                            type='text'
                            autoComplete='off'
                            name='result'
                        />
                    </div>
                    <label className='form-label' htmlFor='reflection'>What, upon reflection, did you learn from this?</label>
                    <div className='container-input'>
                        <input 
                            className='input-textarea'
                            value={reflection}
                            onChange={(e) => setReflection(e.target.value)}
                            id='reflection'
                            type='text'
                            autoComplete='off'
                            name='reflection'
                        />
                    </div>
                </div> 
                <div className='container-input'>
                    <label htmlFor='submit' className='form-label'></label>
                    <input
                        id='submit'
                        to="/starss"
                        className='button-submit'
                        type='submit'
                        value='Save My Work!'
                    />
                </div>
    
            </form>
        </div>


    )    
}


