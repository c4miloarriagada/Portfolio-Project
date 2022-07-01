import React from "react";
import { NavbarLink } from "../navbar/Navbar";
import { Card } from "../Card/Card.jsx";



import countries from '../assets/home.png'
import portada from '../assets/portada.jpg'

export const Works = () => {

  const webs = [
    {
      id: 1,
      title: 'Countries App',
      image: countries,
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores totam, fuga facere quisquam corrupti quidem beatae omnis repellat eaque, accusamus laborum aspernatur vel cum esse quod ratione hic possimus quas!',
      urlWeb: 'https://countries-b5zm2jed2-c4miloarriagada.vercel.app/home/',
      urlRepo: 'https://github.com/c4miloarriagada/Countries'
    },
    {
      id: 2,
      title: 'Vinoteca Henry',
      image: portada,
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores totam, fuga facere quisquam corrupti quidem beatae omnis repellat eaque, accusamus laborum aspernatur vel cum esse quod ratione hic possimus quas!',
      urlWeb: 'https://wine-ecommercew.vercel.app/',
      urlRepo: 'https://github.com/vinoteca-ecommerce/wineEcommerce'
    }
  ]


  return (
  
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
        { 
        webs.map(e => (
          <div className="col-md-4" key={e.id}>
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
   
     
  );
};
