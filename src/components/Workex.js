import React from "react";
import "../styles/workex.css";
import SideNav from "./SideNav";
import ParticlesBg from "particles-bg";
import Infowx from "../components/Infowx";
import Navbari from "../components/Navbar";
import Fade from "react-reveal/Fade";

function Workex() {
  return (
    <div className="workex" id="Workex">
      <ParticlesBg type="cobweb" bg={true} color="#0A0A0A" />
      <div className="port__sidenav">
        <Navbari />
      </div>

      <div className="infosection">
        <h1 className="toptext">Work Experience</h1>
        <div className="headerinfo col">
          <div class="col">
            <Fade left>
              <div class="row">
                <Infowx
                  id="infomation"
                  header={"Rheem Manufacturing (Aug 2020 — Dec 2020)  "}
                  subinfo={" COOP Intern"}
                  info={
                    "Coop Intern at Rheem. Made digital forms using JSP and python , and used to manage mysql database in Rheemtechnology operations. Worked on many projects during the term. Made forms that helped to automate thebusiness management and workflow at Rheem"
                  }
                />
              </div>
            </Fade>
            <Fade right>
              <div class="row">
                <Infowx
                  id="infomation"
                  header={"Flashtract (Jan 2020 — May 2020) "}
                  subinfo={"Frontend/Machine learning developer Intern"}
                  info={
                    "Worked on React to make form for contracting service. Created drag and drop functionality to create the form. Made suggestion field model on spring java backend"
                  }
                />
              </div>
            </Fade>
            <Fade left>
              <div class="row">
                <Infowx
                  id="infomation"
                  header={"Planight (Aug 2020 — current)  "}
                  subinfo={"IOS App Developer/ Web Developer"}
                  info={
                    "React native/IOS App developer and Web developer at Planight. I was chosen as a developer for tiger cage competition . One of the main developers in the team, and Software Expert."
                  }
                />
              </div>
            </Fade>
            <Fade right>
              <div class="row">
                <Infowx
                  id="infomation"
                  header={"Auburn University (Sept 2018 — May 2020)"}
                  subinfo={"UTA"}
                  info={
                    "Undergraduate teaching assistant for Mathematics courses at college of science and mathematics. Tutored calculus 1, calculus 2, calculus 3, and differential equations."
                  }
                />
              </div>
            </Fade>
            <Fade left>
              <div class="row">
                <Infowx
                  id="infomation"
                  header={"Auburn University (Sept 2019 — May 2020)"}
                  subinfo={"UTA"}
                  info={
                    "Undergraduate teaching assistant for online Computer science courses at Auburn university. Tutored Java 1 , Java 2 ,Data structures and Algorithms and Discrete Mathematics."
                  }
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <footer className="footer__div" />
    </div>
  );
}

export default Workex;
