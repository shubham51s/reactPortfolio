import React, { useState } from "react";
import style from "./contactme.module.css";
import PersonIcon from "@mui/icons-material/Person";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MessageIcon from "@mui/icons-material/Message";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

function ContactComp({ contactRef }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [num, setNum] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const notify = () => toast.success("Message sent!");

  const notifyWarning = (text) => toast.warn(text);

  const notifyError = () => toast.error("Something went wrong");

  const handleSendEmail = (e) => {
    e.preventDefault();

    if (name.length <= 2) {
      notifyWarning("Please enter a valid name");
    } else if (email.length <= 10 || !email.includes("@gmail.com")) {
      notifyWarning("Please enter a valid email address");
    } else if (userMessage.length <= 2) {
      notifyWarning("Please enter a message");
    } else {
      const templateParams = {
        user_name: name,
        user_email: email,
        user_mobile: num,
        message: userMessage,
      };

      emailjs
        .send("service_63derok", "template_dl870lg", templateParams, {
          publicKey: "TyHg-1uofxmmyhpg_",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            notify();
          },
          (error) => {
            console.log("FAILED...", error.text);
            notifyError();
          }
        );

      setName("");
      setEmail("");
      setNum("");
      setUserMessage("");
    }
  };

  return (
    <div className={style.outerContainer} id="contactSection" ref={contactRef}>
      <div className={style.mainContainer}>
        <div className={style.headingMain}>
          <ConnectWithoutContactIcon
            className={style.headingIcon}
            style={{ fontSize: "36px" }}
          />
          Get in touch
        </div>
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
              <PersonIcon className={style.inputIcons} />
              <input
                className={style.userInput}
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="user_name"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className={style.userDetails}>
              <MarkunreadIcon className={style.inputIcons} />
              <input
                className={style.userInput}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="user_email"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className={style.userDetails}>
              <LocalPhoneIcon className={style.inputIcons} />
              <input
                className={style.userInput}
                value={num}
                onChange={(e) => setNum(e.target.value)}
                name="user_mobile"
                type="number"
                maxLength={10}
                placeholder="Mobile No (optional)"
              />
            </div>
            <div className={style.message}>
              <MessageIcon className={style.inputIcons} />
              <textarea
                className={style.messageInp}
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                placeholder="Message"
                name="message"
              />
            </div>
            <div className={style.buttonMain}>
              <button
                className={style.submitBtn}
                onClick={(e) => handleSendEmail(e)}
              >
                SEND MESSAGE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactComp;
