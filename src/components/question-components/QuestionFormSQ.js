import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {   } from 'react-router';
import { requestCreateSQAnswer } from '../requests/QuestionRequests';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.bubble.css'


export const QuestionFormSQ = ({ token,  }) => {
    const location = useLocation();
    const { sq } = location.state;
    const [question, setQuestion] = useState(sq ? sq.question : '');
    const [questionType, setQuestionType]= useState(sq.question_type);    
    const [questionAnswer, setQuestionAnswer] = useState('')
    const [questionCompany, setQuestionCompany] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate()
    const [questionTypeText, setQuestionTypeText] = useState('')
    const [companyQ, setCompanyQ] = useState('')
    const [draft, isDraft] = useState(true)

    useEffect(() => {
        if (questionType === 'CQ') {
        setQuestionTypeText("To Ask a Company")
        } else {
            setQuestionTypeText("To Answer for Interview")
            setCompanyQ(false)
        }
    }, [questionType]);


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
        setQuestionType(questionType)
        requestCreateSQAnswer(token, questionAnswer, question, questionType, questionCompany)

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
            <p className="page title">Suggested Question</p>
            <form className='form-question' id='form-question' onSubmit={handleSubmit}>
                <div 
                    className="container-form" >
                    <div>
                        {questionType === 'CQ' ? (
                                <div className="system-question-answer">
                                    <p><em>{`Question Type: ${questionTypeText}`}</em></p>
                                    <p><em>{`Question: ${question}`}</em></p>
                                    <label className="form-label" htmlFor="companyNotes">What was the company or contact's response?</label>
                                    <div className='container-input'>
                                        <ReactQuill
                                            modules={modules}
                                            theme="bubble"
                                            className='custom-quill'
                                            id='questionAnswer'
                                            name='questionAnswer'
                                            maxLength={2000}
                                            onChange={(value) => setQuestionAnswer(value)}
                                        />                        
                                    </div>
                                </div>
                        ) : (
                                <div className="system-question-answer">
                                    <p><em>{`Question: ${question}`}</em></p>
                                    <p><em>{`Question Type: ${questionTypeText}`}</em></p>
                                    <label className="form-label" htmlFor="questionAswer">Answer</label>
                                    <div className='container-input'>
                                        <ReactQuill
                                            modules={modules}
                                            theme="bubble"
                                            className='custom-quill'
                                            id='questionAnswer'
                                            name='questionAnswer'
                                            maxLength={2000}
                                            onChange={(value) => setQuestionAnswer(value)}
                                        />                        
                                    </div>
                                </div>
                        )}
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
                    </div>
                </div>
            </form>
        </div>
    )
}