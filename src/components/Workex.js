import React from "react";
import "../styles/workex.css";
import SideNav from "./SideNav";
import ParticlesBg from "particles-bg";

function Workex() {
  return (
    <div className="workex" id="Workex">
      <ParticlesBg type="cobweb" bg={true} color="#0A0A0A" />
      <div className="port__sidenav">
        <SideNav />
      </div>

      <div className="infosection">
        <h1>Work Experience</h1>
      </div>
    </div>
  );
}

export default Workex;
