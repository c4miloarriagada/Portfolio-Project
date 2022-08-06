import React, { useState } from "react";
import { NavbarLink } from "../navbar/Navbar";
import { Card } from "../Card/Card.jsx";
import { Typewriter } from "react-simple-typewriter";
import { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Works.css";

export const Works = () => {
  const [translate, setTranslate] = useState(false);

  const handleButton = () => {
    setTranslate(!translate);
    scroll(0, 0);
  };

  return (
    <div className="background">
      <NavbarLink />
      <div className="container ">
        {!translate ? (
          <>
            <h1 className="text-center mt-1 display-5 text-white">
              <Typewriter words={["Projects"]} />
            </h1>
            <hr size="4" />
            <Carousel className="main-slide">
              <div>
                <img src="https://res.cloudinary.com/dwtkwakbc/image/upload/v1657299559/logosportfolio/home_iripgj.png" />
                <p className="legend">
                  This website was my first project for Henry Bootcamp, consists
                  in building an a application with React JS, Redux, Node JS,
                  Express, PostgreSQL, Sequelize some features are searchbar ,
                  different filters , and a controlled form with JavaScript. You
                  can check the website (for desktop only).
                  <br />
                  <a
                    href="https://countries-b5zm2jed2-c4miloarriagada.vercel.app/"
                    className="link btn btn-light btn-sm"
                    target="_blank"
                  >
                    Website
                  </a>{" "}
                  <a
                    href="https://github.com/c4miloarriagada/Countries"
                    className="link btn btn-light btn-sm"
                    target="_blank"
                  >
                    Repository
                  </a>
                </p>
              </div>
              <div>
                <img src="https://res.cloudinary.com/dwtkwakbc/image/upload/v1659646522/logosportfolio/vinotecaportfolio_iavdbe.png" />
                <p className="legend">
                  This website is a wine e-commerce app built for our final
                  group project for Henry Bootcamp. We use React Js, Redux, Node
                  JS, Express, MongoDB and has the following features: Google
                  Identity , Mercado Pago , autentication, admin dashboard,
                  feedback, filters, controlled forms, personalized API RESTful
                  and more.
                  <br />
                  <a
                    href="https://wine-ecommercew.vercel.app/"
                    className="link btn btn-light btn-sm"
                    target="_blank"
                  >
                    Website
                  </a>{" "}
                  <a
                    href="https://github.com/vinoteca-ecommerce/wineEcommerce"
                    className="link btn btn-light btn-sm"
                    target="_blank"
                  >
                    Repository
                  </a>
                </p>
              </div>
              <div>
                <img src="https://res.cloudinary.com/dwtkwakbc/image/upload/v1659647263/logosportfolio/financeportfolio_v8vk8r.png" />
                <p className="legend">
                  Project for apply to Alkemy.org , is a full stack project that
                  consist in a application to management your deposits or
                  withdraws to bring the control of your finances, the back end
                  was built on TypeScript, Node Js, Express, PostgreSQL, JWT
                  autentication and the front with React Js, Redux and
                  React-Bootsrap.
                  <br />
                  <a
                    href="https://github.com/c4miloarriagada/Alkemy-Project"
                    className="link btn btn-light btn-sm"
                    target="_blank"
                  >
                    Repository
                  </a>
                </p>
              </div>
            </Carousel>
            <div className="text-center">
              <button
                type="button"
                onClick={(e) => handleButton()}
                className="btn btn-outline-dark mt-4"
              >
                ES
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-center mt-1 display-5 text-white">
              <Typewriter words={["Proyectos"]} />
            </h2>
            <hr size="3" />
            <Carousel className="main-slide">
              <div>
                <img src="https://res.cloudinary.com/dwtkwakbc/image/upload/v1657299559/logosportfolio/home_iripgj.png" />
                <p className="legend">
                  Este sitio web fue mi primer proyecto para el bootcamp de
                  Henry, consiste en crear una aplicación con React JS, Redux,
                  Node JS, Express, PostgreSQL, Sequelize y algunas
                  características son barra de busqueda, diferentes filtros,
                  formulario controlado vía JavaScript. Puedes visitar la web
                  (solo para escritorio) o el repositorio abajo!
                  <br />
                  <a
                    href="https://countries-b5zm2jed2-c4miloarriagada.vercel.app/"
                    className="link btn btn-light btn-sm"
                    target="_blank"
                  >
                    Website
                  </a>{" "}
                  <a
                    href="https://github.com/c4miloarriagada/Countries"
                    className="link btn btn-light btn-sm"
                    target="_blank"
                  >
                    Repositorio
                  </a>
                </p>
              </div>
              <div>
                <img src="https://res.cloudinary.com/dwtkwakbc/image/upload/v1659646522/logosportfolio/vinotecaportfolio_iavdbe.png" />
                <p className="legend">
                  Este fue mi proyecto grupal y final para el bootcamp de Henry,
                  nosotros utilizamos React JS, Redux, Node JS, Express, MongoDB
                  y algunas de sus características son: Google Identity, Mercado
                  Pago, sistema de autenticación, panel de administrador,
                  sistema de feedback, formularios controlados, una API RESTful
                  personalizada y mucho más!
                  <br />
                  <a
                    href="https://wine-ecommercew.vercel.app/"
                    className="link btn btn-light btn-sm"
                    target="_blank"
                  >
                    Website
                  </a>{" "}
                  <a
                    href="https://github.com/vinoteca-ecommerce/wineEcommerce"
                    className="link btn btn-light btn-sm"
                    target="_blank"
                  >
                      Repositorio
                  </a>
                </p>
              </div>
              <div>
                <img src="https://res.cloudinary.com/dwtkwakbc/image/upload/v1659647263/logosportfolio/financeportfolio_v8vk8r.png" />
                <p className="legend">
                  Aplicación para postular a Alkemy.org, fue el proyecto full
                  stack que consiste en una aplicación para control y gestión de
                  tus registros financieros, pudiendo ingresar o retirar dinero
                  manteniendo así un control. Hice el back end con Node Js,
                  Express, PostgreSQL, autenticación JWT y el front con React
                  Js, Redux y React-Bootstrap
                  <br />
                  <a
                    href="https://github.com/c4miloarriagada/Alkemy-Project"
                    className="link btn btn-light btn-sm"
                    target="_blank"
                  >
                       Repositorio
                  </a>
                </p>
              </div>
            </Carousel>
            <div className="text-center">
              <button
                type="button"
                onClick={(e) => handleButton()}
                className="btn btn-outline-dark mt-4"
              >
                EN
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
