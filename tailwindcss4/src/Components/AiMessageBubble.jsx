import React from "react";
import { easeInOut, motion } from "framer-motion";
import AiMessages from "./AiMessageDesc";

function AiMessageBubble({ homeRef, activePage, resultMess }) {
  const sentence = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
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

  // function introMessage(item) {
  //   return item;
  // }
  // function messageAutomation() {
  //   let result = ""

  //   if(homeRef) {
  //   AiMessages.find(item => item.id === "home-intro") {
  //     result = item.message
  //   }}
  // }

  // function messageAutomation() {
  //   if (activePage === 1) {
  //     const item = AiMessages.find((item) => item.page === activePage);
  //     if (item) {
  //       const timer = setTimeout(() => {
  //         setResultMess(item.message);
  //       }, 3000);
  //     }
  //   }

  //   if (activePage === 2) {
  //     const item = AiMessages.find((item) => item.page === activePage);
  //     if (item) {
  //       const aboutIntro = item.message;
  //       setResultMess(aboutIntro);
  //     }
  //   }
  // }
  console.log(resultMess);

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
