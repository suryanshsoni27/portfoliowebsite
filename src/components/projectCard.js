import React from "react";
import { Card } from "react-bootstrap";
import "../styles/projects.css";

function ProjectCard({ Header, Title, Text, link }) {
  return (
    <div>
      <a className="anchor" id="anchor" href={link}>
        <Card className="coinfo" border="dark" style={{ width: "15em" }}>
          <Card.Header>{Header}</Card.Header>
          <Card.Body>
            <Card.Title>{Title}</Card.Title>
            <Card.Text>{Text}</Card.Text>
          </Card.Body>
        </Card>
      </a>
    </div>
  );
}

export default ProjectCard;
