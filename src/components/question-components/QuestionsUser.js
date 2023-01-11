import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { requestListSQ } from '../requests/QuestionRequests';
import { PlusCircle } from '@styled-icons/bootstrap/PlusCircle';
import { QuestionForm } from './QuestionForm';
import { FileX } from 'styled-icons/bootstrap';
import { Accordion } from '../dossier-components/Accordion';

export const QuestionsUser = ({ token }) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [userQ, setUserQ] = useState([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setError(null);
    setIsLoading(true);
    requestListSQ(token)
        .then((res => {
            setUserQ(res.data)
        }))   
        .catch(error => setError(error.message))
        .finally(() => setIsLoading(false))
},[token])


  return (
    <div className='container-accordion'>
      <h2 className='main-title'>List of User Questions</h2>
      <div className='accordion-parent'></div>
        <div className="accordion-parent">
                <Accordion
                    key="avail-iq"
                    title='Available Interview Questions' 
                    content={
                        userQ && userQ.filter(q => q.question_type === 'IQ').map(q => (
                            <Accordion key={q.pk} title={q.question} content={q.answer} />
                        ))}
                />
        </div>
            <div className="accordion-parent">
                <Accordion
                    key="avail-cq"
                    title='Available Company Questions' 
                    content={
                        userQ && userQ.filter(q => q.question_type === 'CQ').map(q => (
                            <Accordion key={q.pk} title={`${q.question} `} content={q.answer} />
                        ))}
                />
            </div>
    </div>
  );
  
};
