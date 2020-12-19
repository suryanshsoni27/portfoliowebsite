import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../components/header.js";
import "../styles/portfolio.css";
import Navbar from "../components/Navbar.js";
import ParticlesBg from "particles-bg";

export default function Portfolio() {
  return (
    <div>
      <ParticlesBg type="cobweb" bg={true} />
      <div className="port_navbar">
        <Navbar></Navbar>
      </div>

      <div className="port__header">
        <Header></Header>
      </div>

      <div className="port__welcomeimage">
        <h1>image</h1>
      </div>

      <div className="port__aboutme">
        <h1>about me</h1>
      </div>

      <div className="port__signUp">
        <h1>sign up</h1>
      </div>

      <div className="port__contactme">
        <h1>contact me</h1>
      </div>
    </div>
  );
}
