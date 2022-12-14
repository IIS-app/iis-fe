import axios from 'axios'

// REGISTER USER
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

// LOGIN USER
export const requestLogin = (email, password) => {
    const url = 'https://internal-interview-service.onrender.com/auth/token/login/'

    const response = axios.post(url, {
        email: email,
        password: password
    })
    return response
}

// LOGOUT USER
export const requestLogout = (token) => {
    const url = 'https://internal-interview-service.onrender.com/auth/token/logout/'

    const response = axios.post(url, {
        headers: { Authorization: `Token ${token}`,}
    })
        return response   
}