import { useState } from 'react';
import { useNavigate } from 'react-router';
import { requestCreateWin } from './Requests';
import { requestListWins } from './Requests';
import { Link } from 'react-router-dom';

export const WinDetail = ({token, winID, winTitle, winDescription, winDate, winPicture}) => {
    const [winId, setWinId] = useState(null)
    const [winTitle, setWinTitle]= useState('');
    const [winDescription, setWinDescription]= useState('');
    const [winDate, setWinDate] = useState('');
    const [winPicture, setWinPicture] = useState('')
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    
    // TODO: this is where I stopped, this is part of code for the Win Detail then reduce for Win List, will need to update inputs to Links will pick up AM 12/21
    return (
        <div className='container-list'>
        {error && <div className="error">{error}</div>}
            <h2>Review the Details of Your Win</h2>
            <h4></h4>
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
        </div>
    )
}
