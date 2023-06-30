import React from "react";
import "./style.css";
import logo from "../../img/logo-green.png";
// import { BASE_URL } from "../../config";

const Footer = () => {
  return (
    <footer className="footer row m-0 p-3">
      <div className="footer__logo col-12 col-md-4 text-center text-md-start">
        <img src={logo} alt="Natour logo" />
      </div>
      <ul className="footer__nav d-flex flex-wrap col-12 col-md-8">
        <li className="me-4">
          <a href="/#">About us</a>
        </li>
        <li className="me-4">
          <a href="/#">Download apps</a>
        </li>
        <li className="me-4">
          <a href="/#">Become a guide</a>
        </li>
        <li className="me-4">
          <a href="/#">Careers</a>
        </li>
        <li className="me-4">
          <a href="/#">Contact</a>
        </li>
      </ul>
      <p className="footer__copyright text-center text-md-end">
        &copy; by Raviphas R.
      </p>
    </footer>
  );
};

export default Footer;
