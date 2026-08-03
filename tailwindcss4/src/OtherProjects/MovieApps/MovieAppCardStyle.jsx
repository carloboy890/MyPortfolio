import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import MovieAppLogo from "../../assets/ProjectsLogos/OtherProjectsSVG/MovieApp.svg";

function MovieAppCardStyle({ isMd }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex - justify-center items-center">
        <div
          onClick={() => navigate("/movieApp")}
          className={`border-black relative cursor-pointer shadow-inner transition-all duration-500 bg-black/60 flex justify-center items-center rounded-xl
          left-60 max-lg:left-45 ${isMd ? "max-md:left-0 max-md:h-[60%] max-md:w-26" : "hover:scale-110 w-13 h-13"}`}
        >
          <img src={MovieAppLogo} alt="Movie App" className="w-[60%]" />
        </div>
      </div>
    </>
  );
}

export default MovieAppCardStyle;
