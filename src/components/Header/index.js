import React, { useEffect, useRef, useState } from "react";
import style from "./commonheader.module.css";
import MenuIcon from "@mui/icons-material/Menu";

function CommonHeader({ activeNav, setActiveNav }) {
  const [isDrawer, setIsDrawer] = useState(false);
  const menuRef = useRef();
  const contentRef = useRef();

  const handleNavClick = (val) => {
    setActiveNav(val);
  };

  const handleDrawerTabClick = (val) => {
    setActiveNav(val);
    setIsDrawer(false);
  };

  useEffect(() => {
    const handleDrawerClick = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        contentRef.current &&
        !contentRef.current.contains(e.target)
      ) {
        setIsDrawer(false);
      }
    };

    document.body.addEventListener("click", handleDrawerClick);

    return () => document.body.removeEventListener("click", handleDrawerClick);
  }, []);

  return (
    <div className={style.outerContainer}>
      <div className={style.mainContainer}>
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
        <div className={style.moreOptionContainer} ref={menuRef}>
          <MenuIcon
            className={style.menuIcon}
            onClick={() => setIsDrawer(!isDrawer)}
          />
        </div>
        {isDrawer && (
          <div className={style.menuContent} ref={contentRef}>
            <a
              href="#homeSection"
              className={style.sectionLink}
              onClick={() => handleDrawerTabClick(1)}
            >
              <li
                className={`${
                  activeNav === 1 ? style.activeMenuList : style.menuList
                }`}
              >
                Home
              </li>
            </a>
            <a
              href="#skillSection"
              className={style.sectionLink}
              onClick={() => handleDrawerTabClick(2)}
            >
              <li
                className={`${
                  activeNav === 2 ? style.activeMenuList : style.menuList
                }`}
              >
                Skills
              </li>
            </a>
            <a
              href="#projectSection"
              className={style.sectionLink}
              onClick={() => handleDrawerTabClick(3)}
            >
              <li
                className={`${
                  activeNav === 3 ? style.activeMenuList : style.menuList
                }`}
              >
                Projects
              </li>
            </a>
            <a
              href="#aboutSection"
              className={style.sectionLink}
              onClick={() => handleDrawerTabClick(4)}
            >
              <li
                className={`${
                  activeNav === 4 ? style.activeMenuList : style.menuList
                }`}
              >
                About
              </li>
            </a>{" "}
            <a
              href="#educationSection"
              className={style.sectionLink}
              onClick={() => handleDrawerTabClick(5)}
            >
              <li
                className={`${
                  activeNav === 5 ? style.activeMenuList : style.menuList
                }`}
              >
                Education
              </li>
            </a>
            <a
              href="#contactSection"
              className={style.sectionLink}
              onClick={() => handleDrawerTabClick(6)}
            >
              <li
                className={`${
                  activeNav === 6 ? style.activeMenuList : style.menuList
                }`}
              >
                Contact
              </li>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default CommonHeader;
