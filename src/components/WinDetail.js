import { useState, useEffect } from 'react';
import { requestWinDetail } from './Requests';
import { requestListWins } from './Requests';
import { Link, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const WinDetail = (token) => {
    const location = useLocation();
    const { pk } = location.state.win
    const { title } = location.state.win
    const { occured_date } = location.state.win
    const { win } = location.state.win
    const { win_picture } = location.state.win
    const [winDetail, setWinDetail] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWin = async () => {
            try {
                const res = await requestWinDetail(token, pk);
                setWinDetail(res.data);
                console.log(res.data);
            } 
            catch (error) {
                setError(error.message);
            }
        };
    
        fetchWin();
    }, [pk, token]);
    
    if (error) {
        return <div className="error">{error}</div>;
    }
    
    if (!win) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className='container-list'>
        {error && <div className="error">{error}</div>}
            <h2>Review the Details of Your Win</h2>
                <ul className="detail record" key={pk}>
                    <li>{title}</li>
                    <li>{occured_date}</li>
                    <li>{win}</li>
                    <img src={win_picture} alt={title} />
                    <Link 
                        to={`/wins/edit/${pk}`}
                        id="win-list-edit"
                        className="button edit"
                        ></Link>
                </ul>
        </div>
    )
}