import axios from 'axios'

// ❌ GET LIST OF TARGET JOBS - ep  app 
export const requestListTargetJobs = (token) => {
    const url = 'https://internal-interview-service.onrender.com/target-jobs/'
    const response = axios.get(url,
        {headers: {
            Authorization: `Token ${token}`
        }
    });
    return response
}

// ❌ POST CREATE A NEW TARGET JOB FULL RECORD - ep   app
export const requestCreateTargetJobFull = (token, jobTitle, jobUrl, jobCompany, jobNotes) => {
    const url = 'https://internal-interview-service.onrender.com/target-jobs/add'
    const response = axios.post(url,
        {
            title: jobTitle,
            job_listing: jobUrl,
            company: jobCompany,
            notes: jobNotes,
        },
        {headers: {
            Authorization: `Token ${token}`
            }
        }
    )
    return response
}

// ❌ POST CREATE A NEW TARGET JOB BASE RECORD - ep 
// maybe us this one to add something on the fly...found a job throw it in
export const requestCreateTargetJobBase = (token, jobTitle, jobUrl) => {
    const url = 'https://internal-interview-service.onrender.com/target-jobs/add'
    const response = axios.post(url,
        {
            title: jobTitle,
            job_listing: jobUrl,
        },
        {headers: {
            Authorization: `Token ${token}`
            }
        }
    )
    return response
}

// ❌ POST CREATE A NEW TARGET JOB DOSSIER RECORD - ep 
export const requestCreateTargetJobDossier = (token) => {
    const url = 'https://internal-interview-service.onrender.com/target-jobs/{pk}/add-dossier'
    const response = axios.post(url,
        {
        },
        {headers: {
            Authorization: `Token ${token}`
            }
        }
    )
    return response
}

// ❌ GET TARGET JOB DETAIL - ep   app
export const requestJobDetail = (token, { pk }) => {
    const url = `https://internal-interview-service.onrender.com/target-jobs/${pk}`
    const response = axios.get(url,
        {headers: { 
            Authorization: `Token ${token}`       
            }
        }
    )
    return response
}

// ❌ PATCH UPDATE A TARGET JOB RECORD - ep   app
export const requestUpdateTargetJobFull = (token, { pk }, jobTitle, jobUrl, jobCompany, jobNotes) => {
    const url = `https://internal-interview-service.onrender.com/target-jobs/${pk}`
    const response = axios.patch(url,
        {
            title: jobTitle,
            job_listing: jobUrl,
            company: jobCompany,
            notes: jobNotes,
        },
        {headers: {
            Authorization: `Token ${token}`
            }
        }
    )
    return response
}


// ❌ DELETE TARGET JOB RECORD - ep   app 
// when a target job is deleted, none of the associated record keys stored in the dossier are deleted bc they LIVE in the other tables. A future feature might be to erase parts but management or updating of content is done outside the target job/dossier section
export const requestDeleteTargetJob = (token, pk) => {
    const url = `https://internal-interview-service.onrender.com/target-jobs/${pk}`
    const response = axios
        .delete(url,
            {headers: { 
                Authorization: `Token ${token}`       
                }
            })
        // (()=>{navigate("/somewhere right?")})
    return response
}

// ❌ PATCH UPDATE A DOSSIER TARGET JOB RECORD - ep   app
// TODO: figure out what this is going to look like???
export const requestUpdateTargetJob = (token, { pk }, wins, starrs, questions, resumes, letters) => {
    const url = `https://internal-interview-service.onrender.com/target-jobs/dossier/${pk}`

    const formData = new FormData()
        formData.append('wins', wins)
   

    const response = axios.patch(url, formData,
        {headers: {
            Authorization: `Token ${token}`
            }
        }
    )
    return response
}
