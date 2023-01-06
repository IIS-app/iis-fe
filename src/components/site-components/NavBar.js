import { Link } from 'react-router-dom';
export const NavBar = ({ setLogin, username, token }) => {



    return (
        <>
            <div className='navigation'>
                    <Link className='link-button-nav' to="/">Home</Link>
                    <Link className='link-button-nav' to="/profile">Your Profile</Link>
                    <Link className='link-button-nav' to="/targetjobs">🎯 Jobs</Link>
                    <Link className='link-button-nav' to="/targetcompanies">🎯 Companies</Link>
                    <Link className='link-button-nav' to="/starrs">STARR stories</Link>
                    <Link className='link-button-nav' to="/questions">Questions</Link>
                    <Link className='link-button-nav' to="/wins"> Wins!</Link>
                    <Link className='link-button-nav' to="/resumes">Resume</Link>
                    <Link className='link-button-nav' to="/coverletters">Cover Letters</Link>
            </div>
        </>
    )
}