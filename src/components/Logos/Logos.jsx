import React from "react";

import './Logos.css'
export const Logos = ({ name, img }) => {
  return (
<div className="Container ">
        <div className="container mt-4">
        <h4 className="text-light text-center">{name}</h4>    
       <img  src={img} style={{}} className='overflow img-fluid  animate__animated animate__fadeIn ' />

        </div>
</div>
  );
};
