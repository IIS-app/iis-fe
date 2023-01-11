import axios from 'axios'
import { IdBadge } from 'styled-icons/octicons';

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

// GET DETAIL OF DOSSIER RECORD - ep  app 
export const requestDossierDetail = (token, id) => {
    const url = `https://internal-interview-service.onrender.com/dossier/${id}`
    const response = axios.get(url,
        {headers: {
            Authorization: `Token ${token}`
        }
    });
    return response
}

// GET CREATE DOSSIER PDF - ep  app 
export const requestDossierPDF = (token, id) => {
    const url = `https://internal-interview-service.onrender.com/dossier-pdf/${id}`
    const response = axios.get(url,
        {headers: {
            Authorization: `Token ${token}`
        }
    });
    return response
}

// POST CREATE A DOSSIER RECORD - ep   app
export const requestCreateDossier = (token, dossierTitle, jobKey, resumeKey, coverLetterKey, starrKey, questionKey, winKey, isDraft) => {
    const url = 'https://internal-interview-service.onrender.com/dossier/'
    const response = axios.post(url,
        {
            title: dossierTitle,
            job: jobKey,
            resume: [resumeKey],
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


// PATCH UPDATE A DOSSIER RECORD - ep   app
export const requestUpdateDossierDetail = (token, {id},dossierTitle, jobKey, resumeKey, coverLetterKey, starrKey, questionKey, winKey, isDraft) => {
    const url = `https://internal-interview-service.onrender.com/dossier/${id}`
    const response = axios.patch(url,
        {
            title: dossierTitle,
            job: jobKey,
            resume: resumeKey,
            cover_letter: coverLetterKey,
            starrs: [starrKey],
            questions: [questionKey],
            wins: [winKey],
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
export const requestDeleteDossier = (token, pk) => {
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

