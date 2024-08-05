"use client"

import { useScroll, useSpring, motion, useTransform  } from "framer-motion";
import Typewriter from "@/components/TypeWritter";
import Particles from "@/components/Particles";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import NavBar from "@/components/NavBar";
import { Animation } from "@/components/Animations/Animation";
import HoverLink from "@/components/HoverLink";



export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });


  const tilt = useTransform(scrollYProgress, [0, 1], [15, 0]); // Tilt from 15 degrees to 0 degrees


  const sentences = [
    'Transforming ideas into reality through code.',
    'Creating user-friendly interfaces and seamless user experiences.',
    'Always learning and adapting to the latest industry trends.',
    'Collaborating effectively with teams to achieve project goals.',
    'Passion for application development.'
  ];

  return (
    <>
      <NavBar />
      <main className="flex flex-col items-center justify-between p-20 pt-0 h-auto">
        <div className="flex flex-col items-start justify-start w-screen h-screen bg-gradient-to-b from-black via-zinc-600/20 to-black pl-20 pr-20 w-svw h-svw">
          <Particles className="absolute inset-0 -z-10 animate-fade-in bg-gradient-to-t from-slate-900 to-transparent" quantity={1000} />
          <div className="max-w-[1400px] w-full mx-auto mt-24">
            <div className="flex flex-row gap-24 h-[90vh]">
              <div className="w-1/2 flex flex-col justify-start gap-14 py-24">
              <div>
                <motion.div
                  initial={{ filter: "blur(10px)", y: 5, opacity: 0 }}
                  animate={{ filter: "none", y: 0, opacity: 1 }}
                  transition={{ duration: .6, delay: .3 }}
                  className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-4xl md:text-8xl whitespace-nowrap bg-clip-text bg-gradient-to-r from-stone-300 to-stone-950 bg-clip-text text-transparent font-semibold">
                  Jose
                </motion.div>

                <motion.div
                  initial={{ filter: "blur(10px)", y: 5, opacity: 0 }}
                  animate={{ filter: "none", y: 0, opacity: 1 }}
                  transition={{ duration: .6, delay: .6}}
                  className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-4xl md:text-8xl whitespace-nowrap bg-clip-text bg-gradient-to-r from-stone-300 to-stone-950 bg-clip-text text-transparent font-semibold">
                  Eduardo
                </motion.div>

                <motion.div
                  initial={{ filter: "blur(10px)", y: 5, opacity: 0 }}
                  animate={{ filter: "none", y: 0, opacity: 1 }}
                  transition={{ duration: .6, delay: .8 }}
                  className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-4xl md:text-8xl whitespace-nowrap bg-clip-text bg-gradient-to-r from-stone-300 to-stone-950 bg-clip-text text-transparent font-semibold">
                  Hernandez
                </motion.div>
              </div>


              <div className="flex gap-8"> 
                <HoverLink to="about">ABOUT ME</HoverLink>
                <HoverLink to="contact">CONTACT</HoverLink>
              </div>



              <motion.h2
                initial={{ opacity: 0}}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="font-bold text-sm text-whitesm:text-2xl md:text-2xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-4xl md:text-5xl whitespace-wrap bg-clip-text bg-gradient-to-r from-stone-300 to-stone-950 bg-clip-text text-transparent h-full"
              >
                <Typewriter sentences={sentences} />
              </motion.h2>
              </div>
              <div className="w-1/2 py-24 flex flex-col gap-8">


                <div className="flex flex-col gap-2">

                <motion.div
                  initial={{ filter: "blur(10px)", y: 10, opacity: 0 }}
                  animate={{ filter: "none", y: 0, opacity: 1 }}
                  transition={{ duration: .6, delay: 1.3}}
                  className="font-bold text-sm text-whitesm:text-2xl md:text-2xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-4xl md:text-5xl whitespace-wrap bg-clip-text bg-gradient-to-r from-stone-300 to-stone-950 bg-clip-text text-transparent">
                 00 JEHDZ
                </motion.div>


                <motion.div
                  initial={{ filter: "blur(10px)", y: 5, opacity: 0 }}
                  animate={{ filter: "none", y: 0, opacity: 1 }}
                  transition={{ duration: .6, delay: 1.6}}
                  className="font-bold text-sm text-whitesm:text-2xl md:text-2xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-4xl md:text-5xl whitespace-wrap bg-clip-text bg-gradient-to-r from-stone-300 to-stone-950 bg-clip-text text-transparent">
                  01 FRONT END DEVELOPER
                </motion.div>

                <motion.div
                  initial={{ filter: "blur(10px)", y: 5, opacity: 0 }}
                  animate={{ filter: "none", y: 0, opacity: 1 }}
                  transition={{ duration: .6, delay: 1.9}}
                  className="font-bold text-sm text-whitesm:text-2xl md:text-2xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-4xl md:text-5xl whitespace-wrap bg-clip-text bg-gradient-to-r from-stone-300 to-stone-950 bg-clip-text text-transparent">
                 02 CHICAGO LAND AREA
                </motion.div>

                </div>

                  <motion.div
                      initial={{ filter: "blur(10px)", y: 0, x: 600, opacity: 0 }}
                      animate={{ filter: "none", y: 0, opacity: 1, x: 0 }}
                      transition={{ duration: .6, delay: .8 }}
                      className="h-[50%]"
                    >
                    <Animation />

                </motion.div>

                <div className="flex flex-col gap-2">
                <motion.div
                  initial={{ filter: "blur(10px)", y: -10, opacity: 0 }}
                  animate={{ filter: "none", y: 0, opacity: 1 }}
                  transition={{ duration: .6, delay: 1.3}}
                  className="font-bold text-sm text-whitesm:text-2xl md:text-2xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-4xl md:text-5xl whitespace-wrap bg-clip-text bg-gradient-to-l from-stone-300 to-stone-950 bg-clip-text text-transparent text-right">
                 00 JEHDZ
                </motion.div>


                <motion.div
                  initial={{ filter: "blur(10px)", y: 5, opacity: 0 }}
                  animate={{ filter: "none", y: 0, opacity: 1 }}
                  transition={{ duration: .6, delay: 1.6}}
                  className="font-bold text-sm text-whitesm:text-2xl md:text-2xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-4xl md:text-5xl whitespace-wrap bg-clip-text bg-gradient-to-l from-stone-300 to-stone-950 bg-clip-text text-transparent text-right">
                  01 FRONT END DEVELOPER
                </motion.div>

                <motion.div
                  initial={{ filter: "blur(10px)", y: 5, opacity: 0 }}
                  animate={{ filter: "none", y: 0, opacity: 1 }}
                  transition={{ duration: .6, delay: 1.9}}
                  className="font-bold text-sm text-whitesm:text-2xl md:text-2xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-4xl md:text-5xl whitespace-wrap bg-clip-text bg-gradient-to-l from-stone-300 to-stone-950 bg-clip-text text-transparent text-right">
                 02 CHICAGO LAND AREA
                </motion.div>
                </div>
              </div>
            </div>

            
              <About />
              <Projects />
              <Experience />
              <Contact />
              


          </div>
        </div>
      </main>
    </>
  );
}