import Logo from "../logo.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
            <img src={Logo} alt="Kasa Logo" />
            <p className="rights">© 2022 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;