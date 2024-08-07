"use client";
import { useScroll, useSpring, useTransform } from "framer-motion";
import ProjectPageNavBar from "@/components/ProjectPageNavBar";

export default function ProjectPageShell({children}) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const tilt = useTransform(scrollYProgress, [0, 1], [15, 0]); // Tilt from 15 degrees to 0 degrees

  return (
    <>
      <ProjectPageNavBar />
      <main className="w-full min-h-screen">
        {children}
      </main>
    </>
  );
}
