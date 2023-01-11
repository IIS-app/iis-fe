import { useState } from 'react';
import { Link } from 'react-router-dom';
import { requestDeleteStarr } from '../requests/StarrRequests';
import { EyeOutline } from '@styled-icons/evaicons-outline/EyeOutline'
import { RemoveCircleOutline } from '@styled-icons/material/RemoveCircleOutline'
import { Edit2Outline } from '@styled-icons/evaicons-outline/Edit2Outline'


export const StarrSnapshot = ({ token, starr }) => {
    const [isComplete, setIsComplete] = useState('')

    const handleDelete = () => {
        requestDeleteStarr( token )
            .then(response => {
                if (response.status === 204) {
                    // Successfully deleted starr
                    setIsComplete(true)
                } else {
                    // Handle error
                }
            })
        }

    return (
        <div className="container-starr">
                <div className="list-starr">
                        {`${starr.question}`}
                </div>          
                <div className='container-action-links'>
                    <Link 
                        key={`${starr.pk}.edit`}
                        to={`/starrs/edit/${starr.pk}`}                        
                        id="starr-edit"
                        className="button-action"
                        ><Edit2Outline className="icon"/>
                    </Link>
                    <Link
                        key={`${starr.pk}.view`}
                        to={`/starrs/${starr.pk}`}
                        id="starr-view"
                        className="button-action"
                        ><EyeOutline className='icon'/>
                    </Link>
                    <Link
                        key={`${starr.pk}.delete`}
                        to='starrs'
                        id="starr-delete"
                        className="button-action"
                        onClick={handleDelete}
                        ><RemoveCircleOutline className='icon'/>
                    </Link>
                </div>
            </div>
    )
}