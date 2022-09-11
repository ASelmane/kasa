import Logo from "../assets/logo.svg";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
            <img src={Logo} alt="Kasa Logo" />
            <p className="rights">© 2022 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;