import React from "react";
import { Navbar } from "../navbar/Navbar";

import style from '../Home/Home.module.css';




export const Home = () => {









  //css
  const styles = {
    fontSize: "70px",
    color:  '#f8f9fa',
    position:'relative', 
    top:'30px', 
    margin:'0', 


  } 

  return (
    <div  className={style.all} >
      <div >
        <Navbar/>
       
        <h1   style={styles}>Camilo Arriagada Vallejos</h1>
        <div>
          <p style={styles}>Hola soy camilo y aqui va mi breve descripcion</p>
        </div> 
       
      </div>
    </div>
  );
};
