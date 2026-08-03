import React from "react";
import { easeInOut, motion } from "framer-motion";

const SkillMDcard = (props) => {
  return (
    <motion.div
      className="max-lg:flex max-md:w-2/3 ml-30 items-center max-md:justify-around h-20
    max-sm:ml-0"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5, ease: easeInOut }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <div>
        <img
          className="w-20 max-lg:w-11 max-lg:h-13 max-md:w-12 max-md:h-10
          max-sm:w-11 max-sm:h-7 max-sm:mt-2"
          src={props.logo}
          alt={props.tool}
        />
      </div>
      <div
        className="mt-3 w-30 ml-5
      max-sm:text-[0.9rem] 
      max-sm:ml-4"
      >
        {props.tool}
      </div>
      <div
        className="mt-4 w-2/4 bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700 
      max-sm:mt-7 max-sm:ml-3"
      >
        <div
          className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
          style={{ width: props.percentage }}
        ></div>
      </div>
      <div
        className="ml-5 
      max-sm:mt-3"
      >
        {props.percentage}
      </div>
    </motion.div>
  );
};

export default SkillMDcard;
