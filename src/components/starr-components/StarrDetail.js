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
            <h2 className="main-title"> Your STARR Details</h2>
                <div className="details-starr" key={pk}>
                    <p className="form-label-data" key={`{pk}.question`}>{`Title of STARR: ${question}`}</p>
                    <p className="form-label-data" key={`{pk}.summary`}>{`Summary:${summary}`}</p>
                    <p className="form-label-data" key={`{pk}.situation`}>{`Situation:${situation}`}</p>
                    <p className="form-label-data" key={`{pk}.task`}>{`Task:${situation}`}</p>
                    <p className="form-label-data" key={`{pk}.action`}>{`Action:${situation}`}</p>
                    <p className="form-label-data" key={`{pk}.result`}>{`Result:${situation}`}</p>
                    <p className="form-label-data" key={`{pk}.reflection`}>{`Reflection:${situation}`}</p>
                    <Link 
                        to={`/starrs/edit/${pk}`}
                        id="starrs-list-edit"
                        className="button-edit"
                    >Edit STARR</Link>
                </div>       
        </div>
    )
}