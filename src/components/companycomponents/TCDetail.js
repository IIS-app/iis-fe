import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { requestTargetCompanyDetail} from '../requests/CompanyRequests'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.bubble.css'


export const TCDetail = ({ token }) => {
    const { pk } = useParams()
    const [companyRank, setCompanyRank] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [companyUrl, setCompanyUrl] = useState('')
    const [companyJobsUrl, setCompanyJobsUrl] = useState('')
    const [companyNotes, setCompanyNotes] = useState('')
    const [createdAt, setCreated] = useState('')
    const [updatedAt, setUpdated] = useState('')
    const [companyDetail, setCompanyDetail] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        setError(null)
        setIsLoading(true)
        requestTargetCompanyDetail(token, { pk })
            .then(res => {
                setCompanyDetail(res.data)
                setCompanyRank(res.data.rank)
                setCompanyName(res.data.company_name)
                setCompanyUrl(res.data.website)
                setCompanyJobsUrl(res.data.jobs_page)
                setCompanyNotes(res.data.comments)
            })
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    },[token, pk])


    return (
        <div className='container-list'>
        {error && <div className="error">{ error }</div>}
            <h2>Company Information</h2>
                <ul className="details-targetco" key={pk}>
                    <li key={`{pk}.rank`}>{companyRank}</li>
                    <li key={`{pk}.company_name`}>{companyName}</li>
                    <li key={`{pk}.website`}><Link className="link-inline" to={companyUrl}>{companyUrl}</Link></li>
                    <li key={`{pk}.jobs_page`}>{companyJobsUrl}</li>
                    <ReactQuill
                        key={`{pk}.comments`}
                        value={companyNotes}
                        reaadOnly={true}
                        theme={'bubble'}
                    />
                    <Link 
                        to={`/targetcompany/edit/${pk}`}
                        id="targetco-list-edit"
                        className="button-edit"
                    >Add More Company Recon</Link>
                </ul>
        </div>
    )
}