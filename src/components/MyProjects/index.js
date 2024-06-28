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
              src="https://download.logo.wine/logo/Reddit/Reddit-Logo.wine.png"
              alt="ixigo"
            />
            <h3 className={style.projectName}>Ixigo Clone</h3>
            <p className={style.projectDetail}>
              Created Ixigo clone for checking / booking available flights,
              trains & hotels with added functionality of offers, sorting,
              searching & filters for seamless user experience.
            </p>
            <button className={style.projectBtn}>View Project</button>
          </div>
          <div className={style.cardList}>
            <img
              className={style.projectImg}
              src="https://download.logo.wine/logo/Reddit/Reddit-Logo.wine.png"
              alt="ixigo"
            />
            <h3 className={style.projectName}>Reddit Clone</h3>
            <p className={style.projectDetail}>
              Created Reddit clone where user can login or signup, add new post,
              edit or delete post, upvote and downvote on posts also user can
              add or delete comment on posts, user can change theme, can be used
              in desktop, mobiles, tablet screen for seamless user experience.
            </p>
            <button className={style.projectBtn}>View Project</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProjectComp;
