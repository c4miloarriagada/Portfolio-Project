import React from "react";
import { Navbar } from "../navbar/Navbar";

import style from "../About/About.module.css";

export const About = () => {
  const pStyle = {
    color: "#FFFAFA",
    fontSize: "1.4vw",
  };
  const pStyleH1 = {
    color: "	#ab3ed8",
    fontSize: "2vw",
  };
 const pStyleMail = {
  color: "	#FFFAFA",
  fontSize: "1.2vw",
 textDecoration: 'none'
 }

  return (
    <div className={style.all}>
      <Navbar />
      <h1 style={pStyleH1}>About Me</h1>
      <div class="container">
        <div class="row">
          <br />
          <article style={pStyle}>
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
          </article>
          <footer>
            <p>&copy; Camilo Arriagada Vallejos</p>
            <address>
             <a  style={pStyleMail} href="mailto:camilo.arriagadav@gmail.com">  Contact me</a>
            </address>
          </footer>
        </div>
      </div>
    </div>
  );
};
