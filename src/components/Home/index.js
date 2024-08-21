import React from "react";
import style from "./homecomponent.module.css";
import resume from "../../assets/shubhamResume.pdf";

function HomeComp() {
  return (
    <div className={style.outerContainer}>
      <div className={style.mainContainer}>
        <div className={style.leftMainContainer}>
          <div className={style.leftContent}>
            <h2 className={style.text1}>Hi there,</h2>
            <h2 className={style.myName}>
              <span className={style.text2}>I Am</span>
              <span> Shubham Solat</span>
            </h2>
            <div>
              {/* <h3 className={style.text5}>
                <span className={style.text4}>A </span>Full Stack Developer
              </h3> */}
              <div className={style.animationTxt}>
                A <span></span>
              </div>
              <div className={style.btnMain}>
                <a href={resume} download="Shubham_Resume.pdf">
                  <button className={style.btn}>Resume</button>
                </a>

                <button className={style.btn}>Contact Me</button>
              </div>
            </div>
          </div>
        </div>
        <div className={style.rightMainContainer}>
          <img
            className={style.profileImg}
            src="https://png.pngtree.com/png-vector/20231215/ourmid/pngtree-boy-computer-free-button-element-decorative-material-png-image_11355636.png"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeComp;
