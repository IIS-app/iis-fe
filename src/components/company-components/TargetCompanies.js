import { useState, useEffect } from 'react';
import { requestListTargetCompanies } from '../requests/CompanyRequests';
import { Link } from 'react-router-dom';
import { TCSnapshot } from './TCSnapshot'
import { Header } from '../site-components/Header'


export const TargetCompanies = ({token}) => {
    const [companies, setCompanies] = useState([])
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setError(null);
        setIsLoading(true);
        requestListTargetCompanies(token)
            .then((res => {setCompanies(res.data)}))   
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    },[token])

    return (
    <>
    {error && <div className="error">{error}</div>}
        <div className='container-button'>
            <h2 className='main-title'>Target Companies</h2>
            <Link
                key="button-add"
                id='button-add'
                to="/targetcompany/add"
                className='button-add'
            >Add a New Company</Link>
        </div>
    <div className='container-main' >
        <div className='container-list'>
            <ul key="tc-info" className="list">
                {companies ? companies.map(company => (
                    <TCSnapshot key={company.pk} company={company}/>
                    )) : null}
            </ul>

        </div>
    </div>
    </>       
    )
}

