import React from 'react';
import SectionHeader from "@/components/SectionHeader";
import SectionWrapper from '@/components/SectionWrapper';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/util/projects';
import ShineBorderWrapper from '@/components/ShineBorderWrapper';
import {v4 as uuidv4} from 'uuid'
const Projects = () => {
const sectionId = 'projects';

  return (
    <SectionWrapper id={sectionId}>
      <SectionHeader title="Projects" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-12">
        {projects.map((project) => (
          <ShineBorderWrapper
            key={uuidv4()}
            borderWidth={1}
          >
            <ProjectCard project={project} />
          </ShineBorderWrapper>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
