import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavbarLink = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="secondary">
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{ color: "#FFFAFA" }}
        />
        <Navbar.Collapse className="justify-content-center text-center">
          <Nav>
            <Nav.Link
              as={Link}
              to={"/"}
              style={{ fontSize: "1.6rem", color: "#f1b7d1" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={"/about"}
              style={{ fontSize: "1.6rem", color: "#f1b7d1" }}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={"/works"}
              style={{ fontSize: "1.6rem", color: "#f1b7d1" }}
            >
              Works
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={"/skills"}
              style={{ fontSize: "1.6rem", color: "#f1b7d1" }}
            >
              Skills
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
