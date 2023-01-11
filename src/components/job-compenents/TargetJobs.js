import { useState, useEffect } from 'react';
import { requestListTargetJobs } from '../requests/JobRequests';
import { Link } from 'react-router-dom';
import { TJSnapshot } from './TJSnapshot'
import { Dossier } from '../dossier-components/Dossier';
import { TargetArrow } from '@styled-icons/fluentui-system-regular/TargetArrow'


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
        <div 
            className='container-button'
            style={{display: 'flex', justifyContent: 'space-evenly', alignItems:'center'}}
        >
            <h2 className='main-title'>List of Target Jobs</h2>
            <Link
                key="button-add"
                id='button-add'
                to="/targetjobs/add"
                className='button-add'
                style={{width:'100px'}}
                >Add<TargetArrow className='icon'/>Job</Link>
        </div>
        <div className='container-main' >
            <div className='container-list'>
                <ul key="job-info" className="list">
                    {jobs ? jobs.map(job => (
                        <TJSnapshot key={job.pk} job={job}/>
                        )) : null}
                </ul>
            </div>
        {error && <div className="error">{error}</div>}
        </div>
    </>    
    )
}

