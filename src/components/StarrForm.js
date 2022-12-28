import { useState } from 'react';
import { useNavigate } from 'react-router';
import { requestCreateStarr } from './Requests';
import { requestStarrs } from './Requests';


export const StarrForm = ({token}) => {
    const [starrId, setStarrId] = useState(null)
    const [question, setQuestion] = useState('');
    const [summary, setSummary] = useState('');
    const [situation, setSituation]= useState('');
    const [task, setTask] = useState('');
    const [action, setAction] = useState('');
    const [result, setResult] = useState('');
    const [reflection, setReflection] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        setError(null)
        requestCreateStarr(token, question, summary, situation, task, action, result, reflection)

        .then((res) => {
            setStarrId(res.data.id)
           // navigate('/starrs')
        })
        .catch((error) => {
        setError(error.message)
        })
    }

    return (
        <div className='container-form'>
        {error && <div className="error">{error}</div>}
            <h2>Write a New STARR story here!</h2>
            <p> ...pssst.(IIS ICON here) A STARR is a way to highlight your problem solving skills. Use the form below to tell your story.</p>
            <form className='form-starr' id='starr-form' onSubmit={handleSubmit}>
                <container-inputset style={{border: 'solid', width:'88%', }}>
                    <legend><strong>fill out form, agent awesome.</strong></legend>
                    <label className='form-label'>STARR story Title</label>
                    <div className='container-input'>
                        <input 
                            type="text" 
                            className='form-input-text'
                            autoFocus
                            autoComplete='off'
                            placeholder='What is Your STARR Story Called?'
                            maxLength={200}
                            onChange={(e) => setQuestion(e.target.value)}
                            required
                            />
                    </div>
                    <label className='form-label'>Summary: </label>
                    <div className='container-input'>
                        <textarea 
                            className='input-textarea'
                            autoFocus
                            placeholder='Summarize your STARR story'
                            onChange={(e) => setSummary(e.target.value)}
                            id='summary'
                            type='text'
                            autoComplete='off'
                            maxLength={200}
                            name='summary'
                            required
                            />
                    </div>
                    <label className='form-label'>Situation: </label>
                    <div className='container-input'>
                        <textarea 
                            className='input-textarea'
                            placeholder='Describe the situation or conflict.'
                            onChange={(e) => setSituation(e.target.value)}
                            id='situation'
                            type='text'
                            autoComplete='off'
                            maxLength={500}
                            name='situation'
                            required
                            />
                    </div>
                    <label className='form-label'>Task: </label>
                    <div className='container-input'>
                        <textarea 
                            className='input-textarea'
                            placeholder='What task needs to be solved?'
                            onChange={(e) => setTask(e.target.value)}
                            id='task'
                            type='text'
                            autoComplete='off'
                            maxLength={500}
                            name='task'
                            required
                        />
                    </div>
                    <label className='form-label'>Action: </label>
                    <div className='container-input'>
                        <textarea 
                            className='input-textarea'
                            placeholder='What action did you take to accomplish this task?'
                            onChange={(e) => setAction(e.target.value)}
                            id='action'
                            type='text'
                            autoComplete='off'
                            maxLength={500}
                            name='action'
                            required
                            />
                    </div>
                    <label className='form-label'>Result: </label>
                    <div className='container-input'>
                        <textarea 
                            className='input-textarea'
                            placeholder='What was the result of your action?'
                            onChange={(e) => setResult(e.target.value)}
                            id='result'
                            type='text'
                            autoComplete='off'
                            maxLength={500}
                            name='result'
                            required
                        />
                    </div>
                    <label className='form-label'>Reflection  : </label>
                    <div className='container-input'>
                        <textarea 
                            className='input-textarea'
                            placeholder='Upon reflection, what did this experience teach you?'
                            onChange={(e) => setReflection(e.target.value)}
                            id='reflection'
                            type='text'
                            autoComplete='off'
                            maxLength={500}
                            name='reflection'
                            required
                        />
                    </div>
                </container-inputset> 
                <div className='container-input'>
                    <label htmlFor='submit' className='form-label'></label>
                    <input 
                        id='submit'
                        to="/starrs"
                        className='button-submit'
                        type='submit'
                        value='Give me my STARR!'
                    />
                </div>
            </form>
        </div>
    )
}



                