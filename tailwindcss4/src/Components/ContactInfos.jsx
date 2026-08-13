import React from "react";
import { motion } from "framer-motion";

function ContactInfos(props) {
  return (
    <motion.div
      className="w-full h-[30%] flex items-center
      max-sm:space-x-4"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <div
        className="w-25 h-full border-white flex justify-center items-center rounded-4xl bg-cyan-950
      max-2xl:w-20 max-2xl:h-20
      max-xl:w-17 max-xl:h-17
      max-lg:w-14 max-lg:h-14"
      >
        <img src={props.logo} alt={props.title} className="w-[40%]" />
      </div>
      <div
        className="w-[80%] p-5 space-y-2 
      max-xl:w-[70%]
      max-md:p-2
      max-sm:space-y-1"
      >
        <div
          className="text-[1.2rem] font-bold 
        max-2xl:text-[1.1rem]
        max-lg:text-[0.9rem]"
        >
          {props.title}
        </div>
        <div
          className="max-2xl:text-[0.9rem]
        max-lg:text-[0.7rem] 
        max-sm:text-[0.8rem] max-sm:break-words"
        >
          {props.description}
        </div>
      </div>
    </motion.div>
  );
}

export default ContactInfos;
