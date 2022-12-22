import { useState } from "react"
import { useNavigate } from "react-router"
import { requestCreateTargetCompany } from './Requests';

export const TargetCompanyForm = (token, {setSubmitted}) => {
    const [companyId, setCompanyId] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [url, setUrl] = useState('')
    const [rank, setRank] = useState('')
    const [contact, setContact] = useState('')
    const [comments, setComments] = useState('')
    const [createdAt, setCreatedAt] = useState('')
    const [updatedAt, setUpdatedAt] = useState('')
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        // eslint-disable-next-line no-unused-expressions
        setError(null)
        requestCreateTargetCompany(token, setCompanyName, url)
        
        .then((res) => {
            setSubmitted(true)
            navigate('/targetcompanies')
        })
            .catch((error) => {
            setError(error.message)
        })
    }

    return (
        <div className="target-companies">   
            {error && <div className="error">{error}</div>}
            <h1 className="targetcomp">Target Companies</h1>
            <form className="company-form" id='form-company' onSubmit={handleSubmit}>
                <fieldset style={{border: 'solid', width:'58%', }}>
                <legend><strong>Add to your list of Target Companies</strong></legend>
                <label className="text-align is-centered">Company Name ({rank})</label>
                    <div className='control'>
                        <input 
                            className='input'
                            autoFocus
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            id='company_name'
                            type='text'
                            autoComplete='off'
                            maxLength={100}
                            name='company-name'
                            />
                    </div>
                    <label className="text-align is-centered">Company Website:</label>
                    <div className='control'>
                        <input
                            className="input"
                            value={url}
                            id='website'
                            type='url'
                            name='website'
                            onChange={(e) => setUrl(e.target.value)}
                        />                      
                    </div>
                    <label className="text-align is-centered">Company Contacts: </label>
                    <div className='control'>
                        <input
                            className="input"
                            value="eventually company contacts model-view will be displayed here"
                            id='contact'
                            type='text'
                            name='contact'
                            onChange={(e) => setContact(e.target.value)}
                        />                        
                    </div>
                    <label className="text-align is-centered">Agent Comment Log: </label>
                    <div className='control'>
                        <input
                            className="input"
                            value="this will be a comments section tied to a comments model via company id"
                            id='comments'
                            type='text'
                            name='comments'
                            maxLength={2000}
                            onChange={(e) => setComments(e.target.value)}
                        />                        
                    </div>
                </fieldset>
                <div className='control'>
                    <label htmlFor='submit' className='label'></label>
                    <input 
                        to="/targetcompanies"
                        className='button submit'
                        type='submit'
                        value={`Add your next target, Agent. Happy Hunting`}
                        // TODO: would like to have {codename} available in lieu of Agent.
                    />
                </div>
            </form>
        </div>
    )
}