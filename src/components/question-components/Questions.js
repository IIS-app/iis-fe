import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { requestListSQ } from '../requests/QuestionRequests'
import { requestListUserQ } from '../requests/QuestionRequests'
import { QuestionsSQ } from './QuestionsSQ'
import { PlusCircle } from '@styled-icons/bootstrap/PlusCircle'
import { Accordion } from '../dossier-components/Accordion'
import { QuestionDiamondFill } from '@styled-icons/bootstrap/QuestionDiamondFill'
import { Edit2Outline, EyeOutline } from 'styled-icons/evaicons-outline';
import { RemoveCircle } from 'styled-icons/ionicons-outline';



export const Questions = ({token}) => {
    const [sq, setSQ] = useState([])
    const [userQ, setUserQ] = useState([])
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setError(null);
        setIsLoading(true);
        requestListUserQ(token)
            .then((res => {setUserQ(res.data)}))   
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    },[token])

    return (
        <>
            <div className='container-accordion'>
            <div 
            className='container-button'
            style={{display: 'flex', justifyContent: 'space-evenly'}}
        >            
                <h2 className='main-title'>List of User Questions</h2>
            <Link
                key="button-add"
                id='button-add'
                to="/question/add"
                className='button-add'
                style={{width:'100px'}}
            >Add<QuestionDiamondFill className='icon'/></Link>
            </div>
                    <div className="accordion-parent">
                        <Accordion
                            key="avail-iq"
                            title='Available Interview Questions' 
                            content={
                                userQ && userQ.filter(q => q.question_type === 'IQ').map(q => (
                                    <Accordion 
                                        key={q.pk} 
                                        title={q.question}
                                        content={q.answer} />
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
                                        title={q.question}
                                        content={q.answer} />
                                    ))}
                        />
                    </div>
            <QuestionsSQ token={token} />
    </div>
        </>
    )
}