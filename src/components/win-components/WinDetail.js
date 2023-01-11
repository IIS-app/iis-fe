import { useState, useEffect } from 'react';
import { requestWinDetail } from '../requests/WinRequests';
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
            <h2 className='main-title'>Review the Details of Your Win</h2>
                <div className="details-win" key={pk}>
                    <p className="form-label-data" key={`{pk}.win`}>{`Win Title: ${winTitle}`}</p>
                    {/* <p className="form-label-data" key={`{pk}.occurence_date`}>{`Win Date: ${winTitle}`}</p> */}
                    <p className="form-label-data" key={`{pk}.win_description`}>{`Win Description: ${winDescription}`}</p>
                    {winPicture ? <img key={`{pk}.pic`} src={winPicture} alt={winTitle} /> :''}
                    <Link 
                        to={`/wins/edit/${pk}`}
                        id="win-list-edit"
                        className="button-edit"
                        >Edit Win Better</Link>
                </div>
                        {error && <div className="error">{ error }</div>}
        </div>
    )
}