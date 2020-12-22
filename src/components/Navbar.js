import React from "react";
import "../styles/navbar.css";
import SideNav from "./SideNav";
import { Nav, Navbar, Button } from "react-bootstrap";
function Navbari() {
  return (
    <div className="navbar__bar">
      <Navbar className="navbar__bar" expand="lg" bg="dark" variant="dark">
        <Nav.Item>
          <SideNav></SideNav>
        </Nav.Item>

        <Nav.Item className="btbt">
          <Button
            href={"https://github.com/suryanshsoni27?tab=repositories"}
            id="button__github"
            class="btn"
            size="sm"
            variant="dark"
          >
            GitHub
          </Button>
        </Nav.Item>
        <Nav.Item>
          <Button href="/#port__aboutme" class="btn" size="sm" variant="dark">
            About
          </Button>
        </Nav.Item>
        <Nav.Item>
          <Button href="/#port__contactme" class="btn" size="sm" variant="dark">
            Contact
          </Button>
        </Nav.Item>
        <Nav.Item>
          <Button href="/#port__resume" class="btn" size="sm" variant="dark">
            Resume
          </Button>
        </Nav.Item>
      </Navbar>
    </div>
  );
}

export default Navbari;
