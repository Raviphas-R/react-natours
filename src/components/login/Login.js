import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../../img/logo-green-small.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const { user, login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const [onLogin, SetOnLogin] = useState(false);

  ////////// Solve when logout, it will navigate back to overview first
  useEffect(() => {
    if (user) {
      console.log("login page");
      navigate("/tours");
    }
  });
  /////////
  const onSubmit = async (event) => {
    event.preventDefault();
    setErrorMsg(null);
    SetOnLogin(true);
    const data = { email, password };
    const response = await login(data);
    const status = response.status;
    if (status === "fail") {
      setErrorMsg(response.message);
    } else {
      setEmail(null);
      setErrorMsg(null);
    }
    setPassword("");
    SetOnLogin(false);
  };

  return (
    <>
      <main>
        <div className="login-form d-flex flex-column vh-100 align-items-center p-3">
          <Link to="/login" className="mt-5 mb-3">
            <img src={logo} alt="logo-images" className="login__logo-image" />
          </Link>
          <h3 className="login-form__header mb-4">Sign in to Natours</h3>
          {errorMsg ? (
            <>
              <div className="card card__login-form__errormsg text-center mb-3">
                <div className="card-body alert-card">{errorMsg}</div>
              </div>
            </>
          ) : null}
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
                  {onLogin ? "Loading..." : "Sign In"}
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
