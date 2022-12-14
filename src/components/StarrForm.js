import { useState } from 'react';
import ReactDOM from 'react-dom/client';


export const StarrForm = () => {
    const [title, setTitle] = useState('');
    const [situation, setSituation]= useState('');
    const [task, setTask] = useState('');
    const [ action, setAction] = useState('');
    const [ result, setResult] = useState('');
    const [ reflection, setReflection] = useState('');
    const [ error, setError] = useState(null);
  

    const handleSubmit = (e) => {
      e.preventDefault()
      setError(null)
      const form = { title, situation, task, action, result, reflection } 



    }
      
    return (
        <div className='starrform'>
            <h2>Write a New STARR story here!</h2>
            <p> ...pssst. A STARR is a way to highlight your problem solving skills. Use the form below to tell your story.</p>
            <form className='form-starr' id='starr-form' onSubmit={handleSubmit}>
                <fieldset style={{border: 'solid', width:'88%', }}> <legend>fill out form, agent awesome.</legend>
                    <label>STARR story Title</label>
                    <div className='control'>
                        <input 
                            type="text" 
                            className='input'
                            autoFocus  
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
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
                    <button>Add STARR!</button>
            </form>
        </div>
    )
}



                