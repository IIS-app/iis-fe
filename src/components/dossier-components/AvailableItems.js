import { useState, useEffect } from 'react';
import { requestListWins } from '../requests/WinRequests';
import { requestListUserQuestions } from '../requests/QuestionRequests';
import { requestStarrs } from '../requests/StarrRequests';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components'
import { Accordion } from './Accordion'


//MAIN FUNCTION EXPORT
export const AvailableItems = ({ token, starrsD, winsD, userQD }) => {
    
    const [wins, setWins] = useState([]);
    const [userQ, setUserQ] = useState([]);
    const [starrs, setStarrs] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    const [isActive, setIsActive] = useState(false);
    
    // RELATED TO ADDING/REMOVING ITEMS FROM DOSSIER

    const [selectedStarr, setSelectedStarr] = useState();
    const [selectedWin, setSelectedWin] = useState();
    const [selectedUserQ, setSelectedUserQ] = useState();

    const starrIds = starrsD.map(starr => starr.id)
    const winIds = winsD.map(win => win.id)
    const userQIds = userQD.map(userQ => userQ.id)

    const handleSelectedStarr = () => {
        setSelectedStarr(prevSelectedStarr => !prevSelectedStarr)
        if(starrIds.includes(starr.pk)){
            setSelectedStarrs(selectedStarrIds.filter(id => id !== starr.pk))
        } else{
            setSelectedStarrIds([...selectedStarrIds, starr.pk])
        }
    }
    



     // GET LIST OF WINS
    useEffect(() => {
        setError(null);
        setIsLoading(true);
        requestListWins(token)
        .then((res => { setWins(res.data) }))
        .catch(error => setError(error.message))
        .finally(() => setIsLoading(false))
    }, [token])
        
        // GET LIST OF STARRs
    useEffect(() => {
        setError(null);
        setIsLoading(true);
        requestStarrs(token)
            .then((res => {
                setStarrs(res.data)
            }))   
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    },[token])

    // GET LIST OF QUESTIONS
    useEffect(() => {
        setError(null);
        setIsLoading(true);
        requestListUserQuestions(token)
            .then((res => {
                setUserQ(res.data)
            }))   
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    },[token])

    return (
        <div className='container-accordion'>
            <div className="accordion-parent">
                <Accordion 
                    key="avail-starrs"
                    title='Available STARRs' 
                    content={
                        starrs && starrs.map(starr => (
                            <Accordion 
                                key={starr.pk}
                                title={
                                    <div className="accordion-subtitle">
                                        <Checkbox 
                                            type="checkbox"
                                            checked=
                                            {if (starrIds.includes(starr.pk)
                                                ){handleSelectedStarr}}
                                            onChange=
                                            onClick={ev => ev.stopPropagation()}
                                        /> 
                                        {starr.question}
                                        {starr.is_draft}
                                    </div>}
                                content={starr.summary} 
                            />
                        ))
                    }
                />
            </div>
            <div className="accordion-parent">
                <Accordion
                    key="avail-wins"
                    title='Available Wins' 
                    content={
                        wins && wins.map(win => (
                            <Accordion 
                                key={win.pk}    
                                title={
                                    <div className="accordion-subtitle">
                                        <input 
                                            type="checkbox"
                                            checked={win.is_draft}
                                            onClick={ev => ev.stopPropagation()}
                                        /> 
                                        {win.title}
                                    </div>} 
                                content={win.win} />
                        ))
                    }
                />
            </div>
            <div className="accordion-parent">
                <Accordion
                    key="avail-iq"
                    title='Available Interview Questions' 
                    content={
                        userQ && userQ.filter(q => q.question_type === 'IQ').map(q => (
                            <Accordion 
                                key={q.pk} 
                                title={
                                    <div className="accordion-subtitle">
                                        <input 
                                            type="checkbox"
                                            checked={q.is_draft}
                                            onClick={ev => ev.stopPropagation()}
                                        /> 
                                        {q.question}
                                    </div>}
                                content={q.answer} 
                            />
                        ))}
                />
            </div>
            <div className="accordion-parent">
                <Accordion
                    key="avail-cq"
                    title='Available Company Questions' 
                    content={
                        userQ && userQ.filter(q => q.question_type === 'CQ').map(q => (
                            <Accordion 
                                key={q.pk} 
                                title={
                                    <div className="accordion-subtitle">
                                        <input 
                                            type="checkbox"
                                            checked={q.is_draft}
                                            onClick={ev => ev.stopPropagation()}
                                        /> 
                                        {q.question}
                                    </div>}
                                content={q.answer} 
                            />
                        ))}
                />
            </div>
        </div>
    )
}
