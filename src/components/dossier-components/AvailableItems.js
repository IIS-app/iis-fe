import { useState, useEffect, Checkbox } from 'react';
import { requestListWins } from '../requests/WinRequests';
import { requestListUserQ } from '../requests/QuestionRequests';
import { requestStarrs } from '../requests/StarrRequests';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components'
import { Accordion } from './Accordion'


//MAIN FUNCTION EXPORT
export const AvailableItems = ({ token, starrsD, winsD, userQD, updateDossier }) => {
    
    const [wins, setWins] = useState([]);
    const [userQ, setUserQ] = useState([]);
    const [starrs, setStarrs] = useState([]);
    const [starr, setStarr] = useState([])
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    const [isActive, setIsActive] = useState(false);
    
    // RELATED TO ADDING/REMOVING ITEMS FROM DOSSIER

    const [selectedStarr, setSelectedStarr] = useState();
    const [selectedWin, setSelectedWin] = useState();
    const [selectedUserQ, setSelectedUserQ] = useState();

    const [starrIds, setStarrIds] = useState(starrsD.map(starr => starr.id))
    const [winIds, setWinIds] = useState(winsD.map(win => win.id))
    const [userQIds, setUserQIds] = useState(userQD.map(userQ => userQ.id))

    const handleSelectedStarr = () => {
        setSelectedStarr(prevSelectedStarr => !prevSelectedStarr)
        if(starrIds.includes(starr.pk)){
            setStarrIds(starrIds.filter(id => id !== starr.pk))
        } else{
            setStarrIds([...starrIds, starr.pk])
        }
    }

    const handleSaveDossier = () => {
        
    }

    // const handleSelectedWin = () => {
    //     setSelectedWin(prevSelectedWin => !prevSelectedWin)
    //     if(winIds.includes(win.pk)){
    //         setWinIds(winIds.filter(id => id !== win.pk))
    //     } else{
    //         setWinIds([...winIds, win.pk])
    //     }
    //     updateDossier(winIds)
    // }





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
        requestListUserQ(token)
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
                                        <input
                                            key={starr.pk}
                                            type='checkbox'
                                            checked=
                                            {starrIds.includes(starr.pk)}
                                            onChange={handleSelectedStarr}
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
