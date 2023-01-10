import axios from 'axios'

export const requestCoverLetter = (token, data) => {
    const url = 'https://internal-interview-service.onrender.com/cover-letter/'
    const { title, job, notes, cover_letter_file } = data;
    const response = axios.post(url, 
        {
            title,
            job,
            notes,
            cover_letter_file,
        },
        {headers: {
           Authorization: `Token ${token}`,
        }
    });
    return response;
  };
  