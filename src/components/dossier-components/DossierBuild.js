import { useState, useEffect } from 'react';
import { requestDossierDetail } from '../requests/DossierRequests'
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

    
    const ParentContainer = styled.div`
    display: flex;
    width: 95%;
    height: min-content;
    border: 1px solid black;
    justify-content: space-around;
    margin: auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background-color: #28353c;
    `;
    
    const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #c3fe96;
    border-radius: 10px;
    margin: 10px;
    `;
    
    const ColumnTitle = styled.h3`
    color: #c3fe96;
    text-align: center;
    margin: 10px 0;
    `;
    
    export const DossierBuild = () => {
        

    
        return (
            <ParentContainer>
                <ColumnContainer>Wins
                </ColumnContainer>
            </ParentContainer>
        )
}