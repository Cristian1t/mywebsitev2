import React, { createContext, useState } from 'react';
export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [activeProject, setProject] = useState();

  return (
    <ProjectContext.Provider value={{ activeProject, setProject }}>
      {children}
    </ProjectContext.Provider>
  );
};
