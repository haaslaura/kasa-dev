import { Link } from 'react-router-dom';
import Home from '../../pages/Home/index';

function Error() {
    return (
        <div>
            <h1>404</h1>
            <h2>Oups! La page que vous avez demandez n'existe pas</h2>
            <Link to="/" element={<Home />}>Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error