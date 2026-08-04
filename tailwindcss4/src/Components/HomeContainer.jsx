import "./HomeContainer.css";
import React, { useEffect } from "react";
import "./AboutContainer.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import HomeContainerCardDesc from "./HomeContainerCardDesc";
import HomeContainerDesc from "./HomeContainerDesc";
import Navbar from "./Navbar";
import profileHomePic from "../assets/profileHomePic.svg";
import aiHomeCover1 from "../assets/aiHomeCover1.jpg";
import reactJSLogoBox from "../assets/LogoBox/reactJSLogoBox.svg";
import jsLogoBox from "../assets/LogoBox/jsLogoBox.svg";
import nodeJSLogoBox from "../assets/LogoBox/nodeJSLogoBox.svg";
import vsCodeLogoBox from "../assets/LogoBox/vsCodeLogoBox.svg";
import mongoDBLogoBox from "../assets/LogoBox/mongoDBLogoBox.svg";
import ContactSMDesc from "./ContactSMDesc";
import ContactSM from "./ContactSM";
import { motion } from "framer-motion";
import NotifContent from "./NotifContent";

const HomeContainer = ({ hireRef, openNotif, setOpenNotif }) => {
  const location = useLocation();
  const [lineExpanded, setLineExpanded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showLogos, setShowLogos] = useState(false);

  const handleShow = () => {
    setShowVideo(true);
  };

  const handleHide = () => {
    setShowVideo(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLineExpanded(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogos(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-auto w-full flex items-center flex-col font-Jost rounded-t-4xl ">
      <img
        src={aiHomeCover1}
        alt=""
        className="absolute h-full w-full rounded-t-4xl object-cover object-bottom-left max-md:hidden"
      />
      <div
        className="flex w-full h-full z-10 p-15
        max-xl:p-10
        max-lg:p-0
      max-md:flex-col-reverse"
      >
        <div
          className="flex text-white h-full w-[50%] max-2xl:h-full
        max-md:w-full
        max-sm:h-[70%]"
        >
          {HomeContainerDesc.map((value) => (
            <HomeContainerCardDesc
              key={value.id}
              availability={value.availability}
              intro1={value.intro1}
              intro2={value.intro2}
              intro3={value.intro3}
              showVideo={showVideo}
              onShowVideo={handleShow}
              onCloseVideo={handleHide}
              hireRef={hireRef}
            />
          ))}
        </div>

        {!showVideo && (
          <>
            <div
              className="relative w-[50%] z-10 flex justify-center
            max-md:h-full max-md:w-full"
            >
              <div
                className="absolute max-xl:w-full h-full aspect-square max-lg:aspect-auto flex justify-center p-15
                max-xl:p-0
              max-md:items-center max-sm:relative max-md:h-auto max-md:static"
              >
                <motion.div
                  className="hidden max-md:flex max-md:w-50 max-md:h-50 max-md:rounded-full max-md:border-2 max-md:justify-center border-cyan-400"
                  initial={{ opacity: 0, x: 200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 2 }}
                >
                  <motion.img
                    src={profileHomePic}
                    alt="profileHomePic"
                    className="w-[80%] h-auto relative z-7 
                  max-2xl:w-[70%]
                  max-xl:w-110
                  max-lg:w-80
                  max-md:h-[95%] max-md:rounded-full max-md:w-[95%]"
                  />
                </motion.div>
                <motion.img
                  src={profileHomePic}
                  alt="profileHomePic"
                  className="w-[80%] h-auto relative z-7  
                  max-2xl:w-[70%]
                  max-xl:w-100
                  max-lg:w-80
                  max-md:h-[95%] max-md:rounded-full max-md:w-[95%] max-md:hidden"
                />

                {showLogos && (
                  <>
                    <div className="max-md:hidden absolute w-full h-full">
                      <motion.img
                        src={jsLogoBox}
                        alt="jsLogoBox"
                        className=" size-[clamp(10px,3vw,40px)] relative top-[28%] left-[9%] max-2xl:left-[12%] cursor-pointer z-6
                        max-xl:left-[5%] max-xl:top-[32%]
                        max-lg:top-[38%]"
                        initial={{ opacity: 0, x: 100, y: 70 }}
                        whileInView={{ opacity: 1, x: 0, y: -10 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{
                          scale: 1.1,
                          transition: {
                            duration: 0.2,
                            ease: "easeOut",
                          },
                        }}
                      />
                    </div>
                    <div className="max-md:hidden absolute w-full h-full">
                      <motion.img
                        src={nodeJSLogoBox}
                        alt="nodeJSLogoBox"
                        className=" size-[clamp(10px,3vw,40px)] relative top-[11%] left-[22%] max-2xl:left-[25%] translate-x-2 cursor-pointer z-6
                        max-xl:top-[19%] max-xl:left-[18%]
                         max-lg:top-[28%]"
                        initial={{ opacity: 0, x: 60, y: 120 }}
                        whileInView={{ opacity: 1, x: 0, y: -10 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 1 }}
                        whileHover={{
                          scale: 1.1,
                          transition: {
                            duration: 0.2,
                            ease: "easeOut",
                          },
                        }}
                      />
                    </div>
                    <div className="max-md:hidden absolute w-full h-full">
                      <motion.img
                        src={reactJSLogoBox}
                        alt="reactJSLogoBox"
                        className="size-[clamp(10px,3vw,40px)] relative top-[2%] left-[52%] max-2xl:top-[5%] cursor-pointer z-6
                        max-xl:top-[10%]
                         max-lg:top-[20%]"
                        initial={{ opacity: 0, x: 0, y: 120 }}
                        whileInView={{ opacity: 1, x: 0, y: -10 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 1.2 }}
                        whileHover={{
                          scale: 1.1,
                          transition: {
                            duration: 0.2,
                            ease: "easeOut",
                          },
                        }}
                      />
                    </div>
                    <div className="max-md:hidden absolute w-full h-full">
                      <motion.img
                        src={mongoDBLogoBox}
                        alt="mongoDBLogoBox"
                        className="size-[clamp(10px,3vw,40px)] relative top-[11%] max-2xl:left-[80%] max-2xl:top-[14%] left-[85%] cursor-pointer z-6
                        max-xl:top-[17%]
                        max-lg:top-[26%]"
                        initial={{ opacity: 0, x: -100, y: 120 }}
                        whileInView={{ opacity: 1, x: 0, y: -10 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 1.3 }}
                        whileHover={{
                          scale: 1.1,
                          transition: {
                            duration: 0.2,
                            ease: "easeOut",
                          },
                        }}
                      />
                    </div>
                    <div className="max-md:hidden absolute w-full h-full">
                      <motion.img
                        src={vsCodeLogoBox}
                        alt="vsCodeLogoBox"
                        className="size-[clamp(10px,3vw,40px)] relative top-[34%] left-[90%] max-2xl:left-[85%] cursor-pointer z-6
                        max-xl:left-[92%] max-xl:top-[36%]
                         max-lg:top-[42%]"
                        initial={{ opacity: 0, x: -40, y: 120 }}
                        whileInView={{ opacity: 1, x: 0, y: -10 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 1.5 }}
                        whileHover={{
                          scale: 1.1,
                          transition: {
                            duration: 0.2,
                            ease: "easeOut",
                          },
                        }}
                      />
                    </div>
                  </>
                )}
              </div>
              <motion.div
                className="absolute gap-2 hidden justify-end
                max-lg:flex max-lg:h-auto max-lg:translate-y-155 max-lg:animate-bounce 
                max-md:pl-0 max-md:gap-3 max-md:h-full max-md:hidden
                                  max-sm:gap-0 z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 3 }}
              >
                {ContactSMDesc.map((value) => (
                  <ContactSM
                    key={value.id}
                    link={value.link}
                    logo={value.logo}
                    isId1={value.id === 1}
                    isId2={value.id === 2}
                    isId3={value.id === 3}
                    isId4={value.id === 4}
                  />
                ))}
              </motion.div>
            </div>
          </>
        )}
        {openNotif && (
          <div
            className="fixed inset-0 z-[999] flex items-center justify-center
          bg-black/50 backdrop-blur-sm"
            onClick={() => setOpenNotif(false)}
          >
            <div
              className="relative bg-[#181717] rounded-2xl p-6
            w-[90%] max-w-lg text-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpenNotif(false)}
                className="absolute top-3 right-3 text-xl cursor-pointer"
              >
                ✕
              </button>

              <NotifContent />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeContainer;
