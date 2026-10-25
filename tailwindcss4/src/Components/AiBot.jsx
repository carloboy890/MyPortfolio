import React, { useRef, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion, MotionConfig } from "framer-motion";
import { page2Mess } from "./aiAssistant/aiUtils/aiPage2to6";

function AiBot({
  openAiBot,
  setOpenMess,
  activePage,
  setResultMess,
  setBotClickCount,
  aboutTimer,
}) {
  const isBotBusy = useRef(false);
  const botTimer = useRef(null);
  const unlockTimer = useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(botTimer.current);
      clearTimeout(unlockTimer.current);
    };
  }, []);

  function pagesAutoMess() {
    if (isBotBusy.current) return;

    isBotBusy.current = true;

    if (activePage === 1) {
      setOpenMess("instruction");

      unlockTimer.current = setTimeout(() => {
        isBotBusy.current = false;
      }, 20000);
    }
    if (activePage === 2) {
      // clearTimeout(aboutTimer.current);
      setOpenMess("about-intro");

      botTimer.current = setTimeout(() => {
        setBotClickCount((prev) => prev + 1);

        unlockTimer.current = setTimeout(() => {
          isBotBusy.current = false;
        }, 6000);
      }, 100);
    }
  }

  return (
    <motion.div
      onClick={pagesAutoMess}
      className="h-32 w-32 cursor-pointer "
      animate={{ scale: openAiBot ? 1 : 0 }}
      transition={{ delay: 1.5, duration: 1 }}
    >
      <DotLottieReact
        className=""
        src="https://lottie.host/7366a3f1-4378-494b-831f-5bb9fde15905/034fY98mKR.lottie"
        loop
        autoplay
      />
    </motion.div>
  );
}

export default AiBot;
