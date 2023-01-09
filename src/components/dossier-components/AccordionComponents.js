import { useState, useEffect } from 'react';
import { requestListWins } from '../requests/WinRequests';
import { requestListUserQuestions } from '../requests/QuestionRequests';
import { requestStarrs } from '../requests/StarrRequests';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components'
import { Accordion } from './Accordion'


//MAIN FUNCTION EXPORT
export const AccordionComponents = ({ token }) => {
    const { pk } = useParams();
    const [wins, setWins] = useState([]);
    const [userQuestions, setUserQuestions] = useState([]);
    const [starrs, setStarrs] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // ACCORDION RELATED TESTS
    const [isActive, setIsActive] = useState(false);


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
                setUserQuestions(res.data)
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
                                            type="checkbox"
                                            checked={starr.is_draft}
                                            onClick={ev => ev.stopPropagation()}/> 
                                        {starr.question}
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
                        userQuestions && userQuestions.filter(q => q.question_type === 'IQ').map(q => (
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
                        userQuestions && userQuestions.filter(q => q.question_type === 'CQ').map(q => (
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
