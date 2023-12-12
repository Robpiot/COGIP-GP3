import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import ModalLogin from "../components/ModalLogin";
import ModalRegister from "../components/ModalRegister";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openModalLogin, setOpenModalLogin] = useState(false);
  const [openModalRegister, setOpenModalRegister] = useState(false);

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
              isactive={(match, location) => location.pathname === "/"}
              activeclassname="active"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/invoices"
              isactive={(match, location) => location.pathname === "/"}
              activeclassname="active"
            >
              Invoices
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Companies"
              isactive={(match, location) => location.pathname === "/"}
              activeclassname="active"
            >
              Companies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacts"
              isactive={(match, location) => location.pathname === "/"}
              activeclassname="active"
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
          <li className="signupButton">
            <button
              className="signUpBtnStyle"
              onClick={() => setOpenModalRegister(true)}
            >
              Sign up
            </button>
          </li>

          <li className="loginButton">
            <button
              className="loginBtnStyle"
              onClick={() => setOpenModalLogin(true)}
            >
              Login
            </button>
          </li>
        </ul>
        <div>
          {openModalLogin && <ModalLogin closeModalLogin={setOpenModalLogin} />}
        </div>
        <div>
          {openModalRegister && (
            <ModalRegister closeModalRegister={setOpenModalRegister} />
          )}
        </div>
      </nav>
      <button className="userButton" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faUser} style={{ color: "#4e511f" }} />
      </button>
      ;
    </div>
  );
};

export default Header;
