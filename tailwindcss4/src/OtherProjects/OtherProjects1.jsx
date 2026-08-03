import React from "react";
import DoingPaint3D from "../assets/DoingPaint3D.gif";
import WeatherAppCardStyle from "./WeatherApps/WeatherAppCardStyle";
import FreeCommentAppCardStyle from "./FreeComment/FreeCommentAppCardStyle";
import MovieAppCardStyle from "./MovieApps/MovieAppCardStyle";
import { motion } from "framer-motion";

function OtherProjects1() {
  return (
    <>
      <motion.div
        className="absolute top-60 max-sm:hidden"
        initial={{ opacity: 1, x: 60, y: -190 }}
        whileInView={{ opacity: 0, x: -100, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <WeatherAppCardStyle />
      </motion.div>
      <motion.div
        className="absolute top-80 max-sm:hidden"
        initial={{ opacity: 1, x: 150, y: -160 }}
        whileInView={{ opacity: 0, x: -100, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <MovieAppCardStyle />
      </motion.div>
      <motion.div
        className="absolute top-100 max-sm:hidden"
        initial={{ opacity: 1, x: 90, y: -100 }}
        whileInView={{ opacity: 0, x: -100, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <FreeCommentAppCardStyle />
      </motion.div>
    </>
  );
}

export default OtherProjects1;
