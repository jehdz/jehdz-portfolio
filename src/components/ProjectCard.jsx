'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Icon } from '@iconify/react';
import SkillPills from '@/components/SkillPills';

const ProjectCard = ({ project }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const linkVariants = {
        hover: {
            color: '#FFFFFF', // Change text color to white
        },
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="col-span-1 flex flex-col h-full"
        >
            <div className="p-5 flex justify-between flex-col h-full">
                <div>
                    <h5 className="text-xl font-bold mb-5">{project.title}</h5>
                    <div className='mb-5'>
                        <SkillPills skills={project.technology} />
                    </div>
                    <p className="text-slate-200 mb-4">{project.description}</p>
                </div>
                <div className="flex justify-between items-center mt-auto">
                    <motion.a
                        href="#"
                        className="text-slate-700 font-semibold text-sm z-30 flex gap-2 whitespace-nowrap"
                        whileHover="hover"
                        variants={linkVariants}
                        transition={{ duration: 0.25 }}
                    >
                        Learn more
                        {isClient && (
                            <motion.svg
                                className="w-[1.2rem] h-[1.2rem] text-white"
                                variants={{
                                    hover: { x: 10 },
                                }}
                                transition={{ duration: 0.25 }}
                            >
                                <Icon icon="line-md:arrow-right" width="1.2rem" height="1.2rem" />
                            </motion.svg>
                        )}
                    </motion.a>
                    <div className="flex space-x-4">
                        {isClient && (
                            <>
                                <motion.a
                                    href={project.githubLink}
                                    className="text-slate-200 z-30"
                                    whileHover={{ scale: 1.2 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    <Icon icon="bi:github" width="1.2rem" height="1.2rem" />
                                </motion.a>
                                <motion.a
                                    href={project.externalLink}
                                    className="text-slate-200 z-30"
                                    whileHover={{ scale: 1.5 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    <Icon icon="line-md:external-link" width="1.2rem" height="1.2rem" />
                                </motion.a>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
