import { useState } from 'react'
import { Link } from 'react-router-dom'
import { requestLogout } from '../requests/GeneralRequests'
import { NavBar } from  './NavBar'
import styled from 'styled-components'

// const NewHeader = styled.div`
//     display: flex,
//     align-items: center,
//     justify-content: space-between,
//     padding: 16px,
//     background-color: white,
//     flex-wrap: nowrap,
//     flex-direction: column,
// `

export const Header = ({ token,setAuth }) => {

    const handleLogout = () => {
        requestLogout(token)
            .then(() => setAuth('', null))
            .catch(() => setAuth('', null))
    }

    return (
        <div className='new-header'>
            <div className='header-links-left'>
                <Link className='link-button-nav' to="/targetjobs">🎯 Jobs</Link>
                <Link className='link-button-nav' to="/targetcompanies">🎯 Companies</Link>
                <Link className='link-button-nav' to="/coverletters">Cover Letters</Link>
            </div>
            <Link className='logo-link' to="/">
                <img className='logo' src={`${process.env.PUBLIC_URL}/iis-app-logo.png`} alt="logo" />
            </Link>
            <div className='header-links-right'>
                <Link className='link-button-nav' to="/targetcompanies">🎯 Companies</Link>
                <Link className='link-button-nav' to="/starrs">STARR stories</Link>
                <Link className='link-button-nav' to="/questions">Questions</Link>
            </div>
            <Link
                className='button-login'
                onClick={handleLogout}
            >Log Out</Link>
        </div>
    )
}