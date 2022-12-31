import { useState } from 'react';
import { Link } from 'react-router-dom';
import { requestDeleteWin } from '../requests/WinRequests'


export const WinSnapshot = ({ token, win }) => {
    const [isComplete, setIsComplete] = useState('')

    return (
        <div className="container-win">
            <li className="list-win" >{`${win.title} on ${win.occured_date}`}</li>
            <div className="container-action-links">
                <Link 
                    key={`${win.pk}.edit`}
                    to={`/wins/edit/${win.pk}`}                        
                    id="win-edit"
                    className="button-action"
                    >📝
                </Link>
                <Link
                    key={`${win.pk}.view`}
                    to={`/wins/${win.pk}`}
                    id="win-view"
                    className="button-action"
                    >👀
                </Link>
                <Link
                    key={`${win.pk}.delete`}
                    to="#"
                    id="win-delete"
                    className="button-action"
                    onClick={() => requestDeleteWin(token, win.pk)}
                    title={`WARNING this will delete your win: "${win.title}!" AND NO TAKE BACKS...YET`}
                    >❌
                </Link>
            </div>
        </div>
    )
}