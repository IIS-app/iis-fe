import { useEffect, useState, useRef } from 'react';
import { requestUpdateTargetCompany } from '../requests/CompanyRequests';
import { requestTargetCompanyDetail } from '../requests/CompanyRequests';
import { Link, useParams } from 'react-router-dom'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.bubble.css'


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
            setCompanyRank(res.data.rank)
            setCompanyUrl(res.data.website)
            setCompanyJobsUrl(res.data.job_page)
            setCompanyNotes(res.data.comments)
            })
        .catch(error => setError(error.message))
        .finally(() => setIsLoading(false))
    },[token, pk]);

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            [{ 'bold': true }, { 'italic': true }, { 'underline': true }, { 'strike': true }],
            [{ list:  "ordered" }, { list:  "bullet" }],
            ["blockquote", "code-block"],
            ["clean", "undo", "redo"],
        ],
        history: {
            delay: 2000,
            maxStack: 500,
            userOnly: false}
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setError(null)

        // TODO: What is going on with the data map?
        // Checked and this DATA is CORRECT, but by the time it gets to the requests formData...it's not great
        console.log(`token: ${token}, pk: ${pk}`)
        console.log('companyRank:', companyRank)
        console.log('companyName:', companyName)
        console.log('companyUrl:', companyUrl)
        console.log('companyJobsUrl:', companyJobsUrl)
        console.log('companyNotes:', companyNotes)
        // requestUpdateTargetCompany(token, { pk }, token, companyRank, companyName, companyUrl, companyJobsUrl, companyNotes)
        
        requestUpdateTargetCompany(token, { pk }, companyName, companyRank, companyUrl, companyJobsUrl, companyNotes)
            console.log(`name: ${companyName}, rank:${companyRank}, url:${companyUrl}, jobsUrl: ${companyJobsUrl}, notes:${companyNotes}`)
            .catch((error) => {
                setError(error.message)
                console.log('API error:', error.message)
            })
    }


    return (
        <div className="container-form">   
            {error && <div className="error">{error}</div>}
            <h2 className="main-title">What additional intel do you have?</h2>
            <form className="form-company" id='form-company' onSubmit={handleSubmit}>
                <div className="container-form" >
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
                            placeholder='Company Name'
                            />
                    </div>
                    <label className="form-label" htmlFor="companyRank">On a scale of 1 to 5, rank your interest.</label>
                    <div className='container-input'>
                        <input 
                            type='number'
                            id='companyRank'
                            className='form-input-number'
                            autoFocus
                            autoComplete='off'
                            min="1"
                            max="5"
                            step="1"
                            onChange={(e) => setCompanyRank(e.target.value)}
                            name='companyRank'
                            value={companyRank}
                            />
                            <p>{`Current Rank: ${companyRank}`}</p>
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
                        <ReactQuill
                        modules={modules}
                        theme="bubble"
                        className='custom-quill'
                        id='companyNotes'
                        name='companyNotes'
                        maxLength={2000}
                        value={companyNotes}
                        onChange={(value) => setCompanyNotes(value)}
                        placeholder='Capture notes about company research, informal coffee chats, or company contacts.'
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
                        value="Update Company Details"
                    />
                </div>
            </form>
        </div>
    )
}



                