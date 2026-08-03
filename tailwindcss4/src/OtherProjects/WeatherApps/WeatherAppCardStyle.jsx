import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import WeatherAppLogo from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherApp.svg";

function WeatherAppCardStyle(props) {
  const navigate = useNavigate();
  return (
    <>
      <motion.div
        className={`relative z-4 font-Tiny5 text-6xl flex justify-center cursor-pointer transition-all duration-500
          ${props.isMd ? "max-md:h-[60%] max-md:top-0 max-md:left-0" : "hover:scale-110 h-13 w-13 top-5"}
        left-55 
        max-lg:left-40 max-lg:top-50`}
        initial={props.initial}
        animate={props.weatherAppControl}
        onClick={() => navigate("/weatherApp")}
      >
        <img src={WeatherAppLogo} alt="Weather App" className="w-35" />
      </motion.div>
    </>
  );
}

export default WeatherAppCardStyle;

/*<motion.div
        className="relative cursor-pointer scale-12 hover:scale-15 transition-all duration-500 border-1
          max-lg:scale-11 z-20"
        initial={props.initial}
        animate={props.weatherAppControl}
        onClick={() => navigate("/weatherApp")}
      ></motion.div>*/
