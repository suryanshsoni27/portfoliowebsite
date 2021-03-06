import React from "react";
import "../styles/SideNav.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
function SideNav() {
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  return (
    <div>
      <div id="mySidenav" className="sidenav">
        <Link to="/">Home</Link>
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          &times;
        </a>

        <Link to="/Workex">Work Experience</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Path_finding_Visualizer">Path Finder</Link>
        {/*<Link to="/tictactoe">tictactoe ?</Link>*/}
        {/*<Link to="/Chat">Blog Room</Link>*/}
      </div>
      <span className="spantag" onClick={openNav}>
        &#9776;
      </span>
    </div>
  );
}

export default SideNav;
