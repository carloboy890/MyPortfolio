import React from "react";
import { easeInOut, motion } from "framer-motion";

function Hire() {
  const sentence = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const card1 = {
    initial: {
      opacity: 0,
      x: -100,
    },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: easeInOut,
      },
    },
    whileHover: {
      scale: 1.03,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };
  const card2 = {
    initial: {
      opacity: 0,
      x: 100,
    },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: easeInOut,
      },
    },
    whileHover: {
      scale: 1.03,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      className="relative h-full flex flex-col w-[60%]
    max-lg:w-[90%] max-sm:space-y-10"
    >
      <div className="w-full min-h-[20%] flex flex-col justify-center items-center">
        <motion.div
          className="text-[3.4rem]"
          variants={sentence}
          initial="hidden"
          whileInView="visible"
        >
          <motion.div
            className="text-[3.4rem]
            max-md:text-[2.8rem]
            max-sm:text-[1.6rem]"
            variants={sentence}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <span>Why </span>

            {"Work With Me".split("").map((char, i) => (
              <motion.span
                key={i}
                variants={letter}
                className="font-Jost text-cyan-400"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
        <div
          className="space-x-2 
        max-md:text-[0.8rem]
        max-sm:text-[0.5rem]"
        >
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, scale: 6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.5,
            }}
          >
            Passion,{" "}
          </motion.span>
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, scale: 6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 1.5,
              duration: 1,
            }}
          >
            adaptability,{" "}
          </motion.span>
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, scale: 6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 2,
              duration: 1.5,
            }}
          >
            and quality to every projects,
          </motion.span>
        </div>
      </div>
      <motion.div
        className="grid grid-cols-2 grid-rows-3 gap-5 h-[75vh]
        max-md:text-center
      max-sm:gap-3 max-sm:h-auto"
      >
        <motion.div
          variants={card1}
          initial="initial"
          whileInView="whileInView"
          whileHover="whileHover"
          className="bg-gray-900 p-5 flex justify-center flex-col space-y-5 cursor-pointer opacity-90 rounded-4xl shadow-lg hover:bg-cyan-400/30 hover:shadow-cyan-500/50 h-full w-full
          max-sm:space-y-5 max-sm:p-3"
        >
          <div className="text-2xl">🚀</div>
          <div
            className="text-xl font-bold
          max-lg:text-lg 
          max-md:text-[0.9rem] 
          max-sm:text-[0.75rem]"
          >
            Passionate About Building Quality
          </div>
          <div
            className="text-sm 
          max-md:text-[0.7rem]
          max-sm:text-[0.7rem]"
          >
            I enjoy turning ideas into responsive, user-friendly applications
            with clean code and attention to detail.
          </div>
        </motion.div>
        <motion.div
          variants={card2}
          initial="initial"
          whileInView="whileInView"
          whileHover="whileHover"
          className="bg-gray-900 p-5 flex justify-center flex-col space-y-5 cursor-pointer opacity-90 rounded-4xl shadow-lg hover:bg-cyan-400/30 hover:shadow-cyan-500/50 h-full w-full
          max-sm:space-y-5 max-sm:p-3"
        >
          <div className="text-2xl">💡</div>
          <div
            className="text-xl font-bold
          max-lg:text-lg 
          max-md:text-[0.9rem] 
          max-sm:text-[0.75rem]"
          >
            Fast Learner
          </div>
          <div
            className="text-sm 
          max-md:text-[0.7rem]
          max-sm:text-[0.7rem]"
          >
            I continuously learn new technologies and quickly adapt to modern
            tools, frameworks, and development practices.
          </div>
        </motion.div>
        <motion.div
          variants={card1}
          initial="initial"
          whileInView="whileInView"
          whileHover="whileHover"
          className="bg-gray-900 p-5 flex justify-center flex-col space-y-5 cursor-pointer opacity-90 rounded-4xl shadow-lg hover:bg-cyan-400/30 hover:shadow-cyan-500/50 h-full w-full
          max-sm:space-y-5 max-sm:p-3"
        >
          <div className="text-2xl">🤝</div>
          <div
            className="text-xl font-bold
          max-lg:text-lg 
          max-md:text-[0.9rem] 
          max-sm:text-[0.75rem]"
          >
            Strong Team Player
          </div>
          <div
            className="text-sm 
          max-md:text-[0.7rem]
          max-sm:text-[0.7rem]"
          >
            I communicate effectively, collaborate well with others, and value
            constructive feedback to achieve the best results.
          </div>
        </motion.div>
        <motion.div
          variants={card2}
          initial="initial"
          whileInView="whileInView"
          whileHover="whileHover"
          className="bg-gray-900 p-5 flex justify-center flex-col space-y-5 cursor-pointer opacity-90 rounded-4xl shadow-lg hover:bg-cyan-400/30 hover:shadow-cyan-500/50 h-full w-full
          max-sm:space-y-5 max-sm:p-3"
        >
          <div className="text-2xl">🎯</div>
          <div
            className="text-xl font-bold
          max-lg:text-lg 
          max-md:text-[0.9rem] 
          max-sm:text-[0.75rem]"
          >
            Problem Solver
          </div>
          <div
            className="text-sm 
          max-md:text-[0.7rem]
          max-sm:text-[0.7rem]"
          >
            I approach challenges with curiosity and persistence, finding
            practical solutions while maintaining code quality and performance.
          </div>
        </motion.div>
        <motion.div
          variants={card1}
          initial="initial"
          whileInView="whileInView"
          whileHover="whileHover"
          className="bg-gray-900 p-5 flex justify-center flex-col space-y-5 cursor-pointer opacity-90 rounded-4xl shadow-lg hover:bg-cyan-400/30 hover:shadow-cyan-500/50 h-full w-full
          max-sm:space-y-5 max-sm:p-3"
        >
          <div className="text-2xl">📱</div>
          <div
            className="text-xl font-bold
          max-lg:text-lg 
          max-md:text-[0.9rem] 
          max-sm:text-[0.75rem]"
          >
            User-Focused Development
          </div>
          <div
            className="text-sm 
          max-md:text-[0.7rem]
          max-sm:text-[0.7rem]"
          >
            I prioritize creating intuitive, responsive, and visually appealing
            interfaces that provide a great user experience across devices.
          </div>
        </motion.div>
        <motion.div
          variants={card2}
          initial="initial"
          whileInView="whileInView"
          whileHover="whileHover"
          className="bg-gray-900 p-5 flex justify-center flex-col space-y-5 cursor-pointer opacity-90 rounded-4xl shadow-lg hover:bg-cyan-400/30 hover:shadow-cyan-500/50 h-full w-full
          max-sm:space-y-5 max-sm:p-3"
        >
          <div className="text-2xl">📈</div>
          <div
            className="text-xl font-bold
          max-lg:text-lg 
          max-md:text-[0.9rem] 
          max-sm:text-[0.75rem]"
          >
            Committed to Growth
          </div>
          <div
            className="text-sm 
          max-md:text-[0.7rem]
          max-sm:text-[0.7rem]"
          >
            I believe every project is an opportunity to improve my skills,
            expand my knowledge, and deliver better results than before.
          </div>
        </motion.div>
      </motion.div>
      <div className="h-20"></div>
    </div>
  );
}

export default Hire;

// <motion.div
//   variants={card1}
//   className="bg-gray-900 cursor-pointer opacity-90 rounded-4xl shadow-lg transition-all duration-300 ease-in-out hover:bg-cyan-400/30 hover:shadow-cyan-500/50 h-full w-full"
// ></motion.div>
