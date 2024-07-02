import React, { useState } from "react";
import style from "./contactme.module.css";
import PersonIcon from "@mui/icons-material/Person";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

function ContactComp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [num, setNum] = useState();

  return (
    <div className={style.outerContainer}>
      <div className={style.mainContainer}>
        <div className={style.headingMain}>Get in touch</div>
        <div className={style.mainContent}>
          <div className={style.leftContent}>
            <img
              src="https://aryan0jain.github.io/Portfolio/images/contact-info.apng"
              alt="get in touch"
              className={style.img}
            />
          </div>
          <div className={style.rightContent}>
            <div className={style.userDetails}>
              <PersonIcon />
              <input
                className={style.userInput}
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
              />
            </div>
            <div className={style.userDetails}>
              <MarkunreadIcon />
              <input
                className={style.userInput}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email"
              />
            </div>
            <div className={style.userDetails}>
              <LocalPhoneIcon />
              <input
                className={style.numberInput}
                value={num}
                onChange={(e) => setNum(e.target.value)}
                type="number"
                maxLength={10}
                placeholder="Mobile Number"
              />
            </div>
            <div className={style.message}>
              <LocalPhoneIcon className={style.messageIcon} />
              <textarea className={style.messageInp} placeholder="Message" />
            </div>
            <div className={style.buttonMain}>
              <button className={style.submitBtn}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactComp;
