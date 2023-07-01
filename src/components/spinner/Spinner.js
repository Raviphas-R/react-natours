import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 mb-5">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
