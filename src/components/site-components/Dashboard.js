import { Link } from 'react-router-dom'
import styled from 'styled-components'



export const Dashboard = ({setAuth}) => {


    return (
    <div className='dashboard'>
        <Link className='dash-profile' to="/profile"></Link>
        <Link className='dash-starr' to="/starrs"></Link>
        <Link className='dash-company' to="/targetcompanies"></Link>
        <Link className='dash-jobs' to="/targetjobs"></Link>
        <div className='agent-awesome' style={{width:'200px'}}></div>
        <Link className='dash-dossier' to="/"></Link>
        <Link className='dash-letter' to="/coverletters-resumes"></Link>
        <Link className='dash-question' to="/questions"></Link>
        <Link className='dash-win' to="/wins"></Link>
    </div>
    )
}
