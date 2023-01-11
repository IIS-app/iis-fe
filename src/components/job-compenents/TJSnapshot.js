import { Link } from 'react-router-dom';
import { requestDeleteTargetJob } from '../requests/JobRequests'
import { PlusCircle } from '@styled-icons/bootstrap/PlusCircle'
import { FolderPlus } from '@styled-icons/bootstrap/FolderPlus'
import { EyeOutline } from '@styled-icons/evaicons-outline/EyeOutline'
import { RemoveCircleOutline } from '@styled-icons/material/RemoveCircleOutline'
import { Edit2Outline } from '@styled-icons/evaicons-outline/Edit2Outline'
import { EditOutline } from 'styled-icons/evaicons-outline';


export const TJSnapshot = ({ token, job }) => {

    return (
        <div className="container-job">
            <div className='snapshot'></div>
                <div className='snapshot-section'>
                    <div className="list-job" >{`${job.title} at ${job.company_title}`}</div>
                    <div className='created-date'><em>{` added on ${job.created_at}`}</em></div>
                </div>
                <div style={{maxWidth: ''}}></div>
                <div className="container-action-links">
                    <Link 
                        key={`${job.pk}.edit`}
                        to={`/targetjobs/edit/${job.pk}`}                        
                        id="job-edit"
                        className="button-action"
                        ><Edit2Outline className="icon"/>
                    </Link>
                    <Link
                        key={`${job.pk}.view`}
                        to={`/targetjobs/${job.pk}`}
                        id="job-view"
                        className="button-action"
                        ><EyeOutline className='icon'/>
                    </Link>
                    <Link
                        key={`${job.pk}.delete`}
                        to="#"
                        id="job-delete"
                        className="button-action"
                        onClick={() => requestDeleteTargetJob(token, job.pk)}
                        ><RemoveCircleOutline className='icon'/>
                    </Link>
            </div>
        </div>
    )
}