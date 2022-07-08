import React from "react";
import { NavbarLink } from "../navbar/Navbar";
import { Typewriter } from "react-simple-typewriter";


export const About = () => {


  return (
    
      
      <div>
        <NavbarLink />
        <div className="container d-flex justify-content-center align-items-center h-100">

        
      <div class="row mt-5">
        <h1 className="text-center mt-3 display-5 text-white "><Typewriter words={['About me']}/></h1>
        <hr className='text-white' size="5"/>
        <div className="col text-center text-white" >
         <div className="card bg-secondary container mt-5 animate__animated animate__fadeIn">
         <h4 className=" mt-3 container " > 
          Full Stack web developer, I just finished my way through soy Henry <a href='https://www.soyhenry.com/' target="_blank" rel="noreferrer" text='go to soyHenry'><img width="25" height="25" src='https://user-images.githubusercontent.com/86882630/174009890-4daeb2e8-054f-49b5-909f-67789a6b6e03.jpeg'/></a>{' '}
          bootcamp and I think that was a amazing experience , 
          I was working for a lot of years in the aviation field as cabin crew and also I'm commercial pilot.<br/> 
          For that reason I've developed soft skills and understood the importance of that skills.<br/><br/>
          Comunication , 
          teamwork, problems management and resolution, are some of my features. For now I'm searching new challenges in my professional carrer while I keep studying other technologies, I literally fell in love with back end and language like TypeScript, is amazing. <br/> 
          But I dont have any problem to work in front end with React Js and tools like redux or simply learn another framework, this website was developed in React Js and Bootstrap 5.
          <br/><br/>
          About me, I'm a chill guy that really love music and technology, in my free time I like to study, play guitar and play videogames or share with my friends and family .<br/><br/>
          If you want to contact me ,I left a direct way to send me a e-mail below, or simply check my LinkedIn and Github! 
          </h4> 
         </div>
        </div>
        <div className="row mt-4">
        <div className="col text-center text-white mt-5">
              <div>
                <br/>
                <br/>
              <address className="mt-3">
                <a className= "text-info text-decoration-none" href="mailto:camilo.arriagadav@gmail.com">
                  {" "}
                  📩 Contact me
                </a>
               <p className="text-white mt-4">
                &copy; Camilo Arriagada Vallejos
              </p>
              </address>
              </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};


//<a href='https://www.soyhenry.com/' target="_blank" rel="noreferrer" text='go to soyHenry'><img width="25" height="25" src='https://user-images.githubusercontent.com/86882630/174009890-4daeb2e8-054f-49b5-909f-67789a6b6e03.jpeg'/></a>