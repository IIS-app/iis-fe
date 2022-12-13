import { Link } from 'react-router-dom';
import axios from 'axios';

export const NavBar = ({ setLogin, username, token }) => {



    return (
        <header className='header'>
            <h1 className='head'>Focus, Agent.</h1>
                <nav className='navigation'>
                    <div>
                        <Link className='button is-small' to="/">Home</Link>
                        <Link className='button is-small' to="/profile">Your Profile</Link>
                        <Link className='button is-small' to="/wins"> Wins!</Link>
                        <Link className='button is-small' to="/starrs">STARR stories</Link>
                        <Link className='button is-small' to="/targetcompanies">🎯 Companies</Link>
                        <Link className='button is-small' to="/targetjobs">🎯 Jobs</Link>
                        <Link className='button is-small' to="/resumes">Resume</Link>
                        <Link className='button is-small' to="/coverletters">Cover Letters</Link>
                    </div>
                </nav>
        </header>
    )
}