import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { requestListSQ } from '../requests/QuestionRequests'

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
        <h2>List of Suggested Questions</h2>
        <div className='container-main' style={{border: 'solid 3px', borderRadius:'10px', width:'75%', padding: '10px' }}>
            <div className='container-list'>
                    {listSQ ? listSQ.map(sq => (
                    <ul key={`${sq.pk}`} className="list">
                        <li className="list-sq">{sq.question}</li>
                        <li className="list-sq">{sq.question_type}</li>
                        <Link
                            className='sq-add'
                            key="sq-add"
                            id="button-add"
                            to="/questions/add"
                        >Add Your Own Question</Link>

                    </ul>
                        )) : null}
            </div>
        </div>

        </>
    )
}