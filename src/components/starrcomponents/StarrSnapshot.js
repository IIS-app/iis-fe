import { useState } from 'react';
import { Link } from 'react-router-dom';
import { requestDeleteStarr } from '../requests/StarrRequests';

export const StarrSnapshot = ({ token, starr }) => {
    const [isComplete, setIsComplete] = useState('')

    return (
        <div className="container-starr">
            <li className="list-starr" >{`${starr.question}`}</li>           
            <div className="container-action-links">
                <Link 
                    key={`${starr.pk}.edit`}
                    to={`/starrs/edit/${starr.pk}`}                        
                    id="starr-edit"
                    className="button-action"
                    >📝
                </Link>
                <Link
                    key={`${starr.pk}.view`}
                    to={`/starrs/${starr.pk}`}
                    id="starr-view"
                    className="button-action"
                    >👀
                </Link>
                <Link
                    key={`${starr.pk}.delete`}
                    to="#"
                    id="starr-delete"
                    className="button-action"
                    onClick={() => requestDeleteStarr(token, starr.pk)}
                    title={`WARNING this will delete your starr: "${starr.question}!" AND NO TAKE BACKS...YET`}
                    >❌
                </Link>
            </div>
        </div>
    )
}