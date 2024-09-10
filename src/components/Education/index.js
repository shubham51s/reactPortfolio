import React from "react";
import style from "./education.module.css";
import everestImg from "../../assets/Campus View of Everest College of Engineering and Technology Aurangabad_Campus-View.jpg";
import diplomaCollegeImg from "../../assets/Kssed polytechnic.png";
import SchoolIcon from "@mui/icons-material/School";

function MyEducationComp({ educationRef }) {
  return (
    <div
      className={style.outerContainer}
      id="educationSection"
      ref={educationRef}
    >
      <div className={style.mainContainer}>
        <div className={style.headingMain}>
          <SchoolIcon
            className={style.headingIcon}
            style={{ fontSize: "36px" }}
          />
          My Education
        </div>
        <div className={style.contentMain}>
          <div className={style.cardMain}>
            <img
              className={style.collegeImg}
              src="https://images.indianexpress.com/2022/12/NewtonSchool_LEAD.jpg?w=414"
              alt="newton school"
            />
            <div className={style.rightContainer}>
              <div className={style.educationName}>
                Full Stack Web Development
              </div>
              <p className={style.collegeName}>Newton School, Online</p>
              <p className={style.year}>2023-24</p>
            </div>
          </div>
          <div className={style.cardMain}>
            <img
              className={style.collegeImg}
              src={everestImg}
              alt="Everest college"
            />
            <div className={style.rightContainer}>
              <div className={style.educationName}>
                Bachelor of Engineering in Mechanical
              </div>
              <p className={style.collegeName}>
                Everest College Of Engineering, Sambhajinagar
              </p>
              <p className={style.year}>2019-22</p>
            </div>
          </div>
          <div className={style.cardMain}>
            <img
              className={style.collegeImg}
              src={diplomaCollegeImg}
              alt="diploma college"
            />
            <div className={style.rightContainer}>
              <div className={style.educationName}>
                Diploma in Mechanical Engineering
              </div>
              <p className={style.collegeName}>KSSED Polytechnic, Shevgaon</p>
              <p className={style.year}>2014-17</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyEducationComp;
