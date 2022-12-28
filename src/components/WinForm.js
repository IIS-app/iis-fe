import { useState } from 'react';
import { useNavigate } from 'react-router';
import { requestCreateWin } from './Requests';
import { requestListWins } from './Requests';
import { Link, useParams } from 'react-router-dom'

export const WinForm = ({token}) => {
    const { pk } = useParams()
    const [winId, setWinId] = useState(null)
    const [winTitle, setWinTitle]= useState('')
    const [winDescription, setWinDescription]= useState('')
    const [winDate, setWinDate] = useState('')
    const [winPicture, setWinPicture] = useState()
    const [error, setError] = useState(null)
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
            <form className='form-win' id='form-win' onSubmit={handleSubmit}>
                <container-inputset style={{border: 'solid', width:'88%', }}>
                    <legend>Celebrate You!</legend>
                    <label className='form-label' htmlFor="winTitle">Add a Name for Your Win.</label>
                    <div className='container-input'>
                        <input 
                            type="text"
                            id="winTitle"
                            className='form-input-text'
                            autoFocus
                            autoComplete='off'
                            value={winTitle}
                            maxLength={200}
                            onChange={(e) => setWinTitle(e.target.value)}
                            />
                    </div>
                    <label className='form-label' htmlFor='winDate'>Provide a Date for the Event.</label>
                    <div className='container-input'>
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
                    <label className='form-label' htmlFor='winDescription'>Describe the Circumstances of the Event. </label>
                    <div className='container-input'>
                        <textarea 
                            className='input-textarea'
                            value={winDescription}
                            onChange={(e) => setWinDescription(e.target.value)}
                            id='winDescription'
                            type='text'
                            autoComplete='off'
                            maxLength={1000}
                            name='winDescription'
                        />
                    </div>
                    <label className='form-label' htmlFor='winPicture'>Provide any Visuals</label>
                    <div className='container-input'>
                        <input 
                            className='file upload'
                            value={winPicture}
                            onChange={(e) => setWinPicture(e.target.files[0])}
                            id='winPicture'
                            type='file'
                            autoComplete='off'
                            name='winPicture'
                            multiple
                        />
                    </div>
                </container-inputset> 
                <div className='container-input'>
                    <label htmlFor='submit' className='form-label'></label>
                    <input
                        id='submit'
                        to="/wins"
                        className='button-submit'
                        type='submit'
                        value='Save My Work!'
                    />
                </div>
            </form>
        </div>
    )
}



                