import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/style.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenuLinks = () => {
    setIsOpen((open) => !isOpen);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((open) => !isMenuOpen);
  };
  return (
    <div className="headerDiv">
      <button className="menuButton" onClick={toggleMenuLinks}>
        <FontAwesomeIcon icon={faBars} style={{ color: "#000000" }} />
      </button>
      <nav className="navBarHeader">
        <ul className={`ulHeaderLinks ${isOpen ? "is-open" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/invoices">Invoices</Link>
          </li>
          <li>
            <Link to="/companies">Companies</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
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
          <li className="signupButton">Sign up</li>
          <li className="loginButton">Login</li>
        </ul>
      </nav>
      <button className="userButton" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faUser} style={{ color: "#4e511f" }} />
      </button>
    </div>
  );
};

export default Header;
