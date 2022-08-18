import React, { useState } from "react";
import { NavbarLink } from "../navbar/Navbar";
import { Typewriter } from "react-simple-typewriter";

import "./About.css";

export const About = () => {
  const [translate, setTranslate] = useState(false);

  const handleButton = () => {
    setTranslate(!translate);
    scroll(0, 0);
  };

  return (
    <div className="aboutbackground">
      <NavbarLink />
      {!translate ? (
        <div className="container d-flex justify-content-center align-items-center ">
          <div class="row mt-1">
            <h1 className="text-center mt-3 display-5  title text-white">
              <Typewriter words={["About me"]} />
            </h1>
            <hr size="3" />
            <div className="col text-center text-white">
              <div className="aboutcard container mt-5 animate__animated animate__fadeIn">
                <h4 className=" mt-3 container ">
                  Full Stack web developer, I just finished my way through soy
                  Henry{" "}
                  <a
                    href="https://www.soyhenry.com/"
                    target="_blank"
                    rel="noreferrer"
                    text="go to soyHenry"
                  >
                    <img
                      width="25"
                      height="25"
                      src="https://user-images.githubusercontent.com/86882630/174009890-4daeb2e8-054f-49b5-909f-67789a6b6e03.jpeg"
                    />
                  </a>{" "}
                  bootcamp and I think that was a amazing experience ,for now I'm doing the aceleration full stack React JS / Node Js in <a  href="https://www.alkemy.org/"
                    target="_blank"
                    rel="noreferrer"
                    text="go to Alkemy"
                    className="alkemy"> Alkemy.org </a> to get my firts IT job. I was
                  working for a lot of years in the aviation field as cabin crew
                  and also I'm commercial pilot.
                  <br />
                  For that reason I've developed soft skills and understood the
                  importance of that skills.
                  <br />
                  <br />
                  Comunication , teamwork, problems management and resolution,
                  are some of my features. For now I'm searching new challenges
                  in my professional carrer while I keep studying other
                  technologies, I literally fell in love with back end and
                  language like TypeScript, is amazing. <br />
                  But I dont have any problem to work in front end with React Js
                  and tools like redux or simply learn another framework, this
                  website was developed in React Js and Bootstrap 5.
                  <br />
                  <br />
                  About me, I'm a chill guy that really love music and
                  technology, in my free time I like to study, play guitar and
                  play videogames or share with my friends and family .<br />
                  <br />
                  If you want to contact me ,I left a direct way to send me a
                  e-mail below, or simply check my LinkedIn and Github!
                </h4>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col text-center text-white mt-2">
                <div>
                  <button
                    type="button"
                    onClick={(e) => handleButton()}
                    className="btn btn-outline-dark mt-5 "
                  >
                    ES
                  </button>
                  <address className="mt-3">
                    <a
                      className="text-info text-decoration-none"
                      href="mailto:camilo.arriagadav@gmail.com"
                    >
                      {" "}
                      📩 Contact me
                    </a>
                    <p className="text-white mt-4">
                      &copy; Camilo Arriagada Vallejos
                    </p>
                    <br />
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container d-flex justify-content-center align-items-center">
          <div class="row mt-3">
            <h2 className="text-center display-5  text-white">
              <Typewriter words={["Sobre mí"]} />
            </h2>
            <hr size="3" />
            <div className="col text-center text-white">
              <div className="aboutcard container mt-1 animate__animated animate__fadeIn">
                <h4 className=" mt-3 container ">
                  Desarrollador web full stack, acabo de terminar mi paso por el
                  bootcamp soy Henry{" "}
                  <a
                    href="https://www.soyhenry.com/"
                    target="_blank"
                    rel="noreferrer"
                    text="go to soyHenry"
                  >
                    <img
                      width="25"
                      height="25"
                      src="https://user-images.githubusercontent.com/86882630/174009890-4daeb2e8-054f-49b5-909f-67789a6b6e03.jpeg"
                    />
                  </a>{" "}
                  y me pareció una excelente experiencia, por ahora estoy en <a  href="https://www.alkemy.org/"
                    target="_blank"
                    rel="noreferrer"
                    text="go to Alkemy"
                    className="alkemy"> Alkemy.org </a> realizando la aceleracion full stack de React JS/ Node JS, para conseguir mi primer trabajo IT . Trabajé durante muchos
                  años en el campo de la aviación como tripulante de cabina,
                  también soy piloto comercial.
                  <br />
                  Por lo mismo, desarrollé excelentes habilidades blandas y
                  también entendí su importancia.
                  <br />
                  <br />
                  Comunicación , trabajo en equipo, manejo y resolución de
                  problemas, son algunas de mis características. Por ahora estoy
                  buscando nuevos desafios en mi carrera profesional mientras me
                  mantengo estudiando otras tecnologías, literalmente me enamoré
                  del back end como también de TypeScript lo encuentro
                  increíblemente bueno <br />
                  Pero no tengo problema en trabajar en front end con React Js o
                  herramientas como redux o simplemente aprender otro framework,
                  esta página la desarrolle con React y Bootstrap 5.
                  <br />
                  <br />
                  Sobre mí, soy un tipo tranquilo que realmente ama la música y
                  la tecnología,en mi tiempo libre me gusta estudiar, tocar la
                  guitarra , jugar algún videojuego o compartir con mis amigos y
                  familia.
                  <br />
                  <br />
                  Si quieres contactarme ,abajo te dejo una forma de enviarme un
                  correo directamente, o simplemente puedes ingresar a mis redes
                  como LinkedIn y Github!
                </h4>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col text-center text-white mt-2">
                <div>
                  <button
                    type="button"
                    onClick={handleButton}
                    className="btn btn-outline-dark mt-5"
                  >
                    EN
                  </button>
                  <address className="mt-3">
                    <a
                      className="text-info text-decoration-none"
                      href="mailto:camilo.arriagadav@gmail.com"
                    >
                      {" "}
                      📩 Contáctame
                    </a>
                    <p className="text-white mt-3">
                      &copy; Camilo Arriagada Vallejos
                    </p>
                  </address>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
