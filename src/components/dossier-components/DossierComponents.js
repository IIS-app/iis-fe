import { useState, useEffect } from 'react';
import { Accordion } from './Accordion'


//MAIN FUNCTION EXPORT
export const DossierComponents = ({ token, starrs, wins, userQ }) => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // ACCORDION RELATED TESTS
    const [isActive, setIsActive] = useState(false);
    console.log(starrs)

    return (
            <div className='container-accordion'>
            <div className="accordion-parent">
                <Accordion 
                    key="avail-starrs"
                    title='STARRs' 
                    content={
                        starrs && starrs.map(starr => (
                            <div key='ds-item' className="accordion-item">
                                <div 
                                    key={starr.id}
                                    className="accordion-content"
                                    onClick={() => setIsActive(!isActive)}
                                >{starr.title}{starr.id}
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
                                    key={win.iD}
                                    className="accordion-title"
                                    onClick={() => setIsActive(!isActive)}
                                >{win.title}{win.iD}
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
                        userQ && userQ.filter(q => q.question_type === 'IQ').map(q => (
                            <Accordion 
                                key={q.id} 
                                title={q.title} 
                                content={q.answer}
                            />
                        ))}
                />
            </div>
            <div className="accordion-parent">
                <Accordion
                    key="avail-cq"
                    title='Potential Company Questions' 
                    content={
                        userQ && userQ.filter(q => q.question_type === 'CQ').map(q => (
                            <Accordion 
                                key={q.id} 
                                title={q.title}
                                content={q.answer} />
                        ))}
                />
            </div>
        </div>
    )
}
