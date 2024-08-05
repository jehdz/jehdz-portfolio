

import React, { useEffect, useState } from 'react';
import SectionHeader from "@/components/SectionHeader";
import Particles from "@/components/Particles";
import ContactCards from '@/components/ContactCards';
import SectionWrapper from '@/components/SectionWrapper';
import { EmailContact } from '@/components/EmailContact';

const Projects = () => {

  const sectionId = 'contact';
  return (

    <>
      <SectionWrapper id={sectionId}>
      <SectionHeader title="Contact" />
      <div className="flex flex-row gap-12 my-12">
        <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={200} />
        <ContactCards />
      </div>
      <EmailContact />
    </SectionWrapper>

  </>

  );
};

export default Projects;
