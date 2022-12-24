import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { requestNewUser, requestLogin } from './Requests'

export const Register = ({setAuth}) => {
    const [codename, setCodename] = useState ('')
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')
    const [firstName, setFirstName] = useState ('')
    const [lastName, setLastName] = useState ('')
    const [error, setError] = useState (null)
    const [token, setToken] = useState ('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        setError(null)
        requestNewUser (email, password, firstName, lastName, codename)
            .then((res) => (
                requestLogin(email, password)
            ))
            .then((res) => {
                const token = res.data.auth_token
                setAuth(email, token)
                navigate("/home")
            })
            .catch((error) => {
                setError(error.message)
            })    
    }

    return (
        <div>
            <div className='container-register'>
                <h1 className=''>Please register below.</h1>
                {error && <div className="error">{error}</div>}
                <form className='form-register' id="form-register" onSubmit= {handleSubmit}>
                <div className='container-input'>
                        <label htmlFor='firstName' className="form-label">Agent's First Name</label>
                        <div className='container-input has-icons-left'>
                            <input
                                id='firstName'
                                onChange={(e) => setFirstName(e.target.value)}
                                className='form-input-text'
                                autoComplete='on'
                                type='text'
                                name='firstName'
                                placeholder="Agent's First Name" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-user"></i>
                            </span>
                        </div>
                    </div>
                    <div className='container-input'>
                        <label htmlFor='lastName' className="form-label">Agent's Last Name</label>
                        <div className='container-input has-icons-left'>
                            <input
                                id='lastName'
                                onChange={(e) => setLastName(e.target.value)}
                                className='form-input-text'
                                autoComplete='on'
                                type='text'
                                name='lastName'
                                placeholder="Agent's Last Name" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-user"></i>
                            </span>
                        </div>
                    </div>
                    <div className='container-input'>
                        <label htmlFor='email' className="form-label">Agent's Primary Digital Contact</label>
                        <div className='container-input has-icons-left'>
                            <input
                                id='email'
                                onChange={(e) => setEmail(e.target.value)}
                                className='form-input-text'
                                autoComplete='off'
                                name='Email'
                                type='email'
                                placeholder='Email' />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div className='container-input'>
                        <label htmlFor='password' className="form-label">Agent's Secured Entry Algorithm</label>
                        <div className='container-input has-icons-left'>
                            <input
                                id='password'
                                onChange={(e) => setPassword(e.target.value)}
                                className='form-input-text'
                                autoComplete='off'
                                type='password'
                                placeholder='Password' />
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                            </span>
                        </div>
                    </div>
                    <div className='container-input'>
                        <label htmlFor='codename' className="form-label">Agent Codename</label>
                        <div className='container-input has-icons-left'>
                            <input
                                id='codename'
                                onChange={(e) => setCodename(e.target.value)}
                                className='form-input-text'
                                autoComplete='on'
                                type='text'
                                name='codename'
                                placeholder='Agent Codename' />
                            <span className="icon is-small is-left">
                                <i className="fas fa-user"></i>
                            </span>
                        </div>
                    </div>
                    <div className='container-input'>
                        <div className='container-input'>
                            <button
                                className='button is-primary'
                            >Register</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )

}