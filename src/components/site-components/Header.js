import { useState } from 'react'
import { Link } from 'react-router-dom'
import { requestLogout } from '../requests/GeneralRequests'
import { NavBar } from  './NavBar'

export const Header = ({ token,setAuth }) => {

    const handleLogout = () => {
        requestLogout(token)
            .then(() => setAuth('', null))
            .catch(() => setAuth('', null))
    }

    return (
        <header>
            <div></div>
            <img className='logo' src={`${process.env.PUBLIC_URL}/iis-app-logo.png`} alt="Logo" />
            <Link
                className='button-login'
                onClick={handleLogout}
            >Log Out</Link>
            <NavBar />
        </header>
    )
}