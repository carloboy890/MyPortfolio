import React from "react";
import { motion } from "framer-motion";

function MyServiceBigContainer({ slides }) {
  if (!slides) return null;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        className="rounded-4xl mt-5
              bg-white/10 backdrop-blur-lg
              border-3 border-cyan-400/20
              shadow-[0_0_25px_rgba(34,211,238,0.25)]
              flex flex-col items-center
              text-4xl font-bold text-white
              transition-all duration-100 h-[90%] w-[90%]
              max-lg:w-full max-sm:justify-center"
        key={slides.id}
      >
        <div
          className="relative flex justify-center items-center w-full h-[40%]
        max-xl:h-[30%] max-sm:h-[20%]"
        >
          <img
            src={slides.logo}
            alt={slides.title}
            className=" h-[70%] w-[70%] max-sm:h-20 max-sm:w-20"
          />
        </div>
        <div
          className="flex flex-col justify-center items-center p-5 space-y-10
        max-sm:space-y-4"
        >
          <div
            className="text-[2.2rem] max-xl:text-[1.8rem]
          max-sm:text-[1.1rem]"
          >
            {slides.title}
          </div>
          <div
            className="text-[1.1rem] max-2xl:text-[clamp(.9rem,1vw+.5rem,1rem)]
    leading-10 text-xl max-2xl:leading-10 text-center
    max-xl:text-[0.9rem]
    max-lg:h-80
    max-md:text-[0.rem] max-sm:leading-8 max-sm:h-auto max-sm:text-[0.7rem]"
          >
            {slides.FullMeaning}
          </div>

          {/* <div className="w-full flex justify-center">Logo</div> */}
        </div>
      </motion.div>
    </>
  );
}

export default MyServiceBigContainer;
