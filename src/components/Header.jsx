import { NavLink } from "react-router-dom";
import Logo from "../logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={Logo} alt="Kasa Logo" />
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