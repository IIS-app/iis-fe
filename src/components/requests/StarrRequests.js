import axios from 'axios'

// GET LIST OF STARRS - ep ✅
export const requestStarrs = (token) => {
    const url = 'https://internal-interview-service.onrender.com/starr-stories/'
    const response = axios.get(url, {
        headers: {
            Authorization: `Token ${token}`,
        }
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
export const requestStarrDetail = (token, { pk }) => {
    const url = `https://internal-interview-service.onrender.com/starr-stories/${pk}`
    const response = axios.get(url,
        {headers: { 
            Authorization: `Token ${token}`       
            }
        }
    )
    return response
}

// DELETE STARR RECORD - ep ✅  app ❌
export const requestDeleteStarr = (token, pk) => {
    const url = `https://internal-interview-service.onrender.com/starr-stories/${pk}`
    const response = axios
        .delete(url,
            {headers: { 
                Authorization: `Token ${token}`       
                }
            })
        // (()=>{navigate("/starr")})
    return response
}
// PATCH UPDATE STARR RECORD - ep ✅
export const requestUpdateStarr = (token, {pk}, question, summary, situation, task, action, result, reflection) => {
    const url = `https://internal-interview-service.onrender.com/starr-stories/${pk}`

    const formData = new FormData()
        formData.append('question', question)
        formData.append('summary', summary)
        formData.append('situation', situation)
        formData.append('task', task)
        formData.append('action', action)
        formData.append('result', result)
        formData.append('reflection', reflection)

    const response = axios.patch(url, formData,
        {headers: {
            Authorization: `Token ${token}`
            }
        }
    )
    return response
    }