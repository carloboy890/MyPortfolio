import React, { useRef, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import HomeContainer from "../Components/HomeContainer";
import { useLocation } from "react-router-dom";
import MainBgCover from "../Components/MainBgCover";
import AboutContainer from "../Components/AboutContainer";
import earthGreenBG from "../assets/earthGreenBG.png";
import Hire from "../Components/Hire";
import MyServices from "../Components/MyServices";
import MyExperience from "../Components/MyExperience";
import SkillsContainer from "../Components/SkillsContainer";
import MyProjectsNew from "../Components/MyProjectsNew";
import MyContacts from "../Components/MyContacts";
import { motion, MotionConfig } from "framer-motion";
import NotifContent from "../Components/NotifContent";

const Home = () => {
  const [openNotif, setOpenNotif] = useState(false);
  const [isMd, setIsMd] = useState(window.innerWidth < 768);
  const location = useLocation();
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const hireRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMd(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <MainBgCover />
      <div className="absolute w-full min-h-screen overflow-scroll font-Jost flex flex-col justify-center items-center text-white">
        <div className="fixed top-5 left-0 h-[12%] opacity-90 w-full z-50 flex justify-center">
          <Navbar
            homeRef={homeRef}
            aboutRef={aboutRef}
            experienceRef={experienceRef}
            skillsRef={skillsRef}
            projectsRef={projectsRef}
            contactRef={contactRef}
            setOpenNotif={setOpenNotif}
          />
        </div>
        <div className="relative w-[95%] h-auto bg-transparent rounded-t-4xl mt-5 flex-col">
          <div className="h-auto">
            <div
              ref={homeRef}
              className="h-[100vh] bg-[#090909] w-full flex rounded-t-4xl
              max-lg-[80vh] max-sm:h-auto max-sm:bg-transparent"
            >
              <HomeContainer
                key={location.key}
                hireRef={hireRef}
                openNotif={openNotif}
                setOpenNotif={setOpenNotif}
              />
            </div>

            <div
              ref={aboutRef}
              className="relative w-full h-[100vh] items-center flex justify-center bg-[#090909] 
              max-sm:h-auto"
            >
              <motion.img
                src={earthGreenBG}
                alt="earth green backGround"
                className="absolute inset-0 w-full h-full object-cover opacity-70
              max-sm:"
                {...(!isMd && {
                  initial: { opacity: 1, x: 300 },
                  whileInView: { opacity: 0.7, x: 0 },
                  viewport: { once: false, amount: 0.5 },
                  transition: { duration: 2 },
                })}
              />
              <MotionConfig reducedMotion={isMd ? "always" : "never"}>
                <AboutContainer />
              </MotionConfig>
            </div>
            <div
              ref={hireRef}
              className="relative h-[110vh] justify-center items-center flex
            pt-20 bg-[#090909] max-sm:h-auto"
            >
              <MotionConfig reducedMotion={isMd ? "always" : "never"}>
                <Hire />
              </MotionConfig>
            </div>
          </div>
          <div className="relative h-screen flex-col flex ">
            <MotionConfig reducedMotion={isMd ? "always" : "never"}>
              <MyServices />
            </MotionConfig>
          </div>
          <div
            ref={experienceRef}
            className="relative h-[150vh] rounded-4xl w-full flex-col flex bg-[#090909] 
            max-sm:h-auto"
          >
            <MotionConfig reducedMotion={isMd ? "always" : "never"}>
              <MyExperience />
            </MotionConfig>
          </div>
          <div
            ref={skillsRef}
            className="relative h-[100vh] w-full rounded-4xl flex-col flex bg-white/20 mt-5"
          >
            <SkillsContainer />
          </div>
          <div
            ref={projectsRef}
            className="relative h-[100vh] w-[105%] right-11.5 rounded-4xl flex-col flex bg-[#ffffff] mt-5
            max-lg:w-full max-lg:right-0
            max-md:h-[90vh] max-sm:h-[80vh]"
          >
            <MotionConfig reducedMotion={isMd ? "always" : "never"}>
              <MyProjectsNew />
            </MotionConfig>
          </div>
          <div
            ref={contactRef}
            className="relative h-screen w-full rounded-4xl flex-col bg-[#090909] flex mt-5 
            max-lg:h-[80vh] max-sm:h-auto"
          >
            <MotionConfig reducedMotion={isMd ? "always" : "never"}>
              <MyContacts />
            </MotionConfig>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
