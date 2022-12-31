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
border-radius: 5px;
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

// Styles Defined for the example code
    const grid = 8;

    const getItemStyle = (draggableStyle, isDragging) => ({
        // some basic styles to make the items look a bit nicer
        userSelect: 'none',
        padding: grid * 2,
        margin: `0 0 ${grid}px 0`,
        
        // change background colour if dragging
        background: isDragging ? 'lightgreen' : 'grey',
        
        // styles we need to apply on draggables
        ...draggableStyle
    });
    
    const getListStyle = (isDraggingOver) => ({
        background: isDraggingOver ? 'lightblue' : 'lightgrey',
        padding: grid,
        width: 250
    });

// primary component function
export const TargetJobDetail = ({ token }) => {
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

//part of the example code also
    const onDragEnd = (result) => {
    // dropped outside the list
        if(!result.destination) {
            return; 
        }
    }
        


    return (
        <>
            <div className='container-list'>
            {error && <div className="error">{ error }</div>}
                <h2>Review the Details of Your Job</h2>
                    <ul className="details-job" key={pk}>
                        <li key={`{pk}.title`}>{jobTitle}</li>
                        <li key={`{pk}.date`}>{jobAddedDate}</li>
                        <li key={`{pk}.company`}>{jobCompany}</li>
                        <li key={`{pk}.note`}>{jobNotes}</li>
                        <Link 
                            to={`/target-jobs/edit/${pk}`}
                            id="job-list-edit"
                            className="button-edit"
                        >Edit Job Detail</Link>
                    </ul>
            </div>
            {/* below is our code that could be a starting point? The example drag/drocontext below commented out code is to try and play with. */}
            {/* <DragDropContext>
                <Container>
                    <Droppable>
                        {(provided, snapshot) => (
                            <DossierContent>
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >Bring it on.
                                </div>
                            </DossierContent>
                        )}
                    </Droppable>
                    <Draggable>
                    <AvailableContent>
                        <p>Here is stuff to drag.</p>
                    </AvailableContent>
                    </Draggable>
                </Container>
            </DragDropContext> */}

        {/* The code below is example code that renders a white droppable area with a gray box on top  */}
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
            {(provided, snapshot) => (
                <div 
                ref={provided.innerRef} 
                style={getListStyle(snapshot.isDraggingOver)}
                {...provided.droppableProps}
                >
                    <Draggable
                    key="100"
                    draggableId={"100"}
                    index={1}
                    >
                    {(provided, snapshot) => (
                        <div>
                        <div
                            ref={provided.innerRef}
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                            style={getItemStyle(
                            provided.draggableProps.style,
                            snapshot.isDragging
                            )}
                        >
                            <p>blah</p>
                        </div>
                        {provided.placeholder}
                        </div>
                    )}
                    </Draggable>
                {provided.placeholder}
                </div>
            )}
            </Droppable>
        </DragDropContext>
        </>
    )
}