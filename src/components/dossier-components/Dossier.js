import { useState, useEffect } from 'react';
import { requestDossierDetail } from '../requests/DossierRequests';
import { Link, useParams } from 'react-router-dom';
import { Accordion } from './Accordion'
import { DossierComponents } from './DossierComponents'
import { AccordionComponents } from './AccordionComponents'


//MAIN FUNCTION EXPORT
export const Dossier = ({ token }) => {
    const { pk } = useParams();
    const [dossier, setDossier] = useState ([]);
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
                console.log({data})
            })
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false));
    }, [token]);

    const [currentStarrs, setCurrentStarrs] = useState([])



    
            
    return (
        <div>
            <div className='container-dossier'>
                    <Accordion
                        key={dossier.id}
                        title={dossier.title}
                        content=
                            {<DossierComponents 
                                key='dossier-components'
                                starrs={dossier.starr_titles}
                                wins={dossier.win_titles}
                                userQ={dossier.question_titles}
                            />}
                    />
                <div className='container-available'>
                    <Accordion
                        key={dossier.id}
                        title="Available Dossier Items"
                        content=
                            {<AccordionComponents 
                                token={token}
                                key='accordion-components'
                                starrsD={dossier && dossier.starr_titles.map(starr => starr.id)}
                                // winsD={dossier.win_titles.map(win => win.id)}
                                // userQD={dossier.question_titles.map(q => q.id)}
                            />}
                    />
                </div>
            </div>
        </div>
    );
};
