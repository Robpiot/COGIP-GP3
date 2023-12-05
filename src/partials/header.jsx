import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/style.css";
import { Route, Routes } from "react-router-dom";
import Invoices from "../view/invoices.jsx";
import Companies from "../view/companies.jsx";
import Contacts from "../view/contacts.jsx";
import Home from "../App.jsx";

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
              <Routes>
                <Route path="/src/App.jsx" element={<Home />} />
              </Routes>
            </li>

            <li>
              <Routes>
                <Route path="../view/invoices.jsx" element={<Invoices />} />
              </Routes>
            </li>
            <li>
              <Routes>
                <Route path="../view/companies.jsx" element={<Companies />} />
              </Routes>
            </li>
            <li>
              <Routes>
                <Route path="../view/contacts.jsx" element={<Contacts />} />
              </Routes>
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
