import React from "react";

export const Logos = ({ name, img,skill }) => {
  return (
<div className="container-fluid">

        <div className="container-fluid">
        <div className="text-light text-center mt-5">{name}</div>
        <div className='overflow mt-5'>
        <img  src={img} className='img-fluid  animate__animated animate__fadeIn'/>
        </div>

        </div>
</div>
  );
};
