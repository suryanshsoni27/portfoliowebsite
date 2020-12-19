import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../components/header.js";
import "../styles/portfolio.css";
import Navbar from "../components/Navbar.js";
import ParticlesBg from "particles-bg";
import { Card, ListGroup, Carousel } from "react-bootstrap";
import { Autorenew } from "@material-ui/icons";
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
          <Carousel.Item interval={1000}>
            <a href="https://github.com/suryanshsoni27" className="d-block">
              <img
                href="https://github.com/suryanshsoni27"
                className="d-block m-auto w-50 h-auto"
                src="https://news.efinancialcareers.com/binaries/content/gallery/efinancial-careers/articles/2019/04/github.jpg"
                alt="First slide"
              />
            </a>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <a href="linkedin.com/in/suryansh-soni" className="d-block">
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

      <div className="port__contactme" id="port__contactme">
        <Card className="port__contactme" style={{ width: "auto" }}>
          <ListGroup className="port__contactme" variant="flush">
            <ListGroup.Item className="port__contactme">
              My Email : szscode2727@gmail.com
            </ListGroup.Item>
            <ListGroup.Item className="port__contactme">
              Phone number : +1(334)-332-4627
            </ListGroup.Item>
            <ListGroup.Item className="port__contactme">
              <a href="linkedin.com/in/suryansh-soni">
                linkedin.com/in/suryansh-soni
              </a>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </div>
  );
}
