import React from "react";
import { Logos } from "../Logos/Logos";
import { NavbarLink } from "../navbar/Navbar";

import style from "../Skills/Skills.module.css";

export const Skills = () => {
  const skills = [
    {
      id: 1,
      name: "JavaScript",
      img: "https://res.cloudinary.com/dwtkwakbc/image/upload/v1656988325/logosportfolio/descarga_xrfvaz.png",
    },
    {
      id: 2,
      name: "TypeScript",
      img: "https://res.cloudinary.com/dwtkwakbc/image/upload/v1656988317/logosportfolio/typescript-2_cljlyz.svg",
    },
    {
      id: 3,
      name: "NodeJs",
      img: "https://res.cloudinary.com/dwtkwakbc/image/upload/v1657048610/logosportfolio/Node.js_logo_lgbeow.svg",
    },
    {
      id: 4,
      name: "ExpressJs",
      img: "https://res.cloudinary.com/dwtkwakbc/image/upload/v1657048784/logosportfolio/expressjs-icon_wybjwj.svg",
    },
    {
      id: 5,
      name: "ReactJs",
      img: "https://res.cloudinary.com/dwtkwakbc/image/upload/v1656990099/logosportfolio/React-icon.svg_wbpfw0.png",
    },
    {
      id: 6,
      name: "Redux",
      img: "https://res.cloudinary.com/dwtkwakbc/image/upload/v1656988837/logosportfolio/5848309bcef1014c0b5e4a9a_2_sc6zz3.png",
    },
    {
      id: 7,
      name: "Aws",
      img: "https://res.cloudinary.com/dwtkwakbc/image/upload/v1657048874/logosportfolio/amazon-web-services-2_nhlnbo.svg",
    },
    {
      id: 8,
      name: "MongoDB",
      img: "https://res.cloudinary.com/dwtkwakbc/image/upload/v1657048676/logosportfolio/MongoDB_Logo_yzubmd.svg",
    },
    {
      id: 9,
      name: "Postgresql",
      img: "https://res.cloudinary.com/dwtkwakbc/image/upload/v1656988523/logosportfolio/Postgresql_elephant.svg_uofg90.png",
    },
    {
      id: 10,
      name: "Html",
      img: "https://res.cloudinary.com/dwtkwakbc/image/upload/v1656989095/logosportfolio/174854_sexr2o.png",
    },
    {
      id: 11,
      name: "CSS",
      img: "https://res.cloudinary.com/dwtkwakbc/image/upload/v1657049027/logosportfolio/css-3-logo-svgrepo-com_jrcguz.svg",
    },
    {
      id: 12,
      name: "Bootstrap",
      img: "https://res.cloudinary.com/dwtkwakbc/image/upload/v1657049094/logosportfolio/Bootstrap_logo_jm6l9t.svg",
    },
    {
      id: 13,
      name: "Git",
      img: "https://res.cloudinary.com/dwtkwakbc/image/upload/v1657049127/logosportfolio/Git-logo_cyxnxm.svg",
    },
  ];

  const softSkills = [
    {
      id: 1,
      name: " Problem Solving",
      img: "https://res.cloudinary.com/dwtkwakbc/image/upload/v1657133302/logosportfolio/problemsolving_yd9zex.png",
  
    },
    {
      id: 2,
      name: "Adaptation",
      img: "https://res.cloudinary.com/dwtkwakbc/image/upload/v1657133212/logosportfolio/adaptado_stgq3s.png",
  
    },
    {
      id: 3,
      name: "Team Work",
      img: "https://res.cloudinary.com/dwtkwakbc/image/upload/v1657133241/logosportfolio/cooperacion_ciy4vs.png",

    },
    {
      id: 4,
      name: 'Communication',
      img: 'https://res.cloudinary.com/dwtkwakbc/image/upload/v1657132915/logosportfolio/comunicacion_mjoi4b.png'
    },
    {
      id: 5,
      name: 'Positive Attitude',
      img: 'https://res.cloudinary.com/dwtkwakbc/image/upload/v1657133357/logosportfolio/simpatico_d08uwz.png'
    },
    {
      id: 6,
      name: 'Time Management',
      img: 'https://res.cloudinary.com/dwtkwakbc/image/upload/v1657133885/logosportfolio/despertador_juwtsr.png'
    }
  ];

  return (
    <div>
      <div>
        <NavbarLink />
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row ">
            <h1 className="text-center mt-3 display-4 ">Skills</h1>
            <hr />

            {skills.map((e) => (
              <div className="col-sm-2">
                <div>
                  <Logos key={e.id} img={e.img} />
                </div>
              </div>
            ))}
            <h2 className="text-center mt-5 display-4 ">Soft Skills </h2>
            <hr />
            {softSkills.map((e) => (
              <div className="col-sm-2">
                <div >
                  <Logos key={e.id} name={e.name}img={e.img} skill={e.skill} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
