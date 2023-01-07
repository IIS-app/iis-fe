import { useState, useEffect } from 'react';
import { requestListWins } from '../requests/WinRequests';
import { requestDossierDetail } from '../requests/DossierRequests';
import { requestStarrs } from '../requests/StarrRequests';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components'
import { Accordion } from './Accordion'
import { Wind } from 'styled-icons/feather';


//MAIN FUNCTION EXPORT
export const Dossier = ({ token }) => {
    const { pk } = useParams();
    const [wins, setWins] = useState([]);
    const [win, setWin] = useState([]);
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
    },[token, starrs, starrTitle, starrSummary])

    // GET DOSSIER CONTENTS
    useEffect(() => {
        setError(null);
        setIsLoading(true);
        requestDossierDetail(token)
            .then(({ data }) => {
                // const { title, job, resume, cover_letter, starrs, questions, wins, draft } = data;
                setDossier(data[0] || {});
            })
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false));
    }, [token]);


            
    return (
        <div>
            <h1>Available Dossier Items</h1>
            <div className="accordion-parent">
                <Accordion 
                    title='Available STARRs' 
                    content={
                        starrs && starrs.map(starr => (
                            <Accordion key={starr.pk} title={starr.question} content={starr.summary} />
                        ))}
                />
            </div>
            <div className="accordion-parent">
                <Accordion 
                    title='Available Wins' 
                    content={
                        wins && wins.map(win => (
                            <Accordion key={win.pk} title={win.title} content={win.win} />
                        ))}
                />
            </div>
        </div>
    );
};
