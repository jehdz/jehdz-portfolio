"use client";


import { useScroll, useSpring, motion, useTransform  } from "framer-motion";
import NavBar from "@/components/NavBar";



export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });


  const tilt = useTransform(scrollYProgress, [0, 1], [15, 0]); // Tilt from 15 degrees to 0 degrees





  return (
    <>
      <NavBar />
      <main className="flex flex-col items-center justify-between p-20 pt-0 h-auto">



                <h1> Abt </h1>
      </main>
    </>
  );
}