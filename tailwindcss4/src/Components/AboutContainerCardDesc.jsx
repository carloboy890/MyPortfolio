import React from "react";
import UIUX from "../assets/UIUX.png";
import myResume from "../assets/myResume.pdf";
import { onBtnEnter } from "./aiAssistant/aiUtils/onBtnEnter";

function AboutContainerCardDesc(props) {
  return (
    <>
      <div
        className="p-10 space-y-5
      max-sm:p-3"
      >
        <div className="animate-sm-lg space-y-5">
          <h2
            className="text-3xl sm:text-4xl font-bold
                max-lg:text-center
                max-md:text-center max-md:mb-5"
          >
            {props.title}
          </h2>
          <div
            className="flex flex-wrap gap-3 text-sm sm:text-base font-semibold
                  max-lg:justify-center
                  max-md:flex max-md:justify-center"
          >
            <span>{props.employmentType1}</span>
            <span>/</span>
            <span>{props.employmentType2}</span>
          </div>
          <p
            className="leading-relaxed text-justify text-[1.1rem]
                  max-2xl:text-[1rem] max-2xl:text-base/7
                  max-xl:text-[0.85rem] max-xl:text-base/7 max-xl:-mb-2 
                  max-lg:text-center
                  max-md:mt-10 max-md:text-center 
                  max-sm:text-[0.7rem]"
          >
            {props.description}
          </p>
        </div>

        <hr
          className="animate-sm-lg border-t border-white/30 
                max-xl:mb-7"
        />

        <div className="h-[20%] flex">
          <div className="w-full space-y-5">
            <div className="max-md:text-[0.9rem]">
              Name:{" "}
              <span className="ml-4 text-[0.9rem] max-md:text-[0.65rem]">
                Carlo Damalerio
              </span>
            </div>
            <div className="max-md:text-[0.8rem]">
              Age:{" "}
              <span className="ml-4 text-[0.9rem] max-md:text-[0.65rem]">
                29
              </span>
            </div>
          </div>
          <div className="w-full space-y-5">
            <div className="max-md:text-[0.8rem]">
              From:{" "}
              <span className="ml-4 text-[0.9rem] max-md:text-[0.65rem]">
                Caloocan City
              </span>
            </div>
            <div className="max-md:text-[0.8rem]">
              Email:
              <span className="ml-4 text-[0.9rem] max-md:text-[0.65rem]">
                carlo_damalerio@yahoo.com
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-13 cursor-pointer">
          <button
            onMouseEnter={() => {
              clearTimeout(props.aboutTimer.current);
              onBtnEnter({
                buttonId: "about-resume",
                activePage: props.activePage,
                setOnBtnSwitch: props.setOnBtnSwitch,
                setResultMess: props.setResultMess,
                aboutTimer: props.aboutTimer,
              });
            }}
            onMouseLeave={() => props.setResultMess(null)}
            onClick={() => window.open(myResume, "_blank")}
            className="shadow__btn cursor-pointer !text-[0.8rem]"
          >
            View Resume
          </button>
        </div>
      </div>
    </>
  );
}

export default AboutContainerCardDesc;
