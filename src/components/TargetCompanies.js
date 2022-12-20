import { Link } from 'react-router-dom'
import { TargetCompanyForm } from './TargetCompanyForm'

export const TargetCompanies = () => {

    return (
        <>
            <h1 className="TargetCompanies">🎯 Target Companies 🎯</h1>
              <nav>
                <Link className='button is-link' to="/targetcompany/add">Add a Target</Link>
              </nav>
        </>        
    )
}