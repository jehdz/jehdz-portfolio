"use client";
import {  motion } from "framer-motion";

export default function FadeBlurHeader({text}) {
  return (
    <motion.div
        initial={{ filter: "blur(10px)", y: 5, opacity: 0 }}
        animate={{ filter: "none", y: 0, opacity: 1 }}
        transition={{ duration: .6, delay: .3 }}
        className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-4xl md:text-8xl whitespace-nowrap bg-clip-text bg-gradient-to-r from-stone-300 to-stone-950 bg-clip-text text-transparent font-semibold">
        {text}
    </motion.div>
  );
}
