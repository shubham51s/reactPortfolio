import React from "react";
import CommonHeader from "./components/Header";
import HomeComp from "./components/Home";
import MySkillsComp from "./components/MySkills";
import MyProjectComp from "./components/MyProjects";

function App() {
  return (
    <>
      <CommonHeader />
      <HomeComp />
      <MySkillsComp />
      <MyProjectComp />
    </>
  );
}

export default App;
