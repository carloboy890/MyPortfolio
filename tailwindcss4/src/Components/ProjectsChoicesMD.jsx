import React from "react";
import WeatherAppCardStyle from "../OtherProjects/WeatherApps/WeatherAppCardStyle";
import MovieAppCardStyle from "../OtherProjects/MovieApps/MovieAppCardStyle";
import FreeCommentAppCardStyle from "../OtherProjects/FreeComment/FreeCommentAppCardStyle";

function ProjectsChoicesMD({ isMd, showComponent }) {
  return (
    <div
      className="absolute h-full w-full justify-center hidden
     max-md:flex"
    >
      {showComponent === "Component2" && (
        <div className="absolute w-full h-[20%] bottom-0 z-10 bg-cyan-400 rounded-t-4xl flex">
          <div className="relative h-full w-full rounded-tl-4xl">
            <div className="absolute w-full flex items-center justify-center h-full">
              <WeatherAppCardStyle isMd={isMd} />
            </div>
          </div>
          <div className="relative h-full w-full">
            <div className="absolute  h-full w-full flex justify-center">
              <MovieAppCardStyle isMd={isMd} />
            </div>
          </div>
          <div className="relative h-full w-full rounded-tr-4xl">
            <div className="absolute w-full  h-full flex justify-center items-center">
              <FreeCommentAppCardStyle isMd={isMd} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectsChoicesMD;
