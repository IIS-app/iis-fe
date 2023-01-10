import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { requestListSQ } from '../requests/QuestionRequests';
import { PlusCircle } from '@styled-icons/bootstrap/PlusCircle';
import { QuestionForm } from './QuestionForm';
import { FileX } from 'styled-icons/bootstrap';
import { Accordion } from '../dossier-components/Accordion';

export const QuestionsSQ = ({ token }) => {
  const [listSQ, setListSQ] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [userQuestions, setUserQuestions] = useState([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setError(null);
    setIsLoading(true);
    requestListSQ(token)
        .then((res => {
            setUserQuestions(res.data)
        }))   
        .catch(error => setError(error.message))
        .finally(() => setIsLoading(false))
},[token])


  const handleClick = sq => {
    navigate('/questions/use-sq', { state: { sq: sq } });
  };

  return (
    <div className='container-accordion'>
      <h2>List of Suggested Questions</h2>
      <div className='accordion-parent'></div>
        <div className="accordion-parent">
                <Accordion
                    key="avail-iq"
                    title='Available Interview Questions' 
                    content={
                        userQuestions && userQuestions.filter(q => q.question_type === 'IQ').map(q => (
                            <Accordion key={q.pk} title={q.question} content={q.answer} />
                        ))}
                />
        </div>
            <div className="accordion-parent">
                <Accordion
                    key="avail-cq"
                    title='Available Company Questions' 
                    content={
                        userQuestions && userQuestions.filter(q => q.question_type === 'CQ').map(q => (
                            <Accordion key={q.pk} title={`${q.question} `} content={q.answer} />
                        ))}
                />
            </div>
    </div>
  );
  
};
