import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router';
import { requestStarrForm } from './Requests';
import axios from 'axios';

export const StarrForm = ({token}) => {
    const [starrId, setStarrId] = useState(null)
    const [question, setQuestion] = useState('Title for Scenario');
    const [summary, setSummary] = useState('A summary of what');
    const [situation, setSituation]= useState('What is the situation');
    const [task, setTask] = useState('What task');
    const [action, setAction] = useState('What action');
    const [result, setResult] = useState('What result');
    const [reflection, setReflection] = useState('What reflection');
    const [error, setError] = useState(null);
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        setError(null)
        requestStarrForm(token, question, summary, situation, task, action, result, reflection)

        .then((res) => {
            // setStarrId(res.data.id)
            navigate('/starrs')
        })
        .catch((error) => {
        setError(error.message)
        })
    }

    return (
        <div className='starrform'>
        {error && <div className="error">{error}</div>}
            <h2>Write a New STARR story here!</h2>
            <p> ...pssst.(IIS ICON here) A STARR is a way to highlight your problem solving skills. Use the form below to tell your story.</p>
            <form className='form-starr' id='starr-form' onSubmit={handleSubmit}>
                <fieldset style={{border: 'solid', width:'88%', }}>
                    <legend><strong>fill out form, agent awesome.</strong></legend>
                    <label>STARR story Title</label>
                    <div className='control'>
                        <input 
                            type="text" 
                            className='input'
                            autoFocus
                            autoComplete='off'
                            value={question}
                            maxLength={200}
                            onChange={(e) => setQuestion(e.target.value)}
                            />
                    </div>
                    <label>Summary: </label>
                    <div className='control'>
                        <textarea 
                            className='textarea'
                            autoFocus
                            value={summary}
                            onChange={(e) => setSummary(e.target.value)}
                            id='summary'
                            type='text'
                            autoComplete='off'
                            maxLength={200}
                            name='summary'
                            />
                    </div>
                    <label>Situation: </label>
                    <div className='control'>
                        <textarea 
                            className='textarea'
                            value={situation}
                            onChange={(e) => setSituation(e.target.value)}
                            id='situation'
                            type='text'
                            autoComplete='off'
                            maxLength={500}
                            name='situation'
                            // placeholder='Make yourelf laugh, like, a LOT.'
                            />
                    </div>
                    <label>Task: </label>
                    <div className='control'>
                        <textarea 
                            className='textarea'
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                            id='task'
                            type='text'
                            autoComplete='off'
                            maxLength={500}
                            name='task'
                        />
                    </div>
                    <label>Action: </label>
                    <div className='control'>
                        <textarea 
                            className='textarea'
                            value={action}
                            onChange={(e) => setAction(e.target.value)}
                            id='action'
                            type='text'
                            autoComplete='off'
                            maxLength={500}
                            name='action'
                            />
                    </div>
                    <label>Result: </label>
                    <div className='control'>
                        <textarea 
                            className='textarea'
                            value={result}
                            onChange={(e) => setResult(e.target.value)}
                            id='result'
                            type='text'
                            autoComplete='off'
                            maxLength={500}
                            name='result'
                        />
                    </div>
                    <label>Reflection  : </label>
                    <div className='control'>
                        <textarea 
                            className='textarea'
                            value={reflection}
                            onChange={(e) => setReflection(e.target.value)}
                            id='reflection'
                            type='text'
                            autoComplete='off'
                            maxLength={500}
                            name='reflection'
                        />
                    </div>
                </fieldset> 
                <div className='control'>
                    <label htmlFor='submit' className='label'></label>
                    <input 
                        to="/create"
                        className='button submit'
                        type='submit'
                        value='Give me a STARR!'
                    />
                </div>
            </form>
        </div>
    )
}



                