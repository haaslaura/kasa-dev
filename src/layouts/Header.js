import { Link } from 'react-router-dom';
import logo from '../assets/logo-kasa.svg'

function Header() {
    return (
        <header>
            <img className="logo-kasa" src={logo} alt="Kasa" />
            <nav className="navbar">
                <Link className="navbar__link" to="/">Accueil</Link>
                <Link className="navbar__link" to="/a-propos">À propos</Link>
            </nav>
        </header>
    );
}

export default Header;