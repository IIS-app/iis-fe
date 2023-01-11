import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom';
import { requestUpdateTargetJob } from '../requests/JobRequests';
import { requestTJDetail } from '../requests/JobRequests';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.bubble.css'

export const TJEdit = ({token}) => {
    const { pk } = useParams()
    const [jobTitle, setJobTitle] = useState('')
    const [jobCompany, setJobCompany] = useState('')
    const [jobUrl, setJobUrl] = useState('')
    const [jobNotes, setJobNotes] = useState('')
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        setError(null)
        setIsLoading(true)
        requestTJDetail(token, { pk })
        .then(res => {
            setJobTitle(res.data.title)
            setJobUrl(res.data.job_listing)
            setJobCompany(res.data.company)
            setJobNotes(res.data.notes)
            })
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    },[token, pk]);
    
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            [{ 'bold': true }, { 'italic': true }, { 'underline': true }, { 'strike': true }],
            [{ list:  "bullet" }, { list:  "ordered" }],
            ["blockquote", "code-block"],
            ['color'], 
            ['clean'],
        ]
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setError(null)
        requestUpdateTargetJob(token, {pk}, jobTitle, jobCompany, jobUrl, jobNotes)
        
        .then((res) => {
            navigate('/targetjobs')
        })
            .catch((error) => {
            setError(error.message)
        })
    }


    
    return (
        <div className="container-form">   
            {error && <div className="error">{error}</div>}
            <h2 className="targetjob">Add Job Details</h2>
            <form className="form-job" id='form-job' onSubmit={handleSubmit}>
                <div className="container-form" >
                    <label className="form-label" htmlFor="jobTitle">Job Title</label>
                    <div className='container-input'>
                        <input 
                            type='text'
                            id='jobTitle'
                            className='form-input-text'
                            autoFocus
                            autoComplete='off'
                            onChange={(e) => setJobTitle(e.target.value)}
                            maxLength={100}
                            name='targetJobTitle'
                            />
                    </div>
                    <label className="form-label" htmlFor="targetJobCompany">What company?</label>
                    <div className='container-input'>
                        <input 
                            type='text'
                            id='targetJobCompany'
                            className='form-input-text'
                            autoComplete='off'
                            onChange={(e) => setJobCompany(e.target.value)}
                            maxLength={100}
                            name='targetJobCompany'
                            />
                    </div>
                    <label className="form-label" htmlFor="targetJobUrl">Link to Job Listing Details</label>
                    <div className='container-input'>
                        <input
                            type='url'
                            id='targetJobUrl'
                            className='form-input-url'
                            autoComplete='off'
                            placeholder="https://company.com/joblisting"
                            pattern="https://.*" 
                            onChange={(e) => setJobUrl(e.target.value)}
                            name='companyUrl'
                        />                      
                    </div>
                    <label className="form-label" htmlFor="targetJobNotes">Agent Comment Log: </label>
                    <div className='container-input'>
                        <ReactQuill
                            modules={modules}
                            theme="snow"
                            className='custom-quill'
                            id='targetJobNotes'
                            name='targetJobNotes'
                            maxLength={2000}
                            onChange={(value) => setJobNotes(value)}
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
                        value="Add Job"
                    />
                </div>
            </form>
        </div>
    )
}