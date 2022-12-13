import { Link } from 'react-router-dom';
import axios from 'axios';

export const NavBar = ({ setLogin, username, token }) => {

    const handleLogout = () => {
        axios.post('HTTPS/LOGOUTENDPT',
        { headers: { Authorization: `Token ${token}`,}, })
        .then(() => setLogin('', null))
        .catch(() => setLogin('', null))
    }

    return (
        <header className='header'>
            <h1 className='head'>Focus, Agent.</h1>
                <nav className='navigation'>
                    <div>
                        <Link className='button is-success is-small' to="/login" onClick={() => setLogin(null)}>Login</Link>
                        <Link className='button is-success is-small' to="/">Home</Link>
                        <Link className='button is-success is-small' to="/Profile">Your Profile</Link>
                        <Link className='button is-success is-small'to="/Wins">Wins!</Link>
                        <Link className='button is-success is-small'to="/Starrs">STARR stories</Link>
                        <Link className='button is-success is-small'to="/">Home</Link>
                        <Link className='button is-success is-small'to="/TargetCompanies">🎯 Companies</Link>
                        <Link className='button is-success is-small'to="/TargetJobs">🎯 Jobs</Link>
                        <Link className='button is-success is-small'to="/Resumes">Resume</Link>
                        <Link className='button is-success is-small'to="/CoverLetters">Cover Letters</Link>
                        <Link className='button is-success is-small'to="/MotivationalQuotes">Motivational Quotes</Link>
                        
                    </div>
                </nav>
        </header>
    )
}