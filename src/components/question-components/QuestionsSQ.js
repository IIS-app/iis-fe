import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { requestListSQ } from '../requests/QuestionRequests'
import { PlusCircle } from '@styled-icons/bootstrap/PlusCircle'
import { QuestionForm } from './QuestionForm'
import { FileX } from 'styled-icons/bootstrap';


export const QuestionsSQ = ({token}) => {
    const [listSQ, setListSQ] = useState([])
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setError(null);
        setIsLoading(true);
        requestListSQ(token)
            .then((res => {
                setListSQ(res.data)
            }))   
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    },[token])

    const handleClick = (sq) => {
        navigate('/questions/use-sq', { state: { sq:sq } });
        }

    return (
        <>
        <h2>List of Suggested Questions</h2>
        <div className='container-main' style={{border: 'solid 3px', borderRadius:'10px', width:'75%', padding: '10px' }}>
            <div className='container-list'>
                    {listSQ ? listSQ.map(sq => (
                    <div 
                        key={`${sq.pk}`} className="list" style={{ display:"flex", justifyContent:"space-around" }}
                    >
                        <div key={sq.pk} className="list-sq">{`${sq.question_type}${sq.question}`}</div>
                        <div>
                            <PlusCircle 
                            key={`${sq.pk}.plus`}
                            className="icon"
                            onClick={() => handleClick(sq)}
                            />
                        </div>
                    </div>
                        )) : null}
            </div>
        </div>
        </>
    )
}
