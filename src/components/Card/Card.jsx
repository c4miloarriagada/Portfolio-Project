import React from 'react'

import './Card.css'



export const Card = ({title, imgSource ,description, linkWeb, linkRepo}) => {
  

  return (
    <div className='container'>

   
    <div className='card text-center bg-dark animate__animated animate__fadeIn'>
      <div className='overflow'>
      <img  src={imgSource} className='card-img-top'/>
      </div>
        <div className='card-body text-light'>
            <h4 className='card-title'>{title}</h4>
            <p className='card-text text-secondary'>{description}</p>
            <a href={linkWeb} className='btn btn-outline-secondary rounded-0' target='_blank'>Website</a>
            <a href={linkRepo} className='btn btn-outline-secondary rounded-0' target='_blank'>Repository</a>
        </div>
    </div>
    </div>
  )
}