import React from "react";
import style from "./myskills.module.css";
import javaLogo from "../../assets/java_226777.png";
import cssPng from "../../assets/CSS_3.png";
import htmlPng from "../../assets/html_1051277.png";
import javscriptPng from "../../assets/JavaScript.png";
import reactPng from "../../assets/React.png";
import nextjsPng from "../../assets/NextJS.png";
import expressjsPng from "../../assets/expressJs.png";
import nodejsPng from "../../assets/nodejs_plain_logo_icon_146409.png";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

function MySkillsComp({ skillsRef }) {
  return (
    <div className={style.outerContainer} id="skillSection" ref={skillsRef}>
      <div className={style.mainContainer}>
        <div className={style.headingMain}>
          <BusinessCenterIcon
            className={style.headingIcon}
            style={{ fontSize: "36px", fontWeight: "100" }}
          />{" "}
          My Skills
        </div>
        <div className={style.skillsContent}>
          <div className={style.skillList}>
            <img className={style.langImg} src={javaLogo} alt="Java" />
            <p className={style.langName}>Java</p>
          </div>
          <div className={style.skillList}>
            <img className={style.langImg} src={htmlPng} alt="HTML" />
            <p className={style.langName}>HTML</p>
          </div>
          <div className={style.skillList}>
            <img className={style.langImg} src={cssPng} alt="CSS" />
            <p className={style.langName}>CSS</p>
          </div>
          <div className={style.skillList}>
            <img
              className={style.langImg}
              src={javscriptPng}
              alt="JavaScript"
            />
            <p className={style.langName}>JavaScript</p>
          </div>
          <div className={style.skillList}>
            <img className={style.langImg} src={reactPng} alt="ReactJs" />
            <p className={style.langName}>ReactJs</p>
          </div>
          <div className={style.skillList}>
            <img className={style.langImg} src={nextjsPng} alt="NextJs" />
            <p className={style.langName}>NextJs</p>
          </div>
          <div className={style.skillList}>
            <img className={style.langImg} src={nodejsPng} alt="NodeJs" />
            <p className={style.langName}>NodeJs</p>
          </div>
          <div className={style.skillList}>
            <img className={style.langImg} src={expressjsPng} alt="ExpressJs" />
            <p className={style.langName}>ExpressJs</p>
          </div>
          {/* <div className={style.skillList}>
            <img className={style.langImg} src={mongodbPng} alt="MongoDB" />
            <p className={style.langName}>MongoDB</p>
          </div>
          <div className={style.skillList}>
            <img className={style.langImg} src={javaLogo} alt="Java" />
            <p className={style.langName}>Java</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default MySkillsComp;
