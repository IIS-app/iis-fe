import axios from 'axios'

// GET LIST OF TARGET COMPANIES - ep ✅
export const requestListTargetCompanies = (token) => {
    const url = 'https://internal-interview-service.onrender.com/target-company/'
    const response = axios.get(url,
        {headers: {
            Authorization: `Token ${token}`
            }
        })
    return response
}

// POST CREATE A NEW TARGET COMPANY RECORD - ep ✅
export const requestCreateTargetCompany = (token, companyName, companyRank, companyUrl, companyJobsUrl, companyNotes) => {
    const url = 'https://internal-interview-service.onrender.com/target-company/'
    const response = axios.post(url,
        {
            company_name: companyName,
            rank: companyRank,
            website: companyUrl,
            job_page: companyJobsUrl,
            comments: companyNotes,
        },
        {headers: {
            Authorization: `Token ${token}`
            }
        })
    return response
}

// GET COMPANY DETAIL - ep ✅
export const requestTargetCompanyDetail = (token, { pk }) => {
    const url = `https://internal-interview-service.onrender.com/target-company/${pk}`
    const response = axios.get(url,
        {headers: { 
            Authorization: `Token ${token}`       
            }
        })
    return response
}

// DELETE COMPANY RECORD - ep ✅  app ❌
export const requestDeleteTargetCompany = (token, {pk}) => {
    const url = `https://internal-interview-service.onrender.com/target-company/${pk}`
    const response = axios
        .delete(url,
            {headers: { 
                Authorization: `Token ${token}`       
                }
            })
        // (()=>{navigate("/wins")})
    return response
}


// PATCH UPDATE A TARGET COMPANY RECORD - ep ✅
// export const requestUpdateTargetCompany = (token, { pk }, companyRank, companyName, companyUrl, companyJobsUrl, companyNotes) => {

export const requestUpdateTargetCompany = (token, {pk}, companyName, companyRank, companyUrl, companyJobsUrl, companyNotes) => {
    const url = `https://internal-interview-service.onrender.com/target-company/${pk}`

    console.log(`token: ${token}, pk: ${pk}`)
    console.log('companyRank:', companyRank)
    console.log('companyName:', companyName)
    console.log('companyUrl:', companyUrl)
    console.log('companyJobsUrl:', companyJobsUrl)
    console.log('companyNotes:', companyNotes)

    const formData = new FormData()
        formData.append('rank', companyRank)
        formData.append('company_name', companyName)
        formData.append('website', companyUrl)
        formData.append('job_page', companyJobsUrl)
        formData.append('comments', companyNotes)

        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`)
        }

    const response = axios.patch(url, 
        formData,
        {headers: {
            Authorization: `Token ${token}`
            }
        }
    )
    return response
}

// TODO: The ranking code is not up-to-date, waiting on UI
// ❌ PATCH UPDATE TARGET COMPANY RANKINGS (aka multiple/send array of ids and ranks)
export const requestUpdateTargetCompanyRank = (token, companyId, companyRank) => {
    const url = `https://internal-interview-service.onrender.com/target-company/ranks`
    const response = axios.patch(url,
        {
            pk: companyId,
            rank: companyRank,
        },
        {headers: {
            Authorization: `Token ${token}`
            }
        }
    )
    return response
}
