import { useState } from 'react';
import { Link } from 'react-router-dom';
import { requestDeleteTargetJob } from '../requests/JobRequests'


export const TJSnapshot = ({ token, job }) => {

    return (
        <div className="container-job">
            <li className="list-job" >{`${job.title} at ${job.company} added on ${job.created_date}`}</li>
            <div className="container-action-links">
                <Link 
                    key={`${job.pk}.edit`}
                    to={`/jobs/edit/${job.pk}`}                        
                    id="job-edit"
                    className="button-action"
                    >📝
                </Link>
                <Link
                    key={`${job.pk}.view`}
                    to={`/jobs/${job.pk}`}
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
                    title={`WARNING this will delete your 🎯 Job: "${job.title}!" AND NO TAKE BACKS...YET`}
                    >❌
                </Link>
                {/* <Link
                    key={`${job.pk}.view`}
                    to={`/jobs/${job.pk}`}
                    id="job-view"
                    className="button-dossier"
                    alt="Click here to open Dossier"
                    >📂
                </Link> */}
            </div>
        </div>
    )
}