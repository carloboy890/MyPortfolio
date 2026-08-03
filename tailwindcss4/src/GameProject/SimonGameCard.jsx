import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

function SimonGameCard({ isMd }) {
  const navigate = useNavigate();
  const colors = ["bg-red-500", "bg-blue-500", "bg-yellow-500", "bg-green-500"];

  return (
    <>
      <div>
        <div
          className={`relative card1 h-120 w-90 cursor-pointer transition-all duration-1000 border-amber-600 
          ${isMd ? "max-md:scale-20" : "scale-12 max-lg:right-45 right-65"}`}
          onClick={() => navigate("/simon")}
        >
          <div className="absolute z-4 font-Tiny5 text-6xl top-5 text-center ">
            <div className="text-[#8F4da6]">Game</div>
            <div className="text-[#498fa2]">Over</div>
          </div>
          <div className="b"></div>
          <div
            className={`flex justify-center items-center flex-wrap gap-2 absolute z-3  h-50 w-50 top-50
            ${!isMd ? "content" : ""}`}
          >
            {colors.map((value, i) => (
              <div key={i} className={`rounded-xl h-20 w-20 ${value}`}></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SimonGameCard;
