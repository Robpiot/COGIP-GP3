import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navBarHeader">
        <ul className="ulTitleHeader">
          <li className="titleHeader">
            <h1>COGIP</h1>
          </li>
        </ul>
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
        <ul className="headerButtons">
          <li className="signupButton">Sign up</li>
          <li className="loginButton">Login</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
