import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { requestUpdateTargetCompany} from './Requests'

export const TargetCompanyDetail = ({ token, setSelected}) => {
    const { companyId } = useParams()
    const [ targetCompany, setTargetCompany] = useState({})
    const [error, setError] = useState(null)

}

    useEffect((e) => {
        e.preventDefault(
        setError(null)
        requestUpdateTargetCompany(token, companyId, companyName, website)

        .then((res => {
            setTargetCompany(res.companyId)
        })
        )
        .catch((error) => {
            setError(error.message)
    }, [token, {companyId}])
        )
    })


    return (
        <form className="company-form">
            <h3 className="company-name">{targetCompany.companyId}</h3>
            <div className="card-detail">

            </div>
        </form>
    )