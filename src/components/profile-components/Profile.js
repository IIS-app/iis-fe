import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProfileView } from './ProfileView'
 

export const Profile = ({ token }) => {
    const [error, setError] = useState(null)

    return (
        <div className='container-profile'>
        {error && <div className="error">{ error }</div>}
            <ProfileView token={token}/>
        </div>
    )
};
