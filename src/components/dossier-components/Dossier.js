import { useState, useEffect } from 'react';
import { requestDossierDetail } from '../requests/DossierRequests';
import { requestDossierPDF } from '../requests/DossierRequests';
import { Link, useParams } from 'react-router-dom';
import { Accordion } from './Accordion'
import { DossierItems } from './DossierItems'
import { AvailableItems } from './AvailableItems'
import { HappyBeaming } from '@styled-icons/boxicons-regular/HappyBeaming'


//MAIN FUNCTION EXPORT
export const Dossier = ({ token }) => {
    const { pk } = useParams();
    const [dossier, setDossier] = useState ([]);
    const [dossierId, setDossierId] = useState ('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [starrsD, setStarrsD] = useState([])
    const [winsD, setWinsD] = useState([])
    const [userQD, setUserQD] = useState([])
    const [dossierPdfUrl, setDossierPdfUrl] = useState('')
    
    
    // ACCORDION RELATED TESTS
    const [isActive, setIsActive] = useState(false);
    
    // HANDLER PASSED TO CHILD AVAILABLE ITEMS COMPONENT TO GET UPDATED DOSSIER IDS
    const updateDossier = (starrIds) => {
        setStarrsD(starrIds)
    }

    
    // GET DOSSIER CONTENTS
    useEffect(() => {
        setError(null);
        setIsLoading(true);
        requestDossierDetail(token, pk)
        .then(({ data }) => {
            setDossier(data);
            setStarrsD(data.starr_titles)
            setWinsD(data.win_titles)
            setUserQD(data.starr_titles)
        })
        .catch(error => setError(error.message))
        .finally(() => setIsLoading(false));
    }, [token]);
    
    useEffect(() => {
        requestDossierPDF(token, pk)
            .then(response => {
                setDossierPdfUrl(response.data.pdf_preview_url);
            });
    }, [token]);
            
    return (
        <>
        <div>
            <div className='container-dossier'>
                    <Accordion
                        key={dossier.id}
                        title={dossier.title}
                        content=
                            {<DossierItems 
                                key='dossier-items'
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
                        {<AvailableItems 
                            token={token}
                            key='available-items'
                            
                            starrsD={starrsD}
                            winsD={winsD}
                            userQD={userQD}
                            dossierId={dossier.id}
                            updateDossier={updateDossier}
                        />}
                />
            </div>
            </div>
        </div>
        </>
    );
};
