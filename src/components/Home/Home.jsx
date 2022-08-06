import React from "react";
import { useState } from "react";
import { NavbarLink } from "../navbar/Navbar";
import { Typewriter } from "react-simple-typewriter";

import "./Home.css";
import Linkedin from "../assets/Linkedin.png";
import GitHub from "../assets/GitHub.png";

export const Home = () => {
  const [translate, setTranslate] = useState(false);

  const handleButton = () => {
    setTranslate(!translate);
    scroll(0, 0);
  };

  return (
    <div className="homebackground">
      <NavbarLink />
      <div className="container text-center justify-content-center d-flex flex-column  p-5 animate__animated animate__fadeIn">
        <div className="row my-5">
          <h1 className="display-1  p-5 text-white title">
            <Typewriter words={["Camilo Arriagada Vallejos"]} />{" "}
          </h1>
          <div className="col">
            <h3>
              <i className="hometext"> Full Stack Web Developer</i>
            </h3>
          </div>
          <div>
            <div>
              <br />

              {!translate ? (
                <div>
                  <h3 className="mt-5 hometext">
                    Welcome to my portfolio, here I will show you all my
                    projects and tell you about me and my previous professional
                    experience.
                  </h3>
                  <button
                    type="button"
                    onClick={handleButton}
                    className="btn btn-outline-dark mt-5"
                  >
                    ES
                  </button>
                </div>
              ) : (
                <div>
                  <div className="position-relative"></div>
                  <h3 className="mt-5 hometext">
                    Bienvenido a mi portafolio, aquí te mostraré todos mis
                    proyectos y te contare un poco sobre mí y mi experiencia
                    profesional.
                  </h3>
                  <button
                    type="button"
                    onClick={handleButton}
                    className="btn btn-outline-dark mt-5 "
                  >
                    EN
                  </button>
                </div>
              )}
              <hr size="3" />
              <div className="mt-5">
                <a
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/camilo-arriagada-vallejos-9754b9229/"
                  target="_blank"
                >
                  <img
                    alt="linkedin"
                    src={Linkedin}
                    width="100px"
                    height="90px"
                  />
                </a>{" "}
                <a
                  rel="noreferrer"
                  href="https://github.com/c4miloarriagada/"
                  target="_blank"
                >
                  <img alt="github" src={GitHub} width="100px" height="90px" />
                </a>
              </div>
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
