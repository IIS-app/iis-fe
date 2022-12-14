import { Link } from 'react-router-dom';

export const Starrs = () => {

    return (
        <>
            <h1 className="Starr">STARR Stories!</h1>
                <nav>
                    <Link className="button is-link" to="/starrform">Add a new STARR Story!</Link>

                </nav>
        </>
    )
}
