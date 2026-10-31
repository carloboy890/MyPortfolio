import React from "react";
import { easeInOut, motion } from "framer-motion";
import AiMessages from "./AiMessageDesc";

function AiMessageBubble({ resultMess }) {
  const sentence = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letter = {
    hidden: {
      y: 150,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      {resultMess && (
        <div className="chat chat-end absolute w-full">
          <div className="chat-bubble">
            <motion.div
              className="whitespace-normal"
              variants={sentence}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              {resultMess.split(" ").map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className="inline-block whitespace-nowrap"
                >
                  {word.split("").map((char, charIndex) => (
                    <motion.span
                      key={charIndex}
                      variants={letter}
                      className="inline-block text-cyan-400"
                    >
                      {char}
                    </motion.span>
                  ))}

                  {wordIndex < resultMess.split(" ").length - 1 && (
                    <span>&nbsp;</span>
                  )}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
}

export default AiMessageBubble;
