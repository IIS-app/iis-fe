import { useState, useEffect } from 'react';
import { requestTargetJobDetail } from '../requests/JobRequests';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Droppable, Draggable } from '@hello-pangea/dnd';



    const ParentContainer = styled.div`
        display: flex;
        width: 95%;
        height: min-content;
        border: 1px solid black;
        justify-content: space-around;
        margin: auto;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        border-radius: 5px;
        background-color: #28353c;
    `;

    const ColumnContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid #c3fe96;
        border-radius: 5px;
        margin: 10px;
    `;

    const ColumnTitle = styled.h3`
        color: #c3fe96;
        text-align: center;
        margin: 10px 0;
    `;

    export const TJDossierBuild2 = () => {
        return (
    <ParentContainer>
      <Droppable droppableId="cover-letters-resumes" type="cover-letter" accept={['cover-letter', 'resume']}>
        {(provided, snapshot) => (
          <ColumnContainer
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <ColumnTitle>Cover Letters and Resumes</ColumnTitle>
            {/* Render the cover letters and resumes here */}
            {provided.placeholder}
          </ColumnContainer>
        )}
      </Droppable>
      <Droppable droppableId="wins" type="win" accept="win">
        {(provided, snapshot) => (
          <ColumnContainer
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <ColumnTitle>Wins</ColumnTitle>
            {/* Render the wins here */}
            {provided.placeholder}
          </ColumnContainer>
        )}
      </Droppable>
      <Droppable droppableId="starrs" type="starr" accept="starr">
        {(provided, snapshot) => (
          <ColumnContainer
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <ColumnTitle>STARR Stories</ColumnTitle>
            {/* Render the STARR stories here */}
            {provided.placeholder}
          </ColumnContainer>
        )}
      </Droppable>
      <Droppable droppableId="questions" type="question" accept="question">
        {(provided, snapshot) => (
          <ColumnContainer
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <ColumnTitle>Questions</ColumnTitle>
            {/* Render the questions here */}
            {provided.placeholder}
          </ColumnContainer>
        )}
      </Droppable>
    </ParentContainer>
  );
}