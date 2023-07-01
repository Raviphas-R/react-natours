import React from "react";
import Header from "../header/Header";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../../img/logo-green-small.png";

const LoginPage = () => {
  return (
    <>
      <Header />
      <main>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div>
            <a href="/">
              <img src={logo} alt="logo-images" />
            </a>
          </div>
          <div>
            <h3 className="login-form__header">Sign in to Natours</h3>
          </div>

          <div className="card card__login-form">
            <div className="card-body">
              <form>
                <div className="mb-2">
                  <label>Email address</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    name="email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label>
                    Password
                    <span className="form-label__forgotpassword">
                      <a href="/#">forgot password?</a>
                    </span>
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    name="password"
                    required
                  />
                </div>
                <button type="submit" className="btn login__btn btn-primary">
                  Sign In
                </button>
              </form>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-body text-center">
              New to Kanban?
              <span className="create-new-acc__span ms-2">
                <Link to="/sign-up">Create an account</Link>
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
