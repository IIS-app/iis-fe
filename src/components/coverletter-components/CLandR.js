import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Resumes } from './Resumes';
import { CoverLetters } from './CoverLetters';


export const CLandR = ({token}) => {

    return (
        <>
        <CoverLetters token={token} />
        <Resumes token={token} />
        </>
    )
}