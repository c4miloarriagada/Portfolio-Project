import React from "react";
import { NavbarLink } from "../navbar/Navbar";


import Linkedin from "../assets/Linkedin.png";
import GitHub from "../assets/GitHub.png";


export const Home = () => {
  return (
    <div >
      <NavbarLink />
      <div className="container text-center justify-content-center d-flex flex-column p-5 text-muted h100">
        <div className="row my-5">
          <h1 className="display-1  p-5 text-dark"> Camilo Arriagada Vallejos</h1>
          <div className="col">
            <h2><i> Full Stack Web Developer</i></h2>
            </div>
          <div>
            <div>
              <br />
              <div>
                <h3 className="mt-5 ">
                  Welcome to my portfolio i will show you all my projects and tell you about me and
                  my previous professional experience.
                </h3>
              </div>

              <br />
              <br />
              <hr className="text-white" size="5"/>
              <div class=""></div>
              <a
                rel="noreferrer"
                href="https://www.linkedin.com/in/camilo-arriagada-vallejos-9754b9229/"
                target="_blank"
              >
                <img
                className="mt-5  animate__animated animate__fadeIn" 
                  alt="linkedin"
                  src={Linkedin}
                  width="100px"
                  height="90px"
                />
              </a>
                {' '}
              <a
                rel="noreferrer"
                href="https://github.com/c4miloarriagada/"
                target="_blank"
              > 
              
                <img className="mt-5 animate__animated animate__fadeIn" alt="github" src={GitHub} width="100px" height="90px" />
              </a>
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
