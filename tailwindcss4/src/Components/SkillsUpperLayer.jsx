import React from "react";
import facingComp from "../assets/facingComp.png";
import arrowDown from "../assets/arrowDown.png";
import { motion } from "framer-motion";

function SkillsUpperLayer(props) {
  const animate = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
  };
  return (
    <>
      <div className="w-full p-4">
        <motion.div
          className="font-bold text-center text-[5rem] mb-2 text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.7)]
                max-2xl:text-[3.5rem]
                max-xl:text-[3rem]
                max-sm:text-[2rem] max-sm:mt-10"
          variants={animate}
          initial="initial"
          whileInView="whileInView"
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          My Skills
        </motion.div>
      </div>

      <div className="flex w-full">
        <div className="max-md:hidden w-[30%] flex justify-center items-center">
          <motion.img
            src={facingComp}
            alt="facingComp"
            className="h-[430px] w-[430px] ml-10 rounded-4xl
                    max-2xl:h-[300px]
                    max-lg:h-[200]"
            variants={animate}
            initial="initial"
            whileInView="whileInView"
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.5 }}
          />
        </div>

        <div
          className="space-y-10 p-15 w-[70%] animate-pic-slide2 
                max-sm:w-full max-sm:p-5 max-md:w-full"
        >
          <motion.div
            className="text-[1.1rem] text-justify leading-8
                  max-2xl:text-[1.2rem]
                  max-xl:text-[1rem]
                  max-lg:text-[0.9rem]
                  max-md:text-[0.9rem]
                  max-md:text-center max-sm:text-xs/8"
            variants={animate}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Skilled in designing, developing, and maintaining full-stack web
            applications by combining responsive frontend interfaces with
            scalable backend systems. Experienced in building dynamic,
            user-focused applications using modern development practices,
            including RESTful API integration, database management, user
            authentication, and CRUD operations. Capable of creating responsive
            and accessible user interfaces, implementing secure server-side
            logic, and optimizing application performance for a seamless user
            experience. Proficient in debugging, testing, and maintaining clean,
            reusable, and scalable code while following industry best practices.
            Comfortable working throughout the entire software development
            lifecycle, from planning and development to deployment and ongoing
            maintenance, with a strong commitment to delivering reliable
            solutions that meet client and business requirements.
          </motion.div>

          {props.showDownArrow && (
            <div
              className="min-h-[100px] mt-8 flex justify-center
                    max-2xl:mt-15 max-md:mt-0 max-md:items-center"
            >
              <img
                src={arrowDown}
                alt="arrowDown"
                className="animate-bounce h-[100px] w-[100px] mr-100 mt-10
                        max-2xl:h-[80px] max-2xl:w-[80px]
                        max-lg:h-[60px] max-lg:ml-20 max-md:mr-0 max-md:mt-0 max-md:ml-0"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SkillsUpperLayer;
