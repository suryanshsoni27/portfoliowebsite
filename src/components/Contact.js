import React from "react";
import { Card, ListGroup, Carousel } from "react-bootstrap";
function Contact() {
  return (
    <div>
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
  );
}

export default Contact;
