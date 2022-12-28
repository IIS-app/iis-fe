import { useState, useEffect } from 'react';
import { requestListWins } from './Requests';
import { Link } from 'react-router-dom';
import { WinForm } from './WinForm';


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
        {error && <div className="error">{error}</div>}
        <div className='container-main'>
            <h2>List of Wins</h2>
            <div className='container-list'>
            {wins ? wins.map(win => (
                <ul className="list-item" key={win.pk}>
                    <li key={win.pk}>{win.title}</li>
                    <li key={win.pk}>{win.occured_date}</li>
                    {win.win_picture ? <img key={win.pk} src={win.win_picture} alt={win.title} /> :''}
                <Link 
                    to={`/wins/edit/${win.pk}`}                        id="win-list-edit"
                    className="button-edit"
                    >Edit this Win</Link>
                <Link
                    to={`/wins/${win.pk}`}
                    id="win-list-detail"
                    className="button-view"
                    >View Win Details</Link>
                </ul>

                )) : null}

            </div>
                <div className='container-button'>
                    <Link
                        to="/winform"
                        className='button-submit'
                        defaultValue='Add a win'
                    >Add a Win</Link>
                </div>
        </div>
        </>
    )
}
export default Wins