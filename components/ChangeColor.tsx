"use client"

import { motion } from "framer-motion";
import { useEffect, useState, CSSProperties } from "react";

const colors: string[] = ["green", "red", "orange", "yellow", "blue"];
const delay: number = 5000; // Change color every 5 seconds for a slower transition

interface ChangeColorProps {
  text: string;
  textStyle?: CSSProperties;
}

const ChangeColor: React.FC<ChangeColorProps> = ({ text, textStyle }) => {
  const [colorIndex, setColorIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((prevIndex: number) => (prevIndex + 1) % colors.length);
    }, delay);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.div
      style={{ color: colors[colorIndex], ...textStyle }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, color: colors[colorIndex] }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2.5 }} // Slower transition duration for color change
    >
      {text}
    </motion.div>
  );
};

export default ChangeColor;
