import React from "react";
import { Card } from "react-bootstrap";
import "../styles/info.css";
import suryansh from "../assets/suryansh.png";

function Info({ header, info, title, image }) {
  return (
    <div>
      <Card className="info__card">
        <Card.Header>{header}</Card.Header>
        <Card.Img variant="top" src={image} className="card-img-top" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{info}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Info;
