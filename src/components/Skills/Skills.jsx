import React from "react";
import { Logos } from "../Logos/Logos";
import { NavbarLink } from "../navbar/Navbar";
import { Typewriter } from "react-simple-typewriter";

import "./Skills.css";

export const Skills = () => {
  const skills = [
    {
      id: 1,
      name: "JavaScript",
      img: "https://res.cloudinary.com/dwtkwakbc/image/upload/v1657295109/logosportfolio/Unofficial_JavaScript_logo_2_qysv3i.svg",
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
      img: "https://res.cloudinary.com/dwtkwakbc/image/upload/v1657299367/logosportfolio/React-icon.svg_crkj25.png",
    },
    {
      id: 6,
      name: "Redux",
      img: "https://res.cloudinary.com/dwtkwakbc/image/upload/v1656988837/logosportfolio/5848309bcef1014c0b5e4a9a_2_sc6zz3.png",
    },
    // {
    //   id: 7,
    //   name: "Aws",
    //   img: "https://res.cloudinary.com/dwtkwakbc/image/upload/v1657048874/logosportfolio/amazon-web-services-2_nhlnbo.svg",
    // },
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
      img: "https://res.cloudinary.com/dwtkwakbc/image/upload/v1657293912/logosportfolio/extension-puzzle-outline_l5eaqx.svg",
    },
    {
      id: 2,
      name: "Adaptation",
      img: "https://res.cloudinary.com/dwtkwakbc/image/upload/v1657293951/logosportfolio/git-compare-outline_a9xshz.svg",
    },
    {
      id: 3,
      name: "Team Work",
      img: "https://res.cloudinary.com/dwtkwakbc/image/upload/v1657293899/logosportfolio/people-outline_mdybqz.svg",
    },
    {
      id: 4,
      name: "Communication",
      img: "https://res.cloudinary.com/dwtkwakbc/image/upload/v1657293926/logosportfolio/chatbubbles-outline_ea6fbp.svg",
    },
    {
      id: 5,
      name: "Positive Attitude",
      img: "https://res.cloudinary.com/dwtkwakbc/image/upload/v1657293948/logosportfolio/happy-outline_bu5n4n.svg",
    },
    {
      id: 6,
      name: "Time Management",
      img: "https://res.cloudinary.com/dwtkwakbc/image/upload/v1657293946/logosportfolio/hourglass-outline_if8lwp.svg",
    },
    {
      id: 7,
      name: "Continuous Learning",
      img: "https://res.cloudinary.com/dwtkwakbc/image/upload/v1659126221/logosportfolio/leyendo_nscqon.png",
    },
  ];

  return (
    <div>
      <div className="skillsbackground">
        <NavbarLink />
        <div>
          <div className=" container d-flex justify-content-center align-items-center ">
            <div className="row container">
              <h1 className="text-center mt-3 display-5 text-dark text-white">
                <Typewriter words={["Skills"]} />
              </h1>
              <hr size="3" />
              {skills.map((e) => (
                <div className="col-md-3">
                  <div>
                    <Logos key={e.id} img={e.img} />
                  </div>
                </div>
              ))}
              <h2 className="text-center mt-4 display-5 text-white">
                <Typewriter words={["Soft Skills"]} />{" "}
              </h2>
              <hr size="3" />
              {softSkills.map((e) => (
                <div className="col-md-3 soft">
                  <div>
                    <Logos
                      key={e.id}
                      name={e.name}
                      img={e.img}
                      skill={e.skill}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};
