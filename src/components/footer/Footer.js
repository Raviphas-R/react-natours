import React from "react";
import "./Footer.css";
import logo from "../../img/logo-green.png";
// import { BASE_URL } from "../../config";

const Footer = () => {
  return (
    <footer className="footer row align-items-center m-0 py-3 px-5 mt-5">
      <div className="footer__logo col-12 col-md-2 text-center text-md-start">
        <img src={logo} alt="Natour logo" />
      </div>
      <ul className="footer__nav d-flex flex-wrap flex-column flex-md-row col-12 col-md-10 align-items-center justify-content-md-end mt-3 mt-md-1 mb-1">
        <li className="me-md-3">
          <a href="/#">About us</a>
        </li>
        <li className="me-md-3">
          <a href="/#">Download apps</a>
        </li>
        <li className="me-md-3">
          <a href="/#">Become a guide</a>
        </li>
        <li className="me-md-3">
          <a href="/#">Careers</a>
        </li>
        <li className="">
          <a href="/#">Contact</a>
        </li>
      </ul>
      <p className="footer__copyright text-center text-md-end my-2">
        &copy;{new Date().getFullYear()} by Raviphas R.
      </p>
    </footer>
  );
};

export default Footer;
