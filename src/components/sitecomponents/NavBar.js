import { Link } from 'react-router-dom';
export const NavBar = ({ setLogin, username, token }) => {



    return (
        <>
        <header className='header'>
            <h1 className='head'>Focus, Agent.</h1>
            <img className='logo' src={`${process.env.PUBLIC_URL}/iis-logo.png`} alt="Logo" />
            <nav className='navigation'>
                <div>
                    <Link className='link-button-nav' to="/">Home</Link>
                    <Link className='link-button-nav' to="/profile">Your Profile</Link>
                    <Link className='link-button-nav' to="/wins"> Wins!</Link>
                    <Link className='link-button-nav' to="/starrs">STARR stories</Link>
                    <Link className='link-button-nav' to="/targetcompanies">🎯 Companies</Link>
                    <Link className='link-button-nav' to="/targetjobs">🎯 Jobs</Link>
                    <Link className='link-button-nav' to="/resumes">Resume</Link>
                    <Link className='link-button-nav' to="/coverletters">Cover Letters</Link>
                    <Link className='link-button-nav' to="/questions">Questions</Link>
                </div>
            </nav>
        </header>
        </>
    )
}