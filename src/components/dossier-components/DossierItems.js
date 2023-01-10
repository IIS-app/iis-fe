import { useState } from 'react';
import { Accordion } from './Accordion'


//MAIN FUNCTION EXPORT
export const DossierItems = ({ token, starrs, wins, userQ }) => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // ACCORDION RELATED TESTS
    const [isActive, setIsActive] = useState(false);
    console.log(starrs)

    return (
            <div className='container-accordion'>
            <div className="accordion-parent">
                {starrs && starrs.map((starr, index) => (
                    <Accordion 
                        key='dossier-starrs'
                        title='STARRs' 
                        content={<div key={starr.id}>{starr.title}</div>}
                    />
                    ))
                }
            </div>
            <div className="accordion-parent">
                {wins && wins.map((win, index) => (
                    <Accordion 
                        key='dossier-wins'
                        title='Wins' 
                        content={win.title}
                    />
                    ))
                }
            </div>
            <div className="accordion-parent">
                {/* <Accordion
                    key="avail-iq"
                    title='Practice Interview Questions' 
                    content={
                        userQ && userQ.filter(q => q.type === 'IQ').map(q => (
                            <Accordion 
                                key={q.id} 
                                title={q.title} 
                                content={q.answer}
                            />
                        ))}
                /> */}
                <Accordion
                    key="avail-q"
                    title='Company and Interview Questions' 
                    content={
                        userQ && userQ.map(q => (
                            <Accordion 
                                key={q.id} 
                                title={'questions'} 
                                content={q.title}
                            />
                        ))}
                />
            </div>
            {/* <div className="accordion-parent">
                <Accordion
                    key="avail-cq"
                    title='Potential Company Questions' 
                    content={
                        userQ && userQ.filter(q => q.type === 'CQ').map(q => (
                            <Accordion 
                                key={q.id} 
                                title={q.title}
                                content={q.answer} />
                        ))}
                />
            </div> */}
        </div>
    )
}
