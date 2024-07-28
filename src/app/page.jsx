"use client";

import { useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import Typewriter from "@/components/TypeWritter";

import Particles from "@/components/particles";
import Card from "@/components/Card";
import GradientLineBreak from "@/components/GradientLineBreak";

const iconSize = 20;

const socials = [
  {
    icon: <Linkedin size={iconSize} />,
    href: "https://www.linkedin.com/in/josehernandez1999/",
    label: "LinkedIn",
    handle: "@josehernandez1999",
  },
  {
    icon: <Mail size={iconSize} />,
    href: "mailto:hjose2142@gmail.com",
    label: "Email",
    handle: "hjose2142@gmail.com",
  },
  {
    icon: <Github size={iconSize} />,
    href: "https://github.com/jehdz",
    label: "Github",
    handle: "jehdz",
  },
];

export default function Projects() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });


  const sentences = [
    'Transforming ideas into reality through code.',
    'Creating user-friendly interfaces and seamless user experiences.',
    'Always learning and adapting to the latest industry trends.',
    'Collaborating effectively with teams to achieve project goals.',
    'Passion for application development.'
  ];
  
  
  

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-20 pt-0">
        <div className="flex flex-col items-start justify-start w-screen h-screen overflow-hidden bg-gradient-to-b from-black via-zinc-600/20 to-black pl-20 pr-20">
          <nav className="my-16 animate-fade-in"></nav>
          <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={1000} />
          <div className="max-w-[1400px] w-full mx-auto">
            <div className="flex flw-row">
              <div className="w-1/2">
                <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-4xl md:text-8xl whitespace-nowrap bg-clip-text bg-gradient-to-r from-stone-300 to-stone-950 bg-clip-text text-transparent font-semibold">
                  Jose <br></br> Eduardo <br></br> Hernandez
                </h1>

                <h2 className="text-sm text-stone-400 sm:text-2xl md:text-4xl font-semibold my-16">
                  <Typewriter sentences={sentences} />
                </h2>
              </div>

            </div>


            <div className="w-1/2">
              
            </div>

            {/* <GradientLineBreak /> */}
          </div>
        </div>
      </main>
    </>
  );
}
