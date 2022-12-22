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
            } catch (error) {
            setError(error.message);
            }
        };

        fetchData();
    }, [token]);


    
    return (
        <div className='container-main'>
        {error && <div className="error">{error}</div>}
            <h2>List of Wins</h2>
            <div className='container-list'>
            {wins ? wins.map(({title, occured_date})=> (
                <section className="list-item" key={winDate.id}>
                    <h4>{title}</h4>
                    <p>{occured_date}</p>
                </section>
                )) : null}

            </div>
                <div className='button-submit'>
                    <label htmlFor='editWin' className='label'></label>
                    <input
                        id='editWin'
                        to={`/wins/${winId}`}
                        className='button edit'
                        type='link'
                        defaultValue='Edit this Win'
                    />
                </div>
                <div className='container-button'>
                    <Link
                        to="/wins/add"
                        className='button add'
                        defaultValue='Add a New Win'
                    >Add a New Win</Link>
                </div>
        </div>
    )
}



                