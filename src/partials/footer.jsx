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
  faLocationDot,
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
          <ul className="location">
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ color: "#F9DE4E" }}
            />
            <p className="infoFooter">Square des Martyrs, 6000 Charleroi</p>
          </ul>
          <ul className="listeContacts">
            <li>
              <FontAwesomeIcon icon={faPhone} style={{ color: "#f9DE4E" }} />
              <p className="infoFooter">(123) 456-7890</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faPrint} style={{ color: "#f9DE4E" }} />
              <p className="infoFooter">(123) 456-7890</p>
            </li>
          </ul>
          <ul className="listeSocials">
            <li>Social Media</li>
            <li>
              <FontAwesomeIcon
                className="fontawesome"
                icon={faFacebookSquare}
                style={{ color: "#f9DE4E" }}
              />
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitter} style={{ color: "#F9DE4E" }} />
            </li>
            <li>
              <FontAwesomeIcon
                className="fontawesome"
                icon={faLinkedinIn}
                style={{ color: "#f9DE4E" }}
              />
            </li>
            <li>
              <FontAwesomeIcon
                className="fontawesome"
                icon={faInstagram}
                style={{ color: "#f9DE4E" }}
              />
            </li>
            <li>
              <FontAwesomeIcon 
              className="fontawesome"
              icon={faYoutube} 
              style={{ color: "#f9DE4E" }} />
            </li>
            <li>
              <FontAwesomeIcon
                className="fontawesome"
                icon={faGooglePlusG}
                style={{ color: "#f9DE4E" }}
              />
            </li>
            <li>
              <svg className ="svgTransform" xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" viewBox="0 0 496 512">
                <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3 .8-3.4 5-20.3 6.9-28.1 .6-2.5 .3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" fill="#F9DE4E"/>
              </svg>            
            </li>
            <li>
            <svg className ="svgTransform" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M21 21H17.5717C17.5717 12.9649 11.0352 6.42836 3.00019 6.42836V3C12.9252 3 21 11.0749 21 21ZM3.00019 18.4286C3.00019 17.0085 4.15154 15.8571 5.57159 15.8571C6.99165 15.8571 8.14299 17.0085 8.14299 18.4286C8.14299 19.8486 6.99165 21 5.57159 21C4.15154 21 3.00019 19.8486 3.00019 18.4286ZM11.5718 21H15.0001C15.0001 14.3831 9.61686 8.99979 3 8.99979V12.4288C7.72623 12.4288 11.5718 16.2737 11.5718 21Z" fill="#F9DE4E"/>
            </svg> 
            </li>
          </ul>
        </div>
        <div className="bottomLinks">
          <nav className="navFooter">
            <ul className="listeBottomLinks">
              <div className="listFooter">
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
                <li>
                  <Link to="/about">Privacy Policy</Link>
                </li>
              </div>
              <div className="copyright">
                <li>
                  <p>Copyright © 2022 • COGIP Inc</p>
                </li>
              </div>
            </ul>
            {/* <ul className="copyright">
              <p>Copyright © 2022 • COGIP Inc</p>
            </ul> */}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
