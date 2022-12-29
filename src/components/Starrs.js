import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { requestStarrs } from './Requests';
import { StarrForm } from './StarrForm';

export const Starrs = ({token}) => {
    const [starrId, setStarrId] = ('')
    const [starrs, setStarrs] = ('')
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setError(null);
        setIsLoading(true);
        requestStarrs(token)
            .then((res => {setStarrs(res.data)}))   
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    },[token])


    return (
        <>
        {error && <div className="error">{error}</div>}
        <div className='container-main'>
            <h2>STARRs List!</h2>
            <div className='container-list'>
            {starrs ? starrs.map(starr => (
                <ul className="list-item" key={starr.pk}>
                    <li key={starr.pk}>{starr.question}</li>
                    <li key={starr.pk}>{starr.summary}</li>
                    <Link 
                        to={`/starrs/edit/${starr.pk}`}
                        key={starr.pk}
                        id="starr-list-edit"
                        className="button-edit"
                        >Edit this STARR</Link>
                    <Link
                        to={`/starrs/${starr.pk}`}
                        id="starr-list-detail"
                        className="button-view"
                        >View STARR Details</Link>
                </ul>
                )) : null}

            </div>
                <div className='container-button'>
                    <Link
                        to="/starrform"
                        className='button-submit'
                        defaultValue='Add a New Starr to your Sky'
                    >Add a New Starr</Link>
                </div>
        </div>
        </>
    )

}
export default Starrs