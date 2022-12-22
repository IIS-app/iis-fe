import { useState, useEffect } from 'react';
import { requestCreateWin } from './Requests';
import { requestListWins } from './Requests';
import { Link } from 'react-router-dom';
import axios from 'axios';


export const Wins = ({token}) => {
    const [winId, setWinId] = useState(null)
    const [wins, setWins] = useState(null)
    const [winTitle, setWinTitle]= useState('');
    const [winDescription, setWinDescription]= useState('');
    const [winDate, setWinDate] = useState('');
    const [winPicture, setWinPicture] = useState('')
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
            const res = await requestListWins(token);
            setWins(res.data);
            console.log(res.data);
            } catch (error) {
            setError(error.message);
            }
        };

        fetchData();
    }, [token]);


    
    return (
        <>
        <div className='container main'>
        {error && <div className="error">{error}</div>}
            <h2>List of Wins</h2>
            <div className='container-list'>
            {wins ? wins.map(win => (
                <ul className="list-item" key={win.pk}>
                    <li key="winTitle">{win.title}</li>
                    <li key="winDate">{win.occured_date}</li>
                    {win.win_picture ? <img key="winPicture" src={win.win_picture} alt={win.title} /> :''}
                    <Link 
                        to={{
                            pathname: `/wins/edit/${win.pk}`,
                            state: { win }}}
                        id="win-list-edit"
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