"use client"
import React, { createContext, useContext } from "react";
import { motion } from "framer-motion";

const FadeInStaggerContext = createContext(false);
const viewport = { once: true, margin: "0px 0px -200px" };

const FadeIn = (props: any) => {
  const isInStaggerGroup = useContext(FadeInStaggerContext);
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: "hidden",
            whileInView: "visible",
            viewport,
          })}
      {...props}
    ></motion.div>
  );
};

export default FadeIn;

export const FadeInStagger = ({ faster = false, ...props }) => {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        {...props}
      />
    </FadeInStaggerContext.Provider>
  );
};

export const FadeInFromLeft = ({ duration = 0.5, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration }}
      viewport={{ once: true }}
      {...props}
    />
  );
};

export const FadeInFromRight = ({ duration = 0.5, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration }}
      viewport={{ once: true }}
      {...props}
    />
  );
};

export const FadeInRepeat = ({ repeatType = "loop", duration = 1, ...props }) => {
  const repeat = repeatType === "loop" ? Infinity : repeatType === "mirror" ? Infinity : 0;
  const yoyo = repeatType === "mirror" ? true : false;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        repeat: repeat,
        duration: duration,
        repeatType: yoyo ? "reverse" : "loop"
      }}
      {...props}
    />
  );
};

