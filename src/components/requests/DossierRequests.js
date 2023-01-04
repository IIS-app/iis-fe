import axios from 'axios'

// GET LIST OF DOSSIERS - ep  app 
export const requestListDossiers = (token) => {
    const url = 'https://internal-interview-service.onrender.com/dossier/'
    const response = axios.get(url,
        {headers: {
            Authorization: `Token ${token}`
        }
    });
    return response
}

// POST CREATE A DOSSIER RECORD - ep   app
export const requestCreateDossier = (token) => {
    const url = 'https://internal-interview-service.onrender.com/dossier/'
    const response = axios.post(url,
        {
            title: dossierTitle,
            job: jobKey,
            resume: resumeKey,
            cover_letter: [coverLetterKey],
            starrs: [
                [starrKey]
            ],
            questions: [
                [questionKey]
            ],
            wins: [
                [winKey]
            ],
            draft: isDraft
        },
        {headers: {
            Authorization: `Token ${token}`
            }
        }
    )
    return response
}


// POST CREATE A NEW TARGET JOB DOSSIER RECORD - ep 
export const requestCreateTJDossier = (token) => {
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


// PATCH UPDATE A DOSSIER RECORD - ep   app
export const requestTJDossier = (token) => {
    const url = `https://internal-interview-service.onrender.com/dossier/1`
    const response = axios.patch(url,
        {
            title: dossierTitle,
            job: jobKey,
            resume: [resumeKey,resumeTitle],
            cover_letter: [[coverLetterKey, coverLetterTitle]],
            starrs: [
                [[starrKey, starrTitle]]
            ],
            questions: [
                [questionKey, question, questionType]
            ],
            wins: [
                [winKey, winTitle, winDate]
            ],
            draft: isDraft
        },
        {headers: {
            Authorization: `Token ${token}`
            }
        }
    )
    return response
}


// DELETE DOSSIER RECORD - ep   app 
// when a target job is deleted, none of the associated record keys stored in the dossier are deleted bc they LIVE in the other tables. A future feature might be to erase parts but management or updating of content is done outside the target job/dossier section
export const requestDeleteTJDossier = (token, pk) => {
    const url = `https://internal-interview-service.onrender.com/dossier/${pk}`
    const response = axios
        .delete(url,
            {headers: { 
                Authorization: `Token ${token}`       
                }
            })
        // (()=>{navigate(/somewhere right?)})
    return response
}

