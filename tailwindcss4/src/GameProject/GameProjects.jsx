import React from "react";
import VideoGameVid from "../assets/VideoGameVid.gif";
import DailyWorkoutCard from "../GameProject/DailyWorkoutCard";
import QuizGameCard from "../GameProject/QuizGameCard";
import SimonGameCard from "../GameProject/SimonGameCard";
import { motion } from "framer-motion";

function GameProjects({ showProjs }) {
  return (
    <>
      {showProjs === "GameProjects" && (
        <>
          {showProjs === "GameProjects" && (
            <motion.img
              src={VideoGameVid}
              alt="VideoGameVid"
              className="absolute h-[54%] z-3
              max-lg:h-[39%]
              max-md:h-[34%]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7 }}
            />
          )}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: -190 }}
            transition={{ duration: 0.6 }}
            className="absolute top-80 z-1
            max-lg:top-100
            max-md:hidden"
          >
            <DailyWorkoutCard />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100, y: 0 }}
            animate={{ opacity: 1, x: -150, y: -100 }}
            transition={{ duration: 0.8 }}
            className="absolute top-13
            max-lg:top-30
            max-md:hidden"
          >
            <SimonGameCard />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50, y: 0 }}
            animate={{ opacity: 1, x: -280, y: -80 }}
            transition={{ duration: 0.8 }}
            className="absolute top-45
            max-lg:top-68
            max-md:hidden"
          >
            <QuizGameCard />
          </motion.div>
        </>
      )}
    </>
  );
}

export default GameProjects;
