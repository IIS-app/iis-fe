import { useState, useEffect } from 'react';
import { requestListTargetJobs } from '../requests/JobRequests';
import { Link } from 'react-router-dom';
import { TJSnapshot } from './TJSnapshot'
import { Dossier } from '../dossier-components/Dossier';


export const TargetJobs = ({token}) => {
    const [jobs, setJobs] = useState([])
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setError(null);
        setIsLoading(true);
        requestListTargetJobs(token)
            .then((res => {setJobs(res.data)}))   
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    },[token])

    return (
    <>
        <div className='container-button'>
            <Link
                key="button-add"
                id='button-add'
                to="/targetjobs/add"
                className='button-add'
            >I found a new job!</Link>
        </div>
        {error && <div className="error">{error}</div>}
        <h2>List of Jobs</h2>
        <div className='container-main' style={{border: 'solid 3px', borderRadius:'10px', width:'75%', padding: '10px' }}>
            <div className='container-list'>
                <ul key="job-info" className="list">
                    {jobs ? jobs.map(job => (
                        <TJSnapshot key={job.pk} job={job}/>
                        )) : null}
                </ul>
            </div>
        </div>
    </>    
    )
}

