import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../components/header.js";
import "../styles/portfolio.css";
import Navbar from "../components/Navbar.js";
import ParticlesBg from "particles-bg";
import { Card, ListGroup } from "react-bootstrap";
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
        <Card>
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

      {/*<div className="port__signUp">
        <h1>sign up</h1>
      </div>
*/}

      <div className="port__contactme" id="port__contactme">
        <Card style={{ width: "120rem" }}>
          <ListGroup variant="flush">
            <ListGroup.Item>My Email : szscode2727@gmail.com</ListGroup.Item>
            <ListGroup.Item>Phone number : +1(334)-332-4627</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </div>
  );
}
