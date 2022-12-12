import axios from 'axios'

// REGISTER USER
export const requestNewUser = (username, email, password) => {
    const url = 'https://iis-app.onrender.com/auth/users/'

    const response = axios.post(url, {
        username: username,
        email: email,
        password: password
    })
    return response
}

// LOGIN USER
export const requestLogin = (email, password) => {
    const url = 'https://iis-app.onrender.com/auth/token/login/'

    const response = axios.post(url, {
        email: email,
        password: password
    })
    return response
}

// LOGOUT USER
export const requestLogout = (token) => {
    const url = 'https://iis-app.onrender.com/auth/token/logout/'

    const response = axios.post(url, {
        headers: { Authorization: `Token ${token}`,}
    })
        return response   
}