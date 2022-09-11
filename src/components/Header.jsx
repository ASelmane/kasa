import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to={"/"}><img className="logo" src={Logo} alt="Kasa Logo" /></Link>
      <nav>
        <ul>
          <li>
            <NavLink className={({isActive}) => (isActive ? 'active' : null)} to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => (isActive ? 'active' : null)} to="/about">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;