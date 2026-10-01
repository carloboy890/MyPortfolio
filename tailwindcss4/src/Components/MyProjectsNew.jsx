import React, { useState, useEffect, useRef } from "react";
import iphoneFrame from "../assets/iphoneFrame.png";
import { motion, useInView } from "framer-motion";
import VideoGameVid from "../assets/VideoGameVid.gif";
import GameProjects from "../GameProject/GameProjects";
import OtherProjects from "../OtherProjects/OtherProjects";
import GameProjects1 from "../GameProject/GameProjects1";
import OtherProjects1 from "../OtherProjects/OtherProjects1";
import FloatingProjects from "./floatingProjects";
import GamesChoicesMD from "./GamesChoicesMD";
import ProjectsChoicesMD from "./ProjectsChoicesMD";

function MyProjectsNew() {
  const [showProjs, setShowProjs] = useState("none");
  const [isMd, setIsMd] = useState(window.innerWidth < 768);
  const [showComponent, setShowComponent] = useState("");

  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    amount: 0.3,
  });

  useEffect(() => {
    if (!isInView) {
      setShowProjs("none");
      setShowComponent("none");
    }
  }, [isInView]);

  useEffect(() => {
    const handleResize = () => {
      setIsMd(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="absolute text-black w-full h-full rounded-4xl flex justify-center items-center border-1 flex-col"
      ref={sectionRef}
    >
      <motion.div
        className="w-full h-[20%] text-center text-5xl font-Jost font-bold flex justify-center items-end space-x-5
        max-md:absolute max-md:top-0
        max-sm:text-4xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 2 }}
      >
        <div>Project </div>
        <motion.span
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
          className="inline-block"
        >
          Opportunities
        </motion.span>
      </motion.div>
      <div className="relative h-full w-full flex justify-center items-center">
        <img
          src={iphoneFrame}
          alt="Iphone Frame"
          className="h-[70%] absolute z-2 
          max-lg:h-[50%]
          max-md:h-[45%]"
        />

        {/* For animation */}
        <GameProjects1 />
        <OtherProjects1 />
        {/* --> end */}

        <FloatingProjects showProjs={showProjs} isMd={isMd} />
        <GameProjects showProjs={showProjs} />
        <OtherProjects showProjs={showProjs} />
        <div
          className="absolute space-y-5 flex flex-col
          max-xl:space-y-3
          max-lg:space-y-2"
        >
          <motion.button
            onClick={() => {
              setShowComponent("Component1");
              setShowProjs("GameProjects");
            }}
            whileTap={{ scale: 0.95, rotate: "6.5deg" }}
            className="border-4 rounded-4xl z-3 text-3xl p-4 cursor-pointer inline-flex items-center gap-1 border-slate-300 bg-gradient-to-b from-slate-50 to-slate-200 px-4 py-2 font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100
            max-2xl:text-[1.4rem]
            max-xl:text-[1.2rem]
            max-lg:text-[1.1rem]
            max-md:text-[0.9rem] 
            max-sm:text-[0.7rem]"
          >
            Game Projects
          </motion.button>
          <motion.button
            onClick={() => {
              setShowComponent("Component2");
              setShowProjs("OtherProjects");
            }}
            whileTap={{ scale: 0.95, rotate: "6.5deg" }}
            className="border-4 rounded-4xl text-3xl z-3 p-4 cursor-pointer inline-flex items-center gap-1 border-slate-300 bg-gradient-to-b from-slate-50 to-slate-200 px-4 py-2 font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100
            max-2xl:text-[1.4rem]
            max-xl:text-[1.2rem]
            max-lg:text-[1.1rem]
            max-md:text-[0.9rem] 
            max-sm:text-[0.7rem]"
          >
            Other Projects
          </motion.button>
        </div>
      </div>

      <GamesChoicesMD isMd={isMd} showComponent={showComponent} />
      <ProjectsChoicesMD isMd={isMd} showComponent={showComponent} />
    </div>
  );
}

export default MyProjectsNew;
