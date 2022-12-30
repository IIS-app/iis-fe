import { useState, useEffect } from 'react';
import { requestWinDetail } from './Requests';
import { Link, useParams } from 'react-router-dom';

export const WinDetail = ({ token }) => {
    const { pk } = useParams()
    const [winTitle, setWinTitle] = useState('')
    const [winDate, setWinDate] = useState('')
    const [winDescription, setWinDescription] = useState('')
    const [winPicture, setWinPicture] = useState('')
    const [winDetail, setWinDetail] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        setError(null)
        setIsLoading(true)
        requestWinDetail(token, { pk })
            .then(res => {
                setWinDetail(res.data)
                setWinTitle(res.data.title)
                setWinDate(res.data.occured_date)
                setWinDescription(res.data.win)
                setWinPicture(res.data.win_picture)
            })
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    },[token, pk]);

    return (
        <div className='container-list'>
        {error && <div className="error">{ error }</div>}
            <h2>Review the Details of Your Win</h2>
                <ul className="details-win" key={pk}>
                    <li key={`{pk}.title`}>{winTitle}</li>
                    <li key={`{pk}.date`}>{winDate}</li>
                    <li key={`{pk}.desc`}>{winDescription}</li>
                    {winPicture ? <img key={`{pk}.pic`} src={winPicture} alt={winTitle} /> :''}
                    <Link 
                        to={`/wins/edit/${pk}`}
                        id="win-list-edit"
                        className="button-edit"
                    >Make My Win Better</Link>
                </ul>
        </div>
    )
}