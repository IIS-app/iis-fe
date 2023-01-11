import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { requestCreateTargetCompany } from '../requests/CompanyRequests';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.bubble.css'

export const TCForm = ({token}) => {
    const [targetCompany, setTargetCompany] = useState([])
    const [companyRank, setCompanyRank] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [companyUrl, setCompanyUrl] = useState('')
    const [companyJobsUrl, setCompanyJobsUrl] = useState('')
    const [companyNotes, setCompanyNotes] = useState('')
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

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
        setTargetCompany([])
        console.log(targetCompany)
        requestCreateTargetCompany(token, companyName, companyRank,companyUrl, companyJobsUrl, companyNotes)
        
        .then((res) => {
            setTargetCompany(res.data)
            navigate('/targetcompanies')
        })
            .catch((error) => {
            setError(error.message)
        })
    }

    return (
        <div className="container-form">   
            {error && <div className="error">{error}</div>}
            <h2 className="main-title">Where would you like to work?</h2>
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
                            onChange={(e) => setCompanyName(e.target.value)}
                            maxLength={100}
                            name='companyName'
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
                    </div>
                    <label className="form-label" htmlFor="companyUrl">Company Website:</label>
                    <div className='container-input'>
                        <input
                            type='url'
                            id='companyUrl'
                            className='form-input-url'
                            autoComplete='off'
                            placeholder="https://company.com"
                            pattern="https://.*" 
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
                            placeholder="https://company.com/jobs"
                            pattern="https://.*" 
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
                            onChange={(value) => setCompanyNotes(value)}
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
                        value="Provide Company Details"
                        style={{marginTop:'30px'}}
                    />
                </div>
            </form>
        </div>
    )
}