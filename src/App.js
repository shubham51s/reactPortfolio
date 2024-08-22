import React, { useState } from "react";
import CommonHeader from "./components/Header";
import HomeComp from "./components/Home";
import MySkillsComp from "./components/MySkills";
import MyProjectComp from "./components/MyProjects";
import AboutComp from "./components/About";
import ContactComp from "./components/ContactMe";
import FooterComp from "./components/Footer";
import MyEducationComp from "./components/Education";

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
      <FooterComp />
    </>
  );
}

export default App;
