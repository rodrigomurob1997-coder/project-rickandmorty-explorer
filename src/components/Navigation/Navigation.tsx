import { NavLink } from "react-router-dom";

function getLinkClassName({ isActive }: { isActive: boolean }) {
  return isActive
    ? "navigation__link navigation__link_active"
    : "navigation__link";
}

function Navigation() {
  return (
    <nav className="navigation" aria-label="Navegación principal">
      <ul className="navigation__list">
        <li>
          <NavLink to="/" end className={getLinkClassName}>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={getLinkClassName}>
            Sobre el autor
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
