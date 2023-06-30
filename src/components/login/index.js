import React from "react";
import Header from "../header";
import Footer from "../footer";

const LoginPage = () => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="login-form" style={{ height: "120vh" }}>
          <h2 className="heading-secondary ma-bt-lg">Log into your account</h2>
          <form className="form form--login">
            <div className="form__group">
              <label htmlFor="email" className="form__label">
                Email address
              </label>
              <input
                id="email"
                type="email"
                className="form__input"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="form__group ma-bt-md">
              <label htmlFor="password" className="form__label">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="form__input"
                placeholder="••••••••"
                required
                minLength="8"
              />
            </div>
            <div className="form__group">
              <button className="btn btn--green">Login</button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LoginPage;
