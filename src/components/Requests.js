import axios from 'axios'
import { useNavigate } from 'react-router'

// POST REGISTER USER - ep ✅ app ✅
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

// POST LOGIN USER - ep ✅ app ✅
export const requestLogin = (email, password) => {
    const url = 'https://internal-interview-service.onrender.com/auth/token/login/'
    const response = axios.post(url, {
        email: email,
        password: password
    })
    return response
}

// POST LOGOUT USER - ep ✅ app ✅
export const requestLogout = (token) => {
    const url = 'https://internal-interview-service.onrender.com/auth/token/logout/'
    const headers = {
        Authorization: `Token ${token}`
    }
    const response = axios.post(url, {}, { headers })
    return response   
}


// GET USER INFO - ep ✅
export const requestUserInfo = (token) => {
    const url = 'https://internal-interview-service.onrender.com/auth/users/me/'
    const response = axios.post(url, {
        
        headers:
            { Authorization: `Token ${token}`
            }
        }
    )
        return response   
}

// ❌ PATCH UPDATE USER INFO - ep 
export const requestUpdateUserInfo = (token) => {
    const url = 'https://internal-interview-service.onrender.com/auth/users/me/'
    const response = axios.patch(url, {
        
        headers:
            { Authorization: `Token ${token}`
        }
    })
        return response   
}

// GET LIST OF STARRS - ep ✅
export const requestStarrs = async (token) => {
    const url = 'https://internal-interview-service.onrender.com/starr-stories/'
    const response = axios.get(url, {
        headers: {
            Authorization: `Token ${token}`,
        },
    });
    return response;
};
  

// POST CREATE NEW STARR RECORD - ep ✅
export const requestCreateStarr = (token, question, summary, situation, task, action, result, reflection) => {
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

// GET STARR DETAIL - ep ✅
export const requestStarrDetail = (token, starrId) => {
    const url = `https://internal-interview-service.onrender.com/starr-stories/${starrId}`
    const response = axios.get(url,
        {headers: { 
            Authorization: `Token ${token}`       
            }
        }
    )
    return response
}

// PATCH UPDATE STARR RECORD - ep ✅
export const requestUpdateStarr = (token, starrId, question, summary, situation, task, action, result, reflection) => {
    const url = `https://internal-interview-service.onrender.com/starr-stories/${starrId}`
    const response = axios.patch(url,
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

// ❌ GET LIST OF COMPANY QUESTIONS
export const requestListCompanyQuestions = (token) => {
    const url = 'https://internal-interview-service.onrender.com/com/questions/cq'
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
    const url = 'https://internal-interview-service.onrender.com/com/questions/iq'
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
    const url = 'https://internal-interview-service.onrender.com/com/questions/me'
    const response = axios.get(url,
        {headers: { 
            Authorization: `Token ${token}`       
            }
        }
    )
    return response
}

// ❌ POST CREATE NEW QUESTION RECORD
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

// ❌ PATCH UPDATE QUESTION RECORD
export const requestUpdateQuestion = (token, questionId, question, answer, type) => {
    const url = `https://internal-interview-service.onrender.com/questions/${questionId}`
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

// GET LIST OF TARGET COMPANIES - ep ✅
export const requestListTargetCompanies = (token, companyName, website) => {
    const url = 'https://internal-interview-service.onrender.com/target-company/'
    const response = axios.get(url,
        {headers: {
            Authorization: `Token ${token}`
            }
        }
    )
    return response
}

// POST CREATE A NEW TARGET COMPANY RECORD - ep ✅
export const requestCreateTargetCompany = (token, companyName, website) => {
    const url = 'https://internal-interview-service.onrender.com/target-company/'
    const response = axios.post(url,
        {
            company_name: companyName,
            website: website
        },
        {headers: {
            Authorization: `Token ${token}`
            }
        }
    )
    return response
}

// GET COMPANY DETAIL - ep ✅
export const requestCompanyDetail = (token, companyId) => {
    const url = `https://internal-interview-service.onrender.com/starr-stories/${companyId}`
    const response = axios.get(url,
        {headers: { 
            Authorization: `Token ${token}`       
            }
        }
    )
    return response
}

// PATCH UPDATE A TARGET COMPANY RECORD - ep ✅
export const requestUpdateTargetCompany = (token, companyId, companyName, website) => {
    const url = `https://internal-interview-service.onrender.com/target-company/${companyId}`
    const response = axios.patch(url,
        {
            company_name: companyName,
            website:website,
        },
        {headers: {
            Authorization: `Token ${token}`
            }
        }
    )
    return response
}

// ❌ PATCH UPDATE TARGET COMPANY RANKINGS (aka multiple/send array of ids and ranks)
export const requestUpdateTargetCompanyRankings = (token, companyId, rank) => {
    const url = `https://internal-interview-service.onrender.com/target-company/ranks`
    const response = axios.patch(url,
        {
        id: companyId,
        rank:rank,
        },
        {headers: {
            Authorization: `Token ${token}`
            }
        }
    )
    return response
}

// GET LIST OF WINS - ep ✅ app ✅
export const requestListWins = (token) => {
    const url = 'https://internal-interview-service.onrender.com/wins/'
    const response = axios.get(url,
        {headers: {
            Authorization: `Token ${token}`
        }
    });
    return response
}

// POST CREATE A NEW WIN - ep ✅
export const requestCreateWin = (token, winTitle, winDescription, winDate, winPicture) => {
    const url = 'https://internal-interview-service.onrender.com/wins/'
    const response = axios.post(url,
        {
            title: winTitle,
            win: winDescription,
            occured_date: winDate,
            win_picture: winPicture
        },
        {headers: {
            Authorization: `Token ${token}`
            }
        }
    )
    return response
}

// GET WIN DETAIL - ep ✅
export const requestWinDetail = (token, { pk }) => {
    const url = `https://internal-interview-service.onrender.com/wins/${pk}`
    const response = axios.get(url,
        {headers: { 
            Authorization: `Token ${token}`       
            }
        }
    )
    return response
}

// DELETE WIN RECORD - ep ✅  app ❌
export const requestDeleteWin = (token, pk) => {
    const url = `https://internal-interview-service.onrender.com/wins/${pk}`
    const response = axios
        .delete(url,
            {headers: { 
                Authorization: `Token ${token}`       
                }
            })
        // (()=>{navigate("/wins")})
    return response
}

// PATCH UPDATE A WIN RECORD - ep ✅
export const requestUpdateWin = (token, { pk }, winTitle, winDescription, winDate, winPicture) => {
    const url = `https://internal-interview-service.onrender.com/wins/${pk}`

    const formData = new FormData()
        formData.append('title', winTitle)
        formData.append('win', winDescription)
        formData.append('occured_date', winDate)
        formData.append('win_picture', winPicture)

    const response = axios.patch(url, formData,
        {headers: {
            Authorization: `Token ${token}`
            }
        }
    )
    return response
}
