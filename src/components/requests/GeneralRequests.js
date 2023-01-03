import axios from 'axios'

// POST REGISTER USER - ep ✅ app ✅
export const requestNewUser = (email, password, firstName, lastName, codename) => {
    const url = 'https://internal-interview-service.onrender.com/auth/users/'

    const response = axios.post(url, {
        email: email,
        password: password,
        first_name: firstName,
        last_name: lastName,
        codename: codename,
    })
    return response
}

// POST LOGIN USER - ep ✅ app ✅
export const requestLogin = (email, password) => {
    const url = 'https://internal-interview-service.onrender.com/auth/token/login/'
    const response = axios.post(url, {
        email: email,
        password: password
    })
    return response
}

// POST LOGOUT USER - ep ✅ app ✅
export const requestLogout = (token) => {
    const url = 'https://internal-interview-service.onrender.com/auth/token/logout/'
    const headers = {
        Authorization: `Token ${token}`
    }
    const response = axios.post(url, {}, { headers })
    return response   
}


// GET USER INFO - ep ✅
export const requestUserInfo = (token) => {
    const url = 'https://internal-interview-service.onrender.com/auth/users/me/'
    const response = axios.get(url, {
        
        headers:
            { Authorization: `Token ${token}`
        }
    })
        return response   
}

// ❌ PATCH UPDATE USER INFO - ep 
export const requestUpdateUserInfo = (token) => {
    const url = 'https://internal-interview-service.onrender.com/auth/users/me/'
    const response = axios.patch(url, {
        
        headers:
            { Authorization: `Token ${token}`
        }
    })
        return response   
}