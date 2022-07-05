import React from "react";

export const Logos = ({ name, img }) => {
  return (
<div class="container">

        <div className="container">
        <div className="text-center">{name}</div>
        <div className='overflow mt-5'>
        <img  src={img} className='img-fluid animate__animated animate__fadeIn'/>
        </div>

        </div>
</div>
  );
};
