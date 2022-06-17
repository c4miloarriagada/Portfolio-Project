import React from "react";
import { Navbar } from "../navbar/Navbar";

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
    fontSize: "1.4vw",
  };
  return (
    <div className={style.all}>
      <div> 
        <Navbar />
        <div>
          <h1 style={styles}>
            I am Camilo Arriagada Vallejos.
          </h1>
          <div>
            <div class="container">
              <section style={pStyle}>
                AN enthusiast of technology and full stack developer from Chile
                , i really love acquire new knowledge relationed with my
                interests, technology, music and sport are my passions. I just
                finished my step of Soy Henry's Bootcamp , and i am ready for
                new challenges in my professional career.
              </section>
             <br/>
             <br/>
             <br/>
             <hr style={{color: "#FFFAFA"}}/>
            </div>
          </div>
        </div>
        <div>
          <a
            style={styles}
            rel="noreferrer"
            href="https://www.linkedin.com/in/camilo-arriagada-vallejos-9754b9229/"
            target="_blank"
          >
            <img alt="linkedin" src={Linkedin} width="120px" height="90px" />
          </a>
          <a
            style={styles}
            rel="noreferrer"
            href="https://github.com/c4miloarriagada/"
            target="_blank"
          >
            <img alt="github" src={GitHub} width="120px" height="90px" />
          </a>
        </div>
      </div>
    </div>
  );
};
