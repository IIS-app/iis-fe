import { Link } from 'react-router-dom';
import { requestDeleteTargetJob } from '../requests/JobRequests'
import { PlusCircle } from '@styled-icons/bootstrap/PlusCircle'
import { FolderPlus } from '@styled-icons/bootstrap/FolderPlus'
import { EyeOutline } from '@styled-icons/evaicons-outline/EyeOutline'
import { RemoveCircleOutline } from '@styled-icons/material/RemoveCircleOutline'
import { Edit2Outline } from '@styled-icons/evaicons-outline/Edit2Outline'


export const TJSnapshot = ({ token, job }) => {

    return (
        <div className="container-job">
            <li className="list-job" >{`${job.title} at ${job.company} added on ${job.created_at}`}</li>
            <div className="container-action-links">
                <Link 
                    key={`${job.pk}.edit`}
                    to={`/targetjobs/edit/${job.pk}`}                        
                    id="job-edit"
                    className="button-action"
                    >📝
                </Link>
                <Link
                    key={`${job.pk}.view`}
                    to={`/targetjobs/${job.pk}`}
                    id="job-view"
                    className="button-action"
                    >👀
                </Link>
                <Link
                    key={`${job.pk}.delete`}
                    to="#"
                    id="job-delete"
                    className="button-action"
                    onClick={() => requestDeleteTargetJob(token, job.pk)}
                    title={`WARNING this will remove: "${job.title}!"`}
                    >❌
                </Link>
            </div>
        </div>
    )
}