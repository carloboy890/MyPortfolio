import React, { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import EmblaServiceDesc from "../EmblaServiceDesc";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import { motion } from "framer-motion";

const TWEEN_FACTOR_BASE = 0.52;

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

const EmblaCarousel = ({ slides, options, onNext, onPrev, setEmblaApi }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef([]);

  useEffect(() => {
    if (emblaApi) {
      setEmblaApi(emblaApi);
    }
  }, [emblaApi]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback((emblaApi) => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__slide__number");
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.snapList().length;
  }, []);

  const tweenScale = useCallback((emblaApi, event) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = event?.type === "scroll";

    emblaApi.snapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.scrollSnapList.slidesBySnap[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
        const scale = numberWithinRange(tweenValue, 0, 1).toString();
        const tweenNode = tweenNodes.current[slideIndex];
        tweenNode.style.transform = `scale(${scale})`;
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    // THIS PART

    emblaApi
      .on("reinit", setTweenNodes)
      .on("reinit", setTweenFactor)
      .on("reinit", tweenScale)
      .on("scroll", tweenScale)
      .on("slidefocus", tweenScale);
  }, [emblaApi, tweenScale]);

  return (
    <motion.div
      className="embla h-full space-y-3"
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <div className="embla h-full border-blue-400 w-full max-w-xl">
        <div
          className="embla__viewport overflow-x-hidden overflow-y-visible h-full"
          ref={emblaRef}
        >
          <div className="embla__container flex h-full">
            {slides.map((service) => (
              <div
                className="embla__slide flex-[0_0_100%] flex overflow-visible items-end w-full h-full relative pl-4 pr-4"
                key={service.id}
              >
                <div
                  className="relative 
              embla__slide__number
              h-[85%] w-full rounded-4xl
              bg-white/10 backdrop-blur-lg
              border-4 border-cyan-400/20
              shadow-[0_0_25px_rgba(34,211,238,0.25)]
              flex items-center justify-center
              text-4xl font-bold text-white
              transition-all duration-100
            "
                >
                  <div className="absolute justify-center w-full z-2 h-full">
                    <div className="absolute h-[30%] -translate-y-1/2 w-full">
                      <img
                        src={service.logo}
                        alt={service.title}
                        className="w-[100%] h-[100%]"
                      />
                    </div>
                  </div>
                  <div
                    className="space-y-10 text-center p-4
                    max-2xl:space-y-7
                  max-xl:space-y-5"
                  >
                    <div
                      className="text-[2.5rem] max-2xl:text-[clamp(1rem,2.5vw,2.5rem)] 
                    max-xl:text-[1.3rem]"
                    >
                      {service.title}
                    </div>
                    <div
                      className="text-lg max-2xl:text-[clamp(.7rem,0.9rem,1.15rem)]
                     max-xl:text-[0.8rem] max-xl:leading-6
                     "
                    >
                      {service.meaning}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="embla__controls flex max-lg:border-1">
        <div className="embla__buttons w-full flex space-x-3 justify-center">
          <PrevButton
            onClick={() => {
              onPrevButtonClick();
              onPrev();
            }}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => {
              onNextButtonClick();
              onNext();
            }}
            disabled={nextBtnDisabled}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default EmblaCarousel;
