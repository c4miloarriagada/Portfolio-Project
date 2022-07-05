import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import style from '../navbar/Navbar.module.css'










export const NavbarLink = () => {


  return (
    <div className='container mt-2 '>

    <Navbar collapseOnSelect expand='lg' >
    <Navbar.Toggle aria-controls ='responseive-navbar-nav'/>
      <Navbar.Collapse className="justify-content-center text-center" >
        <nav>

        <Nav  >
           <Link className='display-6 p-1 text-light text-decoration-none'  to='/'>Home</Link>
           <Link className='display-6 p-1 text-light text-decoration-none' to='/About'>About</Link>
           <Link className='display-6 p-1 text-light text-decoration-none' to='/Works'>Works</Link>
           <Link className='display-6 p-1 text-light text-decoration-none' to='/Skills'>Skills</Link>

        </Nav>
        </nav>
      </Navbar.Collapse>
   
    </Navbar>

    </div>
  )
}
