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
import MiniSiri from "../Components/miniSiri";
import Experience2 from "../Components/Experience2";

const Home = () => {
  const [openNotif, setOpenNotif] = useState(false);
  const [certs, setCerts] = useState(null);
  const [isMd, setIsMd] = useState(window.innerWidth < 768);
  const [showVideo, setShowVideo] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const scrollContainerRef = useRef(null);
  const location = useLocation();
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const hireRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [toClick, setToClick] = useState(false);
  const [openAiBot, setOpenAiBot] = useState(false);
  const [showArrow, setShowArrow] = useState("");
  const [resultMess, setResultMess] = useState("");
  const [onBtnSwitch, setOnBtnSwitch] = useState("");
  const introTimer = useRef(null);
  const exploreTimer = useRef(null);
  const aboutTimer = useRef(null);

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
      <div
        ref={scrollContainerRef}
        className="absolute w-full h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory font-Jost text-white"
      >
        {!showVideo && (
          <div className="fixed top-3 left-0 h-[12%] opacity-90 w-full z-50 flex justify-center">
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
        )}
        <div className="fixed h-50 w-130 flex justify-end bottom-0 right-0 z-21">
          <MiniSiri
            isMd={isMd}
            homeRef={homeRef}
            activePage={activePage}
            setToClick={setToClick}
            toClick={toClick}
            openAiBot={openAiBot}
            setOpenAiBot={setOpenAiBot}
            setShowArrow={setShowArrow}
            showArrow={showArrow}
            resultMess={resultMess}
            setResultMess={setResultMess}
            introTimer={introTimer}
            exploreTimer={exploreTimer}
          />
        </div>

        <motion.div
          ref={homeRef}
          onViewportEnter={() => setActivePage(1)}
          viewport={{ root: scrollContainerRef, amount: 1 }}
          className="h-[100vh] relative w-full flex rounded-t-4xl max-2xl:h-auto max-sm:h-auto max-md:bg-transparent snap-start inset-0 z-20 bg-transparent"
          onClick={() => setToClick(false)}
        >
          <HomeContainer
            key={location.key}
            hireRef={hireRef}
            openNotif={openNotif}
            setOpenNotif={setOpenNotif}
            setShowVideo={setShowVideo}
            showVideo={showVideo}
            toClick={toClick}
            openAiBot={openAiBot}
            showArrow={showArrow}
            activePage={activePage}
            setResultMess={setResultMess}
            onBtnSwitch={onBtnSwitch}
            setOnBtnSwitch={setOnBtnSwitch}
            introTimer={introTimer}
            exploreTimer={exploreTimer}
          />
        </motion.div>

        <motion.div
          ref={aboutRef}
          onViewportEnter={() => setActivePage(2)}
          viewport={{ root: scrollContainerRef, amount: 1 }}
          className="relative w-full h-[100vh] items-center flex justify-center bg-[#090909] snap-start
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
            <AboutContainer
              activePage={activePage}
              setResultMess={setResultMess}
              setOnBtnSwitch={setOnBtnSwitch}
              aboutTimer={aboutTimer}
            />
          </MotionConfig>
        </motion.div>
        <div
          ref={hireRef}
          className="relative h-[100vh] justify-center items-center flex snap-start
            pt-20 bg-[#090909] max-sm:h-auto"
        >
          <MotionConfig reducedMotion={isMd ? "always" : "never"}>
            <Hire />
          </MotionConfig>
        </div>

        <div className="relative h-[100vh] snap-start flex-col flex max-sm:h-[100vh] ">
          <MotionConfig reducedMotion={isMd ? "always" : "never"}>
            <MyServices />
          </MotionConfig>
        </div>
        <div className="relative h-[150vh] flex flex-col justify-center items-center snap-start w-full bg-[#090909] border-2 border-cyan-400">
          <div
            ref={experienceRef}
            className="relative h-[75vh] rounded-t-4xl w-full flex-col flex bg-[#090909] 
            max-xl:h-auto"
          >
            <MotionConfig reducedMotion={isMd ? "always" : "never"}>
              <MyExperience setCerts={setCerts} certs={certs} />
            </MotionConfig>
          </div>
          <div
            className="relative h-[60vh] rounded-b-4xl w-full flex-col flex bg-[#090909] 
            max-xl:h-auto"
          >
            {" "}
            <MotionConfig reducedMotion={isMd ? "always" : "never"}>
              <Experience2 setCerts={setCerts} certs={certs} isMd={isMd} />
            </MotionConfig>
          </div>
        </div>

        <div
          ref={skillsRef}
          className="relative h-[100vh] w-full rounded-4xl flex-col flex bg-white/20 mt-5 snap-start"
        >
          <SkillsContainer />
        </div>
        <div
          ref={projectsRef}
          className="relative h-[100vh] w-[105%] right-11.5 rounded-4xl flex-col flex bg-[#ffffff] mt-5 snap-start
            max-lg:w-full max-lg:right-0
            max-md:h-[90vh] max-sm:h-[80vh]"
        >
          <MotionConfig reducedMotion={isMd ? "always" : "never"}>
            <MyProjectsNew />
          </MotionConfig>
        </div>
        <div
          ref={contactRef}
          className="relative h-[100vh] w-full rounded-4xl flex-col bg-[#090909] flex mt-5 snap-start
            max-lg:h-[80vh] max-sm:h-auto"
        >
          <MotionConfig reducedMotion={isMd ? "always" : "never"}>
            <MyContacts />
          </MotionConfig>
        </div>
      </div>
    </div>
  );
};

export default Home;
