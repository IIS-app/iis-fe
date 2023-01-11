import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { requestTJDetail } from '../requests/JobRequests';
import { Dossier } from '../dossier-components/Dossier'
import { FolderPlus } from '@styled-icons/bootstrap/FolderPlus'
import { HappyBeaming } from '@styled-icons/boxicons-regular/HappyBeaming'



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
        requestTJDetail(token, { pk })
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
        <div 
            className='container-button'
            style={{display: 'flex', justifyContent: 'space-evenly'}}
        >
            <h2 className='main-title'>Review the Details of Your Job</h2>
            <button className='button-add' style={{fontFamily:'monospace'}}>Create
                    <FolderPlus className='icon'style={{width:'100px'}}/>
                    Dossier</button>
            <button className='button-add' style={{fontFamily:'monospace'}}>Generate My
                    <HappyBeaming className='icon'style={{width:'100px', fontFamily:'monospace'}}/>
                    Dossier</button>
        </div>
            <ul className='details-job' key={pk}>
                <p className="form-label-data" key={`{pk}.title`}>{`Job Title: ${jobTitle}`}</p>
                <p className="form-label-data" key={`{pk}.date`}>{`Date Added: ${jobAddedDate}`}</p>
                <p className="form-label-data" key={`{pk}.targetco`}>{`Company Name: ${jobTitle}`}</p>
                <p className="form-label-data" key={`{pk}.note`}>{`Company Name: ${jobNotes}`}</p>
                <Link
                    to={`/targetjobs/edit/${pk}`}
                    id='job-list-edit'
                    className='button-edit'
                    >
                    Edit Job Detail
                </Link>
            </ul>
        </div>
        
        <Dossier token={token} />

                    {error && <div className='error'>{error}</div>}
        </>
    )
}