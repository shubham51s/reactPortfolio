import React from "react";
import CommonHeader from "./components/Header";
import HomeComp from "./components/Home";
import MySkillsComp from "./components/MySkills";
import MyProjectComp from "./components/MyProjects";
import AboutComp from "./components/About";
import ContactComp from "./components/ContactMe";
import FooterComp from "./components/Footer";
import MyEducationComp from "./components/Education";

function App() {
  return (
    <>
      <CommonHeader />
      <HomeComp />
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
