import React from "react";
import { Card } from "react-bootstrap";
import "../styles/workex.css";

function Infowx({ header, info, subinfo }) {
  return (
    <div className="infoworkex">
      <Card className="infoworkex__sub">
        <Card.Header>{header}</Card.Header>
        <Card.Body>
          <Card.Subtitle className=" ">
            <p> {subinfo} </p>
          </Card.Subtitle>
          <blockquote className="blockquote mb-0">
            <p> {info} </p>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Infowx;
