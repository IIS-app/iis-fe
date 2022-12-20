import axios from 'axios'

// REGISTER USER
export const requestNewUser = (email, password, firstName, lastName, codename) => {
    const url = 'https://internal-interview-service.onrender.com/auth/users/'

    const response = axios.post(url, {
        email: email,
        password: password,
        first_name: firstName,
        last_name: lastName,
        codename: codename,

    })
    return response
}

// LOGIN USER
export const requestLogin = (email, password) => {
    const url = 'https://internal-interview-service.onrender.com/auth/token/login/'

    const response = axios.post(url, {
        email: email,
        password: password
    })
    return response
}

// LOGOUT USER
export const requestLogout = (token) => {
    const url = 'https://internal-interview-service.onrender.com/auth/token/logout/'
    const response = axios.post(url, {
        
        headers: { Authorization: `Token ${token}`,}
    })
        return response   
}

// CREATE STARR FORM
export const requestStarrForm = (token, question, summary, situation, task, action, result, reflection) => {
    const url = 'https://internal-interview-service.onrender.com/starr-stories/'
    const response = axios.post(url,
        {
            question: question,
            summary: summary,
            situation: situation,
            task: task,
            action: action,
            result: result,
            reflection: reflection,        
        }, 
        {headers: { 
            Authorization: `Token ${token}`       
        }
    }
    )
    return response
}
    
    // CREATE NEW QUESTION RECORD
    export const requestCreateQuestion = (token, questionId, question, answer, type) => {
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

    // UPDATE QUESTION RECORD
    export const requestUpdateQuestion = (token, questionId, question, answer, type) => {
        const url = `https://internal-interview-service.onrender.com/questions/${questionId}`
        const response = axios.post(url,
            {
            questionId: questionId,
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
