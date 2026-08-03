import React, { useCallback, useEffect, useState } from "react";

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.goToPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.goToNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canGoToPrev());
    setNextBtnDisabled(!emblaApi.canGoToNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);

    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const PrevButton = ({ disabled, ...props }) => (
  <button
    {...props}
    disabled={disabled}
    className="
      w-12 h-12
      rounded-full
      bg-cyan-500
      text-white
      flex items-center justify-center
      text-2xl
      cursor-pointer
    "
  >
    ←
  </button>
);

export const NextButton = ({ disabled, ...props }) => (
  <button
    {...props}
    disabled={disabled}
    className="
      w-12 h-12
      rounded-full
      bg-cyan-500
      text-white
      flex items-center justify-center
      text-2xl
      cursor-pointer
    "
  >
    →
  </button>
);
