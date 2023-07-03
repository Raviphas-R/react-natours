import React, { useContext, useState } from "react";
import "./Header.css";
import { BASE_URL } from "../../config";
import { Link } from "react-router-dom";
import logo from "../../img/logo-white.png";
import { AuthContext } from "../../contexts/AuthContext";

const Header = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const { logout } = useContext(AuthContext);
  const onLogout = async () => {
    setLoading(true);
    const response = await logout();
    if (response === "success") {
      setLoading(false);
    }
  };
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

        {user ? (
          <>
            <div className="d-flex align-items-center justify-content-between ms-auto my-1 my-sm-2 me-lg-3">
              <img
                className="nav__user-img me-2"
                src={`${BASE_URL}/img/users/${user.photo}`}
                alt={`Images of ${user.name}`}
              />
              <span className="header__user-name me-2 me-md-3">
                {user.name.split(" ")[0]} {user.name.split(" ")[1].slice(0, 1)}.
              </span>
              <button
                className="header__logout-btn mt-1 mt-md-0"
                onClick={onLogout}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <i className="fa fa-spinner fa-spin me-2"></i>Loading
                  </>
                ) : (
                  "Log out"
                )}
              </button>
            </div>
          </>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
