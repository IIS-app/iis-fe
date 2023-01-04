import { useState, useEffect } from 'react';
import { requestListWins } from '../requests/WinRequests';
import { requestDossierDetail } from '../requests/DossierRequests';
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
    overflow: hidden;
    border: white 1px;
    height: min-content;
`
const LeftStyledDroppable = styled.div`
    width: 45%;
    height: 300px;
    margin: 10px;
    border:  black solid 2px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #36454e;
    `
    
    const StyledDroppable = styled.div`
    background:#36454e;
    border:  black solid 2px;
    display: flex;
    flex-direction: column;
    width: 45%;
    height: 300px;
    flex: 1;
    justify-content: space-around;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    overflow: hidden;
    overflow-y: scroll;
    `
    const StyledDraggable = styled.div`
    userSelect: 'none';
    padding: 8px;
    margin: 8px 0 8px 0;
    background: #96FF7D;
    border-radius: 5px;
    border: 1px ${props => (props.isDragging ? 'dashed #4099ff' : 'solid #ddd')};
    list-style: none;
    flex-direction: column;
    display: flex;
    overflow-y: scroll;
    font-size: smaller;
    color: #28353c;
    font-weight: 600;
    `

    const ColumnTitle = styled.h3`
    color: black;
    text-align: center;
    margin: 10px 0;
    `;

//MAIN FUNCTION EXPORT
export const Dossier = ({ token }) => {
    const { pk } = useParams();
    const [wins, setWins] = useState([]);
    const [win, setWin] = useState([]);
    const [starrs, setStarrs] = useState([]);
    const [dossier, setDossier] = useState ([]);
    const [items, setItems] = useState ([]);
    const [item, setItem] = useState ([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isDraggingOver, setIsDraggingOver] = useState(false);

    // GET LIST OF WINS - drag ✅ 
    useEffect(() => {
        setError(null);
        setIsLoading(true);
        requestListWins(token)
            .then((res => { setWins(res.data) }))
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    }, [token])

    // GET DOSSIER CONTENTS - drag ✅ 
    useEffect(() => {
        setError(null);
        setIsLoading(true);
        requestDossierDetail(token)
            .then(({ data }) => { setDossier(data) })
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    }, [token])


    // DND verify drag destination and update arrays
    const onDragEnd = (result) => {
        // check not dropped outside the list      
        if (!result.destination) {
            return;
        }
        // // is drop in dossier container
        // if (result.destination.droppableId === "dossier") {
        //     switch (result.type) {
        //         case "win":
        //             // remove dragged win from win container
        //             const newWins = wins.filter(win => win.pk !== result.draggableId);
        //             setWins(newWins);      
        //             // add win to dossier container
        //             let newDossierItems = dossier.concat({
        //                 key: result.draggableId,
        //                 type: "win" 
        //             });
        //             setDossier(newDossierItems);
        //             // break;
        //         // case "starr":
        //         //     // remove dragged starr from starr container
        //         //     const newStarrs = starrs.filter(starr => starr.pk !== result.draggableId);
        //         //     setStarrs(newStarrs);

        //         //     // add starr to dossier container
        //         //     newDossierItems = dossier.concat({
        //         //         key: result.draggableId,
        //         //         type: "starr"
        //         //     });
        //         //     setDossier(newDossierItems);
        //         //     break;
        //         default:
        //             // break;
        //     }
        // }
    }

    return (
        <ErrorBoundary>
            <DragDropContext>
                <ParentContainer>
                    {/* dossier droppable container */}
                    <Droppable droppableId="dossier">
                        {(provided, snapshot) => (
                            <LeftStyledDroppable
                                ref={provided.innerRef}
                                {...provided.droppableProps}>
                                <ColumnTitle>Drop Items Here</ColumnTitle>
                                {/* map through contents of dossier */}
                                {items ? items.map((item, index) => (
                                    // actual library draggable container
                                    <Draggable
                                        key={item.pk}
                                        draggableId={`${item.pk}`}
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
                                                    <li className="content-dossier">{`${dossier.item}`}</li>
                                                </StyledDraggable>
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Draggable>
                                )) : null}

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