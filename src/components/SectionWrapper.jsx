import React from 'react';

const SectionWrapper = ({id, children}) => {

  return (
    <div id={id} className="w-full">
       {children}
    </div>
  );
};

export default SectionWrapper;
