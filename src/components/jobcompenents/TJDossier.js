import { useState, useEffect } from 'react';
import { requestListWins } from '../requests/WinRequests';
import { Link, useParams } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary'
import styled from 'styled-components'
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import { displayName } from 'react-quill';
import { findByLabelText } from '@testing-library/react';

const ParentContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    border-radius: 5px;
    // overflow: hidden;
    border: white;
    height: min-content;
`
const LeftStyledDroppable = styled.div`
    width: 45%;
    height: 500px;
    margin: 20px;
    border:  black solid 5px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `

const StyledDroppable = styled.div`
    background:;
    display: flex;
    flex-direction: column;
    width: 45%;
    height: min-content;
    height: 500px;
    flex: 1;
    justify-content: space-around;
    margin: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    overflow: hidden;
    overflow-y: scroll;
    `
    const StyledDraggable = styled.div`
    userSelect: 'none';
    padding: 8px;
    margin: 0 0 8px 0;
    background: grey;
    border-radius: 5px;
    border: 1px ${props => (props.isDragging ? 'dashed #4099ff' : 'solid #ddd')};
    list-style: none;
    flex-direction: column;
    display: flex;
    overflow-y: scroll;
    `

    const ColumnTitle = styled.h3`
    color: black;
    text-align: center;
    margin: 10px 0;
    `;

//MAIN FUNCTION EXPORT
export const TJDossier = ({ token }) => {
    const { pk } = useParams();
    const [wins, setWins] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isDraggingOver, setIsDraggingOver] = useState(false);

    useEffect(() => {
        setError(null);
        setIsLoading(true);
        requestListWins(token)
            .then((res => { setWins(res.data) }))
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    }, [token])

    //part of the example code also
    const onDragEnd = (result) => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }
    }

    return (
        <ErrorBoundary>
            <DragDropContext>
                <ParentContainer>
                    <Droppable droppableId="dossier">
                        {(provided, snapshot) => (
                            <LeftStyledDroppable
                                ref={provided.innerRef}
                                {...provided.droppableProps}>
                                <ColumnTitle>Drop Items Here</ColumnTitle>
                                {provided.placeholder}
                            </LeftStyledDroppable>
                        )}
                    </Droppable>
                    <Droppable droppableId="items">
                        {(provided, snapshot) => (
                            <StyledDroppable ref={provided.innerRef} {...provided.droppableProps}>
                                {wins ? wins.map((win, index) => (
                                    <Draggable
                                        key={win.pk}
                                        draggableId={`${win.pk}`}
                                        index={index}
                                        onDragEnd={onDragEnd}
                                    >
                                        {(provided, snapshot) => (
                                            <div>
                                                <StyledDraggable
                                                    ref={provided.innerRef}
                                                    {...provided.dragHandleProps}
                                                    {...provided.draggableProps}
                                                >
                                                    <li className="list-win">{`${win.title} on ${win.occured_date}`}</li>
                                                </StyledDraggable>
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Draggable>
                                )) : null}
                                {provided.placeholder}
                            </StyledDroppable>
                        )}
                    </Droppable>
                </ParentContainer>
            </DragDropContext>
        </ErrorBoundary>
    )
}