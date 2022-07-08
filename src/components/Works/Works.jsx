import React from "react";
import { NavbarLink } from "../navbar/Navbar";
import { Card } from "../Card/Card.jsx";
import { Typewriter } from "react-simple-typewriter";



import countries from '../assets/home.png'
import portada from '../assets/portada.jpg'

export const Works = () => {

  const webs = [
    {
      id: 1,
      title: 'Countries App',
      image: countries,
      description: 'This website was my first project for Henry Bootcamp, consists in building an a application with React JS, Redux, Node JS, Express, PostgreSQL, Sequelize some features are searchbar , different filters , and a controlled form with JavaScript. You can check the website (for desktop only) or the repository below! ',
      urlWeb: 'https://countries-b5zm2jed2-c4miloarriagada.vercel.app/home/',
      urlRepo: 'https://github.com/c4miloarriagada/Countries'
    },
    {
      id: 2,
      title: 'Vinoteca Henry',
      image: portada,
      description: 'This website is a wine e-commerce app built for our final group project for Henry Bootcamp. We use React Js, Redux, Node Js, Express, MongoDB and has the following features: Google Identity , Mercado Pago , autentication, admin dashboard, feedback, filters, controlled forms, personalized API RESTful and more!',
      urlWeb: 'https://wine-ecommercew.vercel.app/',
      urlRepo: 'https://github.com/vinoteca-ecommerce/wineEcommerce'
    }
  ]


  return (
        <div> 
        <NavbarLink/>
        <div className="container d-flex justify-content-center align-items-center h-100 mt-4">
        <div className="row container mt-5">
          <h1 className="text-center display-5 text-white"><Typewriter words={['Projects']}/></h1>
          <hr className="text-white" size="5"/>
        { 
        webs.map(e => (
          <div className="col-md-6 mt-5" key={e.id}>
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
      <br />
      <div className="mt-1">
              <br />
              <br /> 
              <br />           
      </div>
      </div>
     
  );
};
