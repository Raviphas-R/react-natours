import React from "react";

const ErrorPage = ({ msg }) => {
  return (
    <main>
      <div className="error mt-5 vh-100">
        <div>
          <h2 className="text-center text-danger">
            Uh oh! Something went wrong!
          </h2>
          <h2 className="text-center">😢 🤯</h2>
        </div>
        <div className="text-center">{msg}</div>
      </div>
    </main>
  );
};

export default ErrorPage;
