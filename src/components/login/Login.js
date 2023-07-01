import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../../img/logo-green-small.png";
import { logIn } from "../../API";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
    const data = { email, password };
    logIn(data);
    // setEmail("");
    // setPassword("");
  };

  return (
    <>
      <main>
        <div className="login-form d-flex flex-column vh-100 align-items-center p-3">
          <Link to="/login" className="mt-5 mb-3">
            <img src={logo} alt="logo-images" className="login__logo-image" />
          </Link>

          <h3 className="login-form__header mb-4">Sign in to Natours</h3>

          <div className="card card__login-form">
            <div className="card-body">
              <form>
                <div className="mb-2">
                  <label className="mb-2">Email address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="login__input-email form-control"
                    value={email}
                    required
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="d-flex mb-2">
                    Password
                    <span className="form-label__forgotpassword  ms-auto">
                      <a href="/#">forgot password?</a>
                    </span>
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="login__input-password form-control"
                    value={password}
                    required
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="btn login__btn-login btn-primary"
                  onClick={onSubmit}
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
          <div className="card card__create-new-acc mt-4">
            <div className="card-body text-center">
              New to Kanban?
              <span className="create-new-acc__span ms-2">
                <Link to="/login">Create an account</Link>
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
