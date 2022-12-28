import { useState, useEffect } from 'react';
import { requestListWins } from './Requests';
import { Link } from 'react-router-dom';
import { WinSnapshot } from './WinSnapshot'


export const Wins = ({token}) => {
    const [winId, setWinId] = useState(null)
    const [wins, setWins] = useState(null)
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
        <div className='container button'>
            <Link
                key="button-add"
                id='button-add'
                to="/wins/add"
                className='button-add'
            >Add a New Win</Link>
        </div>
        <div className='container-main'>
        {error && <div className="error">{error}</div>}
        <div className='container-main'>
            <h2>List of Wins</h2>
            <div className='container-list'>
            {wins ? wins.map(win => (
                <ul className="list">
                    <WinSnapshot key={win.pk} win={win}/>
                </ul>

                )) : null}
            </div>
        </div>
        </>
    )
}
