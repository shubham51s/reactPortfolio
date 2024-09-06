import React from "react";
import style from "./aboutme.module.css";

function AboutComp({ aboutRef }) {
  return (
    <div className={style.outerContainer} id="aboutSection" ref={aboutRef}>
      <div className={style.mainContainer}>
        <div className={style.headingMain}>About Me</div>
        <div className={style.aboutContainer}>
          <div className={style.leftContent}>
            <img
              className={style.aboutImg}
              src="https://aryan0jain.github.io/Portfolio/images/about.apng"
              alt="about svg"
            />
          </div>
          <div className={style.rightContent}>
            <div className={style.aboutText}>
              I have completed my
              <span className={style.highlightTxt}>
                {" "}
                Bachelor of Engineering in Mechanical from Everest College of
                Engineering,{" "}
              </span>
              having interest and skillset to be a part of your leading Tech
              Company. I have major interest in{" "}
              <span className={style.highlightTxt}>
                Front-End Development
              </span>{" "}
              & I wish to apply, enhance & grow along with your esteemed
              Organization. I also have decent command over{" "}
              <span className={style.highlightTxt}>Back-End Technologies.</span>{" "}
              Being a Responsible, Proactive and Team-player minded person will
              make me undoubtedly a vital employee for your organization.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutComp;
