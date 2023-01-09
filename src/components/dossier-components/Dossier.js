import { useState, useEffect } from 'react';
import { requestDossierDetail } from '../requests/DossierRequests';
import { Link, useParams } from 'react-router-dom';
import { Accordion } from './Accordion'
import { DossierComponents } from './DossierComponents'
import { AccordionComponents } from './AccordionComponents'


//MAIN FUNCTION EXPORT
export const Dossier = ({ token }) => {
    const { pk } = useParams();
    // const [wins, setWins] = useState([]);
    // const [userQuestions, setUserQuestions] = useState([]);
    const [selectedStarr, setSelectedStarr] = useState([]);
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
                setDossier(data)
                console.log(data)
                // setStarrId(dossier.data.starr_titles.id)
                ;
            })
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false));
    }, [token]);

    const [currentStarrs, setCurrentStarrs] = useState(dossier.starr_titles)
            
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
                    <AccordionComponents
                        token={token}
                        // passing the current dossier starrs in order to set checked state on available item list
                        currentStarrs = {setCurrentStarrs}
                    />
                </div>
            </div>
        </div>
    );
};
