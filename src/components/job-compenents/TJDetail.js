import { useState, useEffect } from 'react';
import { requestTargetJobDetail } from '../requests/JobRequests';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components'
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';

//style information 
const Container = styled.div `
display: flex;
margin: auto;
width: 95%;
height: min-content;
padding: 2px;
border: 1px black;
justify-content: space-around;
align-items: center;
box-shadow: 0 4px 8px 0 #C3FE96;
border-radius: 10px;
`

const DossierContent = styled.div `
width: 40%;
height: 500px;
border: 1px solid black;
overflow-y: scroll;
display: flex;
flex-direction: column;
align-items: center;
min-height: 100 px;
margin: 2px;
`;

const AvailableContent = styled.div`
width: 40%;
height: 500px;
border: 1px solid black;
overflow-y: scroll;
display: flex;
flex-direction: column;
align-items: center;
min-height: 100 px;
margin: 2px;
`;

// primary component function
export const TJDetail = ({ token }) => {
    const { pk } = useParams()
    const [jobTitle, setJobTitle] = useState('')
    const [jobCompany, setJobCompany] = useState('')
    const [jobNotes, setJobNotes] = useState('')
    const [jobAddedDate, setJobAddedDate] = useState('')
    const [jobDetail, setJobDetail] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        setError(null)
        setIsLoading(true)
        requestTargetJobDetail(token, { pk })
            .then(res => {
                setJobDetail(res.data)
                setJobTitle(res.data.title)
                setJobCompany(res.data.company)
                setJobNotes(res.data.notes)
                setJobAddedDate(res.data.created_date)
            })
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    },[token, pk]);


    return (
        <>
        <div className='container-list'>
            {error && <div className='error'>{error}</div>}
            <h2>Review the Details of Your Job</h2>
            <ul className='details-job' key={pk}>
                <li key={`{pk}.title`}>{jobTitle}</li>
                <li key={`{pk}.date`}>{jobAddedDate}</li>
                <li key={`{pk}.company`}>{jobCompany}</li>
                <li key={`{pk}.note`}>{jobNotes}</li>
                <Link
                    to={`/target-jobs/edit/${pk}`}
                    id='job-list-edit'
                    className='button-edit'
                >
                    Edit Job Detail
                </Link>
            </ul>
        </div>
        </>
    )
}