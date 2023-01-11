import { useState } from 'react';
import { Link } from 'react-router-dom';
import { requestDeleteTargetCompany } from '../requests/CompanyRequests'
import { EyeOutline } from '@styled-icons/evaicons-outline/EyeOutline'
import { RemoveCircleOutline } from '@styled-icons/material/RemoveCircleOutline'
import { Edit2Outline } from '@styled-icons/evaicons-outline/Edit2Outline'
import { EditOutline } from 'styled-icons/evaicons-outline';


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
                    ><Edit2Outline className="icon"/>
                </Link>
                <Link
                    key={`${company.pk}.view`}
                    to={`/targetcompany/${company.pk}`}
                    id="targetco-view"
                    className="button-action"
                    ><EyeOutline className='icon'/>
                </Link>
                <Link
                    key={`${company.pk}.delete`}
                    to="#"
                    id="targetco-delete"
                    className="button-action"
                    onClick={() => requestDeleteTargetCompany(token, company.pk)}
                    ><RemoveCircleOutline className='icon'/>
                </Link>
            </div>
        </div>
    )
}