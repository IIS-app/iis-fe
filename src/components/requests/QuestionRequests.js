import axios from 'axios'

// ❌ GET LIST OF COMPANY QUESTIONS
export const requestListCompanyQuestions = (token) => {
    const url = 'https://internal-interview-service.onrender.com/questions/cq'
    const response = axios.get(url,
        {headers: { 
            Authorization: `Token ${token}`       
            }
        }
    )
    return response
}

// ❌ GET LIST OF INTERVIEW QUESTIONS
export const requestListInterviewQuestions = (token) => {
    const url = 'https://internal-interview-service.onrender.com/questions/iq'
    const response = axios.get(url,
        {headers: { 
            Authorization: `Token ${token}`       
            }
        }
    )
    return response
}

// ❌ GET LIST OF USER QUESTIONS
export const requestListUserQuestions = (token) => {
    const url = 'https://internal-interview-service.onrender.com/questions/'
    const response = axios.get(url,
        {headers: { 
            Authorization: `Token ${token}`       
            }
        }
    )
    return response
}

// ❌ POST CREATE NEW QUESTION RECORD
export const requestCreateQuestion = (token, question, answer, type) => {
    const url = 'https://internal-interview-service.onrender.com/questions/'
    const response = axios.post(url,
        {
            question: question,
            answer: answer,
            type: type,
            
        }, 
        {headers: { 
            Authorization: `Token ${token}`       
            }
        }
    )
    return response
}

// ❌ PATCH UPDATE QUESTION RECORD
export const requestUpdateQuestion = (token, {pk}, question, answer, type) => {
    const url = `https://internal-interview-service.onrender.com/questions/${pk}`
    const response = axios.patch(url,
        {
            questionId: questionId,
            question: question,
            answer: answer,
            type: type            
        }, 
        {headers: { 
            Authorization: `Token ${token}`       
            }
        }
    )
    return response
}
