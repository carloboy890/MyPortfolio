import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion, MotionConfig } from "framer-motion";

function AiBot({ openAiBot }) {
  return (
    <motion.div
      className="h-32 w-32"
      animate={{ scale: openAiBot ? 1 : 0 }}
      transition={{ delay: 2, duration: 1 }}
    >
      <DotLottieReact
        src="https://lottie.host/7366a3f1-4378-494b-831f-5bb9fde15905/034fY98mKR.lottie"
        loop
        autoplay
      />
    </motion.div>
  );
}

export default AiBot;
