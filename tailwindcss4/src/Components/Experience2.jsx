import React from "react";
import MyExperienceCard from "./MyExperienceCard";
import MyExperienceCardDesc from "./MyExperienceCardDesc";
import { motion, MotionConfig } from "framer-motion";

function Experience2({ isMd, setCerts }) {
  const animate = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
  };
  return (
    <div
      className="flex flex-col h-full w-full 
          relative"
    >
      <div
        className="absolute w-full h-full flex flex-col justify-center items-center
        max-md:items-start max-md:left-10"
      >
        <div className="absolute h-full w-[3px]  bg-cyan-400 shadow-[0_0_15px_#22d3ee]"></div>
        <motion.div
          className={`absolute top-60 h-5 w-5 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]
              max-md:-left-2 max-sm:top-115`}
          initial={{ opacity: 0, x: isMd ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: false, amount: 0.5 }}
        ></motion.div>
      </div>
      <div className="h-auto w-full flex justify-center">
        <motion.div
          className="mt-5 ml-110 z-1 w-[clamp(340px,30vw,380px)] bg-[#090909] rounded-3xl hover:bg-cyan-400/10 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] cursor-pointer  
             max-lg:ml-95
            max-md:ml-0 max-md:w-[60%] max-md:bg-gray-900
            max-sm:w-[80%] max-sm:ml-13
             "
          variants={animate}
          initial={{ opacity: 0, x: isMd ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          onClick={() => setCerts("Certificate2")}
        >
          <MyExperienceCard {...MyExperienceCardDesc[1]} newStyle="-left-9" />
        </motion.div>
      </div>
    </div>
  );
}

export default Experience2;
