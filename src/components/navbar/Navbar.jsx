import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import style from '../navbar/Navbar.module.css'





//css
const styles = {
  fontSize: "30px", 
  padding:'15px', 
  color: 'white',
  textDecoration: 'none',
  
}



export const Navbar = () => {
  return (
    <Nav className="justify-content-center" color='white' >
    
           <Link  style={styles} to='/'>Home</Link>
           <Link style={styles} to='/About'>About</Link>
           <Link style={styles} to='/Works'>Works</Link>
           <Link style={styles} to='/Skills'>Skills</Link>
   

    </Nav>
  )
}
