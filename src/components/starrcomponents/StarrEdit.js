import { useEffect, useState } from 'react';
import { requestUpdateStarr } from '../requests/StarrRequests';
import { requestStarrDetail } from '../requests/StarrRequests';
import { Link, useParams } from 'react-router-dom'

export const StarrEdit = ({ token }) => {
    const { pk } = useParams()
    const [StarrDetail, setStarrDetail] = useState([])
    const [starr, setStarr] = useState('')
    const [question, setQuestion] = useState('')
    const [summary, setSummary] = useState('')
    const [situation, setSituation]= useState('')
    const [task, setTask] = useState('')
    const [action, setAction] = useState('')
    const [result, setResult] = useState('')
    const [reflection, setReflection] = useState('')
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        setError(null)
        setIsLoading(true)
        requestStarrDetail(token, { pk })
        .then(res => {
            setStarr(res.data.pk)
            setStarrDetail(res.data)
            setQuestion(res.data.question)
            setSummary(res.data.summary)
            setSituation(res.data.situation)
            setTask(res.data.task)
            setAction(res.data.action)
            setResult(res.data.result)
            setReflection(res.data.reflection)
            })
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    },[token, pk]);

    const handleSubmit = (e) => {
        e.preventDefault()
        setError(null)

        requestUpdateStarr(token, { pk }, question, summary, situation, task, action, result, reflection)
            .catch((error) => {
            setError(error.message)
        })
    }


    return (
        <div className='container-form'>
        {error && <div className="error">{error}</div>}
            <h2>What will you be celebrating today?</h2>
            <form className='form-starr' id='form-starr' onSubmit={handleSubmit}>
                <div className='container-form' style={{border: 'solid', width:'88%', }}>
                    <legend>Celebrate You!</legend>
                    <label className='form-label' htmlFor="question">Name your New STARR.</label>
                    <div className='container-input'>
                        <input 
                            type="text"
                            id="question"
                            className='form-input-text'
                            autoFocus
                            autoComplete='off'
                            value={question}
                            maxLength={50}
                            onChange={(e) => setQuestion(e.target.question)}
                            />
                    </div>
                    <label className='form-label' htmlFor='summary'>Povide a Summary of the event.</label>
                    <div className='container-input'>
                        <input 
                            className='text'
                            value={summary}
                            onChange={(e) => setSummary(e.target.value)}
                            id='summary'
                            type='text'
                            autoComplete='off'
                            name='summary'
                        />
                    </div>
                    <label className='form-label' htmlFor='situation'>Describe the Situation. </label>
                    <div className='container-input'>
                        <textarea 
                            className='input-textarea'
                            value={situation}
                            onChange={(e) => setSituation(e.target.value)}
                            id='situation'
                            type='text'
                            autoComplete='off'
                            maxLength={1000}
                            name='situation'
                        />
                    </div>
                    <label className='form-label' htmlFor='task'>What is the task at hand?</label>
                    <div className='container-input'>
                        <input 
                            className='input-textarea'
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                            id='task'
                            type='text'
                            autoComplete='off'
                            name='task'
                        />
                    </div>
                    <label className='form-label' htmlFor='action'>What actions did you take?</label>
                    <div className='container-input'>
                        <input 
                            className='input-textarea'
                            value={action}
                            onChange={(e) => setAction(e.target.value)}
                            id='action'
                            type='text'
                            autoComplete='off'
                            name='action'
                        />
                    </div>
                    <label className='form-label' htmlFor='result'>What was the result of your actions?</label>
                    <div className='container-input'>
                        <input 
                            className='input-textarea'                  
                            value={result}
                            onChange={(e) => setResult(e.target.value)}
                            id='result'
                            type='text'
                            autoComplete='off'
                            name='result'
                        />
                    </div>
                    <label className='form-label' htmlFor='reflection'>What, upon reflection, did you learn from this?</label>
                    <div className='container-input'>
                        <input 
                            className='input-textarea'
                            value={reflection}
                            onChange={(e) => setReflection(e.target.value)}
                            id='reflection'
                            type='text'
                            autoComplete='off'
                            name='reflection'
                        />
                    </div>
                </div> 
                <div className='container-input'>
                    <label htmlFor='submit' className='form-label'></label>
                    <input
                        id='submit'
                        to="/starss"
                        className='button-submit'
                        type='submit'
                        value='Save My Work!'
                    />
                </div>
            </form>
        </div>
    )
}



                