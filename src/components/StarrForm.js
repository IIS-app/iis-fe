import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router';
import { requestStarrForm } from './Requests';
import axios from 'axios';

export const StarrForm = ({token}) => {
    const [question, setQuestion] = useState('what?');
    const [summary, setSummary] = useState('A summary of what');
    const [situation, setSituation]= useState('What is the situation');
    const [task, setTask] = useState('What task');
    const [ action, setAction] = useState('What action');
    const [ result, setResult] = useState('What result');
    const [ reflection, setReflection] = useState('What reflection');
    const [ error, setError] = useState(null);
    const navigate = useNavigate()

    }

    const handleSubmit = (e) => {
      e.preventDefault()
      setError(null)
      requestStarrForm(token, createContainer)

      

      .then((res) => {
            navigate('/starrs')
      })
      .catch((error) => {
        setError(error.message)
      })
    }
      
    return (
        <div className='starrform'>
            <h2>Write a New STARR story here!</h2>
            <p> ...pssst.(IIS ICON here) A STARR is a way to highlight your problem solving skills. Use the form below to tell your story.</p>
            <form className='form-starr' id='starr-form' onSubmit={handleSubmit}>
            
            <br />
                <fieldset style={{border: 'solid', width:'88%', }}> <legend><strong>fill out form, agent awesome.</strong></legend>
                    <label>STARR story Title</label>
                    <div className='control'>
                        <input 
                            type="text" 
                            className='input'
                            autoFocus  
                            value={question}
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
                            id='innerMsg'
                            type='text'
                            autoComplete='off'
                            maxLength={200}
                            name='innerMsg'
                            ></textarea>
                    </div>
                    <label>Situation: </label>
                    <div className='control'>
                        <textarea 
                            className='textarea'
                            autoFocus
                            value={situation}
                            onChange={(e) => setSituation(e.target.value)}
                            id='innerMsg'
                            type='text'
                            autoComplete='off'
                            maxLength={200}
                            name='innerMsg'
                            placeholder='Make yourelf laugh, like, a LOT.'
                            ></textarea>
                    </div>
                    <label>Task: </label>
                    <div className='control'>
                        <textarea 
                            className='textarea'
                            autoFocus
                            value={task}
                            onChange={(e) => setTask(e.target.value)}   
                            ></textarea>
                    </div>
                    <label>Action: </label>
                    <div className='control'>
                        <textarea 
                            className='textarea'
                            autoFocus
                            value={action}
                            onChange={(e) => setAction(e.target.value)}   
                            ></textarea>
                    </div>
                    <label>Result: </label>
                    <div className='control'>
                        <textarea 
                            className='textarea'                
                            autoFocus
                            value={result}
                            onChange={(e) => setResult(e.target.value)}   
                            ></textarea>
                    </div>
                    <label>Reflection  : </label>
                    <div className='control'>
                        <textarea  
                            className='textarea'                
                            autoFocus
                            value={reflection}
                            onChange={(e) => setReflection(e.target.value)}   
                            ></textarea>
                    </div>
                </fieldset> 
                <br />
                    <button>Add STARR!</button>             
            </form>
        </div>
    )
}



                