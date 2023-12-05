import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faYoutube,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationArrow,
  faPhone,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";
// import { faPinterest, faRss } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="divFooter">
        <div className="titleFooter">
          <h3>COGIP</h3>
        </div>
        <div className="divContact">
          <ul className="listePhone">
            <FontAwesomeIcon
              icon={faLocationArrow}
              style={{ color: "#f9DE4E" }}
            />
            <p>Square des Martyrs, 6000 Charleroi</p>
          </ul>
          <ul>
            <li>
              <FontAwesomeIcon icon={faPhone} style={{ color: "#f9DE4E" }} />
              <p>(123) 456-7890</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faPrint} style={{ color: "#f9DE4E" }} />
              (123) 456-7890
            </li>
          </ul>
          <ul className="listePhone">
            <li>Social Media</li>
            <li>
              <FontAwesomeIcon
                icon={faFacebookSquare}
                style={{ color: "#f9DE4E" }}
              />
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitter} style={{ color: "#F9DE4E" }} />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faLinkedinIn}
                style={{ color: "#f9DE4E" }}
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "#f9DE4E" }}
              />
            </li>
            <li>
              <FontAwesomeIcon icon={faYoutube} style={{ color: "#f9DE4E" }} />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faGooglePlusG}
                style={{ color: "#f9DE4E" }}
              />
            </li>
            {/* <li>
            <FontAwesomeIcon icon={faPinterest} style={{ color: "#f9DE4E" }} />
          </li>
          <li>
            <FontAwesomeIcon icon={faRss} style={{ color: "#f9DE4E" }} />
          </li> */}
          </ul>
        </div>
        <div className="bottomLinks"></div>
        <nav>
          <ul>
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
          <ul>
            <p>Copyright &copy; 2002 COGIP Inc</p>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
