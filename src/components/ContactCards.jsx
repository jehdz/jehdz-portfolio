import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Card from "@/components/Card";

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

const ContactCards = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
  return (
    <>
      {socials.map((s, index) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true });

        return (
          <motion.div
            key={index}
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className={'w-[33%]'}
          >
            <Card>
              <div className="card p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24">
                <span
                  className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-black"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange bg-gradient-to-tr from-slate-900 to-transparent">
                  <Link href={s.href} target="_blank">
                    {s.icon}
                  </Link>
                </span>
                <div className="z-10 flex flex-col items-center">
                  <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display text-zinc-300">
                    <Link href={s.href} target="_blank">
                      {s.handle}
                    </Link>
                  </span>
                  <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {s.label}
                  </span>
                </div>
              </div>
            </Card>
          </motion.div>
        );
      })}
    </>
  );
};

export default ContactCards;
