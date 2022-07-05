import React from "react";
import { NavbarLink } from "../navbar/Navbar";
import { Container, Row, Col } from "react-bootstrap";

import style from "../About/About.module.css";

export const About = () => {


  return (
    
      
      <div className="container" >
        <NavbarLink />
        <div className="container d-flex justify-content-center align-items-center h-100">

        
      <div class="row mt-5">
        <h1 className="text-center mt-3 display-5"> About me </h1>
        <div className="col text-center text-white" >
         <h3 className="mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni quasi consequatur possimus quas dicta, exercitationem at similique eos earum dolores, veniam modi quibusdam aliquam nobis soluta? Ipsam animi explicabo esse?</h3> 
        </div>
        <div className="row mt-5">
        <div className="col text-center text-white mt-5">
        <p className="text-white mt-5">
                &copy; Camilo Arriagada Vallejos
              </p>
              <address>
                <a className="text-sucess text-decoration-none" href="mailto:camilo.arriagadav@gmail.com">
                  {" "}
                  📩 Contact me
                </a>
              </address>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};
