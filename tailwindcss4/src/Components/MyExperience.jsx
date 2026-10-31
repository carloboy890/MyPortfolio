import React, { useState, useEffect } from "react";
import MyExperienceCard from "./MyExperienceCard";
import MyExperienceCardDesc from "./MyExperienceCardDesc";
import { motion } from "framer-motion";
import MERNStackCert from "../assets/MERNStackCert.jpg";
import UdemyCert1 from "../assets/UdemyCert1.jpg";

function MyExperience({ setCerts, certs }) {
  const [isMd, setIsMd] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMd(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const animate = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
  };

  return (
    <div
      className="relative h-full w-full flex justify-center flex-col items-center
      max-xl:pt-15 max-sm:space-y-8  max-xl:space-y-8"
    >
      {certs === null && (
        <>
          <div
            className="flex flex-col items-center justify-center h-[20%] space-y-10 w-full 
          max-sm:space-y-5"
          >
            <motion.div
              className="text-6xl font-Jost font-bold text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.7)] animate-pulse
        max-sm:text-4xl"
              variants={animate}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Experience
            </motion.div>
            <motion.div
              className="text-xl font-Jost 
              max-sm:text-[0.8rem]"
              variants={animate}
              initial="initial"
              whileInView="whileInView"
              transition={{ duration: 1 }}
            >
              Building real-world solutions and growing professionally
            </motion.div>
          </div>
          <div
            className="flex flex-col h-[80%] w-full 
          relative"
          >
            <div
              className="h-auto w-full flex justify-center 
         "
            >
              <motion.div
                className="mt-5 w-[clamp(340px,30vw,380px)] mr-110 z-1 rounded-3xl bg-[#090909] hover:bg-cyan-400/10 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] cursor-pointer 
            max-lg:mr-95 
            max-md:w-[60%] max-md:mr-0 max-md:bg-gray-900 
            max-sm:w-[80%] max-sm:ml-13"
                onClick={() => setCerts("Certificate1")}
                variants={animate}
                initial="initial"
                whileInView="whileInView"
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <MyExperienceCard {...MyExperienceCardDesc[0]} />
              </motion.div>
            </div>
            <div
              className="absolute w-full h-full flex flex-col justify-center items-center
        max-md:items-start max-md:left-10"
            >
              <motion.div
                className={`absolute top-60 h-5 w-5 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]
              max-md:-left-2 max-sm:top-0`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: false, amount: 0.5 }}
              ></motion.div>

              <div className="absolute h-full w-[3px]  bg-cyan-400 shadow-[0_0_15px_#22d3ee]"></div>
            </div>
          </div>
        </>
      )}
      {certs === "Certificate2" && (
        <div className="fixed inset-0 z-50 bg-black/80 flex justify-center items-center">
          <button
            className="absolute top-5 right-5 text-white text-4xl cursor-pointer"
            onClick={() => setCerts(null)}
          >
            ×
          </button>

          <img
            src={MERNStackCert}
            alt="MERN Stack Certificate"
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
      {certs === "Certificate1" && (
        <div className="fixed inset-0 z-50 bg-black/80 flex justify-center items-center">
          <button
            className="absolute top-5 right-5 text-white text-4xl cursor-pointer"
            onClick={() => setCerts(null)}
          >
            ×
          </button>

          <img
            src={UdemyCert1}
            alt="Complete FullStack Certificate"
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
      {/* <div className="h-20"></div> */}
    </div>
  );
}

export default MyExperience;
