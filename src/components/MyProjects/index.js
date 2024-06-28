import React from "react";
import style from "./myprojects.module.css";

function MyProjectComp() {
  return (
    <div className={style.outerContainer}>
      <div className={style.mainContainer}>
        <div className={style.headingMain}>My Projects</div>
        <div className={style.projectContainer}>
          <div className={style.cardList}>
            <img
              className={style.projectImg}
              src="https://play-lh.googleusercontent.com/BPaFHvXjBylF5WXakReROnU7OU0qYxXwz0jpRcT6SYHYRUBSs9664C8DoM85M1JlMgqD"
              alt="ixigo"
            />
            <h3 className={style.projectName}>Ixigo Clone</h3>
            <p className={style.projectDetail}>Description about project</p>
            <button className={style.projectBtn}>View Project</button>
          </div>
          <div className={style.cardList}>
            <img
              className={style.projectImg}
              src="https://play-lh.googleusercontent.com/BPaFHvXjBylF5WXakReROnU7OU0qYxXwz0jpRcT6SYHYRUBSs9664C8DoM85M1JlMgqD"
              alt="ixigo"
            />
            <h3 className={style.projectName}>Reddit Clone</h3>
            <p className={style.projectDetail}>Description about project</p>
            <button className={style.projectBtn}>View Project</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProjectComp;
