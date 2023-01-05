import { useEffect, useState } from 'react';
import { requestUpdateWin } from '../requests/WinRequests';
import { requestWinDetail } from '../requests/WinRequests';
import { Link, useParams } from 'react-router-dom'

export const WinEdit = ({ token }) => {
    const { pk } = useParams()
    const [winDetail, setWinDetail] = useState([])
    const [winId, setWinId] = useState('')
    const [winTitle, setWinTitle]= useState('')
    const [winDescription, setWinDescription]= useState('')
    const [winDate, setWinDate] = useState('')
    const [winPicture, setWinPicture] = useState('', null)
    const [winLoadedPicture, setWinLoadedPicture] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        setError(null)
        setIsLoading(true)
        requestWinDetail(token, { pk })
        .then(res => {
            setWinId(res.data.pk)
            setWinDetail(res.data)
            setWinTitle(res.data.title)
            setWinDate(res.data.occured_date)
            setWinDescription(res.data.win)
            setWinLoadedPicture(res.data.win_picture)
            console.log(res)
            })
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    },[token, pk]);

    const handleSubmit = (e) => {
        e.preventDefault()
        setError(null)
        requestUpdateWin(token, { pk }, winTitle, winDescription, winDate, winPicture)
            .catch((error) => {
                setError(error.message)
        })
    }


    return (
        <div className='container-main'>
        {error && <div className="error">{error}</div>}
            <h2>What will you be celebrating today?</h2>
            <form className='form-win' id='form-win' onSubmit={handleSubmit}>
                <div className='container-form' style={{border: 'solid', width:'88%', }}>
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
                            maxLength={50}
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
                            className='file-upload'
                            onChange={(e) => setWinPicture(e.target.files[0])}
                            id='winPicture'
                            type='file'
                            autoComplete='off'
                            name='winPicture'
                            multiple
                        />
                        {winLoadedPicture ? <img src="https://assets-prd.ignimgs.com/2022/07/19/nicolas-cage-in-con-air-1658251738731.jpg" style={{ width: "200px"}} alt={winTitle} /> :''}

                    </div>
                </div> 
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



                