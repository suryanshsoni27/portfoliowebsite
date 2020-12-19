import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../components/header.js";
import "../styles/portfolio.css";
import Navbar from "../components/Navbar.js";
import ParticlesBg from "particles-bg";
import { Card, ListGroup, Carousel } from "react-bootstrap";
import { Autorenew } from "@material-ui/icons";
import { Document, Page } from "react-pdf";
import Pdffile from "../components/Pdffile";
import Loader from "../components/Loader";

export default function Portfolio() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div>
      <ParticlesBg type="cobweb" bg={true} color="black" />

      <div className="port_navbar">
        <Navbar></Navbar>
      </div>

      <div className="port__header">
        <Header></Header>
      </div>

      {/*<div className="port__welcomeimage">
        <h1>image</h1>
  </div>*/}

      <div className="port__aboutme" id="port__aboutme">
        <Card className="port__aboutme">
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

      <div className="port__cara" id="port__cara">
        <Carousel>
          <Carousel.Item interval={8000}>
            <a href="https://github.com/suryanshsoni27" className="d-block">
              <img
                href="https://github.com/suryanshsoni27"
                className="d-block m-auto w-50 h-auto"
                src="https://news.efinancialcareers.com/binaries/content/gallery/efinancial-careers/articles/2019/04/github.jpg"
                alt="First slide"
              />
            </a>
          </Carousel.Item>
          <Carousel.Item interval={8000}>
            <a
              href="https://www.linkedin.com/in/suryansh-soni?trk=profile-badge"
              className="d-block"
            >
              <img
                href="www.linkedin.com/in/suryansh-soni"
                className="d-block m-auto w-50 h-100"
                src="https://www.kinesisinc.com/wp-content/uploads/2020/04/linkedin-101-hero@2x.png"
                alt="Third slide"
              />
            </a>
          </Carousel.Item>
        </Carousel>
      </div>

      {/*<div className="port__signUp">
        <h1>sign up</h1>
      </div>
*/}
      <div className="port__resume">
        <Pdffile />
      </div>

      <div className="port__contactme" id="port__contactme">
        <Card className="port__contactme" style={{ width: "auto" }}>
          <ListGroup className="port__contactme" variant="flush">
            <ListGroup.Item className="port__contactme">
              <a href="mailto: szscode2727@gmail.com">
                My Email : szscode2727@gmail.com
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="port__contactme">
              <a href="tel:+1(334)-332-4627">Phone number : +1(334)-332-4627</a>
            </ListGroup.Item>
            <ListGroup.Item className="port__contactme">
              <div
                class="LI-profile-badge"
                data-version="v1"
                data-size="medium"
                data-locale="en_US"
                data-type="vertical"
                data-theme="dark"
                data-vanity="suryansh-soni"
              >
                <a
                  class="LI-simple-link"
                  href="https://www.linkedin.com/in/suryansh-soni?trk=profile-badge"
                >
                  linkedin.com/in/suryansh-soni
                </a>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </div>
  );
}
