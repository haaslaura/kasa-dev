import { Link } from 'react-router-dom';
import Home from '../pages/Home';

function Error({ housingNotFound }) {
    return (
        <div className="error-container">
            <h1>404</h1>
            <h2>Oups! {housingNotFound ?
                " La page que vous avez demandez n'existe pas"
                : " Le logement que vous avez demandez n'existe pas"}
            </h2>
            <Link to="/" element={<Home />}>Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error