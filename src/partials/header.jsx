import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(false);

  const toggleMenuLinks = () => setIsOpen(!isOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleLinkClick = (path) => {
    setActiveLink(path);
  };
  return (
    <div className="headerDiv">
      <button className="menuButton" onClick={toggleMenuLinks}>
        <FontAwesomeIcon icon={faBars} style={{ color: "#000000" }} />
      </button>
      <nav className="navBarHeader">
        <ul className={`ulHeaderLinks ${isOpen ? "is-open" : ""}`}>
          <li>
            <Link
              to="/"
              onClick={() => handleLinkClick("/")}
              className={activeLink === "/" ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/invoices"
              onClick={() => handleLinkClick("/invoices")}
              className={activeLink === "/invoices" ? "active" : ""}
            >
              Invoices
            </Link>
          </li>
          <li>
            <Link
              to="/companies"
              onClick={() => handleLinkClick("/companies")}
              className={activeLink === "/companies" ? "active" : ""}
            >
              Companies
            </Link>
          </li>
          <li>
            <Link
              to="/contacts"
              onClick={() => handleLinkClick("/contacts")}
              className={activeLink === "/contacts" ? "active" : ""}
            >
              Contacts
            </Link>
          </li>
        </ul>
        <ul className="ulTitleHeader">
          <li className="titleHeader">
            <Link to="/">
              <h1>COGIP</h1>
            </Link>
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
