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
  

    // TODO: this is a partially written request to upload the resume data
// export const requestUploadResumeFile = (token, data) => {
//     const url = 'https://internal-interview-service.onrender.com/resume/'
//     const { resume_file } = data;
//     const response = axios.patch(url, 
//         {
//             resume_file: resume_file,
//         },
//         {headers: {
//             Authorization: `Token ${token}`,
//             'Content-Type': 'multipart/form-data'
//         }
//         }); 
//     return response;
// };