import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import styles from './Navbar.module.css'

export const NavbarLink = () => {

  const locate = useLocation()
  const [ url, setUrl ] = useState(null)
  useEffect(()=>{
    setUrl(locate.pathname);
  }, [locate])



  return (
    <div>
      <Navbar collapseOnSelect expand="md" bg="dark" className="py-0">
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav "
    
        />
        <Navbar.Collapse className="justify-content-center text-center">
          <Nav >
            <Nav.Link
              as={Link}
              to={"/"}
              style={{ fontSize: "1.6rem", color: "#ffd143"}}
              className={(url === '/' ? styles.active :  styles.link)}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={"/about"}
              style={{ fontSize: "1.6rem", color: "#ffd143" }}
              className={(url === '/about' ? styles.active :  styles.link)}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={"/works"}
              style={{ fontSize: "1.6rem", color: "#ffd143" }}
              className={(url === '/works' ? styles.active :  styles.link)}
            >
              Works
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={"/skills"}
              style={{ fontSize: "1.6rem", color: "#ffd143" }}
              className={(url === '/skills' ? styles.active :  styles.link)}
            >
              Skills
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
