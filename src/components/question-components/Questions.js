import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { requestListSQ } from '../requests/QuestionRequests'
import { QuestionsSQ } from './QuestionsSQ'
import { PlusCircle } from '@styled-icons/bootstrap/PlusCircle'


export const Questions = ({token}) => {
    const [sq, setSQ] = useState([])
    const [listSQ, setListSQ] = useState([])
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setError(null);
        setIsLoading(true);
        requestListSQ(token)
            .then((res => {setListSQ(res.data)}))   
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    },[token])

    return (
        <>
        <h1 className="Questions">Questions</h1>
        <Link
            className='button-add'
            key="button-add"
            id="button-add"
            to="/questions/add"
        >Add Your Own Question</Link>
        <QuestionsSQ token={token} />
        </>
    )
}