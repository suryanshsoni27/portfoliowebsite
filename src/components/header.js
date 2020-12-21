import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import suryansh from "../assets/suryansh.png";
import { Button } from "react-bootstrap";
import "../styles/header.css";
function Header() {
  return (
    <div>
      <div className="button">
        <Button
          className="butt"
          href="#port__aboutme"
          variant="secondary"
          size="sm"
        >
          About
        </Button>
        {""}
        <Button
          className="butt"
          href="#port__contactme"
          variant="secondary"
          size="sm"
        >
          Contact
        </Button>
        {""}
        <Button
          className="butt"
          href="#port__resume"
          variant="secondary"
          size="sm"
        >
          Resume
        </Button>
        {""}
      </div>

      <div>
        <img src={suryansh} className="suryansh__image" alt="" />
      </div>

      <div className="center">Hello!</div>
    </div>
  );
}

export default Header;
