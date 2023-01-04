import { useState } from 'react';
import { Link } from 'react-router-dom';
import { requestDeleteTargetCompany } from '../requests/CompanyRequests'


export const TCSnapshot = ({ token, company }) => {

    return (
        <div className="container-targetco">
            <li className="list-targetco" >{`${company.company_name} added on ${company.created_at}`}</li>
            <div className="container-action-links">
                <Link 
                    key={`${company.pk}.edit`}
                    to={`/targetcompany/edit/${company.pk}`}                        
                    id="win-edit"
                    className="button-action"
                    >📝
                </Link>
                <Link
                    key={`${company.pk}.view`}
                    to={`/targetcompany/${company.pk}`}
                    id="targetco-view"
                    className="button-action"
                    >👀
                </Link>
                <Link
                    key={`${company.pk}.delete`}
                    to="#"
                    id="targetco-delete"
                    className="button-action"
                    onClick={() => requestDeleteTargetCompany(token, company.pk)}
                    title={`WARNING this will delete "${company.company_name}" AND NO TAKE BACKS...YET`}
                    >❌
                </Link>
            </div>
        </div>
    )
}