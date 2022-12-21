import { useState } from 'react';
import { useNavigate } from 'react-router';
import { requestCreateWin } from './Requests';

export const Wins = ({token}) => {
    const [questionId, setQuestionId] = useState(null)
    const [questionType, setQuestionType]= useState('');
    const [question, setQuestion] = useState('');
    const [questionAnswer, setQuestionAnswer] = useState('')
    const [questionCompany, setQuestionCompany] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        setError(null)
        requestCreateQuestion(token, questionType, question, questionCompany, questionAnswer)

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
            <form className='question-form' id='question-form' onSubmit={handleSubmit}>
                <fieldset style={{border: 'solid', width:'88%', }}>
                    <legend>Question and Answer</legend>
                    <label htmlFor="question">Question</label>
                    <div className='control'>
                        <input 
                            type="text"
                            id="question"
                            className='input'
                            autoFocus
                            autoComplete='off'
                            value={question}
                            maxLength={200}
                            onChange={(e) => setQuestion(e.target.value)}
                            />
                    </div>
                    <label>Type</label>
                    <div className='control'>
                        {/* <input 
                            className='radio-input'
                            value={questionType}
                            onChange={(e) => setQuestionType(e.target.value)}
                            id='questionType'
                            type='radio'
                            name='questionType'
                        /> */}
                        <input type="radio" id="answer" name="answer" value={questionType}/>
                        <label for="answer">To Answer</label>
                        <input type="radio" id="ask" name="ask" value="60"/>
                        <label for="ask">To Ask</label>
                    </div>
                    <label htmlFor='questionCompany'>Company</label>
                    <div className='control'>
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
                    <label htmlFor='questionAnswer'>Answer </label>
                    <div className='control'>
                        <textarea 
                            className='textarea'
                            value={questionAnswer}
                            onChange={(e) => setQuestionAnswer(e.target.value)}
                            id='questionAnswer'
                            type='text'
                            autoComplete='off'
                            maxLength={1000}
                            name='task'
                        />
                    </div>
                </fieldset> 
                <div className='control'>
                    <label htmlFor='submit' className='label'></label>
                    <input
                        id='submit'
                        to="/create"
                        className='button submit'
                        type='submit'
                        value='Save My Work!'
                    />
                </div>
            </form>
        </div>
    )
}



                