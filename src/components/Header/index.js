import React, { useState } from "react";
import style from "./commonheader.module.css";

function CommonHeader() {
  const [activeNav, setActiveNav] = useState(1);

  const handleNavClick = (val) => {
    setActiveNav(val);
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.logoContainer}>Shubham Solat</div>
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
  );
}

export default CommonHeader;
