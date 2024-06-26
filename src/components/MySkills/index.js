import React from "react";
import style from "./myskills.module.css";

function MySkillsComp() {
  return (
    <div className={style.outerContainer}>
      <div className={style.mainContainer}>
        <div className={style.headingMain}>My Skills</div>
        <div className={style.skillsContent}>
          {skillsData.map((item) => (
            <div className={style.imageMain} key={item.id}>
              <img
                className={style.skillImg}
                src={item.imgUrl}
                alt={item.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MySkillsComp;

const skillsData = [
  {
    id: 1,
    imgUrl: "https://aryan0jain.github.io/Portfolio/images/java.png",
    name: "Java",
  },
  {
    id: 2,
    imgUrl:
      "https://w7.pngwing.com/pngs/580/809/png-transparent-data-structure-logo-brand-data-structure-blue-text-logo.png",
    name: "DSA",
  },
  {
    id: 3,
    imgUrl: "https://aryan0jain.github.io/Portfolio/images/html-5.png",
    name: "HTML",
  },
  {
    id: 4,
    imgUrl: "https://aryan0jain.github.io/Portfolio/images/css-3.png",
    name: "CSS",
  },
  {
    id: 5,
    imgUrl: "https://aryan0jain.github.io/Portfolio/images/java-script.png",
    name: "JavaScript",
  },
  {
    id: 6,
    imgUrl: "https://aryan0jain.github.io/Portfolio/images/reactjs.png",
    name: "ReactJS",
  },
  {
    id: 7,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQRBbfLLAXqezXJEL9ZHc0OXujAn_fBWs5y71fTcPqcxd_8YZqypPnyaaTFM5hp6SsM4w&usqp=CAU",
    name: "NextJS",
  },
  {
    id: 8,
    imgUrl: "https://aryan0jain.github.io/Portfolio/images/node-js.png",
    name: "NodeJS",
  },
  {
    id: 9,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMVVgBh0tIaECA_xi4Vkqu48WJMZpOhtUfqRNmJrJnq-1fIqikJO3ZCygNrGo1AYtC8wg&usqp=CAU",
    name: "ExpressJS",
  },
  {
    id: 10,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-DTDsIp_TLTkbDmqHsSWrV0v03R09h7rdJLDS9tYSOO8fw4u-72wFnQH0-QWlICf5kz4&usqp=CAU",
    name: "MongoDB",
  },
];
