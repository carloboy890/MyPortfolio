import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import playButton from "../assets/playButton.gif";
import arrowView from "../assets/arrowView.gif";
import myWorkplace1 from "../assets/myWorkplace1.mp4";
import ContactSMDesc from "./ContactSMDesc";
import ContactSM from "./ContactSM";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function HomeContainerCardDesc(props) {
  const navigate = useNavigate();
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <div
      className="p-10 w-full relative font-Jost flex flex-col justify-center items-center
      max-2xl:p-5
      max-xl:p-0 max-xl:h-auto
      max-lg:p-10 
      max-md:p-5 "
    >
      {!props.showVideo && (
        <>
          <div
            className="space-y-12.5 h-full max-2xl:w-full pt-5
            max-xl:h-full
          max-lg:flex max-lg:flex-col max-lg:justify-center max-md:items-center
          max-lg:space-y-15 
          max-md:space-y-10
          "
          >
            <motion.div
              className="line-container w-[75%]
            max-2xl:w-[88%]
            max-xl:w-full max-xl:translate-y-7
            max-lg:animate-none  max-lg:w-full 
            max-md:text-center"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1 }}
            >
              <div
                className="fade text-[1.2rem] text-white
              max-2xl:text-[1.1rem]
              max-lg:z-10 max-lg:text-[0.9rem] 
              max-sm:text-[0.8rem]"
              >
                {props.availability}
                <span className="ml-5">
                  <FontAwesomeIcon icon={faSquareArrowUpRight} />
                </span>
                <div className="line bg-white w-full h-1 mt-4 max-md:hidden"></div>
              </div>
            </motion.div>

            <motion.div
              className="w-full font-Jost text-base/18 text-[2.5rem] text-white
                max-2xl:w-[80%] max-2xl:text-[2rem]
                max-xl:text-base/15.5
                max-lg:text-base/16 max-lg:w-full
                max-md:text-center max-md:flex max-md:flex-col max-md:justify-center max-md:ml-0
                max-sm:text-base/12"
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5 }}
            >
              <p
                className="text-[1.8rem] 
              max-2xl:text-[2.2rem]
              max-xl:text-[2rem] 
              max-lg:text-[1.6rem]
              max-md:text-[1.6rem]
              max-sm:text-[1rem]"
              >
                {props.intro1}
              </p>
              <p
                className="animate-bounce 
                max-xl:text-[2rem]
                max-md:text-[1.6rem]
              max-sm:text-[1.2rem] text-[#2dd4bf]"
              >
                {props.intro2}
              </p>
              <p
                className="
              max-xl:text-[2rem] max-md:w-full max-md:text-[1.6rem] max-sm:text-[1.2rem]"
              >
                {props.intro3}
              </p>
            </motion.div>

            <motion.div
              className="flex
              max-xl:h-17
              max-lg:h-15 max-lg:w-[90%]
              max-md:h-20 max-md:w-[60%] max-md:justify-center max-md:items-center
              max-sm:h-[13%] h-20 "
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.8 }}
            >
              <div className="max-md:w-70 max-md:h-full max-md:justify-end">
                <img
                  src={arrowView}
                  alt="arrowView"
                  className="max-2xl:w-full h-full
                max-md:p-3
                 max-sm:p-1 max-sm:w-full"
                />
              </div>
              <div className="flex justify-center max-md:w-18 max-md:h-full">
                <img
                  src={playButton}
                  alt="playButton"
                  onClick={props.onShowVideo}
                  className=" cursor-pointer w-full h-full"
                />
              </div>
            </motion.div>

            <motion.div
              className="flex space-x-20
              max-lg:space-x-5
              max-md:justify-center"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 2.5 }}
            >
              <button
                onClick={() => scrollToSection(props.hireRef)}
                className="shadow__btn cursor-pointer max-lg:scale-80"
              >
                Hire Me!
              </button>
              <button
                onClick={() => navigate("/freecommentapp")}
                className="shadow__btn cursor-pointer max-lg:scale-80"
              >
                Let's Talk
              </button>
            </motion.div>
            <motion.div
              className="flex gap-2 justify-end
              max-lg:hidden
              max-md:pl-0 max-md:gap-1 max-md:flex max-md:animate-none max-md:justify-center
              max-sm:gap-0"
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

      {/* Screen Video Overlay */}
      {props.showVideo && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={props.onCloseVideo}
        >
          <motion.div
            className="relative w-[90%] max-w-5xl"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={props.onCloseVideo}
              className="absolute -top-12 right-0 text-white text-4xl cursor-pointer"
            >
              ×
            </button>

            <video
              src={myWorkplace1}
              autoPlay
              controls
              className="w-full rounded-xl shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default HomeContainerCardDesc;
