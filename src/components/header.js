import React, { Image } from "react";
import "bootstrap/dist/css/bootstrap.css";
import suryansh from "../assets/suryansh.png";
import "../styles/header.css";
function Header() {
  return (
    <div>
      <div>
        <img src={suryansh} className="suryansh__image" alt="" />
      </div>

      <div className="center">Hello!</div>
    </div>
  );
}

export default Header;
