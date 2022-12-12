import axios from 'axios'
import { useState } from 'react'
import { Navigate } from 'react-router'
import { requestNewUser, requestLogin } from './Requests'

export const Register = ({setAuth}) => {
    const [username, setUsername] = useState ('')
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')
    const [error, setError] = useState (null)
    const [token, setToken] = useState ('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        setError(null)
        requestNewUser (username, email, password)
            .then((res) => (
                requestLogin(username, email, password)
            ))
            .then((res) => setAuth(email, res.data.auth_token),
                navigate("/home"))
            .catch((error) => {
                setError(error.message)
            })    
    }

    return (
        <div>
            <div className='register-box'>
                <h4>Please register below.</h4>
                {error && <div className="error">{error}</div>}
                <form className='form' id="registration-form" onSubmit= {handleSubmit}>
                    <div className='field'>
                        <label htmlFor='username' className="label">Create a Username</label>
                        <div className='control has-icons-left'>
                            <input
                                id='username'
                                onChange={(e) => setUsername(e.target.value)}
                                className='input is-success'
                                autoComplete='on'
                                type='text'
                                name='Username'
                                placeholder='Username'
                                value='bulma' />
                            <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                            </span>
                        </div>
                    </div>
                    <div className='field'>
                        <label htmlFor='email' className="label">Enter your email.</label>
                        <div className='control has-icons-left'>
                            <input
                                id='email'
                                onChange={(e) => setEmail(e.target.value)}
                                className='input'
                                autoComplete='off'
                                name='Email'
                                type='email'
                                placeholder='Email'
                                value='bulma' />
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div className='field'>
                        <label htmlFor='password' className="label">Add a Password</label>
                        <div className='control has-icons-left'>
                            <input
                                id='password'
                                onChange={(e) => setPassword(e.target.value)}
                                className='input'
                                autoComplete='off'
                                type='password'
                                placeholder='Password' />
                            <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                            </span>
                        </div>
                    </div>
                    <div className='field'>
                        <div className='control'>
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