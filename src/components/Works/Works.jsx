import React from "react";
import { NavbarLink } from "../navbar/Navbar";

import { Container } from "react-bootstrap";
import style from "../Works/Works.module.css";

export const Works = () => {


  const pStyle = {
    color: "#FFFAFA",

    
  };

  return (
    <div className={style.all}>
      <NavbarLink />
      <Container className="bg-light border"  fluid="md">
        <div style={pStyle}>

            Hello! Thank you for visiting my profile, here below I tell you a
            little more about me Web developer and technology lover, today I I
            find myself finishing the soy Henry bootcamp and getting ready to
            new challenges in the world of programming, I was working for
            several years in the field of aviation which allowed me develop
            assertive communication skills as well as learn by adapting to
            different work groups, a lot of experience with problem management
            and resolution. Today, I find myself doing TypeScript, Node Js /
            Mongo DB / SQL and AWS courses with intentions dedicate myself to
            back-end development, but I also have knowledge in front-end
            frameworks like React Js and tools like Redux., being able to
            perform effectively in both fields. I love to be constantly learning
            so I always I find myself taking courses, either on Udemy or in
            projects personal, I already have 2 deployed projects which you can
            see in my projects section.
        </div>
      </Container>
    </div>
  );
};
