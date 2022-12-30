import axios from 'axios'

// GET LIST OF WINS - ep ✅ app ✅
export const requestListWins = (token) => {
    const url = 'https://internal-interview-service.onrender.com/wins/'
    const response = axios.get(url,
        {headers: {
            Authorization: `Token ${token}`
        }
    });
    return response
}

// POST CREATE A NEW WIN - ep ✅
export const requestCreateWin = (token, winTitle, winDescription, winDate, winPicture) => {
    const url = 'https://internal-interview-service.onrender.com/wins/'
    const response = axios.post(url,
        {
            title: winTitle,
            win: winDescription,
            occured_date: winDate,
            win_picture: winPicture
        },
        {headers: {
            Authorization: `Token ${token}`
        }
    }
    )
    return response
}

// GET WIN DETAIL - ep ✅
export const requestWinDetail = (token, { pk }) => {
    const url = `https://internal-interview-service.onrender.com/wins/${pk}`
    const response = axios.get(url,
        {headers: { 
            Authorization: `Token ${token}`       
            }
        }
    )
    return response
}

// DELETE WIN RECORD - ep ✅  app ❌
export const requestDeleteWin = (token, pk) => {
    const url = `https://internal-interview-service.onrender.com/wins/${pk}`
    const response = axios
        .delete(url,
            {headers: { 
                Authorization: `Token ${token}`       
                }
            })
        // (()=>{navigate("/wins")})
    return response
}

// PATCH UPDATE A WIN RECORD - ep ✅
export const requestUpdateWin = (token, { pk }, winTitle, winDescription, winDate, winPicture) => {
    const url = `https://internal-interview-service.onrender.com/wins/${pk}`

    const formData = new FormData()
        formData.append('title', winTitle)
        formData.append('win', winDescription)
        formData.append('occured_date', winDate)
        formData.append('win_picture', winPicture)

    const response = axios.patch(url, formData,
        {headers: {
            Authorization: `Token ${token}`
            }
        }
    )
    return response
}
