import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { requestStarrs } from '../requests/StarrRequests';
import { StarrSnapshot } from './StarrSnapshot';
import { Stars } from '@styled-icons/bootstrap/Stars'


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
        <div 
            className='container-button'
            style={{display: 'flex', justifyContent: 'space-evenly'}}
        >
            <h2 className='main-title'>List of Starr Stories</h2>
            <Link
                key="button-add"
                id='button-add'
                to="/starrs/add"
                className='button-add'
                style={{width:'100px'}}
            >Add<Stars className='icon'/></Link>
        </div>
        {error && <div className="error">{error}</div>}
        <div className='container-main' >
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
