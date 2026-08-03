import React from "react";
import DoingPaint3D from "../assets/DoingPaint3D.gif";
import WeatherAppCardStyle from "./WeatherApps/WeatherAppCardStyle";
import FreeCommentAppCardStyle from "./FreeComment/FreeCommentAppCardStyle";
import MovieAppCardStyle from "./MovieApps/MovieAppCardStyle";
import { motion } from "framer-motion";

function OtherProjects({ showProjs }) {
  return (
    <>
      {showProjs === "OtherProjects" && (
        <>
          <motion.img
            src={DoingPaint3D}
            alt="Doing Painting 3D"
            className="absolute h-[54%] z-3
            max-lg:h-[39%]
            max-md:h-[34%]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7 }}
          />

          <motion.div
            className="absolute top-60 z-30
            max-lg:top-40 max-md:hidden"
            initial={{ opacity: 0, x: -100, y: 0 }}
            animate={{ opacity: 1, x: 60, y: -190 }}
            transition={{ duration: 0.6 }}
          >
            <WeatherAppCardStyle />
          </motion.div>
          <motion.div
            className="absolute top-80
            max-lg:top-100 max-md:hidden"
            initial={{ opacity: 0, x: -100, y: 0 }}
            animate={{ opacity: 1, x: 150, y: -160 }}
            transition={{ duration: 0.8 }}
          >
            <MovieAppCardStyle />
          </motion.div>
          <motion.div
            className="absolute top-100
            max-lg:top-120 max-md:hidden"
            initial={{ opacity: 0, x: -100, y: 0 }}
            animate={{ opacity: 1, x: 90, y: -100 }}
            transition={{ duration: 0.4 }}
          >
            <FreeCommentAppCardStyle />
          </motion.div>
        </>
      )}
    </>
  );
}

export default OtherProjects;
