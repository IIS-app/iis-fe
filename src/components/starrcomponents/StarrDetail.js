import { useState } from "react";
import { useNavigate } from "react-router";
import { requestStarrDetail} from "../requests/StarrRequests";
import { Link } from 'react-router-dom';

export const StarrDetail = (token, starrId, question, summary, situation, task, action, result, reflection)
    const [starrId, setStarrId] = useState(null)
    const [question, setQuestion] = useState('');
    const [summary, setSummary] = useState('');
    const [situation, setSituation]= useState('');
    const [task, setTask] = useState('');
    const [action, setAction] = useState('');
    const [result, setResult] = useState('');
    const [reflection, setReflection] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    return (
        <div className="container-list">
        {error && <div className="error">{error}</div>}
            <h3 The Nitty and Gritty of your Starrs></h3>
                <div className="button-submit">
                    <label htmlFor="editStarr" className="label"></label>
                    <input
                        id="editStarr"
                        to={`/starrs/${starrId}`}
                        className='button edit'
                        type="link"
                        value="Edit this Starr"
                    />
                </div>
        </div>
    )