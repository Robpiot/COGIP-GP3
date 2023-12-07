import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/style.css";
import { Route, Routes, Link } from "react-router-dom";
import HeaderNavBarLinks from "../components/headerNavBar";

const Header = () => {
  return (
    <div className="headerDiv">
      <button className="menuButton" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} style={{ color: "#000000" }} />
      </button>
      <HeaderNavBarLinks />

      <nav className="navBarHeader">
        <ul className="ulTitleHeader">
          <li className="titleHeader">
            <Link to="/">
              <h1>COGIP</h1>
            </Link>
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
