import { useState, useEffect } from 'react';
import { requestDossierDetail } from '../requests/DossierRequests';
import { Link, useParams } from 'react-router-dom';
import { Accordion } from './Accordion'
import { DossierComponents } from './DossierComponents'
import { AccordionComponents } from './AccordionComponents'


//MAIN FUNCTION EXPORT
export const Dossier = ({ token }) => {
    const { pk } = useParams();
    const [wins, setWins] = useState([]);
    const [userQuestions, setUserQuestions] = useState([]);
    const [starrs, setStarrs] = useState([]);
    const [starrTitle, setStarrTitle] = useState([]);
    const [starrSummary, setStarrSummary] = useState([]);
    const [dossier, setDossier] = useState ([]);
    const [items, setItems] = useState ([]);
    const [item, setItem] = useState ([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // ACCORDION RELATED TESTS
    const [isActive, setIsActive] = useState(false);


    // GET DOSSIER CONTENTS
    useEffect(() => {
        setError(null);
        setIsLoading(true);
        requestDossierDetail(token)
            .then(({ data }) => {
                setDossier(data);
                console.log(data)
                // setStarrId(dossier.data.starr_titles.id)
            })
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false));
    }, [token]);


        console.log(dossier.wins_titles)
        console.log(dossier.starr_titles)
        const [currentStarrs, setCurrentStarrs] = useState(dossier.starr_titles)
        console.log(currentStarrs)


    
            
    return (
        <div>
            <div className='container-dossier'>
                <div className="accordion-dossier">
                    <Accordion
                        key={dossier.id}
                        title={dossier.title}
                        content=
                            {<DossierComponents 
                                key='dossier-components'
                                starrs={dossier.starr_titles}
                                wins={dossier.win_titles}
                                userQuestions={dossier.question_titles}
                            />}
                    />
                </div>
                <div className='accordion-components'>
                    <Accordion
                        key={dossier.id}
                        title="Available Dossier Items"
                        content=
                            {<AccordionComponents 
                                token={token}
                                key='accordion-components'
                                starrsD={dossier.starr_titles}
                                winsD={dossier.win_titles}
                                userQD={dossier.question_titles}
                            />}
                    />
                </div>
            </div>
        </div>
    );
};
