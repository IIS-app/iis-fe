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

            <h2 className='main-title'>Company Information</h2>
                <div key={pk} className="details-targetco" >
                    <p className="form-label-data" key={`{pk}.company_name`}>{`Company Name: ${companyName}`}</p>
                    <p className="form-label-data" key={`{pk}.rank`}>{`Level of Interest: ${companyRank}`}</p>
                    <p className="form-label-data" key={`{pk}.website`}>{`Company URL: ${companyUrl}`}</p>
                    <p className="form-label-data" key={`${pk}.jobs_page`}>
                        {companyJobsUrl ? `Company Job or Career Page: ${companyJobsUrl}` : 'No company jobs url added.'}
                    </p>
                    <ReactQuill
                        key={`{pk}.comments`}
                        value={companyNotes}
                        readOnly={true}
                        theme='bubble'
                        />
                    <Link 
                        to={`/targetcompany/edit/${pk}`}
                        id="targetco-list-edit"
                        className="button-submit"
                        >Edit Company</Link>
                </div>
                        {error && <div className="error">{ error }</div>}
        </div>
    )
}