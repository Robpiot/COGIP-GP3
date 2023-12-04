import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="headerDiv">
      <button className="menuButton" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} style={{ color: "#a2bf3b" }} />
      </button>
      <nav className="navBarHeader">
        <ul className="ulTitleHeader">
          <li className="titleHeader">
            <h1>COGIP</h1>
          </li>
        </ul>
        {isOpen && (
          <ul className="linksHeader">
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
        )}
        <ul className="headerButtons">
          <li className="signupButton">Sign up</li>
          <li className="loginButton">Login</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
