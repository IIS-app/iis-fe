import { useState } from 'react';
import { Link } from 'react-router-dom';


export const WinSnapshot = ({ win }) => {
    const [isComplete, setIsComplete] = useState('')

    return (
        <>
            <li className="list-win" >{win.title}</li>
            <li className="list-win" >{win.occured_date}</li>
            {/* {win.win_picture ? <img key={index} src={win.win_picture} alt={win.title} /> :''} */}
            <Link 
                key={`${win.pk}.edit`}
                to={`/wins/edit/${win.pk}`}                        
                id="win-list-edit"
                className="button-edit"
                >Edit this Win</Link>
            <Link
                key={`${win.pk}.view`}
                to={`/wins/${win.pk}`}
                id="win-list-detail"
                className="button-view"
                >View Win Details</Link>
        </>
    )
}