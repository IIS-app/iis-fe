import axios from 'axios'

// POST REGISTER USER - ep ✅
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

// POST LOGIN USER - ep ✅
export const requestLogin = (email, password) => {
    const url = 'https://internal-interview-service.onrender.com/auth/token/login/'

    const response = axios.post(url, {
        email: email,
        password: password
    })
    return response
}

// POST LOGOUT USER - ep ✅
export const requestLogout = (token) => {
    const url = 'https://internal-interview-service.onrender.com/auth/token/logout/'
    const response = axios.post(url, 
        {
        headers:
            { Authorization: `Token ${token}`
            }
        }
    )
        return response   
}

// GET USER INFO - ep 
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

// PATCH UPDATE USER INFO - ep 
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
    try {
      const url = 'https://internal-interview-service.onrender.com/starr-stories/'
      const response = await axios.get(url, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  

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
export const requestTargetCompanies = (token) => {
    const url = 'https://internal-interview-service.onrender.com/com/questions'
    const response = axios.get(url,
        {headers: { 
            Authorization: `Token ${token}`       
            }
        }
    )
    return response
}

// ❌ GET LIST OF INTERVIEW QUESTIONS
export const requestStarrForm = (token) => {
    const url = 'https://internal-interview-service.onrender.com/com/'
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

// POST CREATE A NEW TARGET COMPANY - ep ✅
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