import React from "react";
import style from "./footer.module.css";

function FooterComp() {
  return (
    <div className={style.mainContainer}>
      <div className={style.innerContainer}>
        Copyright © 2024 Shubham. All Rights Reserved.
      </div>
    </div>
  );
}

export default FooterComp;
