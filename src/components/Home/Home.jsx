import React from "react";
import { useState } from "react";
import { NavbarLink } from "../navbar/Navbar";
import { Typewriter } from "react-simple-typewriter";



import Linkedin from "../assets/Linkedin.png";
import GitHub from "../assets/GitHub.png";


export const Home = () => {

  const [translate, setTranslate] = useState(false);

  const handleButton = ()=>{
    setTranslate(!translate)
  };

  return (
    <div className="background" >
      <NavbarLink /> 
      <div className="container text-center justify-content-center d-flex flex-column  p-5 ">
        <div className="row my-5">
          
          <h1 className="display-1  p-5 text-white"><Typewriter words={['Camilo Arriagada Vallejos']}/> </h1>
          <div className="col">
            <h2><i> Full Stack Web Developer</i></h2>
            </div>
          <div>
            <div>
              <br />
      
              {!translate ? 
              <div>
                <h3 className="mt-5 ">
                  Welcome to my portfolio, here I will show you all my projects and tell you about me and
                  my previous professional experience.
                </h3>
                <button type="button" onClick={handleButton} className="btn btn-outline-dark mt-5">ES</button>
              </div> : 
               <div>
                <div className="position-relative"> 
               </div>
               <h3 className="mt-5 ">
                Bienvenido a mi portafolio, aquí te mostraré todos mis proyectos y te contare un poco sobre mí y mi experiencia profesional.
               </h3>
               <button type="button" onClick={handleButton} class="btn btn btn-outline-dark mt-5">EN</button>
             </div>}
              <hr  size="3"/>
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
              <br/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
