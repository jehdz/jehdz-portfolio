import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeader from "@/components/SectionHeader";
import SkillPills from '@/components/SkillPills';
import { workSkills } from "@/util/skills";
import SectionWrapper from '@/components/SectionWrapper';

const Experience = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    const isInView1 = useInView(ref1, { once: true });
    const isInView2 = useInView(ref2, { once: true });
    const isInView3 = useInView(ref3, { once: true });

    const sectionId = 'experience';

    return (
        <SectionWrapper id={sectionId}>
            < motion.div
                ref={ref1}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView1 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 1 }}
            >
                <SectionHeader title="Experience" direction={'right'} />
            </motion.div>

            <div className="flex flex-col gap-12 my-12">
                <motion.div
                    ref={ref2}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView2 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: .5 }}
                    className="p-6 bg-black text-white font-sans"
                >
                    <div className="mb-4">
                        <div className='flex flex-row justify-between items-end'>
                            <h2 className="text-2xl font-bold text-white">Abt Electronics</h2>
                            <p className="text-gray-400">2021 - Present</p>
                        </div>
                        <div className='flex flex-row justify-between items-end'>
                            <h3 className="text-xl font-semibold text-slate-500">Front-end Engineer</h3>
                            <p className="text-gray-400">Glenview, Il</p>
                        </div>
                    </div>
                    <p className="mb-4 text-white">
                        I help build and scale Google Photos. Increased throughput of our primary services by 70%. Migrated backend service from Java to Go. Also helped make it look prettier.
                    </p>
                    <SkillPills skills={workSkills} />
                </motion.div>

                <motion.div
                    ref={ref3}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView3 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: .5 }}
                    className="p-6 bg-black text-white font-sans"
                >
                    <div className="mb-4">
                        <div className='flex flex-row justify-between items-end'>
                            <h2 className="text-2xl font-bold text-white">Wicked Fish Tacos</h2>
                            <p className="text-gray-400">2019 - 2021</p>
                        </div>
                        <div className='flex flex-row justify-between items-end'>
                            <h3 className="text-xl font-semibold text-slate-500">Graphic Designer</h3>
                            <p className="text-gray-400">Los Angeles, CA</p>
                        </div>
                    </div>
                    <p className="mb-4 text-white">
                        I help build and scale Google Photos. Increased throughput of our primary services by 70%. Migrated backend service from Java to Go. Also helped make it look prettier.
                    </p>
                </motion.div>
            </div>

        </SectionWrapper>
    );
};

export default Experience;
