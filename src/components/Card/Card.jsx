import React from 'react'

import Countries from '../assets/home.png'

export const Card = () => {
  return (
    <div className='container'>

   
    <div className='card text-center bg-dark '>
        <img src={Countries} ></img>
        <div className='card-body text-light'>
            <h4 className='card-title'>Countries App</h4>
            <p className='card-text text-secondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, delectus similique! 
            Reprehenderit nesciunt molestiae inventore, qui vel aperiam placeat! Et qui delectus est, expedita aut esse vero debitis harum vel?</p>
            <a href='#!' className='btn btn-outline-secondary rounded-0'>GO TO WEBSITE!</a>
            <a href='#!' className='btn btn-outline-secondary rounded-0'>GO TO REPOSITORY</a>
        </div>
    </div>
    </div>
  )
}
