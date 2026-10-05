import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import logo from "../../images/logo.svg";
import { APP_TITLE } from "../../utils/constants";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo-link">
          <img
            src={logo}
            alt="Logotipo de Rick and Morty Explorer"
            className="header__logo"
            width="40"
            height="40"
          />
          <span className="header__title">{APP_TITLE}</span>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
