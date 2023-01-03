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
            <h2>Update your STARR here</h2>
            <form className='form-starr' id='form-starr' onSubmit={handleSubmit}>
                <div className='container-form' style={{border: 'solid', width:'88%', }}>
                    <label className='form-label' htmlFor="question">Name your New STARR.</label>
                    <div className='container-input'>
                        <input 
                            autoFocus
                            autoComplete='off'
                            className='form-input-text'
                            id="question"
                            maxLength={50}
                            name="question"
                            onChange={(e) => setQuestion(e.target.value)}
                            type="text"
                            value={question}
                            />
                    </div>
                    <label className='form-label' htmlFor='summary'>Summarize your STARR story.</label>
                    <div className='container-input'>
                        <input 
                            autoComplete='off'
                            className='text'
                            id='summary'
                            onChange={(e) => setSummary(e.target.value)}
                            name='summary'
                            type='text'
                            value={summary}
                        />
                    </div>
                    <label className='form-label' htmlFor='situation'>Describe the Situation or conflict. </label>
                    <div className='container-input'>
                        <textarea 
                            autoComplete='off'
                            className='input-textarea'
                            id='situation'
                            maxLength={1000}
                            name='situation'
                            onChange={(e) => setSituation(e.target.value)}
                            type='text'
                            value={situation}
                        />
                    </div>
                    <label className='form-label' htmlFor='task'>What task needs to be solved?</label>
                    <div className='container-input'>
                        <input 
                            autoComplete='off'
                            className='input-textarea'
                            id='task'
                            name='task'
                            onChange={(e) => setTask(e.target.value)}
                            type='text'
                            value={task}
                        />
                    </div>
                    <label className='form-label' htmlFor='action'>What action did you take to accomplish this task?</label>
                    <div className='container-input'>
                        <input 
                            autoComplete='off'
                            className='input-textarea'
                            id='action'
                            name='action'
                            onChange={(e) => setAction(e.target.value)}
                            type='text'
                            value={action}
                        />
                    </div>
                    <label className='form-label' htmlFor='result'>What was the result of your action?</label>
                    <div className='container-input'>
                        <input 
                            autoComplete='off'
                            className='input-textarea'                  
                            id='result'
                            name='result'
                            onChange={(e) => setResult(e.target.value)}
                            type='text'
                            value={result}
                        />
                    </div>
                    <label className='form-label' htmlFor='reflection'>Upon reflection, what did this experience teach you?</label>
                    <div className='container-input'>
                        <input 
                            autoComplete='off'
                            className='input-textarea'
                            id='reflection'
                            name='reflection'
                            onChange={(e) => setReflection(e.target.value)}
                            type='text'
                            value={reflection}
                        />
                    </div>
                </div> 
                <div className='container-input'>
                    <label htmlFor='submit' className='form-label'></label>
                    <input
                        id='submit'
                        to='starrs'
                        className='button-submit'
                        type='submit'
                        value='Save My Work!'
                    />
                </div>
            </form>
        </div>
    )
}



                