import { useState } from 'react'
import { Link } from 'react-router-dom'
import { requestLogout } from './Requests'

export const Header = ({ token,setAuth }) => {

    const handleLogout = () => {
        requestLogout(token)
            .then(() => setAuth('', null))
            .catch(() => setAuth('', null))
    }

    return (
        <header>
            <Link
                className='button-login'
                onClick={handleLogout}
            >Log Out</Link>
            
        </header>
    )
}