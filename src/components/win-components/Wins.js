import { useState, useEffect } from 'react';
import { requestListWins } from '../requests/WinRequests';
import { Link } from 'react-router-dom';
import { WinSnapshot } from './WinSnapshot'


export const Wins = ({token}) => {
    const [wins, setWins] = useState([])
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setError(null);
        setIsLoading(true);
        requestListWins(token)
            .then((res => {setWins(res.data)}))   
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    },[token])

    return (
        <>
        <div className='container-button'>
            <Link
                key="button-add"
                id='button-add'
                to="/wins/add"
                className='button-add'
            >Add a New Win</Link>
        </div>
        {error && <div className="error">{error}</div>}
        <h2>List of Wins</h2>
        <div className='container-main' style={{border: 'solid 3px', borderRadius:'10px', width:'75%', padding: '10px' }}>
            <div className='container-list'>
                <ul key="win-info" className="list">
                    {wins ? wins.map(win => (
                        <WinSnapshot key={win.pk} win={win}/>
                        )) : null}
                </ul>
            </div>
        </div>
        </>
    )
}