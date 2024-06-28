import React from "react";
import CommonHeader from "./components/Header";
import HomeComp from "./components/Home";
import MySkillsComp from "./components/MySkills";
import MyProjectComp from "./components/MyProjects";
import AboutComp from "./components/About";

function App() {
  return (
    <>
      <CommonHeader />
      <HomeComp />
      <MySkillsComp />
      <MyProjectComp />
      <AboutComp />
    </>
  );
}

export default App;
