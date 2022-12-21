import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
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
    const navigate = useNavigate()


    useEffect =(() => {
        const url = 'https://internal-interview-service.onrender.com/wins/'
        axios.get(url,
            {headers: {
                Authorization: `Token ${token}`
                }
            }
        )
        .then(res => {
            setWins(res.data)
        })
        .catch((error) => {
            setError(error.message)
        })
    }, [token])

    
    return (
        <div className='container-main'>
        {error && <div className="error">{error}</div>}
            <h2>List of Wins</h2>
            <div className='container-list'>
            {wins.map(win => (
                <section>
                    <h4>{winTitle}</h4>
                    <p>{winDate}</p>
                </section>
                ))
            }

            </div>
                <div className='button-submit'>
                    <label htmlFor='editWin' className='label'></label>
                    <input
                        id='editWin'
                        to={`/wins/${winId}`}
                        className='button edit'
                        type='link'
                        value='Edit this Win'
                    />
                </div>
                <div className='container-button'>
                    <Link
                        to="/wins/add"
                        className='button add'
                        value='Add a New Win'
                    >Add a New Win</Link>
                </div>
        </div>
    )
}



                