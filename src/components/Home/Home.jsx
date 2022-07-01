import React from "react";
import { NavbarLink } from "../navbar/Navbar";


import { Container, Overlay } from "react-bootstrap";
import Linkedin from "../assets/Linkedin.png";
import GitHub from "../assets/GitHub.png";
import style from "../Home/Home.module.css";

export const Home = () => {
  //css
  const styles = {
    color: "#FFFAFA",
    position: "relative",

 
  };
  const pStyle = {
    color: "#FFFAFA",
   
  };
  return (
  
      <div> 
        <NavbarLink />
        <div className="container text-center d-flex flex-column p-5">  
          <h1 className="display-1 p-5">
            I am Camilo Arriagada Vallejos.
          </h1>
          <div>
            <div >
             <br/>    
              <h3  className="mt-5" > 
           
              I am full stack web developer from Chile and  welcome to my portfolio  i will show you, all my projects and tell you about my  previous professional experience.
              </h3>
            
              <br/>
              <br/>
              <hr style={{color: "#FFFAFA"}}/>
          </div>
          </div>
        </div>
        <div className=" text-center ">
          <a
          
            rel="noreferrer"
            href="https://www.linkedin.com/in/camilo-arriagada-vallejos-9754b9229/"
            target="_blank"
          >
            <img alt="linkedin" src={Linkedin} width="100px" height="90px" />
          </a>
          <a
         
            rel="noreferrer"
            href="https://github.com/c4miloarriagada/"
            target="_blank"
          >
            <img alt="github" src={GitHub} width="100px" height="90px" />
          </a>
        </div>
      </div>
  
  );
};
