import React from "react";

function CardSlideMyService() {
  const slides = [0, 1, 2, 3, 4, 5, 6];

  return (
    <div
      className="rounded-4xl
              bg-white/10 backdrop-blur-lg
              border border-cyan-400/20
              shadow-[0_0_25px_rgba(34,211,238,0.25)]
              flex items-center justify-center
              text-4xl font-bold text-white
              transition-all duration-100 h-[90%] w-[90%]"
    ></div>
  );
}

export default CardSlideMyService;
