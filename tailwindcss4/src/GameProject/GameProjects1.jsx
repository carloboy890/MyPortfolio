import React from "react";
import VideoGameVid from "../assets/VideoGameVid.gif";
import DailyWorkoutCard from "./DailyWorkoutCard";
import QuizGameCard from "./QuizGameCard";
import SimonGameCard from "./SimonGameCard";
import { motion } from "framer-motion";

function GameProjects1() {
  return (
    <>
      <motion.div
        initial={{ opacity: 1, x: -190 }}
        whileInView={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true, amount: 0.5 }}
        className="absolute top-80 max-sm:hidden"
      >
        <DailyWorkoutCard />
      </motion.div>
      <motion.div
        initial={{ opacity: 1, x: -150, y: -100 }}
        whileInView={{ opacity: 0, x: 100, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true, amount: 0.5 }}
        className="absolute top-10 max-sm:hidden"
      >
        <SimonGameCard />
      </motion.div>
      <motion.div
        initial={{ opacity: 1, x: -280, y: -80 }}
        whileInView={{ opacity: 0, x: 100, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        viewport={{ once: true, amount: 0.5 }}
        className="absolute  top-45 max-sm:hidden"
      >
        <QuizGameCard />
      </motion.div>
    </>
  );
}

export default GameProjects1;
