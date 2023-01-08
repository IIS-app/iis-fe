import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { requestCreateTargetJob } from '../requests/JobRequests';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.bubble.css'

export const TJForm = ({token}) => {
    const [targetJob, setTargetJob] = useState([])
    const [targetJobTitle, setTargetJobTitle] = useState('')
    const [targetJobCompany, setTargetJobCompany] = useState('')
    const [targetJobUrl, setTargetJobUrl] = useState('')
    const [targetJobNotes, setTargetJobNotes] = useState('')
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

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
        setTargetJob([])
        console.log(targetJob)
        requestCreateTargetJob(token, targetJobTitle, targetJobCompany, targetJobUrl, targetJobNotes)
        
        .then((res) => {
            setTargetJob(res.data)
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
                <div className="container-form" style={{border: 'solid 3px', borderRadius:'10px', width:'75%', padding: '10px' }}>
                    <label className="form-label" htmlFor="targetJobTitle">Job Title</label>
                    <div className='container-input'>
                        <input 
                            type='text'
                            id='targetJobTitle'
                            className='form-input-text'
                            autoFocus
                            autoComplete='off'
                            onChange={(e) => setTargetJobTitle(e.target.value)}
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
                            onChange={(e) => setTargetJobCompany(e.target.value)}
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
                            onChange={(e) => setTargetJobUrl(e.target.value)}
                            name='companyUrl'
                        />                      
                    </div>
                    <label className="form-label" htmlFor="targetJobNotes">Agent Comment Log: </label>
                    <div className='container-input'>
                        <ReactQuill
                            modules={modules}
                            theme="bubble"
                            className='custom-quill'
                            id='targetJobNotes'
                            name='targetJobNotes'
                            maxLength={2000}
                            onChange={(value) => setTargetJobNotes(value)}
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