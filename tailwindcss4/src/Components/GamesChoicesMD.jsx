import React from "react";
import SimonGameCard from "../GameProject/SimonGameCard";
import DailyWorkoutCard from "../GameProject/DailyWorkoutCard";
import QuizGameCard from "../GameProject/QuizGameCard";

function GamesChoicesMD({ isMd, showComponent }) {
  return (
    <div
      className="absolute h-full w-full justify-center hidden
     max-md:flex"
    >
      {showComponent === "Component1" && (
        <div className="absolute w-full h-[20%] bottom-0 z-10 bg-cyan-400 rounded-t-4xl flex">
          <div className="relative h-full w-full rounded-tl-4xl">
            <div className="absolute w-full h-full flex justify-center items-center">
              <SimonGameCard isMd={isMd} />
            </div>
          </div>
          <div className="relative h-full w-full">
            <div className="absolute h-full w-full flex justify-center">
              <DailyWorkoutCard isMd={isMd} />
            </div>
          </div>
          <div className="relative h-full w-full rounded-tr-4xl">
            <div className="absolute w-full h-full flex justify-center items-center">
              <QuizGameCard isMd={isMd} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GamesChoicesMD;
