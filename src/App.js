import React, { useEffect, useRef, useState } from "react";
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
  const educationRef = useRef();
  const homeRef = useRef();
  const skillsRef = useRef();
  const projectRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          switch (entry.target) {
            case homeRef.current:
              setActiveNav(1);
              break;
            case skillsRef.current:
              setActiveNav(2);
              break;
            case projectRef.current:
              setActiveNav(3);
              break;
            case aboutRef.current:
              setActiveNav(4);
              break;
            case educationRef.current:
              setActiveNav(5);
              break;
            case contactRef.current:
              setActiveNav(6);
              break;
            default:
              break;
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = [
      homeRef.current,
      skillsRef.current,
      projectRef.current,
      aboutRef.current,
      educationRef.current,
      contactRef.current,
    ];

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [setActiveNav]);

  return (
    <>
      <CommonHeader activeNav={activeNav} setActiveNav={setActiveNav} />
      <HomeComp setActiveNav={setActiveNav} homeRef={homeRef} />
      <MySkillsComp skillsRef={skillsRef} />
      <MyProjectComp projectRef={projectRef} />
      <AboutComp aboutRef={aboutRef} />
      <MyEducationComp educationRef={educationRef} />
      <ContactComp contactRef={contactRef} />
      <FooterComp />
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
