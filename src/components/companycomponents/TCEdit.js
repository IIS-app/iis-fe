import { useEffect, useState, useRef } from 'react';
import { requestUpdateTargetCompany } from '../requests/CompanyRequests';
import { requestTargetCompanyDetail } from '../requests/CompanyRequests';
import { Link, useParams } from 'react-router-dom'

export const TCEdit = ({ token }) => {
    const { pk } = useParams()
    const [companyDetail, setCompanyDetail] = useState('')
    const [CompanyId, setCompanyId] = useState('')
    const [companyRank, setCompanyRank] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [companyUrl, setCompanyUrl] = useState('')
    const [companyJobsUrl, setCompanyJobsUrl] = useState('')
    const [companyNotes, setCompanyNotes] = useState('')
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        setError(null)
        setIsLoading(true)
        requestTargetCompanyDetail(token, { pk })
        .then(res => {
            setCompanyId(res.data.pk)
            setCompanyDetail(res.data)
            setCompanyName(res.data.company_name)
            setCompanyUrl(res.data.website)
            setCompanyJobsUrl(res.data.job_page)
            setCompanyNotes(res.data.comments)
            console.log(res)
            })
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    },[token, pk]);

    const handleSubmit = (e) => {
        e.preventDefault()
        setError(null)
        requestUpdateTargetCompany(token, { pk }, token, companyRank, companyName, companyUrl, companyJobsUrl, companyNotes)
            .catch((error) => {
            setError(error.message)
        })
    }


    return (
        <div className="container-form">   
            {error && <div className="error">{error}</div>}
            <h2 className="targetcomp">🎯 What additional intel do you have? 🎯</h2>
            <form className="form-company" id='form-company' onSubmit={handleSubmit}>
                <div className="container-form" style={{border: 'solid', width:'58%', }}>
                <legend><strong>Just the basics get you started!</strong></legend>
                <label className="form-label" htmlFor="companyName">Company Name</label>
                    <div className='container-input'>
                        <input 
                            type='text'
                            id='companyName'
                            className='form-input-text'
                            autoFocus
                            autoComplete='off'
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            maxLength={100}
                            name='companyName'
                            />
                    </div>
                    <label className="form-label" htmlFor="Compan">Company Website:</label>
                    <div className='container-input'>
                        <input
                            type='url'
                            id='companyUrl'
                            className='form-input-url'
                            autoComplete='off'
                            value={companyUrl}
                            onChange={(e) => setCompanyUrl(e.target.value)}
                            name='companyUrl'
                        />                      
                    </div>
                    <label className="form-label" htmlFor="companyJobsUrl">Company Careers Page:</label>
                    <div className='container-input'>
                        <input
                            type='url'
                            id='companyJobsUrl'
                            className='form-input-url'
                            autoComplete='off'
                            value={companyJobsUrl}
                            onChange={(e) => setCompanyJobsUrl(e.target.value)}
                            name='companyJobsUrl'
                        />                      
                    </div>
                    <label className="form-label" htmlFor="companyNotes">Agent Comment Log: </label>
                    <div className='container-input'>
                        <input
                            className='form-input-text'
                            value={companyNotes}
                            id='companyNotes'
                            type='text'
                            name='companyNotes'
                            maxLength={2000}
                            onChange={(e) => setCompanyNotes(e.target.value)}
                        />                        
                    </div>
                </div>
                <div className='container-input'>
                    <label htmlFor='submit' className='form-label'></label>
                    <input 
                        to="/targetcompanies"
                        id='submit'
                        className='button-submit'
                        type='submit'
                        value="It's Just the Beginning!"
                        // TODO: would like to have {codename} available in lieu of Agent.
                    />
                </div>
            </form>
        </div>
    )
}



                