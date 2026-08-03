import React from "react";
import { motion } from "framer-motion";

function LineStyle(props) {
  return (
    <>
      <motion.div
        className="hidden 2xl:block absolute top-0 left-0"
        initial={{ opacity: 0, x: 630, y: 400 }}
        whileInView={{ opacity: 1, x: [630, 630, 0], y: [300, 0, 0] }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="h-3 w-32 bg-cyan-400">{props.upperL}</div>
        <div className="h-32 w-3 bg-cyan-400">{props.lowerL}</div>
      </motion.div>
      <motion.div
        className="hidden 2xl:block absolute bottom-0 left-0"
        initial={{ opacity: 0, x: 630, y: 0 }}
        whileInView={{ opacity: 1, x: [630, 630, 0], y: [-200, 0, 0] }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="h-3 w-32 bg-cyan-400">{props.baseL}</div>
        <div className="h-32 w-3 bg-cyan-400 absolute bottom-0">
          {props.leftL}
        </div>
      </motion.div>
      <motion.div
        className="hidden 2xl:block absolute top-0 right-0"
        initial={{ opacity: 0, x: -630, y: 400 }}
        whileInView={{ opacity: 1, x: [-630, -630, 0], y: [300, 0, 0] }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="h-3 w-32 bg-cyan-400">{props.upperR}</div>
        <div className="h-32 w-3 bg-cyan-400 absolute right-0">
          {props.lowerR}
        </div>
      </motion.div>
      <motion.div
        className="hidden 2xl:block absolute bottom-0 right-0 rotate-180"
        initial={{ opacity: 0, x: 630, y: 0 }}
        whileInView={{ opacity: 1, x: [630, 630, 0], y: [200, 0, 0] }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="h-3 w-32 bg-cyan-400">{props.baseR}</div>
        <div className="h-32 w-3 bg-cyan-400">{props.rightR}</div>
      </motion.div>
    </>
  );
}

export default LineStyle;

//  whileInView={{ opacity: 1, x: [600, 600, 0], y: [300, 0, 0] }}
