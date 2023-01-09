import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { requestTargetJobDetail } from '../requests/JobRequests';
import { Dossier } from '../dossier-components/Dossier'


// MAIN FUNCTION EXPORT
export const TJDetail = ({ token }) => {
    const { pk } = useParams()
    const [jobTitle, setJobTitle] = useState('')
    const [jobCompany, setJobCompany] = useState('')
    const [jobNotes, setJobNotes] = useState('')
    const [jobAddedDate, setJobAddedDate] = useState('')
    const [jobDetail, setJobDetail] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        setError(null)
        setIsLoading(true)
        requestTargetJobDetail(token, { pk })
            .then(res => {
                setJobDetail(res.data)
                setJobTitle(res.data.title)
                setJobCompany(res.data.company)
                setJobNotes(res.data.notes)
                setJobAddedDate(res.data.created_date)
            })
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    },[token, pk]);


    return (
        <>
        <div className='container-list'>
            {error && <div className='error'>{error}</div>}
            <h2>Review the Details of Your Job</h2>
            <ul className='details-job' key={pk}>
                <li key={`{pk}.title`}>{jobTitle}</li>
                <li key={`{pk}.date`}>{jobAddedDate}</li>
                <li key={`{pk}.company`}>{jobCompany}</li>
                <li key={`{pk}.note`}>{jobNotes}</li>
                <Link
                    to={`/target-jobs/edit/${pk}`}
                    id='job-list-edit'
                    className='button-edit'
                >
                    Edit Job Detail
                </Link>
            </ul>
        </div>
        <Dossier token={token} />

        </>
    )
}