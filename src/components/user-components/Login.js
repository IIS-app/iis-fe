import { useState } from 'react'
import { Register } from './Register'
import { Link, useNavigate } from 'react-router-dom'
import { requestLogin } from '../requests/GeneralRequests'
import { requestUserInfo } from '../requests/GeneralRequests'


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
        <div className='container-first'>
            {error && <div className="error">{error}</div>}
            {register===false ? (
            <>
            <img className="logo" src={`${process.env.PUBLIC_URL}/iis-app-logo.png`} alt="Logo" />
            <div className='container-login'>

                <h3>Please log in below.</h3>

                <form id="form-login" onSubmit={handleSubmit}>
                    <div className='container-input'>
                        <label htmlFor='email' className="form-label">email</label>
                        <input
                            id='email'
                            onChange={(e) => setEmail(e.target.value)}
                            className='form-input-text'
                            autoComplete='on'
                            autoFocus
                            type='text'
                            name='My Username'
                        />
                    </div>
                    <div className='container-input'>
                        <label htmlFor='my-password' className="form-label">password</label>
                        <input
                            id='my-password'
                            onChange={(e) => setPassword(e.target.value)}
                            className='form-input-text'
                            autoComplete='off'
                            type='password'
                        />
                    </div>
                    <div className='container-input'>
                        <button
                            className='button-login'
                        >Login</button>
                    </div>
                    <div id="register">
                    <h3 className='link-register'>New Agent? Please...
                                <Link 
                                className='link-inline' 
                                id='link-register'
                                to="/register" 
                                onClick={(e)=> setRegister(!register)}
                                ><em>register.</em></Link></h3>
                    </div>
                </form>
            </div>
            </>
            ) : (
                <Register />
            )}
        </div>
    )
}
