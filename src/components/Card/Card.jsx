import React from 'react'

import './Card.css'



export const Card = ({title, imgSource ,description, linkWeb, linkRepo}) => {
  

  return (
    <div className='container'> 
    <div className='card text-center bg-dark animate__animated animate__fadeIn'>
      <div className='overflow'>
      <img  src={imgSource} className='card-img-top img-fluid'/>
      </div>
        <div className='card-body text-secondary'>
            <h4 className='card-title'>{title}</h4>
            <p className='card-text text-white'>{description}</p>
            <a href={linkWeb} className='btn btn btn-outline-light' target='_blank'>Website</a>
            {' '}
            <a href={linkRepo} className='btn btn btn-outline-light'   target='_blank'>Repository</a>
        </div>
    </div>
    </div>
  )
}
