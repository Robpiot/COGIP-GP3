import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuLinks = () => setIsOpen(!isOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <div className="headerDiv">
      <button className="menuButton" onClick={toggleMenuLinks}>
        <FontAwesomeIcon icon={faBars} style={{ color: "#000000" }} />
      </button>
      <nav className="navBarHeader">
        <ul className={`ulHeaderLinks ${isOpen ? "is-open" : ""}`}>
          <li>
            <NavLink
              to="/"
              isActive={(match, location) => location.pathname === "/"}
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/invoices"
              isActive={(match, location) => location.pathname === "/"}
              activeClassName="active"
            >
              Invoices
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Companies"
              isActive={(match, location) => location.pathname === "/"}
              activeClassName="active"
            >
              Companies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacts"
              isActive={(match, location) => location.pathname === "/"}
              activeClassName="active"
            >
              Contacts
            </NavLink>
          </li>
        </ul>
        <ul className="ulTitleHeader">
          <li className="titleHeader">
            <navLink to="/">
              <h1>COGIP</h1>
            </navLink>
          </li>
        </ul>
        <ul className={`headerButtons ${isMenuOpen ? "is-open" : ""}`}>
          <li className="signupButton">
            <button>Sign up</button>
          </li>
          <li className="loginButton">
            <button>Login</button>
          </li>
        </ul>
      </nav>
      <button className="userButton" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faUser} style={{ color: "#4e511f" }} />
      </button>
    </div>
  );
};

export default Header;
