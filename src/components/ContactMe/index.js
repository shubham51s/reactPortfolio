import React, { useState } from "react";
import style from "./contactme.module.css";
import PersonIcon from "@mui/icons-material/Person";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MessageIcon from "@mui/icons-material/Message";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

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
            {/* <img
              src="https://aryan0jain.github.io/Portfolio/images/contact-info.apng"
              alt="get in touch"
              className={style.img}
            /> */}
            <div className={style.contactHeading}>Contact Details</div>
            <div className={style.leftContentCard}>
              <div className={style.contactTitle}>Address</div>
              <div className={style.contactContent}>Pune, Maharashtra</div>
            </div>
            <div className={style.leftContentCard}>
              <div className={style.contactTitle}>Email</div>
              <div className={style.contactContent}>
                shubhamsolat51@gmail.com
              </div>
            </div>
            <div className={style.leftContentCard}>
              <div className={style.contactTitle}>Phone</div>
              <div className={style.contactContent}>+91 9552144549</div>
            </div>
            <div className={style.leftContentCard}>
              <div className={style.contactTitle}>Social Media</div>
              <div className={style.contactContent}>
                <a
                  href="https://www.linkedin.com/in/shubham-solat-62b865167/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={style.socialMediaIconMain}>
                    <LinkedInIcon className={style.socialMediaIcon} />
                  </div>
                </a>
                <a
                  href="https://github.com/shubham51s"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={style.socialMediaIconMain}>
                    <GitHubIcon className={style.socialMediaIcon} />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className={style.contactHeading}>Let's Talk Now</div>
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
                className={style.userInput}
                value={num}
                onChange={(e) => setNum(e.target.value)}
                type="number"
                maxLength={10}
                placeholder="Mobile Number"
              />
            </div>
            <div className={style.message}>
              <MessageIcon />
              <textarea className={style.messageInp} placeholder="Message" />
            </div>
            <div className={style.buttonMain}>
              <button className={style.submitBtn}>SEND MESSAGE</button>
            </div>
            {/* <div className={style.contactMain}>
              <EmailIcon />
              <div>shubhamsolat51@gmail.com</div>
            </div>
            <div className={style.contactMain}>
              <PermContactCalendarIcon />
              <div>+91 9552144549</div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactComp;
