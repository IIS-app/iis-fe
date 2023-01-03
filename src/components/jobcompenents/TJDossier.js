import { useState, useEffect } from 'react';
import { requestListWins } from '../requests/WinRequests';
import { Link, useParams } from 'react-router-dom';
import  ErrorBoundary  from './ErrorBoundary'
import styled from 'styled-components'
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';


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


//MAIN FUNCTION EXPORT
export const TJDossier = ({token}) => {
    const { pk } = useParams()
    const [wins, setWins] = useState([])
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setError(null);
        setIsLoading(true);
        requestListWins(token)
            .then((res => {setWins(res.data)}))   
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    },[token])

    //part of the example code also
    const onDragEnd = (result) => {
        // dropped outside the list
            if(!result.destination) {
                return; 
            }
        }

    return (
        <ErrorBoundary>
        <DragDropContext>
            <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                    <div ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)} {...provided.droppableProps}>
                        {wins ? wins.map((win, index) => (
                            <Draggable
                                key={win.pk}
                                draggableId={`${win.pk}`}
                                index={index}
                                onDragEnd={onDragEnd}
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
                                            <li className="list-win">{`${win.title} on ${win.occured_date}`}</li>
                                        </div>
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Draggable>
                        )) : null}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
        </ErrorBoundary>
    )
}