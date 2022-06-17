import React from 'react'
import { Navbar } from "../navbar/Navbar";

import style from '../About/About.module.css'

export const About = () => {
  return (
    <div className={style.all}>
     <Navbar />
     <h1>About</h1>
    </div>
  )
}
