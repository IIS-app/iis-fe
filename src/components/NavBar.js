import { Link } from 'react-router-dom';
import axios from 'axios';

export const NavBar = ({ setLogin, username, token }) => {

    const handleLogout = () => {
        axios.post(HTTPS/LOGOUTENDPT,
        { headers: { Authorization: `Token ${token}`,}, })
        .then(() => setLogin('', null))
        .catch(() => setLogin('', null))
    }

    return (
        <header className='header'>
            <h1 className='head'>Focus, Agent.</h1>
                <nav className='navigation'>
                    <button className='button'><Link to="/login" onClick={() => setLogin(null)}></Link>Login</button>
                    <button className='button'><Link to="/"></Link>Home</button>
                    <button className='button'><Link to="/profile"></Link>Your Profile</button>
                    <button className='button'><Link to="/wins"></Link>Wins!</button>
                    <button className='button'><Link to="/starrs"></Link>STARR stories</button>
                    <button className='button'><Link to="/targetcompanies"><🎯 Companies/Link></button>
                    <button className='button'><Link to="/targetjobs"></Link>🎯 Jobs</button>
                    <button className='button'><Link to="/resumes"></Link>Resume</button>
                    <button className='button'><Link to="/coverletters"></Link>Cover Letters</button>
                    <button className='button'><Link to="/questions"></Link>Questions</button>
                </nav>
        </header>
    )
}