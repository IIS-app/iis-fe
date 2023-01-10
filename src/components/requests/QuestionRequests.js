import axios from 'axios'

// SYSTEM QUESTION SPECIFIC REQUESTS

// GET LIST OF SYSTEM QUESTIONS
export const requestListSQ = (token) => {
    const url = 'https://internal-interview-service.onrender.com/system-question/'
    const response = axios.get(url,
        {headers: { 
            Authorization: `Token ${token}`       
            }
        }
    )
    return response
}

// POST CREATE NEW QUESTION from SYSTEM RECORD
export const requestCreateSQAnswer = (token, answer, question, question_type ) => {
    const url = 'https://internal-interview-service.onrender.com/question/'
    const tags = ["tags"]
    const response = axios.post(url,
        {
            question: question,
            answer: answer,
            question_type: question_type,
            tags: tags
            
        }, 
        {headers: { 
            Authorization: `Token ${token}`       
            }
        }
    )
    return response
}



// ❌ GET LIST OF USER QUESTIONS
export const requestListUserQuestions = (token) => {
    const url = 'https://internal-interview-service.onrender.com/question/'
    const response = axios.get(url,
        {headers: { 
            Authorization: `Token ${token}`       
            }
        }
    )
    return response
}

// ❌ POST CREATE NEW QUESTION RECORD
export const requestCreateQuestion = (token, answer, question, type ) => {
    const url = 'https://internal-interview-service.onrender.com/question/'
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
    const url = `https://internal-interview-service.onrender.com/question/${pk}`
    const response = axios.patch(url,
        {
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
