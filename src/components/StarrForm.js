import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const title = event.target.title;
    const summary = event.target.summary;
    const situation = event.target.situation;
    const task = event.target.task;
    const action = event.target.action;
    const result = event.target.result;
    const reflection = event.target.reflection;

    setInputs(values => ({
        
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Title of Starr:
      <input 
        type="text" 
        name="title" 
        value={inputs.title || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Summary:
        <input 
          type="text" 
          value={inputs.summary || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Situation:
          <input 
            type="text"
            value={inputs.situation || ""}
            onChange={handleChange}
          />
        </label>
        <label>Task:
          <input 
            type="text"
            value={inputs.task}
            onChange={handleChange}
          />
        </label>
        <label>Action:
          <input 
            type="text"
            value={inputs.action}
            onChange={handleChange}
          />
        </label>
        <label>Result:
          <input 
            type="text"
            value={inputs.result}
            onChange={handleChange}
          />
        </label>
        <label>Refelction:
          <input 
            type="text"
            value={inputs.reflection}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);