import React from "react";
import "../styles/navbar.css";
import ParticlesBg from "particles-bg";
function Navbar() {
  const myFunction = () => {
    // var ReactDOM = require("react-dom");
    // // var x = document.getElementById("myTopnav");
    // var x = ReactDOM.findDOMNode("myTopnav").value;
    // if (x.className === "topnav") {
    //   x.className += " responsive";
    // } else {
    //   x.className = "topnav";
    // }
  };

  return (
    <div>
      <div className="topnav" id="myTopnav">
        <a href="#home" className="active">
          Home
        </a>

        <a href="#port__contactme">Contact</a>
        <a href="#port__aboutme">About</a>
        <a href="#id" class="icon" onClick={myFunction()}>
          <i className="fa fa-bars"></i>
        </a>
      </div>

      <div styles="padding-left:16px"></div>
    </div>
  );
}

export default Navbar;
