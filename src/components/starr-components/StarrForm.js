import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { requestCreateStarr } from '../requests/StarrRequests';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.bubble.css'


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
    const [isDraft, setIsDraft] = useState('');

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            [{ 'bold': true }, { 'italic': true }, { 'underline': true }, { 'strike': true }],
            [{ list:  "ordered" }, { list:  "bullet" }],
            ["blockquote", "code-block"],
        ],
        history: {
            delay: 2000,
            maxStack: 500,
            userOnly: false}
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setError(null)
        requestCreateStarr(token, question, summary, situation, task, action, result, reflection, isDraft)
        .then((res) => {
            setStarr(res.data)
            navigate('/starrs')
        })
        .catch((error) => {
        setError(error.message)
        })
    }

    return (
        <div className='container-form'>
            <h2 className='main-title'>Write a New STARR story here!</h2>
            <form className='form-starr' id='form-starr' onSubmit={handleSubmit}>
                <div className='container-form' >
                    {/* <label className='form-label' htmlFor='draft'>Draft Status</label>
                    <div className='container-input'>
                        <input 
                            className='draft'
                            id='draft'
                            name='draft'
                            onChange={(value) => setIsDraft(value)}
                            type='checkbox'
                            checked={isDraft}
                            />
                    </div> */}
                    <label className='form-label' htmlFor='question'>STARR story Title</label>
                    <div className='container-input'>
                        <ReactQuill 
                            autoFocus
                            autoComplete='off'
                            className='custom-quill'
                            id='question'
                            maxLength={200}
                            modules={modules}
                            name='question'
                            onChange={(value) => setQuestion(value)}
                            placeholder='What is Your STARR Story Called?'
                            required
                            theme="bubble"
                            />
                    </div>
                    <label className='form-label' htmlFor='summary'>Summary: </label>
                    <div className='container-input'>
                        <ReactQuill 
                            autoComplete='off'
                            className='custom-quill'
                            id='summary'
                            maxLength={2000}
                            modules={modules}
                            name='summary'
                            onChange={(value) => setSummary(value)}
                            placeholder='Summarize your STARR story'
                            theme="bubble"
                            />
                    </div>
                    <label className='form-label' htmlFor='situation'>Situation: </label>
                    <div className='container-input'>
                        <ReactQuill 
                            autoComplete='off'
                            className='custom-quill'
                            id='situation'
                            maxLength={2000}
                            modules={modules}
                            name='situation'
                            onChange={(value) => setSituation(value)}
                            placeholder='Describe the situation or conflict.'
                            theme="bubble"
                            />
                    </div>
                    <label className='form-label' htmlFor='task'>Task: </label>
                    <div className='container-input'>
                        <ReactQuill 
                            autoComplete='off'
                            className='custom-quill'
                            id='task'
                            maxLength={2000}
                            modules={modules}
                            name='task'
                            onChange={(value) => setTask(value)}
                            placeholder='What task needs to be solved?'
                            theme="bubble"
                        />
                    </div>
                    <label className='form-label' htmlFor='action'>Action: </label>
                    <div className='container-input'>
                        <ReactQuill
                            autoComplete='off'
                            className='custom-quill'
                            id='action'
                            maxLength={2000}
                            modules={modules}
                            name='action'
                            onChange={(value) => setAction(value)}
                            placeholder='What action did you take to accomplish this task?'
                            theme="bubble"
                            />
                    </div>
                    <label className='form-label' htmlFor='result'>Result: </label>
                    <div className='container-input'>
                        <ReactQuill 
                            autoComplete='off'
                            className='custom-quill'
                            id='result'
                            maxLength={2000}
                            name='result'
                            modules={modules}
                            onChange={(value) => setResult(value)}
                            placeholder='What was the result of your action?'
                            theme="bubble"
                        />
                    </div>
                    <label className='form-label' htmlFor='reflection'>Reflection  : </label>
                    <div className='container-input'>
                        <ReactQuill
                            autoComplete='off'
                            className='custom-quill'
                            id='reflection'
                            maxLength={2000}
                            modules={modules}
                            name='reflection'
                            onChange={(value) => setReflection(value)}
                            placeholder='Upon reflection, what did this experience teach you?'
                            theme="bubble"
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
                        value='Add STARR'
                        style={{marginTop:'30px'}}
                    />
                </div>
            </form>
            {error && <div className="error">{error}</div>}
        </div>
    )
}



                