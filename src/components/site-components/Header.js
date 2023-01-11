import { useState } from 'react'
import { Link } from 'react-router-dom'
import { requestLogout } from '../requests/GeneralRequests'
import { NavBar } from  './NavBar'
import styled from 'styled-components'
import { Zap } from '@styled-icons/octicons';
import { LogoutCircleR } from '@styled-icons/remix-fill/LogoutCircleR'
import { TargetArrow } from '@styled-icons/fluentui-system-regular/TargetArrow'
import { Stars } from '@styled-icons/bootstrap/Stars'
import { HappyBeaming } from '@styled-icons/boxicons-regular/HappyBeaming'
import { QuestionDiamondFill } from '@styled-icons/bootstrap/QuestionDiamondFill'
import { Documents } from '@styled-icons/ionicons-outline/Documents'

// const NewHeader = styled.div`
//     display: flex,
//     align-items: center,
//     justify-content: space-between,
//     padding: 16px,
//     background-color: white,
//     flex-wrap: nowrap,
//     flex-direction: column,
// `

export const Header = ({ token, setAuth }) => {

    const handleLogout = () => {
        requestLogout(token)
            .then(() => setAuth('', null))
            .catch(() => setAuth('', null))
    }

    return (
        <div className='new-header'>
            <div className='header-links-left'>
                <Link className='link-button-icon' to="/profile"><img className='icon' src={`${process.env.PUBLIC_URL}/agent-awesome.png`} alt="logo" /></Link>
                <Link className='link-button-nav' to="/targetjobs"><TargetArrow className='icon'/> Jobs</Link>
                <Link className='link-button-nav' to="/starrs"><Stars className='icon'/> Stories</Link>
                <Link className='link-button-nav' to="/targetcompanies"><TargetArrow className='icon' /> Companies</Link>
            </div>
            <Link className='logo-link' to="/">
                <img className='logo' src={`${process.env.PUBLIC_URL}/iis-app-logo.png`} alt="logo" />
            </Link>
            <div className='header-links-right'>
            <Link className='link-button-icon' onClick={handleLogout}>
                <LogoutCircleR className='icon' title="Log out" />
            </Link>
                <Link className='link-button-nav' to="/wins"> Wins! <HappyBeaming className='icon' /></Link>
                <Link className='link-button-nav' to="/questions">Questions <QuestionDiamondFill className='icon'/></Link>
                <Link className='link-button-nav clr' to="/coverletters-resumes"><div className='clr-text'><div>Cover Letters</div><div>& Resumes</div></div><Documents className="icon"/></Link>
            </div>
        </div>
    )
}