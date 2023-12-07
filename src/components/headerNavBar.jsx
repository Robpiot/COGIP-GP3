import react, { useState } from "react";
import Link from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/style.css";

const HeaderNavBarLinks = () => {
  return (
    <nav className="divHeader">
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
    </nav>
  );
};

export default HeaderNavBarLinks;
