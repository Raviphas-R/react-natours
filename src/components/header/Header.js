import React from "react";
import { BASE_URL } from "../../config";
import { Link } from "react-router-dom";
import logo from "../../img/logo-white.png";
import "./Header.css";
import { logOut } from "../../API";

const Header = ({ user }) => {
  console.log(user);
  return (
    <header>
      <div className="header d-flex position-relative align-items-center py-2 px-3">
        <Link
          to="/tours"
          className="header__el d-none d-sm-inline-block fw-bold text-shadow my-"
        >
          All tours
        </Link>
        <Link to="/tours" className="header__logo position-absolute">
          <img src={logo} className="header__logo my-2" alt="Natours logo" />
        </Link>

        {
          user ? (
            <>
              <div className="d-flex align-items-center ms-auto my-2 me-lg-3">
                <Link to="/login" className="header__el" onClick={logOut}>
                  Log out
                </Link>
                <a className="" href="/me">
                  <img
                    className="nav__user-img"
                    src={`${BASE_URL}/img/users/${user.photo}`}
                    alt={`Images of ${user.name}`}
                  />
                  {/* <span>{user.name}</span> */}
                </a>
              </div>
            </>
          ) : null
          // <>
          //   <div className="d-flex align-items-center ms-auto my-2 me-lg-3">
          //     <Link
          //       to="/login"
          //       className="header__el header__login  me-3 me-sm-4"
          //     >
          //       Log in
          //     </Link>
          //     <a
          //       className="header__el header__signup rounded-pill me-sm-3 px-3 py-1"
          //       href="/#"
          //     >
          //       Sign up
          //     </a>
          //   </div>
          // </>
        }
      </div>
    </header>
  );
};

export default Header;
