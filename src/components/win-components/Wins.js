import { useState, useEffect } from 'react';
import { requestListWins } from '../requests/WinRequests';
import { Link } from 'react-router-dom';
import { WinSnapshot } from './WinSnapshot'
import { HappyBeaming } from 'styled-icons/boxicons-regular';



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
        <div 
            className='container-button'
            style={{display: 'flex', justifyContent: 'space-evenly', alignItems:'center'}}
        >
            <h2 className='main-title'>List of Wins</h2>
            <Link
                key="button-add"
                id='button-add'
                to="/wins/add"
                className='button-add'
                style={{width:'100px'}}
            >Add<HappyBeaming className='icon'/>
            </Link>
        </div>
        <div className='container-main'>
            <div className='container-list'>
                <ul key="win-info" className="list">
                    {wins ? wins.map(win => (
                        <WinSnapshot key={win.pk} win={win}/>
                        )) : null}
                </ul>
            </div>
        </div>
        {error && <div className="error">{error}</div>}
        </>
    )
}