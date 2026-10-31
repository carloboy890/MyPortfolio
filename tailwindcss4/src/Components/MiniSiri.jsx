import React, { useState, useRef, useEffect } from "react";
import styles from "./MiniSiri.module.css";
import { motion, MotionConfig } from "framer-motion";
import AiBot from "./AiBot";
import AiMessageBubble from "./AiMessageBubble";
import { messageAutomation } from "./aiAssistant/aiUtils/messageAutomationFunc";
import {
  scheduleTimer,
  cancelTimer,
  clearAllTimers,
} from "./aiAssistant/aiUtils/clearTimers";

function MiniSiri({
  homeRef,
  activePage,
  setToClick,
  openAiBot,
  setOpenAiBot,
  setShowArrow,
  showArrow,
  resultMess,
  setResultMess,
  introTimer,
  exploreTimer,
  aboutTimer,
}) {
  const [close, setClose] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const [openAiBubble, setOpenAiBubble] = useState(false);
  const [openMess, setOpenMess] = useState("");
  const [automationEnabled, setAutomationEnabled] = useState(false);
  const [botClickCount, setBotClickCount] = useState(0);
  const showArrowRef = useRef(showArrow);
  const timersRef = useRef(new Set());

  // console.log({
  //   close,
  //   hasEntered,
  //   openAiBubble,
  //   openMess,
  //   automationEnabled,
  //   botClickCount,
  //   activePage,
  // });

  console.log(openAiBot);

  const text = "Hello";

  function openBot() {
    setOpenMess("");
    console.count("openBot called");

    setTimeout(() => {
      setOpenAiBot(true);
      setAutomationEnabled(true);
    }, 2000);
    setTimeout(() => {
      setOpenAiBubble(true);
    }, 3000);
  }

  useEffect(() => {
    showArrowRef.current = showArrow;
  }, [showArrow]);

  function closeBot() {
    setShowArrow("close");
    setTimeout(() => {
      setOpenAiBot(false);
      setToClick(false);
      setClose(false);

      setResultMess("");
    }, 500);

    setTimeout(() => {
      setOpenAiBubble(false);
    }, 500);
  }

  function schedule(callback, delay) {
    return scheduleTimer({ callback, delay, timersRef });
  }

  function cancel(timerId) {
    cancelTimer({ timerId, timersRef });
  }

  // useEffect(() => {
  //   clearAllTimers(timersRef);
  //   setResultMess(null);

  //   return () => {
  //     clearAllTimers(timersRef);
  //   };
  // }, [activePage]);

  useEffect(() => {
    clearAllTimers(timersRef);

    if (resultMess !== "") {
      setResultMess("");
    }

    return () => {
      clearAllTimers(timersRef);
    };
  }, [activePage]);

  useEffect(() => {
    console.log("Automation effect ran:", {
      activePage,
      openMess,
      automationEnabled,
      botClickCount,
    });
    if (!automationEnabled) return;
    messageAutomation({
      activePage,
      setResultMess,
      openMess,
      setOpenMess,
      setToClick,
      setShowArrow,
      introTimer,
      exploreTimer,
      showArrow,
      aboutTimer,
      showArrowRef,
      scheduleTimer: schedule,
      cancelTimer: cancel,
    });
  }, [activePage, openMess, automationEnabled, botClickCount]);

  return (
    <div className="relative h-full w-full flex right-2">
      {openAiBubble && (
        <div className="absolute w-3/4 h-full top-3">
          <AiMessageBubble resultMess={resultMess} />
        </div>
      )}
      <div className="absolute right-0 h-full w-2/5 flex justify-end items-end ">
        <div className="w-full absolute h-full">
          <motion.div
            className={`rounded-4xl w-10 p-2 absolute flex justify-center items-center bg-amber-50 cursor-pointer ${
              close
                ? "pointer-events-none"
                : "pointer-events-auto cursor-pointer"
            }`}
            onClick={() => setClose(true)}
            initial={{ opacity: 0, x: 127, y: 60 }}
            whileInView={{}}
            onViewportEnter={() => setHasEntered(true)}
            viewport={{ once: true }}
            animate={
              hasEntered
                ? {
                    y: close ? 80 : 35,
                    x: close ? 125 : 125,
                    opacity: close ? 0 : 1,
                  }
                : undefined
            }
            transition={{
              y: {
                duration: close ? 1 : 1,
                ease: "easeInOut",
              },

              x: {
                duration: close ? 0.3 : 1,
                ease: "easeInOut",
              },

              opacity: {
                delay: close ? 0.1 : 0.5,
                duration: close ? 0.4 : 0.5,
              },
            }}
          >
            <button className="text-cyan-400 cursor-pointer">X</button>
          </motion.div>
          <motion.div
            className={`rounded-4xl w-20 p-2 absolute flex justify-center items-center cursor-pointer bg-amber-50 ${
              close
                ? "pointer-events-none"
                : "pointer-events-auto cursor-pointer"
            }`}
            onClick={() => {
              setClose(true);
              openBot();
            }}
            initial={{ opacity: 0, y: 100, x: 100 }}
            whileInView={{}}
            onViewportEnter={() => setHasEntered(true)}
            viewport={{ once: true }}
            animate={
              hasEntered
                ? {
                    opacity: close ? 0 : 1,
                    y: close ? 100 : 70,
                    x: close ? 80 : 0,
                  }
                : undefined
            }
            transition={{
              y: {
                duration: close ? 1.3 : 1,
                ease: "easeInOut",
              },

              x: {
                duration: close ? 1.3 : 1,
                ease: "easeInOut",
              },

              opacity: {
                delay: close ? 0.5 : 0.8,
                duration: close ? 0.1 : 1.1,
              },
            }}
          >
            <button className="text-cyan-400 cursor-pointer">AI Bot</button>
          </motion.div>
          <motion.div
            className={`rounded-4xl w-20 p-2 absolute flex justify-center items-center border-1 cursor-pointer bg-amber-50 ${
              close
                ? "pointer-events-auto cursor-pointer"
                : "pointer-events-none"
            }`}
            initial={{ opacity: 0, y: 0, x: 100 }}
            whileInView={{}}
            onViewportEnter={() => setHasEntered(true)}
            viewport={{ once: true }}
            animate={
              hasEntered
                ? {
                    opacity: close ? 0 : 1,
                    y: close ? 140 : 130,
                    x: close ? 40 : 0,
                  }
                : undefined
            }
            transition={{
              y: {
                duration: 1,
                ease: "easeInOut",
              },

              x: {
                duration: 1,
                ease: "easeInOut",
              },

              opacity: {
                delay: close ? 0.7 : 1,
                duration: close ? 0.1 : 1.4,
              },
            }}
          >
            <div className="text-cyan-400">Chat</div>
          </motion.div>
        </div>
        <motion.div
          className={`${styles.loaderWrapper} !right-2 !bottom-2 ${
            close ? "pointer-events-auto cursor-pointer" : "pointer-events-none"
          }`}
          onClick={() => setClose(false)}
          initial={false}
          animate={{ scale: close ? 0 : 1 }}
          transition={{ duration: 1, delay: 1 }}
          aria-label="Hello"
        >
          <div
            className={`styles.loaderText text-2xl font-bold ${activePage === 7 ? "text-black" : "text-white"}`}
          >
            {text.split("").map((letter, index) => (
              <span
                key={`${letter}-${index}`}
                className={styles.loaderLetter}
                style={{ "--i": index }}
              >
                {letter}
              </span>
            ))}
          </div>

          <div className={styles.loader} />
        </motion.div>
        {openAiBot && (
          <div className="absolute left-18 h-full flex items-end">
            <motion.div
              className={`rounded-4xl w-6 z-10 absolute flex justify-center items-center bg-amber-50 cursor-pointer${
                close
                  ? "pointer-events-auto cursor-pointer"
                  : "pointer-events-none"
              }`}
              onClick={closeBot}
              initial={{ opacity: 0, x: 70, y: -100 }}
              viewport={{ once: true }}
              animate={{
                y: -140,
                x: 90,
                opacity: 1,
              }}
              transition={{
                opacity: {
                  delay: 0.5,
                  duration: 1.5,
                },
              }}
            >
              <button className="text-cyan-400 cursor-pointer">x</button>
            </motion.div>
            <AiBot
              setOpenMess={setOpenMess}
              openAiBot={openAiBot}
              activePage={activePage}
              openMess={openMess}
              setResultMess={setResultMess}
              setBotClickCount={setBotClickCount}
              aboutTimer={aboutTimer}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default MiniSiri;
