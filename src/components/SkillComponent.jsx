import { Icon } from '@iconify/react';
import React from 'react';
import SkillPills from "@/components/SkillPills";
import {  workSkills, forFunSkills, otherSkills } from "@/util/skills";


const SkillsComponent = () => {

  return (
    <div className="p-6 bg-black text-white font-sans">
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="mr-2  bg-gradient-to-tr from-slate-900 to-transparent text-black p-1 rounded-md">
          <Icon icon="ant-design:code-filled" width="2rem" height="2rem" color='#64748b' />
          </div>
          <h2 className="text-xl font-bold">Use at work</h2>
        </div>
        <SkillPills skills={workSkills} />
      </div>
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="mr-2 text-black p-1 rounded-md">
          <Icon icon="octicon:code-of-conduct-16" width="2rem" height="2rem" color='#64748b' />
          </div>
          <h2 className="text-xl font-bold">Use for fun</h2>
        </div>
        <SkillPills skills={forFunSkills} />
      </div>

      <div>
        <div className="flex items-center mb-4">
          <div className="mr-2 text-black p-1 rounded-md">
          <Icon icon="tabler:tools" width="2rem" height="2rem" color='#64748b' />
          </div>
          <h2 className="text-xl font-bold">Other Skills</h2>
        </div>
        <SkillPills skills={otherSkills} />
      </div>
    </div>
  );
};

export default SkillsComponent;
