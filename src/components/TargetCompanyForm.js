import { useState } from "react"

export const TargetCompanies = () => {
    const [companyName, setCompanyName] = useState('')
    const [url, setUrl] = useState('')
    const [rank, setRank] = useState('')
    const [contact, setContact] = useState('')
    const [comments, setComments] = useState('')
    const [ createdAt, sestCreatedAt] = useState('')
    const [updatedAt, setUpdatedAt] = useState('')
    const [error, setError] = useState('')
   

    const handleSubmit = (e) => {
        e.preventDefault(
        setError(null)
        )
    }

    return (
        <div className="target-companies">   
         {error && <div className="error">{error}</div>}
            <h1 className="targetcomp">Target Companies</h1>
            <form className="company-form" id='form-company' onSubmit={handleSubmit}>
                <fieldset style={{border: 'solid', width:'58%', }}>
                <legend><strong>Add to your list of Target Companies</strong></legend>
                <label className="text-align is-centered">🎯 Target Company(Rank): 🎯</label>
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
                            value={contact}
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
                            value={comments}
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
                        to="/create"
                        className='button submit'
                        type='submit'
                        value='You have your targets, Agent {codename}. Happy Hunting'
                    />
                </div>
            </form>
        </div>
    )
}