import React, { useState } from "react";
import { NavbarLink } from "../navbar/Navbar";
import { Card } from "../Card/Card.jsx";
import { Typewriter } from "react-simple-typewriter";
import { useEffect } from "react";

export const Works = () => {
  const [translate, setTranslate] = useState(false);


  const handleButton = () => {
    setTranslate(!translate);
    scroll(0,0)
  };

  const webs = [
    {
      id: 1,
      title: "Countries App",
      image:
        "https://res.cloudinary.com/dwtkwakbc/image/upload/v1657299559/logosportfolio/home_iripgj.png",
      description:
        "This website was my first project for Henry Bootcamp, consists in building an a application with React JS, Redux, Node JS, Express, PostgreSQL, Sequelize some features are searchbar , different filters , and a controlled form with JavaScript. You can check the website (for desktop only) or the repository below! ",
      urlWeb: "https://countries-b5zm2jed2-c4miloarriagada.vercel.app/home/",
      urlRepo: "https://github.com/c4miloarriagada/Countries",
    },
    {
      id: 2,
      title: "Vinoteca Henry",
      image:
        "https://res.cloudinary.com/dwtkwakbc/image/upload/v1657299780/logosportfolio/vinoteca_x7ntix.png",
      description:
        "This website is a wine e-commerce app built for our final group project for Henry Bootcamp. We use React Js, Redux, Node JS, Express, MongoDB and has the following features: Google Identity , Mercado Pago , autentication, admin dashboard, feedback, filters, controlled forms, personalized API RESTful and more!",
      urlWeb: "https://wine-ecommercew.vercel.app/",
      urlRepo: "https://github.com/vinoteca-ecommerce/wineEcommerce",
    },
    {
      id:3,
      title: 'Alkemy Project Full Stack',
      image: 'https://res.cloudinary.com/dwtkwakbc/image/upload/v1658268165/Alkemy-project/homeFill_b5fdma.png',
      description: 'Project for apply to Alkemy.org , is a full stack project that consist in a application to management your deposits or withdraws  to bring the control of your finances, the back end was built on TypeScript, Node Js, Express, Postgres, JWT autentication and the front with React Js, Redux and React-Bootsrap',
      urlRepo: 'https://github.com/c4miloarriagada/Alkemy-Project'
    }
  ];

  const websSpanish = [
    {
      id: 1,
      title: "Countries App",
      image:
        "https://res.cloudinary.com/dwtkwakbc/image/upload/v1657299559/logosportfolio/home_iripgj.png",
      description:
        "  Este sitio web fue mi primer proyecto para el bootcamp de Henry, consiste en crear una aplicación con React JS, Redux, Node JS, Express, PostgreSQL, Sequelize y algunas características son barra de busqueda, diferentes filtros, formulario controlado vía JavaScript. Puedes visitar la web (solo para escritorio) o el repositorio abajo!",
      urlWeb: "https://countries-b5zm2jed2-c4miloarriagada.vercel.app/home/",
      urlRepo: "https://github.com/c4miloarriagada/Countries",
    },
    {
      id: 2,
      title: "Vinoteca Henry",
      image:
        "https://res.cloudinary.com/dwtkwakbc/image/upload/v1657299780/logosportfolio/vinoteca_x7ntix.png",
      description:
        "Este fue mi proyecto grupal y final para el bootcamp de Henry, nosotros utilizamos React JS, Redux, Node JS, Express, MongoDB y algunas de sus características son: Google Identity, Mercado Pago, sistema de autenticación, panel de administrador, sistema de feedback, formularios controlados, una API RESTful personalizada y mucho más!",
      urlWeb: "https://wine-ecommercew.vercel.app/",
      urlRepo: "https://github.com/vinoteca-ecommerce/wineEcommerce",
    },
    {
      id:3,
      title: 'Proyecto Alkemy Full Stack',
      image: 'https://res.cloudinary.com/dwtkwakbc/image/upload/v1658268165/Alkemy-project/homeFill_b5fdma.png',
      description: `Aplicación para postular a Alkemy.org, fue el proyecto full stack que consiste en una aplicación para control y gestión de tus registros financieros, pudiendo ingresar o retirar dinero manteniendo así un control. Hice el back end con Node Js, Express, Postgres, autenticación JWT y el front con React Js, Redux y React-Bootstrap`,
      urlRepo: 'https://github.com/c4miloarriagada/Alkemy-Project'
    }
  ];

  return (
    <div>
      <NavbarLink />
      {!translate ? (
        <div>
          <div className="container d-flex justify-content-center align-items-center h-100 mt-4">
            <div className="row container mt-5">
              <h1 className="text-center display-5 text-white">
                <Typewriter words={["Projects"]} />
              </h1>
              <hr className="text-white" size="5" />
              {webs.map((e) => (
                <div className="col-md-6 mt-3" key={e.id}>
                  <Card
                    title={e.title}
                    imgSource={e.image}
                    description={e.description}
                    linkRepo={e.urlRepo}
                    linkWeb={e.urlWeb}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <button
              type="button"
              onClick={(e) => handleButton()}
              className="btn btn-outline-secondary mt-5 text-white"
            >
              ES
            </button>
          </div>
          <div className="mt-1">
            <br />
          </div>
        </div>
      ) : (
        <div>
          <div className="container d-flex justify-content-center align-items-center h-100 mt-4">
            <div className="row container mt-5">
              <h2 className="text-center display-5 text-white">
              <Typewriter words={["Proyectos"]} />
              </h2>
              <hr className="text-white" size="5" />
              {websSpanish.map((e) => (
                <div className="col-md-6 mt-3" key={e.id}>
                  <Card
                    title={e.title}
                    imgSource={e.image}
                    description={e.description}
                    linkRepo={e.urlRepo}
                    linkWeb={e.urlWeb}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <button
              type="button"
              onClick={(e) => handleButton()}
              className="btn btn-outline-secondary mt-5 text-white"
            >
              EN
            </button>
          </div>
          <div className="mt-1">
            <br />
          </div>
        </div>
      )}
    </div>
  );
};

{
  /* <div className="container d-flex justify-content-center align-items-center h-100 mt-4">
<div className="row container mt-5">
  <h1 className="text-center display-5 text-white"><Typewriter words={['Projects']}/></h1>
  <hr className="text-white" size="5"/>
{ 
websSpanish.map(e => (
  <div className="col-md-6 mt-3" key={e.id}>
  <Card 
  title={e.title}
  imgSource={e.image}
  description={e.description}
  linkRepo={e.urlRepo}
  linkWeb={e.urlWeb}
  />
 </div>
))
}
</div>
</div>
<div className="text-center"> 
 <button type="button" onClick={(e)=>handleButton()} className="btn btn-outline-secondary mt-5 text-white">EN</button>
</div>
<br />
<div className="mt-1">    
<br/> 
</div> */
}
