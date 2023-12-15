import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Logoff from "../assets/utils/Logoff";
import { useContext } from 'react';
import { UserContext } from "../assets/utils/UserContext"; 
// import ModalLogin from "../components/modalLogin";
// import ModalRegister from "../components/ModalRegister";

export default function Header({ setOpenModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const toggleMenuLinks = () => setIsOpen(!isOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const location = useLocation();

  const navigate = useNavigate();

  <Logoff setUser={setUser} navigate={navigate}/>

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
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/invoices"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Invoices
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Companies"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Companies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacts"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contacts
            </NavLink>
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
        {user ? (
          <>
          {(user.role_id === 1 || user.role_id === 2) && (
                        <li className="dashboardButton">
              <button
                className="dashboardBtnStyle"
                onClick={() => navigate('/dashboard')}
              >
                Dashboard
              </button>
            </li>
          )}
            <li className="logoffButton">
              <Logoff setUser={setUser} navigate={navigate}/>
            </li>
          </>
        ) : (
          <>
            <li className="signupButton">
              <button
                className="signUpBtnStyle"
                onClick={() => setOpenModal('register')}
              >
                Sign up
              </button>
            </li>
            <li className="loginButton">
              <button
                className="loginBtnStyle"
                onClick={() => setOpenModal('login')}
              >
                Login
              </button>
            </li>
          </>
        )}

        </ul>
      </nav>
      <button className="userButton" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faUser} style={{ color: "#4e511f" }} />
      </button>
    </div>
  );
};