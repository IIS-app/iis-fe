import { useState, useEffect } from 'react';
import { requestListWins } from './Requests';
import { Link } from 'react-router-dom';


export const Wins = ({token}) => {
    const [winId, setWinId] = useState(null)
    const [wins, setWins] = useState(null)
    const [winTitle, setWinTitle]= useState('');
    const [winDescription, setWinDescription]= useState('');
    const [winDate, setWinDate] = useState('');
    const [winPicture, setWinPicture] = useState('')
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
        <div className='container-main'>
        {error && <div className="error">{error}</div>}
            <h2>List of Wins</h2>
            <div className='container-list'>
            {wins ? wins.map(win => (
                <ul className="list-item" key={win.pk}>
                    <li key="winTitle">{win.title}</li>
                    <li key="winDate">{win.occured_date}</li>
                    {win.win_picture ? <img key="winPicture" src={win.win_picture} alt={win.title} /> :''}
                    <Link 
                        to={`/wins/edit/${win.pk}`}                        id="win-list-edit"
                        className="button edit"
                        >Edit this Win</Link>
                    <Link
                        to={`/wins/${win.pk}`}
                        id="win-list-detail"
                        className="button view"
                        >View Win Details</Link>
                </ul>
                )) : null}

            </div>
                <div className='container button'>
                    <Link
                        id='button add win'
                        to="/wins/add"
                        className='button add'
                    >Add a New Win</Link>
                </div>
        </div>
        </>
    )
}