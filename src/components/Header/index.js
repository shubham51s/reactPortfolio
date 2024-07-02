import React, { useState } from "react";
import style from "./commonheader.module.css";

function CommonHeader() {
  const [activeNav, setActiveNav] = useState(1);

  const handleNavClick = (val) => {
    setActiveNav(val);
  };

  return (
    <div className={style.outerContainer}>
      <div className={style.mainContainer}>
        {/* <div className={style.logoContainer}>
          <span className={style.name}>Shubham Solat</span>
        </div> */}
        <div className={style.logoAnime}>
          <span>S</span>
          <span>h</span>
          <span>u</span>
          <span>b</span>
          <span>h</span>
          <span>a</span>
          <span>m </span>
        </div>
        <div className={style.navContainer}>
          <li
            className={`${style.navListItem} ${
              activeNav === 1 ? style.currentNav : ""
            }`}
            onClick={() => handleNavClick(1)}
          >
            Home
          </li>
          <li
            className={`${style.navListItem} ${
              activeNav === 2 ? style.currentNav : ""
            }`}
            onClick={() => handleNavClick(2)}
          >
            About
          </li>
          <li
            className={`${style.navListItem} ${
              activeNav === 3 ? style.currentNav : ""
            }`}
            onClick={() => handleNavClick(3)}
          >
            Project
          </li>
          <li
            className={`${style.navListItem} ${
              activeNav === 4 ? style.currentNav : ""
            }`}
            onClick={() => handleNavClick(4)}
          >
            Contact
          </li>
        </div>
      </div>
    </div>
  );
}

export default CommonHeader;
