import React, { useEffect, useState } from "react";
import "./AboutContainer.css";
import pic3 from "../assets/pic3.jpg";
import LineStyle from "./LineStyle";
import AboutContainerCardDesc from "./AboutContainerCardDesc";
import AboutContainerDesc from "./AboutContainerDesc";
import { motion } from "framer-motion";

const AboutContainer = () => {
  const [isMd, setIsMd] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMd(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {/* main container */}
      <motion.div
        className="relative w-full bg-transparent flex flex-row justify-center items-center
        max-w-screen-2xl h-[90vh]
        max-2xl:max-w-screen-xl max-2xl:h-[80vh]
        max-lg:w-full max-lg:flex-col 
        max-md:px-6 max-md:max-w-screen-sm
        max-sm:max-w-full max-sm:h-full max-sm:p-5"
      >
        {/* line container */}
        <LineStyle />
        {/* Left Container Pic */}

        <motion.div
          className="w-[30%] b flex justify-center items-center
          max-xl:w-[40%]
          max-lg:hidden"
          initial={{ opacity: 0, scale: 0, x: 300 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{
            delay: 1,
            duration: 1,
          }}
        >
          <img src={pic3} alt="About" className="w-[75%] rounded-full" />
        </motion.div>
        {/* Content container */}
        <motion.div
          className="w-[60%] justify-center flex items-center
          max-xl:w-[70%] max-lg:w-[90%] 
          max-sm:w-full"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{
            delay: 1,
            duration: 1,
          }}
        >
          {AboutContainerDesc.map((value) => (
            <AboutContainerCardDesc
              key={value.id}
              title={value.title}
              age={value.age}
              employmentType1={value.employmentType1}
              employmentType2={value.employmentType2}
              description={value.description}
              service={value.service}
              service1={value.service1}
              service1Desc={value.service1Desc}
              service2={value.service2}
              service2Desc={value.service2Desc}
            />
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default AboutContainer;
