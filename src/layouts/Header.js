import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo-kasa.svg'

function Header() {
    return (
        <header>
            <Link to="/">
                <img className="logo-kasa" src={logo} alt="Kasa" />
            </Link>

            <nav className="navbar">

                <NavLink to="/"
                    className={({ isActive }) =>
                        "navbar__link" + (isActive ? " active" : " pending")
                    }
                >
                    Accueil
                </NavLink>

                <NavLink to="/a-propos"
                    className={({ isActive }) =>
                        "navbar__link" + (isActive ? " active" : " pending")
                    }
                >
                    À propos
                </NavLink>

            </nav >
        </header >
    );
}

export default Header;