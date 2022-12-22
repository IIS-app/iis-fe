import { useState } from 'react';
import { useNavigate } from 'react-router';
import { requestCreateWin } from './Requests';
import { requestListWins } from './Requests';
import { Link } from 'react-router-dom'

export const WinForm = ({token}) => {
    const [winId, setWinId] = useState(null)
    const [winTitle, setWinTitle]= useState('');
    const [winDescription, setWinDescription]= useState('');
    const [winDate, setWinDate] = useState('');
    const [winPicture, setWinPicture] = useState('')
    const [error, setError] = useState(null);
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        setError(null)
        requestCreateWin(token, winTitle, winDescription, winDate, winPicture)

        .then((res) => {
            setWinId(res.data.id)
            // navigate('/wins')
        })
        .catch((error) => {
        setError(error.message)
        })
    }

    return (
        <div className='container-form'>
        {error && <div className="error">{error}</div>}
            <h2>What will you be celebrating today?</h2>
            <form className='form win' id='form-win' onSubmit={handleSubmit}>
                <fieldset style={{border: 'solid', width:'88%', }}>
                    <legend>Celebrate You!</legend>
                    <label htmlFor="winTitle">Add a Name for Your Win.</label>
                    <div className='control'>
                        <input 
                            type="text"
                            id="winTitle"
                            className='input'
                            autoFocus
                            autoComplete='off'
                            value={winTitle}
                            maxLength={200}
                            onChange={(e) => setWinTitle(e.target.value)}
                            />
                    </div>
                    <label htmlFor='winDate'>Provide a Date for the Event.</label>
                    <div className='control'>
                        <input 
                            className='text'
                            value={winDate}
                            onChange={(e) => setWinDate(e.target.value)}
                            id='win-date'
                            type='date'
                            autoComplete='off'
                            name='winDate'
                        />
                    </div>
                    <label htmlFor='winDescription'>Describe the Circumstances of the Event. </label>
                    <div className='control'>
                        <textarea 
                            className='textarea'
                            value={winDescription}
                            onChange={(e) => setWinDescription(e.target.value)}
                            id='winDescription'
                            type='text'
                            autoComplete='off'
                            maxLength={1000}
                            name='winDescription'
                        />
                    </div>
                    <label htmlFor='winPicture'>Provide any Visuals</label>
                    <div className='control'>
                        <input 
                            className='file upload'
                            value={winPicture}
                            onChange={(e) => setWinPicture(e.target.value)}
                            id='winPicture'
                            type='file'
                            autoComplete='off'
                            name='winPicture'
                            multiple
                        />
                    </div>
                </fieldset> 
                <div className='control'>
                    <label htmlFor='submit' className='label'></label>
                    <input
                        id='submit'
                        to="/wins"
                        className='button submit'
                        type='submit'
                        value='Save My Work!'
                    />
                </div>
            </form>
        </div>
    )
}



                