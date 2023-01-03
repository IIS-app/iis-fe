import { useState, useEffect } from "react";
import { requestStarrDetail} from "../requests/StarrRequests";
import { Link, useParams } from 'react-router-dom';

export const StarrDetail = ({token}) => {
    const { pk } = useParams()
    const [StarrDetail, setStarrDetail] = useState([])
    const [question, setQuestion] = useState('');
    const [summary, setSummary] = useState('');
    const [situation, setSituation]= useState('');
    const [task, setTask] = useState('');
    const [action, setAction] = useState('');
    const [result, setResult] = useState('');
    const [reflection, setReflection] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        setError(null)
        setIsLoading(true)
        requestStarrDetail(token, { pk })
            .then(res => {
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


    return (
        <div className="container-list">
        {error && <div className="error">{error}</div>}
            <h3 The Nitty and Gritty of your Starrs></h3>
                <ul className="details-starr" key={pk}>
                    <li key={`{pk}.question`}>{question}</li>
                    <li key={`{pk}.summary`}>{summary}</li>
                    <li key={`{pk}.situation`}>{situation}</li>
                    <li key={`{pk}.task`}>{task}</li>
                    <li key={`{pk}.action`}>{action}</li>
                    <li key={`{pk}.result`}>{result}</li>
                    <li key={`{pk}.reflection`}>{reflection}</li>
                    <Link 
                        to={`/starrs/edit/${pk}`}
                        id="starrs-list-edit"
                        className="button-edit"
                    >Edit your STARR stories here.</Link>
                </ul>       
        </div>
    )
}