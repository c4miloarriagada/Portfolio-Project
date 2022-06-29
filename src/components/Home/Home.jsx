import React from "react";
import { NavbarLink } from "../navbar/Navbar";

import Linkedin from "../assets/Linkedin.png";
import GitHub from "../assets/GitHub.png";
import style from "../Home/Home.module.css";

export const Home = () => {
  //css
  const styles = {
    color: "#FFFAFA",
    position: "relative",
    margin: "90px",
    fontSize: "5.0vw",
  };
  const pStyle = {
    color: "#FFFAFA",
    fontSize: "1.5vw",
  };
  return (
    <div className={style.all}>
      <div> 
        <NavbarLink />
        <div>
          <h1 style={styles}>
            I am Camilo Arriagada Vallejos.
          </h1>
          <div>
            <div class="container">
             <br/>
             <div class="row">
              <div style={pStyle} class='col'> 
           
              I am full stack web developer from Chile and  welcome to my portfolio  i will show you, all my projects and tell you about my  previous professional experience.
              <br/>
              <br/>
              <hr style={{color: "#FFFAFA"}}/>
              <br/>
              <br/>
        

              </div>
             </div>
            </div>
          </div>
        </div>
        <footer>
          <a
            style={styles}
            rel="noreferrer"
            href="https://www.linkedin.com/in/camilo-arriagada-vallejos-9754b9229/"
            target="_blank"
          >
            <img alt="linkedin" src={Linkedin} width="100px" height="90px" />
          </a>
          <a
            style={styles}
            rel="noreferrer"
            href="https://github.com/c4miloarriagada/"
            target="_blank"
          >
            <img alt="github" src={GitHub} width="100px" height="90px" />
          </a>
        </footer>
      </div>
    </div>
  );
};
