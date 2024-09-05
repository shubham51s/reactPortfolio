import React, { useState } from "react";
import CommonHeader from "./components/Header";
import HomeComp from "./components/Home";
import MySkillsComp from "./components/MySkills";
import MyProjectComp from "./components/MyProjects";
import AboutComp from "./components/About";
import ContactComp from "./components/ContactMe";
import FooterComp from "./components/Footer";
import MyEducationComp from "./components/Education";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [activeNav, setActiveNav] = useState(1);

  return (
    <>
      <CommonHeader activeNav={activeNav} setActiveNav={setActiveNav} />
      <HomeComp setActiveNav={setActiveNav} />
      <MySkillsComp />
      <MyProjectComp />
      <AboutComp />
      <MyEducationComp />
      <ContactComp />
      <FooterComp />{" "}
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
