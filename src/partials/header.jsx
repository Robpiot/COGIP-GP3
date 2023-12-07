import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/style.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="headerDiv">
      <button className="menuButton">
        <FontAwesomeIcon icon={faBars} style={{ color: "#000000" }} />
      </button>
      <ul className="ulheaderLinks">
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

      <nav className="navBarHeader">
        <ul className="ulTitleHeader">
          <li className="titleHeader">
            <Link to="/">
              <h1>COGIP</h1>
            </Link>
          </li>
        </ul>
        <button className="userButton">
          <FontAwesomeIcon icon={faUser} style={{ color: "#4e511f" }} />
        </button>
        <ul className="headerButtons">
          <li className="signupButton">Sign up</li>
          <li className="loginButton">Login</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
