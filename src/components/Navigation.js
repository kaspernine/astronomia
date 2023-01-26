import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
  return (
    <div className="navigation">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Astronomia</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              href="/about"
              className={(nav) => (nav.active ? "active" : "")}
            >
              A propos
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
