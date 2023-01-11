import { useState } from 'react';
import { Link } from 'react-router-dom';
import { requestDeleteWin } from '../requests/WinRequests'
import { EyeOutline } from '@styled-icons/evaicons-outline/EyeOutline'
import { RemoveCircleOutline } from '@styled-icons/material/RemoveCircleOutline'
import { Edit2Outline } from '@styled-icons/evaicons-outline/Edit2Outline'


export const WinSnapshot = ({ token, win }) => {
    const [isComplete, setIsComplete] = useState('')

    return (
        <div className="container-win">
                        <li key={win.pk} className="list-win" >{`${win.title} on ${win.occured_date}`}</li>
                        <div className="container-action-links">
                            <Link 
                                key={`${win.pk}.edit`}
                                to={`/wins/edit/${win.pk}`}                        
                                id="win-edit"
                                className="button-action"
                                ><Edit2Outline className="icon"/>
                                </Link>
                            <Link
                                key={`${win.pk}.view`}
                                to={`/wins/${win.pk}`}
                                id="win-view"
                                className="button-action"
                                ><EyeOutline className='icon'/>
                                </Link>
                            <Link
                                key={`${win.pk}.delete`}
                                to="#"
                                id="win-delete"
                                className="button-action"
                                onClick={() => requestDeleteWin(token, win.pk)}
                                ><RemoveCircleOutline className='icon'/>
                                </Link>
                        </div>
        </div>
    )
}