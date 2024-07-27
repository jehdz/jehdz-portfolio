// src/components/CardCarousel.jsx
"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Card from "@/components/card"
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import React, { useState } from "react";

const socials = [
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/josehernandez1999/",
      label: "LinkedIn",
      handle: "@josehernandez1999",
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:hjose2142@gmail.com",
      label: "Email",
      handle: "hjose2142@gmail.com",
    },
    {
      icon: <Github size={20} />,
      href: "https://github.com/jehdz",
      label: "Github",
      handle: "jehdz",
    },
  ];
  
  const modulo = (m, n) => {
    return ((m % n) + n) % n;
  };
  
  export const CardCarousel = () => {
    const cardsLength = socials.length;
    const [front, setFront] = useState(0);
    const [swipeKeyframes, setSwipeKeyframes] = useState(0);
  
    function dragEnd(event, info) {
      if ((Math.abs(info.velocity.x) > 100) & (Math.abs(info.offset.x) > 200)) {
        setFront((front) => (front + 1) % cardsLength);
        setSwipeKeyframes(info.offset.x);
      }
    }
  
    return (
      <motion.section className="relative w-full h-full overflow-hidden flex justify-center items-center">
        {socials.map((s, index) => {
          const diff = modulo(index - front, cardsLength);
          return (
            <motion.article
              key={s.href}
              initial={false}
              animate={{
                zIndex: 10 * (cardsLength - diff),
                scale: 1.0 - 0.05 * diff,
                x: diff * 150, // Adjust this value to control the horizontal spacing
                rotate: diff === cardsLength - 1 ? [20 - 360, 0] : 0,
              }}
              transition={{
                duration: 0.5,
                rotate: {
                  duration: 0.7,
                },
              }}
              drag={front === index ? "x" : false}
              whileDrag={{
                rotate: "10deg",
                transition: {
                  duration: 0.1,
                },
              }}
              onDragEnd={dragEnd}
              dragSnapToOrigin
              className="absolute flex items-center justify-center"
              style={{
                left: `${50 - diff * 2}%`, // Adjust this value to control the initial horizontal positioning
                transform: "translateX(-50%)",
              }}
            >
              <Card>
                <div
                  href={s.href}
                  target="_blank"
                  className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16"
                >
                  <span
                    className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-black"
                    aria-hidden="true"
                  />
                  <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                              <Link
                                  href={s.href}
                                  target="_blank">
                                   {s.icon}
                              </Link>
                   
                  </span>
                  <div className="z-10 flex flex-col items-center">
                    <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                        
                      

                      <Link
                                  href={s.href}
                                  target="_blank">
                                   {s.handle}
                              </Link>

                    </span>
                    <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                      {s.label}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.article>
          );
        })}
      </motion.section>
    );
  };