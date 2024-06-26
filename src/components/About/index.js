import React from "react";
import style from "./aboutme.module.css";
import aboutImg from "../../assets/aboutMe.gif";

function AboutComp() {
  return (
    <div className={style.outerContainer}>
      <div className={style.mainContainer}>
        <div className={style.headingMain}>About Me</div>
        <div className={style.aboutContainer}>
          <div className={style.leftContent}>
            <img className={style.aboutImg} src={aboutImg} alt="about svg" />
          </div>
          <div className={style.rightContent}>
            <div className={style.aboutText}>
              I have completed by{" "}
              <span>
                BE in Mechanical Engineering from Everest College of
                Engineering,
              </span>
              having interest and skillset to be a part of your leading Tech
              Company. I have major interest in{" "}
              <span>Front-End Development</span> & I wish to apply, enhance &
              grow along with your esteemed Organization. I also have decent
              command over <span>Back-End Technologies.</span> Being a
              Responsible, Proactive and Team-player minded person will make me
              undoubtedly a vital employee for your organization.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutComp;
