import React, { useState, useEffect } from "react";
import EmblaCarousel from "./carouselMyService/EmblaCarousel";
import MyServiceBigContainer from "./MyServiceBigContainer";
import useEmblaCarousel from "embla-carousel-react";
import EmblaServiceDesc from "../Components/EmblaServiceDesc";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "../Components/carouselMyService/EmblaCarouselArrowButtons";
import { motion } from "framer-motion";

function MyServices() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const options = { loop: true };
  const [emblaApi, setEmblaApi] = useState(null);
  const [isMd, setIsMd] = useState(window.innerWidth < 768);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const handleNext = () => {
    setSelectedIndex((prev) =>
      prev === EmblaServiceDesc.length - 1 ? 0 : prev + 1,
    );
  };

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? EmblaServiceDesc.length - 1 : prev - 1,
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMd(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="relative w-full flex h-full 
    max-lg:flex-col max-lg:space-y-5 max-lg:justify-center"
    >
      {/* output */}
      <div
        className=" w-[60%] h-full flex justify-center items-center 
      max-lg:w-full max-lg:flex-col max-lg:space-y-2"
      >
        <MyServiceBigContainer
          slides={EmblaServiceDesc[selectedIndex]}
          isMd={isMd}
        />

        <div className="embla__controls hidden max-lg:block">
          <motion.div
            className="embla__buttons w-full flex space-x-3 justify-center"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <PrevButton
              onClick={() => {
                onPrevButtonClick();
                handlePrev();
              }}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={() => {
                onNextButtonClick();
                handleNext();
              }}
              disabled={nextBtnDisabled}
            />
          </motion.div>
        </div>
      </div>
      <div
        className="flex w-[40%] justify-center items-center h-full
      max-lg:hidden"
      >
        <div className="h-[40%] max-2xl:w-[clamp(200px,40vw,600px)] max-2xl:h-[clamp(100px,25vw,400px)] ">
          <EmblaCarousel
            slides={EmblaServiceDesc}
            setSelectedIndex={setSelectedIndex}
            onNext={handleNext}
            onPrev={handlePrev}
            options={{ loop: true }}
            setEmblaApi={setEmblaApi}
          />
        </div>
      </div>
    </div>
  );
}

export default MyServices;
