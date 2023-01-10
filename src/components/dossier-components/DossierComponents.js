import { useState, useEffect } from 'react';
import { requestListWins } from '../requests/WinRequests';
import { requestListUserQuestions } from '../requests/QuestionRequests';
import { requestStarrs } from '../requests/StarrRequests';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components'
import { Accordion } from './Accordion'


//MAIN FUNCTION EXPORT
export const DossierComponents = ({ token, starrs, wins, userQ }) => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // ACCORDION RELATED TESTS
    const [isActive, setIsActive] = useState(false);


    return (
            <div className='container-accordion'>
            <div className="accordion-parent">
                <Accordion 
                    key="avail-starrs"
                    title='STARRs' 
                    content={
                        starrs && starrs.map(starr => (
                            <div className="accordion-item">
                                <div 
                                    key={starr.id}
                                    className="accordion-content"
                                    onClick={() => setIsActive(!isActive)}
                                >{starr.question}
                                </div>
                            </div>
                        ))}
                />
            </div>
            <div className="accordion-parent">
                <Accordion
                    key="avail-wins"
                    title='Wins' 
                    content={
                        wins && wins.map(win => (
                            <div className="accordion-item">
                                <div 
                                    key={win.id}
                                    className="accordion-title"
                                    onClick={() => setIsActive(!isActive)}
                                >{win.title}
                                </div>
                            </div>
                        ))}
                />
            </div>
            <div className="accordion-parent">
                <Accordion
                    key="avail-iq"
                    title='Practice Interview Questions' 
                    content={
                        userQuestions && userQuestions.filter(q => q.question_type === 'IQ').map(q => (
                            <Accordion key={q.pk} title={q.question} content={q.answer} />
                        ))}
                />
            </div>
            <div className="accordion-parent">
                <Accordion
                    key="avail-cq"
                    title='Potential Company Questions' 
                    content={
                        userQuestions && userQuestions.filter(q => q.question_type === 'CQ').map(q => (
                            <Accordion key={q.pk} title={`${q.question} `} content={q.answer} />
                        ))}
                />
            </div>
        </div>
    )
}
