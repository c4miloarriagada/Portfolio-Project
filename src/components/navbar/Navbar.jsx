import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import './Navbar.module.css'

export const NavbarLink = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark">
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{ color: "#ffd143" }}
        />
        <Navbar.Collapse className="justify-content-center text-center">
          <Nav >
            <Nav.Link
              as={Link}
              to={"/"}
              style={{ fontSize: "1.6rem", color: "#ffd143"}}
              className='nav-link-active'
              
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={"/about"}
              style={{ fontSize: "1.6rem", color: "#ffd143" }}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={"/works"}
              style={{ fontSize: "1.6rem", color: "#ffd143" }}
            >
              Works
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={"/skills"}
              style={{ fontSize: "1.6rem", color: "#ffd143" }}
            >
              Skills
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
