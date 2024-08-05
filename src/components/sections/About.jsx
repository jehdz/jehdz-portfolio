import React, { useRef } from 'react';
import SectionHeader from "@/components/SectionHeader";
import SkillsComponent from "@/components/SkillComponent";
import { motion, useInView } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const sectionId = 'about';

  return (
    <SectionWrapper id={sectionId}>
      <SectionHeader title="About" ref={ref} isInView={isInView} />
      <div className="flex flex-row gap-12 my-12">
          <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1 }}
              className="mt-4 w-1/2"
            >
            <p className="text-xl p-8 bg-black p-4 rounded-xl bg-gradient-to-tr from-slate-900/50 to-transparent border border-zinc-600">
              I am a dedicated and passionate developer specializing in frontend development, with a solid foundation in backend development gained through professional work and personal projects. <br /> <br /> I love creating innovative and engaging digital experiences that bring ideas to life. My educational background includes a BA in Computer Science and a minor in Graphic Design from Loyola University, which equips me with a unique blend of technical skills and artistic insight.<br /> <br /> Whether working on a team or independently, I thrive on challenges and continuously seek opportunities to learn and grow in the ever-evolving field of development.
            </p>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="mt-4 w-1/2"
          >
            <SkillsComponent />
          </motion.div>
      </div>
    </SectionWrapper>

  );
};

export default About;
