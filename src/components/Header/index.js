import React from "react";
import style from "./commonheader.module.css";

function CommonHeader({ activeNav, setActiveNav }) {
  const handleNavClick = (val) => {
    setActiveNav(val);
  };

  return (
    <div className={style.outerContainer}>
      <div className={style.mainContainer}>
        {/* <div className={style.logoContainer}>
          <span className={style.name}>Shubham Solat</span>
        </div> */}
        <a
          href="#homeSection"
          style={{ textDecoration: "none" }}
          onClick={() => setActiveNav(1)}
        >
          <div className={style.logoAnime}>
            <span>S</span>
            <span>h</span>
            <span>u</span>
            <span>b</span>
            <span>h</span>
            <span>a</span>
            <span>m </span>
          </div>
        </a>
        <div className={style.navContainer}>
          <a href="#homeSection" className={style.sectionLink}>
            <li
              className={`${style.navListItem} ${
                activeNav === 1 ? style.currentNav : ""
              }`}
              onClick={() => handleNavClick(1)}
            >
              Home
            </li>
          </a>
          <a href="#skillSection" className={style.sectionLink}>
            <li
              className={`${style.navListItem} ${
                activeNav === 2 ? style.currentNav : ""
              }`}
              onClick={() => handleNavClick(2)}
            >
              Skills
            </li>
          </a>
          <a href="#projectSection" className={style.sectionLink}>
            <li
              className={`${style.navListItem} ${
                activeNav === 3 ? style.currentNav : ""
              }`}
              onClick={() => handleNavClick(3)}
            >
              Project
            </li>
          </a>
          <a href="#aboutSection" className={style.sectionLink}>
            <li
              className={`${style.navListItem} ${
                activeNav === 4 ? style.currentNav : ""
              }`}
              onClick={() => handleNavClick(4)}
            >
              About
            </li>
          </a>
          <a href="#educationSection" className={style.sectionLink}>
            <li
              className={`${style.navListItem} ${
                activeNav === 5 ? style.currentNav : ""
              }`}
              onClick={() => handleNavClick(5)}
            >
              Education
            </li>
          </a>
          <a href="#contactSection" className={style.sectionLink}>
            <li
              className={`${style.navListItem} ${
                activeNav === 6 ? style.currentNav : ""
              }`}
              onClick={() => handleNavClick(6)}
            >
              Contact
            </li>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CommonHeader;
