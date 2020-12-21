import React from "react";
import "../styles/projects.css";
import SideNav from "./SideNav";

import ParticlesBg from "particles-bg";
function Projects() {
  return (
    <div className="projects__main">
      <SideNav />
      <ParticlesBg type="cobweb" num={200} bg={false} />
      <footer>
        <div className="footer__div">hello</div>
      </footer>
    </div>
  );
}

export default Projects;
