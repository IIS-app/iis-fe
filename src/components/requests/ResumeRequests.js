import axios from "axios";

export const requestResume = (token, data) => {
    const url = 'https://internal-interview-service.onrender.com/resume/'
    const { title, job, notes, resume_file } = data;
    const response = axios.post(url, 
        {
            title,
            job,
            notes,
            resume_file,
        },
        {headers: {
           Authorization: `Token ${token}`,
        }
    });
    return response;
  };
  