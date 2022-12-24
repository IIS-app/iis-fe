import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { requestStarrs } from './Requests';
import { StarrForm } from './StarrForm';

export const Starrs = (token) => {
    const [starrId, setStarrId] = ('')
    const [starr, setStarr] = ('')
    const [question, setQuestion] = useState('');
    const [summary, setSummary] = useState('');
    const [situation, setSituation]= useState('');
    const [task, setTask] = useState('');
    const [action, setAction] = useState('');
    const [result, setResult] = useState('');
    const [reflection, setReflection] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
            const res = await requestStarrs(token);
            setStarr(res.data);
            } catch (error) {
            setError(error.message);
            }
        };

        fetchData();
    }, [token]);

    return (
      <div className='container-main'>
        {error && <div className="error">{error}</div>}
            <h2>Starr List!</h2>
            <div className='container-list'>
            {starr ? starr.map(({question, summary})=> (
                <section className="list-item" key={question.id}>
                    <h4>{question}</h4>
                    <p>{summary}</p>
                </section>
                )) : null}

            </div>
                <div className='button-submit'>
                    <label htmlFor='editStarr' className='form-label'></label>
                    <input
                        id='editStarr'
                        to={`/starrs/${starrId}`}
                        className='button edit'
                        type='link'
                        defaultValue='Edit upon a Starr'
                    />
                </div>
                <div className='container-button'>
                    <Link
                        to="/starrform"
                        className='button add'
                        defaultValue='Add a New Starr to your Sky'
                    >Add a New Starr</Link>
                </div>
      </div>

    )

}
export default Starrs