import React from "react";
import style from "./myprojects.module.css";
import ixigoImg from "../../assets/ixigo.png";
import redditImg from "../../assets/reddit.png";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

function MyProjectComp({ projectRef }) {
  return (
    <div className={style.outerContainer} id="projectSection" ref={projectRef}>
      <div className={style.mainContainer}>
        <div className={style.headingMain}>
          <TaskAltIcon
            className={style.headingIcon}
            style={{ fontSize: "36px" }}
          />{" "}
          My Projects
        </div>
        <div className={style.projectContainer}>
          <div className={style.cardList}>
            <div className={style.cardContent}>
              <img
                className={style.projectImg}
                src={ixigoImg}
                alt="ixigo clone"
              />
              <h3 className={style.projectName}>Ixigo Clone</h3>
              <p className={style.aboutProject}>
                Created Ixigo clone for checking / booking available flights,
                trains & hotels with added functionality of offers, sorting,
                searching & filters for seamless user experience.
              </p>
              <p className={style.techNames}>
                <span className={style.skillTxt1}>#HTML </span>
                <span className={style.skillTxt2}>#CSS </span>
                <span className={style.skillTxt3}>#ReactJs</span>
              </p>
              <a
                href="https://ixigo.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={style.viewBtn2}>View Project</button>
              </a>
            </div>
          </div>
          <div className={style.cardList}>
            <div className={style.cardContent}>
              <img
                className={style.projectImg}
                src={redditImg}
                alt="reddit clone"
              />
              <h3 className={style.projectName}>Reddit Clone</h3>
              <p className={style.aboutProject}>
                Created Reddit clone where user can login or signup, add new
                post, edit or delete post, upvote and downvote on posts also
                user can add or delete comment on posts, user can change theme,
                can be used in desktop, mobiles, tablet screen for seamless user
                experience.
              </p>
              <p className={style.techNames}>
                <span className={style.skillTxt1}>#HTML </span>
                <span className={style.skillTxt2}>#CSS </span>
                <span className={style.skillTxt3}>#NextJs</span>
              </p>
              <a
                href="https://reddit-react-clone-react-project-2-y6yyb0r40hr5-dvl1.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={style.viewBtn}>View Project</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProjectComp;
