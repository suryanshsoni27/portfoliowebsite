import React, { Image } from "react";
import "bootstrap/dist/css/bootstrap.css";
import suryansh from "../assets/suryansh.png";
import "../styles/header.css";
function Header() {
  return (
    <div>
      <img src={suryansh} className="suryansh__image" alt="" />
    </div>
  );
}

export default Header;
