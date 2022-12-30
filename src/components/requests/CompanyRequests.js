import axios from 'axios'

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

// POST CREATE A NEW TARGET COMPANY RECORD - ep ✅
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

// GET COMPANY DETAIL - ep ✅
export const requestCompanyDetail = (token, companyId) => {
    const url = `https://internal-interview-service.onrender.com/starr-stories/${companyId}`
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
