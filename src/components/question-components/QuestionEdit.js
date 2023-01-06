import { useState } from 'react';
import { useNavigate } from 'react-router';
import { requestUpdateQuestion } from '../requests/QuestionRequests';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.bubble.css'

// TODO: FINISH OUT QUESTION EDIT FORM

export const QuestionEdit = ({token}) => {
    const [questionId, setQuestionId] = useState(null)
    const [questionType, setQuestionType]= useState('');
    const [question, setQuestion] = useState('');
    const [questionAnswer, setQuestionAnswer] = useState('')
    const [questionCompany, setQuestionCompany] = useState('');
    const [error, setError] = useState(null);
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
        requestUpdateQuestion(token, questionType, question, questionCompany, questionAnswer)

        .then((res) => {
            // setQuestionId(res.data.id)
            navigate('/questions')
        })
        .catch((error) => {
        setError(error.message)
        })
    }

    return (
        <div className='question'>
        {error && <div className="error">{error}</div>}
            <h2>What question do you want to answer today?</h2>
            <form className='form-question' id='form-question' onSubmit={handleSubmit}>
                <div className="container-form" style={{border: 'solid 3px', borderRadius:'10px', width:'75%', padding: '10px' }}>
                    <label className='form-label' htmlFor="question">Question</label>
                    <div className='container-input'>
                        <input 
                            type="text"
                            id="question"
                            className='form-input-text'
                            autoFocus
                            autoComplete='off'
                            value={question}
                            maxLength={200}
                            onChange={(e) => setQuestion(e.target.value)}
                            />
                    </div>
                    <div className='container-input' style={{width: '25%', textAlign:'center', display:'flex'}}>
                        <div className='radio-group' style={{marginLeft:'1em'}}>
                            <input 
                                className='radio-input'
                                value='answer'
                                onChange={(e) => setQuestionType(e.target.value)}
                                id='answer'
                                type='radio'
                                name='questionType'
                            />
                            <label for='answer' className='form-label'style={{width:'max-content'}}>Answer Question</label>
                        </div>
                        <div className='radio-group' style={{marginLeft:'1em', width:'max-content'}}>
                            <input 
                                className='radio-input'
                                value='ask'
                                onChange={(e) => setQuestionType(e.target.value)}
                                id='ask'
                                type='radio'
                                name='questionType'
                            />
                            <label for='ask' className='form-label' style={{width:'max-content'}}>Ask Company</label>
                        </div>
                    </div>
                    <label className='form-label' htmlFor='questionCompany'>Company</label>
                    <div className='container-input'>
                        <input 
                            className='text'
                            value={questionCompany}
                            onChange={(e) => setQuestionCompany(e.target.value)}
                            id='questionCompany'
                            type='text'
                            autoComplete='off'
                            name='questionCompany'
                            />
                    </div>
                    <label className="form-label" htmlFor="companyNotes">Answer</label>
                    <div className='container-input'>
                        <ReactQuill
                            modules={modules}
                            theme="bubble"
                            className='custom-quill'
                            id='companyNotes'
                            name='companyNotes'
                            maxLength={2000}
                            onChange={(value) => setQuestionAnswer(value)}
                        />                        
                    </div>
                </div> 
                <div className='container-input'>
                    <label htmlFor='submit' className='form-label'></label>
                    <input
                        id='submit'
                        to="/create"
                        className='button-submit'
                        type='submit'
                        value='Save My Work!'
                        style={{marginTop:'30px'}}
                    />
                </div>
            </form>
        </div>
    )
}



                