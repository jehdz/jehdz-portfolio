
"use client";

import { Github, Linkedin, Mail } from "lucide-react";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import Particles from "@/components/particles";
import Card from "@/components/Card";

// import { motion } from "framer-motion"
import Link from "next/link";
import GradientLineBreak from "@/components/GradientLineBreak";

import { motion, useScroll, useSpring } from "framer-motion";


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


export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-20 pt-0">
        <div className="flex flex-col items-start justify-start w-screen h-screen overflow-hidden bg-gradient-to-b from-black via-zinc-600/20 to-black pl-20 pr-20">
          <nav className="my-16 animate-fade-in"> </nav>
          {/* <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" /> */}
          <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={1000} />
          <div className="max-w-[1400px] w-full mx-auto">
          <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text bg-gradient-to-r from-stone-300 to-stone-950 bg-clip-text text-transparent font-semibold">Jose <br></br> Eduardo <br></br> Hernandez</h1>


            <GradientLineBreak />


            <div className="text-center animate-fade-in">
            <h2 className="text-sm text-stone-500 sm:text-2xl md:text-4xl">
              Frontend Developer in the Chicago land area.
              </h2>
              <GradientLineBreak />

          </div>


            {/* <CardCarousel /> */}

            
          </div>
        </div>

        <div className="flex flex-col items-start justify-start w-screen overflow-hidden bg-gradient-to-b from-black via-zinc-600/20 to-black pl-20 pr-20">
        <h2 className="z-10 text-2xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-4xl md:text-7xl whitespace-nowrap bg-clip-text bg-gradient-to-r from-stone-300 to-stone-950 bg-clip-text text-transparent font-semibold w-full mb-24 text-center"> Contact Me</h2>
          <div className="max-w-[1400px] max-h-[400px] h-full w-full mx-auto flex justify-center align-center gap-4 relative">
          <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={200} />

            {socials.map((s, index) => (
              <Card key={index}>

                <div className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16 rounded-xl beam-border rounded-xl">
                  <span
                    className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-black"
                    aria-hidden="true"
                  />
                  <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                    <Link href={s.href} target="_blank">{s.icon}</Link>
                  </span>
                  <div className="z-10 flex flex-col items-center">
                    <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                      <Link href={s.href} target="_blank">{s.handle}</Link>
                    </span>
                    <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                      {s.label}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

        </div>
        
      </main>




    </>

  );
}
