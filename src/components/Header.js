import { useState } from 'react'
import { Link } from 'react-router-dom'
import { requestLogout } from './Requests'

export const Header = ({ setAuth }) => {
    const [token, setToken] = useState([])

    const handleLogout = () => {
        requestLogout(token)
            .then(() => setAuth('', null))
            .catch(() => setAuth('', null))
    }

    return (
        <header>
            <Link
                className=''
                onClick={handleLogout}
            >Log Out</Link>
            
        </header>
    )
}