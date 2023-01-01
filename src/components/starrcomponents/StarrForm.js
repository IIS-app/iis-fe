import { useState } from 'react';
import { useNavigate } from 'react-router';
import { requestCreateStarr } from '../requests/StarrRequests';


export const StarrForm = ({token}) => {
    const [starr, setStarr] = useState(null)
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
            setStarr(res.data)
            //navigate('/starrs')
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
            <form className='form-starr' id='form-starr' onSubmit={handleSubmit}>
                <div className='container-form' style={{border: 'solid', width:'88%', }}>
                    <legend><strong>fill out form, agent awesome.</strong></legend>
                    <label className='form-label' htmlFor='question'>STARR story Title</label>
                    <div className='container-input'>
                        <input 
                            autoFocus
                            autoComplete='off'
                            className='form-input-text'
                            id='question'
                            maxLength={200}
                            onChange={(e) => setQuestion(e.target.value)}
                            placeholder='What is Your STARR Story Called?'
                            required
                            type="text" 
                            value={question}
                            />
                    </div>
                    <label className='form-label' htmlFor='summary'>Summary: </label>
                    <div className='container-input'>
                        <textarea 
                            autoComplete='off'
                            className='input-textarea'
                            id='summary'
                            maxLength={500}
                            name='summary'
                            onChange={(e) => setSummary(e.target.value)}
                            placeholder='Summarize your STARR story'
                            required
                            type='text'
                            value={summary}
                            />
                    </div>
                    <label className='form-label' htmlFor='situation'>Situation: </label>
                    <div className='container-input'>
                        <textarea 
                            autoComplete='off'
                            className='input-textarea'
                            id='situation'
                            maxLength={500}
                            name='situation'
                            onChange={(e) => setSituation(e.target.value)}
                            placeholder='Describe the situation or conflict.'
                            required
                            type='text'
                            value={situation}
                            />
                    </div>
                    <label className='form-label' htmlFor='task'>Task: </label>
                    <div className='container-input'>
                        <textarea 
                            autoComplete='off'
                            className='input-textarea'
                            id='task'
                            maxLength={500}
                            name='task'
                            onChange={(e) => setTask(e.target.value)}
                            placeholder='What task needs to be solved?'
                            required
                            type='text'
                            value={task}
                        />
                    </div>
                    <label className='form-label' htmlFor='action'>Action: </label>
                    <div className='container-input'>
                        <textarea 
                            autoComplete='off'
                            className='input-textarea'
                            id='action'
                            maxLength={500}
                            name='action'
                            onChange={(e) => setAction(e.target.value)}
                            placeholder='What action did you take to accomplish this task?'
                            required
                            type='text'
                            value={action}
                            />
                    </div>
                    <label className='form-label' htmlFor='result'>Result: </label>
                    <div className='container-input'>
                        <textarea 
                            autoComplete='off'
                            className='input-textarea'
                            id='result'
                            maxLength={500}
                            name='result'
                            onChange={(e) => setResult(e.target.value)}
                            placeholder='What was the result of your action?'
                            required
                            type='text'
                            value={result}
                        />
                    </div>
                    <label className='form-label' htmlFor='reflection'>Reflection  : </label>
                    <div className='container-input'>
                        <textarea 
                            autoComplete='off'
                            className='input-textarea'
                            id='reflection'
                            maxLength={500}
                            name='reflection'
                            onChange={(e) => setReflection(e.target.value)}
                            placeholder='Upon reflection, what did this experience teach you?'
                            required
                            type='text'
                            value={reflection}
                        />
                    </div>
                </div> 
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



                