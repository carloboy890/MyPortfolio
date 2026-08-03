import React from "react";
import quizLogo from "../assets/ProjectsLogos/quizLogo.png";
import quizTimeSVG from "../assets/ProjectsLogos/quizTimeSVG.svg";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";

function QuizGameCard({ isMd }) {
  const navigate = useNavigate();
  return (
    <>
      <motion.div
        className={`relative w-full h-full quiz-card flex justify-center items-center`}
        onClick={() => navigate("/quiz")}
      >
        <div
          className={`${isMd ? "scale-50" : "scale-30 max-lg:left-0"} absolute w-full h-full cursor-pointer flex flex-col card2 transform transition-all duration-500 justify-center items-center`}
        >
          <div>
            <img src={quizTimeSVG} alt="quiz time" className="h-8" />
          </div>
          <div>
            <img src={quizLogo} alt="quiz logo" className="h-32" />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default QuizGameCard;
