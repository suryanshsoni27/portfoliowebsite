import React from "react";
import "../styles/loader.css";

function Loader() {
  return (
    <div
      id="loader"
      className="d-flex justify-content-center align-items-center"
    >
      <img
        src="https://react-pdf.org/images/logo.png"
        alt="loader"
        className="image "
      />
      <p>loading</p>
    </div>
  );
}

export default Loader;
