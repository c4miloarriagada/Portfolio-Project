import React from "react";
import { NavbarLink } from "../navbar/Navbar";
import { Card } from "../Card/Card.jsx";
import { Container } from "react-bootstrap";
import style from "../Works/Works.module.css";

export const Works = () => {
  const pStyle = {
    color: "#FFFAFA",
  };

  return (
    <div>
    <nav>

      <NavbarLink/>
    </nav>
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
          <div className="col-md-4">
           <Card />
          </div>
          <div className="col-md-4">
           <Card />
          </div>
        </div>
      </div>
      </div>
     
  );
};
