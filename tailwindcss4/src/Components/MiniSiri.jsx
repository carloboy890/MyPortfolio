import React, { useState, useEffect } from "react";
import styles from "./MiniSiri.module.css";
import { motion, MotionConfig } from "framer-motion";
import AiBot from "./AiBot";

function MiniSiri({ isMd }) {
  const [close, setClose] = useState(true);
  const [openAiBot, setOpenAiBot] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const text = "Hello";

  function openBot() {
    setTimeout(() => {
      setOpenAiBot(true);
    }, 2000);
  }

  return (
    <div className="absolute h-full w-1/2 flex justify-center items-center">
      <div className=" w-1/2 absolute">
        <motion.div
          className={`rounded-4xl w-10 p-2 absolute flex justify-center items-center bg-amber-50 cursor-pointer ${
            close ? "pointer-events-auto cursor-pointer" : "pointer-events-none"
          }`}
          onClick={() => setClose(false)}
          initial={{ opacity: 0 }}
          whileInView={{}}
          onViewportEnter={() => setHasEntered(true)}
          viewport={{ once: true }}
          animate={
            hasEntered
              ? {
                  y: close ? -110 : 0,
                  x: close ? 15 : 10,
                  opacity: close ? 1 : 0,
                }
              : undefined
          }
          transition={{
            y: {
              duration: close ? 1 : 0.8,
              ease: "easeInOut",
            },

            x: {
              duration: close ? 1 : 0.8,
              ease: "easeInOut",
            },

            opacity: {
              delay: close ? 0.5 : 0.3,
              duration: close ? 0.8 : 0.1,
            },
          }}
        >
          <button className="text-cyan-400 cursor-pointer">X</button>
        </motion.div>
        <motion.div
          className={`rounded-4xl w-20 p-2 absolute flex justify-center items-center cursor-pointer bg-amber-50 ${
            close ? "pointer-events-auto cursor-pointer" : "pointer-events-none"
          }`}
          onClick={() => {
            setClose(false);
            openBot();
          }}
          initial={{ opacity: 0, y: 0, x: 10 }}
          whileInView={{}}
          onViewportEnter={() => setHasEntered(true)}
          viewport={{ once: true }}
          animate={
            hasEntered
              ? {
                  opacity: close ? 1 : 0,
                  y: close ? -60 : 0,
                  x: close ? -100 : 10,
                }
              : undefined
          }
          transition={{
            y: {
              duration: close ? 1 : 1.3,
              ease: "easeInOut",
            },

            x: {
              duration: close ? 1 : 1.3,
              ease: "easeInOut",
            },

            opacity: {
              delay: close ? 0.8 : 0.5,
              duration: close ? 1.1 : 0.1,
            },
          }}
        >
          <div className="text-cyan-400">AI Bot</div>
        </motion.div>
        <motion.div
          className={`rounded-4xl w-20 p-2 absolute flex justify-center items-center cursor-pointer bg-amber-50 ${
            close ? "pointer-events-auto cursor-pointer" : "pointer-events-none"
          }`}
          initial={{ opacity: 0, y: 0, x: 10 }}
          whileInView={{}}
          onViewportEnter={() => setHasEntered(true)}
          viewport={{ once: true }}
          animate={
            hasEntered
              ? {
                  opacity: close ? 1 : 0,
                  y: close ? 10 : 0,
                  x: close ? -100 : -30,
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
              delay: close ? 1 : 0.7,
              duration: close ? 1.4 : 0.1,
            },
          }}
        >
          <div className="text-cyan-400">Chat</div>
        </motion.div>
      </div>
      <motion.div
        className={`${styles.loaderWrapper} ${
          close ? "pointer-events-auto cursor-pointer" : "pointer-events-none"
        }`}
        onClick={() => setClose(true)}
        initial={false}
        animate={{ scale: close ? 1 : 0 }}
        transition={{ duration: 1, delay: 1 }}
        aria-label="Hello"
      >
        <div className={styles.loaderText}>
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
        <div className="absolute">
          <AiBot openAiBot={openAiBot} />
        </div>
      )}
    </div>
  );
}

export default MiniSiri;
