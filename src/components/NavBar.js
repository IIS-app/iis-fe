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
                <nav className='navbar'>
                    <button><Link to="/login" onClick={() => setLogin(null)}>Log Out</Link></button>
                    <button><Link to="/"></Link>Home</button>
                    <button><Link to="/profile"></Link>Your Profile</button>
                    <button><Link to="/wins"></Link>Wins!</button>
                    <button><Link to="/starrs"></Link>STARR stories</button>
                    <button><Link to="/targetcompanies"><🎯 Companies/Link></button>
                    <button><Link to="/targetjobs"></Link>🎯 Jobs</button>
                    <button><Link to="/resumes"></Link>Resume</button>
                    <button><Link to="/coverletters"></Link>Cover Letters</button>
                    <button><Link to="/questions"></Link>Questions</button>
                </nav>
        </header>
    )
}