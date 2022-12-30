import axios from 'axios'

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