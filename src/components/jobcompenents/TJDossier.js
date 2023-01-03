import { useState, useEffect } from 'react';
import { requestTJDetail } from '../requests/JobRequests';
import { Link, useParams } from 'react-router-dom';
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
export const TJDossier = () => {


    //part of the example code also
    const onDragEnd = (result) => {
        // dropped outside the list
            if(!result.destination) {
                return; 
            }
        }


    return (
        <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='droppable'>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                    {...provided.droppableProps}
                >
                    <Draggable key='100' draggableId={'100'} index={1}>
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

    )
}