import React from "react";
import style from "./homecomponent.module.css";

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
              <h3 className={style.text5}>
                <span className={style.text4}>A </span>Full Stack Developer
              </h3>
              <div className={style.btnMain}>
                <button className={style.btn}>Contact Me</button>
              </div>
            </div>
          </div>
        </div>
        <div className={style.rightMainContainer}>
          <div className={style.rightContent}>Right Container</div>
        </div>
      </div>
    </div>
  );
}

export default HomeComp;
