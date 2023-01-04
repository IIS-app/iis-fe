import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { requestStarrs } from '../requests/StarrRequests';
import { StarrSnapshot } from './StarrSnapshot';

export const Starrs = ({token}) => {
    const [starrs, setStarrs] = useState(null)
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
        <div className='container-button'>
            <Link
                key="button-add"
                id='button-add'
                to="/starrs/add"
                className='button-add'
            >Add a New Starr</Link>
        </div>
        {error && <div className="error">{error}</div>}
        <h2>List of Starr Stories</h2>
        <div className='container-main'>
            <div className='container-list'>
                <ul key="starr-info" className="list">
                    {starrs ? starrs.map(starr => (
                        <StarrSnapshot key={starr.pk} starr={starr}/>
                        )) : null}
                </ul>
            </div>
        </div>       
        </>
    )
}
