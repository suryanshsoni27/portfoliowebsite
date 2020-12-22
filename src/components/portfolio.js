import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../components/header.js";
import "../styles/portfolio.css";
// import Navbar from "../components/Navbar.js";
import ParticlesBg from "particles-bg";
import { Card } from "react-bootstrap";
// import { Autorenew } from "@material-ui/icons";
// import { Document, Page } from "react-pdf";

// import Loader from "../components/Loader";
import Contact from "../components/Contact";
import Carusel from "../components/Carusel";
import SideNav from "../components/SideNav";
import InfoCard from "../components/InfoCard";
// import ReactPDF from "@react-pdf/renderer";
import Navbari from "../components/Navbar";
import Pdffile from "../components/Pdffile";
export default function Portfolio() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div className="portfolio">
      <ParticlesBg type="cobweb" bg={true} color="#0A0A0A" />

      {/*<div className="port_navbar">
        <Navbar></Navbar>
  </div>*/}

      <div className="port__sidenav">
        <Navbari />
      </div>

      <div className="port__header">
        <Header></Header>
      </div>

      {/*<div className="port__welcomeimage">
        <h1>image</h1>
  </div>*/}

      <div>
        <Card className="port__aboutme" id="port__aboutme">
          <Card.Header>About me</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                Welcome to my page, i am Suryansh Soni, a Software Engineering
                Major from Auburn University
              </p>
            </blockquote>
          </Card.Body>
        </Card>
      </div>

      <div className="port__infocard">
        <InfoCard />
      </div>

      <div className="port__cara" id="port__cara">
        <Carusel />
      </div>

      <div className="port__resume" id="port__resume">
        {/*<Pdfrender />*/}
        <Pdffile />
      </div>

      <div className="port__contactme" id="port__contactme">
        <Contact />
      </div>
    </div>
  );
}
