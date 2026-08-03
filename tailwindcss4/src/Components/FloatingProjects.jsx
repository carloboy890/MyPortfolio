import React from "react";
import { motion } from "framer-motion";

function FloatingProjects({ showProjs, isMd }) {
  return (
    <div className="h-full w-full flex justify-center items-center flex-col max-sm:hidden">
      {showProjs === "none" && (
        <>
          <motion.div
            className="relative bottom-30 right-80 bg-[#f0efef] p-2 rounded-xl
            max-xl:text-[0.9rem]
            max-lg:text-[0.6rem] max-lg:right-55
            max-md:text-[0.45rem] max-md:bottom-20 max-md:right-42"
            {...(!isMd && {
              initial: { opacity: 0, x: 200 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 1, delay: 0.5 },
              viewport: { once: false, amount: 0 },
            })}
          >
            🛒 Modern E-Commerce Store
          </motion.div>
          <motion.div
            className="relative bottom-5 right-110 bg-[#f0efef] p-2 rounded-xl
            max-xl:text-[0.9rem] max-xl:right-100
            max-lg:text-[0.6rem] max-lg:right-70
            max-md:text-[0.45rem] max-md:right-50"
            {...(!isMd && {
              initial: { opacity: 0, x: 200 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 1, delay: 1 },
              viewport: { once: false, amount: 0 },
            })}
          >
            🎮 Game Discovery Platform
          </motion.div>
          <motion.div
            className="relative top-25 right-80 bg-[#f0efef] p-2 rounded-xl
            max-xl:text-[0.9rem] max-xl:right-75
            max-lg:text-[0.6rem] max-lg:right-55
            max-md:text-[0.45rem] max-md:right-42"
            {...(!isMd && {
              initial: { opacity: 0, x: 200 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 1, delay: 1.3 },
              viewport: { once: false, amount: 0 },
            })}
          >
            💼 Freelance Marketplace
          </motion.div>
          <motion.div
            className="relative bottom-45 left-85 bg-[#f0efef] p-2 rounded-xl
            max-xl:text-[0.9rem] max-xl:left-80
            max-lg:text-[0.6rem] max-lg:left-55
            max-md:text-[0.45rem] max-md:left-42 max-md:bottom-33"
            {...(!isMd && {
              initial: { opacity: 0, x: -200 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 1, delay: 0.5 },
              viewport: { once: false, amount: 0 },
            })}
          >
            📊 Personal Finance Dashboard
          </motion.div>
          <motion.div
            className="relative bottom-20 left-110 bg-[#f0efef] p-2 rounded-xl
            max-xl:text-[0.9rem] max-xl:left-100
            max-lg:text-[0.6rem] max-lg:left-70
            max-md:text-[0.45rem] max-md:left-50 max-md:bottom-10"
            {...(!isMd && {
              initial: { opacity: 0, x: -200 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 1, delay: 1 },
              viewport: { once: false, amount: 0 },
            })}
          >
            🧠 AI Productivity Workspace
          </motion.div>
          <motion.div
            className="relative top-10 left-80 bg-[#f0efef] p-2 rounded-xl
            max-xl:text-[0.9rem] max-xl:left-75
            max-lg:text-[0.6rem] max-lg:left-55
            max-md:text-[0.45rem] max-md:left-42"
            {...(!isMd && {
              initial: { opacity: 0, x: -200 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 1, delay: 1.3 },
              viewport: { once: false, amount: 0 },
            })}
          >
            🌐 Developer Portfolio CM
          </motion.div>
        </>
      )}
    </div>
  );
}

export default FloatingProjects;
