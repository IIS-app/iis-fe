import axios from 'axios'
import { useState } from 'react'
import { Register } from './Register'
import { Link, useNavigate } from 'react-router-dom'
import { requestLogin } from './Requests'

export const Login = ({ setAuth, isLoggedIn }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [register, setRegister] = useState(false)
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        setError(null)
        requestLogin(email, password)
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
            {register===false ? (
            <div className='login-box'>
                <h3>Please log in below.</h3>
                {error && <div className="error">{error}</div>}
                <form id="form-login" onSubmit={handleSubmit}>
                    <div className='field'>
                        <label htmlFor='email' className="label">Email</label>
                        <input
                            id='email'
                            onChange={(e) => setEmail(e.target.value)}
                            className='input'
                            autoComplete='on'
                            autoFocus
                            type='text'
                            name='My Username'
                            placeholder='My Username' />
                    </div>
                    <div className='field'>
                        <label htmlFor='my-password' className="label">Password</label>
                        <input
                            id='my-password'
                            onChange={(e) => setPassword(e.target.value)}
                            className='input'
                            autoComplete='off'
                            type='password'
                            placeholder='My Password' />
                    </div>
                    <div className='control'>
                        <button
                            className='button'
                        >Login</button>
                    </div>
                    <div id="register">
                    <h3>Or if you are first time visitor, please
                                <Link to="/register" onClick={()=> setRegister(!register)}> register.</Link></h3>
                    </div>
                </form>
            </div>
            ) : (
                <Register />
            )}
        </div>
    )
}
