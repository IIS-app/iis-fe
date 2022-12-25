import { useState } from 'react';
import { useNavigate } from 'react-router';
import { requestCreateStarr } from './Requests';
import { requestStarrs } from './Requests';


export const StarrForm = ({token}) => {
    const [starrId, setStarrId] = useState(null)
    const [question, setQuestion] = useState('What is Your Starr Story Called?');
    const [summary, setSummary] = useState('Summarize your Starr story');
    const [situation, setSituation]= useState('Describe the situation or conflict');
    const [task, setTask] = useState('What task needs to be solved');
    const [action, setAction] = useState('What action did you take to accomplish this task');
    const [result, setResult] = useState('What was the result of your action');
    const [reflection, setReflection] = useState('Upon reflection, what did this experience teach you');
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
        <div className='starrform'>
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
                            value={question}
                            maxLength={200}
                            onChange={(e) => setQuestion(e.target.value)}
                            />
                    </div>
                    <label className='form-label'>Summary: </label>
                    <div className='container-input'>
                        <textarea 
                            className='input-textarea'
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
                    <label className='form-label'>Situation: </label>
                    <div className='container-input'>
                        <textarea 
                            className='input-textarea'
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
                    <label className='form-label'>Task: </label>
                    <div className='container-input'>
                        <textarea 
                            className='input-textarea'
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                            id='task'
                            type='text'
                            autoComplete='off'
                            maxLength={500}
                            name='task'
                        />
                    </div>
                    <label className='form-label'>Action: </label>
                    <div className='container-input'>
                        <textarea 
                            className='input-textarea'
                            value={action}
                            onChange={(e) => setAction(e.target.value)}
                            id='action'
                            type='text'
                            autoComplete='off'
                            maxLength={500}
                            name='action'
                            />
                    </div>
                    <label className='form-label'>Result: </label>
                    <div className='container-input'>
                        <textarea 
                            className='input-textarea'
                            value={result}
                            onChange={(e) => setResult(e.target.value)}
                            id='result'
                            type='text'
                            autoComplete='off'
                            maxLength={500}
                            name='result'
                        />
                    </div>
                    <label className='form-label'>Reflection  : </label>
                    <div className='container-input'>
                        <textarea 
                            className='input-textarea'
                            value={reflection}
                            onChange={(e) => setReflection(e.target.value)}
                            id='reflection'
                            type='text'
                            autoComplete='off'
                            maxLength={500}
                            name='reflection'
                        />
                    </div>
                </container-inputset> 
                <div className='container-input'>
                    <label htmlFor='submit' className='form-label'></label>
                    <input 
                        to="/create"
                        className='button-submit'
                        type='submit'
                        value='Give me a STARR!'
                    />
                </div>
                <p>{question}</p>
                <p>{summary}</p>
                <p>{situation}</p>
                <p>{action}</p>
                <p>{result}</p>
                <p>{reflection}</p>
            </form>
        </div>
    )
}



                